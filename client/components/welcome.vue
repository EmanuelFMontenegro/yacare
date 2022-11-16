<template lang='pug'>
  v-app
    .onboarding
      .onboarding-content
        img.animated.fadeIn(src='/_assets/img/splash/yaca-hori.png' alt='Yacaré')
        .headline.animated.fadeInUp {{ $t("Bienvenido al Portal de Yacaré") }}
        .subtitle-1.mt-3.animated.fadeInUp.wait-p1s {{ $t("ingresa y crea tu documentación") }}
        div
          v-btn.mt-5.mx-3.animated.fadeInUp.wait-p2s(color='primary', :href='`/e/` + locale + `/home`', x-large)
            v-icon(left) mdi-plus
            span {{ $t('Crea tu pagina ') }}
          v-btn.mt-5.mx-3.animated.fadeInUp.wait-p3s(color='primary', href='/a', x-large)
            v-icon(left) mdi-view-dashboard
            span {{ $t('Administracion') }}

</template>

<script>

export default {
  props: {
    locale: {
      type: String,
      default: 'en'
    }
  },
  data() {
    return { }
  }
}
</script>

<style lang='scss'>

</style>
