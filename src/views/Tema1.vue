<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Diseño de pruebas para la evaluación del proyecto multimedia
    
    .row.mb-5.justify-content-center
      .col-12.col-md-8.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/t1-1.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8.bg_grad-01.d-flex.align-items-center(data-aos="fade-left")
        div
          p Dentro del contexto de los productos multimedia se debe incorporar la evaluación como un elemento más de desarrollo del proyecto. Esta consiste en el diseño de pruebas utilizando un conjunto de métodos y técnicas que sirven para determinar las condiciones de uso y funcionalidad del producto.
          .cajon.bgr.p-4
            p.mb-0 A continuación, podrán encontrar en el siguiente video de clase, una explicación sobre el diseño y aplicación de pruebas:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/p9LN6RymQEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="fade-left")
        p Para que el diseño de las pruebas sea el adecuado, se debe identificar qué tipo de método se adapta al entorno donde se va a aplicar, los recursos técnicos con que se cuenta y el capital humano; que es quizá el más importante porque está configurado por los expertos y los usuarios que participarán en el proceso evaluativo. 
        .cajon.bgr.p-4
          p.mb-0 Así como se mencionó que la evaluación es un elemento más del producto, Lorés (2006) afirmó que debe hacer parte de su diseño y determinar su capacidad de usabilidad, accesibilidad y escalabilidad para que logre una experiencia de usuario satisfactoria. Apropiando lo que significan los anteriores términos que se han mencionado a lo largo del proceso formativo se tiene que:
      .col-12.col-lg-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img400(src='@/assets/curso/tema1/t1-2.svg', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
        .bgr_1.p-4.h-100
          figure.mb-3.d-flex.justify-content-center
            img.img110(src='@/assets/curso/tema1/t1-3.svg', alt='Texto que describa la imagen')
          p.mb-0.text-center <b>Usabilidad:</b> la ISO98 mencionada por Lorés (2006) define este término como la medida en la que un producto puede ser usado por los usuarios para lograr sus objetivos con efectividad y eficiencia en un contexto específico. 
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
        .bgr_1.p-4.h-100
          figure.mb-3.d-flex.justify-content-center
            img.img110(src='@/assets/curso/tema1/t1-4.svg', alt='Texto que describa la imagen')
          p.mb-0.text-center <b>Accesibilidad:</b> Fernández (2019) define este término como un adjetivo que significa de fácil acceso. Es el grado en el que cualquier persona más allá de sus capacidades físicas o técnicas pueden utilizar un objeto o servicio.
      .col-12.col-md-6.col-lg-3.mb-3.mb-md-0
        .bgr_1.p-4.h-100
          figure.mb-3.d-flex.justify-content-center
            img.img110(src='@/assets/curso/tema1/t1-5.svg', alt='Texto que describa la imagen')
          p.mb-0.text-center <b>Escalabilidad:</b> según Blancarte (2017) “la escalabilidad es la capacidad del software para adaptarse a las necesidades de rendimiento a medida que el número de usuarios crece”. Igualmente puede disminuir la capacidad de respuesta de la base de datos por alta demanda.
      .col-12.col-md-6.col-lg-3
        .bgr_1.p-4.h-100
          figure.mb-3.d-flex.justify-content-center
            img.img110(src='@/assets/curso/tema1/t1-6.svg', alt='Texto que describa la imagen')
          p.mb-0.text-center <b> Experiencia de usuario (UX):</b> según la International Standard ISO 9241-210 (2010), la UX tiene que ver con “las percepciones y respuestas de la persona resultantes del uso y / o uso anticipado de un producto, sistema o servicio”.
    
    .bg_grad-02
      p.mb-5 En el proceso de diseño y desarrollo de proyectos multimedia se debe evaluar permanentemente la experiencia del usuario al interactuar con el producto/servicio, de tal manera que llegue a tener plena satisfacción y de esta forma evitar rediseños que consumen más tiempo de lo planificado y mayores recursos de los presupuestados. Para lograr una UX satisfactoria entonces se debe evaluar la usabilidad, accesibilidad y escalabilidad del producto. 
    
    .row.mb-5
      .col-12.col-lg-1.d-flex.align-items-center(data-aos="flip-left")
        figure
          img.img110.d-none.d-lg-flex(src='@/assets/curso/tema1/t1-7.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-11
        p.mb-0.text-bold Para el diseño de la prueba se aplican métodos y técnicas que se pueden clasificar en tres (3) categorías principalmente como se muestra en la siguiente figura de Lorés (2006):
    
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")  
      .col-12.col-md-10.col-lg-8
        figure
          img(src='@/assets/curso/tema1/t1-8.svg', alt='Texto que describa la imagen')
    
    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img.d-none.d-lg-flex(src='@/assets/curso/tema1/t1-9.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p Es importante mencionar que la evaluación de los proyectos multimedia se puede realizar en dos contextos: uno es el espacio físico, el cual debe cumplir con todas la condiciones técnicas y tecnológicas para obtener resultados óptimos en el proceso, y el otro es un espacio natural donde el uso de la tecnología no es relevante y se reúnen evaluadores, desarrolladores, apoyos y usuarios para intercambiar opiniones en tiempo real. 
        .row
          .col-auto.mb-3
            figure
              img.d-none.d-lg-flex(src='@/assets/curso/tema1/t1-10.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-11.mb-3
            p Cuando el proyecto multimedia es un sitio web se recomienda realizar la evaluación en su etapa más temprana, ojalá cuando se tenga el prototipo, ya que cuanto más rápido se detecten y corrijan los errores, menos costoso será rediseñar. A continuación, se describe una técnica de evaluación: 
          .tarjeta.bgr_2.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2.d-flex.align-items-center
                img(src="@/assets/curso/tema1/t1-11.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.text-white
                    h3.mb-1 Evaluación usabilidad - Diseño <em>web</em>
                    p.mb-0 Observa la utilización de una técnica (heurística) para la evaluación de un sitio web:  
                  .col-sm-auto
                    a.boton.color-acento-botones.colr_2(href="https://www.youtube.com/watch?v=319KEqFRZrc" target="_blank")
                      span Ver video
                      i.fas.fa-link
    
    p.mb-5 En el anterior video se observa la utilización de una técnica (heurística) para la evaluación de un sitio web y así mismo se explica a continuación, aspectos por tener en cuenta para que la interfaz (pantalla) cause una buena impresión a los usuarios:

    .row.justify-content-center
      .col-12.col-lg-7.d-flex.align-items-center(data-aos="fade-left")
        ul.lista-ul--color.lista-ul--separador.ps-3
          li
            i.fas.fa-check-circle.trans
            | El contenido debe ser de fácil aprendizaje; es decir, disminuir los tiempos con los que cuenta un usuario para conocer y manipular una aplicación, para que su uso sea productivo y completo a la hora de su interfaz.
          li
            i.fas.fa-check-circle.trans
            | El entorno de interfaz debe ser flexible, con el fin de poder hacer intercambios de información, del usuario y el sistema, implicando que este tenga el control y se adapte fácilmente.
          li
            i.fas.fa-check-circle.trans
            | La estructura del producto debe ser robusta y permitirle alternativas al usuario para que alcance su propósito. 
          li
            i.fas.fa-check-circle.trans
            | Es muy importante que la aplicación cuente con un grado alto de recuperabilidad de acciones, con el fin de que el usuario pueda hacer un ajuste oportuno después de haber cometido un error.
          li
            i.fas.fa-check-circle.trans
            | El usuario debe tener la capacidad de sintetizar, captar, observar y percibir si la aplicación en algún momento presenta cambios sustanciales dentro de la operación del sistema.
      .col-12.col-md-6.col-lg-5(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img420(src='@/assets/curso/tema1/t1-12.svg', alt='Texto que describa la imagen')
    
    separador

    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Método de Inspección

    figure.position-relative.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/tema1/t1-13.png', alt='Texto que describa la imagen')
      .row.justify-content-center
        .col-11.col-md-10
          .bgr_3.p-4
            p.m-0 Este es un conjunto de métodos de evaluación que se basa en el juicio de los expertos que se enfocan en la interfaz del usuario (UI) Recuérdese que la UI es el punto de interacción y comunicación usuario – dispositivo, que incluye aspectos de visualización como la pantalla, teclado, <em>mouse</em>, entre otros. Esto quiere decir que los criterios que se evalúan tienen que ver con elementos específicos de las interfaces o pantallas que interactúan con el usuario final. Dentro de este método se encuentran las siguientes técnicas:
    
    h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Técnica de evaluación Heurística

    p Consiste en el análisis de la interfaz con la cual interactúa el usuario para determinar si responde a los principios de usabilidad. Cada principio corresponde a una “H” en la heurística y corresponden a:

    .row.mb-3.mb-md-5.justify-content-center
      .col-12.col-md-6.col-lg-5.mb-3.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img450(src='@/assets/curso/tema1/t1-14.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-7.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p(numero="H1" titulo="Visibilidad del estado del sistema") El usuario debe recibir una retroalimentación del estado del producto en cada instante para saber qué pasa cuando interactúa con él, por ejemplo si está guardando, cargando, o si hay algún tipo de error.
          p(numero="H2" titulo="Relación del producto con el mundo real") Se debe brindar al usuario toda la información necesaria para que no tenga dudas o cometa errores en la acción que va a realizar. 
          p(numero="H3" titulo="Libertad al usuario") El sistema debe permitir que el usuario cancele un proceso que estaba realizando sin finalizarlo, de tal manera que esta acción no representa compromisos o penalizaciones que puedan llegar a afectar en cualquier aspecto de su estado emocional o material.
          p(numero="H4" titulo="Consistencia") Utilizar un patrón de diseño de los elementos del producto no solo le proporciona coherencia sino claridad y facilidad de uso a la hora de ser utilizado por el usuario. Por ejemplo cuando se diseñan botones se debe colocar del mismo color y tamaño.
          p(numero="H5" titulo="Prevención de errores") Se deben dar instrucciones claras a los usuarios sobre cómo manejar el producto y las acciones que deben realizar para evitar su mal uso y posteriormente el abandono, debido a los errores que puede arrojar.
          
    .row.mb-5.justify-content-center
      .col-12.col-lg-7.mb-3.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="H6" titulo=" Recordación") El producto multimedia debe proporcionar toda la información posible en aquellos momentos donde el usuario necesita recordar los detalles claves que le permitan confirmar la decisión que está a punto de tomar.
          p.text-small(numero="H7" titulo="Flexibilidad y eficiencia de uso") Se refiere a la capacidad de utilización del producto independientemente del tipo de usuario; es decir si a este se le facilita el uso de las herramientas tecnológicas o si por el contrario no le es sencillo ni familiar hacerlo.
          p.text-small(numero="H8" titulo="Diseño minimalista") Es importante no saturar de información al usuario del producto, mostrándole contenido innecesario que lo distraiga y lo desvíe del objetivo de utilización del producto. 
          p.text-small(numero="H9" titulo="Reconocer y corregir errores") Proporciona información al usuario de lo que está generando errores en la utilización del producto multimedia, y le brinda recomendaciones de las acciones que puede realizar para un buen uso del sistema.
          p.text-small(numero="H10" titulo="Ayuda y documentación") Se deben detectar las dudas más comunes de los usuarios cuando está usando el producto multimedia e incluir la información necesaria para que él mismo pueda encontrar la manera de resolverlas. De esta forma el producto se hace autogestionable.
      .col-12.col-md-6.col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img450(src='@/assets/curso/tema1/t1-15.svg', alt='Texto que describa la imagen')
    
    .row.mb-5.justify-content-center(data-aos="flip-down")
      .col-12.col-md-10
        .row  
          .col-auto.mb-3.mb-md-0
            figure.trans_1.d-flex.justify-content-center
              img.ps-1(src='@/assets/curso/tema1/t1-16.png', alt='Texto que describa la imagen')
          .col-12.col-md-8.col-lg-10.d-flex.align-items-center
            p.text-bold.mb-0 Con la técnica heurística también se puede diseñar las pruebas incluyendo para el análisis los principios de accesibilidad de la WCAG 2.0 (<em>Web Content Accessibility Guidelines</em>); estudiados anteriormente, pero para recordar se mencionan a continuación: 
    
    .row.mb-5
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
        .bgr_1.p-4.h-100
          figure.mb-3.d-flex.justify-content-center.position-relative
            img.img110(src='@/assets/curso/tema1/t1-17.svg', alt='Texto que describa la imagen')
            img.trans_2(src='@/assets/curso/tema1/t1-21.svg', alt='Texto que describa la imagen')
          p.mb-0.text-center <b>Perceptibilidad:</b> este principio se enfoca en asegurar que todo el contenido del producto puede ser comprendido por el usuario proporcionándole diferentes alternativas como texto, video o audio.
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
        .bgr_1.p-4.h-100
          figure.mb-3.d-flex.justify-content-center.position-relative
            img.img110(src='@/assets/curso/tema1/t1-18.svg', alt='Texto que describa la imagen')
            img.trans_2(src='@/assets/curso/tema1/t1-22.svg', alt='Texto que describa la imagen')
          p.mb-0.text-center <b>Operabilidad:</b> el producto debe proporcionar facilidad de interacción y navegación a los usuarios a través del mouse o el teclado. La interfaz o pantalla que se le coloque al usuario para acceder al producto multimedia deben permitirle ir al lugar que quiera.
      .col-12.col-md-6.col-lg-3.mb-3.mb-md-0
        .bgr_1.p-4.h-100
          figure.mb-3.d-flex.justify-content-center.position-relative
            img.img110(src='@/assets/curso/tema1/t1-19.svg', alt='Texto que describa la imagen')
            img.trans_2(src='@/assets/curso/tema1/t1-23.svg', alt='Texto que describa la imagen')
          p.mb-0.text-center <b>Comprensibilidad:</b> el contenido del producto y la forma en que el usuario puede interactuar con él debe estar de acuerdo con su capacidad de entendimiento, sin importar el perfil o el nivel de formación que posea.
      .col-12.col-md-6.col-lg-3
        .bgr_1.p-4.h-100
          figure.mb-3.d-flex.justify-content-center.position-relative
            img.img110(src='@/assets/curso/tema1/t1-20.svg', alt='Texto que describa la imagen')
            img.trans_2(src='@/assets/curso/tema1/t1-24.svg', alt='Texto que describa la imagen')
          p.mb-0.text-center <b>Robustez:</b> el producto debe ser lo suficientemente robusto para permitir su uso sin importar la ubicación, máquina o navegador que se utilice; y debe poder ser interpretado por cualquier aplicación, tecnología o usuario.
    
    .bg_grad-04
      .bg_grad-03
        p.mb-3.mb-lg-5 Igualmente se pueden incluir principios de escalabilidad que en el Marco de la Junta de Andalucía (s.f.) se definen como buenas prácticas; las cuales corresponde a la numeración heurística que sigue: 

      .row.mb-5.justify-content-center
        .col-12.col-md-6.col-lg-5.mb-3.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.img450(src='@/assets/curso/tema1/t1-25.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-7.order-1.order-lg-2(data-aos="fade-left")
          .tarjeta.bgr_5.p-0.p-md-4.mb-5
            SlyderA(tipo="b")
              div.position-relative.p-5
                img.trans_9(src='@/assets/curso/tema1/t1-26.svg', alt='Texto que describa la imagen')
                h3 Funcionamiento en modo asincrónico
                p.mb-0 Una manera de lograr la escalabilidad es que las operaciones y funciones del producto multimedia se ejecuten de manera asincrónica, es decir que dos o más procesos se realicen al mismo tiempo y se van liberando a medida que vayan terminando su ejecución. Por ejemplo cuando el usuario solicita dos servicios de la web, el sistema libera el que pueda ejecutarse primero de acuerdo con los recursos para enseguida liberar el segundo.
              div.position-relative.p-5
                img.trans_9(src='@/assets/curso/tema1/t1-27.svg', alt='Texto que describa la imagen')
                .row.position-relative
                  .col-md-9.mb-4.mb-md-0
                    h3 Ordena el uso de los recursos
                    p.mb-0 El uso de los recursos debe programarse de tal forma que los proceso con acciones más demandantes sean los últimos que utilicen los recursos y los liberen para que estén disponibles para otra tarea que solicite el usuario.
                  .col-md-3.d-flex.align-items-center
                    figure.d-flex.align-items-center.justify-content-center
                      img.img130(src='@/assets/curso/tema1/t1-31.svg', alt='Texto que describa la imagen')
              div.position-relative.p-5
                img.trans_9(src='@/assets/curso/tema1/t1-28.svg', alt='Texto que describa la imagen')
                h3 Operaciones conmutables
                p.mb-0 Son operaciones que se pueden aplicar en cualquier orden y entregan el mismo resultado, esto evita que las respuestas a los usuarios se retrasen por seguir un determinado proceso. Un ejemplo de este tipo de operaciones de conmutación también se puede llegar a tener en un servicio de alojamiento; cuando se agrupan varios servidores para prestar servicios en la web, si un cliente hace una petición que ingresa a uno de ellos y este falla por algún motivo, dicha petición puede ser resuelta por cualquiera de los servidores que estén en el grupo. Esta opción de escalabilidad puede incluir el proveedor de hosting (alojamiento) que contrate el usuario.
              div.position-relative.p-5
                img.trans_9(src='@/assets/curso/tema1/t1-29.svg', alt='Texto que describa la imagen')
                .row.position-relative
                  .col-md-9.mb-4.mb-md-0
                    h3 Aplicaciones intercambiables
                    p.mb-0 Se deben tener varios recursos que sean iguales para disponer de ellos, si hay más de un proceso que está necesitando del mismo recurso. Este busca el que esté libre para realizar la acción deseada. Si se trata del proceso de desarrollo del producto multimedia, se pueden tener líneas de código que se puedan intercambiar en varias aplicaciones para no tener que hacer varios módulos con las mismas instrucciones.
                  .col-md-3.d-flex.align-items-center
                    figure.d-flex.align-items-center.justify-content-center
                      img.img130(src='@/assets/curso/tema1/t1-32.svg', alt='Texto que describa la imagen')
              div.position-relative.p-5
                img.trans_9(src='@/assets/curso/tema1/t1-30.svg', alt='Texto que describa la imagen')
                h3 Recursos y actividades
                p.mb-0 Se utiliza para vincular un conjunto de recursos a un proceso o carga de trabajo específica. Por ejemplo, un servidor agrupa determinados recursos para cuando los usuarios inician sesión de un sitio web y hacen otra cuando están interactuando de alguna manera con las funcionalidades de este.

      h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Técnica recorrido de usabilidad plural

      .row.mb-5.justify-content-center
        .col-12.col-lg-7(data-aos="fade-right")
          p.mb-3.mb-lg-5 Esta técnica tiene como objetivo analizar las acciones que realizan tres categorías de usuarios cuando interactúan con el producto en determinadas tareas. Estas acciones son el recorrido o secuencia de actividades para lograr el resultado esperado, aplicado más que todo para medir la usabilidad y accesibilidad del producto. Es plural porque intervienen diferentes tipos de usuario a diferencia de la técnica heurística que la realizan los expertos solamente. Para la aplicación de esta técnica se deben realizar las siguientes acciones:
          ul.lista-ul--color.lista-ul--separador.ps-3
            li
              i.fas.fa-check-circle.trans
              span <b>Selección de participantes:</b> generalmente se seleccionan tres grupos de usuarios con perfiles diferentes que juegan un rol dentro del proyecto multimedia.
            li
              i.fas.fa-check-circle.trans
              span <b>Asignación de una tarea:</b> a las tres categorías de usuarios se les pide realizar el recorrido de las acciones que debería realizar para ejecutar la tarea. A todos se les asignará la misma tarea.
            li
              i.fas.fa-check-circle.trans
              span <b>Descripción del recorrido:</b> cada usuario deberá escribir en un papel la secuencia de acciones que debe realizar para llevar a cabo la tarea 
            li
              i.fas.fa-check-circle.trans
              span <b>Realización de la exposición:</b> cada categoría de usuario deberá exponer la secuencia de acciones que realizaría para llevar a cabo la tarea, después se debatirá para llegar a un consenso sobre el recorrido más sencillo.
        .col-12.col-md-6.col-lg-5(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.img450(src='@/assets/curso/tema1/t1-33.svg', alt='Texto que describa la imagen')
    
    h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Técnica Recorrido Cognitivo

    .row.mb-3.mb-lg-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.img350(src='@/assets/curso/tema1/t1-34.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-right")
        p.mb-3 Esta técnica evalúa qué tan fácil resulta para el usuario usar el producto multimedia a base de la exploración. Muchos usuarios prefieren recorrer el producto y probar sus funcionalidades que leer un manual, es por ello por lo que los aplicativos deben acercarse a la intuición y el pensamiento sobre la manera de actuar para lograr el objetivo. Esta técnica se lleva a cabo sobre un <em>wireframe</em> de baja fidelidad, corresponde a un boceto sencillo donde se bosqueja aspectos generales del producto multimedia sin entrar en el detalle de imágenes, contenido o color, utiliza solo escala de grises, se enfoca en la interacción del usuario y los elementos de diseño que utiliza son cuadrados, rectángulos, círculos, triángulos o líneas.
        .tarjeta.bgr_2.p-3
          .row.justify-content-around.align-items-center
            .col-auto.d-flex.align-items-center
              img(src="@/assets/curso/tema1/t1-11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Recorrido cognitivo a página <em>web</em> UTadeo
                  p.mb-0 Conoce como un usuario puede realizar un recorrido cognitivo en una plataforma web de aportes en línea.  
                .col-sm-auto
                  a.boton.color-acento-botones.colr_2(href="https://www.youtube.com/watch?v=TfnDMdQzYXk" target="_blank")
                    span Ver video
                    i.fas.fa-link
    
    .row.mb-5
      .col-auto
        figure.d-none.d-lg-flex
          img(src='@/assets/componentes/btv.svg', alt='Texto que describa la imagen') 
      .col-12.col-lg-11
        p Por intermedio del método del paseo cognitivo se logra demostrar si existen inconvenientes de usabilidad en un período real en el entorno, qué rutas de navegación fueron utilizadas por un usuario, de igual forma, se pueden detectar las variables que el usuario determina al momento de hacer un recorrido visual en cada página incluida en la elaboración de la prueba. Para llevar a cabo esta técnica se deben realizar las siguientes acciones:  
    
    .row.mb-5.justify-content-center(data-aos="zoom-in")
      .col-12.col-lg-10
        PasosA.color-acento-contenido.mb-5.trans_3(tipo="n")
          .row
            .col-md-9.mb-4.mb-md-0.d-flex.align-items-center.mb-3.mb-md-0
              p.mb-0 Seleccionar un conjunto de 6 a 10 usuarios que no conozcan la aplicación o el producto para que realicen el recorrido de la interfaz o estructura del producto. Se debe recordar que la interfaz es la pantalla o apariencia del producto. 
            .col-md-3
              figure.d-flex.justify-content-center
                img.img110(src='@/assets/curso/tema1/t1-35.svg', alt='Texto que describa la imagen')
          .row.justify-content-end
            .col-md-3.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.img110(src='@/assets/curso/tema1/t1-36.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
              p.mb-0 Seleccionar las tareas que contengan las funciones principales del producto y para cada una de ellas preparar un <em>wireframe</em> que contenga como encabezado el nombre de la tarea o función a evaluar y el objetivo. 
          .row
            .col-md-9.mb-4.mb-md-0.d-flex.align-items-center.mb-3.mb-md-0
              p.mb-0 El experto debe documentar las tareas a evaluar con la secuencia de acciones correctas para compararlas con lo que los usuarios respondieron en la prueba. 
            .col-md-3
              figure.d-flex.justify-content-center
                img.img110(src='@/assets/curso/tema1/t1-37.svg', alt='Texto que describa la imagen')
          .row.justify-content-end
            .col-md-3.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.img110(src='@/assets/curso/tema1/t1-38.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
              p.mb-0 Se pueden incluir instrucciones y también preguntas en el <em>wireframe</em> referentes a las acciones que realizaría para llevar a cabo la tarea, para saber si hay algo confuso o para agregar alguna observación respecto a la estructura de la interfaz.
          .row
            .col-md-9.mb-4.mb-md-0.d-flex.align-items-center.mb-3.mb-md-0
              p.mb-0 Imprimir el <em>wireframe</em> para que cada participante lo diligencie de manera individual. Cada tarea para evaluar debe ocupar una hoja y ser diligenciada sin pasar a otra o al respaldo, para no tergiversar o malinterpretar lo que se quiere expresar respecto a la fu ncionalidad evaluada. 
            .col-md-3
              figure.d-flex.justify-content-center
                img.img110(src='@/assets/curso/tema1/t1-39.svg', alt='Texto que describa la imagen')
          .row.justify-content-end
            .col-md-3.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.img110(src='@/assets/curso/tema1/t1-40.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0.d-flex.align-items-center
              p.mb-0 Se debe realizar una sesión de retroalimentación con los participantes, ya que son estos los primeros que pueden evidenciar los posibles errores que presente la aplicación, aquí se debe retroalimentar las acciones ejecutadas pantalla por pantalla y las fallas que se presentan con el fin de ser corregidas y puestas en marcha, para el desarrollo de la aplicación 
            
    h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Técnica de Inspección de Estándares

    .row.mb-5
      .col-12.col-lg-8.bg_grad-05(data-aos="fade-right")
        p esta técnica se aplica sobre todo para evaluar si la interfaz del usuario cumple con los estándares establecidos por la W3C; por lo tanto, se utiliza en usabilidad y accesibilidad. El experto en el estándar es el que evalúa minuciosamente el principio que se esté probando. 
        div.px-5.py-4.position-relative.bg_grad-06
          p un estándar es un requisito, regla o recomendación que se basa en la práctica y en principios que se han probado y al cual han llegado a un acuerdo los profesionales autorizados a nivel local, nacional e internacional. 
          p.text-bold.text-end.me-5 -Granollers (2014):
          img.pst(src='@/assets/componentes/com.svg', alt='Texto que describa la imagen')
          img.pst_1(src='@/assets/componentes/com.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-4(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.img350(src='@/assets/curso/tema1/t1-41.svg', alt='Texto que describa la imagen')
    
    .row.mb-5.justify-content-center(data-aos="flip-down")
      .col-12.col-md-10
        .row  
          .col-auto.mb-3.mb-md-0
            figure.trans_1.d-flex.justify-content-center
              img.ps-1(src='@/assets/curso/tema1/t1-16.png', alt='Texto que describa la imagen')
          .col-12.col-md-8.col-lg-10.d-flex.align-items-center
            p.text-bold.mb-0 La mejor metodología para realizar esta técnica es teniendo la primera versión del producto terminado, aunque también se puede realizar sobre un <em>wireframe</em> de baja fidelidad, ya que esta técnica tiene que ver con la evaluación de la interfaz o espacio visual que contiene imágenes y objetos con los que interactúa el usuario y no con las funcionalidades del producto. Lo que se hace es comparar la interfase con el estándar para verificar que se cumplan los parámetros.
    
    .row.mb-3.mb-lg-5.justify-content-center
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.img400(src='@/assets/curso/tema1/t1-42.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8.bg_grad-05(data-aos="fade-right")
        p Las alternativas de texto para contenido no textual, son las que trasmiten el objetivo o la función que realiza la imagen para que cuando el usuario esté interactuando con el producto sepa fácilmente lo que debe hacer. Entre los ejemplos que incluye el estándar está:
        .row.mb-3
          .col-12.col-md-6.mb-3.mb-md-0
            .bgr_6.p-4.h-100
              figure.mb-3
                img.img70(src='@/assets/curso/tema1/t1-44.svg', alt='Texto que describa la imagen')
              p.mb-0 Equivalentes cortos para imágenes como iconos o botones
          .col-12.col-md-6
            .bgr_7.p-4.h-100
              figure.mb-4
                img.img70(src='@/assets/curso/tema1/t1-43.svg', alt='Texto que describa la imagen')
              p.mb-0 Descripción de los datos que representan la imagen
        .row  
          .col-auto
            figure
              img.d-none.d-lg-flex(src='@/assets/componentes/btv.svg', alt='Texto que describa la imagen') 
          .col-12.col-lg-11
            p.mb-0 En la anterior figura se observa cómo se puede representar la función de búsqueda de algún recurso, el cual puede hacerse mediante un icono que en este caso es una lupa o colocar el texto que representa la actividad que deseamos realice el usuario que en este caso es “Buscar”.
    
    .tarjeta.bgr_2.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.d-flex.align-items-center
          img(src="@/assets/curso/tema1/t1-45.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              h3.mb-1 Principios de accesibilidad
              p.mb-0 Conoce las funciones de inspección de accesibilidad para W3C   
            .col-sm-auto
              a.boton.color-acento-botones.colr_2(href="https://www.w3.org/WAI/fundamentals/accessibility-principles/es" target="_blank")
                span Ir a la página
                i.fas.fa-link
    
    separador

    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Método de Indagación
    
    .bloque-texto-a.color-primario.p-3.p-md-3.mb-5(data-aos="flip-up")
      .row.m-0.align-items-center.justify-content-center
        .col-md-6.col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/t1-46.svg', alt='Texto que describa la imagen')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 En este método se investiga acerca de lo que el usuario espera resolver con el producto, por eso es recomendable realizarla en la fase de diseño y también en la fase de terminación, puesto que es estos dos momentos donde se verifica lo que el usuario necesita antes y lo que puede satisfacer cuando hace uso del producto, por eso las diferentes técnicas que se utilizan tienen que ver directamente con el usuario, entre las cuales están:
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fb-N134ko1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Método de test

    .bg_grad-03
      p Este método se utiliza cuando se tiene el prototipo del producto multimedia, para lo cual el diseñador selecciona un grupo de usuarios a los cuales se les asignan diferentes tareas a ser ejecutadas para determinar cómo el sistema entrega los resultados de lo que se le está solicitando. Este método tiene las siguientes técnicas:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-up")
      div(titulo="Técnica de las prestaciones")
        p Esta técnica se utiliza para medir aspectos del uso del producto, por ello se debe llevar a cabo sobre el prototipo o sobre el producto terminado de tal forma que el evaluador pueda visualizar el número de errores que arroja el aplicativo, o las percepciones de los usuarios frente a lo que el producto lo puede beneficiar, por lo que se considera una técnica cuantitativa y cualitativa.
        figure
          img.d-none.d-md-flex(src='@/assets/curso/tema1/t1-47.svg', alt='Texto que describa la imagen')
        .row  
          .col-12
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-47-1.svg', alt='Texto que describa la imagen')
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-47-2.svg', alt='Texto que describa la imagen')
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-47-3.svg', alt='Texto que describa la imagen')
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-47-4.svg', alt='Texto que describa la imagen')
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-47-5.svg', alt='Texto que describa la imagen')
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-47-6.svg', alt='Texto que describa la imagen')
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-47-7.svg', alt='Texto que describa la imagen')

      div(titulo="Técnica pensar en voz alta")
        p Esta técnica se utiliza para conocer lo que piensan los usuarios cuando están interactuando con el aplicativo, determinando el proceso cognitivo que realizan cuando recorren el producto y lo están utilizando. Esta técnica ayuda al desarrollador a identificar la secuencia lógica del usuario y su terminología cuando está usando el aplicativo de tal manera que pueda traducir esto en líneas de código.
        figure
          img.d-none.d-md-flex(src='@/assets/curso/tema1/t1-48.svg', alt='Texto que describa la imagen')
        .row  
          .col-12
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-48-1.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-48-2.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-48-3.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-48-4.svg', alt='Texto que describa la imagen') 
      div(titulo="Técnica de interacción constructiva")
        p Esta técnica se utiliza para conocer cómo varios usuarios pueden interactuar con el producto multimedia sin recibir ningún tipo e instrucción, sólo con la construcción de sus propios modelos mentales para usarlo. Aunque la mayor desventaja de esta técnica es que las personas tienen metodología de aprendizaje y formas de construcción muy diferentes, aspecto que puede dificultar establecer un patrón a seguir en la forma de usar el producto.
        figure
          img.d-none.d-md-flex(src='@/assets/curso/tema1/t1-49.svg', alt='Texto que describa la imagen')
        .row  
          .col-12
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-49-1.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-49-2.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-49-3.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-49-4.svg', alt='Texto que describa la imagen') 
      div(titulo="Técnica de test retrospectivo")
        p Esta técnica se utiliza después de una sesión grabada con el usuario que ha utilizado el producto multimedia. Se dispone al usuario para que vea la grabación y se detenga en los puntos que considere ampliar respecto del funcionamiento, resaltando los aspectos de uso positivos o negativos. La mayor desventaja de esta técnica es que suele tomar más tiempo que las demás si son varios usuarios los que la deben realizar.
        figure
          img.d-none.d-md-flex(src='@/assets/curso/tema1/t1-50.svg', alt='Texto que describa la imagen')
        .row  
          .col-12
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-50-1.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-50-2.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-50-3.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-50-4.svg', alt='Texto que describa la imagen') 
      div(titulo="Técnica del conductor")
        p En esta técnica el experto evaluador conduce al usuario en el recorrido de todas las funciones del producto, de tal manera que a este le quede claro la manera de usarlo. Es una técnica centrada en el usuario que no tiene experiencia con el tipo de producto multimedia que se está desarrollando, para descubrir las necesidades de información que este pueda tener. 
        figure
          img.d-none.d-md-flex(src='@/assets/curso/tema1/t1-51.svg', alt='Texto que describa la imagen')
        .row  
          .col-12
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-51-1.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-51-2.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-51-3.svg', alt='Texto que describa la imagen') 
            img.d-flex.d-md-none(src='@/assets/curso/tema1/t1-51-4.svg', alt='Texto que describa la imagen')  

    
    





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
