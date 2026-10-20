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
      termino: 'Ajuste presupuestal',
      significado:
        'modificación autorizada de una partida para adicionar, reducir, trasladar o reprogramar recursos durante la ejecución del presupuesto.',
    },
    {
      termino: 'Calendario tributario',
      significado:
        'programación que establece las fechas para preparar, presentar y pagar las obligaciones fiscales de una organización.',
    },
    {
      termino: 'Costo',
      significado:
        'valor de los recursos utilizados directamente para producir un bien, prestar un servicio o desarrollar una actividad.',
    },
    {
      termino: 'Evasión tributaria',
      significado:
        'conducta deliberada orientada a ocultar información o reducir indebidamente el valor de una obligación fiscal.',
    },
    {
      termino: 'Facturación electrónica',
      significado:
        'sistema utilizado para generar, transmitir, validar y conservar las facturas de venta en formato electrónico.',
    },
    {
      termino: 'Gasto',
      significado:
        'recurso destinado al funcionamiento administrativo, comercial, financiero o general de la organización.',
    },
    {
      termino: 'ICA',
      significado:
        'impuesto de industria y comercio aplicado por los municipios y distritos a determinadas actividades industriales, comerciales y de servicios.',
    },
    {
      termino: 'Información exógena',
      significado:
        'datos sobre operaciones realizadas con terceros que ciertos obligados deben reportar a la administración tributaria.',
    },
    {
      termino: 'Ingreso',
      significado:
        'recurso generado por la venta de bienes, la prestación de servicios, rendimientos u otras operaciones reconocidas contablemente como ingreso.',
    },
    {
      termino: 'Inversión',
      significado:
        'destinación de recursos para adquirir o mejorar bienes que apoyan el funcionamiento de la organización durante varios periodos.',
    },
    {
      termino: 'IVA',
      significado:
        'impuesto sobre las ventas generado en determinadas operaciones de venta de bienes y prestación de servicios.',
    },
    {
      termino: 'NIT',
      significado:
        'número de Identificación Tributaria asignado para individualizar a una persona o entidad frente a la administración tributaria.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'instrumento que proyecta y organiza los ingresos, costos, gastos e inversiones de un periodo determinado.',
    },
    {
      termino: 'RUT',
      significado:
        'registro Único Tributario utilizado para identificar, ubicar y clasificar a los sujetos con obligaciones administradas por la DIAN.',
    },
    {
      termino: 'UVT',
      significado:
        'unidad de valor tributario empleada para expresar y actualizar valores, límites y sanciones establecidos en la normativa fiscal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1983, 6 de julio). Ley 14 de 1983. Por la cual se fortalecen los fiscos de las entidades territoriales y se dictan otras disposiciones. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=267',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1988, 23 de diciembre). Ley 79 de 1988. Por la cual se actualiza la legislación cooperativa. SUIN-Juriscol.',
      link: 'https://www.suin-juriscol.gov.co/viewdocument.asp?ruta=leyes%2F1625669',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1998, 4 de agosto). Ley 454 de 1998. Por la cual se determina el marco conceptual que regula la economía solidaria, se transforma el Departamento Administrativo Nacional de Cooperativas en el Departamento Administrativo Nacional de la Economía Solidaria, se crea la Superintendencia de la Economía Solidaria, se crea el Fondo de Garantías para las Cooperativas Financieras y de Ahorro y Crédito, se dictan normas sobre la actividad financiera de las entidades de naturaleza cooperativa y se expiden otras disposiciones. SUIN-Juriscol.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes%2F1660557',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016, 29 de diciembre). Ley 1819 de 2016. Por medio de la cual se adopta una reforma tributaria estructural, se fortalecen los mecanismos para la lucha contra la evasión y la elusión fiscal, y se dictan otras disposiciones. Normograma DIAN.',
      link: 'https://normograma.dian.gov.co/dian/compilacion/docs/ley_1819_2016.htm',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2022, 13 de diciembre). Ley 2277 de 2022. Por medio de la cual se adopta una reforma tributaria para la igualdad y la justicia social y se dictan otras disposiciones. SUIN-Juriscol.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes%2F30045028',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-a). Actualización [Régimen Tributario Especial]. Recuperado el 14 de septiembre de 2026, de',
      link: 'https://www.dian.gov.co/impuestos/sociedades/Regimen-Tributario-Especial-RTE/Actualizacion/Paginas/default.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-b). Calendario tributario. Recuperado el 14 de septiembre de 2026, de',
      link: 'https://www.dian.gov.co/Paginas/CalendarioTributario.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-c). Documento soporte con sujetos no obligados a expedir factura de venta y/o documento equivalente.',
      link: 'https://www.dian.gov.co/impuestos/Paginas/Sistema-de-Factura-Electronica/Documento-Soporte-Adquisiciones-No-Obligados.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-d). Documento soporte de pago de nómina electrónica.',
      link: 'https://www.dian.gov.co/impuestos/Paginas/Sistema-de-Factura-Electronica/Documento-Soporte-de-Pago-de-Nomina-Electronica.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-e). Normatividad [Información exógena tributaria]. Recuperado el 14 de septiembre de 2026, de',
      link: 'https://www.dian.gov.co/impuestos/sociedades/exogenatributaria/normatividad/paginas/default.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-f). RUT.',
      link: 'https://www.dian.gov.co/tramitesservicios/tramites-y-servicios/tributarios/Paginas/RUT.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.-g). Sistema de factura electrónica.',
      link: 'https://www.dian.gov.co/impuestos/Paginas/Sistema-de-Factura-Electronica/Sistema-de-Factura-Electronica.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2025a, 23 de septiembre). Resolución 000227 de 2025. Por la cual se expide la Resolución Única en Materia Tributaria, Aduanera y Cambiaria en lo de competencia de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN).',
      link: 'https://www.dian.gov.co/normatividad/Paginas/Resolucion-000227-del-23092025.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2025b, 15 de diciembre). Resolución 000238 de 2025. Por medio de la cual, en desarrollo del artículo 868 del Estatuto Tributario, se sustituye el artículo 1.2.1 del Título 2 de la Parte 1 de la Resolución Única en Materia Tributaria, Aduanera y Cambiaria de la Dirección de Impuestos y Aduanas Nacionales (DIAN), Resolución número 000227 de 2025, para fijar el valor de la Unidad de Valor Tributario (UVT) aplicable para el año 2026.',
      link: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0238_2025.htm',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1983, 3 de noviembre). Decreto 3070 de 1983. Por el cual se reglamenta parcialmente la Ley 14 de 1983 y se dictan otras disposiciones. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3338',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1989, 30 de marzo). Decreto 624 de 1989. Por el cual se expide el Estatuto Tributario de los impuestos administrados por la Dirección General de Impuestos Nacionales. SUIN-Juriscol.',
      link: 'https://suin-juriscol.gov.co/viewDocument.asp?id=1132325',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2026, 2 de julio). Actualización Circular Básica Contable y Financiera.',
      link: 'https://supersolidaria.gov.co/es/content/actualizacion-circular-basica-contable-y-financiera',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
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
