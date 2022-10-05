<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info 
      h1 Introducción
  
    .row.justify-content-center
      .col-6.col-lg-1.mt-2.mb-3
        figure
          img(src='@/assets/curso/temas/introduccion/img1.png', alt='Texto que describa la imagen')
      .col-11.col-lg-11
        p Bienvenido al componente Segmentos de mercado y grupo objetivo del programa Procesamiento de Información de Mercados, este espacio estará enfocado en el proceso formativo de acuerdo con la competencia de aprendizaje orientada en Encuestar personas según técnica de recolección y manual de encuestador, donde se podrá identificar al público objetivo, reconocer los tipos de preguntas, interpretar datos, establecer comunicación asertiva y manejar información relacionada como encuestador de forma online y offline.

    .row.justify-content-center.mt-5.mb-5
      .col-11.col-lg-6.mt-5
        figure
          img(src='@/assets/curso/temas/introduccion/img2.png', alt='Texto que describa la imagen')
      .col-11.col-lg-6.mt-5
        p En la actualidad los mercados son cada vez más competitivos, ya que la globalización ha permitido que el consumidor se diversifique en requerimientos y expectativas de productos a través de una sofisticación generada por los medios digitales de comunicación, ingreso a mercados locales de empresas internacionales, cambios culturales, entre otros. Es por ello que las organizaciones deben generar modificaciones constantes en sus modelos de negocio y producto para renovarse constantemente de acuerdo a las nuevas tendencias del mercado y consumidor. 
        p.mt-3 Pero para lograr estos cambios constantes y mantenerse competitivo es necesario implementar una cultura persistente de estudios de mercado, los cuales inician con la segmentación e identificación del grupo de clientes objetivos, la cual se debe realizar de forma periódica para ser asertivos a los requerimientos del consumidor según las políticas organizaciones y recursos disponibles.


    .row.justify-content-center.mt-5
      .tarjeta.tarjeta--azul
        .row
          .col-9
            p.mt-4 #[strong Si desea conocer más información respecto a los puntos a tratar dentro del componente formativo lo invitamos a ver el video de bienvenida, donde se explicará más a fondo los temas y áreas de proyección sobre encuestar personas según técnica de recolección y manual de encuestador.]
          .col-4
            figure
              img(src='@/assets/curso/temas/introduccion/img3.png', alt='Texto que describa la imagen').img3-introduccion

    .titulo-segundo.color-acento-contenido.mt-5
      h2 Caracterización del entorno turístico

    .row.mt-5.mb-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video


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
