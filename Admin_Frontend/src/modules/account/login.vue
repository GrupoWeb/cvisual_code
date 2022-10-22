<script>
import axios from "axios";

import Layout from "@/router/layouts/auth";
import {
  authMethods,
  // authFackMethods,
  notificationMethods,
} from "@/state/helpers";
import { mapState } from "vuex";

import appConfig from "@/app.config";
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  page: {
    title: "Login",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
  },
  data() {
    return {
      email: "admin@themesbrand.com",
      password: "123456789",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
    };
  },
  validations: {
    email: {
      required: helpers.withMessage(
        "correo electronico es requerido",
        required
      ),
      email: helpers.withMessage(
        "Por favor introduzca un correo electrónico válido",
        email
      ),
    },
    password: {
      required: helpers.withMessage("se requiere contraseña", required),
    },
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...authMethods,
    ...notificationMethods,
    tryToLogIn() {
      this.submitted = true;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "authapi") {
          axios
            .post(process.env.VUE_APP_SERVER + "login", {
              email: this.email,
              password: this.password,
            })
            .then((res) => {
              const { access_token } = res.data;
              this.guardarUsuario(access_token);
              this.$router.push({ name: "default" });
            });
        }
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-soft-login bg-primary-login">
            <div class="row">
              <div class="col-7">
                <div class="text-primary-login p-4">
                  <h5 class="text-primary-login">Signs</h5>
                  <p>Comunicación Visual S.A</p>
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img
                  src="@/assets/images/profile-img.png"
                  alt
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <b-alert
              v-model="isAuthError"
              variant="danger"
              class="mt-3"
              dismissible
              >{{ authError }}</b-alert
            >
            <div
              v-if="notification.message"
              :class="'alert ' + notification.type"
            >
              {{ notification.message }}
            </div>

            <b-form class="p-2 pt-5" @submit.prevent="tryToLogIn">
              <b-form-group
                class="mb-3"
                id="input-group-1"
                :label="$t('login.email')"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="email"
                  type="text"
                  placeholder="Enter email"
                  :class="{
                    'is-invalid': submitted && v$.email.$error,
                  }"
                ></b-form-input>
                <div
                  v-for="(item, index) in v$.email.$errors"
                  :key="index"
                  class="invalid-feedback"
                >
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
              </b-form-group>

              <b-form-group
                class="mb-3"
                id="input-group-2"
                :label="$t('login.password')"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="password"
                  type="password"
                  placeholder="Enter password"
                  :class="{
                    'is-invalid': submitted && v$.password.$error,
                  }"
                ></b-form-input>
                <div
                  v-if="submitted && v$.password.$error"
                  class="invalid-feedback"
                >
                  <span v-if="v$.password.required.$message">{{
                    v$.password.required.$message
                  }}</span>
                </div>
              </b-form-group>

              <div class="mt-3 d-grid">
                <b-button type="submit" variant="danger" class="w-xs">
                  <i
                    class="bx bx-loader bx-spin font-size-16 align-middle me-2"
                  ></i>
                  {{ $t("login.authentication.text") }}
                </b-button>
              </div>

              <div class="mt-4 text-center">
                <router-link to="/forgot-password" class="text-muted">
                  <i class="mdi mdi-lock me-1"></i> ¿Olvidaste tu contraseña?
                </router-link>
              </div>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>