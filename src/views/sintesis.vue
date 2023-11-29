<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta el desarrollo y la historia de los videojuegos, comenzando con la historia e introducción a los videojuegos, desglosándose en temas como el pipeline, cronogramas y herramientas de trabajo como Scrum y Diagrama de Gantt. Centralmente, se destaca la Idea General del VideoJuego, que se conecta con elementos de diseño como personajes, narración y teoría de luces y sombras, convergiendo todos en el GameDocument. Al final, se menciona el Pitch Document.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
