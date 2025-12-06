import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/inter-observer',
      name: 'InterObserver',
      component: () => import('../views/InterObsView.vue'),
    },
    {
      path: '/snap-scroll',
      name: 'SnapScroll',
      component: () => import('../views/SnapScrollView.vue'),
    },
    {
      path: '/animation-timeline-range',
      name: 'AnimationTimelineRange',
      component: () => import('../views/AnimationTimelineRangeView.vue'),
    },
    {
      path: '/svg-mask',
      name: 'SvgMask',
      component: () => import('../views/SvgMaskView.vue'),
    },
    {
      path: '/blend-modes',
      name: 'BlendModes',
      component: () => import('../views/BlendModesView.vue'),
    },
    {
      path: '/props',
      name: 'Props',
      component: () => import('../views/PropsView.vue'),
    },
    {
      path: '/wp-load',
      name: 'WpLoad',
      component: () => import('../views/WpLoadView.vue'),
    },
    {
      path: '/action-trigger',
      name: 'ActionTrigger',
      component: () => import('../views/ActionTriggerView.vue'),
    },
    {
      path: '/nested/:id',
      name: 'Nested',
      component: () => import('../views/NestedView.vue'),
    },
    {
      path: '/google-maps',
      name: 'GoogleMaps',
      component: () => import('../views/GoogleMapsView.vue'),
    },
    {
      path: '/scroll-into-view',
      name: 'ScrollIntoView',
      component: () => import('../views/ScrollintoviewView.vue'),
    },
    {
      path: '/i18n',
      name: 'i18n',
      component: () => import('../views/i18nView.vue'),
    },
    {
      path: '/youtube',
      name: 'Carrousel + Youtube',
      component: () => import('../views/YoutubeView.vue'),
    },
    {
      path: '/:lang(en|fr|ja|es)?',
      name: 'i18n with nested routes',
      component: () => import('../views/i18nView.vue'),
    },
  ],
})

export default router
