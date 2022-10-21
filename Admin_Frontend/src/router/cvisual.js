export default [
    {
        path: "/",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ '../modules/account/login')
    }
];