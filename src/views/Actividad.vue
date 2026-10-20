<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de aplicación sobre presupuesto y cumplimiento tributario en organizaciones solidarias.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la aplicación de criterios de gestión presupuestal y cumplimiento tributario para analizar situaciones, tomar decisiones y aplicar controles en organizaciones de economía solidaria.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una finalidad esencial del presupuesto en una organización solidaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar pagos y reemplazar con ellos el control contable del año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar recursos y vincularlos con los objetivos institucionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Concentrar decisiones financieras en el área que realiza los pagos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Autorizar gastos sin revisar previamente cada partida presupuestal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una organización ajusta la partida de materiales cuando cambia el número real de participantes. ¿Qué tipo de presupuesto aplica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presupuesto de efectivo, porque organiza cobros y pagos por cada periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presupuesto fijo, porque conserva sus valores para un nivel de actividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Presupuesto general, porque integra presupuestos parciales de la entidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presupuesto flexible, porque ajusta partidas según el nivel de actividad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál afirmación diferencia correctamente la planeación presupuestal del reconocimiento contable?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una fuente presupuestada puede financiar actividades sin constituir un ingreso contable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Toda fuente presupuestada debe reconocerse como ingreso al aprobar el presupuesto anual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Todo recurso proyectado se registra como ingreso antes de que la organización lo reciba.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La aprobación presupuestal fija automáticamente el tratamiento contable de cada recurso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué criterio articula adecuadamente la planeación, el presupuesto y la finalidad social de una organización solidaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elegir la propuesta con mayor gasto para utilizar todos los recursos del periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Escoger la propuesta presentada primero aunque no responda a objetivos definidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Relacionar objetivos, recursos, beneficiarios y resultados para asignar partidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Distribuir el mismo valor entre todas las áreas para evitar diferencias internas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué permite identificar la estructura organizacional antes de consolidar la información presupuestal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar áreas responsables, niveles de autoridad y competencias para decidir.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Identificar áreas solicitantes sin revisar quién debe aprobar sus requerimientos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar canales de envío sin definir responsables de las decisiones internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar instrumentos para recopilar cifras sin reconocer niveles de decisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué instrumento permite sustentar una proyección utilizando valores ejecutados en periodos anteriores?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una encuesta a asociados para identificar necesidades y preferencias del grupo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una lista de verificación para comprobar requisitos y anexos de cada solicitud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un reporte contable histórico para sustentar proyecciones con datos anteriores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una entrevista con responsables para ampliar datos sobre necesidades y riesgos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Dos áreas presentan solicitudes para adquirir el mismo equipo. ¿Qué actuación contribuye a validar correctamente la información?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener ambas solicitudes y asignar responsables distintos para ejecutarlas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Repartir el valor entre ambas áreas y conservar las dos partidas solicitadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aprobar la solicitud de mayor valor y archivar la otra sin revisión del caso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verificar la duplicidad, unificar la necesidad y definir el área responsable.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Una solicitud llegó dentro del plazo, pero tiene una cotización incompleta y cantidades inconsistentes. ¿Qué debe hacerse antes de consolidarla?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incorporarla al consolidado y revisar los soportes después de la aprobación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Devolverla, corregir la versión y verificar los datos antes de consolidarla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir sus valores con cifras de otra área para completar así el formato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Excluirla sin informar al responsable ni conservar evidencia de la revisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Una organización proyecta recuperar $40.000.000 de cartera, pero históricamente recauda el 65 %. ¿Cuál es una estimación prudente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$14.000.000.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$40.000.000.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$65.000.000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$26.000.000.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes partidas corresponde a una inversión dentro de la formulación presupuestal?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Compra de equipos tecnológicos para apoyar la operación durante varios periodos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Pago de servicios mensuales para sostener todo el funcionamiento administrativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Pago de honorarios contratados para actividades ya previstas durante el periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Pago de comisiones bancarias derivadas del manejo habitual de todas las cuentas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Una partida tiene contratos y órdenes formalizados por $38.000.000, pero parte de los bienes todavía no se recibe ni se paga. ¿Qué representa ese valor?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El valor pagado, porque los contratos y órdenes ya fueron formalizados para pago.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El valor comprometido, porque existen obligaciones aunque falte ejecutar o pagar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El valor ejecutado, porque formalizar un compromiso equivale a recibir el activo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El saldo disponible, porque todavía no se han realizado pagos desde la tesorería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Durante el seguimiento se identifica que una partida será insuficiente y requiere modificación. ¿Qué actuación corresponde?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cambiar el valor de la partida y documentar este cambio al finalizar el periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tomar recursos de otra partida y registrar posteriormente el traslado efectuado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Justificar la necesidad, gestionar el ajuste y obtener la aprobación competente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Esperar al cierre y compensar la diferencia con valores de partidas disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál relación diferencia correctamente el Registro Único Tributario y el Número de Identificación Tributaria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El RUT registra impuestos territoriales y el NIT organiza los vencimientos de la DIAN.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El RUT autoriza las actividades económicas y el NIT determina los impuestos exigibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El RUT registra identificación y clasificación; el NIT individualiza al contribuyente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El RUT reemplaza el NIT al facturar y el NIT se utiliza solo en operaciones bancarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿De qué depende la determinación de las responsabilidades tributarias de una organización solidaria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo de los datos del RUT, sin considerar las operaciones realizadas por la entidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'De la naturaleza jurídica, actividades y condiciones normativas que sean aplicables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'De una clasificación común que asigna las mismas obligaciones a todas las entidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'De la ausencia de ánimo de lucro, que elimina obligaciones derivadas de operaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál afirmación diferencia correctamente la facturación electrónica de la información exógena?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La factura y la exógena informan únicamente pagos realizados y tienen siempre la misma función tributaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La factura reporta operaciones con terceros y la exógena reemplaza la documentación exigida en cada venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La factura y la exógena sustituyen todos los soportes y eliminan la conciliación previa de cada operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La factura electrónica documenta operaciones sujetas a facturación y la exógena reporta datos de terceros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál afirmación distingue correctamente el IVA, el ICA y el impuesto sobre la renta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El IVA es nacional, el ICA es territorial y la renta depende de la naturaleza y condiciones de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El IVA y el ICA son impuestos territoriales, y la renta se aplica de igual forma a toda organización solidaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El ICA es nacional, el IVA es municipal y la renta depende exclusivamente de los datos formalmente registrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El IVA, el ICA y la renta se aplican siempre con las mismas condiciones en todas las organizaciones solidarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál afirmación describe correctamente la relación entre la UVT y las sanciones tributarias?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La UVT funciona como una sanción anual aplicada automáticamente si se presenta tarde cualquier obligación tributaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La UVT expresa valores tributarios actualizables; la sanción depende del incumplimiento y las condiciones aplicables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La UVT es una tarifa única utilizada para determinar cuánto debe pagar cualquier organización por todos sus tributos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La UVT es un registro que identifica responsabilidades tributarias y reemplaza toda consulta de las leyes aplicables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una organización detecta que omitió información por un reporte recibido después del cierre, documenta la causa y realiza la corrección correspondiente. ¿Cómo debe interpretarse esta situación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como evasión tributaria, porque toda omisión demuestra intención de ocultar la información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como planeación tributaria, porque la corrección elimina cualquier incumplimiento anterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como control preventivo, porque el error se identificó después de presentar la declaración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como error u omisión susceptible de corrección, sin asumir que exista una conducta evasiva.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes situaciones puede representar una conducta de evasión tributaria?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ocultar deliberadamente ingresos para disminuir de forma indebida una obligación tributaria.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Corregir un dato inconsistente después de identificar y documentar la causa clara del error.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actualizar el calendario tributario para anticipar la preparación y el pago de obligaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conciliar facturas y bancos antes de presentar declaraciones o reportes a la entidad fiscal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué actuación corresponde específicamente a un control de verificación de la información antes de presentar una obligación tributaria?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elaborar al inicio del periodo un calendario de obligaciones y fechas tributarias previstas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir anticipadamente responsables y recursos necesarios para cada vencimiento tributario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conciliar facturación, contabilidad y bancos, y revisar la declaración antes de presentarla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Programar cierres internos y alertas previas a todos los vencimientos tributarios oficiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
