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
          <b-nav-item-dropdown right
                               v-if="userInfo">
            <template v-slot:button-content>
              <em>{{userInfo.name}}</em>
            </template>
            <b-dropdown-item href="#">个人主页</b-dropdown-item>
            <b-dropdown-item href="#">登录</b-dropdown-item>
          </b-nav-item-dropdown>
          <div>
            <b-navbar-item @click="$router.replace({ name: 'login' })">
              登录
            </b-navbar-item>

            <b-navbar-item @click="$router.replace({ name: 'register' })">
              注册
            </b-navbar-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
import storageService from '@/service/storageService';

export default {
  computed: {
    userInfo () {
      return JSON.parse(storageService.get(storageService.USER_INFO));
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
