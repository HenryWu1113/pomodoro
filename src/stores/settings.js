import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
  id: 'settings',
  state() {
    return {
      selectedAlarm: 1,
      alarms: [
        { id: 1, name: 'Alarm', file: new URL('../assets/alarm.mp3', import.meta.url).href },
        { id: 2, name: 'Yay', file: new URL('../assets/yay.mp3', import.meta.url).href },
        { id: 3, name: 'Bell', file: new URL('../assets/bell01.wav', import.meta.url).href },
        { id: 4, name: 'Tower-bell', file: new URL('../assets/tower-bell.wav', import.meta.url).href }
      ]
    }
  },
  getters: {
    selectedAlarmFile() {
      const idx = this.alarms.findIndex(a => a.id === this.selectedAlarm)
      return this.alarms[idx].file
    }
  },
  persist: {
    key: 'pomodoro-setting',
    paths: ['selectedAlarm']
  }
})
