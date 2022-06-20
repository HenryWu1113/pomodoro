<template lang="pug">
v-app
  v-app-bar(color="primary")
    v-app-bar-title 番茄鐘
    v-spacer
    v-btn(icon to='/')
      v-icon mdi-timer
    v-btn(icon to='/list')
      v-icon mdi-format-list-bulleted
    v-btn(icon to='/settings')
      v-icon mdi-cog
    v-btn(icon v-if="notify" @click="toggleNotify")
      v-icon mdi-bell
    v-btn(icon v-else @click="toggleNotify")
      v-icon mdi-bell-off
  v-main
    v-container
      router-view(v-slot="{ Component }")
        keep-alive(include="HomeView")
          component(:is="Component")
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
const list = useListStore()
const { notify } = storeToRefs(list)
const { toggleNotify } = list
</script>
