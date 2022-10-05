export default {
  global: {
    componenteFormativo: 'Segmentos de mercado <br>y grupo objetivo',
    descripcionCurso:
      'La segmentación de mercado es una herramienta por medio de la cual es posible identificar las características de una población objetiva, a la cual se buscará encuestar para recolectar información estratégica para la organización.<br><br>En este componente formativo se plantearán los conceptos para segmentar y establecer grupos objetivos, para continuar con actividades prácticas con el fin de aplicar la fundamentación teórica adquirida',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Segmentación de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Mercadeo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de mercadeo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Grupo objetivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Mercadeo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Población objetiva y público a encuestar',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evolución concepto de mercadeo.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <i>Evolución concepto de mercadeo.<i> YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/DgLQ5jA1pIw',
    },
    {
      tema: 'Identificación del mercado y población objeto. ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <i>Identificación del mercado y población objeto.<i> YouTube. ',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=8talMCmrZ5Q',
    },
    {
      tema: 'Investigación de mercados.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <i>Investigación de mercados.<i> YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=No9yQXsjmXM',
    },
    {
      tema:
        '¿Qué es mercadeo verde (Green Marketing)? Ejemplos de mercadeo verde en el mundo.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <i>¿Qué es mercadeo verde (Green Marketing)? Ejemplos de mercadeo verde en el mundo.<i> YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=PbdVwChb71Q',
    },
    {
      tema: 'Recolección de datos.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <i>Recolección de datos.<i> YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TinhDQv6UH8&t=29s',
    },
    {
      tema: 'Segmentación del mercado.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). <i>Segmentación del mercado.<i> YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=wFqLQDbb03g',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'es el proceso donde se estudia información relevante para un proceso investigativo, generando conclusiones que faciliten el estudio de los datos obtenidos.',
    },
    {
      termino: 'Competitividad empresarial',
      significado:
        'se entiende como la capacidad que tienen las empresas para desarrollar estrategias específicas para el sostenimiento, crecimiento y mejoramiento de la empresa, de acuerdo con las estrategias implementadas dentro de la misma.',
    },
    {
      termino: 'Datos',
      significado:
        'estos son considerados como la información específica y relevante (cualitativa o cuantitativa) arrojada por un proceso investigativo, para su posterior análisis.  ',
    },
    {
      termino: 'Estrategia de Estrategia de mercadeo ',
      significado:
        'son procesos o acciones específicas desarrolladas por las empresas para el cumplimiento de un objetivo previamente planteado por la misma. ',
    },
    {
      termino: 'Fuentes de Información',
      significado:
        'estos se refieren a los instrumentos que proporciona información relevante sobre temas específicos, estas pueden ser de acceso gratuito o de pago',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'se define como la capacidad de las empresas para el aprovechamiento de recursos, esto con el fin de producir ganancias o ingresos a las mismas.',
    },
    {
      termino: 'Recursos empresariales',
      significado:
        'son herramientas o elementos que contribuyen al desarrollo de los diferentes procesos que se ven involucrados dentro de una empresa, estos pueden ser tangibles e intangibles, como lo son el factor económico, el personal, el tiempo, entre otros.',
    },
    {
      termino: '<i>Google analytics</i>',
      significado:
        'es una herramienta gratuita que permite el análisis de información estadística proveniente de un sitio web.',
    },
  ],
  referencias: [
    {
      referencia:
        'Libro: Grasso, L. (2006). <i>Encuestas: elementos para su diseño y Análisis<i> [Ebook]. Encuentro Grupo Editor. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=2718',
    },
    {
      referencia:
        'Libro: Hoyer, W. D., Pieters, R., Maclnnis, D. J. (2018). <i>Comportamiento del consumidor<i> [Ebook]. Cengage Learning. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7493',
    },
    {
      referencia:
        'Libro: Kerin, R. A., Hartley, S. W. (2019). <i>Marketing<i> [Ebook]. McGraw-Hill. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9915',
    },
    {
      referencia:
        'Libro: Sanabria Araya, F. (2018). <i>Investigación de mercados: un enfoque práctico y descriptivo<i> [Ebook]. Ecoe Ediciones. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7409',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
