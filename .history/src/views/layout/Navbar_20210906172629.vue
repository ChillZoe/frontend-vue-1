<template>
  <b-navbar toggleable="lg"
            type="dark"
            variant="info">
    <b-container>
      <b-navbar-brand @click="$router.push({name:'Home'})">OceanLearn</b-navbar-brand>
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
            <b-dropdown-item @click="logout">登出</b-dropdown-item>
          </b-nav-item-dropdown>
          <div v-if="!userInfo">
            <b-navbar-item id='1'
                           v-if="$route.name!='login'"
                           @click="$router.replace({ name: 'login' })">
              登录
            </b-navbar-item>

            <b-navbar-item id='2'
                           v-if="$route.name!='register'"
                           @click="$router.replace({ name: 'register' })">
              注册
            </b-navbar-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    userInfo: (state) => state.userModule.userInfo,
  }),
  methods: mapActions('userModule', ['logout']),
};
</script>
<style lang="scss" scoped>
</style>
