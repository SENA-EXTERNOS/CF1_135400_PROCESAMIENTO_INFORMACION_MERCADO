<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .row.justify-content-center
      .col-lg-10.mb-5
        .titulo-sexto.txt--violeta.mt-3
          h2 Procesamiento de Información de Mercado
          p Síntesis: Segmentos de mercado y grupo objetivo

        p.mt-5 El siguiente mapa integra los criterios y especificidades de los conocimientos expuestos en el presente componente formativo.

    .row.justify-content-center
      .col-lg-10.mt-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto.mt-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
