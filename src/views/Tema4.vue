<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Estrategias de CRM 
    
    .row.mb-5.justify-content-center
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/t4-1.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p CRM, siglas en inglés de “Gestión de las Relaciones con los Clientes”, hace referencia a un <em>software</em> que se encarga de hacer el registro de información de todas aquellas personas que hacen parte de los procesos empresariales, entre ellos: clientes, empleados, proveedores y usuarios, suministrando las bases de datos de cada uno de los anteriores, agrupándolos de acuerdo con sus roles; estos datos se almacenarán en la nube, facilitando su actualización en tiempo real, con el fin de tenerlos presentes para una acertada toma de decisiones al momento de ejecutar una acción determinada.
        .row
          .col-12.col-lg-1
            figure
              img.d-none.d-lg-flex(src='@/assets/componentes/btv.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-11
            p.text-bold El principal objetivo de un CMR es el de tener a la mano toda la información de los clientes, colaboradores y usuarios, con el fin de optimizar las tareas del producto multimedia, ya que al contar con esta herramienta se puede tener información accesible de todas las interacciones que realiza el usuario con el producto, de tal manera que con estos datos recopilados se puedan hacer mejoras para lograr una experiencia de usuario satisfactoria.
          .tarjeta.bgr_2.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2.d-flex.align-items-center
                img(src="@/assets/curso/tema4/t4-2.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.text-white
                    h3.mb-1 ¿Qué es un CRM y para qué sirve? Beneficios + Ejemplos
                    p.mb-0 Estimado aprendiz, Se recomienda ver el siguiente video de qué es un CRM y por qué es tan útil para tu estrategia de <em>marketing</em> digital:
                  .col-sm-auto
                    a.boton.color-acento-botones.colr_2(href="https://www.youtube.com/watch?v=Ztr24-JBL2s" target="_blank")
                      span Ver video
                      i.fas.fa-link
    
    h4.mb-5 Para seguir profundizando en la temática de CRM, deben ingresar en el siguiente video:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rPxDkao9S0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Beneficios de la estrategia CRM
    
    .bg_grad-03
      p La herramienta CRM proporciona múltiples beneficios, ya que es una de las formas en que las organizaciones pueden mejorar la experiencia de usuario, evaluando sus acciones con el producto, aspecto que le permite conocerlo más y recrear un perfil para predecir comportamientos futuros y satisfacerlos de acuerdo con sus preferencias y gustos.
    
    p.text-bold Los beneficios para el equipo de diseño y desarrollo son:

    .row.mb-5.justify-content-center
      .col-12.col-lg-8.d-flex.align-items-center(data-aos="fade-left")
        ul.lista-ul--color.lista-ul--separador.ps-lg-4
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
      .col-12.col-md-6.col-lg-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img400(src='@/assets/curso/tema4/t4-3.svg', alt='Texto que describa la imagen')
    
    .row.justify-content-center
      .col-12.col-md-6.col-lg-4.order-2.order-lg-1(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img400(src='@/assets/curso/tema4/t4-4.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Procesamiento de datos del <em>marketing</em>") Por intermedio de las herramientas del CRM pueden establecer diversas tareas secuenciales las cuales mejoren el trabajo del departamento de <em>marketing</em>.
          p(numero="2" titulo="Automatización de ventas") El CRM hace una revisión constante de cómo los clientes interactúan con los servicios de la organización, un seguimiento de las interacciones con los clientes, de igual forma rastrea los períodos de ventas de usuarios predeterminados que pueden ser clientes potenciales.
          p(numero="3" titulo="Automatización del <em>Contact Center</em>") Esta herramienta es completamente útil, ya que puede hacer que la interfaz de usuario se corte facilitando la atención de servicio al cliente.
          p(numero="4" titulo="Métodos de geolocalización") La gran mayoría de CRM contienen tecnología que diseña tareas de <em>marketing</em> geolocalizado, las cuales permiten realizar seguimiento de ventas en una ubicación determinada.
          p(numero="5" titulo="Seguimiento de recursos humanos en un CRM") Los métodos CRM facilitan realizar un seguimiento de cada uno de los empleados aprobando al departamento de gestión humana encargarse de forma eficaz de las funciones desempeñadas en cada área referente al personal de la empresa.
          p(numero="6" titulo="Análisis") El sistema CRM permite examinar los datos con el fin de crear campañas de <em>marketing</em> seguras que permitan satisfacer a los clientes de forma oportuna.
        
    separador

    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.2 Herramientas CRM para emprendedores, autónomos y empresas
    
    .row.mb-5.justify-content-center
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="fade-right")
        .bg_grad-05
          p Después de comprender la importancia de un CRM y el valor agregado que puede generar a una organización, emprendimiento o pyme, se entiende que es un <em>software</em> de gestión, donde la principal estrategia es la interacción entre clientes y empresarios y todo el contenido anteriormente estudiado se hará una introducción de cuáles son los mejores <em>softwares</em> del mercado actualmente, con la gran ventaja de ser gratuitos al público en general, y soportados tecnológicamente en la nube lo que permite su acceso y registro desde cualquier entorno, desde un ordenador, Tablet o dispositivo móvil, encontrando allí una información determinada de una organización y todo lo que esta conlleva en todos sus ámbitos.
      .col-12.col-md-6.col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/t4-5.svg', alt='Texto que describa la imagen')
    
    .row.mb-5
      .col-12.col-lg-1
        figure.d-flex.justify-content-center
          img.img30.d-none.d-lg-flex(src='@/assets/componentes/btv.svg', alt='Texto que describa la imagen') 
      .col-12.col-lg-11
        span Cabe resaltar que en este punto se hablarán de los <em>softwares</em> más relevantes del mercado dando un breve concepto, recalcando que para poder realizar una práctica sólo requiere ser puesto en marcha y conocer los diversos sistemas que un CRM puede operar, de igual forma se da claridad que no se mencionara un escalafón de CRM, es decir cuál puede ser el mejor, porque sencillamente se adaptan a las necesidades del uso que se le otorgue por parte del usuario. 
        span.colr_3.text-bold Por tanto, a continuación, se hará referencia de cada uno de ellos:
    
    .tarjeta.bgr_12.p-md-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.p-4
          .col-12.col-lg-3.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.img250(src='@/assets/curso/tema4/t4-6.png', alt='Texto que describa la imagen')
          .col-12.col-lg-9.d-flex.align-items-center.trans_8
            div
              h3 HUBSPOT CRM
              p.mb-0 Sus principales características es que es compatible con Gmail y su Plugin para Google Chrome permite tener una lista indefinida de contactos actualizados, la programación de tareas y correos electrónicos, interfaz con aplicaciones de CRM para dispositivos móviles y su <em>software</em> está determinado para el idioma español, es un sistema de fácil uso.
        .row.p-4
          .col-12.col-lg-3.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.img250(src='@/assets/curso/tema4/t4-7.png', alt='Texto que describa la imagen')
          .col-12.col-lg-9.d-flex.align-items-center.trans_8
            div
              h3 ZOHO CRM <em>ONLINE</em>
              p.mb-0 Sus principales atributos son la gestión de oportunidades, cliente – empresa, empresa – empleados, empresa – consumidores, otra de sus características especiales es la gestión y actualización de contactos en tiempo real, interfaz de usuario para aplicaciones de CMR Móvil para Android y iOS, permite analizar a cada uno de los clientes potenciales y finales, su <em>software</em> está determinado para el idioma español.
        .row.p-4
          .col-12.col-lg-3.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.img250(src='@/assets/curso/tema4/t4-8.png', alt='Texto que describa la imagen')
          .col-12.col-lg-9.d-flex.align-items-center.trans_8
            div
              h3 <em>STREAK</em> (PERFECTA PARA EMPRENDEDORES)
              p.mb-0 Este CRM trabaja de la mano con Gmail. Y es una gran ventaja, puesto que permite articular acciones de su oficio determinado desde su correo electrónico de Google lo que facilita ser utilizado desde cualquier dispositivo u ordenador, puede generar un filtro de ventas el cual es supervisado de acuerdo con el proceso que se defina por parte del usuario, tiene un espacio adecuado (cajas, más conocido con este término) de almacenamiento para clientes, de igual forma puede supervisar clientes prospectos y cómo se comunican entre sí, compatible con aplicaciones móviles, a diferencia de los 2 anteriores sistemas CRM, streak está determinado de fábrica en idioma inglés; sin embargo, contiene tutoriales los cuales hacen que su interfaz sea de forma rápida y fácil.
        .row.p-4
          .col-12.col-lg-3.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.img250(src='@/assets/curso/tema4/t4-9.png', alt='Texto que describa la imagen')
          .col-12.col-lg-9.d-flex.align-items-center.trans_8
            div
              h3 WIWINK CRM
              p.mb-0 Su fuerte por así decirlo es que es un <em>software</em> de ventas y su control de <em>marketing</em>, sin descuidar a sus clientes y su respectiva facturación, maneja una relación de cien registros de clientes por organización esto lo hace robusta a la hora de determinar con cuál sistema CRM empezar a gestionar en un mercado objetivo, de igual a diario registra labores, reuniones y oportunidades de negocio, desarrolla un modelo de negocio donde la mayoría de sus servicios son gratuitos y una pequeña parte genera un costo (<em>freemium</em>), cuenta con un moderno diseño de interfaz.
        .row.p-4
          .col-12.col-lg-3.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.img250(src='@/assets/curso/tema4/t4-10.png', alt='Texto que describa la imagen')
          .col-12.col-lg-9.d-flex.align-items-center.trans_8
            div
              h3 MACROGES CRM
              p.mb-0 Su principal característica es que es un <em>software</em> de facturación (50 facturas anuales sin costo) muy útil para los emprendedores, integra todo en un solo componente, su modelo de negocio es un (<em>freemium</em>), su interfaz se asemeja mucho a un calendario en el cual se tiene el control total de los clientes y sus movimientos en tiempo real, es de fácil manipulación, su versión se trabajó está en español, finalmente cuenta con un disco exclusivo de almacenamiento.
        .row.p-4
          .col-12.col-lg-3.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.img250(src='@/assets/curso/tema4/t4-11.png', alt='Texto que describa la imagen')
          .col-12.col-lg-9.d-flex.align-items-center.trans_8
            div
              h3 ESPO CRM
              p.mb-0 Se caracteriza por qué se puede instalar en cualquier equipo tecnológico, ya que es un <em>software</em> de código abierto, lo que hace que el usuario es dueño de los datos e información registrada, en tiempo real, al ser un <em>software</em> de CA, su programación es sencilla y su interfaz de usuario es simple pero muy apropiada para ejecutar una acción determinada.
        .row.p-4
          .col-12.col-lg-3.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.img250(src='@/assets/curso/tema4/t4-12.png', alt='Texto que describa la imagen')
          .col-12.col-lg-9.d-flex.align-items-center.trans_8
            div
              h3 BITRIX
              p.mb-0 El Bitrix,el cuenta con nube propia el cual es separado del drive, gestiona toda la interacción cliente – empresa, su enfoque comercial es el trato y seguimiento con sus clientes y usuarios, cuenta con 5 GB de almacenamiento, con una serie de diversas aplicaciones y soluciones especializadas lo que permite tener una funcionalidad óptima en su interfaz, es el <em>software</em> más completo del mercado y preferido por las grandes plataformas comerciales por su gestión comercial y nivel de trabajo todo en uno, su versión de trabajo para los usuarios está en español lo que lo hace más fácil de interpretar e interactuar.
    
    separador

    #t_4_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.3 Ejemplos de uso de un CRM
    
    .bloque-texto-a.color-primario.p-3.p-md-3.mb-5(data-aos="flip-up")
      .row.m-0.align-items-center.justify-content-center
        .col-md-6.col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/t4-13.svg', alt='Texto que describa la imagen')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 En este punto se tomarán como referencia tres tipos de ejemplos de la implementación de un CRM que están presentes en el día a día y que posiblemente no se perciben con facilidad, con el fin de entender de manera asertiva como se presenta y se interactúa con un CRM:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-up")
      .row(titulo="Ejemplo de un <em>contact center</em>")
        .col-12.col-lg-8.d-flex.align-items-center
          p Por lo general sistematizar el CRM de una organización depende del área de <em>marketing</em> y ventas, y en muchos casos por los empleados (agentes) de algún centro de atención especializado de un tema en particular, quienes consiguen y fidelizan clientes potenciales y constantemente actualizan la información de cada uno de ellos, hacen seguimientos por intermedio de llamadas las cuales realiza el servicio de soporte técnico, con el fin de estar constantemente actualizados de sus clientes, queriendo brindar experiencias diversas de acuerdo a las necesidades de los usuarios registrados en las bases de datos.
        .col-12.col-lg-4
          figure.d-flex.justify-content-center
            img.img350(src='@/assets/curso/tema4/t4-14.png', alt='Texto que describa la imagen')   
      .row(titulo="Ejemplo Social CRM")
        .col-12.col-lg-8.d-flex.align-items-center
          p Sin duda alguna este escenario es el más concurrido por casi todas las personas que cuentan con un dispositivo móvil y un ordenador, se trata de las redes sociales, con las cuales se pueden generar oportunidades de negocio, por intermedio de las aplicaciones como WhatsApp, Facebook, Twitter y LinkedIn, estos escenarios de comercio se generan a través de foros los cuales son abiertos y permiten a los clientes (población objetivo) generar experiencias (marcas) e interacciones de acuerdo con algún tipo de artículo y su comercialización, todo este escenario se realiza por intermedio de conversaciones en redes sociales, por este medio se fidelizan y caracterizan los clientes de acuerdo a la satisfacción que el producto adquirido ofrece al comprador, por este medio se desarrollan diversas estrategias de <em>marketing</em>.
        .col-12.col-lg-4
          figure.d-flex.justify-content-center
            img.img350(src='@/assets/curso/tema4/t4-15.png', alt='Texto que describa la imagen') 
      .row(titulo="Ejemplo de CRM Móviles")
        .col-12.col-lg-8.d-flex.align-items-center
          p Los diferentes sistemas operativos se han tomado la tarea de diseñar aplicaciones para smartphones y Tablet, con el fin de acceder muy fácilmente a la información de clientes, compras y ventas no necesariamente desde un punto físico determinado, es decir permiten una fácil utilización de un servicio solo requiriendo una conexión adecuada a internet, podríamos afirmar que esta estrategia comercial está denominada como clientes móviles.
        .col-12.col-lg-4
          figure.d-flex.justify-content-center
            img.img350(src='@/assets/curso/tema4/t4-16.png', alt='Texto que describa la imagen')

    separador

    #t_4_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.4 Informes de resultados de las pruebas CRM
    
    .row.mb-5.justify-content-center
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/t4-17.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p Al momento de incorporar un CRM en un entorno organizativo empresarial inmediatamente toda acción realizada se convierte en datos, lo cual permitirá realizar una evaluación pertinente que a futuro optimizará procesos de intervención entre clientes, compradores y usuarios de un sistema determinado aportando una visión futurista en el entorno comercial.
        .row
          .col-12.col-lg-1.mb-3.mb-lg-0
            figure
              img.d-none.d-lg-flex(src='@/assets/componentes/btv.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-11
            p Resulta muy útil hacer informes con un sistema CRM (puede personalizarse de acuerdo al gusto del usuario con la interfaz), ya que estos pueden desarrollarse automáticamente, permitiendo un análisis preciso de datos obtenidos, en rangos, en espacios de tiempo diferentes de acuerdo con la información solicitada, de igual forma la herramienta permite encontrar los informes de forma organizada y con la posibilidad de exportarlos a un programa de presentación, como PowerPoint o Excel, es importante recalcar que los informes se pueden ejecutar de forma rápida y fácil.
    
    .cajon.bgr.p-4.mb-5(data-aos="flip-up")
      p.mb-0 Básicamente un informe CRM es la forma de almacenar los datos y ordenarlos, permitiendo que el entorno diario del negocio esté listo para el día a día del negocio está listo para mercados, compradores y proveedores para el departamento de <em>marketing</em>. Se encuentran:
    
    .tarjeta.bgr_12.p-md-4.mb-5(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.p-5.bgr_13.justify-content-center
          .col-12.col-lg-9.mb-3.mb-lg-0.d-flex.align-items-center
            div
              h3 Informe de cliente
              p.mb-0 En primera instancia podemos mencionar los informes que se realizan por intermedio de la visita a los clientes, son informes que contiene toda la información de los clientes y su respectiva actividad comercial en el transcurso de un periodo determinado y de igual forma tener presente cuando será la siguiente visita, este tipo de informes permite proporcionar el trabajo con cada cliente y el equipo de trabajo, esto con el fin de no cargar ni al uno u otro con acciones que les impliquen tiempo y poco resultado.
          .col-12.col-md-8.col-lg-3
            figure
              img(src='@/assets/curso/tema4/t4-18.svg', alt='Texto que describa la imagen')
        .row.p-5.bgr_14.justify-content-center
          .col-12.col-lg-9.mb-3.mb-lg-0.d-flex.align-items-center
            div
              h3 Informe de rechazos
              p.mb-0 Este tipo de informes permitirá entrar a evaluar si un cliente no está conforme con un producto determinado o un servicio, permitiendo dar pronta respuesta a la inconformidad y darle solución oportuna, de igual forma se requiere tener todos los datos pertinentes para poder solventar el inconveniente, se requiere hacer un comparativo de los entornos comerciales, observando si es un error continuo o desafortunadamente se presentó a un solo usuario.
          .col-12.col-md-8.col-lg-3
            figure
              img(src='@/assets/curso/tema4/t4-19.svg', alt='Texto que describa la imagen')
        .row.p-5.bgr_15.justify-content-center
          .col-12.col-lg-9.mb-3.mb-lg-0.d-flex.align-items-center
            div
              h3 Informe de costos 
              p.mb-0 Esta herramienta permitirá obtener un reporte en tiempo real de gastos (por día, semana, o frecuencia) de cada usuario, el CRM tiene la capacidad de organizar dicha información y almacenarla por carpetas para un mayor control de entradas y salidas en temas de dinero de los clientes.
          .col-12.col-md-8.col-lg-3
            figure
              img(src='@/assets/curso/tema4/t4-20.svg', alt='Texto que describa la imagen')
        .row.p-5.bgr_16.justify-content-center
          .col-12.col-lg-9.mb-3.mb-lg-0.d-flex.align-items-center
            div
              h3 Informe de clientes y clientes prospectos
              p.mb-0 Este informe es muy similar al informe de clientes, ya que podemos clasificar los clientes actuales y su fidelización y los posibles prospectos de clientes en los cuales se centra la atención, puesto que es importante clasificarlos y hacerles seguimiento paso a paso con el fin de potencializarlos de acuerdo a sus requerimientos y necesidades, el CRM brindará los datos de conversión de las clientes antiguos, nuevos y prospectos. 
          .col-12.col-md-8.col-lg-3
            figure
              img(src='@/assets/curso/tema4/t4-21.svg', alt='Texto que describa la imagen')
    
    .row.mb-5.justify-content-center(data-aos="flip-down")
        .col-12.col-md-10
          .row  
            .col-auto.mb-3.mb-md-0
              figure.trans_1.d-flex.justify-content-center
                img.img120(src='@/assets/curso/tema4/t4-21.png', alt='Texto que describa la imagen')
            .col-12.col-md-8.col-lg-10.d-flex.align-items-center
              p.text-bold.mb-0 Como se puede apreciar al momento de hacer un informe de resultado de los CRM no es complejo, ya que toda la información se encuentra de acuerdo con el sistema CRM con el cual se esté desarrollando una labor en específico. Estimado aprendiz, las herramientas están al alcance de todos, solo se requiere entrar en interacción con el sistema y este lo guiará de la forma adecuada para la optimización de su resultado.










    

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
