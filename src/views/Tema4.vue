<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 #[em Pitch document]


    .row.fondo-t4.align-items-center.py-4.py-lg-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-5.mb-4(data-aos="fade-right")
            p Un #[em pitch] es una presentación concisa y persuasiva de una idea, producto o proyecto. En el contexto de videojuegos, un #[em pitch] es esencial para atraer inversores, colaboradores o simplemente para obtener la aprobación de un equipo o jefe de proyecto.
            .bg-2.br-10.p-4
              p.mb-0 Un #[em Pitch Document] es un documento de presentación utilizado para describir una idea de videojuego de manera concisa y persuasiva. Su propósito es capturar el interés de posibles inversores, editores o colaboradores en las primeras etapas de desarrollo. A diferencia del #[em Game Document], que es un documento detallado y exhaustivo sobre todos los aspectos del juego, el #[em Pitch Document] es breve y se centra en los puntos clave. A continuación, se presenta una serie de videos, en los cuales se explica el #[em Pitch Document]: 
          .col-lg-7.mb-4.d-none.d-lg-flex(data-aos="fade-left")
            img(src='@/assets/curso/temas/t4/img.png', alt='')

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video.




</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
