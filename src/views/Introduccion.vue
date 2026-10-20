<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p La planeación presupuestal permite anticipar las necesidades de una organización solidaria, distribuir los recursos disponibles y establecer prioridades de acuerdo con sus objetivos económicos y sociales. Para que este proceso sea útil, se requiere identificar las áreas de la entidad, recopilar información confiable, proyectar ingresos, costos, gastos e inversiones, y definir responsables para la ejecución y el seguimiento. De esta manera, el presupuesto se convierte en una herramienta para orientar las decisiones y mantener el equilibrio entre la sostenibilidad financiera y el beneficio colectivo.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.png', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 La formulación presupuestal también exige comparar lo planificado con lo ejecutado, analizar las diferencias y adoptar acciones oportunas. Un presupuesto no debe entenderse como una cifra fija, sino como un instrumento de gestión que se revisa a partir de los resultados obtenidos, las necesidades de los asociados y los cambios en el entorno de la organización. Su adecuada preparación facilita la rendición de cuentas, fortalece el control interno y permite que los órganos de administración y vigilancia conozcan cómo se asignan y utilizan los recursos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
      p.mb-0 La gestión tributaria complementa este proceso al requerir que la organización identifique y atienda sus obligaciones tributarias según su naturaleza jurídica, sus actividades y las responsabilidades registradas ante las autoridades competentes. El cumplimiento relacionado con el RUT, la facturación, la información exógena, los impuestos y los plazos de presentación reduce riesgos de sanciones y promueve una gestión transparente. La integración entre presupuesto y planeación tributaria permite prever los recursos necesarios, organizar las obligaciones y fortalecer la sostenibilidad de la organización solidaria.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
