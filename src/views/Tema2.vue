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
        .row.justify-content-center.p-3
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen').tema2-img-1
          .col-11.col-lg-8
            p Las empresas deben guiar sus estrategias de acuerdo con los estándares y necesidades que deseen solventar en un grupo objetivo, teniendo claro esto, se puede definir a un grupo objetivo como el conjunto de personas que comparten características específicas dentro de las cuales se encuentra una necesidad a satisfacer. 

    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.1 Segmentación

    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-4
          .bloque-texto-tema2__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.png')})`}"
          )
          .bloque-texto-tema2__texto.p-3
            p.mb-0 La segmentación clasifica de forma detallada los diferentes componentes que pueden afectar directamente a la empresa, de acuerdo con la industria que esta pertenezca y el tipo de consumo de esta, es decir que de acuerdo con los criterios de demanda se podrá realizar una segmentación objetiva; teniendo en cuenta lo anterior se pueden considerar diferentes tipos de segmentación.

    p La definición del grupo objetivo para una empresa no es suficiente para orientar todas sus estrategias para el crecimiento de esta, por lo cual requieren desarrollar la segmentación del mercado, esta #[b posibilita las estrategias de forma orientada y clara] para el desarrollo de las mejores metodologías enfocadas en el mercado: 

    .row.justify-content-center.mt-5
      .col-6.col-lg-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')

      .col-11.col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla")
          .row(titulo="Segmentación geográfica")
            p Como su nombre lo indica este tipo de segmentación únicamente se rige a partir la #[b ubicación geográfica] en las que se encuentran las personas, esto con el fin de identificar tiempos y distancia de distribución. Lo anterior contribuye a las empresas, ya que podrán establecer diferentes estrategias de mercadeo, distribución y comercialización de productos o servicios, teniendo en cuenta las diferencias de horarios, las brechas o recorridos de la ubicación de los lugares, entre otros. 

            

          .row(titulo="Segmentación demográfica")
            p La segmentación demográfica se refiera a todo tipo de identificación de las #[b características básicas] y de fácil acceso, ya que consta de datos generales respecto al grupo objetivo de la marca. Entre sus principales características se evaluar se encuentran: 
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--violeta
                | Edad
              li 
                i.fas.fa-angle-right.txt--violeta
                | Genero
              li 
                i.fas.fa-angle-right.txt--violeta
                | Nacionalidad
              li 
                i.fas.fa-angle-right.txt--violeta
                | Ocupación
              li 
                i.fas.fa-angle-right.txt--violeta
                | Educación 
            p Las características mencionadas anteriormente es la información básica y relevante implementada para llevar a cabo la segmentación demográfica, teniendo en cuenta que esta facilitare el proceso de desarrollo de estrategias de mercadeo, distribución y comercialización de bienes o productos, generando beneficios óptimos para las empresas y el cliente. (Moncayo, M. 1998).

          .row(titulo="Segmentación psicográfica")
            p Como infiere su nombre, esta se enfoca en los #[b aspectos psicológicos] del ser humano, esto teniendo en cuenta que solo se debe relacionar directamente en el grupo objetivo de las empresas, por lo que se considera uno de los tipos de segmentación más útiles en los últimos tiempos, ya que a través del factor humano es sencillo empatizar con el cliente, teniendo en cuenta que existe una afinidad entre los enfoques del consumidor con el de la empresa. Dentro de las principales características que utiliza este estudio se encuentran: 
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--violeta
                | Valores
              li 
                i.fas.fa-angle-right.txt--violeta
                | Actividades 
              li 
                i.fas.fa-angle-right.txt--violeta
                | Religión o creencia
              li 
                i.fas.fa-angle-right.txt--violeta
                | Pasatiempos
              li 
                i.fas.fa-angle-right.txt--violeta
                | Motivaciones
          .row(titulo="Segmentación conductual")
            p Este tipo de segmentación se busca relacionar directamente con el #[strong comportamiento que tiene el cliente en el momento de adquirir un producto o servicio], esto ya sea antes, durante y después de la compra. Esto sirve para comprometerá la empresa y determinar las características de mejora de los elementos que fabrican. Entre las características que este tipo de segmentación estudia se encuentran:
            ul.lista-ul.mb-4
              li 
                i.fas.fa-angle-right.txt--violeta
                | #[strong La frecuencia de compra del producto o servicio]
              li 
                i.fas.fa-angle-right.txt--violeta
                | #[strong La cantidad de productos adquiridos] 

      .row.justify-content-center.mt-5.mb-5
        .col-5.col-lg-1.mb-4.mb-md-0
          figure
            img.img-b(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')
        .col-12.col-lg-11
          p Los #[b beneficios] que otorga la definición de un segmento de mercado para determinada empresa son enormes, se podría inferir que gran parte de las empresas que hacen uso de esta herramienta, tienen mayores ventajas sobre el resto que no lo hace, entre sus principales beneficios se encuentran:


      .row.justify-content-center.align-items-center.mb-5.d-none.d-lg-block.d-md-none
        .col-lg-10
          .row
            .col-lg-10
              .tarjeta-avatar-b.mb-0
                .tarjeta-avatar-b__img
                  img.img-b(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
                .tarjeta.bg_5
                  .px-5.py-4
                    p.mb-0 #[b Establecer a donde se van a invertir sus recursos:] Como es sabido el tiempo al igual que el dinero, son recursos primordiales dentro de una empresa, por lo que al conocer el tipo de mercado a donde se verán direccionadas las acciones, las empresas podrán dejar de lado otros grupos que no generan ningún tipo de beneficio. 
              .tarjeta-avatar-b.mb-0
                .tarjeta-avatar-b__img
                  img.img-b(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
                .tarjeta.bg_4
                  .px-5.py-4
                    p.mb-0 #[b Mejorar productos o servicios:] Al conocer el grupo de personas al cual se deben direccionar las acciones, se podrá realizar investigaciones específicas para inferir sobre los posibles cambios para la mejora del producto o servicio por la empresa, es decir se conocerá de primera mano los verdaderos cambios que requieren para seguir satisfaciendo las necesidades de sus clientes o consumidores. 
              .tarjeta-avatar-b.mb-0
                .tarjeta-avatar-b__img
                  img.img-b(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
                .tarjeta.bg_5
                  .px-5.py-4
                    p.mb-0 #[b Establecer vínculos directos con los clientes:] Ya que se conocen el segmento específico al cual se van a direccionar la empresa, se permitirá relacionarse directamente con los mismos, lo cual generará un plus en cuanto a la forma de comunicarse con el cliente, generando vínculos de fidelización con los mismos. 
            
            .row.img-c          
              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')

      .row.justify-content-center.d-lg-none.d-md-block
        .col-lg-10.mb-4.mb-md-0
          .tarjeta-avatar-b.mb-0
            .tarjeta-avatar-b__img
              img.img-b(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .tarjeta.bg_5
              .px-5.py-4
                p.mb-0 #[b Establecer a donde se van a invertir sus recursos:] Como es sabido el tiempo al igual que el dinero, son recursos primordiales dentro de una empresa, por lo que al conocer el tipo de mercado a donde se verán direccionadas las acciones, las empresas podrán dejar de lado otros grupos que no generan ningún tipo de beneficio. 
          .tarjeta-avatar-b.mb-0
            .tarjeta-avatar-b__img
              img.img-b(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .tarjeta.bg_4
              .px-5.py-4
                p.mb-0 #[b Mejorar productos o servicios:] Al conocer el grupo de personas al cual se deben direccionar las acciones, se podrá realizar investigaciones específicas para inferir sobre los posibles cambios para la mejora del producto o servicio por la empresa, es decir se conocerá de primera mano los verdaderos cambios que requieren para seguir satisfaciendo las necesidades de sus clientes o consumidores. 
          .tarjeta-avatar-b.mb-0
            .tarjeta-avatar-b__img
              img.img-b(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .tarjeta.bg_5
              .px-5.py-4
                p.mb-0 #[b Establecer vínculos directos con los clientes:] Ya que se conocen el segmento específico al cual se van a direccionar la empresa, se permitirá relacionarse directamente con los mismos, lo cual generará un plus en cuanto a la forma de comunicarse con el cliente, generando vínculos de fidelización con los mismos. 
        
        .col-lg-4
          figure
            img.img-b(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')


    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.2 Población objetiva y público a encuestar

    .row.justify-content-center.mb-5
      .col-7.col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')
      .col-11.col-lg-8
        p Como su nombre lo indica la población objetivo es aquel en donde se va a concentrar la empresa para direccionar todas las actividades, por lo tanto, esto indica que será el público por encuestar para validar la #[strong toma de decisiones] de la empresa. De acuerdo con el tipo de producto o servicio al que se enfoque la empresa, será el número de personas pertenecientes al público objetivo, por lo tanto, este puede ser de un gran tamaño, teniendo en cuenta que si se encuestara a todos los individuos de este grupo los recursos invertidos sean muy altos, la empresa deberá establecer un mínimo de encuestas a realizar, para garantizar los resultados con mayor veracidad para el estudio de mercado. De acuerdo con lo anterior es importante resaltar que el #[strong público a encuestar deberá compartir los rasgos más similares posibles,] en cuanto a características como la edad, estrato socioeconómico, entre otros; lo anterior permitirá resultados más claros y estables.

    p.mb-5 La posibilidad que tienen las empresas al poder encuestar a un público en específico se representa en varios puntos, algunos de estos son: 


    .row.mb-5.align-items-stretch.d-flex.h-100.justify-content-center.text-small
      .col-lg-6.col-xl-2
        .tarjeta.tarjeta--gris2.px-2.py-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img8.png' alt='AvatarTop')
          p.text-center.mb-0 Población reducida, ya que si se encuestara a todo el público objetivo el costo en recursos para la empresa seria excesivo.

      .col-lg-6.col-xl-2
        .tarjeta.tarjeta--amarilla.px-2.py-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img9.png' alt='AvatarTop')
          p.text-center Desarrollo de encuestas personalizadas.

      .col-lg-6.col-xl-2
        .tarjeta.tarjeta--gris2.px-2.py-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img10.png' alt='AvatarTop')
          p.text-center Selección de datos a obtener.

      .col-lg-6.col-xl-2
        .tarjeta.tarjeta--amarilla.px-2.py-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img11.png' alt='AvatarTop')
          p.text-center Precisión en los resultados obtenidos.

      .col-lg-6.col-xl-2
        .tarjeta.tarjeta--gris2.px-2.py-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img12.png' alt='AvatarTop')
          p.text-center Resultados ágiles.

    p.mb-5 Existe una gran variedad de estrategias para desarrollar encuestas versátiles y funcionales, uno de estos procesos se presenta a continuación:    
    
    .row.mb-5
      figure
        img(src='@/assets/curso/temas/tema2/img13.png', alt='Texto que describa la imagen')

    h3.mb-5 Plan de recolección de datos

    .row.mb-3
      .col-lg-8
        p Un plan de recolección de datos es aquel PROCESO que se utiliza para la recopilación y análisis de información relevante para el desarrollo de los diferentes procesos que deberá ejecutar una empresa, obteniendo beneficios y estrategias significativas para el sostenimiento y mejoramiento de esta.

        .cajon.color-acento-botones.p-3.mb-3
          p.mb-0 Hoy en día la recolección de información sobre los diferentes entes que afectan el desarrollo de estrategias toma un papel primordial para el direccionamiento de la empresa, por lo que muchas, han decidido implementar sistemas especiales para la recolección de estos datos, los cuales en su mayoría son digitales, facilitando los recursos implementados y minorizando en errores, de igual forma esto permite disminuir el tiempo implementado para el estudio de datos, ya que los sistemas digitales facilitan el desarrollo de análisis de forma rápida y segura. 

        p Para la recolección de datos es necesario incluir diferentes elementos que certifiquen un buen proceso, entre los que se encuentran la confiabilidad, la validez y la objetividad. La confiabilidad indica la capacidad que tienen los elementos de recolección de datos, para que funcionen de forma adecuada y precisa, durante y después del proceso; la validez garantiza que los elementos implicados dentro del proceso sean verídicos y no falsos frente al adecuado manejo del procedimiento. Por último, la objetividad permite que el objeto de estudio sea coherente respecto a los diferentes entes implicados, como lo son el público por encuestar, y las preguntas o información a obtener sea relevante para el desarrollo de la actividad. 
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img14.png', alt='Texto que describa la imagen')
    

    p Existen varias metodologías para la recolección de datos específicos, sin embargo, los puntos más importantes se muestran en el siguiente gráfico:

    .row.mt-5.mb-5
      figure
        img(src='@/assets/curso/temas/tema2/img15.svg', alt='Texto que describa la imagen')

    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


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
