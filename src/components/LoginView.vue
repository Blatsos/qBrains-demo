<template>
  <v-container style="position: relative; top: 10%" class="text-lg-center">
    <v-row>
      <v-col cols="1" sm="3" md="3"></v-col>
      <v-col cols="1" sm="6" md="6">
        <v-card elevation="5">
          <v-card-title primary-title>
            <h4>Login</h4>
          </v-card-title>
          <v-card-text>
            <ValidationObserver v-slot="{ handleSubmit }">
              <v-form @submit.prevent="handleSubmit(loginHandler())">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="StoreName"
                  :rules="{
                    regex: /^[A-Za-z0-9!@#$%]*$/,
                    required: true,
                    max: 15,
                  }"
                >
                  <v-text-field
                    v-model="storeName"
                    :error-messages="errors"
                    prepend-icon="mdi-store"
                    name="StoreName"
                    label="Store Name"
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Username"
                  :rules="{
                    regex: /^[A-Za-z0-9!@#$%]*$/,
                    required: true,
                    max: 15,
                  }"
                >
                  <v-text-field
                    v-model="username"
                    :error-messages="errors"
                    prepend-icon="mdi-account"
                    name="Username"
                    label="Username"
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Password"
                  :rules="{
                    regex: /^[A-Za-z0-9!@#\$%]*$/,
                    required: true,
                    max: 10,
                    min: 4,
                  }"
                >
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    prepend-icon="mdi-lock"
                    name="Password"
                    label="Password"
                    type="password"
                    autocomplete="on"
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="ConsumerKey"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="consumerKey"
                    :error-messages="errors"
                    prepend-icon="mdi-key"
                    name="ConsumerKey"
                    type="password"
                    label="Consumer Key"
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="ConsumerSecret"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="consumerSecret"
                    :error-messages="errors"
                    prepend-icon="mdi-account-key"
                    name="ConsumerSecret"
                    type="password"
                    label="Consumer Secret"
                  ></v-text-field>
                </ValidationProvider>
                <v-card-actions>
                  <v-btn
                    :loading="loadingLogin"
                    :color="primaryColor"
                    type="submit"
                    primary
                    large
                    block
                    >Login</v-btn
                  >
                </v-card-actions>
              </v-form>
            </ValidationObserver>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1" sm="3" md="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, max, min, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import { mapActions } from "vuex";
import Colors from "../Constants/Colors";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} cannot be empty",
});
extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
}),
  extend("min", {
    ...min,
    message: "{_field_} may not be less than {length} characters",
  }),
  extend("regex", {
    ...regex,
    message: "{_field_} can contain only letters, numbers and symbols(!@#$%)",
  });

export default {
  name: "LoginView",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    primaryColor: Colors.primaryColor,
    loadingLogin: false,
    storeName: null,
    username: null,
    password: null,
    consumerKey: null,
    consumerSecret: null,
  }),
  methods: {
    ...mapActions("user", ["loginUser"]),
    loginHandler() {
      this.loadingLogin = !this.loadingLogin;
      this.loginUser({
        storeName: this.storeName,
        userName: this.username,
        password: this.password,
        consumerKey: this.consumerKey,
        consumerSecret: this.consumerSecret,
      });
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
</style>
