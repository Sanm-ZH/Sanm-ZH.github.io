import KanBanNiang from './KanBanNiang.vue'
export default ({ Vue }) => {
  if ('development' !== process.env.NODE_ENV) {
    Vue.component('KanBanNiang', KanBanNiang)
  }
}
