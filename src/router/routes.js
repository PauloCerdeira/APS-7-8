
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/InicioTempo.vue') },
      { path: '/clima', component: () => import('src/pages/ClimaTempo.vue') },
      { path: '/denuncia', component: () => import('src/pages/FormularioDenuncia.vue') },
      { path: '/gerenciamento', component: () => import('src/pages/GerenciamentoPoluicao.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
