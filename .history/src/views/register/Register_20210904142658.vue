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
                            v-model="user.name"
                            type="text"
                            placeholder="输入您的名称（选填）"></b-form-input>
            </b-form-group>
            <b-form-group label="手机号">
              <b-form-input id="input-1"
                            v-model="user.telephone"
                            type="number"
                            placeholder="输入您的手机号"></b-form-input>
              <b-form-text id="password-help-block"
                           text-variant="danger"
                           v-if="showTelephoneValidate">
                手机号必须为11位
              </b-form-text>
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

export default {
  data () {
    return {
      user: {
        name: '',
        telephone: '',
        password: '',
      },
      showTelephoneValidate: false,
    };
  },
  methods: {
    register () {
      if (this.user.telephone.length !== 11) {
        this.showTelephoneValidate = true;
        return;
      }
      console.log('register');
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
