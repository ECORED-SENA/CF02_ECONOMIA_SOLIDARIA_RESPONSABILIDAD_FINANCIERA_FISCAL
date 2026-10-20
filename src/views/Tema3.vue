<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Formulación, aprobación y seguimiento del presupuesto
      p.mb-5 La formulación presupuestal transforma la información recolectada por las áreas en una programación financiera que articula actividades, recursos y responsabilidades. Este proceso exige sustentar las proyecciones, revisar su viabilidad y formalizar las decisiones antes de utilizar los recursos. El seguimiento posterior permite identificar diferencias y mantener el presupuesto alineado con los objetivos institucionales y sociales.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Plan de trabajo, actividades y responsables
      p El plan de trabajo organiza las actividades necesarias para alcanzar los objetivos presupuestales y relaciona cada acción con metas, tiempos, responsables y recursos. También debe definir fuentes de financiación, productos, indicadores, riesgos, controles y evidencias, de modo que las solicitudes puedan justificarse antes de incorporarse al presupuesto.
      p.mb-5 Los elementos iniciales permiten establecer qué necesidad será atendida, qué resultado se espera y cómo se comprobará su cumplimiento:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img1.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Necesidad
                p.mb-0.text-center Describe la situación que requiere atención durante el periodo, como el bajo conocimiento de los asociados sobre finanzas personales.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img2.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Objetivo
                p.mb-0.text-center Establece el resultado general que se espera alcanzar, como fortalecer las capacidades para administrar ingresos, gastos y ahorro.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img3.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Actividad
                p.mb-0.text-center Define la acción concreta que permitirá avanzar hacia el objetivo, como desarrollar jornadas de educación financiera para los asociados.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img4.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Meta
                p.mb-0.text-center Expresa un resultado cuantificable de la actividad, por ejemplo, capacitar a 150 asociados durante el periodo programado.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img5.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Indicador
                p.mb-0.text-center Permite comprobar el cumplimiento mediante una medida definida, como el porcentaje de participantes que finalizan las actividades de formación.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img6.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Producto esperado
                p.mb-0.text-center Identifica la evidencia concreta derivada de la actividad, como tres jornadas realizadas y los materiales educativos entregados.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img7.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Evidencia
                p.mb-0.text-center Corresponde a los documentos que respaldan la ejecución, como contratos, facturas, listas de asistencia, evaluaciones e informe final.
      p.mb-5 La organización operativa del plan requiere precisar tiempos, responsables, recursos, financiación y controles antes de iniciar su ejecución:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Definir las fechas
                    p.mb-0 Se establece el periodo previsto para iniciar y finalizar cada actividad. El cronograma debe guardar correspondencia con las metas, la disponibilidad de los responsables y el momento en que se requieren los recursos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img8.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img9.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Asignar responsables y apoyos
                    p.mb-0 Se identifica el área, comité o persona encargada de ejecutar la actividad y las dependencias que brindarán apoyo. Esta definición permite distribuir funciones y evitar que una misma responsabilidad quede sin asignación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Determinar los recursos requeridos
                    p.mb-0 Se precisan los bienes, servicios y valores necesarios para cumplir la actividad, como facilitadores, materiales, herramientas tecnológicas, logística y demás componentes relacionados con el plan de trabajo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img10.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img11.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Identificar la fuente de financiación
                    p.mb-0 Se establece el origen de los recursos presupuestados y las restricciones que puedan acompañarlos. La fuente debe corresponder con la finalidad de la actividad y estar disponible bajo las condiciones previstas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar riesgos y controles
                    p.mb-0 Se determinan situaciones que podrían afectar el cumplimiento, como una baja participación. También se establecen medidas preventivas, por ejemplo, realizar la convocatoria con anticipación y confirmar la asistencia prevista.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img12.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img13.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Definir las evidencias
                    p.mb-0 Se precisan los documentos y registros que permitirán acreditar posteriormente la ejecución de las actividades, los recursos utilizados y los resultados obtenidos durante el desarrollo del plan.
      p En las cooperativas, la Ley 79 de 1988 dispone que el órgano encargado de orientar y coordinar las actividades de educación debe elaborar anualmente un plan o programa con su correspondiente presupuesto, incluida la utilización del fondo de educación. (Ley 79 de 1988, art. 90).
      p.mb-5 El siguiente caso permite aplicar estos elementos al proyecto educativo ya definido por la cooperativa:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-2(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa proyecta desarrollar un programa de educación financiera para 120 asociados. El comité de educación propone realizar un diagnóstico inicial, tres jornadas de formación, entregar materiales didácticos y aplicar una evaluación final. Para cada actividad establece una fecha, un responsable, un valor estimado y una evidencia de cumplimiento.
            p El área financiera verifica que el programa pueda financiarse con los recursos disponibles del fondo de educación. Tesorería programa los pagos según las fechas previstas, mientras que contabilidad revisa los documentos y registra la ejecución. El consejo de administración analiza el plan y su presupuesto antes de autorizar el desarrollo de las actividades.
            p La programación relaciona cada actividad con su meta, fecha, responsable, valor presupuestado y evidencia para facilitar el control del proyecto:
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 10.
              span Plan de trabajo para un programa de educación financiera
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Actividad
                    th.ajuste-border-tabla.texto-left Meta
                    th.ajuste-border-tabla.texto-left Fecha prevista
                    th.ajuste-border-tabla.texto-left Responsable
                    th.ajuste-border-tabla.texto-left Valor presupuestado
                    th.texto-left Evidencia
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Aplicar diagnóstico de conocimientos
                    td.ajuste-border-tabla.texto-left Obtener información de 120 asociados.
                    td.ajuste-border-tabla.texto-left Abril
                    td.ajuste-border-tabla.texto-left Comité de educación
                    td.ajuste-border-tabla.texto-left $500.000
                    td.texto-left Encuesta y resultados consolidados
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Preparar contenidos y materiales
                    td.ajuste-border-tabla.texto-left Diseñar 120 materiales didácticos.
                    td.ajuste-border-tabla.texto-left Mayo
                    td.ajuste-border-tabla.texto-left Facilitador y comité de educación
                    td.ajuste-border-tabla.texto-left $2.000.000
                    td.texto-left Materiales aprobados y entregados.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Realizar tres jornadas de formación
                    td.ajuste-border-tabla.texto-left Desarrollar la totalidad de las jornadas programadas.
                    td.ajuste-border-tabla.texto-left Junio a agosto
                    td.ajuste-border-tabla.texto-left Facilitador y comité de educación
                    td.ajuste-border-tabla.texto-left $7.500.000
                    td.texto-left Contrato, facturas y listas de asistencia.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Aplicar evaluación final
                    td.ajuste-border-tabla.texto-left Evaluar conocimientos y satisfacción de los participantes.
                    td.ajuste-border-tabla.texto-left Septiembre
                    td.ajuste-border-tabla.texto-left Comité de educación
                    td.ajuste-border-tabla.texto-left $800.000
                    td.texto-left Evaluaciones e informe de resultados.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Total
                    td.ajuste-border-tabla.texto-left Ejecutar el programa de educación financiera.
                    td.ajuste-border-tabla.texto-left Abril a septiembre
                    td.ajuste-border-tabla.texto-left Comité de educación
                    td.ajuste-border-tabla.texto-left $10.800.000
                    td.texto-left Expediente completo del programa.
            p El valor total del programa se determina mediante la suma de las actividades:
            h5.text-center $500.000 + $2.000.000 + $7.500.000 + $800.000 = $10.800.000
            p.mb-0 La aprobación de este valor no significa que los recursos puedan utilizarse sin controles posteriores. Cada actividad debe ejecutarse en las fechas previstas, contar con autorización, disponibilidad presupuestal y soportes suficientes. Cuando se presenten cambios en las actividades o los valores, estos deben justificarse y tramitarse conforme al procedimiento interno.
      p.mb-0 El plan de trabajo convierte los objetivos institucionales en actividades medibles y financiables, y proporciona la base para determinar los recursos que permitirán desarrollar la programación establecida.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Proyección de ingresos y recursos disponibles
      p La proyección determina las fuentes que podrían financiar las actividades durante el periodo. Debe apoyarse en información histórica, contratos, tarifas, cartera, convenios, saldos y supuestos razonables. Además, debe distinguir entre ingresos, recaudos y otros recursos presupuestales, porque no todo recurso proyectado constituye un ingreso contable ni está disponible inmediatamente.
      p.mb-5 Una primera parte de la proyección se sustenta en información histórica, contractual y relacionada con la base social de la organización:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Estados financieros anteriores")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estados financieros anteriores
              p.mb-0 Aportan información sobre ingresos históricos, cartera, efectivo y resultados. Permiten identificar tendencias de periodos anteriores. Antes de utilizarlos, debe comprobarse que las cifras correspondan a información cerrada y conciliada.
        .py-3.py-md-4(titulo="Presupuesto ejecutado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Presupuesto ejecutado
              p.mb-0 Relaciona los valores que fueron programados con los efectivamente recibidos. Facilita analizar la capacidad histórica de recaudo e identificar variaciones, partidas incumplidas o proyecciones anteriores que no se materializaron.
        .py-3.py-md-4(titulo="Registro de asociados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Registro de asociados
              p.mb-0 Proporciona información sobre asociados activos, ingresos y retiros. Sirve para sustentar cuotas, servicios u otros valores relacionados con la base social, manteniendo actualizadas las novedades del periodo.
        .py-3.py-md-4(titulo="Contratos vigentes")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Contratos vigentes
              p.mb-0 Permiten identificar valores, fechas y condiciones de pago formalmente acordadas. Antes de incorporar los recursos, debe comprobarse la vigencia, el cumplimiento contractual y las condiciones de continuidad o renovación.
        .py-3.py-md-4(titulo="Cartera")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cartera
              p.mb-0 Aporta saldos pendientes, vencimientos y acuerdos de pago. Su utilización presupuestal requiere diferenciar cartera corriente, vencida y de difícil recuperación para evitar proyectar como disponible la totalidad de los valores pendientes.
      p.mb-5 Otras fuentes requieren analizar precios, convenios, rendimientos, saldos restringidos y fechas probables de recaudo antes de incorporarlas al presupuesto:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Tarifas de servicios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los precios aprobados permiten calcular los recursos según el volumen de servicios previsto. Deben utilizarse tarifas vigentes y autorizadas, relacionadas con cantidades o niveles de actividad razonablemente estimados.
            .row(titulo="Convenios y proyectos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los acuerdos con entidades externas pueden generar recursos para actividades específicas. La proyección debe considerar el valor, las condiciones, el cronograma de desembolsos y la destinación establecida en cada convenio.
            .row(titulo="Rendimientos financieros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los depósitos o inversiones autorizadas pueden generar recursos adicionales. Su estimación debe basarse en saldos, tasas y condiciones contractuales prudentes, evitando asumir rendimientos que no cuenten con sustento suficiente.
            .row(titulo="Saldos de fondos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden a recursos existentes al inicio del periodo. Antes de incorporarlos deben conciliarse y mantenerse asociados con la finalidad establecida, especialmente cuando tienen destinación específica o reglamentada.
            .row(titulo="Tesorería").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aporta saldos bancarios y fechas probables de recaudo. Esta información permite preparar la disponibilidad mensual de efectivo y contrastar las proyecciones con extractos, movimientos pendientes y compromisos de pago.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img19.png", alt="" style="width: 350px").m-auto
      p.mb-5 El siguiente caso aplica estas fuentes para estimar los recursos que financiarán el presupuesto anual de la cooperativa:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-2(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa prepara la proyección de recursos para financiar su plan anual. Durante el periodo anterior recibió ingresos por servicios, cuotas administrativas, rendimientos financieros y un convenio destinado a actividades educativas. Para el nuevo presupuesto revisa la continuidad de cada fuente y evita repetir automáticamente los valores históricos.
            p El área financiera proyecta ingresos por servicios con base en el número esperado de usuarios, estima las cuotas según los asociados activos y solo incluye el convenio después de confirmar su vigencia. También analiza la cartera pendiente, pero aplica un porcentaje de recaudo prudente porque una parte presenta vencimiento.
            p La estimación relaciona cada fuente con su base de cálculo, valor proyectado y restricción, y culmina con el total anual:
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 11.
              span Proyección anual de ingresos y recursos disponibles
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Fuente de recursos
                    th.ajuste-border-tabla.texto-left Base de cálculo
                    th.ajuste-border-tabla.texto-left Valor estimado
                    th.texto-left Restricción o consideración
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos por servicios
                    td.ajuste-border-tabla.texto-left 1.200 servicios × $120.000
                    td.ajuste-border-tabla.texto-left $144.000.000
                    td.texto-left Depende del volumen real de servicios prestados.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Cuotas administrativas
                    td.ajuste-border-tabla.texto-left 250 asociados × $18.000 × 12 meses
                    td.ajuste-border-tabla.texto-left $54.000.000
                    td.texto-left Deben considerarse ingresos y retiros de asociados.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cartera
                    td.ajuste-border-tabla.texto-left Cartera de $30.000.000 × 70 % de recuperación esperada
                    td.ajuste-border-tabla.texto-left $21.000.000
                    td.texto-left No se proyecta recuperar la totalidad del saldo.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Rendimientos financieros
                    td.ajuste-border-tabla.texto-left Estimación basada en saldos y condiciones vigentes
                    td.ajuste-border-tabla.texto-left $4.500.000
                    td.texto-left Puede variar según tasas y recursos invertidos.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Convenio educativo
                    td.ajuste-border-tabla.texto-left Valor establecido en el acuerdo
                    td.ajuste-border-tabla.texto-left $20.000.000
                    td.texto-left Solo puede utilizarse para las actividades autorizadas.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Saldo inicial del fondo de educación
                    td.ajuste-border-tabla.texto-left Saldo conciliado al cierre anterior
                    td.ajuste-border-tabla.texto-left $8.000.000
                    td.texto-left Conserva su destinación específica.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Total de recursos proyectados
                    td.ajuste-border-tabla.texto-left Suma de las fuentes estimadas
                    td.ajuste-border-tabla.texto-left $251.500.000
                    td.texto-left Incluye recursos de libre destinación y recursos restringidos.
            p Los ingresos por servicios se calculan así:
            .row.justify-content-center.mb-3(data-aos="zoom-in")
              .col-xl-10
                .caja-3
                  h5.mb-0.text-center Ingresos por servicios = cantidad proyectada × tarifa estimada
            h5.text-center 1.200 × $120.000 = $144.000.000
            p Las cuotas administrativas se proyectan mediante la siguiente operación:
            h5.text-center 250 × $18.000 × 12 = $54.000.000
            p Para la cartera se utiliza una estimación prudente de recaudo:
            h5.text-center $30.000.000 × 70 % = $21.000.000
            p Aunque el total proyectado asciende a $251.500.000, la organización no puede considerar todo el valor como recurso de libre utilización. El convenio educativo y el saldo del fondo de educación suman $28.000.000 y deben mantenerse destinados a las actividades para las cuales fueron autorizados.
            p Recursos de destinación específica:
            h5.text-center $20.000.000 + $8.000.000 = $28.000.000
            p Recursos proyectados sin esta restricción:
            h5.text-center.mb-0 $251.500.000 − $28.000.000 = $223.500.000
      p.mb-0 La proyección debe sustentarse en información verificable, supuestos prudentes y fechas probables de recaudo para establecer una base realista antes de calcular las aplicaciones presupuestales.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Proyección de costos, gastos e inversiones
      p La proyección de costos, gastos e inversiones estima los recursos necesarios para prestar servicios, desarrollar programas sociales, mantener el funcionamiento y fortalecer la capacidad operativa. Los costos se relacionan directamente con bienes o servicios; los gastos, con la administración, operación y financiación; y las inversiones, con adquisiciones o mejoras utilizadas durante varios periodos.
      p.mb-5 Las partidas vinculadas con la operación se proyectan con bases diferentes según su relación con el nivel de actividad y el funcionamiento institucional:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Costos de servicios
                  p.mb-0 Incluyen materiales, personal y demás recursos directamente utilizados para prestar los servicios. Su estimación parte del costo unitario y del volumen esperado de actividad, como los materiales requeridos para desarrollar servicios o jornadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Costos variables
                  p.mb-0 Cambian de acuerdo con el nivel de actividad. Para proyectarlos se considera el número esperado de usuarios, productos o participantes; un ejemplo corresponde a refrigerios o materiales calculados por cada persona atendida.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Costos fijos
                  p.mb-0 Permanecen relativamente estables dentro de determinadas condiciones de operación. Se sustentan principalmente en contratos y compromisos vigentes, como el alquiler de espacios requeridos para desarrollar las actividades programadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gastos de personal
                  p.mb-0 Comprenden salarios, honorarios, prestaciones y aportes aplicables. Su proyección se realiza con base en la nómina vigente, contratos existentes y ajustes previstos durante el periodo presupuestal.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gastos administrativos
                  p.mb-0 Incluyen servicios, arrendamientos, suministros y mantenimiento asociados con el funcionamiento institucional. Para estimarlos se consideran la ejecución histórica, las tarifas previstas y las condiciones contractuales aplicables al siguiente periodo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Otras aplicaciones requieren considerar compromisos financieros, programas sociales, inversiones, obligaciones y posibles contingencias:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Gastos financieros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Gastos financieros
              p.mb-0 Comprenden intereses, comisiones y costos bancarios. Se proyectan con base en créditos vigentes y demás condiciones financieras, considerando tasas, plazos y compromisos que puedan afectar el periodo presupuestal.
        .py-3.py-md-4(titulo="Programas sociales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Programas sociales
              p.mb-0 Incluyen actividades educativas, solidarias y de bienestar dirigidas a los asociados. La proyección debe corresponder con los planes de trabajo, la cobertura esperada, las actividades programadas y el cronograma.
        .py-3.py-md-4(titulo="Inversiones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Inversiones
              p.mb-0 Comprenden equipos, infraestructura, tecnología y adecuaciones que fortalecerán la capacidad operativa. Su estimación debe sustentarse mediante diagnósticos, inventarios, necesidades identificadas y cotizaciones de los bienes o mejoras previstas.
        .py-3.py-md-4(titulo="Impuestos y obligaciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Impuestos y obligaciones
              p.mb-0 Incluyen tributos, tasas y contribuciones previstas durante el periodo. La proyección debe relacionarse con las responsabilidades tributarias aplicables y con las fechas establecidas para su declaración o pago.
        .py-3.py-md-4(titulo="Contingencias")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Contingencias
              p.mb-0 Corresponden a recursos previstos para situaciones posibles que requieran atención adicional. Su estimación debe guardar correspondencia con la evaluación de riesgos y con las políticas internas que regulen su utilización.
      p.mb-5 El caso continúa con la estimación de las aplicaciones necesarias para financiar la operación y los programas previstos:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-2(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa proyecta desarrollar durante el año programas de formación, servicios para sus asociados y actividades de bienestar. Para estimar los recursos requeridos, consulta la ejecución del periodo anterior, revisa los contratos vigentes y solicita cotizaciones para materiales, equipos y servicios profesionales.
            p El análisis determina que algunas partidas aumentarán según el número de participantes, mientras que otras se mantendrán estables. Los materiales y refrigerios se clasifican como costos variables; los honorarios administrativos y el arrendamiento corresponden a gastos relativamente fijos; y la adquisición de computadores se incorpora como una inversión.
            p La siguiente tabla presenta un ejemplo de las aplicaciones de recursos previstas para un periodo anual.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 12.
              span Proyección anual de costos, gastos e inversiones
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Partida presupuestal
                    th.ajuste-border-tabla.texto-left Base de cálculo
                    th.ajuste-border-tabla.texto-left Valor proyectado
                    th.texto-left Clasificación
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Materiales para servicios
                    td.ajuste-border-tabla.texto-left 1.200 servicios × $25.000
                    td.ajuste-border-tabla.texto-left $30.000.000
                    td.texto-left Costo variable
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Jornadas de formación
                    td.ajuste-border-tabla.texto-left Cuatro actividades × $4.000.000
                    td.ajuste-border-tabla.texto-left $16.000.000
                    td.texto-left Programa social
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Actividades de bienestar
                    td.ajuste-border-tabla.texto-left Presupuesto anual según plan de trabajo
                    td.ajuste-border-tabla.texto-left $12.000.000
                    td.texto-left Programa social
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Honorarios administrativos
                    td.ajuste-border-tabla.texto-left $4.000.000 mensuales × 12 meses
                    td.ajuste-border-tabla.texto-left $48.000.000
                    td.texto-left Gasto fijo
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Arrendamiento
                    td.ajuste-border-tabla.texto-left $2.500.000 mensuales × 12 meses
                    td.ajuste-border-tabla.texto-left $30.000.000
                    td.texto-left Gasto fijo
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Servicios públicos y comunicaciones
                    td.ajuste-border-tabla.texto-left Promedio mensual de $1.200.000 × 12 meses
                    td.ajuste-border-tabla.texto-left $14.400.000
                    td.texto-left Gasto administrativo
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Mantenimiento
                    td.ajuste-border-tabla.texto-left Estimación según diagnóstico y antecedentes
                    td.ajuste-border-tabla.texto-left $8.000.000
                    td.texto-left Gasto operativo
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                    td.ajuste-border-tabla.texto-left Proyección de intereses y comisiones
                    td.ajuste-border-tabla.texto-left $6.500.000
                    td.texto-left Gasto financiero
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Compra de computadores
                    td.ajuste-border-tabla.texto-left Cuatro equipos × $3.500.000
                    td.ajuste-border-tabla.texto-left $14.000.000
                    td.texto-left Inversión
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Adecuación de instalaciones
                    td.ajuste-border-tabla.texto-left Cotización seleccionada
                    td.ajuste-border-tabla.texto-left $9.000.000
                    td.texto-left Inversión
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Contingencias
                    td.ajuste-border-tabla.texto-left Valor autorizado según política interna
                    td.ajuste-border-tabla.texto-left $5.000.000
                    td.texto-left Reserva presupuestal
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Total proyectado
                    td.ajuste-border-tabla.texto-left Suma de costos, gastos, programas e inversiones
                    td.ajuste-border-tabla.texto-left $192.900.000
                    td.texto-left Aplicaciones presupuestales
            p El costo de los materiales se calcula así:
            .row.justify-content-center.mb-3(data-aos="zoom-in")
              .col-xl-10
                .caja-3
                  h5.mb-0.text-center Costo de materiales = cantidad proyectada de servicios × costo unitario
            h5.text-center 1.200 × $25.000 = $30.000.000
            p Los honorarios administrativos se proyectan mediante la siguiente operación:
            h5.text-center $4.000.000 × 12 meses = $48.000.000
            p La compra de computadores corresponde a:
            h5.text-center 4 × $3.500.000 = $14.000.000
            p Al comparar las aplicaciones previstas con los recursos proyectados en el apartado anterior, se obtiene el margen presupuestal:
            .row.justify-content-center.mb-3(data-aos="zoom-in")
              .col-xl-10
                .caja-3
                  h5.mb-0.text-center Margen presupuestal = recursos proyectados − costos, gastos e inversiones 
            h5.text-center $251.500.000 − $192.900.000 = $58.600.000
            p.mb-0 Este valor no puede considerarse completamente disponible para cualquier finalidad, porque dentro de los recursos proyectados existen partidas con destinación específica. Antes de asignarlo, la organización debe separar los fondos restringidos, verificar las obligaciones pendientes y revisar las actividades todavía no incorporadas.
      p.mb-0 La proyección sustentada de las aplicaciones permite comprobar su viabilidad y preparar una versión integrada del presupuesto para su revisión y aprobación.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Consolidación, presentación y aprobación del presupuesto
      p La consolidación integra las proyecciones de las áreas en una programación única y permite revisar fuentes, duplicidades, restricciones y equilibrio financiero. La propuesta debe sustentar sus cifras, responsables y periodos de ejecución antes de presentarse al órgano competente, cuya aprobación formal establece las partidas autorizadas, pero no significa que los recursos ya hayan sido recibidos o ejecutados.
      p.mb-5 El presupuesto consolidado integra componentes que deben conservar correspondencia entre la planeación, las fuentes de financiación y los controles definidos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Periodo y objetivos institucionales
                  p.mb-0 El presupuesto debe precisar la fecha inicial y final y los resultados económicos, operativos y sociales previstos. Todas las partidas deben corresponder al mismo periodo y cada objetivo debe relacionarse con actividades y recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recursos proyectados y saldos iniciales
                  p.mb-0 Se integran las fuentes previstas y los recursos disponibles al comenzar el periodo. Deben revisarse las bases de cálculo, la probabilidad de recaudo y la conciliación de los saldos contables y bancarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Costos y gastos proyectados
                  p.mb-0 Los costos corresponden a las actividades directamente relacionadas con bienes o servicios, mientras los gastos atienden el funcionamiento administrativo y financiero. Deben comprobarse cantidades, precios, contratos, antecedentes y límites internos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inversiones y programas sociales
                  p.mb-0 Las inversiones comprenden adquisiciones y mejoras para fortalecer la capacidad operativa; los programas sociales destinan recursos a educación, solidaridad y bienestar. Su revisión considera necesidad, cotizaciones, disponibilidad, planes, cobertura y reglamentación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recursos restringidos y contingencias
                  p.mb-0 Los recursos restringidos deben conservar la finalidad para la cual fueron establecidos. Las contingencias atienden situaciones imprevistas autorizadas y requieren condiciones de utilización y niveles de aprobación previamente definidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Resultado y responsables
                  p.mb-0 El resultado presupuestal surge de comparar los recursos proyectados con las aplicaciones previstas. Su análisis permite identificar equilibrio, margen o faltante. También deben confirmarse responsables, funciones y niveles de autoridad para cada partida.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cronograma e indicadores
                  p.mb-0 El cronograma relaciona fechas de recaudos, compromisos y pagos con la disponibilidad prevista. Los indicadores deben establecer fórmula, periodicidad y fuente de información para facilitar el control de la ejecución y sus resultados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img36.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La consolidación del caso permite depurar las solicitudes y establecer la versión que será sometida a aprobación:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-2(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa dedicada a la comercialización de productos agropecuarios prepara su presupuesto anual. La administración proyecta recursos por $320.000.000 provenientes de servicios de comercialización, cuotas administrativas, recaudo de cartera y rendimientos financieros. Las áreas presentan solicitudes para cubrir la operación del centro de acopio, el transporte de productos, el funcionamiento administrativo, el mantenimiento de equipos y la adecuación de una zona de almacenamiento.
            p Durante la consolidación, se identifica que dos áreas incluyeron la reparación del mismo vehículo y que la adecuación solicitada inicialmente supera la capacidad financiera de la organización. La partida duplicada se elimina y la inversión se divide en dos etapas. Después de los ajustes, el presupuesto presenta recursos suficientes para financiar las actividades prioritarias y mantener un margen para contingencias.
            p La consolidación agrupa los recursos y las principales aplicaciones, indicando su valor, participación y condición dentro del presupuesto final:
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 13.
              span Presupuesto consolidado de una cooperativa agropecuaria
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Concepto
                    th.ajuste-border-tabla.texto-left Valor proyectado
                    th.ajuste-border-tabla.texto-left Participación
                    th.texto-left Observación
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos por servicios de comercialización
                    td.ajuste-border-tabla.texto-left $225.000.000
                    td.ajuste-border-tabla.texto-left 70,3 %
                    td.texto-left Se calculan según el volumen previsto de productos comercializados.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Cuotas administrativas
                    td.ajuste-border-tabla.texto-left $48.000.000
                    td.ajuste-border-tabla.texto-left 15 %
                    td.texto-left Se estiman con base en los asociados activos.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cartera
                    td.ajuste-border-tabla.texto-left $35.000.000
                    td.ajuste-border-tabla.texto-left 10,9 %
                    td.texto-left Se aplica una expectativa prudente de recuperación.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Rendimientos y otros recursos
                    td.ajuste-border-tabla.texto-left $12.000.000
                    td.ajuste-border-tabla.texto-left 3,8 %
                    td.texto-left Pueden variar durante el periodo.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Total de recursos proyectados
                    td.ajuste-border-tabla.texto-left $320.000.000
                    td.ajuste-border-tabla.texto-left 100 %
                    td.texto-left Recursos estimados para financiar el presupuesto.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos del centro de acopio
                    td.ajuste-border-tabla.texto-left $142.000.000
                    td.ajuste-border-tabla.texto-left 44,4 %
                    td.texto-left Incluye personal operativo, insumos y manipulación de productos.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Transporte y distribución
                    td.ajuste-border-tabla.texto-left $58.000.000
                    td.ajuste-border-tabla.texto-left 18,1 %
                    td.texto-left Considera combustible, mantenimiento y servicios contratados.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Gastos administrativos
                    td.ajuste-border-tabla.texto-left $62.000.000
                    td.ajuste-border-tabla.texto-left 19,4 %
                    td.texto-left Incluye honorarios, servicios, suministros y comunicaciones.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Mantenimiento de equipos
                    td.ajuste-border-tabla.texto-left $18.000.000
                    td.ajuste-border-tabla.texto-left 5,6 %
                    td.texto-left Comprende básculas, equipos de refrigeración y vehículo.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Adecuación de almacenamiento
                    td.ajuste-border-tabla.texto-left $25.000.000
                    td.ajuste-border-tabla.texto-left 7,8 %
                    td.texto-left Primera etapa del proyecto de mejoramiento.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Contingencias
                    td.ajuste-border-tabla.texto-left $10.000.000
                    td.ajuste-border-tabla.texto-left 3,1 %
                    td.texto-left Su utilización requiere autorización.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Total de aplicaciones
                    td.ajuste-border-tabla.texto-left $315.000.000
                    td.ajuste-border-tabla.texto-left 98,4 %
                    td.texto-left Suma de costos, gastos e inversiones.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Margen presupuestal
                    td.ajuste-border-tabla.texto-left $5.000.000
                    td.ajuste-border-tabla.texto-left 1,6 %
                    td.texto-left Diferencia entre los recursos y las aplicaciones proyectadas.
            p El margen presupuestal se calcula así:
            .row.justify-content-center.mb-3(data-aos="zoom-in")
              .col-xl-10
                .caja-3
                  h5.mb-0.text-center Margen presupuestal = total de recursos proyectados − total de aplicaciones
            h5.text-center $320.000.000 − $315.000.000 = $5.000.000
            p.mb-0 El margen permite atender variaciones menores, pero no autoriza la realización de gastos que no estén incluidos o aprobados. Cualquier modificación debe estar sustentada, identificar la fuente de financiación y ser autorizada conforme a las políticas y competencias establecidas.
      p.mb-5 Una vez consolidada la propuesta, su revisión y aprobación deben seguir una secuencia que preserve la trazabilidad de las decisiones:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Consolidar las propuestas
                    p.mb-0 Se integran las solicitudes formuladas por las áreas, programas y proyectos en un único documento presupuestal que permita revisar conjuntamente los recursos y las aplicaciones previstas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img37.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img38.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Realizar la revisión técnica
                    p.mb-0 Se comprueban cálculos, soportes, fuentes de financiación, restricciones y posibles duplicidades. El resultado debe ser una información depurada y suficientemente sustentada para continuar el análisis.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Analizar la viabilidad financiera
                    p.mb-0 Se comparan los recursos proyectados, las aplicaciones presupuestales y la programación de efectivo para determinar si las actividades previstas pueden financiarse bajo las condiciones estimadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img39.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img40.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Priorizar las partidas
                    p.mb-0 Cuando los recursos no permiten atender simultáneamente todas las solicitudes, se ajustan o aplazan partidas de acuerdo con su urgencia, impacto y relación con las prioridades institucionales.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Presentar el proyecto presupuestal
                    p.mb-0 La propuesta debe explicar los principales supuestos, valores, restricciones, riesgos y resultados esperados, de modo que el órgano competente disponga de información suficiente para adoptar una decisión.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img41.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img42.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Incorporar los ajustes solicitados
                    p.mb-0 Las modificaciones definidas durante la revisión se integran formalmente en el proyecto. La nueva versión debe conservar los soportes y permitir identificar los cambios efectuados antes de la aprobación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Aprobar el presupuesto
                    p.mb-0 La instancia competente autoriza formalmente las partidas, valores y responsables. La decisión debe quedar registrada mediante el acta o acuerdo correspondiente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img43.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img44.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Comunicar los valores aprobados
                    p.mb-0 Las áreas y responsables reciben información sobre las partidas autorizadas, los límites aplicables y las condiciones establecidas para su utilización durante el periodo presupuestal.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Incorporar el presupuesto al seguimiento
                    p.mb-0 La versión aprobada se registra en los instrumentos utilizados para controlar la ejecución. Este registro constituye la base para comparar posteriormente los valores autorizados con los compromisos y resultados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img45.png', alt='' style="width: 300px").m-auto
      p.mb-0 La aprobación establece el marco autorizado para la ejecución; no constituye por sí misma recaudo, pago ni reconocimiento contable de las operaciones previstas.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Ejecución, seguimiento, ajustes y acciones de mejora
      p Durante la ejecución presupuestal se registran compromisos, pagos y resultados que deben compararse con los valores aprobados. El seguimiento permite identificar variaciones, analizar sus causas y determinar si se requieren ajustes o acciones de mejora, siempre respetando las autorizaciones, responsabilidades y procedimientos definidos por la organización.
      p.mb-5 Se invita a profundizar en cómo se ejecuta y controla el presupuesto, cómo se interpretan las variaciones y qué criterios orientan los ajustes autorizados y las acciones de mejora mediante el siguiente video:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. “Del presupuesto aprobado a la mejora: ejecución y seguimiento”
      p.mb-5 La aplicación de estos conceptos permite analizar la ejecución del presupuesto y determinar las decisiones requeridas ante las variaciones identificadas:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-2(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa agropecuaria aprueba $58.000.000 para transporte y distribución de productos. Al finalizar el tercer trimestre, ha comprometido $49.000.000 mediante contratos de transporte, ha recibido servicios por $46.500.000 y ha pagado $43.000.000. Además, el aumento del precio de los combustibles hace prever que la partida será insuficiente para finalizar el año.
            p El área responsable revisa las rutas utilizadas, los contratos, el número de viajes y los valores pendientes. El análisis muestra que algunas entregas pueden agruparse para reducir recorridos, pero se requieren $4.000.000 adicionales para atender la operación restante. La gerencia prepara una solicitud de traslado presupuestal desde una partida de mantenimiento que presenta ahorro, y la somete a la aprobación de la instancia definida en la política presupuestal.
            p El saldo disponible antes del ajuste se calcula así:
            .row.justify-content-center.mb-3(data-aos="zoom-in")
              .col-xl-10
                .caja-3
                  h5.mb-0.text-center Saldo disponible = presupuesto definitivo − valor comprometido	
            h5.text-center $58.000.000 − $49.000.000 = $9.000.000
            p El valor pendiente de pago corresponde a:
            .row.justify-content-center.mb-3(data-aos="zoom-in")
              .col-xl-10
                .caja-3
                  h5.mb-0.text-center Valor pendiente de pago = valor ejecutado − valor pagado
            h5.text-center $46.500.000 − $43.000.000 = $3.500.000
            p El primer cálculo muestra que todavía pueden comprometerse $9.000.000. El segundo indica que existen servicios recibidos por $3.500.000 que aún no han sido pagados. Ambos valores deben mantenerse diferenciados para evitar asumir compromisos sin considerar las obligaciones ya causadas.
            p La siguiente tabla presenta un ejemplo de control aplicado a algunas partidas de una cooperativa agropecuaria.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 14.
              span Informe de seguimiento y ajustes presupuestales
            .tabla-a-1(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Partida
                    th.ajuste-border-tabla.texto-left Presupuesto definitivo
                    th.ajuste-border-tabla.texto-left Valor ejecutado
                    th.ajuste-border-tabla.texto-left Ejecución
                    th.ajuste-border-tabla.texto-left Variación
                    th.ajuste-border-tabla.texto-left Situación identificada
                    th.texto-left Acción propuesta
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Centro de acopio
                    td.ajuste-border-tabla.texto-left $142.000.000
                    td.ajuste-border-tabla.texto-left $103.500.000
                    td.ajuste-border-tabla.texto-left 72,9 %
                    td.ajuste-border-tabla.texto-left −$38.500.000
                    td.ajuste-border-tabla.texto-left Ejecución acorde con el cronograma.
                    td.texto-left Mantener seguimiento mensual.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Transporte y distribución
                    td.ajuste-border-tabla.texto-left $58.000.000
                    td.ajuste-border-tabla.texto-left $46.500.000
                    td.ajuste-border-tabla.texto-left 80,2 %
                    td.ajuste-border-tabla.texto-left −$11.500.000
                    td.ajuste-border-tabla.texto-left Se proyecta insuficiencia por aumento de combustibles.
                    td.texto-left Trasladar $4.000.000 y optimizar rutas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Gastos administrativos
                    td.ajuste-border-tabla.texto-left $62.000.000
                    td.ajuste-border-tabla.texto-left $43.800.000
                    td.ajuste-border-tabla.texto-left 70,6 %
                    td.ajuste-border-tabla.texto-left −$18.200.000
                    td.ajuste-border-tabla.texto-left Comportamiento estable frente al periodo transcurrido.
                    td.texto-left Controlar servicios y honorarios pendientes.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Mantenimiento de equipos
                    td.ajuste-border-tabla.texto-left $18.000.000
                    td.ajuste-border-tabla.texto-left $10.000.000
                    td.ajuste-border-tabla.texto-left 55,6 %
                    td.ajuste-border-tabla.texto-left −$8.000.000
                    td.ajuste-border-tabla.texto-left Una reparación costó menos de lo presupuestado
                    td.texto-left Trasladar parcialmente el ahorro, previa aprobación
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Adecuación de almacenamiento
                    td.ajuste-border-tabla.texto-left $25.000.000
                    td.ajuste-border-tabla.texto-left $16.000.000
                    td.ajuste-border-tabla.texto-left 64 %
                    td.ajuste-border-tabla.texto-left −$9.000.000
                    td.ajuste-border-tabla.texto-left La segunda etapa presenta retraso.
                    td.texto-left Actualizar el cronograma y verificar cotizaciones.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Contingencias
                    td.ajuste-border-tabla.texto-left $10.000.000
                    td.ajuste-border-tabla.texto-left $2.000.000
                    td.ajuste-border-tabla.texto-left 20 %
                    td.ajuste-border-tabla.texto-left −$8.000.000
                    td.ajuste-border-tabla.texto-left Se atendió una reparación urgente.
                    td.texto-left Conservar el saldo para eventos autorizados
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Total
                    td.ajuste-border-tabla.texto-left $315.000.000
                    td.ajuste-border-tabla.texto-left $221.800.000
                    td.ajuste-border-tabla.texto-left 70,4 %
                    td.ajuste-border-tabla.texto-left −$93.200.000
                    td.ajuste-border-tabla.texto-left La ejecución general requiere seguimiento hasta el cierre.
                    td.texto-left Actualizar la proyección y formalizar los ajustes necesarios.
            p El porcentaje de ejecución de transporte y distribución se calcula así:
            .row.justify-content-center.mb-3(data-aos="zoom-in")
              .col-xl-10
                .caja-3
                  h5.mb-0.text-center Porcentaje de ejecución = valor ejecutado ÷ presupuesto definitivo × 100
            h5.text-center $46.500.000 ÷ $58.000.000 × 100 = 80,2 %
            p El resultado muestra que se ha ejecutado el 80,2 % de la partida. Sin embargo, este porcentaje debe analizarse junto con el tiempo transcurrido, los compromisos pendientes y las actividades que faltan por realizar. Una ejecución elevada antes del cierre puede indicar que la partida será insuficiente, mientras que una ejecución baja puede relacionarse con retrasos, ahorros o actividades aplazadas.
            p.mb-0 Las acciones de mejora pueden incluir ajustes en proyecciones, compras, recaudo, actividades o partidas presupuestales. Cada medida debe definir la situación identificada, la acción prevista, el responsable, el plazo y la evidencia de cumplimiento.
      p.mb-0 La formulación y el seguimiento presupuestal articulan planes, recursos, responsabilidades y límites de ejecución. La comparación entre lo aprobado y lo ejecutado permite identificar variaciones, realizar ajustes autorizados y establecer acciones de mejora, manteniendo el presupuesto alineado con los objetivos económicos y sociales de la organización solidaria.

</template>

<script>
export default {
  name: 'Tema3',
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
