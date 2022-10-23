<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\VistasUsuario;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles(){
        $roles = VistasUsuario::select('vistas.name')->join('vistas','vistas.id','=','vistas_usuarios.vistas_id')
            ->join('users','users.id','=','vistas_usuarios.user_id')->where(['vistas_usuarios.user_id' => Auth()->user()->id])
            ->get();
        return $roles;
    }

    public function AauthAcessToken()
    {
        return $this->hasMany('App\Models\OauthAccessToken');
    }
}
