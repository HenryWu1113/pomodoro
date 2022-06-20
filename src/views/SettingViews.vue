<template lang="pug">
v-row#settings
  v-col(cols="12")
    h1.text-center 設定
  v-col(cols="12")
    v-table
      thead
        tr
          th 名稱
          th 試聽
          th 選擇
      tbody
        tr(v-for="alarm in alarms")
          td {{ alarm.name }}
          td
            audio(controls :src="alarm.file")
          td
            v-radio(v-model="selectedAlarm" :value="alarm.id")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { selectedAlarm, alarms } = storeToRefs(settings)
</script>
