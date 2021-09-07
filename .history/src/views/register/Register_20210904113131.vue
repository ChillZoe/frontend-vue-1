<template>
  <div class="register">
    <b-form>
      <b-form-group
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="user.name"
          type="text"
          placeholder="输入您的名称（选填）"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="user.telephone"
          type="number"
          placeholder="输入您的名称（选填）"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="user.password"
          type="password"
          placeholder="输入您的名称（选填）"
        ></b-form-input>
      </b-form-group>
    </b-form>
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
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
