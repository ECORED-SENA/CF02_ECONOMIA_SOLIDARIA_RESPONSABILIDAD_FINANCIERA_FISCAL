<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos del presupuesto en organizaciones solidarias
      p.mb-5 El presupuesto permite anticipar los recursos que una organización solidaria espera administrar durante un periodo y organizar su utilización conforme a sus necesidades. Como instrumento de gestión, contribuye a establecer prioridades, orientar decisiones y mantener correspondencia entre la capacidad financiera, las actividades previstas y los propósitos institucionales.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto, finalidad y elementos del presupuesto
      p El presupuesto es una estimación organizada de los recursos, ingresos, costos, gastos e inversiones previstos para un periodo. Permite convertir necesidades y objetivos en valores monetarios, establecer prioridades y apoyar la toma de decisiones. Se orienta hacia el futuro y se diferencia de las operaciones efectivamente ejecutadas durante el periodo. 
      p.mb-5 Para estructurar el presupuesto, es necesario integrar varios elementos que permiten organizar las proyecciones y orientar su ejecución. A continuación, se presenta la primera parte:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Periodo presupuestal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Tiempo durante el cual se proyectan y controlan los recursos. Por ejemplo, un presupuesto anual de enero a diciembre.
            .row(titulo="Objetivos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Resultados económicos, administrativos o sociales que se esperan alcanzar. Por ejemplo, ampliar la cobertura de programas para los asociados.
            .row(titulo="Recursos e ingresos proyectados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Fuentes que se espera tener disponibles durante el periodo, como ingresos por servicios, aportes, convenios y rendimientos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img1.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img2.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Costos proyectados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recursos directamente relacionados con la prestación de servicios o producción de bienes, como materiales e insumos.
            .row(titulo="Gastos proyectados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recursos necesarios para administrar y mantener la organización, como honorarios, servicios públicos y mantenimiento.
            .row(titulo="Inversiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recursos destinados a adquirir o mejorar bienes de uso prolongado, como equipos, adecuaciones o herramientas tecnológicas.
      p.mb-5 La segunda parte de los elementos son los que se presentan a continuación:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img3.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Programas y fondos
                p.mb-0.text-center Valores destinados a actividades sociales, educativas o solidarias, como formación, auxilios y programas de bienestar.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img4.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Obligaciones
                p.mb-0.text-center Pagos que deben atenderse durante el periodo, como cuotas de créditos, impuestos y cuentas con proveedores.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img5.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Responsables
                p.mb-0.text-center Áreas, comités o personas encargadas de gestionar las partidas, como gerencia, tesorería, área contable o comités.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img6.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Cronograma
                p.mb-0.text-center Fechas previstas para recibir o utilizar los recursos, como la programación trimestral de determinadas actividades.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img7.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Supuestos
                p.mb-0.text-center Condiciones utilizadas para realizar las proyecciones, como variaciones esperadas en precios o participación de asociados.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img8.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Indicadores
                p.mb-0.text-center Medidas utilizadas para comparar lo programado y lo ejecutado, como porcentaje de ejecución o número de beneficiarios.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img9.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Controles
                p.mb-0.text-center Procedimientos para autorizar, registrar y verificar la ejecución, como disponibilidad presupuestal, aprobación y revisión de soportes.
      p El presupuesto puede utilizar información contable de periodos anteriores, pero no sustituye la contabilidad. Asimismo, una fuente incluida en la planeación presupuestal no determina automáticamente su clasificación o reconocimiento contable.
      p.mb-5 La distribución de los recursos permite aplicar estos elementos al presupuesto anual de la organización:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-10
          .caja-2(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa proyecta recibir $180.000.000 durante el siguiente año por servicios, aportes administrativos y otros recursos autorizados. Para preparar el presupuesto, consulta los resultados del periodo anterior, solicita las necesidades de cada área y establece las actividades que desarrollará para sus asociados.
            p La administración distribuye los recursos proyectados entre los costos de los servicios, los gastos de funcionamiento, los programas sociales, la compra de equipos y una partida para situaciones imprevistas. La propuesta es revisada por los responsables y presentada al órgano competente conforme a los estatutos.
            p La siguiente tabla presenta un ejemplo simplificado de asignación de recursos para un periodo anual.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Distribución presupuestal de una organización solidaria
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Partida presupuestal
                    th.ajuste-border-tabla.texto-left Finalidad
                    th.ajuste-border-tabla.texto-left Valor proyectado
                    th.texto-left Participación
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos de prestación de servicios
                    td.ajuste-border-tabla.texto-left Financiar materiales, insumos y actividades directamente relacionadas con los servicios.
                    td.ajuste-border-tabla.texto-left $95.000.000
                    td.texto-left 52,8 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Gastos administrativos
                    td.ajuste-border-tabla.texto-left Atender nómina, honorarios, servicios públicos y funcionamiento.
                    td.ajuste-border-tabla.texto-left $40.000.000
                    td.texto-left 22,2 %
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Programas sociales
                    td.ajuste-border-tabla.texto-left Ejecutar actividades de educación, solidaridad y bienestar.
                    td.ajuste-border-tabla.texto-left $25.000.000
                    td.texto-left 13,9 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Inversión en equipos
                    td.ajuste-border-tabla.texto-left Adquirir herramientas tecnológicas y bienes necesarios para la operación.
                    td.ajuste-border-tabla.texto-left $12.000.000
                    td.texto-left 6,7 %
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Contingencias
                    td.ajuste-border-tabla.texto-left Atender situaciones no previstas que cuenten con autorización.
                    td.ajuste-border-tabla.texto-left $8.000.000
                    td.texto-left 4,4 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Total
                    td.ajuste-border-tabla.texto-left Distribución de los recursos proyectados para el periodo.
                    td.ajuste-border-tabla.texto-left $180.000.000
                    td.texto-left 100 %
            p El resultado presupuestal proyectado puede determinarse mediante la siguiente relación:
            .row.justify-content-center.mb-3(data-aos="zoom-in")
              .col-xl-11
                .caja-3
                  h5.mb-0 Resultado presupuestal proyectado = ingresos y recursos disponibles − costos, gastos e inversiones previstos
            p Este cálculo inicial permite identificar si los recursos proyectados son suficientes para financiar las actividades. Sin embargo, debe complementarse con la programación de los recaudos y pagos, porque contar con un presupuesto equilibrado no garantiza que el dinero esté disponible en el momento en que se requiera.
            p.mb-0 De esta forma, el presupuesto transforma las necesidades y objetivos de la organización en una programación financiera verificable. La identificación de sus elementos permite establecer cuánto se espera recibir, cómo se utilizarán los recursos, quién será responsable de su ejecución y qué controles se aplicarán durante el periodo.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Tipos de presupuesto y ámbitos de aplicación
      p Los presupuestos pueden diferenciarse según la información que proyectan y la posibilidad de ajustar sus valores frente a cambios en la actividad. También pueden aplicarse a distintas áreas, fondos, programas o proyectos. Esta última condición corresponde al ámbito de aplicación y no constituye un tipo adicional de presupuesto.
      p.mb-5 Los principales tipos de presupuesto se organizan según la información que proyectan y la forma en que responden a cambios en la actividad:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Tipos de presupuesto en una organización solidaria
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Tipo de presupuesto
                      th.ajuste-border-tabla.texto-left Información que proyecta
                      th.ajuste-border-tabla.texto-left Aplicación principal
                      th.texto-left Ejemplo
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto de ingresos
                      td.ajuste-border-tabla.texto-left Recursos que se espera recibir durante el periodo.
                      td.ajuste-border-tabla.texto-left Estimar la capacidad de financiación de la organización.
                      td.texto-left Ingresos por servicios, convenios y rendimientos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto de costos
                      td.ajuste-border-tabla.texto-left Recursos directamente relacionados con los bienes o servicios ofrecidos.
                      td.ajuste-border-tabla.texto-left Determinar cuánto cuesta desarrollar las actividades principales.
                      td.texto-left Materiales e insumos para un proyecto productivo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto de gastos
                      td.ajuste-border-tabla.texto-left Recursos necesarios para la administración y el funcionamiento.
                      td.ajuste-border-tabla.texto-left Controlar los consumos de las áreas administrativas.
                      td.texto-left Nómina, honorarios, arrendamiento y servicios públicos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto de inversión
                      td.ajuste-border-tabla.texto-left Recursos destinados a adquirir, mejorar o adecuar bienes de uso prolongado.
                      td.ajuste-border-tabla.texto-left Planear el fortalecimiento de la capacidad operativa.
                      td.texto-left Compra de equipos o adecuación de instalaciones.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto de efectivo
                      td.ajuste-border-tabla.texto-left Entradas y salidas de dinero previstas en fechas determinadas.
                      td.ajuste-border-tabla.texto-left Anticipar faltantes o excedentes temporales de liquidez.
                      td.texto-left Programación mensual de recaudos y pagos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto de fondos sociales
                      td.ajuste-border-tabla.texto-left Recursos destinados a finalidades educativas, solidarias o de bienestar.
                      td.ajuste-border-tabla.texto-left Programar actividades y beneficios para los asociados.
                      td.texto-left Talleres, auxilios y jornadas de bienestar.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto por proyectos
                      td.ajuste-border-tabla.texto-left Recursos asociados con una iniciativa específica.
                      td.ajuste-border-tabla.texto-left Controlar actividades, responsables y resultados de un proyecto.
                      td.texto-left Programa de fortalecimiento productivo para asociados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto general
                      td.ajuste-border-tabla.texto-left Consolidación de los presupuestos parciales de la organización.
                      td.ajuste-border-tabla.texto-left Presentar una visión integral de los recursos y sus aplicaciones.
                      td.texto-left Presupuesto anual aprobado para todas las áreas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto fijo
                      td.ajuste-border-tabla.texto-left Valores calculados para un nivel de actividad definido.
                      td.ajuste-border-tabla.texto-left Controlar partidas que presentan poca variación.
                      td.texto-left Arrendamiento anual de la sede.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto flexible
                      td.ajuste-border-tabla.texto-left Valores que pueden ajustarse según el nivel real de actividad.
                      td.ajuste-border-tabla.texto-left Analizar costos y gastos que cambian con la operación.
                      td.texto-left Materiales calculados según el número de participantes.
          p.mb-5 A continuación, se presenta un ejemplo:
          .caja-1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img10.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-1_p
                h5 Ejemplo aplicado
                p Una cooperativa proyecta realizar seis jornadas de formación para 300 asociados. Para organizar los recursos, prepara un presupuesto de ingresos con los valores disponibles, un presupuesto de gastos para honorarios y logística, y un presupuesto de efectivo que establece en qué meses se recibirán y pagarán los recursos.
                p La organización también utiliza un presupuesto flexible para los materiales educativos. Inicialmente calcula una participación de 50 personas por jornada, pero establece un valor unitario que permite ajustar la partida si el número de asistentes aumenta o disminuye. Los gastos fijos, como el alquiler del salón, permanecen iguales dentro de las condiciones contratadas.
                p En el caso de los materiales educativos, el valor ajustado puede calcularse mediante la siguiente relación:
                .row.justify-content-center.mb-3(data-aos="zoom-in")
                  .col-xl-12
                    .caja-4 
                      h5.mb-0.text-center Presupuesto flexible = cantidad real de participantes × costo presupuestado por participante
                p Si el costo de los materiales es de $35.000 por persona y finalmente participan 280 asociados:
                h5.text-center 280 × $35.000 = $9.800.000
                p.mb-0 El cálculo permite ajustar la partida al nivel real de participación, mientras que los gastos fijos se mantienen conforme a las condiciones inicialmente previstas.
      p.mb-5 Estos presupuestos pueden aplicarse en diferentes ámbitos de la organización, de acuerdo con la finalidad de los recursos y el control requerido:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Ámbitos de aplicación del presupuesto
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Ámbito de aplicación
                      th.ajuste-border-tabla.texto-left Partidas que puede administrar
                      th.ajuste-border-tabla.texto-left Responsable posible
                      th.texto-left Control requerido
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Administración
                      td.ajuste-border-tabla.texto-left Nómina, honorarios, servicios, arrendamientos y suministros.
                      td.ajuste-border-tabla.texto-left Gerencia o área administrativa.
                      td.texto-left Comparación mensual entre lo presupuestado y lo ejecutado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tesorería
                      td.ajuste-border-tabla.texto-left Recaudos, pagos, saldos bancarios y necesidades de efectivo.
                      td.ajuste-border-tabla.texto-left Tesorería.
                      td.texto-left Programación de entradas y salidas de dinero.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Contabilidad
                      td.ajuste-border-tabla.texto-left Impuestos, depreciaciones, obligaciones y ajustes de cierre.
                      td.ajuste-border-tabla.texto-left Área contable.
                      td.texto-left Conciliación con registros y políticas contables.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Prestación de servicios
                      td.ajuste-border-tabla.texto-left Materiales, personal y recursos utilizados directamente en las actividades.
                      td.ajuste-border-tabla.texto-left Área operativa.
                      td.texto-left Análisis del costo por servicio o beneficiario.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inversión
                      td.ajuste-border-tabla.texto-left Equipos, tecnología, infraestructura y adecuaciones.
                      td.ajuste-border-tabla.texto-left Gerencia y órgano de administración.
                      td.texto-left Autorización, cotizaciones y seguimiento al proyecto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fondo de educación
                      td.ajuste-border-tabla.texto-left Formación, capacitación y materiales educativos.
                      td.ajuste-border-tabla.texto-left Comité de educación.
                      td.texto-left Verificación de la finalidad, beneficiarios y evidencias.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fondo de solidaridad
                      td.ajuste-border-tabla.texto-left Auxilios y programas de apoyo autorizados.
                      td.ajuste-border-tabla.texto-left Comité o responsable del fondo.
                      td.texto-left Cumplimiento del reglamento y disponibilidad de recursos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bienestar social
                      td.ajuste-border-tabla.texto-left Actividades de salud, recreación y apoyo familiar.
                      td.ajuste-border-tabla.texto-left Comité de bienestar.
                      td.texto-left Seguimiento a cobertura, ejecución y resultados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proyectos especiales
                      td.ajuste-border-tabla.texto-left Actividades financiadas con convenios o recursos específicos.
                      td.ajuste-border-tabla.texto-left Coordinador del proyecto.
                      td.texto-left Control por actividad, fuente y cronograma.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Organización consolidada
                      td.ajuste-border-tabla.texto-left Totalidad de ingresos, costos, gastos, inversiones y programas.
                      td.ajuste-border-tabla.texto-left Gerencia y consejo de administración.
                      td.texto-left Revisión integral y presentación al órgano competente.
          p.mb-0 Seleccionar el tipo de presupuesto y definir su ámbito de aplicación facilita asignar responsabilidades, controlar los recursos y consolidar información para apoyar la toma de decisiones.
          Separador
          #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.3 Etapas del proceso presupuestal
          p El proceso presupuestal organiza las actividades que permiten pasar de las necesidades institucionales a una programación aprobada y posteriormente evaluada. En este apartado se presenta su estructura general, sin profundizar en los procedimientos de formulación, aprobación, ejecución y seguimiento que se desarrollarán posteriormente.
          p.mb-5 El proceso puede organizarse en los siguientes pasos:
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Planeación
                    p.mb-0 Se definen el periodo, los objetivos, las políticas, las prioridades y el cronograma que orientarán el presupuesto. Estas decisiones proporcionan criterios iniciales para que las áreas identifiquen sus necesidades y preparen la información requerida.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img11.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img12.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Recolección y formulación
                    p.mb-0 Las áreas, comités y responsables aportan necesidades, datos históricos, cotizaciones y proyecciones. Con esta información se estiman los recursos, costos, gastos, inversiones y programas que conformarán las propuestas presupuestales parciales.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Consolidación y revisión
                    p.mb-0 Las propuestas se integran en un proyecto general. La revisión permite detectar duplicidades, inconsistencias, necesidades de financiación y diferencias entre los recursos proyectados y las aplicaciones previstas antes de someter el presupuesto a aprobación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img13.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img14.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Aprobación
                    p.mb-0 La propuesta revisada se presenta ante la instancia competente según los estatutos y procedimientos internos. La aprobación formaliza las partidas, valores y responsabilidades, pero no significa que todos los recursos estén disponibles o hayan sido ejecutados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Ejecución
                    p.mb-0 Los recursos se reciben y utilizan conforme a las partidas y autorizaciones aprobadas. Durante esta etapa se generan recaudos, compromisos y pagos, cuya gestión debe mantener correspondencia con las finalidades previstas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img15.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img16.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Seguimiento, ajuste y evaluación
                    p.mb-0 Se comparan los valores presupuestados y ejecutados, se analizan las diferencias y se tramitan los ajustes justificados mediante los procedimientos establecidos. Al cierre del periodo se valoran los resultados para orientar posteriores decisiones presupuestales.
      p El resultado presupuestal proyectado expresa la diferencia estimada entre los recursos y las aplicaciones previstas. Este resultado no equivale al excedente contable, que se determina a partir de las operaciones efectivamente reconocidas durante el periodo.
      p.mb-5 Para aplicar las etapas del proceso presupuestal en una situación completa, consulte el siguiente documento que contiene un ejemplo de programación, seguimiento y resultado proyectado del caso.
      .caja-5.mb-5(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Ejemplo aplicado etapas del proceso presupuestal
            p.mb-0 Consulte el documento “#[b Anexo 1. Ejemplo aplicado etapa del proceso presupuestal]” y profundice sobre programación, seguimiento y resultado.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Etapas_Proceso_Presupuestal.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      p.mb-0 En conjunto, estas etapas permiten transformar las necesidades institucionales en una programación financiera ordenada, con responsabilidades definidas y criterios para comparar lo previsto con lo ejecutado.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Políticas y controles presupuestales
      p Las políticas presupuestales establecen criterios para orientar la gestión de los recursos; los controles permiten comprobar que esas orientaciones se cumplan. Aunque se relacionan, cumplen funciones diferentes y deben responder a las competencias, estatutos, reglamentos y procedimientos establecidos por la organización.
      p.mb-5 Estas políticas establecen criterios para proyectar, priorizar y autorizar los recursos antes y durante la formulación presupuestal:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Periodo presupuestal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define la fecha inicial y final de la planeación. Su aplicación permite elaborar un presupuesto anual y establecer periodos de seguimiento, por ejemplo, mensual o trimestral.
            .row(titulo="Proyección de ingresos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece los criterios para calcular los recursos esperados. Para realizar las estimaciones pueden utilizarse información histórica, contratos, convenios y proyecciones relacionadas con los servicios.
            .row(titulo="Priorización de recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina el orden para atender necesidades y proyectos. Permite priorizar obligaciones, funcionamiento y programas sociales previamente aprobados según las condiciones de la organización.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img18.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img19.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Límites de gastos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Fija montos máximos por área, actividad o concepto. Puede establecer topes para honorarios, materiales, desplazamientos, compras u otros conceptos incluidos en el presupuesto.
            .row(titulo="Niveles de autorización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina quién puede aprobar compromisos y pagos según su valor. Los límites de autorización se asignan de acuerdo con las responsabilidades de la gerencia, el consejo de administración u otras instancias competentes.
            .row(titulo="Uso de fondos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Regula la ejecución de recursos con destinación específica. Los fondos de educación, solidaridad u otros deben utilizarse únicamente para las finalidades autorizadas.
      p.mb-5 Durante la ejecución, otras políticas regulan los cambios, controles y responsabilidades necesarios para mantener el presupuesto dentro de las condiciones aprobadas:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Modificaciones presupuestales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Modificaciones presupuestales
              p.mb-0 Define los procedimientos para trasladar, adicionar o reducir partidas. Cualquier modificación debe estar justificada y contar con la aprobación correspondiente antes de cambiar los valores autorizados.
        .py-3.py-md-4(titulo="Contingencias")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Contingencias
              p.mb-0 Establece las condiciones para atender situaciones imprevistas. Una partida de contingencia debe utilizarse únicamente cuando exista una necesidad justificada y cuente con la autorización requerida.
        .py-3.py-md-4(titulo="Contratación y compras")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Contratación y compras
              p.mb-0 Determina los requisitos para seleccionar proveedores y adquirir bienes o servicios. Puede incluir la solicitud de cotizaciones y la verificación de disponibilidad antes de asumir compromisos.
        .py-3.py-md-4(titulo="Seguimiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Seguimiento
              p.mb-0 Define la frecuencia y el contenido de los informes presupuestales. Su aplicación permite presentar comparativos periódicos entre los valores programados y los efectivamente ejecutados.
        .py-3.py-md-4(titulo="Responsabilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsabilidad
              p.mb-0 Identifica quién administra y responde por cada partida. Las responsabilidades pueden asignarse por área, fondo, programa o proyecto según la estructura de la organización.
        .py-3.py-md-4(titulo="Cierre presupuestal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cierre presupuestal
              p.mb-0 Establece el procedimiento para evaluar la ejecución al finalizar el periodo. Comprende conciliar saldos, explicar diferencias y documentar los recursos o compromisos que permanezcan pendientes.
      p.mb-5 Una vez definidas las políticas, los controles presupuestales permiten verificar su cumplimiento durante la ejecución y detectar oportunamente diferencias o desviaciones. La siguiente tabla detalla los controles que pueden aplicarse en las diferentes etapas de utilización de los recursos:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Controles aplicados a la ejecución presupuestal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Momento del control
                      th.ajuste-border-tabla.texto-left Control presupuestal
                      th.ajuste-border-tabla.texto-left Pregunta de verificación
                      th.texto-left Evidencia esperada
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Antes de la operación
                      td.ajuste-border-tabla.texto-left Verificación de la partida
                      td.ajuste-border-tabla.texto-left ¿La actividad se encuentra incluida en el presupuesto?
                      td.texto-left Presupuesto aprobado y plan de trabajo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Antes de la operación
                      td.ajuste-border-tabla.texto-left Disponibilidad presupuestal
                      td.ajuste-border-tabla.texto-left ¿Existe saldo suficiente para asumir el compromiso?
                      td.texto-left Consulta o certificación de disponibilidad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Antes de la operación
                      td.ajuste-border-tabla.texto-left Revisión de la finalidad
                      td.ajuste-border-tabla.texto-left ¿El gasto corresponde al área, fondo o proyecto que lo financiará?
                      td.texto-left Reglamento, proyecto o descripción de la partida.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Antes de la operación
                      td.ajuste-border-tabla.texto-left Autorización
                      td.ajuste-border-tabla.texto-left ¿La operación fue aprobada por la instancia competente?
                      td.texto-left Acta, orden o autorización firmada.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Antes de la operación
                      td.ajuste-border-tabla.texto-left Verificación de precios
                      td.ajuste-border-tabla.texto-left ¿El valor es razonable frente a las condiciones del mercado?
                      td.texto-left Cotizaciones y evaluación de propuestas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Durante la ejecución
                      td.ajuste-border-tabla.texto-left Seguimiento al cronograma
                      td.ajuste-border-tabla.texto-left ¿La actividad se está realizando en las fechas previstas?
                      td.texto-left Cronograma e informe de avance.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Durante la ejecución
                      td.ajuste-border-tabla.texto-left Control del valor comprometido
                      td.ajuste-border-tabla.texto-left ¿Los compromisos asumidos permanecen dentro del límite aprobado?
                      td.texto-left Contrato, orden de compra y auxiliar presupuestal.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Durante la ejecución
                      td.ajuste-border-tabla.texto-left Revisión de soportes
                      td.ajuste-border-tabla.texto-left ¿Los documentos corresponden a los bienes o servicios recibidos?
                      td.texto-left Factura, recibido, informe y comprobante.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Después de la operación
                      td.ajuste-border-tabla.texto-left Comparación presupuestal
                      td.ajuste-border-tabla.texto-left ¿Cuál es la diferencia entre el valor proyectado y el ejecutado?
                      td.texto-left Informe comparativo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Después de la operación
                      td.ajuste-border-tabla.texto-left Conciliación contable
                      td.ajuste-border-tabla.texto-left ¿La ejecución presupuestal coincide con los registros contables?
                      td.texto-left Auxiliares, comprobantes y balance de prueba.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Después de la operación
                      td.ajuste-border-tabla.texto-left Evaluación del resultado
                      td.ajuste-border-tabla.texto-left ¿La utilización de los recursos permitió cumplir el objetivo?
                      td.texto-left Indicadores, beneficiarios y evidencias de cumplimiento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Después de la operación
                      td.ajuste-border-tabla.texto-left Acción de mejora
                      td.ajuste-border-tabla.texto-left ¿Qué medida debe adoptarse frente a las variaciones encontradas?
                      td.texto-left Plan de acción con responsables y fechas.
          p.mb-5 Para aplicar estas políticas y controles en una situación concreta, se presenta el siguiente caso de ejecución presupuestal:
          .caja-6(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-6_p
                h5 Ejemplo aplicado
                p Una cooperativa aprueba una partida anual de $30.000.000 para actividades educativas. Su política presupuestal establece que cada actividad debe estar incluida en el plan de trabajo, contar con disponibilidad presupuestal y ser autorizada antes de contratar bienes o servicios. También dispone que los pagos superiores a $5.000.000 requieren aprobación adicional del consejo de administración.
                p Durante el segundo trimestre, el comité de educación propone una jornada de capacitación por $6.500.000. Antes de suscribir el contrato, la administración verifica el saldo de la partida, solicita cotizaciones, revisa que la actividad corresponda a la finalidad del fondo y obtiene la autorización requerida. Después de realizar la jornada, compara el valor presupuestado con el ejecutado y revisa las facturas, los comprobantes y las evidencias de participación.
                p Después de contratar la jornada por $6.500.000, la cooperativa confirma que el valor final ejecutado fue de $6.300.000. La variación se calcula así:
                .row.justify-content-center.mb-3(data-aos="zoom-in")
                  .col-xl-9
                    .caja-4 
                      h5.mb-0 Variación presupuestal = valor ejecutado − valor presupuestado
                h5.text-center $6.300.000 − $6.500.000 = −$200.000
                p.mb-0 El resultado negativo indica que se utilizaron $200.000 menos de lo previsto. Esta diferencia debe registrarse y explicarse, pero no autoriza a utilizar automáticamente el saldo en otra actividad sin aplicar las políticas de modificación y aprobación correspondientes.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t1/img26.png', alt='' style="width: 500px").m-auto
      p.mb-0 Las políticas orientan la administración del presupuesto y los controles verifican su cumplimiento, protegiendo los recursos y facilitando la identificación oportuna de diferencias.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Relación entre presupuesto, planeación y finalidad social
      p La planeación define los objetivos, actividades, metas, responsables y tiempos que orientan la gestión, mientras que el presupuesto asigna los recursos necesarios para desarrollarlos. En las organizaciones solidarias, esta articulación también debe guardar correspondencia con las necesidades de los asociados, la participación y la finalidad social de la organización.
      p.mb-5 La relación comienza con los elementos que convierten las necesidades y objetivos institucionales en asignaciones presupuestales concretas:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img27.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Necesidad identificada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite estimar los recursos requeridos para atender una situación que afecta a los asociados o a la comunidad. Puede sustentarse mediante diagnósticos, solicitudes o consultas participativas.
            .row(titulo="Objetivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define el valor global necesario para alcanzar un resultado previsto y expresa el cambio o beneficio esperado. Puede estar sustentado en el plan estratégico, el plan anual o un proyecto.
            .row(titulo="Actividades").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relacionan cada acción programada con las partidas necesarias para desarrollarla. De esta manera, el objetivo institucional se concreta en acciones respaldadas por un plan de trabajo y un cronograma.
            .row(titulo="Metas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten calcular los recursos según la cobertura prevista y establecer cuántas personas, servicios o necesidades se espera atender durante el periodo presupuestado.
            .row(titulo="Responsables").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Asignan las partidas a las áreas, comités o proyectos encargados de su gestión. Esta definición facilita establecer responsabilidades y fortalecer la rendición de cuentas.
      p.mb-5 Otros elementos permiten programar los recursos, evaluar su utilización y relacionar los resultados financieros con los beneficios alcanzados:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Cronograma")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cronograma
              p.mb-0 Programa recaudos, compromisos y pagos para disponer de los recursos en las fechas previstas. Su principal evidencia es el calendario de ejecución definido por la organización.
        .py-3.py-md-4(titulo="Indicadores financieros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Indicadores financieros
              p.mb-0 Relacionan valores presupuestados, ejecutados, saldos y variaciones. Permiten analizar cómo se utilizaron los recursos asignados y se sustentan mediante informes de ejecución presupuestal.
        .py-3.py-md-4(titulo="Indicadores sociales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Indicadores sociales
              p.mb-0 Consideran cobertura, participación, satisfacción y resultados obtenidos. Permiten valorar los beneficios generados y pueden respaldarse con registros de participantes, evaluaciones e informes.
        .py-3.py-md-4(titulo="Seguimiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Seguimiento
              p.mb-0 Comprende los recursos y mecanismos destinados al control y la evaluación. Facilita identificar dificultades, analizar resultados y definir acciones de mejora mediante informes periódicos.
        .py-3.py-md-4(titulo="Rendición de cuentas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Rendición de cuentas
              p.mb-0 Integra información financiera y social para comunicar cómo se utilizaron los recursos y qué resultados se alcanzaron. Puede sustentarse mediante estados financieros, informes y actas.
      p La evaluación presupuestal debe considerar tanto la ejecución financiera como las actividades realizadas, la cobertura y los resultados sociales alcanzados. De esta manera, el análisis no se limita al porcentaje de recursos utilizados, sino que permite relacionarlos con el cumplimiento de los objetivos de la organización.
      p.mb-5 Para aplicar esta relación mediante indicadores financieros y sociales, consulte el siguiente documento:
      .caja-5.mb-5(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Caso aplicado de seguimiento financiero y social en una organización solidaria
            p.mb-0 Consulte el documento “#[b Anexo 2. Caso aplicado de seguimiento financiero y social en una organización solidaria]” y profundice sobre la relación entre presupuesto, planeación y finalidad social.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Seguimiento_Financiero_Social.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      p.mb-0 El presupuesto convierte los planes de una organización solidaria en proyecciones financieras que orientan la asignación y el control de los recursos. Su adecuada gestión permite identificar variaciones, atender necesidades de los asociados y relacionar la sostenibilidad financiera con la participación y la finalidad social.

</template>

<script>
export default {
  name: 'Tema1',
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
