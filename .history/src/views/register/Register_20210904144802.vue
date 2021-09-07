<template>
  <div class="register">
    <b-row class="mt-5">
      <b-col md="8"
             offset-md="2"
             lg="6"
             offset-lg="3">
        <b-card title="注册">
          <b-form>
            <b-form-group label="姓名">
              <b-form-input id="input-1"
                            v-model="$v.user.name.$model"
                            type="text"
                            placeholder="输入您的名称（选填）"></b-form-input>
            </b-form-group>
            <b-form-group label="手机号">
              <b-form-input id="input-1"
                            v-model="user.telephone"
                            type="number"
                            placeholder="输入您的手机号"></b-form-input>
              <b-form-invalid-feedback :state="validation">
                手机号必须为11位
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation">
                手机号符合11位
              </b-form-valid-feedback>
            </b-form-group>
            <b-form-group label="密码">
              <b-form-input id="input-1"
                            v-model="user.password"
                            type="password"
                            placeholder="输入您的密码"></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-button @click="register"
                        variant="outline-primary"
                        block>注册</b-button>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  data () {
    return {
      user: {
        name: '',
        telephone: '',
        password: '',
      },
      validation: null,
    };
  },
  methods: {
    register () {
      if (this.user.telephone.length !== 11) {
        this.validation = false;
        return;
      }
      this.validation = true;

      console.log('register');
    },
    validations: {
      user: {
        telephone: {
          required,
          minLength: minLength(11),
          maxLength: maxLength(11),
        },
      },
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
