<template>
  <b-navbar toggleable="lg"
            type="dark"
            variant="info">
    <b-container>
      <b-navbar-brand herf="#">OceanLearn</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse"
                  is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-item @click="$router.replace({ name: 'login' })">
            登录
          </b-navbar-item>

          <b-navbar-item @click="$router.replace({ name: 'register' })">
            注册
          </b-navbar-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
</style>
