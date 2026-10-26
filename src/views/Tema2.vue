<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Organización y recolección de información presupuestal
      p.mb-5 La calidad del presupuesto depende de la información utilizada para formularlo. Por ello, la organización debe identificar quién aporta los datos, qué necesidades requieren financiación y cómo se recopilan, comunican y validan las solicitudes. Una recolección ordenada reduce duplicidades, inconsistencias y estimaciones sin sustento antes de consolidar el presupuesto.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Estructura organizacional, áreas y niveles de autoridad
      p La estructura organizacional permite identificar funciones, responsabilidades y niveles de decisión en la gestión presupuestal. En las cooperativas, la asamblea define orientaciones generales, el consejo dirige la gestión, la gerencia coordina la ejecución y las áreas suministran la información necesaria, conforme a los estatutos, reglamentos y niveles de autorización establecidos.
      p.mb-5 En el proceso presupuestal participan diferentes órganos y áreas, cada uno con responsabilidades específicas en la formulación, revisión, ejecución y control de los recursos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Asamblea general
                  p.mb-0 Define las políticas y orientaciones generales de acuerdo con los estatutos. Considera prioridades institucionales, sociales y económicas, y sus decisiones sirven de base para orientar la planeación y asignación de los recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consejo de administración o junta directiva
                  p.mb-0 Revisa, orienta y aprueba el presupuesto según sus competencias. Analiza prioridades, capacidad de ejecución e información financiera para autorizar formalmente la propuesta presupuestal correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gerencia
                  p.mb-0 Coordina la formulación, consolidación y ejecución del presupuesto. Integra los planes institucionales, compromisos, contratos y metas para estructurar el proyecto presupuestal que será sometido a revisión y aprobación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Área financiera
                  p.mb-0 Analiza la disponibilidad y el equilibrio entre recursos y aplicaciones. Utiliza proyecciones, flujo de efectivo y fuentes de financiación para determinar la viabilidad financiera del presupuesto propuesto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Contabilidad
                  p.mb-0 Aporta información histórica y registros de obligaciones reconocidas. Los estados financieros, auxiliares, costos, gastos e impuestos permiten sustentar las proyecciones presupuestales con información contable disponible.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tesorería
                  p.mb-0 Proyecta los recaudos y pagos esperados. Para ello utiliza información sobre saldos bancarios, cartera, vencimientos y compromisos, contribuyendo a la elaboración del presupuesto de efectivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Área administrativa
                  p.mb-0 Identifica las necesidades de funcionamiento de la organización. Considera nómina, honorarios, suministros, servicios y mantenimiento para formular las partidas correspondientes al presupuesto administrativo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Áreas operativas
                  p.mb-0 Proyectan los recursos necesarios para prestar bienes o servicios. Consideran el volumen de actividades, los materiales, el personal y los equipos requeridos para formular los costos de operación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comités sociales
                  p.mb-0 Formulan actividades dirigidas a los asociados. Utilizan información sobre programas educativos, solidarios y de bienestar para proyectar los recursos destinados a fondos y programas sociales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Órganos de control
                  p.mb-0 Verifican el cumplimiento de políticas, estatutos y procedimientos. Sus informes de seguimiento, observaciones y recomendaciones contribuyen al fortalecimiento de los controles presupuestales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Los niveles de autoridad permiten precisar quién interviene y qué evidencia debe respaldar las principales decisiones presupuestales:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Niveles de autoridad en la gestión presupuestal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nivel de autoridad
                      th.ajuste-border-tabla.texto-left Decisión o actividad
                      th.ajuste-border-tabla.texto-left Responsable posible
                      th.texto-left Evidencia requerida
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Orientación
                      td.ajuste-border-tabla.texto-left Definir prioridades, objetivos y políticas generales.
                      td.ajuste-border-tabla.texto-left Asamblea general o consejo, según los estatutos.
                      td.texto-left Acta, plan estratégico o directriz.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Formulación
                      td.ajuste-border-tabla.texto-left Identificar necesidades y calcular los recursos requeridos.
                      td.ajuste-border-tabla.texto-left Áreas, comités y responsables de proyectos.
                      td.texto-left Formato presupuestal y soportes de cálculo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Consolidación
                      td.ajuste-border-tabla.texto-left Integrar las propuestas y analizar su coherencia.
                      td.ajuste-border-tabla.texto-left Gerencia y área financiera.
                      td.texto-left Proyecto general de presupuesto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Revisión técnica
                      td.ajuste-border-tabla.texto-left Validar cifras, supuestos, obligaciones y disponibilidad.
                      td.ajuste-border-tabla.texto-left Contabilidad, tesorería y área financiera.
                      td.texto-left Informe de revisión y conciliaciones.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aprobación
                      td.ajuste-border-tabla.texto-left Autorizar partidas, montos y responsables.
                      td.ajuste-border-tabla.texto-left Órgano competente según los estatutos.
                      td.texto-left Acta o acuerdo de aprobación.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ejecución
                      td.ajuste-border-tabla.texto-left Contratar, recaudar, comprometer y pagar recursos.
                      td.ajuste-border-tabla.texto-left Gerencia, tesorería y responsables autorizados.
                      td.texto-left Contratos, órdenes, comprobantes y soportes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Modificación
                      td.ajuste-border-tabla.texto-left Adicionar, reducir o trasladar partidas.
                      td.ajuste-border-tabla.texto-left Instancia definida en la política presupuestal.
                      td.texto-left Solicitud justificada y aprobación formal.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Seguimiento
                      td.ajuste-border-tabla.texto-left Comparar valores presupuestados y ejecutados.
                      td.ajuste-border-tabla.texto-left Gerencia, contabilidad y responsables de área.
                      td.texto-left Informe periódico de ejecución.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control
                      td.ajuste-border-tabla.texto-left Verificar la finalidad, autorización y trazabilidad.
                      td.ajuste-border-tabla.texto-left Órganos de control y revisoría fiscal, cuando corresponda.
                      td.texto-left Informes, observaciones y planes de mejora.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evaluación
                      td.ajuste-border-tabla.texto-left Analizar resultados financieros y sociales.
                      td.ajuste-border-tabla.texto-left Administración, consejo y asamblea.
                      td.texto-left Informe final de gestión presupuestal.
          p.mb-5 Una diferencia entre necesidades y recursos disponibles permite aplicar los niveles de autoridad en una decisión presupuestal:
          .caja-6(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-6_p
                h5 Ejemplo aplicado
                p Una cooperativa comienza la formulación de su presupuesto anual. La gerencia solicita a cada área que presente sus necesidades y actividades para el siguiente periodo. El comité de educación proyecta jornadas de capacitación; el área administrativa calcula los gastos de funcionamiento; tesorería estima los recaudos y pagos; y contabilidad entrega los valores históricos y las obligaciones pendientes.
                p El área financiera consolida las solicitudes y encuentra que los recursos requeridos ascienden a $275.000.000, mientras que los ingresos proyectados son de $250.000.000. La gerencia no puede aprobar por sí sola todas las partidas. Debe solicitar a las áreas que revisen sus prioridades, ajusten la propuesta y presenten al órgano competente de acuerdo con los estatutos y los niveles de autoridad definidos.
                p El faltante presupuestal inicial se determina así:
                .row.justify-content-center.mb-3(data-aos="zoom-in")
                  .col-xl-10
                    .caja-4 
                      h5.mb-0.text-center Faltante proyectado = recursos requeridos − ingresos proyectados
                h5.text-center $275.000.000 − $250.000.000 = $25.000.000
                p.mb-0 La diferencia de $25.000.000 obliga a revisar las prioridades, reducir o aplazar actividades, buscar fuentes de financiación autorizadas o ajustar las metas previstas. El déficit no debe resolverse mediante decisiones informales de una sola dependencia, sino mediante el procedimiento y los niveles de autoridad establecidos.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 500px").m-auto
      p.mb-0 Reconocer la estructura organizacional permite asignar responsabilidades, definir quién formula, revisa, aprueba, ejecuta y controla cada partida, y favorecer decisiones presupuestales coordinadas y debidamente sustentadas.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Identificación de necesidades por áreas
      p Identificar necesidades consiste en establecer qué recursos requiere cada dependencia para desarrollar sus actividades durante el periodo presupuestal. Las solicitudes deben relacionarse con los objetivos y planes de trabajo y precisar qué se necesita, para qué se utilizará, cuánto cuesta, cuándo se requiere y qué resultado se espera alcanzar.
      p.mb-5 Las necesidades deben sustentarse con información que permita analizar su pertinencia, costo y prioridad:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Identificación de necesidades presupuestales por áreas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Área o dependencia
                      th.ajuste-border-tabla.texto-left Necesidad identificada
                      th.ajuste-border-tabla.texto-left Justificación
                      th.texto-left Información requerida
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Administración
                      td.ajuste-border-tabla.texto-left Renovación de equipos de cómputo.
                      td.ajuste-border-tabla.texto-left Los equipos actuales presentan fallas y retrasan los procesos internos.
                      td.texto-left Inventario, diagnóstico técnico y cotizaciones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Contabilidad
                      td.ajuste-border-tabla.texto-left Actualización del #[i software] contable.
                      td.ajuste-border-tabla.texto-left Se requiere mejorar el registro, la generación de reportes y el cumplimiento de obligaciones.
                      td.texto-left Propuesta del proveedor, licencias y costos de implementación.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tesorería
                      td.ajuste-border-tabla.texto-left Herramienta para seguimiento de cartera.
                      td.ajuste-border-tabla.texto-left Existe un aumento de cuentas vencidas y dificultades para controlar los recaudos.
                      td.texto-left Informe de cartera, funcionalidades requeridas y cotizaciones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Área operativa
                      td.ajuste-border-tabla.texto-left Compra de materiales e insumos.
                      td.ajuste-border-tabla.texto-left Son necesarios para prestar los servicios programados.
                      td.texto-left Cantidades, precios unitarios y proyección de actividades.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Talento humano
                      td.ajuste-border-tabla.texto-left Capacitación del personal.
                      td.ajuste-border-tabla.texto-left Se identificaron necesidades de actualización técnica y normativa.
                      td.texto-left Diagnóstico, programa de formación y número de participantes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Comité de educación
                      td.ajuste-border-tabla.texto-left Jornadas de formación para asociados.
                      td.ajuste-border-tabla.texto-left Se busca fortalecer conocimientos solidarios y financieros.
                      td.texto-left Plan educativo, temas, cobertura y presupuesto por actividad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Comité de solidaridad
                      td.ajuste-border-tabla.texto-left Recursos para auxilios.
                      td.ajuste-border-tabla.texto-left Se proyecta atender solicitudes de asociados que cumplan el reglamento.
                      td.texto-left Historial de solicitudes, saldo del fondo y criterios de asignación.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bienestar social
                      td.ajuste-border-tabla.texto-left Actividades de salud y recreación.
                      td.ajuste-border-tabla.texto-left Se requiere ampliar la participación y los beneficios para los asociados.
                      td.texto-left Número de beneficiarios, cronograma y propuestas de proveedores.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Infraestructura
                      td.ajuste-border-tabla.texto-left Mantenimiento de la sede.
                      td.ajuste-border-tabla.texto-left Se detectaron daños que pueden afectar la seguridad y el funcionamiento.
                      td.texto-left Informe técnico, fotografías y cotizaciones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gerencia
                      td.ajuste-border-tabla.texto-left Asesoría jurídica y tributaria.
                      td.ajuste-border-tabla.texto-left Se requiere acompañamiento para atender cambios normativos y decisiones institucionales.
                      td.texto-left Alcance del servicio, productos esperados y propuestas económicas.
          p No todas las solicitudes deben incorporarse automáticamente. Su revisión debe considerar la relación con el objeto social, disponibilidad financiera, urgencia, beneficiarios, obligaciones y riesgos de aplazamiento.
          p.mb-5 Para aplicar estos criterios de priorización, se presenta una situación en la que las necesidades superan los recursos disponibles:
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-10
              .caja-2(data-aos="zoom-in")
                h5 Ejemplo aplicado
                p Una cooperativa solicita a sus áreas presentar las necesidades para el siguiente periodo. Administración propone renovar cinco computadores por $20.000.000; el comité de educación solicita $18.000.000 para jornadas de formación; tesorería requiere $8.000.000 para una herramienta de seguimiento de cartera; y el área de infraestructura estima $15.000.000 para reparaciones en la sede.
                p Al revisar las propuestas, la gerencia determina que los computadores presentan fallas frecuentes, las reparaciones de la sede son necesarias para evitar riesgos y la herramienta de cartera puede contribuir a mejorar los recaudos. Las jornadas educativas también responden al plan institucional, pero parte de las actividades puede desarrollarse mediante herramientas virtuales para reducir costos. La organización ajusta cada solicitud antes de incorporarla al proyecto de presupuesto.
                p La siguiente tabla presenta los criterios para analizar las solicitudes formuladas por las áreas y establecer su prioridad.
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 7.
                  span Priorización de necesidades presupuestales
                .tabla-a(data-aos="zoom-in").mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Necesidad
                        th.ajuste-border-tabla.texto-left Valor solicitado
                        th.ajuste-border-tabla.texto-left Urgencia
                        th.ajuste-border-tabla.texto-left Impacto esperado
                        th.ajuste-border-tabla.texto-left Posibilidad de aplazamiento
                        th.texto-left Decisión preliminar
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Renovación de computadores
                        td.ajuste-border-tabla.texto-left $20.000.000
                        td.ajuste-border-tabla.texto-left Alta
                        td.ajuste-border-tabla.texto-left Mejora la continuidad y eficiencia de los procesos
                        td.ajuste-border-tabla.texto-left Puede ejecutarse parcialmente.
                        td.texto-left Comprar tres equipos inicialmente por $12.000.000.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Jornadas de educación
                        td.ajuste-border-tabla.texto-left $18.000.000
                        td.ajuste-border-tabla.texto-left Media
                        td.ajuste-border-tabla.texto-left Fortalece los conocimientos de los asociados.
                        td.ajuste-border-tabla.texto-left Algunas actividades pueden realizarse virtualmente.
                        td.texto-left Ajustar la partida a $14.000.000.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Herramienta de cartera
                        td.ajuste-border-tabla.texto-left $8.000.000
                        td.ajuste-border-tabla.texto-left Alta
                        td.ajuste-border-tabla.texto-left Facilita el seguimiento de recaudos y saldos vencidos.
                        td.ajuste-border-tabla.texto-left No se recomienda aplazar.
                        td.texto-left Incluir la totalidad del valor.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Reparaciones de la sede
                        td.ajuste-border-tabla.texto-left $15.000.000
                        td.ajuste-border-tabla.texto-left Alta
                        td.ajuste-border-tabla.texto-left Reduce riesgos y garantiza el funcionamiento de las instalaciones.
                        td.ajuste-border-tabla.texto-left Las reparaciones menores pueden programarse después.
                        td.texto-left Aprobar inicialmente $11.000.000.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total solicitado
                        td(colspan="5").texto-left $61.000.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Total priorizado
                        td(colspan="5").texto-left $45.000.000
                p Nota. Tabla con fines didácticos para comparar la urgencia, el impacto y la posibilidad de aplazamiento de las necesidades presupuestales.
                p La reducción obtenida mediante la revisión se calcula así:
                .row.justify-content-center.mb-3(data-aos="zoom-in")
                  .col-xl-10
                    .caja-3
                      h5.mb-0.text-center Ajuste de las solicitudes = valor total solicitado − valor total priorizado
                h5.text-center $61.000.000 − $45.000.000 = $16.000.000
                p.mb-0 El ajuste de $16.000.000 no significa que las necesidades eliminadas carezcan de importancia. Algunas fueron reducidas, programadas por etapas o modificadas para adaptarlas a la capacidad financiera de la organización. Las partidas aplazadas deben mantenerse registradas para ser evaluadas en futuras modificaciones o periodos presupuestales.
          p.mb-0 La identificación de necesidades permite construir un presupuesto sustentado, evitar solicitudes duplicadas y priorizar los recursos según su urgencia, impacto y beneficio para los asociados.
          Separador
          #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.3 Canales de comunicación y responsables de la información
      p Los canales de comunicación presupuestal permiten solicitar, recibir, revisar y corregir la información aportada por las áreas. Para conservar la trazabilidad, la organización debe definir medios oficiales, fechas, soportes y responsables, de manera que pueda identificarse quién originó, verificó, modificó y aprobó cada dato.
      p.mb-5 Los principales medios utilizados cumplen funciones diferentes dentro del flujo de información presupuestal:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Formato institucional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite recopilar solicitudes mediante una estructura uniforme con necesidad, justificación, cantidades, valores, fechas y responsables. Debe verificarse que los campos requeridos estén diligenciados.
            .row(titulo="Correo electrónico institucional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita enviar formatos, cotizaciones, observaciones, correcciones y aprobaciones. Deben utilizarse cuentas institucionales y conservarse los mensajes que respalden el intercambio de información.
            .row(titulo="Reuniones de planeación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten analizar prioridades, restricciones, compromisos y decisiones entre las áreas. Los acuerdos deben quedar documentados mediante actas con responsables y compromisos definidos.
            .row(titulo="Plataforma colaborativa").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita consolidar presupuestos parciales, cronogramas y avances compartidos. Requiere definir permisos de consulta y modificación para evitar cambios no autorizados.
            .row(titulo="Sistema contable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proporciona antecedentes sobre ingresos, costos, gastos, obligaciones y saldos. Los reportes utilizados deben guardar correspondencia con los auxiliares y la información financiera.
            .row(titulo="Sistema de tesorería").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite consultar recaudos, pagos, cartera, vencimientos y disponibilidad de efectivo para apoyar la programación de entradas y salidas de recursos.
            .row(titulo="Repositorio documental").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conserva cotizaciones, contratos, diagnósticos, planes y demás soportes. Debe mantener una organización uniforme de carpetas, nombres, versiones y permisos de acceso.
            .row(titulo="Comunicación interna").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite divulgar cronogramas, políticas, lineamientos y responsabilidades del proceso presupuestal y confirmar que las áreas hayan recibido oportunamente las orientaciones.
            .row(titulo="Comité presupuestal, cuando exista").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede revisar técnicamente solicitudes, supuestos, prioridades y riesgos, y formular recomendaciones. Sus decisiones y modificaciones deben quedar registradas.
            .row(titulo="Informe consolidado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Presenta al órgano competente los recursos, aplicaciones, responsables, riesgos y resultados esperados, verificando su correspondencia con las solicitudes previamente revisadas.
      p.mb-5 La preparación presupuestal requiere responsables que identifiquen necesidades y aporten información técnica, administrativa y financiera debidamente sustentada:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Responsable de área")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsable de área
              p.mb-0 Identifica y sustenta las necesidades de su dependencia. Revisa actividades, cantidades, valores, fechas y resultados esperados, y respalda la solicitud mediante el formato diligenciado y los soportes correspondientes.
        .py-3.py-md-4(titulo="Responsable de proyecto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsable de proyecto
              p.mb-0 Relaciona los recursos solicitados con el plan de trabajo. Verifica metas, cronograma, beneficiarios y costos, y consolida esta información en el presupuesto detallado del proyecto.
        .py-3.py-md-4(titulo="Área administrativa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Área administrativa
              p.mb-0 Consolida las necesidades de funcionamiento relacionadas con nómina, servicios, suministros, mantenimiento y contratos. Esta información permite estructurar el presupuesto administrativo de la organización.
        .py-3.py-md-4(titulo="Contabilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Contabilidad
              p.mb-0 Verifica antecedentes y coherencia contable mediante información sobre ejecución histórica, obligaciones, impuestos y saldos. Como evidencia, genera reportes contables y observaciones para sustentar las proyecciones.
        .py-3.py-md-4(titulo="Tesorería")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Tesorería
              p.mb-0 Analiza la disponibilidad de recursos y el momento previsto para los pagos. Revisa recaudos, cartera, vencimientos y saldos bancarios para elaborar la proyección de efectivo.
      p.mb-5 Una vez recopilada la información, otras instancias intervienen para evaluar su viabilidad, consolidarla y adoptar las decisiones correspondientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Área financiera
                  p.mb-0 Revisa la viabilidad de las solicitudes mediante las fuentes de financiación, el equilibrio y los límites presupuestales. El resultado de esta revisión puede documentarse mediante un informe de viabilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gerencia
                  p.mb-0 Consolida y ajusta el proyecto general considerando prioridades, capacidad financiera y objetivos institucionales. Como resultado, estructura el proyecto presupuestal consolidado que será presentado para las revisiones correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comité presupuestal, cuando exista
                  p.mb-0 Evalúa supuestos, duplicidades y riesgos a partir de solicitudes, cotizaciones, proyecciones y escenarios. Sus conclusiones pueden quedar registradas mediante actas de revisión y recomendaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Órgano de administración
                  p.mb-0 Aprueba el presupuesto de acuerdo con sus competencias. Revisa valores, partidas, responsables y fuentes de financiación, y formaliza la decisión mediante el acta o acuerdo correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Órgano de control
                  p.mb-0 Verifica el cumplimiento del procedimiento, las autorizaciones, los soportes y la trazabilidad de las decisiones. Su intervención se documenta mediante informes de control, observaciones y recomendaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La utilización de canales diferentes sin una consolidación uniforme puede generar duplicidades:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img22.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p Una cooperativa solicita las necesidades presupuestales mediante correo electrónico. El área administrativa presenta una solicitud de $12.000.000 para adquirir equipos, mientras que el área tecnológica registra nuevamente la misma compra por $8.000.000 en una hoja de cálculo compartida. Como no existe un formato único ni una persona encargada de consolidar las propuestas, la adquisición aparece dos veces en el proyecto de presupuesto.
            p Para corregir la situación, la gerencia adopta un formato institucional con un código para cada solicitud y establece una carpeta digital como repositorio oficial. Cada área debe adjuntar su justificación y sus cotizaciones; contabilidad revisa los valores históricos; tesorería analiza la disponibilidad de recursos; y el responsable de consolidación verifica posibles duplicidades antes de presentar el proyecto.
            p.mb-0 La eliminación de la solicitud duplicada evita presupuestar indebidamente $8.000.000. La compra se conserva por el valor sustentado de $12.000.000 y queda asignada a una sola dependencia responsable. Además, el código de identificación permite relacionar la necesidad con las cotizaciones, la revisión financiera y la decisión adoptada.
      p.mb-0 Los canales oficiales y la asignación de responsables permiten organizar y verificar la información presupuestal, reducir duplicidades y facilitar su consolidación para las etapas posteriores.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Instrumentos para recolectar información presupuestal
      p Los instrumentos de recolección permiten registrar y sustentar necesidades, actividades, cantidades, valores y fechas mediante estructuras uniformes. Su selección depende del tipo de información requerida y debe facilitar la comparación, consolidación y verificación de los datos, así como la identificación de responsables, versiones y documentos de respaldo.
      p.mb-5 Para recopilar las necesidades y relacionarlas con las actividades previstas, pueden utilizarse los siguientes instrumentos:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img23.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Formato de necesidades por área
                p.mb-0.text-center Registra la descripción, justificación, cantidades, valores y fechas de las solicitudes administrativas, operativas y sociales. Genera como evidencia el formato diligenciado y firmado.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img24.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Matriz presupuestal
                p.mb-0.text-center Integra ingresos, costos, gastos, inversiones y fuentes de financiación para consolidar las cifras presentadas por las dependencias. Su resultado es un archivo presupuestal unificado.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img25.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Plan de trabajo
                p.mb-0.text-center Relaciona actividades, metas, responsables y cronograma con los recursos solicitados para desarrollar las acciones programadas. Genera una programación anual o por proyecto.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img26.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Entrevista con responsables
                p.mb-0.text-center Permite ampliar información sobre necesidades, riesgos y resultados esperados que no pueden comprenderse únicamente mediante cifras. Puede quedar respaldada mediante un registro de entrevista o acta.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img27.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Reunión de planeación
                p.mb-0.text-center Facilita analizar prioridades, acuerdos, ajustes y compromisos entre áreas, así como coordinar recursos compartidos. Las decisiones y responsables se registran en un acta.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img28.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Encuesta a asociados
                p.mb-0.text-center Recopila necesidades, preferencias y expectativas de los miembros para sustentar programas educativos, solidarios o de bienestar. Genera resultados consolidados de la consulta.
      p.mb-5 La información recopilada debe complementarse con instrumentos que permitan comprobar requisitos, antecedentes, valores y compromisos presupuestales:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Lista de verificación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Confirma el cumplimiento de requisitos y anexos obligatorios antes de revisar una solicitud. La evidencia corresponde a la lista diligenciada.
            .row(titulo="Reporte contable histórico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proporciona valores ejecutados en periodos anteriores para sustentar las proyecciones de ingresos, costos y gastos. Puede respaldarse con auxiliares, balances y estados financieros.
            .row(titulo="Informe de tesorería").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aporta información sobre recaudos, pagos, cartera y saldos disponibles para preparar el presupuesto de efectivo. Genera como evidencia el flujo de caja y los reportes bancarios.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img29.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img30.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Inventario de bienes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica la existencia, estado, ubicación y necesidad de reposición de los bienes. Permite proyectar compras, mantenimiento o reemplazos y se sustenta con inventarios y diagnósticos actualizados.
            .row(titulo="Cotizaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Presentan precios y condiciones ofrecidas por proveedores para estimar el valor de bienes y servicios requeridos. Su evidencia corresponde a las propuestas comerciales recibidas.
            .row(titulo="Contratos vigentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifican compromisos, fechas, valores y condiciones de pago que continuarán en el siguiente periodo. Permiten incorporar estas obligaciones y generan una relación de contratos y pagos previstos.
      p La selección adecuada de instrumentos permite recopilar, organizar y sustentar la información presupuestal, facilitando su posterior revisión, validación y consolidación.
      p.mb-5 Para aplicar estos instrumentos en una solicitud presupuestal, consulte el Anexo 3, que desarrolla el caso y los cálculos correspondientes:
      .caja-5.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 3. Caso aplicado de recolección y sustentación de información presupuestal
            p.mb-0 Profundice en la aplicación de los instrumentos mediante una solicitud presupuestal que integra necesidades, soportes, valores y cálculos para organizar y validar la información.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_03_Recoleccion_Sustentacion_Informacion.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Controles, tiempos y validación de los datos
      p La información recopilada debe validarse antes de incorporarse al presupuesto. La revisión permite detectar datos incompletos, errores matemáticos, duplicidades, valores desactualizados, fuentes inadecuadas o solicitudes sin autorización. También requiere establecer fechas de entrega y corrección para que las diferentes versiones puedan identificarse y consolidarse de manera controlada. 
      p.mb-5 La siguiente tabla detalla los aspectos que deben revisarse antes de incorporar una solicitud al proyecto de presupuesto:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Controles para validar la información presupuestal
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Control
                      th.ajuste-border-tabla.texto-left Pregunta de validación
                      th.ajuste-border-tabla.texto-left Responsable posible
                      th.texto-left Acción ante una inconsistencia
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Integridad
                      td.ajuste-border-tabla.texto-left ¿Todos los campos del instrumento están diligenciados?
                      td.ajuste-border-tabla.texto-left Responsable de área.
                      td.texto-left Completar la información faltante.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Justificación
                      td.ajuste-border-tabla.texto-left ¿La necesidad se relaciona con una actividad u objetivo institucional?
                      td.ajuste-border-tabla.texto-left Gerencia o responsable de planeación.
                      td.texto-left Solicitar explicación o excluir la partida.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Correspondencia
                      td.ajuste-border-tabla.texto-left ¿Las cantidades coinciden con las metas y los beneficiarios?
                      td.ajuste-border-tabla.texto-left Responsable del proyecto.
                      td.texto-left Ajustar cantidades y cálculos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Exactitud matemática
                      td.ajuste-border-tabla.texto-left ¿Las multiplicaciones, sumas y porcentajes son correctos?
                      td.ajuste-border-tabla.texto-left Área financiera o contabilidad.
                      td.texto-left Corregir las operaciones aritméticas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sustento económico
                      td.ajuste-border-tabla.texto-left ¿Los valores están respaldados mediante cotizaciones o antecedentes?
                      td.ajuste-border-tabla.texto-left Área administrativa o de compras.
                      td.texto-left Solicitar soportes actualizados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad financiera
                      td.ajuste-border-tabla.texto-left ¿Existen ingresos o recursos para financiar la solicitud?
                      td.ajuste-border-tabla.texto-left Tesorería y área financiera.
                      td.texto-left Reducir, aplazar o buscar una fuente autorizada.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fuente de financiación
                      td.ajuste-border-tabla.texto-left ¿La partida corresponde a la fuente propuesta?
                      td.ajuste-border-tabla.texto-left Contabilidad y responsable del fondo.
                      td.texto-left Reclasificar o definir otra fuente permitida.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Duplicidad
                      td.ajuste-border-tabla.texto-left ¿La misma necesidad fue presentada por otra área?
                      td.ajuste-border-tabla.texto-left Responsable de consolidación.
                      td.texto-left Unificar las solicitudes y asignar un responsable.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Periodo
                      td.ajuste-border-tabla.texto-left ¿La actividad y el pago corresponden al periodo presupuestado?
                      td.ajuste-border-tabla.texto-left Contabilidad y tesorería.
                      td.texto-left Reprogramar la fecha o el periodo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Normativa interna
                      td.ajuste-border-tabla.texto-left ¿La solicitud cumple estatutos, reglamentos y políticas?
                      td.ajuste-border-tabla.texto-left Gerencia o asesoría jurídica.
                      td.texto-left Ajustar el procedimiento o rechazar la solicitud.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Autorización
                      td.ajuste-border-tabla.texto-left ¿La información fue revisada y aprobada por quien corresponde?
                      td.ajuste-border-tabla.texto-left Jefe de área o comité responsable.
                      td.texto-left Obtener la aprobación pendiente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Trazabilidad
                      td.ajuste-border-tabla.texto-left ¿Es posible identificar quién elaboró, corrigió y validó los datos?
                      td.ajuste-border-tabla.texto-left Responsable documental.
                      td.texto-left Registrar responsables, fechas y versiones.
          p.mb-5 A continuación, se desarrolla un caso aplicado:
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-10
              .caja-2(data-aos="zoom-in")
                h5 Ejemplo aplicado
                p Una cooperativa recibe la solicitud presupuestal de un programa de bienestar dirigido a 200 asociados. El área responsable proyecta materiales por $6.000.000, logística por $5.500.000 y honorarios por $7.000.000. Durante la validación se comprueba que los materiales fueron calculados para 250 personas y que la cotización de logística tiene más de un año de expedición.
                p La solicitud se devuelve para corregir la cantidad de materiales y actualizar la cotización. El valor unitario de cada material es de $24.000, por lo que la partida correcta para 200 participantes es de $4.800.000. La nueva cotización establece un costo logístico de $5.800.000. Después de realizar los ajustes, la solicitud pasa nuevamente a revisión financiera.
                p La siguiente tabla presenta una programación básica para controlar la entrega, revisión y corrección de las solicitudes formuladas por las áreas:
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 9.
                  span Cronograma para recolectar y validar información presupuestal
                .tabla-a(data-aos="zoom-in").mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Actividad
                        th.ajuste-border-tabla.texto-left Fecha prevista
                        th.ajuste-border-tabla.texto-left Responsable
                        th.ajuste-border-tabla.texto-left Control aplicado
                        th.texto-left Resultado esperado
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Comunicar lineamientos y formatos
                        td.ajuste-border-tabla.texto-left 1 de septiembre
                        td.ajuste-border-tabla.texto-left Gerencia
                        td.ajuste-border-tabla.texto-left Confirmar recepción por todas las áreas.
                        td.texto-left Orientaciones divulgadas.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Identificar necesidades
                        td.ajuste-border-tabla.texto-left 2 al 12 de septiembre
                        td.ajuste-border-tabla.texto-left Responsables de áreas y comités
                        td.ajuste-border-tabla.texto-left Relacionar solicitudes con planes de trabajo.
                        td.texto-left Necesidades identificadas.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Recopilar cotizaciones y soportes
                        td.ajuste-border-tabla.texto-left 13 al 22 de septiembre
                        td.ajuste-border-tabla.texto-left Áreas solicitantes
                        td.ajuste-border-tabla.texto-left Revisar vigencia y correspondencia de los documentos.
                        td.texto-left Solicitudes sustentadas.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Entregar formatos diligenciados
                        td.ajuste-border-tabla.texto-left 23 de septiembre
                        td.ajuste-border-tabla.texto-left Responsables de área
                        td.ajuste-border-tabla.texto-left Verificar campos, firmas y anexos.
                        td.texto-left Información recibida dentro del plazo.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Validar datos técnicos
                        td.ajuste-border-tabla.texto-left 24 al 28 de septiembre
                        td.ajuste-border-tabla.texto-left Responsables de proyectos
                        td.ajuste-border-tabla.texto-left Revisar cantidades, metas y actividades.
                        td.texto-left Datos técnicos confirmados.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Revisar cálculos y antecedentes
                        td.ajuste-border-tabla.texto-left 29 de septiembre al 3 de octubre
                        td.ajuste-border-tabla.texto-left Contabilidad y área financiera
                        td.ajuste-border-tabla.texto-left Comparar valores, operaciones y ejecución histórica.
                        td.texto-left Cifras verificadas.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Analizar disponibilidad de efectivo
                        td.ajuste-border-tabla.texto-left 4 al 6 de octubre
                        td.ajuste-border-tabla.texto-left Tesorería
                        td.ajuste-border-tabla.texto-left Comparar fechas de ingresos y pagos.
                        td.texto-left Viabilidad financiera determinada.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Devolver solicitudes con observaciones
                        td.ajuste-border-tabla.texto-left 7 de octubre
                        td.ajuste-border-tabla.texto-left Gerencia o responsable de consolidación
                        td.ajuste-border-tabla.texto-left Registrar las correcciones requeridas.
                        td.texto-left Observaciones comunicadas.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Presentar correcciones
                        td.ajuste-border-tabla.texto-left 8 al 12 de octubre
                        td.ajuste-border-tabla.texto-left Áreas solicitantes
                        td.ajuste-border-tabla.texto-left Verificar nueva versión y respuesta a observaciones.
                        td.texto-left Solicitudes corregidas.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Consolidar información validada
                        td.ajuste-border-tabla.texto-left 13 al 18 de octubre
                        td.ajuste-border-tabla.texto-left Área financiera
                        td.ajuste-border-tabla.texto-left Eliminar duplicidades y unificar partidas.
                        td.texto-left Proyecto presupuestal consolidado.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Revisar el proyecto general
                        td.ajuste-border-tabla.texto-left 19 al 24 de octubre
                        td.ajuste-border-tabla.texto-left Gerencia y órgano de administración
                        td.ajuste-border-tabla.texto-left Evaluar equilibrio, prioridades y riesgos.
                        td.texto-left Proyecto listo para aprobación.
                p El valor inicial solicitado se calcula así:
                h5.text-center $6.000.000 + $5.500.000 + $7.000.000 = $18.500.000
                p Después de la validación, el valor corregido corresponde a:
                h5.text-center $4.800.000 + $5.800.000 + $7.000.000 = $17.600.000
                p La diferencia identificada es:
                h5.text-center $18.500.000 − $17.600.000 = $900.000
                p.mb-0 La revisión reduce la solicitud en $900.000 y permite que las cifras correspondan con el número real de participantes y con precios actualizados. La corrección debe quedar registrada en la nueva versión del formato, junto con la fecha y los responsables de su elaboración y validación.
          p.mb-0 Los controles, cronogramas y procedimientos de validación permiten revisar y corregir la información antes de consolidarla, reduciendo inconsistencias, duplicidades y solicitudes sin sustento. Así, la organización presupuestal integra responsabilidades, necesidades, canales e instrumentos para obtener datos coherentes con la capacidad financiera y la finalidad social.

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
