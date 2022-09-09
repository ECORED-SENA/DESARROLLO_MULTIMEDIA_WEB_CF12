<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Elaboración de informes de resultados 
    
    .bloque-texto-a.color-primario.p-3.p-md-3.mb-5(data-aos="flip-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-1.svg', alt='Texto que describa la imagen')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Después de aplicadas las pruebas a los usuarios sobre la capacidad de uso del producto multimedia, se debe realizar la documentación con los resultados obtenidos con el objetivo de llegar a las conclusiones que conducirán a la realización de rediseños o mejoras. Para ello es necesario detallar los siguientes aspectos:     
    
    .bg_grad-07
      h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Objetivo de la prueba

      .row.mb-5
        .col-12.col-md-8.mb-3.mb-md-0
          p.mb-5 Lo primero que se debe incluir en el informe es el propósito que condujo a la aplicación de la evaluación, ya que hay muchos aspectos que se pueden medir en los productos multimedia o aplicativos informáticos en general y se debe especificar a cuál de ellos le apuntó la prueba realizada.
          h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Participante
          p En el informe se describen las características o competencias que deben cumplir los usuarios para la realización de la prueba, ya que estos deben ser seleccionados basados en ellas. Dichas características deben ser similares y el número de participantes que se relacione en el informe no debe pasar de ocho (8), ya que como dice Nielsen citado por Vega (s.f.), entre más usuarios participen más repetición de resultados se obtendrá. Hay pruebas que solo son realizados por usuarios expertos como las que corresponden a la técnica heurística y a la inspección de estándares para las cuales hay que describir el tipo de experto participante (de usabilidad, accesibilidad o escalabilidad) o el estándar de especialidad por ejemplo estándar de contenido u otro. 
        .col-12.col-md-4.d-flex.align-items-center(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
    
    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="flip-right")
        figure
          img(src='@/assets/curso/tema3/t3-3.svg', alt='Texto que describa la imagen')
      .col-12.col-md-8
        h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Descripción del método, la técnica y los instrumentos utilizados
        p La técnica llevada a cabo debe quedar especificada de acuerdo con el método seleccionado (Inspección, indagación o test) al igual que el instrumento que se utilice para la medición. Por ejemplo en la técnica de Recorrido Cognitivo del método de Inspección, el instrumento utilizado fue el Wireframe de baja calidad. Cuando la técnica corresponde a la que realizan los expertos como la heurística y la de inspección de estándares, se deben describir las heurísticas o el tipo de estándar evaluado.
        .cajon.bgr.p-4.mb-3
          p.mb-0 Por ejemplo en la “Aplicación de Comidas Rápidas”  se evaluaron:
        .row
          .col-12.col-md-2.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-4.svg', alt='Texto que describa la imagen')
          .col-12.col-md-10
            p <b>Heurísticas:</b> H1, H2, H3, H7, H12 y H15
            p <b>Estándares:</b>
            ul.lista-ul--color
              li
                i.fas.fa-caret-right.trans_4
                | Equivalentes cortos para imágenes como iconos o botones
              li 
                i.fas.fa-caret-right.trans_4
                | Descripción de los datos que representan la imagen
    
    h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Tareas realizadas por los participantes

    p.mb-5 Las tareas que se asignan a los participantes deben quedar documentadas anexando las preguntas que acompañan la ejecución. Por ejemplo en la técnica de Prestaciones del método <em>Test</em> se asignaron 5 tareas a los usuarios con sus respectivas preguntas:

    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-right")
        .bgr_8.p-3.p-md-5
          ul.lista-ul--color.lista-ul--separador.ps-md-4
            li
              i.fas.fa-check-circle.trans_5
              span <b>TAREA 1:</b> buscar el producto a pedir
                br
                span ¿Fue fácil encontrar el producto que buscaba? (SÍ/NO) por qué (argumente la respuesta)
            li
              i.fas.fa-check-circle.trans_5
              span <b>TAREA 2:</b> Pedir 2 unidades del producto seleccionado y hacer el proceso hasta el momento de pagar
                br
                span ¿Pudo aumentar la cantidad de unidades a pedir? (SÍ/NO) manifieste como lo pudo hacer o porque no lo pudo hacer
            li
              i.fas.fa-check-circle.trans_5
              span <b>TAREA 3:</b> Cancelar el proceso de pedido
                br
                span ¿Pudo cancelar el pedido que estaba realizando? (SÍ/NO) porqué (explicar qué pasó si hubo algún error en la cancelación)
      .col-12.col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/t3-5.svg', alt='Texto que describa la imagen')
    
    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="flip-right")
        figure
          img(src='@/assets/curso/tema3/t3-6.svg', alt='Texto que describa la imagen')
      .col-12.col-md-8
        h4.bgr_4.p-3.text-white(data-aos="fade-down-right") Ejecución de la evaluación
        p.mb-5 En esta sección se describen los resultados obtenidos del método, la técnica y el instrumento utilizado, anexando tabulaciones o gráficas de ser posible cuando la prueba lo amerite. Por ejemplo, en la prueba heurística que se obtienen calificaciones de acuerdo con la severidad de la fallas presentadas en el producto multimedia. No se entra en el análisis sino que se presentan los datos organizados.
        h4.bgr_4.p-3.text-white(data-aos="fade-down-right") Análisis de los resultados
        p Los resultados obtenidos se analizan, determinando las funcionalidades que ocasionan el mayor número de problemas que deben ser rediseñadas y posteriormente desarrolladas por el equipo. Igualmente se deben resaltar el tipo de necesidades que se detectaron no satisfechas de los usuarios que utilizarán el producto.
    
    h4.bgr_4.p-3.text-white(data-aos="fade-down-right") Recomendaciones
    p.mb-5 Consiste en un resumen de las mejoras que se deben realizar al producto multimedia de acuerdo con el análisis de resultados obtenidos, en la etapa anterior. De ser posible se concreta un plan con fechas establecidas para la realización de las modificaciones y la aplicación de pruebas nuevamente para verificar que las fallas fueron solventadas.

    .tarjeta.bgr_2.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.d-flex.align-items-center
          img(src="@/assets/curso/tema3/t3-7.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              h3.mb-1 Informe de resultados de las pruebas de los usuarios
              p.mb-0 Siguiendo con el caso estudio: “Aplicación de Comidas Rápidas” , se muestra un ejemplo de un informe de resultados descargando el siguiente documento:    
            .col-sm-auto
              a.boton.color-acento-botones.colr_2(:href="obtenerLink('downloads/Anexo_02.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    

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
