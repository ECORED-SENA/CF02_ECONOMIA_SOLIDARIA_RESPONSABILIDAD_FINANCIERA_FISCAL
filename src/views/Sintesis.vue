<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual sintetiza el componente Presupuesto y responsabilidad fiscal solidaria mediante cinco temas articulados. Los fundamentos del presupuesto comprenden su concepto, finalidad, elementos, tipos, etapas, políticas, controles y relación con la planeación y la finalidad social. La organización y recolección de información presupuestal requiere reconocer áreas y niveles de autoridad, identificar necesidades, definir canales y responsables, utilizar instrumentos de recolección y validar oportunamente los datos. La formulación presupuestal integra el plan de trabajo, la proyección de recursos, costos, gastos e inversiones, la consolidación y aprobación, y posteriormente la ejecución, el seguimiento, los ajustes y las acciones de mejora. Las responsabilidades tributarias consideran el RUT y el NIT, el régimen aplicable, la facturación electrónica, la información exógena, el IVA, el ICA, la renta y la planeación de obligaciones. Finalmente, las sanciones y la prevención del incumplimiento tributario incluyen el Estatuto Tributario, la UVT y las principales sanciones, los incumplimientos y correcciones, la prevención de la evasión tributaria y los controles para fortalecer el cumplimiento fiscal.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
