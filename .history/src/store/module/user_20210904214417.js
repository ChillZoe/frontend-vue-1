const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN)
    userInfo: storageService.get(storageService.USER_INFO)
  }
}
