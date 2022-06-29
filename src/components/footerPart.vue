<template lang="pug">
v-card
  v-footer(dark padless)
    v-card(flat tile width="100%")
      v-card-title
        strong Get connected with us on social networks!
        v-spacer
        v-btn(icon to='./')
          v-icon mdi-facebook
        v-btn.media(icon to='./')
          v-icon mdi-twitter
        v-btn.media(icon to='./')
          v-icon mdi-youtube
        v-btn.media(icon to='./')
          v-icon mdi-instagram
      v-card-text(class="py-2 white--text text-center bb flex")
        v-icon mdi-copyright
        span 2022 - Vuetify
</template>