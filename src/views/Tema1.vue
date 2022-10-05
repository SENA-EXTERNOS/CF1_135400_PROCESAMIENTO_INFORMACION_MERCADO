<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Segmentación de mercado

           
    .row.justify-content-center
      .col-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen')
      .col-lg-9
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            .row.display-flex
              i.fas.fa-quote-left
              .col-lg-5                
                p Dentro de las principales características que definen el mercado de hoy en día se encuentra la segmentación de mercado, esta ha generado que las empresas enfoquen sus recursos y esfuerzos en un público específico. #[strong La segmentación de mercado permite identificar y determinar el nicho de mercado] al que la empresa deberá apuntar, para el crecimiento y sostenimiento de estas.

              .col-lg-7
                p.mt-4 La segmentación de mercado ha generado un cambio en la historia, ya que al inicio simplemente las marcas se enfocaban en vender el producto sin darle mucha importancia a lo que era el nicho, hoy en día se sabe que lo mínimo que se debe conocer para el estudio de segmentación del mercado, es la geografía, la demografía, los elementos psicográficos y las características conductuales, siendo los anteriores debidamente analizados, con el fin de obtener los elementos más claros y realistas posibles, para desarrollar una adecuada segmentación para luego relacionarla con los objetivos de la empresa.
                br
                br
                span - #[strong Hurtado y Galindo, 2003]
                i.fas.fa-quote-right


    .row.mt-5.mb-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.1  Mercadeo


    .row.justify-content-center
      .col-12.col-lg-10
        .bloque-texto-g.color-secundario.p-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}")
          .bloque-texto-g__texto.p-3
            p.mb-0 Se puede definir mercadeo como una ACCIÓN, que aplica estrategias para dar solución a una necesidad especifica de un determinado grupo de personas; #[strong el objetivo del mercadeo es desarrollar un producto o servicio que se encuentre acorde con la respuesta asertiva de la necesidad especifica de este nicho de mercado.]
    
    .row.justify-content-center
      .col-11.col-lg-11
        .bloque-texto-f.color-bloque-texto.mt-5
            .bloque-texto-f__texto
              .row.display-flex.justify-content-center
                .col-12.col-lg-5              
                  p Abordando el manejo de la competencia entre empresas, se deben implementar estrategias que logren llegar al público objetivo, creando productos o servicios que aborden y satisfagan al nicho de mercado en su totalidad, de igual forma la comercialización y distribución son áreas que también se incorporan a las prácticas de mejora, generando factores de diferenciación que permitan un enganche con el cliente, donde este tenga mayor preferencia por una determinada marca sobre otra.
                  br
                  br
                  b - (Servicio Nacional de Aprendizaje SENA, 2000).
                .col-12.col-lg-4.mb-3
                  p.mt-4 #[strong El desarrollo de estrategias de mercado permite el adecuado crecimiento, mantenimiento y sostenimiento de las empresas,] por lo que es de vital importancia identificar y definir el verdadero objetivo de esta. Las estrategias de mercadeo se acomodan de acuerdo con el objetivo de la empresa y los productos que ofrecen.
                .col-10.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mt-5.mb-5
      .tarjeta.tarjeta--azul
        .row
          .col-3
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen').img4-tema1 

          .col-12.col-lg-9.mb-5
            p.mt-4 Teniendo en cuenta lo anterior, al interpretar el objetivo del mercadeo, se puede inferir que #[strong el mercadeo tiene como objetivo brindar un producto o servicio a un cliente especifico que solvente una necesidad particular], no obstante, para llegar a dicho resultado, se debe tener en cuenta un proceso de exploración, que permita determinar los mejores objetivos para llevar a cabo esta actividad. 
            p No existe una formula correcta en la que se puedan establecer los objetivos para llevar a cabo el mercadeo, sin embargo, se han desarrollado una variedad de posibles pasos a desarrollar como lo es #[strong la técnica SMART,] la cual es muy utilizada en el medio, en donde cada una de sus siglas en ingles corresponden a un elemento especifico:

    .titulo-sexto.color-acento-contenido.mt-5
      t #[strong Figura 1.] Los 5 criterios de los objetivos SMART 

   
    ImagenInfografica.color-acento-botones.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')


      .tarjeta.bgr-tarjeta.p-3(x="37%" y="30%" numero="+")
        h5.mb-2 S-Specific (especifico)
        p Este ítem corresponde a ser lo más preciso sobre las diferentes metas a las que se quieren llegar, de igual forma se caracteriza en establecer los elementos de estudio lo más enfocados posibles, como lo son el nicho de mercado, la necesidad a solventar por el producto o servicio, los elementos de comunicación, los recursos a implementar (tiempo, dinero, entre otros), entre otros.

      .tarjeta.bgr-tarjeta.p-3(x="48%" y="67%" numero="+")
        h5.mb-2 M-Measurable (medible)
        p Es necesario establecer metas medibles, o cuantificables reales para cada uno de los objetivos que se plantee la empresa, un ejemplo de esto sería el incremento del número de visitas en determinado mes a un blog de noticias o el número de ventas realizado en un trimestre por una compañía de accesorios para motos; ambos ejemplos se pueden  medir con números específicos, ya que al finalizar cada uno de los objetivos se podrá conocer si las estrategias implementadas por la empresa dieron resultado para el logro del objetivo. 

      .tarjeta.bgr-tarjeta.p-3(x="63%" y="30%" numero="+")
        h5.mb-2 A-Attainable (alcanzable)
        p Por más positiva que sea la empresa en cuanto a su crecimiento y cumplimiento de metas, es necesario que sea realista, esto quiere decir que es necesario implementar objetivos reales frente a lo que caracteriza la empresa. Es necesario que las marcas identifiquen sus mayores obstáculos, con el fin de generar metas alcanzables.

      .tarjeta.bgr-tarjeta.p-3(x="75%" y="67%" numero="+")
        h5.mb-2 R-Realistic (relevante)
        p Las empresas deben proponerse el cumplimiento de objetivos útiles, dejando de lado elementos intranscendentes que no aporten al negocio; un ejemplo de esto es el número de seguidores que se tienen en redes sociales, a pesar de que este número sea masivo en redes, para muchas empresas de productos no será relevante si no se generan ventas, por lo que, en vez de establecer un objetivo enfocado en el crecimiento de seguidores en redes sociales, deberá proponer metas para el crecimiento en ventas. 

      .tarjeta.bgr-tarjeta.p-3(x="90%" y="30%" numero="+")
        h5.mb-2 T-Timely (oportuno o a tiempo)
        p Es vital fijar una fecha específica para conocer los resultados de los objetivos establecidos por la empresa, ya que se requiere identificar si las estrategias para el cumplimiento de estos objetivos son útiles o simplemente deben ser eliminadas. No existe un tiempo específico para medir el funcionamiento de las estrategias, ya que esto depende de las empresas y de sus propuestas de mercadeo, no obstante, se recomienda un tiempo prudente, en el cual se pueda ser claro y enfático para el tratamiento de los resultados arrojados por las mismas tácticas. (Servicio Nacional de Aprendizaje SENA, 2000)

    .row.justify-content-center.mt-5
      b.text-center A continuación, se presenta un ejemplo del uso del desarrollo de objetivos con la técnica SMART
      
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido.mt-5
          t #[strong Figura 2.] Ejemplo del uso del desarrollo de los objetivos con la técnica SMART

        figure
          img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mt-5
      .col-12.col-lg-7
        .row.justify-content-center
          .col-5.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')
          .col-11.col-lg-9
            p La evolución del mercado ha permitido grandes beneficios en todas las empresas que hacen uso de este, desde la más grande a la más pequeña. Está claro que los medios digitales son los mayores precursores para la utilización de esta, por lo que se podría inferir que sus mayores beneficios son gracias al manejo de herramientas tecnológicas, algunos de estos beneficios son: 
        .tarjeta.tarjeta--azul.p-3.mt-3
          ul.lista-ul.mb-4
            li 
              i.fas.fa-angle-right.txt--violeta
              |  #[strong Mayor alcance a su público objetivo (nacional o internacional).]
            li 
              i.fas.fa-angle-right.txt--violeta
              | #[strong Menor inversión en publicidad digital.]
            li 
              i.fas.fa-angle-right.txt--violeta
              | #[strong Facilidad en recolección y análisis de datos.]
            li 
              i.fas.fa-angle-right.txt--violeta
              | #[strong Mejor interacción con el público objetivo.]
            li 
              i.fas.fa-angle-right.txt--violeta
              | #[strong Flexibilidad en cuanto al tipo de contenido que se publica (videos, imágenes, textos).]
            li 
              i.fas.fa-angle-right.txt--violeta
              | #[strong Desarrollo de una identidad de marca.]
        
        p.mt-3 Estos solo son algunos de los beneficios que se generan al hacer uso del mercadeo dentro de las empresas, los cuales facilitan los objetivos de estas, independientemente de los que se hayan fijado en cada una de estas.
      
      .col-8.col-lg-5
        figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.2  Tipos de mercadeo

    .row.justify-content-center.mt-3.mb-5
      .col-lg-10
        .tarjeta.tarjeta--morada
          .row
            .col-3
              figure
                img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen').img11-tema1 

            .col-12.col-lg-9.mt-2.p-5
              b El mercadeo es un concepto ha ido evolucionado poco a poco, esto ha generado que la tipología de este evolucione y varie de acuerdo con las características que se le atribuyan, no obstante, entre la tipología más conocida se encuentran: 
 
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--amarilla").p-3
      .row(titulo="Mercadeo analítico")
        .col-12.p-5
          p Este tipo de mercadeo es el más implementado con relación al resto, ya que este se rige a partir de los #[strong resultados obtenidos por los datos recolectados] en las diferentes fuentes de información, ya sean propias o de terceras, esto quiere decir que los datos pueden ser extraídos directamente por la empresa y utilizados en la misma, mientras que la información obtenida por otras fuentes puede ser utilizada por varias empresas en diferentes sectores; un ejemplo de la recolección de datos elaborada por terceros son las herramientas como Google Analytics. Esto tiene como fin identificar y realizar la mejor toma de decisiones para el desarrollo de procesos dentro y fuera de la empresa, con el fin de minimizar la cantidad de riesgos, en la ejecución de decisiones.

      .row(titulo="Mercadeo estratégico")
        .col-12.p-5
          p Al igual que el mercadeo analítico este implementa el #[strong análisis de mercado] con el fin de generar estrategias objetivas y certeras sobre los diferentes procesos que se podrán implementar para el crecimiento de la empresa, teniendo en cuentas las variantes que se pueda ejecutar dentro del mismo.

      .row(titulo="Mercadeo operacional")
        .col-12.p-5
          p El mercadeo operacional se especializa en el #[strong mejoramiento del producto o servicio], teniendo en cuenta todos los factores que involucran desde la fabricación del producto hasta el momento donde es adquirido por el cliente o consumidor. A partir de esto, el mercadeo operacional plantea únicamente decisiones a corto y mediano plazo, teniendo en cuenta que esto es debido a que solo busca mejorar el producto o servicio ofrecido al mercado.

      .row(titulo="Mercadeo emocional")
        .col-12.p-5
          p Este es uno de los tipos de mercadeo más implementados hoy en día ya que se rige en el enfoque de las diferentes #[strong sensaciones y sentimientos] que el consumidor presente en el momento de adquirir un producto o servicio. El mercadeo emocional ha aumentado gradualmente, ya que años anteriores, la competencia era menor y las estrategias de mercado se enfocaban en dar solución de una necesidad básica o primordial para el ser humano. Con base en esto las empresas que utilizan el mercadeo emocional se enfocan en transmitir o generar las emociones necesarias para que el cliente adquiera determinado producto, en esta también se hace uso del marketing sensorial, donde se incorporan los sentidos de las personas tales como el gusto, el olfato, el tacto, la vista y el oído; un ejemplo de esto es cuando las marcas de prendas de vestir incorporan aromas personalizados para el establecimiento y sus productos, esto estimula en el cliente el sentido del olfato, el cual al sentir nuevamente el olor de la fragancia, identificara directamente la prenda con la marca, independientemente que esta se encuentre fuera del establecimiento.

      .row(titulo="Mercadeo viral")
        .col-12.p-5
          p Debido al avance de los medios de comunicación, las empresas, han logrado llegar a sus clientes a través de diversos canales de divulgación de la información. Hoy en día el canal más implementado son las redes sociales o medios digitales, donde se hace uso de elementos audiovisuales, que llaman la atención de los usuarios. El mercadeo viral se especializa, en el #[strong contenido y alcance] de este, este funciona gracias a los diferentes algoritmos implementados en las diversas plataformas virtuales, logrando dar a conocer de forma masiva y espontanea, determinada publicación, permitiendo generar un alcance mayor a nuevos compradores. Es importante mencionar, que para hacer uso de este tipo de mercadeo es necesario estar al tanto de los acontecimientos que rigen las redes sociales, ya sea una noticia, audio, video, entre otros. 

      .row(titulo="Mercadeo relacional")
        .col-12.p-5
          p Este tipo de mercadeo se define como aquel que logra una #[strong comunicación asertiva y reciproca] entre el cliente y la empresa, teniendo en cuenta que es como un rol de confianza que se genera entre ambos. El mercadeo relacional, pretende involucrar de manera objetiva y clara los diferentes elementos que se requieren para la relación entre el vendedor y el cliente, generando un vínculo de confianza, lo cual permite estudiar y direccionar las diferentes acciones que la empresa puede tomar. Es importante mencionar que este tipo de mercadeo puede llegar a tomar un poco más de tiempo, sin embargo, es muy claro y directo especialmente frente a los que son considerados clientes potenciales, ya que permite relaciones duraderas que generan ganancias reales entre ambas partes.

      .row(titulo="Mercadeo rentable")
        .col-12.p-5
          p Se caracteriza en hacer #[strong el menor uso de recursos como tiempo y dinero] para el crecimiento y mejora de la empresa; lo anterior no significa que todo se realice de manera espontánea y sin estrategias específicas, todo lo contrario, este tipo de mercadeo implanta estrategias muy bien estudiadas, para lograr su objetivo de no gastar en recursos de forma innecesaria en el momento de ejecutar las estrategias.

    .row.justify-content-center.mt-5
      .bloque-texto-g.color-secundario.p-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img10.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Se puede definir mercadeo como una ACCIÓN, que aplica estrategias para dar solución a una necesidad especifica de un determinado grupo de personas; el objetivo del mercadeo es desarrollar un producto o servicio que se encuentre acorde con la respuesta asertiva de la necesidad especifica de este nicho de mercado.

    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.3  Investigación de mercados

    .row.justify-content-center
      .col-5.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')
      .col-11.mt-2
        p Al igual que la definición de mercadeo, la investigación de mercados se puede interpretar como la recolección de datos específicos, la interpretación y análisis de la información, todo esto con el fin de establecer las posibles actividades para la implementación de estrategias de mercadeo acordes con los objetivos de la empresa y los requerimientos del cliente.

    .row.justify-content-center.mt-5
      .col-11.col-lg-7
        .tarjeta.tarjeta--amarilla.p-4
          .row.justify-content-center
            .col-11.col-lg-6
              p Conforme van pasando los años, la investigación de mercado ha sido priorizada dentro de las empresas, ya que para casi todas las industrias ya sean de fabricación, comercialización o distribución, la competencia ha aumentado exponencialmente en los últimos años, generando mayores retos para que el cliente adquiera determinado producto o servicio. #[strong La investigación de mercado permite generar herramientas de información útiles para la construcción de estrategias claras y eficaces,] por esta razón se indagan de la forma más detalla cada una de las características del mercado.
            .col-8.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')
      .col-11.col-lg-5.mt-3
        p #[strong La investigación de mercado no solo permite estudiar al cliente objetivo a donde se está dirigiendo la empresa, también posibilita conocer los alcances, y procesos desarrollados por otras empresas.] Esta investigación permite conocer algunos temas como lo son el tipo de ventas y medios de pago, un ejemplo de esto es el uso de billeteras digitales, las cuales han venido tomando mayor fuerza en el último año; de igual forma los resultados de las investigaciones pueden establecer las principales variantes de fabricación, distribución o comercialización que están llevando a cabo las otras empresas, estableciendo posibles mejoras para la empresa investigativa. Es muy importante resaltar que se trata de una investigación de mercado y no de una competencia desleal, teniendo claro que este tipo de práctica perjudica el mercado de las demás empresas e incluso la propia, por lo cual se debe tener un significativo cuidado con la forma en cómo se obtiene y se maneja la información. 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
