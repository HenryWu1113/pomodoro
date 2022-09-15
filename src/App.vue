<template lang="pug">
v-app
  v-app-bar(color="accent" height="100")
    v-btn.text-white.text-h2.font-weight-bold(to='./' v-if="$vuetify.theme.name==='dark'") Pomodoro
    v-btn.text-black.text-h2.font-weight-bold(to='./' v-else) Pomodoro
    v-spacer
    v-btn.d-none.d-sm-flex(icon to='/')
      v-icon mdi-timer
    v-btn.d-none.d-sm-flex(icon to='/list')
      v-icon mdi-format-list-bulleted
    v-btn.d-none.d-sm-flex(icon to='/settings')
      v-icon mdi-cog
    v-btn.d-none.d-sm-flex(icon v-if="notify" @click="toggleNotify")
      v-icon mdi-bell
    v-btn.d-none.d-sm-flex(icon v-else @click="toggleNotify")
      v-icon mdi-bell-off
    v-btn.d-none.d-sm-flex(icon @click="toggleTheme")
      v-icon mdi-theme-light-dark
    v-btn.d-flex.d-sm-none(icon @click="dialog=true")
      v-icon mdi-chevron-double-down
    v-dialog(v-model="dialog")
      v-card
        v-card-title.d-flex 
          v-spacer
          v-btn(icon @click="dialog=false")
            v-icon mdi-window-close
        v-card-text.d-flex.align-center
          v-btn.d-flex(icon to='/' @click="dialog=false")
            v-icon mdi-timer
          v-btn.d-flex(icon to='/list' @click="dialog=false")
            v-icon mdi-format-list-bulleted
          v-btn.d-flex(icon to='/settings' @click="dialog=false")
            v-icon mdi-cog
          v-btn.d-flex(icon v-if="notify" @click="toggleNotify")
            v-icon mdi-bell
          v-btn.d-flex(icon v-else @click="toggleNotify")
            v-icon mdi-bell-off
          v-btn.d-flex(icon @click="toggleTheme")
            v-icon mdi-theme-light-dark
  v-main
    router-view(v-slot="{ Component }")
      keep-alive(include="HomeView")
        component(:is="Component")
  //- footerPart
  //- v-footer(dark padless fixed="bottom")
  //-   v-card(class="flex" flat tile width="100%")
  //-     v-card-title
  //-       strong Get connected with us on social networks!
  //-       v-spacer
  //-       v-btn(icon to='./')
  //-         v-icon mdi-facebook
  //-       v-btn(icon to='./')
  //-         v-icon mdi-twitter
  //-       v-btn(icon to='./')
  //-         v-icon mdi-youtube
  //-       v-btn(icon to='./')
  //-         v-icon mdi-instagram
  //-     v-card-text(class="py-2 white--text text-center") 2022 - Vuetify
</template>

<script setup>
import { useTheme } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
import { ref } from 'vue'
// import footerPart from './components/footerPart.vue'
const list = useListStore()
const { notify } = storeToRefs(list)
const { toggleNotify } = list
const dialog = ref(false)

const theme = useTheme()
const toggleTheme = () => {
  theme.name.value = theme.current.value.dark ? 'light' : 'dark'
}
</script>
