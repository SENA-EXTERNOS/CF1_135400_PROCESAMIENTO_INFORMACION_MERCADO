<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Grupo objetivo

    .row.justify-content-center
      .col-12.col-lg-10
        .tarjeta.tarjeta--amarilla
          .row.justify-content-center.p-3
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen').tema2-img-1
            .col-11.col-lg-8
              p #[strong Generalmente las empresas deben guiar sus estrategias de acuerdo con los estándares y necesidades que deseen solventar en un grupo objetivo, teniendo claro esto, se puede definir a un grupo objetivo como el conjunto de personas que comparten características específicas dentro de las cuales se encuentra una necesidad a satisfacer.]

    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.1 Segmentación

    .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-4
      .bloque-texto-tema2__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.png')})`}"
      )
      .bloque-texto-tema2__texto.p-4
        p La definición del grupo objetivo para una empresa no es suficiente para orientar todas sus estrategias para el crecimiento de esta, por lo cual requieren desarrollar la segmentación del mercado,#[strong esta posibilita las estrategias de forma orientada y clara para el desarrollo de las mejores metodologías enfocadas en el mercado.]
        p.mt-3 La segmentación clasifica de forma detallada los diferentes componentes que pueden afectar directamente a la empresa, de acuerdo con la industria que esta pertenezca y el tipo de consumo de esta, es decir que de acuerdo con los criterios de demanda se podrá realizar una segmentación objetiva; teniendo en cuenta lo anterior se pueden considerar diferentes tipos de segmentación:

    .row.justify-content-center.mt-5
      .col-6.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')

      .col-11.col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla")
          .row(titulo="Segmentación geográfica")
            p Como su nombre lo indica este tipo de segmentación únicamente se rige a partir #[strong la ubicación geográfica] en las que se encuentran las personas, esto con el fin de identificar tiempos y distancia de distribución. Lo anterior contribuye a las empresas, ya que podrán establecer diferentes estrategias de mercadeo, distribución y comercialización de productos o servicios, teniendo en cuenta las diferencias de horarios, las brechas o recorridos de la ubicación de los lugares, entre otros. 
            

          .row(titulo="Segmentación demográfica")
            p La segmentación demográfica se refiera a todo tipo de identificación de las #[strong características básicas] y de fácil acceso, ya que consta de datos generales respecto al grupo objetivo de la marca. Entre sus principales características se evaluar se encuentran:
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Edad]
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Genero]
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Nacionalidad]
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Ocupación]
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Educación] 
            p Las características mencionadas anteriormente es la información básica y relevante implementada para llevar a cabo la segmentación demográfica, teniendo en cuenta que esta facilitare el proceso de desarrollo de estrategias de mercadeo, distribución y comercialización de bienes o productos, generando beneficios óptimos para las empresas y el cliente. (Moncayo, M. 1998).

          .row(titulo="Segmentación psicográfica")
            p Como infiere su nombre, esta se enfoca en los #[strong aspectos psicológicos] del ser humano, esto teniendo en cuenta que solo se debe relacionar directamente en el grupo objetivo de las empresas, por lo que se considera uno de los tipos de segmentación más útiles en los últimos tiempos, ya que a través del factor humano es sencillo empatizar con el cliente, teniendo en cuenta que existe una afinidad entre los enfoques del consumidor con el de la empresa. Dentro de las principales características que utiliza este estudio se encuentran: 
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Valores]
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Actividades] 
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Religión o creencia]
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Pasatiempos]
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong Motivaciones]
          .row(titulo="Segmentación conductual")
            p Este tipo de segmentación se busca relacionar directamente con el #[strong comportamiento que tiene el cliente en el momento de adquirir un producto o servicio], esto ya sea antes, durante y después de la compra. Esto sirve para comprometerá la empresa y determinar las características de mejora de los elementos que fabrican. Entre las características que este tipo de segmentación estudia se encuentran:
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong La frecuencia de compra del producto o servicio]
              li 
                i.fas.fa-angle-right.txt--azul
                | #[strong La cantidad de productos adquiridos] 
      
      .row.justify-content-center.mt-5.mb-5
        .row
          .col-12.col-lg-9
            .row.justify-content-center
              .col-5.col-lg-1
                figure
                  img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen').img4-tema2
              .col-12.col-lg-11
                p Los beneficios que otorga la definición de un segmento de mercado para determinada empresa son enormes, se podría inferir que gran parte de las empresas que hacen uso de esta herramienta, tienen mayores ventajas sobre el resto que no lo hace, entre sus principales beneficios se encuentran:
            .bloque-texto-b.color-secundario.p-1
              .bloque-texto-b__texto
                .row.display-flex
                  .col-lg-4 
                    .row.display-flex.heiht-columna-tema2.mt-5
                      .col-2.mt-2
                        figure
                          img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen').img5-tema2
                      .col-10.mt-2             
                        b Establecer a donde se van a invertir sus recursos
                    .row.mt-5
                      p Como es sabido el tiempo al igual que el dinero, son recursos primordiales dentro de una empresa, por lo que al conocer el tipo de mercado a donde se verán direccionadas las acciones, las empresas podrán dejar de lado otros grupos que no generan ningún tipo de beneficio.
                  .col-lg-4
                    .row.display-flex.heiht-columna-tema2.mt-5
                      .col-2.mt-2
                        figure
                          img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen').img5-tema2
                      .col-10.mt-2
                        b Mejorar productos o servicios
                    .row.mt-5
                      p Al conocer el grupo de personas al cual se deben direccionar las acciones, se podrá realizar investigaciones específicas para inferir sobre los posibles cambios para la mejora del producto o servicio por la empresa, es decir se conocerá de primera mano los verdaderos cambios que requieren para seguir satisfaciendo las necesidades de sus clientes o consumidores.
                  .col-lg-4
                    .row.display-flex.heiht-columna-tema2.mt-5
                      .col-2.mt-2
                        figure
                          img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen').img5-tema2
                      .col-10.mt-2
                        b Establecer vínculos directos con los clientes
                    .row.mt-5
                      p Ya que se conocen el segmento específico al cual se van a direccionar la empresa, se permitirá relacionarse directamente con los mismos, lo cual generará un plus en cuanto a la forma de comunicarse con el cliente, generando vínculos de fidelización con los mismos.
          .col-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')

    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.2 Población objetiva y público a encuestar

    .row.justify-content-center.mt-5
      .col-12
        .tarjeta.tarjeta--gris2
          .row.justify-content-center.p-3
            .col-7.col-lg-4.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen').tema2-img-7
            .col-11.col-lg-8
              p Como su nombre lo indica la población objetivo es aquel en donde se va a concentrar la empresa para direccionar todas las actividades, por lo tanto, esto indica que será el público por encuestar para validar la #[strong toma de decisiones] de la empresa. De acuerdo con el tipo de producto o servicio al que se enfoque la empresa, será el número de personas pertenecientes al público objetivo, por lo tanto, este puede ser de un gran tamaño, teniendo en cuenta que si se encuestara a todos los individuos de este grupo los recursos invertidos sean muy altos, la empresa deberá establecer un mínimo de encuestas a realizar, para garantizar los resultados con mayor veracidad para el estudio de mercado. De acuerdo con lo anterior es importante resaltar que el #[strong público a encuestar deberá compartir los rasgos más similares posibles,] en cuanto a características como la edad, estrato socioeconómico, entre otros; lo anterior permitirá resultados más claros y estables.

    .row.mt-5.justify-content-center
      b.text-center La posibilidad que tienen las empresas al poder encuestar a un público en específico se representa en varios puntos, algunos de estos son: 

    .row.justify-content-center.mt-5
      .col-7.col-lg-2.mb-4
        .tarjeta--boton.color-primario.tarjeta-tamano.p-2
          .row.justify-content-center.mb-3.mt-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')
          h3.mt-4.text-center Población reducida
          p.text-center ya que si se encuestara a todo el público objetivo el costo en recursos para la empresa seria excesivo

      .col-7.col-lg-2.mb-4
        .tarjeta--boton.color-secundario.tarjeta-tamano.p-2
          .row.justify-content-center.mb-3.mt-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')
          h3.mt-4.text-center Encuestas
          p.text-center Desarrollo de encuestas personalizadas

      .col-7.col-lg-2.mb-4
        .tarjeta--boton.color-acento-botones.tarjeta-tamano.p-2
          .row.justify-content-center.mb-3.mt-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')
          h3.mt-4.text-center Datos
          p.text-center Selección de datos a obtener

      .col-7.col-lg-2.mb-4
        .tarjeta--boton.bgr-color-tarjeta.tarjeta-tamano.p-2
          .row.justify-content-center.mb-3.mt-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')
          h3.mt-4.text-center Precisión
          p.text-center Precisión en los resultados obtenidos

      .col-7.col-lg-2.mb-4
        .tarjeta--boton.color-primario.tarjeta-tamano.p-2
          .row.justify-content-center.mb-3.mt-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img12.png', alt='Texto que describa la imagen')
          h3.mt-4.text-center Resultados
          p.text-center Resultados agiles

    .row.justify-content-center.mt-5
      b.text-center Existe una gran variedad de estrategias para desarrollar encuestas versátiles y funcionales, uno de estos procesos se presenta a continuación:
    
    .row.mt-5
      figure
        img(src='@/assets/curso/temas/tema2/img13.png', alt='Texto que describa la imagen')

    #t_2_3

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.3 Plan de recolección de datos

    .row.mb-5.justify-content-center
      .col-lg-9
        p Un plan de recolección de datos es aquel PROCESO que se utiliza para la recopilación y análisis de información relevante para el desarrollo de los diferentes procesos que deberá ejecutar una empresa, #[strong obteniendo beneficios y estrategias significativas para el sostenimiento y mejoramiento de esta.]
        .bloque-texto-d.color-secundario.p-3
              .bloque-texto-d__texto
                .row.display-flex
                  .col-lg-5
                    .row.heiht-columna-tema2.mt-5
                      p Hoy en día la recolección de información sobre los diferentes entes que afectan el desarrollo de estrategias toma un papel primordial para el direccionamiento de la empresa, por lo que muchas, han decidido implementar sistemas especiales para la recolección de estos datos, los cuales en su mayoría son digitales, facilitando los recursos implementados y minorizando en errores, de igual forma esto permite disminuir el tiempo implementado para el estudio de datos, ya que los sistemas digitales facilitan el desarrollo de análisis de forma rápida y segura.

                  .col-lg-7
                    .row.heiht-columna-tema2.mt-5
                      p Para la recolección de datos es necesario incluir diferentes elementos que certifiquen un buen proceso, entre los que se encuentran la confiabilidad, la validez y la objetividad. La confiabilidad indica la capacidad que tienen los elementos de recolección de datos, para que funcionen de forma adecuada y precisa, durante y después del proceso; la validez garantiza que los elementos implicados dentro del proceso sean verídicos y no falsos frente al adecuado manejo del procedimiento. Por último, la objetividad permite que el objeto de estudio sea coherente respecto a los diferentes entes implicados, como lo son el público por encuestar, y las preguntas o información a obtener sea relevante para el desarrollo de la actividad.
      .col-6.col-lg-3.mt-5
        figure
          img(src='@/assets/curso/temas/tema2/img14.png', alt='Texto que describa la imagen').img14-tema2

    .row.mt-5
      .col-lg-6
        b Existen varias metodologías para la recolección de datos específicos, sin embargo, los puntos más importantes se muestran en el siguiente gráfico:

    .row.mt-5
      figure
        img(src='@/assets/curso/temas/tema2/img15.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema2',
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
