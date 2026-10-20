<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Sanciones y prevención del incumplimiento tributario
      p.mb-5 El incumplimiento tributario puede generar intereses, sanciones económicas, requerimientos administrativos y otras consecuencias para la organización. Su prevención exige conocer las disposiciones aplicables, identificar oportunamente errores u omisiones y establecer controles sobre declaraciones, reportes, documentos y pagos. La corrección adecuada reduce riesgos, mientras que las conductas deliberadas de evasión pueden producir consecuencias más graves.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Estatuto Tributario, UVT y principales sancione
      p El Estatuto Tributario regula los impuestos nacionales administrados por la DIAN, sus procedimientos y el régimen sancionatorio. Su aplicación considera lesividad, proporcionalidad, gradualidad y favorabilidad. La UVT permite expresar valores tributarios actualizables; para 2026 corresponde a #[b $52.374] y debe aplicarse según el año pertinente.
      p.mb-5 Las situaciones relacionadas con las declaraciones pueden diferenciarse según el tipo de incumplimiento y la posible consecuencia aplicable:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación extemporánea
                  p.mb-0 Ocurre cuando la declaración se presenta después del vencimiento. Puede generar sanción por extemporaneidad e intereses si existe un valor pendiente de pago. Como control preventivo, se establecen fechas internas anteriores al plazo oficial.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Omisión de la declaración
                  p.mb-0 Se presenta cuando la organización, estando obligada, no entrega la declaración correspondiente. Puede generar sanción por no declarar y actuaciones de la autoridad tributaria. Su prevención requiere revisar periódicamente las responsabilidades aplicables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Corrección de la declaración
                  p.mb-0 Consiste en modificar una declaración, por ejemplo, para aumentar el impuesto o disminuir el saldo a favor. Puede generar sanción por corrección cuando legalmente corresponda. La conciliación previa de cifras y soportes reduce este riesgo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inexactitud
                  p.mb-0 Puede configurarse cuando se omiten ingresos, se incluyen datos equivocados o se utilizan beneficios improcedentes en las condiciones previstas legalmente. Sus consecuencias pueden incluir mayor impuesto, sanción e intereses. Requiere revisión contable, tributaria y documental previa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 500px").m-auto
      p Otros incumplimientos se relacionan con reportes, facturación, registros contables y pago oportuno de las obligaciones:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img5.png", alt="" style="width: 320px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Información exógena incompleta o errónea").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende reportes no presentados, enviados fuera del plazo o con inconsistencias. La consecuencia depende de la información afectada y de las condiciones legales. Se previene validando identificaciones, conceptos y valores antes de transmitir los archivos.
            .row(titulo="Incumplimiento en la facturación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede presentarse cuando no se expide la factura exigida o se genera sin los requisitos aplicables. Puede ocasionar consecuencias económicas o administrativas. El control debe incluir numeración, validación y revisión de los documentos emitidos.
            .row(titulo="Irregularidades contables").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen situaciones como ausencia o atraso de libros y registros que impidan comprobar adecuadamente las operaciones. Pueden generar consecuencias tributarias. Los cierres periódicos, conciliaciones y soportes organizados contribuyen a prevenir estas irregularidades.
            .row(titulo="Pago tardío").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se presenta cuando una obligación determinada se cancela después del vencimiento. El retraso genera #[b intereses moratorios] sobre el valor pendiente, por lo que tesorería debe programar anticipadamente los recursos destinados al pago.
      p Los intereses moratorios deben diferenciarse de las sanciones: el Estatuto Tributario dispone que se causan por el retardo en el pago de impuestos, anticipos o retenciones, sin perjuicio de las sanciones que puedan corresponder.
      p.mb-5 El siguiente caso permite aplicar la UVT y analizar un incumplimiento antes de determinar su posible consecuencia:
      .caja-6(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-6_p
            h5 Ejemplo aplicado
            p Un fondo de empleados del sector hospitalario debía presentar una declaración y un reporte de información tributaria durante el mismo mes. La declaración fue preparada dentro del plazo, pero el reporte se transmitió después del vencimiento porque no se habían validado correctamente los números de identificación de algunos terceros.
            p Al detectar el incumplimiento, el área contable verifica el periodo, la información afectada y la normativa aplicable antes de calcular la posible sanción. También corrige la base de datos, presenta el reporte y documenta la causa del retraso. La organización establece posteriormente una revisión de terceros quince días antes de cada vencimiento para evitar que la situación se repita.
            p Cuando una disposición expresa un valor en UVT, su conversión se realiza multiplicando el número de unidades por el valor vigente:
            .row.justify-content-center.mb-3(data-aos="zoom-in")
              .col-xl-9
                .caja-4 
                  h5.mb-0.text-center Valor en pesos = número de UVT × valor anual de la UVT
            p Por ejemplo, para 2026:
            h5.text-center 10 UVT × $52.374 = $523.740
            p.mb-0 Este cálculo únicamente explica la conversión de UVT a pesos y no representa la liquidación de una sanción específica. El valor definitivo debe establecerse con base en el artículo aplicable, las circunstancias del incumplimiento y las reducciones que legalmente resulten procedentes.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img6.png', alt='' style="width: 500px").m-auto
      p.mb-0 El conocimiento del Estatuto Tributario y la UVT permite identificar incumplimientos, posibles sanciones y valores actualizables, y sirve de base para analizar omisiones, correcciones y conductas relacionadas con la evasión tributaria.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Incumplimientos, correcciones y prevención de la evasión tributaria
      p Los errores de registro, las omisiones de información, los controles insuficientes o la presentación tardía pueden ocasionar incumplimientos tributarios. Sin embargo, estas situaciones no equivalen automáticamente a evasión. Cuando se identifica una inconsistencia, deben analizarse su origen, el periodo afectado, los soportes y la necesidad de corregir la información o declaración correspondiente.
      p.mb-5 Estas diferencias permiten establecer el tratamiento que corresponde antes de adoptar una acción correctiva:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-8.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img7.png', alt="" ).m-auto
                  h4.text-center Incumplimiento tributario
                  .caja-8_p
                    p.mb-0.text-center Corresponde a la falta de atención de un deber tributario, como presentar, informar, facturar o pagar en las condiciones establecidas.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-8.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img8.png', alt="" ).m-auto
                  h4.text-center Error u omisión
                  .caja-8_p
                    p.mb-0.text-center Es una inconsistencia que puede originarse sin intención de reducir indebidamente la obligación y debe analizarse para determinar su corrección.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-8.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img9.png', alt="" ).m-auto
                  h4.text-center Corrección
                  .caja-8_p
                    p.mb-0.text-center Permite modificar una declaración o información previamente presentada dentro de los términos y condiciones establecidos por la normativa tributaria.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-8.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img10.png', alt="" ).m-auto
                  h4.text-center Evasión tributaria
                  .caja-8_p
                    p.mb-0.text-center Implica conductas deliberadas orientadas a ocultar información o reducir indebidamente una obligación tributaria; no todo error o incumplimiento constituye evasión.
      p Cuando la corrección aumenta el impuesto o disminuye el saldo a favor, el término general es de tres años desde el vencimiento para declarar y antes de determinados actos de la administración. Si disminuye el valor a pagar o aumenta el saldo a favor, el término general es de un año desde el vencimiento para presentar la declaración.
      p.mb-5 Se invita a reproducir el siguiente pódcast para profundizar en cómo reconocer situaciones de incumplimiento, actuar oportunamente ante errores u omisiones y prevenir conductas orientadas a reducir indebidamente las obligaciones tributarias:
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-7(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t5/img11.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Corregir a tiempo: decisiones para un cumplimiento responsable&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t5/img12.png" style="max-width: 510px").m-auto
      p.mb-5 El siguiente caso permite diferenciar una omisión involuntaria corregible de una conducta deliberada orientada a reducir el impuesto:
      .caja-6(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-6_p
            h5 Ejemplo aplicado
            p Una cooperativa de recicladores identifica que los ingresos correspondientes a la venta de material recuperado durante diciembre no fueron incorporados en la declaración tributaria del periodo. La omisión se produjo porque el informe de uno de los centros de clasificación fue entregado después del cierre contable.
            p El contador compara las facturas, los movimientos bancarios y los registros de inventario, determina la diferencia y prepara la corrección dentro del término aplicable. La organización presenta la declaración corregida, programa el pago de los valores resultantes y conserva la conciliación que explica el ajuste. Posteriormente, establece que todos los centros deben entregar sus informes cinco días antes del cierre y asigna a una persona diferente la revisión de los ingresos registrados.
            p.mb-0 Este caso corresponde a una inconsistencia que fue identificada, documentada y corregida. Sería diferente si la administración hubiera decidido ocultar deliberadamente las ventas para reducir el impuesto, porque esta actuación podría constituir una conducta de evasión y generar consecuencias adicionales. La legislación penal contempla la omisión de ingresos y la inclusión de costos o gastos inexistentes cuando se realizan con propósito de defraudación y se cumplen las condiciones previstas legalmente. (Ley 2277, 2022).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img13.png', alt='' style="width: 500px").m-auto
      p.mb-0 La detección temprana de errores facilita su corrección y reduce el impacto del incumplimiento. La conciliación de operaciones y documentos también contribuye a prevenir inconsistencias y fortalecer los controles de cumplimiento fiscal.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Controles para fortalecer el cumplimiento fiscal
      p Los controles tributarios permiten prevenir errores, detectar inconsistencias y corregir incumplimientos antes de que se repitan. Además de programar las obligaciones, requieren revisar la información, separar funciones, conciliar documentos y mantener evidencia de las verificaciones realizadas. Su finalidad es fortalecer la calidad y trazabilidad del cumplimiento, no volver a desarrollar el calendario tributario.
      p.mb-5 Los controles preventivos permiten identificar las obligaciones y preparar los recursos antes de iniciar su cumplimiento:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagnóstico tributario
                  p.mb-0 Revisa la naturaleza jurídica, las actividades desarrolladas y las obligaciones registradas. Puede estar a cargo del contador y representante legal. Su evidencia corresponde a una matriz de responsabilidades actualizada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Calendario interno
                  p.mb-0 Programa cierres, revisiones y pagos antes de los vencimientos oficiales. El contador y tesorería pueden participar en este control, respaldado mediante un calendario con alertas, fechas internas y responsables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Revisión del RUT
                  p.mb-0 Confirma actividades, ubicación, representación y responsabilidades registradas. El representante legal y el contador revisan la información y conservan como evidencia el RUT vigente y la lista de verificación correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Programación de pagos
                  p.mb-0 Separa los recursos necesarios para impuestos y retenciones antes de su vencimiento. Tesorería controla la disponibilidad mediante el flujo de efectivo tributario y evita utilizar esos valores para otros compromisos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img17.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Durante la preparación de declaraciones y reportes, los controles permiten detectar diferencias entre documentos, registros y terceros:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Conciliación de ingresos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Compara facturación, contabilidad, bancos y cuentas por cobrar para detectar omisiones o duplicidades. El área contable realiza esta revisión y conserva como evidencia el informe de conciliación mensual.
            .row(titulo="Verificación de egresos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Confirma la realidad de compras, servicios y pagos, así como la existencia de documentos procedentes. Contabilidad y administración participan en la revisión y generan una relación de soportes validados.
            .row(titulo="Validación de terceros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprueba nombres, identificaciones, direcciones y demás datos necesarios para declaraciones y reportes. El auxiliar contable puede realizar esta depuración y conservar como evidencia la base de terceros actualizada.
            .row(titulo="Control de documentos electrónicos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisa facturas, notas, nómina electrónica y documentos soporte generados o recibidos. El responsable de facturación y el contador concilian la información y documentan los resultados mediante un reporte de documentos revisados.
            .row(titulo="Revisión de declaraciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Compara bases, tarifas, saldos y anexos antes de presentar la obligación. Participan el contador y, cuando corresponda, el revisor fiscal. La evidencia puede conservarse mediante una lista de revisión firmada.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img18.png", alt="" style="width: 380px").m-auto
      p.mb-5 Después de la preparación y presentación, otros controles permiten conservar la trazabilidad, atender requerimientos y prevenir la repetición de errores:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Seguimiento a comunicaciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Seguimiento a comunicaciones
              p.mb-0 Permite revisar notificaciones y requerimientos emitidos por las autoridades tributarias. El representante legal y el contador controlan su atención y mantienen un registro de las comunicaciones recibidas y gestionadas.
        .py-3.py-md-4(titulo="Archivo y respaldo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Archivo y respaldo
              p.mb-0 Organiza declaraciones, pagos, soportes y papeles de trabajo en un expediente físico o electrónico. El auxiliar contable puede administrar este archivo para mantener disponible y protegida la evidencia tributaria.
        .py-3.py-md-4(titulo="Acción correctiva")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Acción correctiva
              p.mb-0 Documenta el error identificado, su causa, la corrección realizada y la medida preventiva definida. El responsable del proceso registra la actuación mediante un plan de mejora y realiza seguimiento a su cumplimiento.
      p La separación de funciones complementa estos controles: la elaboración, revisión, autorización, presentación y pago no deberían concentrarse innecesariamente en una misma persona, especialmente cuando la estructura de la organización permite distribuir dichas responsabilidades.
      p.mb-5 El siguiente caso permite aplicar la conciliación, la validación de terceros y la separación de funciones antes de presentar las obligaciones:
      .caja-6(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-6_p
            h5 Ejemplo aplicado
            p Una asociación mutual de servicios funerarios recibe información mensual de tres sedes. Antes de preparar la declaración tributaria y los reportes de terceros, el área contable compara las facturas electrónicas, los movimientos bancarios, las cuentas por cobrar y los ingresos registrados por cada sede.
            p La conciliación permite detectar que una factura fue registrada dos veces y que varios proveedores tenían números de identificación incompletos. Los datos se corrigen antes de presentar las obligaciones, se actualiza la base de terceros y se establece una revisión mensual de la información enviada por cada sede. Además, la persona que prepara las declaraciones no es la misma que autoriza y ejecuta los pagos.
            p.mb-0 Este procedimiento evita que las inconsistencias lleguen a las declaraciones o a la información exógena. También permite conservar evidencia de las revisiones realizadas y demostrar cómo se determinaron los valores reportados. Los documentos electrónicos forman parte de los soportes fiscales de ingresos, costos, deducciones, pasivos e impuestos descontables, por lo que deben integrarse al sistema de control documental. (DIAN)
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img22.png', alt='' style="width: 500px").m-auto
      p.mb-0 El cumplimiento fiscal requiere presentar oportunamente las obligaciones y mantener controles sobre información, documentos, pagos y responsables. La corrección temprana de errores, la conciliación de operaciones y la conservación de soportes reducen riesgos y fortalecen una gestión fiscal ordenada, transparente y verificable.

</template>

<script>
import audio1 from '@/assets/curso/temas/t5/audios/audio-ej.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
