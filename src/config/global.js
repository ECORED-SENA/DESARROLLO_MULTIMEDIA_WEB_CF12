export default {
  global: {
    componenteFormativo: 'Evaluación del funcionamiento del proyecto web',
    descripcionCurso:
      'Se describen los tipos de pruebas que se pueden aplicar para evaluar la accesibilidad, la escalabilidad y la usabilidad de un proyecto multimedia, utilizando los métodos, técnicas e instrumentos adecuados, de acuerdo con el aspecto a probar, seguido de la elaboración de los informes de resultado correspondientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/flot6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/flot7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/flot8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/flot9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-10'],
        imagen: require('@/assets/curso/portada/flot10.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/flot10.svg'),
      },
      {
        clases: ['banner-principal-decorativo-12'],
        imagen: require('@/assets/curso/portada/flot11.svg'),
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
        titulo: 'Diseño de pruebas para la evaluación del proyecto multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Método de Inspección',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Método de Indagación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Método de Test',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Aplicación de pruebas para la evaluación del proyecto multimedia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Elaboración de informes de resultados ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estrategias de CRM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Beneficios de la estrategia CRM',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Herramientas CRM para emprendedores, autónomos y empresas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Ejemplos de uso de un CRM',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Informes de resultados de las pruebas CRM',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
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
      tema: '1. Diseño de pruebas para la evaluación del proyecto multimedia',
      referencia:
        'Madrid, N. (2020). Las entrevistas dentro del Diseño Centrado en el Usuario.',
      tipo: 'Artículo',
      link:
        'https://www.nachomadrid.com/2020/02/guia-entrevistas-usuarios/#%C2%BFQue_son_las_entrevistas_con_usuarios',
    },
    {
      tema: '1. Diseño de pruebas para la evaluación del proyecto multimedia',
      referencia:
        'Martínez de la Teja, G. (2003). Usabilidad y Accesibilidad en Web.',
      tipo: 'Artículo',
      descarga: '/downloads/6-11.pdf',
    },
    {
      tema: '1. Diseño de pruebas para la evaluación del proyecto multimedia',
      referencia:
        'Stefanini <em>Group</em>. (2021). Guía Stefanini para el desarrollo de la nube: 6 tipos de escalabilidad.',
      tipo: 'Artículo',
      link:
        'https://stefanini.com/es/trends/articulos/6-tipos-de-escalabilidad-para-el-desarrollo-en-la-nube#escalabilidad',
    },
    {
      tema: '1. Diseño de pruebas para la evaluación del proyecto multimedia',
      referencia:
        '<em>uiAccess</em>. (2008). Elaboración de informes de las pruebas de usabilidad.',
      tipo: 'Artículo',
      link: 'http://www.uiaccess.com/justask/es/ut_report.html',
    },
    {
      tema: '1.3. Método de Test',
      referencia:
        'Fernández Casado, P. E. (2019). Usabilidad <em>Web</em>: teoría y uso.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9087',
    },
    {
      tema: '1.3. Método de Test',
      referencia: 'Lorés, J. et al. (2006). Evaluación.',
      tipo: 'Artículo',
      descarga: '/downloads/pruebas.pdf',
    },
    {
      tema: '4. Estrategias de CRM',
      referencia:
        'Cyberclick. Marketing Digital. (2020). ¿Qué es un CRM y para qué sirve? Beneficios + Ejemplos. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ztr24-JBL2s',
    },
    {
      tema: '4. Estrategias de CRM',
      referencia:
        'Marketing4eCommerce. (2020). Los 8 mejores CRM del mundo para 2021. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ye1wBAwh190',
    },
    {
      tema: '4. Estrategias de CRM',
      referencia:
        'Stefanini <em>group</em>. (s.f.). 6 tipos de escalabilidad para el desarrollo en la nube.',
      tipo: 'Pagina <em>web</em>',
      link:
        'https://stefanini.com/es/trends/articulos/6-tipos-de-escalabilidad-para-el-desarrollo-en-la-nube#escalabilidad',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Adjetivo que significa de fácil acceso. Es el grado en el que cualquier persona más allá de sus capacidades físicas o técnicas pueden utilizar un objeto o servicio.',
    },
    {
      termino: 'CRM',
      significado:
        '<em>Customer Relationship Management</em>, o Gestión de las relaciones con clientes) es una aplicación que permite centralizar en una única Base de Datos todas las interacciones entre una empresa y sus clientes.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'Capacidad del <em>software</em> para adaptarse a las necesidades de rendimiento a medida que el número de usuarios crece.',
    },
    {
      termino: 'Estándar',
      significado:
        'Es un requisito, regla o recomendación que se basa en la práctica y en principios que se han probado y al cual han llegado a un acuerdo los profesionales autorizados a nivel local, nacional e internacional.',
    },
    {
      termino: 'Evaluación',
      significado:
        'El concepto de evaluación se refiere a la acción y a la consecuencia de evaluar y que permite indicar, valorar, establecer, apreciar o calcular la importancia de una determinada cosa o asunto.',
    },
    {
      termino: 'Experiencia de Usuario (UX)',
      significado:
        'Percepciones y respuestas de la persona resultantes del uso y / o uso anticipado de un producto, sistema o servicio.',
    },
    {
      termino: 'Indagación',
      significado:
        'Proceso de tratar de llegar al conocimiento de una cosa discurriendo o por conjeturas y señales.',
    },
    {
      termino: 'Inspección',
      significado:
        'Nombre genérico para un conjunto de métodos basados en evaluadores que examinan aspectos relacionados con la usabilidad de la interfaz.',
    },
    {
      termino: 'Interfaz de Usuario -UI-',
      significado:
        'Punto de interacción y comunicación usuario – dispositivo, que incluye aspectos de visualización como la pantalla, teclado, mouse, entre otros.',
    },
    {
      termino: '<em>Test</em>',
      significado:
        'Método de usabilidad donde los usuarios representativos trabajan en tareas utilizando un prototipo (Lorés,2006).',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Medida en la que un producto puede ser usado por los usuarios para lograr sus objetivos con efectividad y eficiencia en un contexto específico.',
    },
  ],
  referencias: [
    {
      referencia: 'Blancarte, O. (2017). Escalabilidad Horizontal y Vertical.',
      link:
        'https://www.oscarblancarteblog.com/2017/03/07/escalabilidad-horizontal-y-vertical/',
    },
    {
      referencia:
        'Cañadas Hernández, E. (2019). Métodos y técnicas de evaluación de la usabilidad sin personas usuarias.',
      link: 'https://medium.com/@eliseohdez',
    },
    {
      referencia: 'Definición.de. (s,f.). Concepto de evaluación.',
      link: 'https://definicion.de/?s=Evaluaci%C3%B3n',
    },
    {
      referencia: 'Churchville, F. (s.f.). Interfaz de usuario (UI).',
      link:
        'https://searchdatacenter.techtarget.com/es/definicion/Interfaz-de-usuario-UI',
    },
    {
      referencia: 'Elegir CRM. (s.f.). ¿Qué es un CRM?',
      link: 'https://www.elegircrm.com/crm/que-es-un-crm',
    },
    {
      referencia:
        'Fernández Casado, P. E. (2019). Usabilidad <em>Web</em>: teoría y uso.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9087',
    },
    {
      referencia:
        'Gesuitti, D. (2019). ¿Qué es la usabilidad en <em>Software</em>?',
      link:
        'https://neocomplexx.com/es/2017/06/27/que-es-la-usabilidad-en-software/',
    },
    {
      referencia: 'Granollers, T. (2014). Inspección de estándares',
      link: 'https://mpiua.invid.udl.cat/inspeccion-de-estandares/',
    },
    {
      referencia:
        '<em>International Standard</em> ISO 9241-210. (2010). <em>Ergonomics of human-systems interaction-Part</em> 210: <em>Human-centred design for interactive systems</em>.',
      link:
        'https://richardcornish.s3.amazonaws.com/static/pdfs/iso-9241-210.pdf',
    },
    {
      referencia:
        'Marco de Desarrollo de la Junta de Andalucía. (s.f.). Buenas prácticas en el diseño de la escalabilidad.',
      link:
        'http://www.juntadeandalucia.es/servicios/madeja/contenido/libro-pautas/74#Funcionamiento_en_modo_asincrono',
    },
    {
      referencia:
        'López Sanz, M. (2016). Programación <em>web</em> en el entorno del cliente.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7955 ',
    },
    {
      referencia: 'Lorés, J., Sendín, M. y Agost, J. (2006). Evaluación.',
      link: 'https://aipo.es/libro/pdf/04Evalua.pdf',
    },
    {
      referencia:
        'Stefanini <em>Group</em>. (2021). Guía Stefanini para el desarrollo en la nube. 6 tipos de escalabilidad.',
      link:
        'https://stefanini.com/es/trends/articulos/6-tipos-de-escalabilidad-para-el-desarrollo-en-la-nube#escalabilidad',
    },
    {
      referencia:
        '<em>Web Accessibility Initiative</em> -WAI-. (2019). Estrategias, estándares y materiales para hacer la web accesible para gente con discapacidades.',
      link:
        'https://www.w3.org/WAI/fundamentals/accessibility-principles/es#alternatives',
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
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
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
        nombre: 'Antonio Vecino Valero',
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
        nombre: 'Carlos Andrés Díaz Pinto',
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
