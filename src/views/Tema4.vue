<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Estrategias de CRM 
    
    .row.mb-5
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/tema4/t4-1.svg', alt='Texto que describa la imagen')
      .col-12.col-md-8
        p CRM, siglas en inglés de “Gestión de las Relaciones con los Clientes”, hace referencia a un software que se encarga de hacer el registro de información de todas aquellas personas que hacen parte de los procesos empresariales, entre ellos: clientes, empleados, proveedores y usuarios, suministrando las bases de datos de cada uno de los anteriores, agrupándolos de acuerdo con sus roles; estos datos se almacenarán en la nube, facilitando su actualización en tiempo real, con el fin de tenerlos presentes para una acertada toma de decisiones al momento de ejecutar una acción determinada.
        .row
          .col-12.col-md-1.mb-3.mb-md-0
            figure
              img(src='@/assets/componentes/btv.svg', alt='Texto que describa la imagen')
          .col-12.col-md-11
            p.text-bold El principal objetivo de un CMR es el de tener a la mano toda la información de los clientes, colaboradores y usuarios, con el fin de optimizar las tareas del producto multimedia, ya que al contar con esta herramienta se puede tener información accesible de todas las interacciones que realiza el usuario con el producto, de tal manera que con estos datos recopilados se puedan hacer mejoras para lograr una experiencia de usuario satisfactoria.
          .tarjeta.bgr_2.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2.d-flex.align-items-center
                img(src="@/assets/curso/tema4/t4-2.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.text-white
                    h3.mb-1 ¿Qué es un CRM y para qué sirve? Beneficios + Ejemplos
                    p.mb-0 Estimado aprendiz, Se recomienda ver el siguiente video de qué es un CRM y por qué es tan útil para tu estrategia de marketing digital:
                  .col-sm-auto
                    a.boton.color-acento-botones.colr_2(href="https://www.youtube.com/watch?v=Ztr24-JBL2s" target="_blank")
                      span Ver video
                      i.fas.fa-link
    
    h4.mb-5 Para seguir profundizando en la temática de CRM, deben ingresar en el siguiente video:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Beneficios de la estrategia CRM
    
    .bg_grad-03
      p La herramienta CRM proporciona múltiples beneficios, ya que es una de las formas en que las organizaciones pueden mejorar la experiencia de usuario, evaluando sus acciones con el producto, aspecto que le permite conocerlo más y recrear un perfil para predecir comportamientos futuros y satisfacerlos de acuerdo con sus preferencias y gustos.
    
    p.text-bold Los beneficios para el equipo de diseño y desarrollo son:

    .row.mb-5
      .col-12.col-md-8.d-flex.align-items-center(data-aos="fade-left")
        ul.lista-ul--color.lista-ul--separador.ps-4
          li
            i.fas.fa-check-circle.trans
            | Se puede tener un control interno de los datos de interacción del usuario con el producto multimedia, facilitando su organización.
          li
            i.fas.fa-check-circle.trans
            | A través del rastreo de las acciones que realiza el usuario con el producto se pueden establecer con mayor facilidad dónde está fallando el producto.
          li
            i.fas.fa-check-circle.trans
            | Se puede determinar la lógica cognitiva de los usuarios al recorrer el producto, hacer búsquedas, ejecutar y cancelar procesos entre otros. 
          li
            i.fas.fa-check-circle.trans
            | Facilita los procesos de desarrollo, reduciendo costos y tiempos al contar con información del usuario con mayor precisión.
      .col-12.col-md-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/t4-3.svg', alt='Texto que describa la imagen')
    
    .row
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/t4-4.svg', alt='Texto que describa la imagen')
      .col-12.col-md-8(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Procesamiento de datos del marketing") Por intermedio de las herramientas del CRM pueden establecer diversas tareas secuenciales las cuales mejoren el trabajo del departamento de marketing.
          p(numero="2" titulo="Automatización de ventas") El CRM hace una revisión constante de cómo los clientes interactúan con los servicios de la organización, un seguimiento de las interacciones con los clientes, de igual forma rastrea los períodos de ventas de usuarios predeterminados que pueden ser clientes potenciales.
          p(numero="3" titulo="Automatización del <em>Contact Center</em>") Esta herramienta es completamente útil, ya que puede hacer que la interfaz de usuario se corte facilitando la atención de servicio al cliente.
          p(numero="4" titulo="Métodos de geolocalización") La gran mayoría de CRM contienen tecnología que diseña tareas de marketing geolocalizado, las cuales permiten realizar seguimiento de ventas en una ubicación determinada.
          p(numero="5" titulo="Seguimiento de recursos humanos en un CRM") Los métodos CRM facilitan realizar un seguimiento de cada uno de los empleados aprobando al departamento de gestión humana encargarse de forma eficaz de las funciones desempeñadas en cada área referente al personal de la empresa.
           p(numero="6" titulo="Análisis") El sistema CRM permite examinar los datos con el fin de crear campañas de marketing seguras que permitan satisfacer a los clientes de forma oportuna.
    

    

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
