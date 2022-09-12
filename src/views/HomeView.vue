<template lang="pug">
//- v-carousel(
//-   height="750"
//-   cycle
//-   interval="4000"
//-   light
//-   hide-delimiter-background
//- )
//-   v-carousel-item(v-for="(pic, idx) in pics"
//-   :key="idx"
//-   :src="pic.src"
//-   cover)
v-container
  .circle1(v-if="$vuetify.theme.name==='dark'")
    v-row.text-center
      v-col(cols="12")
        h1.font-weight-bold {{ currentText }}
        h1.font-weight-bold.mt-5  {{ timeText }}
      v-col(cols="12")
        v-btn.mx-3(icon color="white" variant="outlined" v-if="status !== 1" @click="startTimer")
          v-icon mdi-play
        v-btn.mx-3(icon color="white" variant="outlined" v-else @click="pauseTimer")
          v-icon mdi-pause
        v-btn.mx-3(icon color="white" variant="outlined" v-if="current.length > 0" @click="finishTimer(true)")
          v-icon mdi-skip-next
    .circle1_small
  .circle2(v-else)
    v-row.text-center
      v-col(cols="12")
        h1.font-weight-bold {{ currentText }}
        h1.font-weight-bold.mt-5   {{ timeText }}
      v-col(cols="12")
        v-btn.mx-3(icon color="black" variant="outlined" v-if="status !== 1" @click="startTimer")
          v-icon mdi-play
        v-btn.mx-3(icon color="black" variant="outlined" v-else @click="pauseTimer")
          v-icon mdi-pause
        v-btn.mx-3(icon color="black" variant="outlined" v-if="current.length > 0" @click="finishTimer(true)")
          v-icon mdi-skip-next
</template>

<style scoped lang="scss">
// html,
// body {
//   width: 100%;
//   height: 100%;
//   position: relative;
// }

// @keyframes shining {
//   50% {
//     filter: drop-shadow(0 0 0rem white);
//   }
// }

// .circle1 {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   // margin: auto;
//   width: 850px;
//   aspect-ratio: 1 / 1;
//   background: black;
//   border-radius: 50%;
//   border: 50px solid white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   filter: drop-shadow(0 0 1rem white);
//   animation: shining infinite ease-in-out 2s;
// }

// .circle2 {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   // margin: auto;
//   width: 850px;
//   aspect-ratio: 1 / 1;
//   background: white;
//   border-radius: 50%;
//   border: 50px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   filter: drop-shadow(0 0 1rem black);
//   animation: shining infinite ease-in-out 2s;
// }
</style>

<script setup>
import { computed, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'
import { useTheme } from 'vuetify'

const list = useListStore()
const { current, items, timeleft } = storeToRefs(list)
const { countdown, start, finish } = list
const theme = useTheme()

const settings = useSettingsStore()
const { selectedAlarmFile } = storeToRefs(settings)

const currentText = computed(() => {
  return current.value.length > 0 ? current.value : items.value.length > 0 ? '點擊開始' : '沒有事項'
})
const timeText = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})

let timer
// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const status = ref(0)

const pauseTimer = () => {
  status.value = 2
  clearInterval(timer)
}

const finishTimer = (skip) => {
  clearInterval(timer)
  status.value = 0
  finish()
  if (!skip) {
    const audio = new Audio()
    audio.src = selectedAlarmFile.value
    audio.play()
  }
  if (items.value.length > 0) {
    startTimer()
  }
}

const startTimer = () => {
  if (status.value === 0 && items.value.length > 0) {
    start()
  }
  if (current.value.length > 0) {
    status.value = 1
    timer = setInterval(() => {
      countdown()
      if (timeleft.value === 0) {
        finishTimer(false)
      }
    }, 1000)
  }
}

const pics = reactive([
  {
    src: 'https://d14h23u8rn264x.cloudfront.net/upload_files/fonlego-rwd/club/pomodoro-technique.jpg'
  },
  {
    src: 'https://cdn2.ettoday.net/images/5138/5138597.jpg',
  },
  {
    src: 'https://www.smartlinkin.com.tw/data/Article/2899/Article_f49a8c1804bc4da711e174e.jpg?v=20181126001',
  }
])

</script>
