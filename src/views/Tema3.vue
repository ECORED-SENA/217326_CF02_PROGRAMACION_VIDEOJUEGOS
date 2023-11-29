<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Idea general del videojuego

    p.mb-4(data-aos="fade") Cuando se está pensando en diseñar un videojuego, es importante comenzar con la idea general del juego. Algunos pasos que pueden ayudar a crear esa idea del juego son: 

    .row.fondo-t3.align-items-center.py-4.py-lg-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.justify-content-center(data-aos="fade-down")
            .col-lg-4.col-md-6.mb-4
              .bg-2.br-10.p-4.text-center.h-100
                img.m-auto.mb-4(src='@/assets/curso/temas/t3/tarj-ico1.svg', alt='', style="width: 110px;")
                h5 a. Hacer una lluvia de ideas
                p Ejemplo lluvia de ideas: niño aventurero, explora, animales, extraterrestre, niño desjuiciado, desaparecido, escape, lucha, monstruos, mamá, busca comida, perdida en bosque, medallones para regresar y avanzar, alimentar el niño, duende, explora ambientes uno frío y uno cálido, busca de medallones, monedas de oro, pasa niveles recolectando, árboles, bosque, noche, día, puente, muerte, mundo, dios, flores, frutas, mago.
            .col-lg-4.col-md-6.mb-4
              .bg-3.br-10.p-4.text-center.h-100
                img.m-auto.mb-4(src='@/assets/curso/temas/t3/tarj-ico2.svg', alt='', style="width: 110px;")
                h5 b. Escoger la temática 
                p Se recomienda crear la temática a partir de las ideas más relevantes que surjan de la lluvia de ideas para armar su propia temática. Ejemplo temático: Flynn: niño perdido en un bosque, busca frutos para ayudar a su madre a curarse de una enfermedad terminal.
            .col-lg-4.col-md-6.mb-4
              .bg-2.br-10.p-4.text-center.h-100
                img.m-auto.mb-4(src='@/assets/curso/temas/t3/tarj-ico3.svg', alt='', style="width: 110px;")
                h5 c. Buscar referentes de videojuegos
                p Ya sean internacionales o nacionales, parecidos a la temática elegida. Esto ayudará a ampliar las ideas y a tener una idea más completa del videojuego que se quiere diseñar. 
          
          p.mb-4(data-aos="fade") Ejemplo de referentes de videojuegos:

          .fondo2-t3.p-4(data-aos="fade-down")
            .row.justify-content-center
              .col-lg-4.col-md-6.mb-4
                .bg-white.tarjeta.h-100.p-4
                  h5.text-center.mb-4 Videojuego Limbo
                  img(src='@/assets/curso/temas/t3/tarj-img1.png', alt='')
              .col-lg-4.col-md-6.mb-4
                .bg-white.tarjeta.h-100.p-4
                  h5.text-center.mb-4 Videojuego Do animals dream?
                  img(src='@/assets/curso/temas/t3/tarj-img2.png', alt='')
              .col-lg-4.col-md-6.mb-4
                .bg-white.tarjeta.h-100.p-4
                  h5.text-center.mb-4 Little nightmares
                  img(src='@/assets/curso/temas/t3/tarj-img3.png', alt='')


    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Personajes

    p.mb-4(data-aos="fade") Los personajes en los videojuegos están generalmente definidos por los arquetipos de personalidades que entran en juego a la hora de narrar la historia que se va a desarrollar. En ellos, es posible encontrar diversidad de elementos, con unas características marcadas en cuanto a su forma de ser. Cabe destacar ciertos elementos que van a contribuir a la construcción de un personaje:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-4 px-lg-5" data-aos="fade-down")
      .row(titulo="Personalidad")
        .col-md-11
          p Definir, según el arquetipo, qué tipo de personaje va a ser el protagonista o antagonista, cómo es su carácter, qué lo motiva, qué lo hiere, qué le gusta y disgusta, todo ello para forma su personalidad, que es la que finalmente determina cómo se comporta el personaje, cómo camina, cómo se mueve, cómo se expresa, si es efusivo o si es introvertido.
      .row(titulo="Aspecto")
        .col-md-11
          p Basados en su personalidad, se va construyendo su aspecto. En este punto, se define cómo lucirá el personaje, su género, sus características físicas, si es alto o bajo, ancho o delgado, si es joven o viejo, si es morfológicamente humanoide o animal.
      .row(titulo="Estilo visual")
        .col-md-6
          p En este apartado es donde se decide la dirección artística del personaje y demás elementos, si se busca que se vea realista, para darle un enfoque más dramático, cercano a la realidad, con texturas y modelados detallados, o si se busca transmitir una sensación de fantasía y cuento de hadas, en cuyo caso, se optaría por un estilo tipo cell shading, que transmita esa ambientación. Estilos minimalistas, tipo cartoon o anime entre otros.
        .col-md-5
          img(src='@/assets/curso/temas/t3/acord-img1.png', alt='')
      .row(titulo="Thumbnails")
        .col-md-6
          p En este paso, es donde comienza la exploración del proceso de diseño, se empiezan a hacer bocetos pequeños para explorar ideas que puedan funcionar o descartarse. Un punto a tener en cuenta es la creación de la silueta del personaje, para ver cómo se reconoce en la visualización; para ello, por ejemplo para un juego 2D lateral de plataformas, se crean thumbnails de la silueta en varias posiciones, teniendo en cuenta la vista lateral de la cámara. En igual caso, si el juego se viera en vista cenital, las siluetas deberían hacerse teniendo en cuenta esta vista.
        .col-md-5
          img(src='@/assets/curso/temas/t3/acord-img2.png', alt='')
      .row(titulo="Paleta de colores")
        .col-md-11 
          p.mb-4 La selección de la paleta de colores es fundamental, puesto que dota de carácter y personalidad. Esta paleta de colores debe ser coherente e ir en sintonía con el juego y el personaje. Un ejemplo de ello es la paleta de colores de Super Mario Bros., que viene fuertemente marcada por rojos y ocres, para el personaje, y amarillos verdes y azules, para escenarios.
        .row.justify-content-center
          .col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 6.] Paleta de colores ejemplo de Super Mario Bros.
            figure
              img(src='@/assets/curso/temas/t3/fig6.png', alt='') 
      .row(titulo="Identidad")
        .col-md-11 
          p.mb-4 En este punto debemos tener elementos que ayuden a definir ciertas características del personaje, para que a primera vista sean fácilmente identificables, como brazos largos o piernas desproporcionadas, para resaltar ciertas cualidades físicas; todo ello de la mano con los modeladores de personajes, pues, en trabajo conjunto, finalmente se desarrolla todo el personaje, donde queda listo su lenguaje corporal, sus elementos característicos y objetos que lo acompañarán.
        .row.justify-content-center
          .col-md-8
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 7.] Doce arquetipos de personalidad de Carl Gustav Jung
            figure
              img(src='@/assets/curso/temas/t3/fig7.svg', alt='') 

    .row.justify-content-center.align-items-center
      .col-lg-5.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/img.png', alt='')
      .col-lg-7.mb-4(data-aos="fade-left")
        .bg-1.br-10.p-4
          h5.text-white.mb-1 Ficha técnica de un personaje
          p.text-white.mb-4 Observe el ejemplo de la ficha técnica de identidad para un personaje principal.
          .row
            .col-lg-7
              a.anexo(:href="obtenerLink('/downloads/Ejemplo_ficha_tecnica_personaje.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo.] Ejemplo de la ficha técnica de un personaje.

        
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Narración

    p.mb-4(data-aos="fade") Es la forma como se cuentan los sucesos o acciones llevados a cabo por uno o más personajes que se encuentran en un contexto espacio-temporal y que van dando forma a la historia. Los personajes son el corazón del videojuego, ya que la historia no puede existir sin ellos, pues son quienes llevan a cabo las acciones y la sucesión de eventos que dan vida al relato, cuento o novela. 

    .fondo-subt.w-fit.pe-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white.mb-4
        .col-auto 
          img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='')
        .col-auto 
          h3.mb-0 Tipos de narrador

    p.mb-4(data-aos="fade") Hay varios tipos de narradores, entre ellos está el que todo lo ve (omnisciente) y todo lo sabe, es decir, es quien describe todo lo que sucede incluso lo que están pensando los personajes: 

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-4.col-8.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/img2.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-gamepad
            span.mb-0 #[b #[t-color1 El narrador testigo:]] cuenta las cosas como si las hubiese visto, tal cual sucedieron, lo hace en tercera persona y lo puede hacer en presente o pasado. Es importante saber qué tipo de testigo es, por ejemplo, un niño, un profesor, un bombero, un mago.
          li 
            i.fas.fa-gamepad
            span.mb-0 #[b #[t-color1 El narrador protagonista:]] relata la historia desde su punto de vista, como si le hubiese pasado a él. Hay que tener en cuenta que es el personaje quien relata, por ello se debe usar su personalidad. 
          li 
            i.fas.fa-gamepad
            span.mb-0 #[b #[t-color1 Trama o argumento:]] hay otros tipos de narradores que van describiendo o contando desde diferentes puntos de vista lo que va sucediendo.

    .fondo-subt.w-fit.pe-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white.mb-4
        .col-auto 
          img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='')
        .col-auto 
          h3.mb-0 Características de la historia

    p.mb-4(data-aos="fade") En la poética de Aristóteles, se definen las características esenciales que conforman una historia:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/tarj2-ico1.svg' alt='')
          .tarjeta.bg-5
            .p-4 
              p.mb-0 #[b Fábula:] trama o argumento que corresponde a la sucesión de eventos que se van a ir narrando y describiendo en la historia que se quiere contar. 
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/tarj2-ico2.svg' alt='')
          .tarjeta.bg-5
            .p-4 
              p.mb-0 #[b Personajes:] el segundo gran elemento de las historias son sus protagonistas y antagonistas, sin ellos no tendrían ningún sentido. De ellos depende el buen desarrollo de la historia, pues a su alrededor gira todo. El éxito de un videojuego siempre va a estar ligado a la profundidad de los personajes.
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/tarj2-ico3.svg' alt='')
          .tarjeta.bg-5
            .p-4 
              p.mb-0 #[b Pensamiento:] es el tema, es decir,  en qué se va a enfocar la historia dentro de los diferentes géneros: terror, comedia, policial, drama, entre otros. Se debe destacar una idea principal, como la venganza, el amor, la ecología, los zombis, los virus, la destrucción de la humanidad, etc. El tema de la historia, en cierta medida, establece la mecánica del juego, el contenido y su expresión artística; elementos que definen qué tan interesante será el videojuego.
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/tarj2-ico4.svg' alt='')
          .tarjeta.bg-5
            .p-4 
              p.mb-0 #[b Elocución o diálogo:] le da importancia a lo que dicen los protagonistas, es decir, al tono de su voz, la forma como se expresan y el uso de las palabras; esto ayuda a crear una identidad única y singular a cada uno de ellos. Por ejemplo, un personaje científico se expresa de manera muy distinta a un personaje guerrero, demostrando diferentes capacidades intelectuales o culturales.
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/tarj2-ico5.svg' alt='')
          .tarjeta.bg-5
            .p-4 
              p.mb-0 #[b Melopeya:] la melodía o música tiene un enorme grado de importancia en la narrativa, ya que acompaña la creación y desarrollo de la historia y le da vida a través de la ambientación de los diferentes escenarios o niveles del videojuego, transmitiendo diferentes sensaciones o emociones al jugador.

    .row.fondo3-t3.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row

          .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
            .row.d-flex.align-items-center.text-white
              .col-auto 
                img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='')
              .col-auto 
                h3.mb-0 Estructura narrativa en 3 actos

          p.mb-4(data-aos="fade") El formato estándar de cualquier historia, incluida la de los videojuegos, empieza con: 

          .row.align-items-center.justify-content-center.mb-3
            .col-lg-4.col-8.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t3/img3.png', alt='')
            .col-lg-8.mb-4(data-aos="fade-left")
              .tarjeta.bg-white.p-4.py-5
                SlyderA(tipo="b" data-aos="fade-down")
                  .row.justify-content-center
                    .col-md-11
                      h5 #[b #[t-color1 Primer acto (planteamiento)]]
                      p Se inicia con el planteamiento, donde se presenta el personaje realizando algún tipo de acción en un mundo o escenario. Después de eso, ocurre un primer giro (detonante o conflicto), evento que cambia completamente la historia. Por ejemplo, el protagonista se da cuenta de que el antagonista está destruyendo el bosque, por ello debate sobre qué hacer y es aquí donde decide cruzar el umbral del cual no tendrá regreso. 
                  .row.justify-content-center
                    .col-md-11
                      h5 #[b #[t-color1 Segundo acto (nudo)]]
                      p En el camino se encuentra con diversos obstáculos, durante su trayecto decide entrenar para enfrentarlos, pero tiene dificultades, se siente en conflicto consigo mismo y se siente debilitado o inseguro de continuar, hay una crisis; es aquí donde se presenta un segundo giro, el héroe encuentra lo que puede hacer para fortalecerse.
                  .row.justify-content-center
                    .col-md-6
                      h5 #[b #[t-color1 Tercer acto]]
                      p Luego de esto, se produce un incremento de la acción hasta alcanzar un punto máximo en la historia, llamado clímax, enfrentamiento entre el protagonista y el antagonista mayor. Aquí puede ser que el protagonista gane la batalla, por lo tanto, la acción decae hasta que se produce una resolución, donde se da solución al conflicto; y, posteriormente, el desenlace o cierre de la historia, el cual puede ser parcial, si se trata de atraer jugadores hacia una segunda parte del videojuego.
                    .col-md-5   
                      .titulo-sexto.color-acento-contenido.mb-3
                        p.mb-0 #[b Figura 8.] Estructura narrativa
                      figure
                        img(src='@/assets/curso/temas/t3/fig8.png', alt='')

    .row.align-items-center.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p Para diferenciar un poco mejor la #[b narrativa formal] de la #[b narrativa interactiva], es posible realizar una comparación entre las películas y los videojuegos. 
        p #[b Las películas] generalmente se desarrollan lineal y secuencialmente, donde existe un planteamiento, incidente inicial, clímax, resolución y desenlace, que ya tienen un orden específico preestablecido, de escena en escena, hasta llegar al final, sin que se pueda alterar dicho orden. Es decir, no se puede intervenir y el espectador tiene un rol pasivo (aunque existen algunas excepciones). 
        p Por otro lado, #[b los videojuegos] presentan los mismos elementos, pero con un desarrollo ramificado que brinda al jugador la posibilidad de interactuar y elegir lo que pasa en la historia, gracias a las decisiones que toma. Es decir, un jugador que se encuentra en el primer nivel se encuentra en tres puertas, A, B y C, y debe decidir cruzar una de ellas. En cada una de esas habitaciones, encontrará un desafío diferente, que lo conduce a un segundo nivel. De la misma forma, puede avanzar hacia tres puertas más, que lo pueden llevar al tercer nivel o, incluso, devolverlo al inicio. Todo esto está controlado por el guionista o escritor, pero le da una sensación de control al jugador. Realmente, es un engaño y un gancho para tener atrapado al jugador y darle versatilidad al videojuego.
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Ficha técnica de un personaje
                  p.mb-0 Revise el ejemplo proporcionado de una ficha técnica de identidad para un personaje principal, que se encuentra en el archivo adjunto.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ejemplo_ficha_tecnica_personaje.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-4.col-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img4.png', alt='')


    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Teoría básica luces y sombras

    .row.align-items-center.justify-content-center
      .col-lg-7.mb-4(data-aos="fade-right")
        p ¿Cómo se afecta la percepción de los objetos según la clase de luz que los ilumina? Estos van a mostrar ciertas características gracias al tipo de iluminación que se utiliza.  Es posible distinguir ciertos aspectos de los elementos, tales como su color, textura, volumen, forma, ubicación en el espacio, entre otros, los cuales pueden variar debido al uso de un tipo de iluminación en particular. Gracias a las luces y sombras, es posible percibir la forma tridimensional de un objeto, por eso es preciso mencionar que hay que tener en cuenta qué tipo de iluminación está afectando nuestra escena; para ello, a continuación, se mencionan los tipos de luces que se implementan:
      .col-lg-5.col-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img5.png', alt='')

    .row.fondo4-t3.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .tarjeta--container.row.mb-5
            .col-md.tarjeta.fondo-tarjc1.text-white.p-5
              .row.mb-4
                .col-4
                  figure
                    img(src='@/assets/curso/temas/t3/tarj3-ico1.svg', alt='')
              .bg-6.w-fit.mb-4.px-4.py-2
                h5.mb-0 Luz natural
              p La luz natural es la que emite el sol y se proyecta sobre los cuerpos, pero varía según la hora del día. Por ello, es posible notar el momento del día según la posición del sol. Asimismo, las sombras variarán y será posible ver que, según se mueva el sol, las sombras serán más largas o más cortas sobre el piso, las sombras de los objetos serán marcadas de forma dura y densa. Esto puede variar solo cuando se encuentra un cielo nublado, el cual sirve de filtro, lo que hará que la luz sea menos densa y las sombras sean más tenues, menos marcadas. La hora del día también influirá en cómo se ve cualquier objeto, si se ve más frío o más cálido.
            .col-md.tarjeta.fondo-tarjc2.text-white.p-5
              .row.mb-4
                .col-4
                  figure
                    img(src='@/assets/curso/temas/t3/tarj3-ico2.svg', alt='')
              .bg-6.w-fit.mb-4.px-4.py-2
                h5.mb-0 Luz artificial
              p La luz artificial sería toda aquella producida por linternas, lámparas, bombillos, fogatas, velas, antorchas, entre otras. Puede propagarse de forma recta o radial, puede tener diferentes posiciones y orientaciones, así como también variedad de colores, intensidades y texturas

          .tarjeta.bg-white.bx-sw.p-4.p-lg-5.mb-5
            SlyderE(indicadores="derecha")
              .row.justify-content-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Aspectos importantes de la luz
                  ul.lista-ul--color.fa-ul
                    li.mb-4 
                      i.fas.fa-gamepad
                      span.mb-0 #[b Luz directa:] es la luz que se emite desde una fuente propia, por ejemplo, el sol, bombillos, antorchas.
                    li.mb-4 
                      i.fas.fa-gamepad
                      span.mb-0 #[b Luz reflejada:] es la luz que se recibe de un cuerpo u objeto que la refleja, pero no es propia de él; un ejemplo de ello serían las luces que llegan a los objetos luego de rebotar en superficies metálicas.
                    li.mb-4 
                      i.fas.fa-gamepad
                      span.mb-0 #[b Dirección de la luz:] es la posición del foco de luz con respecto al elemento que vamos a iluminar.
                    li 
                      i.fas.fa-gamepad
                      span.mb-0 #[b Luz frontal:] situada frente al objeto.
                .col-md-5
                  img(src='@/assets/curso/temas/t3/slider-img1.png', alt='')    
              .row.justify-content-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Aspectos importantes de la luz
                  ul.lista-ul--color.fa-ul
                    li
                      i.fas.fa-gamepad
                      span.mb-0 #[b Luz lateral:] situada a alguno de los lados del objeto.
                .col-md-5
                  img(src='@/assets/curso/temas/t3/slider-img2.png', alt='')  
              .row.justify-content-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Aspectos importantes de la luz
                  ul.lista-ul--color.fa-ul
                    li
                      i.fas.fa-gamepad
                      span.mb-0 #[b Luz cenital:] Situada arriba del objeto. 
                .col-md-5
                  img(src='@/assets/curso/temas/t3/slider-img3.png', alt='')  
              .row.justify-content-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-4 Aspectos importantes de la luz
                  ul.lista-ul--color.fa-ul
                    li
                      i.fas.fa-gamepad
                      span.mb-0 #[b Contraluz:] Esta luz se sitúa detrás del objeto.
                .col-md-5
                  img(src='@/assets/curso/temas/t3/slider-img4.png', alt='')  

          .row
            .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
              .row.d-flex.align-items-center.text-white
                .col-auto 
                  img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='')
                .col-auto 
                  h3.mb-0 Intensidad de la luz 

            p.mb-4(data-aos="fade") Las propiedades de la luz cuando golpean al objeto se pueden clasificar de dos maneras principales, que son:

            .tarjeta--container.row.mb-5
              .col-md.tarjeta.fondo-tarjc1.text-white.p-5
                .bg-6.w-fit.mb-4.px-4.py-2
                  h5.mb-0 Luz dura
                p Se genera por una fuente con foco intenso, esta va a generar sombras más marcadas y más oscuras.
                img(src='@/assets/curso/temas/t3/tarj2-img1.png', alt='')
              .col-md.tarjeta.fondo-tarjc2.text-white.p-5
                .bg-6.w-fit.mb-4.px-4.py-2
                  h5.mb-0 Luz suave
                p Se genera cuando la fuente de luz se extiende y se dispersa, como sería el caso de los rayos del sol filtrados por nubes, o una bombilla con un pedazo de tela, o una lámpara, lo cual hace que la luz se difumine y produzca sombras transparentes no tan perceptibles como con la luz dura.
                img(src='@/assets/curso/temas/t3/tarj2-img2.png', alt='')


    .fondo-subt.w-fit.pe-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white.mb-4
        .col-auto 
          img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='')
        .col-auto 
          h3.mb-0 Aspectos importantes de las sombras

    p.mb-4(data-aos="fade") Las sombras cumplen un papel fundamental en cualquier composición, pues ayudan a generar volumen a los objetos. Se pueden clasificar de tres maneras:

    .row.justify-content-center.mb-3
      .col-lg-6.mb-4
        ul.lista-ul--color.fa-ul
          li.mb-4
            i.fas.fa-gamepad
            span.mb-0 #[b Sombras propias:] son las sombras que se encuentran en los objetos, en las partes del mismo donde la luz no alcanza a llegar. 
          li.mb-4
            i.fas.fa-gamepad
            span.mb-0 #[b Sombras proyectadas:] son las sombras que un objeto proyecta sobre la superficie donde se encuentra estacionado.
          li
            i.fas.fa-gamepad
            span.mb-0 #[b Sombra reflejada:] son las sombras que el objeto genera en otro objeto cercano a este.
      .col-lg-6.mb-4
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 9.] Ejemplo de luces y sombras afectando a un grupo de objetos
        figure
          img(src='@/assets/curso/temas/t3/fig9.png', alt='')  

    .row.fondo5-t3.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row 

          .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
            .row.d-flex.align-items-center.text-white
              .col-auto 
                img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='')
              .col-auto 
                h3.mb-0 Triángulo básico de iluminación

          p.mb-4(data-aos="fade") Es el set adecuado para iluminar una escena y así conseguir resultados efectivos. Este esquema situaría la luz principal, una luz de relleno y la contraluz, que se complementan entre sí. La luz principal se sitúa hacia el objeto, la luz de relleno va al lado opuesto, con una intensidad más baja, y la contraluz se sitúa por detrás, para darle profundidad a la escena.

          .row.align-items-center.justify-content-center
            .col-lg-5
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 10.] Triangulo de iluminación
              figure
                img(src='@/assets/curso/temas/t3/fig10.png', alt='')  


    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Guion técnico
    
    p.mb-4(data-aos="fade") En el guion técnico también se describen las indicaciones técnicas precisas, como la división en planos, el encuadre que delimita el espacio, estableciendo dónde empieza y termina el cuadro. También se elige el ángulo de la cámara, dependiendo de la altura o punto de vista en que se graben los movimientos de la cámara, que pueden ser físicos u ópticos (de las lentes); los detalles de iluminación, los sonidos concretos y la música que acompaña cada escena. 

    .row.align-items-center.justify-content-center
      .col-lg-7.mb-4(data-aos="fade-right")
        p Es importante escribir la hora de la escena, si es de día, en la tarde o en la noche. Asimismo, si es una escena en el espacio exterior, o en un espacio interno. Esto permite saber el tipo de iluminación que ambientará dicha escena. 
        .bg-5.p-4.mb-4
          p.mb-0 El guion técnico permite describir cada una de las escenas y qué elementos tendrá. Todo depende del tipo de videojuego que se desea realizar. Por ejemplo, la posición de la cámara, si es un juego de posición lateral, se puede usar una cámara frontal, pero si se desea ver todo el espacio del juego, se puede usar una cámara cenital. 
        p Por último, se debe numerar cada una de las escenas, como 1, 2, 3, etc., con la finalidad de mantener una secuencia lineal, de acuerdo con el guion narrativo, y permitirá realizar un storyboard detallado, en orden. También es importante mencionar si es una escena en un espacio exterior o interior y la hora en la que está sucediendo la escena.
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Ejemplo guion narrativo del videojuego
                  p.mb-0 Consulte el ejemplo provisto para la elaboración de la historia y el desarrollo del guion narrativo del juego.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ejemplo_creacion_historia_guion_narrativo_juego.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img6.png', alt='')


    Separador

    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5 #[em Storyboard]

    .row.align-items-center.justify-content-center
      .col-lg-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/img7.png', alt='')
      .col-lg-7.mb-4(data-aos="fade-left")
        p El “storyboard”, fundamentalmente es la base donde se ilustran los elementos y narrativa sobre una plantilla en que se detalla cada parte o escena del videojuego, en él se relata de manera breve pero concisa el desarrollo de la trama o historia del videojuego para poder explicar el funcionamiento, las mecánicas y la distribución de elementos, dicho de otra manera, son ilustraciones que representan de manera secuencial una historia, para que sea entendida por los diseñadores del videojuego. 
        p En el storyboard, se explica cómo debe ser vista la pantalla según la cámara y también se describen acciones de la toma, como sonidos o efectos que deben realizarse. Gracias a esto, el equipo de producción del videojuego tiene claro lo que debe realizar, como elementos “background”, perspectiva de la cámara, iluminación, así como también describir las mecánicas que lo conforman, elementos que aparecen en determinados momentos como interfaces e interacciones.  

    .row.align-items-center.justify-content-center
      .col-lg-7.mb-4(data-aos="fade-right")
        .bg-2.p-4.mb-4
          p.mb-0 En el diseño de videojuegos, se toma una maqueta o plantilla principal como molde, donde se describe la estructura base del videojuego, y se describen los niveles del mismo, luego tomando como base esa plantilla, se crea una plantilla para cada nivel, con el fin de tener claridad en las características y diferencias que existen entre nivel y nivel. Y para detallar las interacciones del personaje con el entorno y los objetos activos. 
        p Son ilustraciones que representan de manera secuencial una historia, para que sea entendida por los diseñadores del videojuego. 
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/t3/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Ejemplo de guion técnico
                  p.mb-0 En el anexo, encontrará un ejemplo detallado de un guion técnico que puede servir como referencia para la estructuración y formato de documentos similares.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ejemplo_guion_tecnico.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-5.mb-4(data-aos="fade-left")
        .bg-5.p-3
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 11.] #[em Storyboard Flynn] en el bosque Gaokerena
          figure
            img(src='@/assets/curso/temas/t3/fig11.png', alt='')

    p.mb-4(data-aos="fade") Con plantillas bien elaboradas, no quedan dudas a la hora de desarrollar los elementos para el videojuego, porque permiten reflejar cómo se verá la escena al final, las acciones, objetivos y aspectos de importancia, esquematizando así las situaciones que se crearán para la historia.

    .row.justify-content-center
      .col-lg-3.mb-4(data-aos="fade-right")
        .bg-4.p-4.h-100.alineo-vertical
          img(src='@/assets/curso/temas/t3/ico.svg', alt='', style="width: 110px;")
          p Existe también una gran variedad de herramientas digitales para crear storyboards que son de uso gratuito, como Storyboardthat y Storyboarder. Estos programas también permiten desarrollar el guion gráfico.
      .col-lg-9.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 12.] Ejemplo de storyboard digital
        figure
          img(src='@/assets/curso/temas/t3/fig12.png', alt='')


    Separador

    #t_3_6.titulo-segundo.color-acento-contenido
      h2 3.6 Objetivos del videojuego 

    p.mb-4(data-aos="fade") Por lo general, los videojuegos buscan que se cumpla con diversos objetivos, como derrotar al enemigo mayor, o completar todos los niveles. Para ello, es importante que se motive al jugador para que alcance dichos objetivos, siendo necesario establecer algunas reglas que permiten al jugador participar y tomar decisiones que le faciliten cumplir con dichas metas. 

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.

    p.mb-4(data-aos="fade") Ahora se detallará las dinámicas utilizada en los videojuegos: 

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.

    .fondo-subt.w-fit.pe-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white.mb-4
        .col-auto 
          img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='')
        .col-auto 
          h3.mb-0 Niveles de Juego

    p(data-aos="fade") Los niveles son una secuencia de escenarios de principio a fin de la historia, por donde el jugador se desplazará, todo dependiendo del tipo de mecánica de juego que se desea realizar.  Es decir, el espacio en el que se va a generar toda la acción, es ahí donde se van a localizar los diversos elementos que componen ese espacio.  

    p.mb-4(data-aos="fade") Se deben tener varios elementos en cuenta. De forma principal la plataforma, o el piso sobre el que se puede caminar, nadar, volar, etc. Luego se deben crear los límites espaciales, como ejemplo paredes o muros, estos no pueden ser atravesados, a menos que el personaje tenga el poder de traspasarlas.  tercero, elementos que le dan vida al ambiente y que son fijos, un árbol, una piedra, estos no se pueden atravesar, pero se puede pasar frente a ellos. Cuarto, elementos que se pueden destruir, mover, tirar. Elementos que pueden esconder algún secreto, no tener nada, o facilitar el acceso a otro espacio. A continuación, algunos ejemplos:

    .tarjeta.bg-1.p-4.py-5
      SlyderA(tipo="b" data-aos="fade-down")
        .row.justify-content-center
          .col-md-11
            img(src='@/assets/curso/temas/t3/slider2-img1.png', alt='')
        .row.justify-content-center
          .col-md-11
            img(src='@/assets/curso/temas/t3/slider2-img2.png', alt='')
        .row.justify-content-center
          .col-md-10
            img(src='@/assets/curso/temas/t3/slider2-img3.png', alt='')
        .row.justify-content-center
          .col-md-6
            img(src='@/assets/curso/temas/t3/slider2-img4.png', alt='')
        .row.justify-content-center
          .col-md-10
            img(src='@/assets/curso/temas/t3/slider2-img5.png', alt='')


    Separador

    #t_3_7.titulo-segundo.color-acento-contenido
      h2 3.7 #[em Game Document Design]

    .row.align-items-center.justify-content-center
      .col-lg-7.mb-4(data-aos="fade-right")
        p En el mundo del desarrollo de videojuegos, la planificación y estructuración de ideas es esencial para llevar un proyecto a buen término. Aquí es donde entra en juego el “#[em Game Document Design]” o Documento de Diseño de Juego.
        .bg-5.p-4.mb-4
          p.mb-0 El #[em Game Document Design] es comparable a la columna vertebral de un videojuego. Es un documento detallado que sirve como guía y referencia para todo el equipo de desarrollo. Es un plano o un mapa: describe desde la historia y los personajes hasta la mecánica y la jugabilidad, pasando por aspectos técnicos y artísticos.
        p A continuación, se presenta una serie de videos, en los cuales se explica el #[em Game Document]:
      .col-lg-5.mb-4.d-none.d-lg-flex(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img8.png', alt='')  

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.


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
