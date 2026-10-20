export default {
  global: {
    Name: 'Presupuesto y responsabilidad fiscal solidaria',
    Description:
      'La planeación presupuestal y el cumplimiento fiscal permiten que las organizaciones de economía solidaria asignen sus recursos de manera ordenada, anticipen necesidades y atiendan sus obligaciones legales. Este componente desarrolla criterios para recolectar información, formular y controlar presupuestos, organizar planes de trabajo e identificar responsabilidades tributarias relacionadas con el RUT, la facturación, los impuestos, la información exógena, las sanciones y la prevención de prácticas de evasión.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
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
        titulo: 'Fundamentos del presupuesto en organizaciones solidarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto, finalidad y elementos del presupuesto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de presupuesto y ámbitos de aplicación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Etapas del proceso presupuestal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Políticas y controles presupuestale',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Relación entre presupuesto, planeación y finalidad social',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Organización y recolección de información presupuestal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estructura organizacional, áreas y niveles de autoridad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Identificación de necesidades por áreas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Canales de comunicación y responsables de la información',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Instrumentos para recolectar información presupuestal',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Controles, tiempos y validación de los datos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Formulación, aprobación y seguimiento del presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Plan de trabajo, actividades y responsables',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Proyección de ingresos y recursos disponibles',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Proyección de costos, gastos e inversiones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Consolidación, presentación y aprobación del presupuesto',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Ejecución, seguimiento, ajustes y acciones de mejora',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Responsabilidades tributarias de las organizaciones solidarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Registro Único Tributario y Número de Identificación Tributaria',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Régimen tributario y responsabilidades según el tipo de organización',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Facturación electrónica e información exógena',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'IVA, ICA y renta',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Planeación tributaria y calendario de obligaciones',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sanciones y prevención del incumplimiento tributario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estatuto Tributario, UVT y principales sanciones',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Incumplimientos, correcciones y prevención de la evasión tributaria',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Controles para fortalecer el cumplimiento fiscal',
            hash: 't_5_3',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
