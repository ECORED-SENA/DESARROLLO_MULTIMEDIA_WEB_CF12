<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Aplicación de pruebas para la evaluación del proyecto multimedia
    
    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/t2-1.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p Después de diseñar las pruebas para evaluar el producto desarrollado, se procede a comprobar su efectividad aplicándolas con los usuarios reales para determinar si se cumple con los principios y estándares vigentes en materia de accesibilidad, escalabilidad y usabilidad.
        .row.mb-3
          .col-12.col-md-2
            figure
              img.d-none.d-lg-flex(src='@/assets/componentes/bth.svg', alt='Texto que describa la imagen') 
          .col-12.col-lg-10
            p.text-bold Las siguientes técnicas se aplicarán al siguiente estudio de caso “Aplicativo de Comidas Rápidas”
        .cajon.bgr.p-4
          p.mb-0 Un restaurante de comidas rápidas de cierta ciudad posee un aplicativo para ventas online y hace poco implementó la aplicación para dispositivo móviles con sistema operativo Android, por lo que hace que dicho aplicativo se pueda utilizar en cualquier dispositivo sin límite de restricción. Igualmente mejoró el aplicativo introduciendo nuevos productos al menú que se agregan al carro de compras, solicitando dirección de envío y el medio de pago que puede ser cualquiera, ya que antes solo podía recibir pagos de contado y ahora también cuenta con un historial de las compras que ha realizado cada cliente con lo que esperan ofrecer descuentos atractivos. 
    
    .bg_grad-08
      p A continuación, se podrá conocer las diferentes aplicaciones de problemas: 

      h4 Aplicación de la técnica heurística
      p.mb-5   Antes de lanzar el aplicativo al mercado el diseñador decidió hacer una evaluación de usabilidad, accesibilidad y escalabilidad utilizando la prueba heurística.

      h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Fases de la prueba

      .row.mb-5
        .col-12.col-lg-7.mb-3.mb-lg-0(data-aos="fade-left")
          p.mb-5 Selección de los evaluadores expertos en los aspectos de usabilidad, accesibilidad y escalabilidad.
          ul.lista-ul--color.lista-ul--separador.ps-4
            li
              i.fas.fa-check-circle.trans
              | Selección de heurísticas de acuerdo con su especialidad
            li
              i.fas.fa-check-circle.trans
              | Utilización de la métrica de evaluación, elaboración de las preguntas
            li
              i.fas.fa-check-circle.trans
              | Aplicación
            li
              i.fas.fa-check-circle.trans
              | Resultados
        .col-12.col-lg-5(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.img400(src='@/assets/curso/tema2/t2-2.svg', alt='Texto que describa la imagen')
      
      .cajon.bgr.p-4.mb-5(data-aos="flip-down")
        p.mb-0 Para la evaluación se seleccionaron 15 expertos en los aspectos a evaluar: 5 para usabilidad, 5 para accesibilidad y 5 para escalabilidad, cada uno debe evaluar la experiencia que puede tener el usuario cuando ingrese al aplicativo desde su celular.
      
      .bg_grad-09.mb-5
        p Las heurísticas seleccionadas para la evaluación fueron:
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .row
          .col-12.col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
            .bgr_8.p-4.mb-2
              h3 Usabilidad:
              .row
                .col-12.col-lg-3.mb-3.mb-lg-0
                  figure.d-flex.justify-content-center
                    img.img100(src='@/assets/curso/tema2/t2-3.svg', alt='Texto que describa la imagen')
                .col-12.col-lg-9
                  p <b>H1.</b> Visibilidad del estado del sistema
                  p <b>H2.</b> Relación del producto con el mundo real
                  p <b>H3.</b> Libertad al usuario
                  p.mb-0 <b>H7.</b> Flexibilidad y eficiencia de uso
            .bgr_8.p-4.mb-2
              h3 Accesibilidad:
              p.mb-0 <b>H12.</b> Operabilidad
            .bgr_8.p-4
              h3 Escalabilidad: 
              p.mb-0 <b>H15.</b> Funcionamiento en modo asincrónico
          .col-12.col-lg-6(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema2/t2-4.svg', alt='Texto que describa la imagen')
    
    .row.mb-5
      .col-12.col-lg-1
        figure
          img.d-none.d-lg-flex(src='@/assets/componentes/bth.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-11
        p.text-bold Según Fernández (2019), la métrica de evaluación del método heurístico es la que utiliza Nielsen: 
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10.col-lg-8(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Relevancia y frecuencia

        .tabla-a.mb-5.bgr_9 
          table.text-center
            thead
              tr
                th(colspan="3") Relevancia del problema
                th(colspan="2") Frecuencia del problema
              tr
                th Severidad
                th Descripción
                th Prioridad
                th Calificación
                th Porcentaje
            tbody
              tr
                td 4
                td Problema bloqueante
                td Imperativa
                td 4
                td P > 90%
              tr
                td 3
                td Problema graveq
                td Alta
                td 3
                td 50%<P<=90%
              tr
                td 2
                td Problema menor
                td Baja
                td 2
                td 25%<P<= 50%
              tr
                td 1
                td Problema cosmético
                td -
                td 1
                td 10%<P<=25%
              tr
                td 0
                td No supone un problema
                td -
                td 0
                td 0%<P<=10%
    
    ul.lista-ul--color.lista-ul--separador.ps-md-4.mb-5
      li
        i.fas.fa-pen-square.trans_5
        | En la Tabla 1, se observa el grado de severidad de un problema siendo el más alto (4) cuando el problema es bloqueante o le impide al usuario seguir adelante con otra función, es grave (3) cuando el usuario puede utilizar alguna otra función del producto, es menor (2) cuando puede operar el producto aunque presente algunos inconvenientes, es cosmético (1) cuando el producto es utilizable y funcional aunque requiera en algún momento de realizar cualquier tipo de actualización para su óptimo funcionamiento y no supone problema (0) cuando el producto funciona correctamente.
      li
        i.fas.fa-pen-square.trans_5
        | Por su parte en la Tabla 2, se observa la frecuencia con que la heurística no satisface al cliente y le asigna una calificación, es decir que si se obtuvo un 4 es porque más del 90% de las veces el producto presenta fallas, si es de 3 es porque entre el 50 y el 90% el producto no cumple con lo esperado por algún tipo de problemas, si es de 2 quiere decir el producto presenta problemas entre el 10% y 25% de las veces en que es utilizado y si es cero el producto falla máximo el 10% de las veces y se puede considerar que tiene un buen funcionamiento. 
    
    .bloque-texto-a.color-primario.p-3.p-md-3.mb-5(data-aos="flip-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/t2-5.svg', alt='Texto que describa la imagen')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Las preguntas son diseñadas por el experto de acuerdo con las heurísticas seleccionadas, para el estudio de caso, cada aspecto fue probado máximo 5 veces y de allí se tomó la frecuencia para establecer la calificación, ver la tabla:
     
    .row.mb-5.justify-content-center
      .col-12.col-md-10.col-lg-8(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span Heurística

        .tabla-a.mb-5.bgr_9 
          table
            thead
              tr
                th.text-center(style="width:10%") ID
                th(style="width:60%") Heurística
                th(style="width:20%") N° veces de la falla
                th(style="width:10%") %
            tbody
              tr
                td.text-center H1
                td la aplicación presentó fallas al enviar pedido
                td.text-center 4
                td.text-center 80%
              tr
                td.text-center H2
                td La aplicación no permite la utilización de tarjeta de crédito como medio de pago
                td.text-center 0
                td.text-center 0%
              tr
                td.text-center H3
                td La aplicación no permite cancelar el pedido
                td.text-center 5
                td.text-center 100%
              tr
                td.text-center H7
                td La aplicación no permite desplazarse fácilmente entre las opciones del menú 
                td.text-center 5
                td.text-center 100%
              tr
                td.text-center H12
                td Los datos para la expedición de factura no son comprensibles para el usuario  
                td.text-center 3
                td.text-center 60%
              tr
                td.text-center H15
                td Después de realizado el pedido no se puede volver al menú a realizar otro si se desea
                td.text-center 1
                td.text-center 20%
    
    .cajon.bgr.p-4.mb-5(data-aos="flip-up")
      p.mb-0 La anterior tabla muestra las afirmaciones diseñadas para cada heurística, estas también pueden ser preguntas si se desea. El número de veces que se puede dar la falla es cinco (5) ya que es la cantidad de veces que se prueba la afirmación. El porcentaje se halló dividiendo el número de veces de la falla entre el máximo número de fallas el cual es cinco (5).  Si se trasladan los resultados a las tablas de relevancia y frecuencia se obtiene:
    
    .row.mb-5
      .col-12.col-lg-1
        figure.d-flex.justify-content-center
          img.img30.d-none.d-lg-flex(src='@/assets/componentes/btv.svg', alt='Texto que describa la imagen') 
      .col-12.col-lg-11
        p En la siguiente tabla se observa que de acuerdo con lo establecido en las tablas de relevancia y frecuencia, los problemas con mayor prioridad están en las heurísticas H3 y H7 de libertad del  usuario y la eficiencia de uso, con las fallas para cancelar el pedido y desplazarse fácilmente entre las opciones de menú respectivamente. Las heurísticas H2 y H15 no representan un problema para el producto. Lo anterior quiere decir que el producto se debe someter a un rediseño y desarrollo nuevamente de las líneas de código necesarias para subsanar las fallas. 
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10.col-lg-8(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3
          span ID

        .tabla-a.mb-5.bgr_9 
          table.text-center
            thead
              tr
                th(colspan="3") Relevancia del problema
                th(colspan="2") Frecuencia del problema
                th
              tr
                th Severidad
                th Descripción
                th Prioridad
                th Calificación
                th Porcentaje
                th ID
            tbody
              tr
                td 4
                td Problema bloqueante
                td Imperativa
                td 4
                td P > 90%
                td H3, H7
              tr
                td 3
                td Problema graveq
                td Alta
                td 3
                td 50%<P<=90%
                td H1, H12
              tr
                td 2
                td Problema menor
                td Baja
                td 2
                td 25%<P<= 50%
                td 
              tr
                td 1
                td Problema cosmético
                td -
                td 1
                td 10%<P<=25%
                td H15
              tr
                td 0
                td No supone un problema
                td -
                td 0
                td 0%<P<=10%
                td H2

    .bg_grad-10
      h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Aplicación de la técnica recorrido de usabilidad plural
      p La tarea que se asignará a los participantes de la prueba es el registro en el Aplicativo de Comidas Rápidas:

      .row.mb-5
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .bgr_1.p-4.h-100
            figure.mb-3.d-flex.justify-content-center
              img.img110(src='@/assets/curso/tema2/t2-6.svg', alt='Texto que describa la imagen')
            p.mb-0.text-center <b>Participantes:</b> un grupo de usuarios comunes, un grupo de usuarios expertos en diseño/desarrollo y un grupo de usuarios expertos en usabilidad y accesibilidad. 
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .bgr_1.p-4.h-100
            figure.mb-3.d-flex.justify-content-center
              img.img110(src='@/assets/curso/tema2/t2-7.svg', alt='Texto que describa la imagen')
            p.mb-0.text-center <b>Tarea:</b> a las tres categorías de usuarios se les pide realizar el recorrido de las acciones que debería realizar para ejecutar registrarse en el aplicativo. 
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .bgr_1.p-4.h-100
            figure.mb-3.d-flex.justify-content-center
              img.img110(src='@/assets/curso/tema2/t2-8.svg', alt='Texto que describa la imagen')
            p.mb-0.text-center <b>Recorrido:</b> cada usuario deberá escribir en un papel la secuencia de acciones que debe realizar para registrarse en la aplicación de comidas rápidas. 
        .col-12.col-md-6.col-lg-3
          .bgr_1.p-4.h-100
            figure.mb-3.d-flex.justify-content-center
              img.img110(src='@/assets/curso/tema2/t2-9.svg', alt='Texto que describa la imagen')
            p.mb-0.text-center <b>Exposición:</b> cada categoría de usuario deberá exponer la secuencia de acciones que realizaría para llevar a cabo la tarea, después se debatirá para llegar a un consenso sobre el recorrido más sencillo para diligenciar el formato de registro en el aplicativo.
      
      .row.mb-5.justify-content-center(data-aos="flip-down")
        .col-12.col-md-10
          .row  
            .col-auto.mb-3.mb-md-0
              figure.trans_1.d-flex.justify-content-center
                img.ps-1(src='@/assets/curso/tema2/t2-10.png', alt='Texto que describa la imagen')
            .col-12.col-md-8.col-lg-10.d-flex.align-items-center
              p.text-bold.mb-0 En el estudio de caso uno de los resultados que arrojó el debate de los recorridos del formulario de registro es que no se pida confirmación a través de la cuenta de correo electrónico enviado, pues lo que quieren los usuarios es usar el servicio al dar el clic una vez estén registrados tal y como se muestra en la figura anterior.
    
    h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Aplicación de la técnica del recorrido cognitivo 

    figure.position-relative.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/tema2/t2-11.png', alt='Texto que describa la imagen')
      .row.justify-content-center
        .col-11.col-md-10
          .bgr_3.p-4
            p.m-0 En el caso “Aplicación de Comidas Rápidas” se seleccionaron 10 personas y se quiere evaluar el recorrido cognitivo de la tarea: Aspectos funcionales de la pantalla de inicio, con el objetivo e instrucción señaladas. Observar la figura.
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema2/t2-12.png', alt='Texto que describa la imagen')
    
    .cajon.bgr.p-4.mb-5(data-aos="flip-down")
      p.mb-0 En el <em>wireframe</em> anterior se solicita al usuario que haga un recorrido cognitivo respecto a lo que espera encontrar en cada punto encerrado en un círculo, cuando explore la página del sitio de comidas rápidas y las acciones que haría para abrir y cerrar la función. 
    
    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        p.text-bold Lo que debe documentar el experto que haga la prueba por ejemplo en el punto 1 es:
        ul.lista-ul--color.lista-ul--separador.ps-lg-4
          li
            i.fas.fa-check-circle.trans
            span <b>Interfaz:</b> pantalla de inicio de la página del restaurante de comidas rápidas
          li
            i.fas.fa-check-circle.trans
            span <b>Situación de partida del punto 1:</b> cuadro de imagen del restaurante de comidas rápidas
          li
            i.fas.fa-check-circle.trans
            p.text-bold Secuencia de acciones documentadas por el experto: 
              ul.lista-ul--color.mt-3
                li.trans_7
                  i.fas.fa-caret-right.trans_6
                  p Mover el mouse al punto 1 y hacer clic para abrir la función 
                    br
                    br
                    span - <b>Éxito:</b> el usuario describió mover el mouse a la posición indicada
                    br
                    span - <b>Fallo:</b> el usuario no describió la acción de inicios 
                li.trans_7
                  i.fas.fa-caret-right.trans_6
                  p Observar en el cuadro imágenes fotos del restaurante 
                    br
                    br
                    span - <b>Éxito:</b> el usuario describió visualizar fotos del restaurante

                    br
                    span - <b>Fallo:</b> el usuario no describió visualizar fotos
                li
                  i.fas.fa-caret-right.trans_6
                  p Mover el mouse al punto número 2  
                    br
                    br
                    span - <b>Éxito:</b> el usuario describió mover el mouse al punto 2 para cerrar el anterior
                    br
                    span - <b>Fallo:</b> el usuario no describió el cierre del punto anterior  
      .col-12.col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/t2-13.svg', alt='Texto que describa la imagen')


    .row.mb-5.justify-content-center(data-aos="flip-down")
        .col-12.col-md-10
          .row  
            .col-auto.mb-3.mb-md-0
              figure.trans_1.d-flex.justify-content-center
                img.ps-1(src='@/assets/curso/tema2/t2-10.png', alt='Texto que describa la imagen')
            .col-12.col-md-8.col-lg-10.d-flex.align-items-center
              p.text-bold.mb-0 Lo que se espera es que el sitio cumpla con las expectativas de los usuarios colocando los elementos visuales adecuados y determinar si se hacen las acciones correctas para moverse dentro del aplicativo.
    .bg_grad-11
      .row.mb-3.mb-lg-0(data-aos="flip-up")
        .col-12.col-lg-2.col-xl-1.mt-3.mt-lg-0
          figure.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema2/01.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-10.col-xl-11.p-4.p-lg-3
          p.mb-0 La persona que diseña la prueba piloto es quien debe hacer retroalimentación de acuerdo a los ejercicios que arroje la prueba, documentar cada observación realizado por mínima que esta sea, esto le permitirá avanzar en el proceso de rediseño.
    .bg_grad-11
      .row.mb-3.mb-lg-0(data-aos="flip-down")
        .col-12.col-lg-2.col-xl-1.mt-3.mt-lg-0
          figure.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema2/02.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-10.col-xl-11.p-4.p-lg-3
          p.mb-0 Los comentarios o ajustes de cada pantallazo realizados por los usuarios de la prueba piloto deben hacerse al momento de terminar la interfaz, con el fin de que la prueba sea secuencial y no tenga espacios muertos, sino sea de corrido.
    .bg_grad-11
      .row.mb-3.mb-lg-0(data-aos="flip-up")
        .col-12.col-lg-2.col-xl-1.mt-3.mt-lg-0
          figure.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema2/03.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-10.col-xl-11.p-4.p-lg-3
          p.mb-0 Al momento de realizar la prueba piloto es importante contar con la presencia de los creadores de la aplicación, con el fin de que puedan observar el paso a paso del contenido y están al tanto de los posibles cambios de la interfaz.
    .bg_grad-11
      .row.mb-3.mb-lg-0(data-aos="flip-down")
        .col-12.col-lg-2.col-xl-1.mt-3.mt-lg-0
          figure.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema2/04.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-10.col-xl-11.p-4.p-lg-3
          p.mb-0 Muy importante hacer ver a los usuarios de la prueba piloto, que sus comentarios y observaciones son de gran valor, es decir llevarlos a que se sostengan en su criterio y no sea cambiado por algún otro tipo de comentario.
    .bg_grad-11
      .row.mb-5(data-aos="flip-up")
        .col-12.col-lg-2.col-xl-1.mt-3.mt-lg-0
          figure.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema2/05.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-10.col-xl-11.p-4.p-lg-3
          p.mb-0 Para la prueba piloto también es importante que el aspecto de la presentación sea específico, y al mismo tiempo sencillo, con el fin de no generar algún tipo de distracción por parte de los usuarios en el ejercicio de la prueba piloto.
    
    h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Aplicación de la técnica de entrevista 

    p Un ejemplo de entrevista para el caso que se ha venido estudiando <b>“Aplicación de Comidas Rápidas”</b>; es la que puede hacer el diseñador UX (Experiencia de Usuario) al gerente del restaurante; quien tiene toda la información que necesita el aplicativo que se va a utilizar como estrategia para incrementar las ventas:
  
    .row.mb-5.justify-content-center
      .col-12.col-md-10.col-lg-8(data-aos="zoom-out")
        .bgr_10.p-3
          h4.mb-0.text-center Ejemplo de entrevista “Aplicación comidas rápidas”
        .bgr_11.p-4
          ul.lista-ul--color.lista-ul--separador.ps-lg-4
            li
              i.fas.fa-check-circle.trans
              span <b>Introducción</b>
                ul.lista-ul--color.mt-3
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span Saludo
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span Informar de los objetivos de la entrevista
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span Obtener consentimiento para iniciar grabación
            li
              i.fas.fa-check-circle.trans
              span <b>Cuerpo central</b>
                br
                br
                span Interfaz principal del aplicativo
                ul.lista-ul--color.mt-3
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span ¿Qué espera que el usuario vea cuando instale el aplicativo en su dispositivo celular?
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span ¿Cuántas pestañas de navegación desea que tenga el aplicativo?
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span ¿Qué tipo de elementos visuales desea que contenga la pantalla principal?
          ul.lista-ul--color.lista-ul--separador.ps-4
            li
              i.fas.fa-check-circle.trans
              span <b>Tiempo de respuesta</b>
                ul.lista-ul--color.mt-3
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span ¿Qué tiempo aproximado debe tardar el aplicativo a partir de que el usuario seleccione el producto a consumir y realice el pago? “aplicación de comidas rápidas
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span ¿Cuánto es el tiempo máximo para que el aplicativo procese el pedido de un cliente?
          ul.lista-ul--color.lista-ul--separador.ps-4
            li
              i.fas.fa-check-circle.trans
              span <b>Mensajes del aplicativo</b>
                ul.lista-ul--color.mt-3
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span ¿Qué mensaje debería recibir el cliente cuando hace el proceso completo de pedido?
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span ¿Qué mensaje debe indicarle al cliente cuando no realizado bien el proceso de pedido?
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span ¿Qué clase de mensaje puede invitar al cliente a seguir haciendo pedidos?
          ul.lista-ul--color.lista-ul--separador.ps-4
            li
              i.fas.fa-check-circle.trans
              span <b>Despedida y cierre</b>
                ul.lista-ul--color.mt-3
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span Agradecer al participante por su tiempo
                  li.trans_7
                    i.fas.fa-caret-right.trans_6
                    span Detener la grabación
    
    h4.mb-5.bgr_4.p-3.text-white(data-aos="fade-down-right") Aplicación de la técnica de cuestionario

    .bg_grad-09
      p.mb-5 Para el caso que se trae en estudio: <b>“Aplicación de Comidas Rápidas”</b>, un cuestionario puede ser el siguiente:
    
    .row.mb-5.justify-content-center  
      .col-12.col-md-10.col-lg-8(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema2/t2-14.svg', alt='Texto que describa la imagen')
    
    .tarjeta.bgr_2.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.d-flex.align-items-center
          img(src="@/assets/curso/tema2/t2-15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              h3.mb-1 Aplicación técnica test de usabilidad
              p.mb-0 Siguiendo con el caso estudio: <b>“Aplicación de Comidas Rápidas”</b>, se muestra un ejemplo de un test de usabilidad a través del documento que debe descargar, dando clic en la flecha:   
            .col-sm-auto
              a.boton.color-acento-botones.colr_2(:href="obtenerLink('downloads/Anexo_01.pdf')" target="_blank")
                span Descarga
                i.fas.fa-file-download



                  

 























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
