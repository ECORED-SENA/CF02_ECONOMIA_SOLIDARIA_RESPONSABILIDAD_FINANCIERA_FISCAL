<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Responsabilidades tributarias de las organizaciones solidarias
      p.mb-5 Las organizaciones solidarias deben identificar sus responsabilidades tributarias según su naturaleza jurídica, las actividades que desarrollan y las operaciones realizadas. Su cumplimiento exige mantener actualizada la información de identificación, determinar el régimen aplicable, generar los documentos requeridos, reconocer los tributos correspondientes y organizar fechas, responsables, recursos y controles para atender oportunamente cada obligación. 
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Registro Único Tributario y Número de Identificación Tributaria
      p El Registro Único Tributario (RUT) permite a la DIAN identificar, ubicar y clasificar a las organizaciones, mientras que el NIT las individualiza para efectos tributarios, aduaneros y cambiarios. Las obligaciones no surgen del RUT, sino de la normativa aplicable y de las condiciones particulares de cada entidad.
      p.mb-5 La información del RUT puede organizarse entre los datos que identifican y clasifican a la organización y aquellos que requieren seguimiento institucional:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Identificación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Identificación
              p.mb-0 Comprende razón social, NIT, naturaleza jurídica y demás datos de individualización. Deben compararse con los estatutos, el certificado de existencia y los documentos de constitución de la organización.
        .py-3.py-md-4(titulo="Ubicación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ubicación
              p.mb-0 Incluye dirección, municipio, correo electrónico, teléfonos y otros medios de contacto. Debe comprobarse que la información permita a la DIAN comunicarse oficialmente con la organización.
        .py-3.py-md-4(titulo="Actividad económica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Actividad económica
              p.mb-0 Registra los códigos y descripciones de las actividades principales y secundarias desarrolladas. La clasificación debe corresponder con las operaciones que efectivamente realiza la entidad.
        .py-3.py-md-4(titulo="Responsabilidades tributarias")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsabilidades tributarias
              p.mb-0 Relaciona las responsabilidades registradas frente a renta, retenciones, IVA, información y otros deberes aplicables. Deben contrastarse con la normativa y las condiciones particulares de la organización.
        .py-3.py-md-4(titulo="Calidades y atributos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Calidades y atributos
              p.mb-0 Identifica condiciones particulares relacionadas con las actividades y obligaciones de la entidad, como su pertenencia a determinado régimen tributario. Deben mantenerse acordes con la situación vigente.
      p.mb-5 Otros datos requieren revisión cuando se presentan cambios en la estructura, los responsables o los lugares desde los cuales funciona la organización:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Representación legal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra a la persona facultada para actuar en nombre de la entidad. Cuando exista un nuevo nombramiento, retiro o cambio de identificación, debe determinarse si corresponde actualizar esta información.
            .row(titulo="Contador y revisor fiscal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye los datos de los profesionales responsables de deberes formales cuando corresponda. Deben comprobarse el nombramiento, la identificación y la información profesional aplicable.
            .row(titulo="Establecimientos o sedes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende lugares adicionales desde los cuales se desarrollan actividades, como centros de acopio o puntos de atención. Deben registrarse o actualizarse cuando resulte procedente.
            .row(titulo="Fecha de actualización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica el momento en que se formalizó la última modificación del RUT. Permite comprobar si los cambios recientes de la organización fueron incorporados oportunamente.
            .row(titulo="Estado del registro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite confirmar la condición actual de la inscripción. El certificado debe consultarse cuando se realicen trámites o se requiera comprobar la información tributaria vigente.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img6.png", alt="" style="width: 350px").m-auto
      p Cuando se modifican los elementos de identificación, ubicación o clasificación, la actualización debe realizarse, por regla general, dentro del mes siguiente al hecho que genera el cambio. La inscripción tiene vigencia indefinida, no requiere renovación periódica y los trámites de inscripción y actualización son gratuitos.
      p.mb-5 Un cambio en la organización permite aplicar la revisión del RUT y diferenciarla de la asignación del NIT:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-2(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa agropecuaria elige un nuevo representante legal, traslada su sede administrativa y comienza a prestar un servicio adicional de almacenamiento de productos. Aunque conserva el mismo NIT, debe revisar el RUT porque cambiaron la representación, la ubicación y las actividades desarrolladas.
            p La administración reúne el acta de elección, el certificado actualizado, los datos de contacto y la información de la nueva actividad. Después realiza el trámite correspondiente y conserva el certificado actualizado en el expediente tributario. Esta revisión evita que las comunicaciones oficiales lleguen a una dirección anterior o que las operaciones desarrolladas no coincidan con la clasificación registrada.
            p La siguiente tabla muestra el procedimiento general que puede seguir una organización solidaria para verificar la consistencia de su información tributaria.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 15.
              span Ruta para revisar y actualizar el RUT
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Etapa
                    th.ajuste-border-tabla.texto-left Acción requerida
                    th.ajuste-border-tabla.texto-left Documento o fuente de consulta
                    th.texto-left Resultado esperado
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Obtener el certificado
                    td.ajuste-border-tabla.texto-left Consultar la versión vigente del RUT de la organización.
                    td.ajuste-border-tabla.texto-left Certificado descargado de los servicios de la DIAN.
                    td.texto-left Información registrada disponible para revisión.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Verificar la identificación
                    td.ajuste-border-tabla.texto-left Comparar razón social, NIT y naturaleza jurídica.
                    td.ajuste-border-tabla.texto-left Estatutos y certificado de existencia y representación legal.
                    td.texto-left Datos coincidentes con la situación jurídica.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Revisar la ubicación
                    td.ajuste-border-tabla.texto-left Confirmar dirección, municipio, correo y teléfono.
                    td.ajuste-border-tabla.texto-left Contratos, recibos, registro institucional y datos de contacto.
                    td.texto-left Canales de comunicación actualizados.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Comparar actividades
                    td.ajuste-border-tabla.texto-left Analizar si las actividades registradas corresponden con las operaciones reales.
                    td.ajuste-border-tabla.texto-left Objeto social, contratos, facturación e informes de gestión.
                    td.texto-left Actividades económicas correctamente clasificadas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Examinar responsabilidades
                    td.ajuste-border-tabla.texto-left Identificar las obligaciones incluidas en el registro.
                    td.ajuste-border-tabla.texto-left RUT, normativa tributaria y análisis de las operaciones.
                    td.texto-left Responsabilidades reconocidas y verificadas.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Revisar representantes
                    td.ajuste-border-tabla.texto-left Confirmar los datos del representante legal, contador y revisor fiscal cuando aplique.
                    td.ajuste-border-tabla.texto-left Actas, nombramientos y documentos de identificación.
                    td.texto-left Personas responsables correctamente registradas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Identificar cambios
                    td.ajuste-border-tabla.texto-left Determinar qué información fue modificada y la fecha del hecho.
                    td.ajuste-border-tabla.texto-left Actas, contratos, reformas o novedades administrativas.
                    td.texto-left Necesidad de actualización establecida.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Realizar el trámite
                    td.ajuste-border-tabla.texto-left Presentar la actualización mediante los servicios y procedimientos habilitados.
                    td.ajuste-border-tabla.texto-left Documentos exigidos según el tipo de modificación.
                    td.texto-left Solicitud formalizada.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Descargar el registro actualizado
                    td.ajuste-border-tabla.texto-left Obtener el certificado posterior al trámite.
                    td.ajuste-border-tabla.texto-left Servicio electrónico de la DIAN.
                    td.texto-left RUT actualizado y disponible.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Comunicar y archivar
                    td.ajuste-border-tabla.texto-left Informar a contabilidad, tesorería y demás áreas interesadas.
                    td.ajuste-border-tabla.texto-left Certificado y constancia del procedimiento.
                    td.texto-left Información tributaria incorporada en los procesos internos.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Programar revisión
                    td.ajuste-border-tabla.texto-left Establecer una verificación periódica y ante cada cambio institucional.
                    td.ajuste-border-tabla.texto-left Calendario tributario y lista de control.
                    td.texto-left Prevención de información desactualizada.
            p.mb-0 En este ejemplo, el NIT no cambia por la elección del nuevo representante legal o el traslado de la sede, debido a que la organización continúa siendo la misma entidad. Lo que se modifica es la información contenida en el RUT, la cual debe mantenerse coherente con los documentos institucionales y las actividades efectivamente realizadas.
      p.mb-0 La revisión y actualización del RUT permite mantener identificada a la organización, sus actividades y responsabilidades registradas, facilitando la planeación tributaria, la facturación, las declaraciones y el cumplimiento de sus deberes fiscales.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Régimen tributario y responsabilidades según el tipo de organización
      p El régimen tributario de una organización solidaria depende de su naturaleza jurídica y de las operaciones que desarrolla. Por ello, antes de determinar responsabilidades específicas, debe identificarse si la entidad pertenece al Régimen Tributario Especial, es no contribuyente declarante o se encuentra en el régimen ordinario, según las condiciones legales aplicables. 
      p.mb-5 El tratamiento frente al impuesto sobre la renta presenta diferencias según la naturaleza jurídica de cada organización:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Cooperativa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cooperativa
              p.mb-0 Pertenece al Régimen Tributario Especial y presenta la declaración del impuesto sobre la renta conforme a este régimen. Debe efectuar la actualización anual del registro web y revisar las demás responsabilidades derivadas de sus operaciones.
        .py-3.py-md-4(titulo="Asociaciones, uniones y organismos cooperativos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Asociaciones, uniones y organismos cooperativos
              p.mb-0 Las asociaciones de cooperativas, uniones, ligas centrales, organismos de grado superior y confederaciones previstas en el artículo 19-4 pertenecen al Régimen Tributario Especial cuando reúnen las condiciones legales correspondientes. Deben presentar renta y cumplir la actualización anual del registro web.
        .py-3.py-md-4(titulo="Asociación mutualista")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Asociación mutualista
              p.mb-0 Pertenece al Régimen Tributario Especial conforme al artículo 19-4 del Estatuto Tributario. Presenta la declaración de renta bajo este tratamiento y debe actualizar anualmente la información del registro web.
        .py-3.py-md-4(titulo="Fondo de empleados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fondo de empleados
              p.mb-0 Es una entidad no contribuyente del impuesto sobre la renta de acuerdo con el artículo 23 del Estatuto Tributario, pero se encuentra obligada a presentar declaración de ingresos y patrimonio. Otras responsabilidades dependerán de sus operaciones.
        .py-3.py-md-4(titulo="Asociación, corporación o fundación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Asociación, corporación o fundación
              p.mb-0 Por regla general, es contribuyente del régimen ordinario. Puede solicitar calificación en el Régimen Tributario Especial cuando cumpla las condiciones legales relacionadas con constitución, actividad meritoria, acceso de la comunidad y destinación de excedentes.
        .py-3.py-md-4(titulo="Operaciones que generan responsabilidades adicionales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Operaciones que generan responsabilidades adicionales
              p.mb-0 La clasificación frente a renta no impide que una organización deba atender, cuando corresponda, facturación electrónica, retenciones, IVA, información exógena e impuestos territoriales originados en sus actividades.
      p Las cooperativas y demás entidades del artículo 19-4 pertenecen al Régimen Tributario Especial y aplican una tarifa del 20 % sobre el beneficio neto o excedente. Los fondos de empleados son no contribuyentes declarantes, y las entidades del RTE deben actualizar anualmente el registro web.
      p.mb-5 El siguiente caso permite identificar las responsabilidades a partir de la naturaleza de la entidad y de las operaciones que realiza:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-2(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una asociación mutualista que presta servicios de previsión y apoyo a sus asociados inicia la revisión de sus responsabilidades tributarias. Aunque su naturaleza la ubica en el Régimen Tributario Especial, la administración no puede concluir que está exenta de todos los deberes fiscales. Debe comprobar que el RUT incluya la responsabilidad correspondiente, presentar la declaración de renta, realizar la actualización anual del registro web y conservar la información que respalda el beneficio neto o excedente.
            p Durante el mismo periodo, la asociación contrata servicios profesionales, adquiere equipos y realiza pagos a diferentes proveedores. El área contable revisa cuáles pagos se encuentran sometidos a retención, si las operaciones desarrolladas generan responsabilidad frente al IVA y si la entidad cumple las condiciones establecidas para presentar información exógena. También consulta las normas municipales para determinar sus obligaciones relacionadas con el impuesto de industria y comercio.
            p La siguiente tabla presenta el procedimiento que puede seguir una organización para identificar las obligaciones derivadas de su naturaleza y de las operaciones realizadas.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 16.
              span Ruta para determinar las responsabilidades tributarias
            .tabla-a(data-aos="zoom-in").mb-0
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Etapa
                    th.ajuste-border-tabla.texto-left Pregunta de revisión
                    th.ajuste-border-tabla.texto-left Acción requerida
                    th.texto-left Evidencia esperada
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Identificar la naturaleza jurídica
                    td.ajuste-border-tabla.texto-left ¿Es cooperativa, asociación mutualista, fondo de empleados u otra entidad sin ánimo de lucro?
                    td.ajuste-border-tabla.texto-left Revisar estatutos, certificado de existencia y norma de constitución.
                    td.texto-left Tipo de organización confirmado.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Determinar el régimen de renta
                    td.ajuste-border-tabla.texto-left ¿Pertenece al RTE, es no contribuyente o está en el régimen ordinario?
                    td.ajuste-border-tabla.texto-left Consultar el Estatuto Tributario y la clasificación del RUT.
                    td.texto-left Tratamiento tributario identificado.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Definir la declaración aplicable
                    td.ajuste-border-tabla.texto-left ¿Debe presentar declaración de renta o de ingresos y patrimonio?
                    td.ajuste-border-tabla.texto-left Verificar la obligación correspondiente al tipo de entidad.
                    td.texto-left Declaración incluida en el calendario tributario.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Revisar el registro web
                    td.ajuste-border-tabla.texto-left ¿La organización pertenece al Régimen Tributario Especial?
                    td.ajuste-border-tabla.texto-left Programar la actualización anual dentro del plazo aplicable.
                    td.texto-left Solicitud presentada y constancia conservada.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Analizar las actividades
                    td.ajuste-border-tabla.texto-left ¿Realiza ventas, presta servicios o desarrolla operaciones gravadas?
                    td.ajuste-border-tabla.texto-left Clasificar las operaciones y revisar su tratamiento frente al IVA.
                    td.texto-left Matriz de operaciones gravadas, excluidas o exentas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Examinar los pagos
                    td.ajuste-border-tabla.texto-left ¿Realiza pagos o abonos en cuenta sometidos a retención?
                    td.ajuste-border-tabla.texto-left Identificar conceptos, bases y tarifas aplicables.
                    td.texto-left Retenciones calculadas y registradas.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Revisar la facturación
                    td.ajuste-border-tabla.texto-left ¿Debe expedir factura electrónica o documento equivalente?
                    td.ajuste-border-tabla.texto-left Comparar las operaciones con las reglas del sistema de facturación.
                    td.texto-left Responsabilidad y procedimiento definidos.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Verificar información exógena
                    td.ajuste-border-tabla.texto-left ¿Se encuentra dentro de los obligados establecidos por la DIAN?
                    td.ajuste-border-tabla.texto-left Revisar la resolución aplicable al año informado.
                    td.texto-left Formatos, responsables y fechas programados.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Consultar obligaciones territoriales
                    td.ajuste-border-tabla.texto-left ¿Desarrolla actividades industriales, comerciales o de servicios en un municipio?
                    td.ajuste-border-tabla.texto-left Revisar el estatuto tributario territorial.
                    td.texto-left Responsabilidad frente al ICA determinada.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Actualizar el RUT
                    td.ajuste-border-tabla.texto-left ¿Las responsabilidades registradas coinciden con las obligaciones identificadas?
                    td.ajuste-border-tabla.texto-left Incorporar los cambios mediante el trámite correspondiente.
                    td.texto-left RUT actualizado.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Elaborar el calendario
                    td.ajuste-border-tabla.texto-left ¿Cuándo deben presentarse y pagarse las obligaciones?
                    td.ajuste-border-tabla.texto-left Registrar plazos, responsables y recursos necesarios.
                    td.texto-left Calendario tributario interno.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Realizar seguimiento
                    td.ajuste-border-tabla.texto-left ¿Las declaraciones, pagos e informes fueron presentados oportunamente?
                    td.ajuste-border-tabla.texto-left Aplicar controles y conservar las constancias.
                    td.texto-left Expediente tributario completo.
      p.mb-0 Una organización solidaria debe identificar su naturaleza jurídica, régimen y operaciones para determinar las obligaciones nacionales y territoriales aplicables, mantener actualizado el RUT y programar los recursos necesarios para su cumplimiento.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Facturación electrónica e información exógena
      p La facturación electrónica respalda operaciones mediante documentos validados por la DIAN, mientras que la información exógena reporta datos sobre operaciones con terceros. El sistema incluye factura electrónica de venta, documentos equivalentes y documentos soporte de nómina y de adquisiciones a no obligados a facturar.
      p.mb-5 Los principales documentos relacionados con la facturación cumplen finalidades y controles específicos según la operación realizada:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Factura electrónica de venta
                  p.mb-0 Respalda ventas de bienes o prestaciones de servicios sujetas al deber de facturar. Deben comprobarse identificación, fecha, concepto, valores, impuestos y validación realizada por la DIAN.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nota crédito electrónica
                  p.mb-0 Permite disminuir o corregir valores de una factura por devoluciones, descuentos, anulaciones u otros ajustes autorizados. Debe relacionarse con la factura original y conservar la justificación correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nota débito electrónica
                  p.mb-0 Permite incrementar o ajustar valores incluidos en una factura anterior cuando existen mayores valores debidamente sustentados. Debe identificar la factura relacionada y la causa del ajuste.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Documento equivalente electrónico
                  p.mb-0 Respalda las operaciones para las cuales la normativa permite utilizar un documento equivalente. Deben comprobarse el tipo aplicable, los requisitos técnicos y las condiciones establecidas por la DIAN.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Documento soporte de nómina electrónica
                  p.mb-0 Respalda fiscalmente pagos o abonos relacionados con nómina cuando resulte aplicable. Debe conciliarse con salarios, prestaciones, aportes, novedades laborales y registros contables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Documento soporte en adquisiciones a no obligados a facturar
                  p.mb-0 Respalda compras o servicios adquiridos a proveedores no obligados a expedir factura cuando se requiere soportar fiscalmente la operación. Utiliza numeración autorizada y debe transmitirse conforme a las reglas aplicables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Numeración de facturación
                  p.mb-0 Controla los consecutivos autorizados para expedir documentos. Antes de iniciar operaciones y cuando se agota o vence un rango, deben revisarse autorización, prefijo, numeración y vigencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El cumplimiento electrónico también exige organizar los reportes a terceros, las firmas utilizadas y la conservación de los archivos:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img20.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Información exógena").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reporta datos de operaciones con terceros cuando la organización cumple las condiciones establecidas para el año gravable. Deben identificarse formatos, conceptos, cuantías, terceros, especificaciones y plazos correspondientes.
            .row(titulo="Firma electrónica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite suscribir declaraciones, reportes y trámites electrónicos cuando corresponde. La organización debe controlar su vigencia, los accesos autorizados y la adecuada custodia de las credenciales.
            .row(titulo="Archivo electrónico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conserva documentos generados, recibidos y validados durante los periodos aplicables. Los archivos deben permanecer íntegros, legibles, consultables, respaldados y vinculados con las operaciones que sustentan.
      p La regulación de información exógena se publica por año gravable y puede modificarse; para 2026, la DIAN reúne en su portal las resoluciones y anexos aplicables. 
      p.mb-5 El caso integra la facturación, los documentos soporte y la preparación de información exógena dentro de una misma gestión documental:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-2(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa de transporte escolar celebra un contrato anual por $180.000.000 para movilizar estudiantes de una institución educativa. El servicio se cobra mensualmente, por lo que la organización expide una factura electrónica por $15.000.000 en cada periodo, verifica su validación y relaciona el documento con el contrato, el informe de recorridos y la cuenta por cobrar correspondiente.
            p La cooperativa también tiene trabajadores vinculados, por lo que revisa la generación del documento soporte de nómina electrónica. Durante el año contrata por $1.200.000 la reparación de un vehículo con una persona que acredita no estar obligada a expedir factura. Cuando resulta procedente, la cooperativa genera el documento soporte en adquisiciones a sujetos no obligados a facturar para respaldar la operación. Este documento debe incluir, entre otros requisitos, la identificación de las partes, la fecha, la descripción del servicio, el valor, la numeración autorizada y el código único correspondiente. (DIAN).
            p Al preparar la información exógena, el área contable consolida los ingresos facturados, los pagos realizados a proveedores, las retenciones practicadas, las obligaciones financieras y los demás conceptos solicitados. Antes de transmitir el reporte, compara los datos con la contabilidad, las declaraciones tributarias y la información de cada tercero. La organización consulta la resolución correspondiente al año gravable para determinar si está obligada, cuáles formatos debe presentar y cuál es el plazo asignado según su NIT.
            p Esta tabla específica las actividades necesarias para organizar la generación de documentos electrónicos y la preparación de reportes tributarios.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 17.
              span Ruta para gestionar la facturación y la información exógena
            .tabla-a(data-aos="zoom-in").mb-0
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Etapa
                    th.ajuste-border-tabla.texto-left Acción requerida
                    th.ajuste-border-tabla.texto-left Información que debe verificarse
                    th.texto-left Evidencia esperada
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Revisar el RUT
                    td.ajuste-border-tabla.texto-left Confirmar las responsabilidades registradas ante la DIAN.
                    td.ajuste-border-tabla.texto-left Actividades económicas, obligación de facturar y demás responsabilidades.
                    td.texto-left RUT actualizado.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Determinar la obligación
                    td.ajuste-border-tabla.texto-left Analizar si la organización debe expedir documentos electrónicos.
                    td.ajuste-border-tabla.texto-left Naturaleza de las operaciones, bienes vendidos y servicios prestados.
                    td.texto-left Matriz de responsabilidades.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Verificar la habilitación
                    td.ajuste-border-tabla.texto-left Confirmar que se cumplieron los procedimientos técnicos para facturar.
                    td.ajuste-border-tabla.texto-left #[i Software], proveedor tecnológico o servicio gratuito de la DIAN.
                    td.texto-left Estado de habilitación.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Revisar la numeración
                    td.ajuste-border-tabla.texto-left Comprobar los rangos autorizados y su vigencia.
                    td.ajuste-border-tabla.texto-left Prefijo, numeración inicial y final y fecha de vencimiento.
                    td.texto-left Resolución o autorización vigente.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Generar el documento
                    td.ajuste-border-tabla.texto-left Incorporar los datos de la operación.
                    td.ajuste-border-tabla.texto-left Tercero, concepto, cantidad, valor, impuestos y forma de pago.
                    td.texto-left Factura o documento electrónico generado.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Transmitir y validar
                    td.ajuste-border-tabla.texto-left Enviar el documento mediante el sistema correspondiente.
                    td.ajuste-border-tabla.texto-left Respuesta de aceptación o rechazo de la DIAN.
                    td.texto-left Documento validado.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Entregar al adquirente
                    td.ajuste-border-tabla.texto-left Remitir la representación o archivo al comprador.
                    td.ajuste-border-tabla.texto-left Correo electrónico o medio acordado.
                    td.texto-left Constancia de entrega.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Revisar documentos recibidos
                    td.ajuste-border-tabla.texto-left Confirmar que las compras estén debidamente respaldadas.
                    td.ajuste-border-tabla.texto-left Identificación, valores, impuestos y validación.
                    td.texto-left Facturas recibidas y verificadas.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Generar documentos complementarios
                    td.ajuste-border-tabla.texto-left Preparar nómina electrónica o documento soporte cuando corresponda.
                    td.ajuste-border-tabla.texto-left Pagos laborales y adquisiciones a no obligados a facturar.
                    td.texto-left Documentos transmitidos y validados.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Consolidar información de terceros
                    td.ajuste-border-tabla.texto-left Organizar ingresos, pagos, retenciones, saldos y demás operaciones.
                    td.ajuste-border-tabla.texto-left Nombres, identificaciones, conceptos y cuantías.
                    td.texto-left Base de datos tributaria depurada.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Identificar la obligación de informar
                    td.ajuste-border-tabla.texto-left Consultar los criterios establecidos para el año gravable.
                    td.ajuste-border-tabla.texto-left Topes, condición jurídica, calidad de agente retenedor y demás requisitos.
                    td.texto-left Lista de formatos aplicables.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Conciliar la información
                    td.ajuste-border-tabla.texto-left Comparar los datos con contabilidad y declaraciones.
                    td.ajuste-border-tabla.texto-left Ingresos, costos, impuestos, retenciones y saldos.
                    td.texto-left Informe de conciliación.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Validar y transmitir
                    td.ajuste-border-tabla.texto-left Revisar archivos y presentar la información dentro del plazo.
                    td.ajuste-border-tabla.texto-left Estructura técnica, conceptos y datos de terceros.
                    td.texto-left Constancia de presentación.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Conservar el expediente
                    td.ajuste-border-tabla.texto-left Archivar documentos, formatos, validaciones y soportes.
                    td.ajuste-border-tabla.texto-left Integridad, acceso, seguridad y trazabilidad.
                    td.texto-left Expediente electrónico completo.
      p.mb-0 La facturación electrónica y la información exógena requieren coordinación entre las áreas responsables para generar documentos correctos, conciliar operaciones y preparar oportunamente la información que debe reportarse a la autoridad tributaria.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 IVA, ICA y renta
      p El IVA, el ICA y el impuesto sobre la renta tienen naturaleza, bases y administración diferentes, por lo que deben analizarse según las operaciones, el régimen y la jurisdicción aplicable. El IVA tiene una tarifa general del 19 %, mientras que el ICA es territorial y sus tarifas dependen del municipio o distrito.
      p.mb-5 Las diferencias entre los tres tributos permiten identificar la base, la autoridad competente y los controles que requiere cada obligación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 18.
                span Diferencias entre IVA, ICA y renta
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.ajuste-border-tabla.texto-left IVA
                      th.ajuste-border-tabla.texto-left ICA
                      th.texto-left Impuesto sobre la renta
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nivel de administración
                      td.ajuste-border-tabla.texto-left Nacional, administrado por la DIAN.
                      td.ajuste-border-tabla.texto-left Territorial, administrado por municipios y distritos.
                      td.texto-left Nacional, administrado por la DIAN.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Situación que origina la revisión
                      td.ajuste-border-tabla.texto-left Venta de bienes, prestación de servicios, importaciones y demás operaciones gravadas.
                      td.ajuste-border-tabla.texto-left Realización de actividades industriales, comerciales o de servicios en una jurisdicción municipal.
                      td.texto-left Obtención de ingresos y determinación del resultado fiscal del periodo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Base de cálculo general
                      td.ajuste-border-tabla.texto-left Valor de la operación gravada.
                      td.ajuste-border-tabla.texto-left Ingresos derivados de la actividad gravada, después de aplicar las depuraciones autorizadas.
                      td.texto-left Beneficio neto, excedente o renta determinada según el régimen aplicable.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tarifa
                      td.ajuste-border-tabla.texto-left Depende del bien o servicio; la tarifa general es del 19 %.
                      td.ajuste-border-tabla.texto-left La establece cada municipio según la actividad desarrollada.
                      td.texto-left Para las cooperativas comprendidas en el artículo 19-4, la tarifa especial es del 20 %.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tratamiento financiero
                      td.ajuste-border-tabla.texto-left El IVA cobrado al comprador no constituye un ingreso propio y debe controlarse como una obligación.
                      td.ajuste-border-tabla.texto-left Representa una obligación tributaria territorial que debe incorporarse al presupuesto.
                      td.texto-left Representa una obligación anual determinada según la naturaleza y el resultado fiscal de la entidad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información requerida
                      td.ajuste-border-tabla.texto-left Facturas expedidas y recibidas, notas crédito, notas débito e impuestos descontables.
                      td.ajuste-border-tabla.texto-left Ingresos por municipio, actividad económica, tarifas, retenciones y declaraciones territoriales.
                      td.texto-left Estados financieros, conciliación fiscal, ingresos, egresos y determinación del excedente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo frecuente
                      td.ajuste-border-tabla.texto-left Tratar el IVA recaudado como ingreso disponible o descontar valores sin soporte.
                      td.ajuste-border-tabla.texto-left Aplicar una tarifa de otro municipio o declarar todos los ingresos en una sola jurisdicción.
                      td.texto-left Aplicar un régimen o una tarifa que no corresponde a la naturaleza jurídica de la entidad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control recomendado
                      td.ajuste-border-tabla.texto-left Conciliar facturación, contabilidad y declaración del periodo.
                      td.ajuste-border-tabla.texto-left Identificar el lugar donde se realiza cada actividad y consultar el estatuto municipal.
                      td.texto-left Conciliar el resultado contable con las reglas tributarias aplicables.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Documento de consulta
                      td.ajuste-border-tabla.texto-left RUT, facturas electrónicas, Estatuto Tributario y declaración de IVA.
                      td.ajuste-border-tabla.texto-left RUT, registros de ingresos, estatuto tributario municipal y declaración de ICA.
                      td.texto-left RUT, estados financieros, Estatuto Tributario y declaración de renta.
          p Para las entidades comprendidas en el artículo 19-4 del Estatuto Tributario, la tarifa especial sobre el beneficio neto o excedente es del #[b 20 %].
          p.mb-5 El siguiente caso permite calcular separadamente los tres tributos sin confundir sus bases, tarifas ni controles:
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-10
              .caja-2(data-aos="zoom-in")
                h5 Ejemplo aplicado
                p Una cooperativa dedicada a fabricar mobiliario para oficinas y establecimientos comerciales vende escritorios, estanterías y archivadores. Durante la planeación fiscal revisa sus operaciones y confirma que los productos comercializados no se encuentran clasificados como excluidos o exentos del IVA. En el periodo analizado registra ventas antes de IVA por $80.000.000 y cuenta con impuestos descontables legalmente autorizados por $7.600.000.
                p La planta de producción se encuentra ubicada en un municipio que, para efectos exclusivos del ejemplo, aplica una tarifa de ICA de 6 × 1.000 a la actividad industrial. Al cierre del ejercicio, la cooperativa determina un beneficio neto o excedente de $24.000.000. Estas cifras permiten estimar por separado el IVA, el ICA y el impuesto sobre la renta, sin confundir su naturaleza ni sus bases de cálculo.
                p La siguiente tabla presenta la liquidación simplificada de las obligaciones tributarias de la cooperativa fabricante de mobiliario.
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 19.
                  span Cálculo didáctico de IVA, ICA y renta
                .tabla-a(data-aos="zoom-in").mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Concepto
                        th.ajuste-border-tabla.texto-left Base de cálculo
                        th.ajuste-border-tabla.texto-left Operación
                        th.ajuste-border-tabla.texto-left Valor estimado
                        th.texto-left Control requerido
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Ventas gravadas antes de IVA
                        td.ajuste-border-tabla.texto-left $80.000.000
                        td.ajuste-border-tabla.texto-left Valor de las ventas
                        td.ajuste-border-tabla.texto-left $80.000.000
                        td.texto-left Conciliar con facturas electrónicas y contabilidad.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold IVA generado
                        td.ajuste-border-tabla.texto-left $80.000.000
                        td.ajuste-border-tabla.texto-left $80.000.000 × 19 %
                        td.ajuste-border-tabla.texto-left $15.200.000
                        td.texto-left Verificar tarifa y documentos expedidos.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold IVA descontable
                        td.ajuste-border-tabla.texto-left Compras y servicios relacionados con operaciones gravadas
                        td.ajuste-border-tabla.texto-left Valor soportado y legalmente autorizado
                        td.ajuste-border-tabla.texto-left $7.600.000
                        td.texto-left Revisar facturas, relación con la actividad y requisitos tributarios.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Saldo estimado de IVA
                        td.ajuste-border-tabla.texto-left $15.200.000 − $7.600.000
                        td.ajuste-border-tabla.texto-left IVA generado menos IVA descontable
                        td.ajuste-border-tabla.texto-left $7.600.000
                        td.texto-left Conciliar con notas, retenciones y ajustes del periodo.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Base gravable de ICA
                        td.ajuste-border-tabla.texto-left $80.000.000
                        td.ajuste-border-tabla.texto-left Ingresos gravados en el municipio
                        td.ajuste-border-tabla.texto-left $80.000.000
                        td.texto-left Aplicar las exclusiones y depuraciones autorizadas localmente.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold ICA proyectado
                        td.ajuste-border-tabla.texto-left $80.000.000
                        td.ajuste-border-tabla.texto-left $80.000.000 × 6 ÷ 1.000
                        td.ajuste-border-tabla.texto-left $480.000
                        td.texto-left Confirmar la tarifa en el estatuto tributario municipal.
                      tr
                        td.ajuste-border-tabla.texto-left.text-weight-bold Beneficio neto o excedente
                        td.ajuste-border-tabla.texto-left $24.000.000
                        td.ajuste-border-tabla.texto-left Resultado determinado al cierre
                        td.ajuste-border-tabla.texto-left $24.000.000
                        td.texto-left Conciliar información contable y tributaria.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left.text-weight-bold Impuesto sobre la renta
                        td.ajuste-border-tabla.texto-left $24.000.000
                        td.ajuste-border-tabla.texto-left $24.000.000 × 20 %
                        td.ajuste-border-tabla.texto-left $4.800.000
                        td.texto-left Verificar el régimen, la base y los ajustes aplicables.
                p El IVA generado se calcula de la siguiente manera:
                .row.justify-content-center.mb-3(data-aos="zoom-in")
                  .col-xl-10
                    .caja-3
                      h5.mb-0.text-center IVA generado = ventas gravadas × tarifa
                h5.text-center $80.000.000 × 19 % = $15.200.000
                p El saldo estimado se obtiene al restar los impuestos descontables legalmente autorizados:
                .row.justify-content-center.mb-3(data-aos="zoom-in")
                  .col-xl-10
                    .caja-3
                      h5.mb-0.text-center Saldo estimado de IVA = IVA generado − IVA descontable
                h5.text-center $15.200.000 − $7.600.000 = $7.600.000
                p Este valor no representa un gasto por la totalidad del IVA facturado. Corresponde a una obligación que debe controlarse separadamente, teniendo en cuenta los impuestos descontables, retenciones, devoluciones, notas y demás ajustes aplicables.
                p Para calcular el ICA se utiliza la tarifa hipotética definida para el ejercicio:
                .row.justify-content-center.mb-3(data-aos="zoom-in")
                  .col-xl-10
                    .caja-3
                      h5.mb-0.text-center ICA proyectado = base gravable × tarifa
                h5.text-center $80.000.000 × 6 ÷ 1.000 = $480.000
                p La tarifa empleada no debe aplicarse a otra organización sin consultar previamente el estatuto tributario del municipio donde se realiza la actividad. Cuando una entidad desarrolla operaciones en diferentes municipios, debe analizar la territorialidad de los ingresos y mantener registros que permitan determinar los valores correspondientes a cada jurisdicción. (Decreto 3070, 1983).
                p El impuesto sobre la renta se estima así:
                .row.justify-content-center.mb-3(data-aos="zoom-in")
                  .col-xl-10
                    .caja-3
                      h5.mb-0.text-center Impuesto sobre la renta = beneficio neto o excedente × tarifa especial
                h5.text-center $24.000.000 × 20 % = $4.800.000
                p.mb-0 La determinación definitiva debe considerar las reglas aplicables al cálculo del beneficio neto o excedente, la información contable, los egresos procedentes y los demás ajustes tributarios correspondientes.
          p.mb-0 Diferenciar el IVA, el ICA y el impuesto sobre la renta permite aplicar correctamente sus bases, tarifas y procedimientos, e incorporar estas obligaciones en la planeación tributaria según las operaciones, la jurisdicción y el régimen de la organización.
          Separador
          #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.5 Planeación tributaria y calendario de obligaciones
      p La planeación tributaria organiza anticipadamente las responsabilidades identificadas y establece cuándo deben prepararse, revisarse, presentarse y pagarse. También relaciona cada obligación con la información necesaria, sus responsables, la disponibilidad de recursos y las evidencias de cumplimiento. El calendario interno debe actualizarse con base en los vencimientos oficiales nacionales y territoriales.
      p.mb-5 La primera parte de la planeación permite establecer qué obligación debe atenderse, a qué periodo corresponde y qué recursos requiere:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img21.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Identificación de la obligación
                p.mb-0.text-center Registra el nombre del impuesto, declaración, reporte o trámite. Permite reconocer los deberes aplicables y debe contrastarse con el RUT y las operaciones realizadas.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img22.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Periodicidad
                p.mb-0.text-center Indica si la obligación es mensual, bimestral, cuatrimestral, anual o eventual, según corresponda. Debe comprobarse la frecuencia asignada por la normativa aplicable.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img23.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Periodo informado
                p.mb-0.text-center Precisa el mes, bimestre, cuatrimestre o año gravable al cual corresponde la información, evitando presentar obligaciones asociadas con periodos equivocados.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img24.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Fecha oficial
                p.mb-0.text-center Corresponde al plazo establecido por la DIAN o la autoridad territorial. Debe verificarse según la obligación y las condiciones aplicables al contribuyente.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img25.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Fecha interna
                p.mb-0.text-center Es el plazo establecido por la organización antes del vencimiento oficial para recopilar, revisar, corregir y autorizar la información con suficiente anticipación.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img26.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Base de cálculo
                p.mb-0.text-center Identifica los ingresos, pagos, retenciones, operaciones gravadas o resultados fiscales utilizados para determinar la obligación. Debe conciliarse con contabilidad y los documentos electrónicos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img27.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Recursos para el pago
                p.mb-0.text-center Comprende los valores recaudados, retenidos o provisionados que deben mantenerse disponibles para atender oportunamente la obligación tributaria.
      p.mb-5 La segunda parte asigna funciones y establece cómo se documentará y controlará cada cumplimiento:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Responsable de preparación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reporta datos de operaciones con terceros cuando la organización cumple las condiciones establecidas para el año gravable. Deben identificarse formatos, conceptos, cuantías, terceros, especificaciones y plazos correspondientes.
            .row(titulo="Responsable de revisión").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El contador, revisor fiscal, representante legal u otra instancia aplicable verifica cálculos, soportes y consistencia antes de la presentación.
            .row(titulo="Firma y presentación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se determinan las personas, firmas electrónicas y medios requeridos para formalizar la obligación, comprobando previamente accesos y mecanismos electrónicos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img28.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img29.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Evidencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se conservan declaraciones, recibos, formularios, archivos y constancias que permitan demostrar el cumplimiento, organizados por obligación y periodo.
            .row(titulo="Seguimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El calendario registra el estado de preparación, revisión, presentación y pago para identificar las obligaciones cumplidas y aquellas que permanecen pendientes.
            .row(titulo="Plan de contingencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define cómo actuar ante errores, fallas tecnológicas o ausencia de un responsable, incluyendo suplencias y copias de seguridad que reduzcan el riesgo de incumplimiento.
      p Las fechas oficiales no deben tratarse como permanentes. La DIAN mantiene publicado el calendario tributario de 2026 y comunica modificaciones cuando se producen ajustes en los vencimientos.
      p La planeación tributaria permite organizar obligaciones, responsables, recursos y fechas de cumplimiento, reduciendo el riesgo de omisiones y facilitando la atención oportuna de los deberes tributarios.
      p.mb-5 Para aplicar la planeación tributaria mediante responsables, fechas, recursos y controles, consulte el documento complementario con el desarrollo del caso:
      .caja-5.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 4. Caso aplicado de planeación tributaria y calendario de obligaciones
            p.mb-0 Profundice en la aplicación de la planeación tributaria mediante un caso que integra obligaciones, responsables, fechas, recursos, controles y evidencias para organizar oportunamente su cumplimiento.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_04_Planeacion_Tributaria_Obligaciones.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema4',
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
