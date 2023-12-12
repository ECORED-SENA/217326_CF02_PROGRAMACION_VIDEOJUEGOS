export default {
  global: {
    componenteFormativo: 'Conceptos de diseño del videojuego',
    descripcionCurso:
      'Breve reseña de la historia de los videojuegos en la que se dará a conocer los tipos de videojuegos. Se desarrollará la idea base del videojuego, realizando el guion narrativo y técnico, con el <em>storyboard</em>, las mecánicas de juego y los niveles de juego.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Historia e Introducción a los videojuegos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Historia del Video Juego',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Antecedentes del videojuego en Colombia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de videojuegos y plataformas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Pipeline del videojuego',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de gestión de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cronograma y Diagramas de Gantt',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Scrum',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Idea general del videojuego',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Personajes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Narración',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Teoría básica luces y sombras',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Guion técnico',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: '<em>Storyboard</em>',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Objetivos del videojuego',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: '<em>Game Document Design</em>',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<em>Pitch document</em>',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: 'Diagrama de Gantt',
      referencia:
        'Saber Programas. (2017, julio 31). Cómo crear un DIAGRAMA de GANTT en Excel [ Cronograma usando los gráficos ].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=chR6kx4btDQ',
    },
    {
      tema: '<em>Game Document</em>',
      referencia:
        'D Green Game (2022, junio 16). ¿Cómo CREAR tu propio GDD? + plantillas GRATIS | Game Design Document.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GYChRCrj2dk',
    },
    {
      tema: '<em>Pitch Document</em>',
      referencia:
        'Laporta, A. (2020, diciembre 29). Elevator pitch: qué es y claves para elaborarlo paso a paso. APD España; APD.',
      tipo: 'Página Web',
      link: 'https://www.apd.es/que-es-elevator-pitch-y-como-elaborarlo/',
    },
    {
      tema: '<em>Pitch</em>',
      referencia: 'Benjamin Cox. (2016, junio 9). Como Hacer Un Pitch.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=554Fwv7jQMI',
    },
    {
      tema: 'Scrum',
      referencia:
        'Planeta Buhoos. (2021, julio 17). Curso SCRUM desde CERO | Sesión 01 | Buhoos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4UuIE--pspo',
    },
  ],
  glosario: [
    {
      termino: 'Cronograma',
      significado:
        'calendario de trabajo o representación gráfica de las distintas actividades de un proyecto.',
    },
    {
      termino: 'Diagrama de Gantt',
      significado:
        'representación gráfica generalmente con barras horizontales de la evolución de un proyecto. Describe las actividades con su fecha de inicio, fecha de finalización y duración.',
    },
    {
      termino: '<em>Game Design Document</em>',
      significado:
        'síntesis de lo que va a ser el videojuego en sí (concepto, historia, género, número de plataformas, equipo de producción…) y la base de su futuro desarrollo.',
    },
    {
      termino: 'Guion literario',
      significado:
        'documento en el que se expone una narración que ha sido pensada para ser filmada. En él se especifican las acciones y diálogos de los personajes, se da información sobre los escenarios y se incluyen acotaciones para los actores.',
    },
    {
      termino: 'Guion técnico',
      significado:
        'documento que describe de forma detallada las secuencias de imágenes y sonidos que se tienen que capturar en la producción de proyectos como documentales, cortometrajes, películas o anuncios publicitarios entre otros muchos.',
    },
    {
      termino: 'Monetización',
      significado:
        'es el proceso por el que, al entregar un bien o un servicio se recibe una contraprestación, principalmente de carácter económico.',
    },
    {
      termino: 'Pipeline',
      significado:
        'se encarga de administrar el proceso, establecer diferentes fases y adjudicar cargos a los trabajadores o grupos dentro del estudio. Un Pipeline se ejecuta con el fin de organizar todo el proyecto y evitar problemas en cualquier momento de la producción.',
    },
    {
      termino: '<em>Pitch document</em>',
      significado:
        'es el documento que resume toda la información sobre un juego que se quiera crear. El documento debe contener toda la información importante, de modo que incluso si no se está presente para explicarlo todo, se entienda con claridad.',
    },
    {
      termino: '<em>Scrum</em>',
      significado:
        'es un marco de gestión de proyectos de metodología ágil que ayuda a los equipos a estructurar y gestionar el trabajo mediante un conjunto de valores, principios y prácticas.',
    },
    {
      termino: '<em>Storyboard</em>',
      significado:
        'es un conjunto de ilustraciones presentadas de forma secuencial con el objetivo de servir de guía para entender una historia, previsualizar una animación o planificar la estructura de una película.',
    },
    {
      termino: 'Videojuego',
      significado:
        'es una aplicación interactiva orientada al entretenimiento que, a través de ciertos mandos o controles, permite simular experiencias en la pantalla de un televisor, una computadora u otro dispositivo electrónico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Kramarzewski, A. y De Nucci, E. (2018) <em>Practical Game Design</em>. 1a edición. Packt Publishing.',
    },
    {
      referencia:
        'Donovan. (2018). <em>Replay: la historia de los videojuegos</em>. Héroes de papel.',
    },
    {
      referencia:
        'Schell, J. (2018). <em>The art of game design: a book of lenses</em>. Amsterdam ; Boston: Elsevier/Morgan Kaufmann.',
    },
    {
      referencia:
        'Sutherland Jeff (2013). <em>Scrum. El Arte de Hacer el Doble de Trabajo en la Mitad de Tiempo</em>. Editorial Océano.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Cortes',
          cargo: 'Instructor',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
