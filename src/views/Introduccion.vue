<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade") Estimado aprendiz bienvenido al componente formativo “Conceptos de diseño del videojuego” Para comenzar, le invitamos a ingresar al siguiente video para obtener más información:

    .row.fondo-intro.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/YHfrblIqznY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Historia y conceptos de diseño del videojuego



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
