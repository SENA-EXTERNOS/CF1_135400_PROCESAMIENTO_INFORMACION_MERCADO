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
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se podrá identificar al público objetivo, reconocer los tipos de preguntas, interpretar datos, establecer comunicación asertiva y manejar información relacionada como encuestador de forma #[i online] y #[i offline]. 

    .row.justify-content-center.mb-5
      .col-11.col-lg-6.mt-3
        figure
          img(src='@/assets/curso/temas/introduccion/img2.png', alt='Texto que describa la imagen')
      .col-11.col-lg-6.mt-3
        p.text-small En la actualidad los mercados son cada vez más competitivos, ya que la globalización ha permitido que el consumidor se diversifique en requerimientos y expectativas de productos a través de una sofisticación generada por los medios digitales de comunicación, ingreso a mercados locales de empresas internacionales, cambios culturales, entre otros. Es por ello por lo que las organizaciones deben generar modificaciones constantes en sus modelos de negocio y producto para renovarse constantemente de acuerdo con las nuevas tendencias del mercado y consumidor. Pero para lograr estos cambios constantes y mantenerse competitivo es necesario implementar una cultura persistente de estudios de mercado, los cuales inician con la segmentación e identificación del grupo de clientes objetivos, la cual se debe realizar de forma periódica para ser asertivos a los requerimientos del consumidor según las políticas organizaciones y recursos disponibles.


    .row.justify-content-center.mt-5.d-none.d-lg-block.d-md-none
      .bg_1.p-3
        .row
          .col-9
            p.mt-4 #[strong Este componente formativo, está enfocado a conocer sobre el procesamiento de la información para la producción y comercialización de bienes y servicios, a elaborar una segmentación de mercado y grupos objetivos para una organización, así como también la forma de definir el plan de recolección de datos teniendo en cuenta las políticas organizacionales.]
          .col-4
            figure
              img(src='@/assets/curso/temas/introduccion/img3.png', alt='Texto que describa la imagen').img3-introduccion

    .row.justify-content-center.mt-5.mb-5.d-lg-none.d-md-block
      .bg_1.p-3
        .row.justify-content-center
          .col-9
            p.mb-0 #[strong Este componente formativo, está enfocado a conocer sobre el procesamiento de la información para la producción y comercialización de bienes y servicios, a elaborar una segmentación de mercado y grupos objetivos para una organización, así como también la forma de definir el plan de recolección de datos teniendo en cuenta las políticas organizacionales.]
          .col-4
            figure
              img(src='@/assets/curso/temas/introduccion/img3.png', alt='Texto que describa la imagen')

    p.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

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
