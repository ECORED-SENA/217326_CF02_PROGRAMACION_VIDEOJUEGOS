<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de gestión de proyectos

    .row.justify-content-center
      .col-lg-6.mb-4.mb-md-0(data-aos="fade-right")
        p La gestión eficiente de proyectos es fundamental en la industria de los videojuegos, un sector altamente competitivo y en constante evolución. Las herramientas de gestión de proyectos se convierten en aliadas esenciales para los desarrolladores, permitiéndoles planificar, coordinar y supervisar cada etapa del desarrollo de un videojuego. Estas herramientas facilitan la comunicación entre los diferentes miembros del equipo, aseguran que los recursos se utilicen de manera óptima y ayudan a mantener el proyecto dentro del cronograma y el presupuesto establecidos. En última instancia, la implementación de herramientas de gestión de proyectos contribuye significativamente a la calidad final del videojuego, asegurando que cada elemento se haya perfeccionado y que el producto final cumpla con las expectativas de los usuarios.
      .col-lg-5.col-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img.png', alt='')  


    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Cronograma y Diagramas de Gantt

    .row.align-items-center.justify-content-center.mb-2
      .col-lg-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img2.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        p 
          span.bg-6.px-1.texto-blanco Un cronograma
          |  es una herramienta de gestión de proyectos que ayuda a planificar, organizar y visualizar las tareas y actividades a lo largo de la duración de un proyecto. Proporciona una línea de tiempo clara y detallada, permitiendo a los gestores de proyecto y a los miembros del equipo entender cuándo deben comenzar y finalizar cada tarea, y cómo se solapan e interactúan unas tareas con otras.
        p Los 
          span.bg-6.px-1.texto-blanco Diagramas de Gantt
          |  son una de las formas más populares y efectivas de representar visualmente un cronograma. Nombrados así por su creador, Henry Gantt, estos diagramas utilizan barras horizontales para mostrar la duración de cada tarea a lo largo de un eje de tiempo. Cada barra comienza en el punto de inicio de la tarea y se extiende hasta la fecha de finalización prevista. Esto permite a los equipos visualizar rápidamente el flujo de trabajo del proyecto, identificar posibles cuellos de botella y asegurarse de que los recursos se estén asignando eficientemente.

    .row.justify-content-center.mb-2
      .col-lg-10.mb-4
        .bg-2.p-4.h-100
          p.mb-0 La utilización de cronogramas y Diagramas de Gantt es particularmente útil en proyectos complejos con múltiples tareas interdependientes, como el desarrollo de videojuegos. Ayudan a coordinar las actividades de diferentes departamentos y especialidades, asegurando que todos los elementos del juego, desde el diseño y la programación hasta la música y los gráficos, se integren sin problemas y se completen a tiempo. En definitiva, estas herramientas son cruciales para mantener el proyecto organizado, en curso y dentro de los plazos y el presupuesto establecidos.
      .col-lg-2.mb-4
        img(src='@/assets/curso/temas/t2/img3.png', alt='')

    p.mb-4(data-aos="fade")  A continuación, se presentará el siguiente video para profundizar sobre el tema:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WkDndhBadWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Cronograma y Diagramas de Gantt


    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Scrum

    p.mb-4(data-aos="fade") Scrum es un marco de trabajo ágil de muy amplio uso en la industria del #[em software], que se fundamenta en los valores y principios ágiles definidos (Manifiesto Ágil, 2001) y donde se definen tres pilares fundamentales según (SCRUMstudy, 2013) los cuales se describen a continuación:

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-7.mb-4(data-aos="fade-right")
        .bg-5.p-4
          h4 #[t-color1 Transparencia]
          p.mb-4 Hace referencia a que cualquier proceso de Scrum puede ser conocido por cualquiera. Esto es posible por medio de eventos como:
          ul.lista-ul--color.fa-ul.mb-0
            li 
              i.fas.fa-gamepad
              | Las reuniones de revisión y reuniones diarias. 
            li 
              i.fas.fa-gamepad
              | Artefactos como la pila de producto.
            li 
              i.fas.fa-gamepad
              | Cronogramas de lanzamiento. 
            li 
              i.fas.fa-gamepad
              | Documentos de visión del proyecto.
            li 
              i.fas.fa-gamepad
              span.mb-0 Instrumentos de seguimiento, como: el burndown chart o el tablero de Scrum (#[em Scrum board]).
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img4.png', alt='')

    .row.fondo-t2.align-items-center.py-4.py-lg-0.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-10.mb-5(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 2.] Marco de trabajo Scrum
            figure
              img(src='@/assets/curso/temas/t2/fig2.svg', alt='Infografía que representa el proceso Scrum, desde las entradas iniciales hasta la entrega de un producto. Se destacan roles como el Product Owner y el Scrum Master, y etapas clave como el Product Backlog, Sprint Backlog y reuniones diarias, culminando en la revisión y retrospectiva del sprint.') 
            figcaption.mt-3 Nota. Tomada de pngwing.com (s.f.) 
          
          .col-12.mb-5(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 3.] Fábula roles de Scrum
            figure
              img(src='@/assets/curso/temas/t2/fig3.png', alt=' El cómic consta de tres paneles en los que una gallina y un cerdo conversan sobre la idea de abrir un restaurante. En el primero, la gallina propone la idea, mientras que el cerdo, curioso, pregunta cómo se llamaría. En el segundo panel, la gallina imagina un plato de jamón y huevos, sugiriendo el nombre Jamón con Huevos. Sin embargo, en el último panel, el cerdo reacciona con sorpresa y humor, señalando que mientras él estaría comprometido en el plato, la gallina sólo estaría involucrada, haciendo un juego de palabras sobre los ingredientes y su participación en el plato propuesto.') 
            figcaption.mt-3 Nota. Tomada de implementingscrum.com (2006).

          p.mb-4(data-aos="fade") Por otro lado hay tres roles centrales dentro del marco de trabajo de Scrum (SCRUMstudy, 2013) que se describen a continuación: 

          h4(data-aos="fade") #[t-color1 Roles de Scrum]
          
          .row.justify-content-center(data-aos="fade-down")
            .col-lg-4.col-md-6.mb-4
              .bg-1.br-10.p-4.text-white.h-100
                img.m-auto.mb-4(src='@/assets/curso/temas/t2/tarj-ico1.svg', alt='', style="width: 110px;")
                .bg-6.w-fit.m-auto.px-2.mb-4
                  h5 Dueño del producto (#[em Product Owner])
                p Persona con amplio conocimiento en el negocio del cliente, sus necesidades y las tendencias del mercado para el área específica. Este rol está encargado de maximizar el valor de negocio entregado al cliente y es el único responsable del control del #[em Product Backlog] (requerimientos) y su priorización. Este también representa al cliente en algunos procesos de demostración de avances y determina cuándo aprobar o no una entrega.
            .col-lg-4.col-md-6.mb-4
              .bg-1.br-10.p-4.text-white.h-100
                img.m-auto.mb-4(src='@/assets/curso/temas/t2/tarj-ico2.svg', alt='', style="width: 110px;")
                .bg-6.w-fit.m-auto.px-2.mb-4
                  h5 #[em Scrum Master]
                p Es un rol que se encarga de facilitar los procesos al interior del equipo de trabajo, removiendo cualquier impedimento y apoyando procesos de empoderamiento personal, debe velar porque los elementos propios del marco de trabajo Scrum se apliquen de manera correcta.
            .col-lg-4.col-md-6.mb-4
              .bg-1.br-10.p-4.text-white.h-100
                img.m-auto.mb-4(src='@/assets/curso/temas/t2/tarj-ico3.svg', alt='', style="width: 110px;")
                .bg-6.w-fit.m-auto.px-2.mb-4
                  h5 Equipo de desarrollo (#[em Developer Team]) 
                p Son los responsables de la transformación de los requerimientos en código ejecutable a ser usado por el cliente, pero también son responsables de la planificación de las iteraciones, establecimiento de características para tener en cuenta en la verificación de un requerimiento terminado y presentación de avances a los clientes. Generalmente, es un equipo autoorganizado y autogestionado.  

    p.mb-4(data-aos="fade") Además de los roles, Scrum define un conjunto de eventos con participantes y objetivos claros que se desarrollan en momentos particulares del flujo general de Scrum, a continuación, se detalla cada uno de estos:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t2/img-infog.svg', alt='El diagrama ilustra el proceso de Scrum centrado en un Sprint de un mes de duración. Este ciclo empieza con una Planificación del Sprint que se extiende por 8 horas, seguido de Reuniones diarias de 15 minutos que ocurren a lo largo del mes. Al finalizar el Sprint, se realiza una Revisión del Sprint de 4 horas, culminando con una Reunión de retrospectiva de 3 horas. ')

          .tarjeta.bg-5.p-3(x="55%" y="24.5%" numero="+")
            p.mb-0 #[b #[em Sprint:]] es el corazón de Scrum y se refiere a una iteración que está acotada generalmente por un lapso entre 2 y 4 semanas donde se realiza un ciclo completo de actividades de análisis, diseño, construcción y pruebas para desarrollar una versión del producto potencialmente entregable al cliente.
          .tarjeta.bg-5.p-3(x="84%" y="53%" numero="+")
            p.mb-0 #[b Planeación del #[em Sprint]:] reunión realizada justo antes del inicio de un #[em Sprint] donde se definen el subconjunto de requerimientos (#[em Sprint Backlog]) a ser desarrollados en los siguientes y cómo será el proceso requerido para hacer la entrega, lo cual incluye detallar los requerimientos en tareas concretas, estimación de tiempos/esfuerzo y distribución inicial de responsabilidades. Dependiendo de la duración del #[em Sprint] este tiempo de planificación puede variar, pero la métrica establecida para un #[em Sprint] de 4 semanas corresponde a una planeación de #[em Sprint] de 8 horas.
          .tarjeta.bg-5.p-3(x="56%" y="84.5%" numero="+")
            p.mb-0 #[b Revisión del #[em Sprint]:] reunión realizada al finalizar el #[em Sprint] donde el equipo de desarrollo muestra los resultados. Para un #[em Sprint] de 4 semanas se usan reuniones de revisiones 4 horas.
          .tarjeta.bg-5.p-3(x="30.5%" y="52.5%" numero="+")
            p #[b Reunión de retrospectiva:] esta es la última, se realiza luego de la revisión del #[em Sprint] y tiene como objetivo la autoevaluación personal y del grupo sobre el desempeño del Sprint que acaba de finalizar. En esta se identifican y documentan los aprendizajes por medio de diferentes técnicas en las que generalmente se busca dar respuesta a las siguientes preguntas: 
            p.mb-0 ¿Qué funcionó bien y se debe seguir haciendo?
            p.mb-0 ¿Qué no funcionó bien y se debe dejar de realizar? 
            p ¿Qué debemos empezar a mejorar?
            p.mb-0 Para un Sprint de 4 semanas se utilizan 3 horas para esta reunión.
          .tarjeta.bg-5.p-3(x="55.5%" y="55%" numero="+")
            p.mb-0 #[b Reunión diaria (#[em Daily Meeting])]: reunión realizada generalmente al inicio de cada día donde el equipo de trabajo informa en que ha venido trabajando, qué cosas realizará en el día y qué problemas se le han presentado. Esta es corta, se realiza de pie y debe tener una duración alrededor de los 15 minutos, por lo que, se alinea con los pilares de transparencia e inspección.

    p.mb-4(data-aos="fade") Finalmente, el marco de trabajo Scrum define un conjunto de artefactos diseñados para registrar y gestionar información clave, con el fin de respaldar los tres pilares fundamentales del método. Estos artefactos también proveen información valiosa a lo largo de todo el proceso de desarrollo de software. Entre los artefactos más representativos de Scrum se incluyen los siguientes:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 4.] Burndown Chart
        figure
          img(src='@/assets/curso/temas/t2/fig4.svg', alt='La figura muestra una Gráfica Sprint Burndown que representa el progreso de un proyecto a lo largo de 10 días.') 
          figcaption.mt-3 Nota. Tomada de intl-blog.imgix.net (2019). 
      .col-lg-5.mb-4(data-aos="fade-left")
        .bg-2.p-4.p-lg-5.h-100
          p.mb-0 Tablero de Scrum (#[em Scrumboard]): es un elemento visual donde se integra la mayor parte de los elementos del marco de trabajo Scrum, en él se indica la carga de trabajo, el estado actual de cada una de las actividades y sus respectivos responsables. Este es un elemento que se sincroniza de manera permanente y facilita la implementación de los pilares de transparencia, inspección y adaptabilidad. Si bien se aconseja el uso de un tablero, existen diferentes tipos de herramientas digitales que permiten la implementación de un tablero de Scrum.

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 5.] Tablero de Scrum
        figure
          img(src='@/assets/curso/temas/t2/fig5.svg', alt='La figura muestra un tablero de tareas de Scrum con columnas que indican las fases del proceso: desde la concepción de tareas en el Product Backlog hasta su finalización o bloqueo. Las tarjetas de colores representan tareas en diferentes estados de avance.') 




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
