import storageService from '@/service/storageService';

const userModule = { // eslint-disable-line no-unused-vars
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: JSON.parse(storageService.get(storageService.USER_INFO)),
  },
  mutations: {
    SET_TOKEN (state, token) {
      storageService.set(storageService.USER_TOKEN, token);
      state.token = token;
    },
    SET_USERINFO (state, userInfo) {
      storageService.set(storageService.USER_TOKEN, JSON.stringify(userInfo));
      state.userInfo = userInfo;
    },
  },
  actions: {
    register (commit, { name, telephone, password }) {
      return new Promise((resolve, reject) => {
        userService.register(this.user).then((res) => {
          this.SET_TOKEN(res.data.data.token);
          return userService.info();
        }).then((response) => {
          this.SET_USERINFO(response.data.data.user);
          this.$router.replace({ name: 'Home' });
        });
      });
    },
  },
};

export default userModule;
