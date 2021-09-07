const userRoutes = [
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/Register.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/register/Login.vue'),
  },
];
export default userRoutes;
