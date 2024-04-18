<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1 Historia e Introducción a los videojuegos
      
    .row.fondo-t1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          #t_1_1.titulo-segundo.color-acento-contenido
            h2 1.1  Historia del Video Juego

          p.mb-4(data-aos="fade") Los videojuegos responden a la acción que realiza un jugador por medio de unos mandos que se encuentran conectados a una máquina. En un principio, se destacaron como principales desarrolladores Estados Unidos, con el Atari, y Japón, con Nintendo. A continuación, se puede observar la historia de los videojuegos:

          .tarjeta.bg-white.bx-sw.p-4(data-aos="fade-down") 
            LineaTiempoC.color-acento-contenido
              .row.justify-content-center.my-4(titulo="Años 50")
                .col-md-5.mb-4.mb-md-0
                  p Se puede atribuir a William Higinbotham como el primero en crear un videojuego, quien trabajó en los años 30 activamente en el desarrollo de un radar en la Segunda Guerra Mundial. Por lo tanto, en los años 50, hizo uso de un radar y lo adaptó, gracias a sus conocimientos en electrónica y física, creando el juego 
                    span.bg-1.text-white.fw-bold “Tennis for Two”
                    | , el cual funcionaba con una perilla que se podía girar a la izquierda o a la derecha, para ajustar la trayectoria de la pelota de ping pong. 
                  p Alexander Douglas, en 1952, creó 
                    span.bg-1.text-white.fw-bold “Oxo”
                    | , también conocido como Tres en raya, el típico juego de papel Triqui.
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img1.png', alt='')
              .row.justify-content-center.my-4(titulo="1972")
                .col-md-5.mb-4.mb-md-0
                  p En 1972, nace 
                    span.bg-1.text-white.fw-bold Pong
                    | , de Nolan Bushnell, al parecer basado en la misma lógica de 
                    span.bg-1.text-white.fw-bold “Tennis for Two”
                    | , aunque en vista superior y una mecánica muy similar, creando a partir de aquí a Atari, una empresa que empezó a distribuir máquinas en Estados Unidos. 
                  p Después, aparece Ralph Baer, que muchos años atrás, en 1968, había creado una videoconsola que se llamaba 
                    span.bg-1.text-white.fw-bold -Magnavox Odyssey
                    | , y uno de sus principales juegos fue 
                    span.bg-1.text-white.fw-bold “Chase Game”
                    | , que también era muy parecido a los ya mencionados, y quien demandó a Atari, cobrando una indemnización por uso de los derechos del juego.
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img2.png', alt='')
              .row.justify-content-center.my-4(titulo="1978")
                .col-md-5.mb-4.mb-md-0
                  p A su vez, en Japón, en 1978, por la empresa Taito, surge 
                    span.bg-1.text-white.fw-bold ”Space Invaders”
                    | , uno de los grandes referentes de los videojuegos. 
                  p Namco crea, en 1980, uno de los juegos más icónicos del mercado: 
                    span.bg-1.text-white.fw-bold “Pacman”
                    | . 
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img3.png', alt='')
              .row.justify-content-center.my-4(titulo="1981")
                .col-md-5.mb-4.mb-md-0
                  p Posterior a ellos, Nintendo, una empresa que se encarga de crear naipes, decide aventurarse en el desarrollo de la tecnología de los videojuegos, contratando a Shigeru Miyamoto, quien en 1981 creó a 
                    span.bg-1.text-white.fw-bold “Donkey Kong”
                    | , un gorila que tiene capturada a una princesa que debe ser rescatada por Jumpman, quien posteriormente se convierte en el famoso Mario Bros.
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img4.png', alt='')
              .row.justify-content-center.my-4(titulo="1982")
                .col-md-5.mb-4.mb-md-0
                  p En el año 1982, cuatro trabajadores de la empresa Atari deciden renunciar, porque no se consideraban valorados por la empresa, después de que esta fue vendida a la Warner, y juntos crean la empresa Activision, lanzando el primer videojuego de plataformas, 
                    span.bg-1.text-white.fw-bold “Pitfall”
                    | . 
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img5.png', alt='')
              .row.justify-content-center.my-4(titulo="1985")
                .col-md-5.mb-4.mb-md-0
                  p En los años 80, en Estados Unidos, los videojuegos tienen una caída considerable; por ello, llega Japón al rescate y, en 1985, Nintendo  posiciona uno de los juegos más icónicos de la historia, 
                    span.bg-1.text-white.fw-bold “Super Mario Bros.”
                    | ,  que viene del juego 
                    span.bg-1.text-white.fw-bold “Donkey Kong”
                    | . El mismo diseñador crea después 
                    span.bg-1.text-white.fw-bold “Zelda”
                    | , la historia de un niño que se mueve en el campo y avanza explorando diversos sitios. 
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img6.png', alt='')
              .row.justify-content-center.my-4(titulo="1987")
                .col-md-5.mb-4.mb-md-0
                  p En 1987, la empresa Capcom crea 
                    span.bg-1.text-white.fw-bold “Streetfighter” 
                    | y otros títulos más. Asimismo, otra empresa importante, Konami, crea 
                    span.bg-1.text-white.fw-bold “Contra”
                    | .
                  p En este mismo año, LucasFilm Games saca al mercado un juego de aventuras llamado 
                    span.bg-1.text-white.fw-bold “Maniac Mansion”
                    | , el primero en hacer uso del clic del mouse. Posterior a ello, también se creó 
                    span.bg-1.text-white.fw-bold “Indiana Jones and the last crusade”
                    | , en 1989.
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img7.png', alt='')
              .row.justify-content-center.my-4(titulo="1988")
                .col-md-5.mb-4.mb-md-0
                  p En 1988, Nintendo decide crear una consola portátil, llamada Gameboy, cuyo juego estrella es el 
                    span.bg-1.text-white.fw-bold “Tetris”
                    | , que fue creado en Rusia, por Alexey Pajitnov, quien trabajaba para una empresa rusa, que distribuye el juego, y, finalmente, llega a manos de Nintendo. 
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img8.png', alt='')
              .row.justify-content-center.my-4(titulo="1991")
                .col-md-5.mb-4.mb-md-0
                  p Sega, después de mucha competencia con Nintendo, crea 
                    span.bg-1.text-white.fw-bold “Sonic”
                    | , en 1991, uno de sus íconos estrella.
                  p En un principio, los juegos se destacan porque son representados con luces blancas. Posterior a ello, en los años 80, introducen los 8, 16 y 32 bits. Y en los 90, se da una evolución hacia el 3D, donde los gráficos se encuentran renderizados y pueden ser usados en las diversas consolas. 
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img9.png', alt='')
              .row.justify-content-center.my-4(titulo="1992")
                .col-md-5.mb-4.mb-md-0
                  p Id Software creó juegos que rápidamente se usaron en computadoras, como 
                    span.bg-1.text-white.fw-bold “Wolfenstein” 
                    | 3D y Doom juegos en primera persona tipo shooter que tenían una vista y recorrido en 3D creado en 1992 y 1993 respectivamente. 
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img10.png', alt='')
              .row.justify-content-center.my-4(titulo="1996")
                .col-md-5.mb-4.mb-md-0
                  p En 1994, 
                    span.bg-1.text-white.fw-bold “Donkey Kong Country” 
                    | sale al mercado, con un estilo 3D prerrenderizado, igual que 
                    span.bg-1.text-white.fw-bold “Warcraft Orcs and humans”
                    | .
                  p En 1996, aparece uno de los primeros juegos de estrategia, el gran reconocido 
                    span.bg-1.text-white.fw-bold “Diablo”
                    | , un RPG,  seguido de 
                    span.bg-1.text-white.fw-bold “Age of empires”
                    | , en 1997. 
                  p Sony y Sega son los nuevos competidores del mercado, y salen nuevos juegos, como 
                    span.bg-1.text-white.fw-bold “Resident Evil”
                    | , en 1996. En ese mismo año, el famoso juego 
                    span.bg-1.text-white.fw-bold “Super Mario 64” 
                    | es adaptado por primera vez en 3D.
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img11.png', alt='')
              .row.justify-content-center.my-4(titulo="2001")
                .col-md-5.mb-4.mb-md-0
                  p Uno de los grandes juegos, 
                    span.bg-1.text-white.fw-bold “Halo”
                    | , se inserta al mercado en el 2001, mejorando enormemente en la jugabilidad. 
                  p Finalmente, esta evolución del videojuego muestra que la calidad de imagen es muy superior, logrando juegos fotorealistas.
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img12.png', alt='')
              .row.justify-content-center.my-4(titulo="2004")
                .col-md-5.mb-4.mb-md-0
                  p En el año 2004, 
                    span.bg-1.text-white.fw-bold “World of the Warcraft”
                    | , el cual es la cuarta saga de una serie que evoluciona como multijugador masivo de tiempo real.
                  p En 2004, llega una nueva forma de videojuegos, al eliminar los controles, con el Kinect de la Xbox 360, creando juegos que cambian la jugabilidad, utilizando el cuerpo de la persona como herramienta de acción. 
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img13.png', alt='')
              .row.justify-content-center.my-4(titulo="2009")
                .col-md-5.mb-4.mb-md-0
                  p En adelante a los años 2000, se ve un desarrollo muy alto en la calidad y jugabilidad, mejorando día a día en cada una de las entregas. 
                  p En el año 2009, nace 
                    span.bg-1.text-white.fw-bold “Angry Birds”
                    | , uno de los juegos más descargados de la Play Store, adentrándose en los celulares inteligentes. 
                  p Cabe destacar que los juegos, debido a los altos estándares, son cada vez más pesados y requieren de procesamientos mucho más veloces, pero esto ha permitido que sean mucho más realistas que antes.  Los videojuegos día a día siguen evolucionando. 
                .col-md-6
                  img(src='@/assets/curso/temas/t1/linea-img14.png', alt='')


    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Antecedentes del videojuego en Colombia

    p.mb-4(data-aos="fade") Aquí se mencionan algunos de los videojuegos más sobresalientes elaborados por empresas colombianas, algunos ganadores de diferentes premios, como también catalogados entre los más descargados. Cabe aclarar que no son todos los videojuegos realizados en el país:

    .tarjeta.fondo-slider.p-4(data-aos="fade")
      SlyderA.text-white(tipo="b")
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Audio Ninja 
            p Es un juego con estética 2D, cuyo fin es derrotar enemigos presionando botones en la pantalla para ir atacándolos al ritmo de la música. Fue diseñado para la plataforma Apple Store en el 2013, por la compañía Cocodrilo Dog, quedando como subcampeón en la categoría ‘#[em Game runner up]’ en el mismo año.
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img1.png', alt='')
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Grabbity
            p En 2013, Efectos Studio lanzó este juego, el cual cuenta con una estética en 2D bien contrastada, donde el personaje resalta, pues este es de color negro y se mueve a través de un mundo de laberintos totalmente coloridos, esquivando los obstáculos que se le presentan en el camino; haciendo uso del acelerómetro incorporado en el celular o Tablet.
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img2.png', alt='')
        .row.align-items-center.justify-content-around.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Poltergeist: a Pixelated horror
            p En este juego tipo #[em puzzle] en 2D, creado bajo la técnica #[em pixel art], en vista isométrica, el jugador debe asumir el papel de Henry B. Knight, un fantasma que tiene por objetivo hacer huir a la familia que vive en su antigua mansión. Fue creado por el estudio Glitchy Pixel y se lanzó al mercado en el año 2014.
          .col-md-3
            img(src='@/assets/curso/temas/t1/slider-img3.png', alt='')
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Story Warriors: Fairy Tales (2015)
            p Creado en el año 2015, por la empresa colombiana Below The Games (BTG), fundada por Carlos Rocha, trata de una aventura interactiva tipo #[em puzzle], que narra interesantes cuentos de hadas, lo cual lo convierte en una atractiva forma de leer para los niños, ya que mezcla el entretenimiento con lo educativo.
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img4.png', alt='')
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Neon Fury. Neón Fury (2017)
            p Es un juego de defensa de torres, creado para la realidad virtual, en el que se destacan sus gráficos en 3D y que se desarrolla en un escenario retro futurista. Fue diseñado por Teravision Games, compañía que ha venido creando contenido para reconocidas empresas, como Namco, Atari, Disney, Nickelodeon, Unicef, Natgeo y Discovery.
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img5.png', alt='')
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 World War Doh
            p Es un juego cuyos personajes parecen elaborados en un software 3D, pero realmente usaron la técnica de la plastilina y el Stop Motion para generar las animaciones. Este es un juego que pertenece a la empresa Jam City, que compró la empresa Brainz. Su primera versión salió en el año 2017, para celulares.
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img6.png', alt='')
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Ark: Survival Evolved
            p Es un juego que se ambienta en una isla en la que deambulan animales prehistóricos, los cuales deben ser domados o cazados. Ahí se debe sobrevivir a como dé lugar. Desarrollado por gráficos en 3D, lanzado en el año 2017. Se puede jugar en cualquier plataforma, IOS, Android, consola, PC. Además, es un juego multijugador, que funciona en línea. 
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img7.png', alt='')
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Haimrik (2018) 
            p “Haimrik” fue creado por la compañía Below The Game (BTG) y una empresa rusa en el año 2018, alcanzando un importante avance en cuanto a propiedad intelectual para Colombia, ya que se logró lanzar para plataformas como Xbox One, Playstation 4 y PC en Steam. Se trata de un videojuego en 2D de acción y aventuras, ubicado en escenarios del Medioevo, mezcla el entretenimiento con lo educativo, por el hecho de que el objetivo del jugador es derrotar a los enemigos usando las palabras correctas para resolver los rompecabezas presentes en cada nivel.
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img8.png', alt='')
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Un cabrón en Transmilenio
            p Desarrollado por Black Mamba Studio en el 2019, es un sencillo videojuego de acción, en el que el jugador, representado por un cabrito, debe bajarse  en su parada de destino abriéndose paso a través de vacas y cerdos que representan a los demás pasajeros, antes de que las puertas del Transmilenio se cierren. 
            p Este videojuego fue ganador del premio Bogotá Game Challenge, gracias a los bien implementados gráficos 2D, la paleta de colores usada, una entretenida mecánica de juego, una experiencia de usuario intuitiva y al propósito de este juego, pues, a través de él, sus desarrolladores pretenden crear mayor conciencia y mejorar la cultura ciudadana en el sistema de transporte masivo. 
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img9.png', alt='')
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Captain Toonhead
            p “Captain Toonhead” es una mejora al juego Neon Fury (2013), creada por Teravision Games, que se lanzará en 2021. Se trata de un juego de realidad virtual, con excelentes gráficos en 3D, desarrollado para dispositivos VR de alta gama (PSVR, Vive, Quest y Rift), en el que el jugador debe usar su armamento y su habilidad en la construcción de torres para defender su base de enemigos cibernéticos.
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img10.png', alt='')
        .row.align-items-center.justify-content-center.my-4
          .col-md-5.mb-4.mb-md-0
            h3 Cristales
            p Es un juego tipo JRPG clásico, que se estrena este verano de 2021. Este es un juego de tipo exploración, en el que se mezclan los tiempos pasado, presente y futuro. Realizado con una estética 2D, elaborado cuadro por cuadro. Desarrollado por Dreams Uncorporated, juego que se puede jugar en diversas consolas y en computadora.
          .col-md-6
            img(src='@/assets/curso/temas/t1/slider-img11.png', alt='')


    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Tipos de videojuegos y plataformas

    .row.align-items-center.justify-content-center.mb-2
      .col-lg-10.mb-4(data-aos="fade-right")
        p El ocio y tiempo de esparcimiento de la cultura y la sociedad actual, a partir de los años 80, ha tenido una gran transformación. Cada vez más personas dedican tiempo y dinero hacia medios de entretenimientos tecnológicos, uno de ellos, los videojuegos. Esta industria desarrolló una curva de éxito exponencial al ser cada vez más asequible, convirtiéndose en una de las de mayor consumo en la actualidad.
      .col-lg-2.d-none.d-lg-flex.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img.svg', alt='')

    .row.fondo2-t1.align-items-center.py-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center

          .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
            .row.d-flex.align-items-center.text-white
              .col-auto 
                img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='')
              .col 
                h3.mb-0 Tipos de juegos
          
          p.mb-4(data-aos="fade") Los videojuegos evolucionaron tomando nuevas mecánicas y características que los fueron transformando y a su vez desarrollando estilos diferenciados unos de otros, partiendo de la premisa de acción y recompensa. Debido a sus variaciones, los videojuegos se pueden clasificar en diferentes géneros y subgéneros, tomando en cuenta su tipo de jugabilidad, de los cuales podemos destacar los siguientes: 

          .tarjeta.bg-white.bx-sw.p-4.mb-5(data-aos="fade")
            SlyderA(tipo="b")
              .row.align-items-center.justify-content-center.my-4
                .col-md-6.mb-4.mb-md-0
                  h4.t-color1 Juegos de lucha 
                  p Son juegos en los cuales se recrean combates entre mínimo 2 contrincantes sobre una arena de batalla, en perspectiva lateral en tercera persona.  
                  p En este tipo de juegos, como el famoso “Yo contra el barrio”, los jugadores se enfrentan a una cantidad amplia de enemigos, mientras van recorriendo escenarios conectados, que sirven como niveles. Puede jugar más de 1 jugador, de manera cooperativa. Otros ejemplos de este tipo de juegos son “Double Dragon”  y “Final Fight”.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slider2-img1.png', alt='')
              .row.align-items-center.justify-content-center.my-4
                .col-md-6.mb-4.mb-md-0
                  h4.t-color1 Juegos FPS 
                  p En este género, la cámara se sitúa en la cabeza del personaje, en plano subjetivo, lo que da la sensación de que la vista del personaje es la vista del usuario. Como característica principal está el hecho de que, en su mayoría, este tipo de juegos optan por una acción frenética, donde se acentúan los reflejos y la precisión, como también, en algunos casos, aumenta la inmersión, al verse los objetos a gran detalle. Algunos ejemplos son “Doom”, “Halo” y “Quake”.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slider2-img2.png', alt='')
              .row.align-items-center.justify-content-center.my-4
                .col-md-6.mb-4.mb-md-0
                  h4.t-color1 Juegos de plataforma
                  p Es un género muy popular, gracias a juegos como “Super Mario Bros.” o “Sonic”, en el que, en vista de tercera persona, el personaje avanza sobre diferentes escenarios que sirven de niveles, sorteando obstáculos por medio de saltos o el uso de habilidades, para llegar al final de cada escenario.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slider2-img3.png', alt='')
              .row.align-items-center.justify-content-center.my-4
                .col-md-6.mb-4.mb-md-0
                  h4.t-color1 Juegos simuladores
                  p Como su nombre lo indica, este género de juegos busca simular la realidad y transmitir sensaciones que realmente no están sucediendo, como en juegos de conducción de vehículos o simuladores de vuelo, entre ellos “Flight Simulator” y “Bus Simulator”.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slider2-img4.png', alt='') 
              .row.align-items-center.justify-content-center.my-4
                .col-md-6.mb-4.mb-md-0
                  h4.t-color1 Juegos de deportes
                  p Son aquellos videojuegos que toman como función principal las mecánicas físicas, para representar deportes, en algunas ocasiones, no como simulación, puesto que los tiempos espacios y velocidades no corresponden a un acercamiento con la realidad, pero sí conservando las bases del deporte en el que se basan. Algunos de estos juegos son “Fifa”, “Pes”, “Nba2k”.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slider2-img5.png', alt='')
              .row.align-items-center.justify-content-center.my-4
                .col-md-6.mb-4.mb-md-0
                  h4.t-color1 Juegos de estrategia
                  p En este género de juego, generalmente en tercera persona con vista cenital, el usuario empieza con pocos recursos y conociendo su objetivo final, y, para lograrlo, emplea procesos de construcciones, exploraciones y recolección de recursos para mejorar sus asentamientos, indicando y dando órdenes que sirven como acciones para que sus aliados realicen. Este tipo de juegos no avanza con tanta rapidez y se le da alto énfasis al argumento, como es el caso de “Age Of Empires”, “Warcraft”, entre otros.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slider2-img6.png', alt='')
              .row.align-items-center.justify-content-center.my-4
                .col-md-6.mb-4.mb-md-0
                  h4.t-color1 Juegos de aventura
                  p Son juegos en los cuales la premisa principal es la exploración del mundo en el que habita el personaje principal, donde se investiga y se resuelven acertijos para continuar avanzando. Se hace énfasis en las historias y el desarrollo del personaje; por ello, generalmente, son para 1 solo jugador, como el caso de “Zelda” y “Alundra”.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slider2-img7.png', alt='')
              .row.align-items-center.justify-content-center.my-4
                .col-md-6.mb-4.mb-md-0
                  h4.t-color1 Juegos de rol
                  p En este tipo de videojuegos, como “Final Fantasy”, “The Witcher”, “The Elder Scrolls”, el usuario diseña el personaje desde el inicio e interpreta el rol del mismo. A medida que va avanzando, lo va desarrollando, aumentando parámetros como fuerza, resistencia, salud, entre otros. Pueden ser de 1 o varios personajes al mismo tiempo; generalmente se desarrollan en mundos abiertos, es decir, mundos completos, no seccionados en niveles.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slider2-img8.png', alt='')
              .row.align-items-center.justify-content-center.my-4
                .col-md-6.mb-4.mb-md-0
                  h4.t-color1 Juegos casuales
                  p Videojuegos basados en temáticas de entretenimiento o educación, que están destinados a jugadores no habituales que buscan una distracción diferente. Están basados en reglas simples y no requieren de una gran dedicación ni compromiso. Entre ellos están “Angry Birds”, “Plants Vs. Zombies”.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/slider2-img9.png', alt='')

          .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
            .row.d-flex.align-items-center.text-white
              .col-auto
                img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='', style="max-width: 100px;")
              .col
                h3.mb-0 Sistemas de clasificación en los videojuegos
          
          p.mb-4(data-aos="fade") Para el desarrollo de videojuegos existen sistemas de clasificación para poder ser vendidos o alquilados. Entre ellos, es posible destacar el sistema europeo y el americano.

          .tarjeta--container.row.mb-5
            .col-md.tarjeta.fondo-tarjc1.text-white.p-5
              .row.mb-4
                .col-4
                  img(src='@/assets/curso/temas/t1/tarj-ico1.svg', alt='')
              .bg-6.w-fit.mb-4.px-4.py-2
                h5.mb-0 Sistema Europeo PEGI (Pan European Game Information) 
              p.mb-4 Fue creado el 9 de abril de 2003. El sistema PEGI se aplica en 32 países europeos y únicamente es obligatorio en dos de ellos, en Finlandia y Noruega.    
              img(src='@/assets/curso/temas/t1/tarj-img1.png', alt='')
            .col-md.tarjeta.fondo-tarjc2.text-white.p-5
              .row.mb-4
                .col-4
                  figure
                    img(src='@/assets/curso/temas/t1/tarj-ico2.svg', alt='')
              .bg-6.w-fit.mb-4.px-4.py-2
                h5.mb-0 Sistema estadounidense Entertainment Software Rating Board (ESRB). 
              p.mb-4 Creado en 1994, tras la aparición del videojuego “Mortal Kombat” y toda la polémica que desató al contener violencia explícita. Utiliza letras alfabéticas, para clasificar así su contenido.
              img(src='@/assets/curso/temas/t1/tarj-img2.png', alt='')


    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-auto 
          img(src='@/assets/curso/temas/t3/ico-subt.svg', alt='')
        .col 
          h3.mb-0  Plataformas actuales de videojuegos
    
    p.mb-5(data-aos="fade") Son los sistemas base donde funcionan los juegos, en dichos dispositivos se emplean lenguajes de programación. 

    .bg-6.br-10.w-fit.mb-4.px-4.py-2(data-aos="fade")
      h4.mb-0.text-white Consolas de videojuegos 
    
    p.mb-4(data-aos="fade") Las consolas de videojuegos siguen siendo el sistema más popular de la actualidad. Entre ellas, se puede encontrar un cruce generacional, lo que se conoce como consolas de anterior generación y de nueva generación.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-4
        .tarjeta.tarjeta-flip
          .br-10.tarjeta-flip__contenedor
            .tarjeta-flip__img.border-blue(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj2-img1.png')})`}")
            .tarjeta-flip__contenido.bg-5.p-4
              h4.t-color1.text-center PS4
              p.mb-5 Es la cuarta consola de la marca Sony, salió al mercado en 2013. Modo de gráficos mejorados: el juego se ejecuta a 1080p y 30 fps, pero con mejoras gráficas. 
      .col-lg-3.col-md-6.mb-4
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .br-10.tarjeta-flip__contenedor
            .tarjeta-flip__img.border-blue(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj2-img2.png')})`}")
            .tarjeta-flip__contenido.bg-5.p-4
              h4.t-color1.text-center Xbox One
              p.mb-5 Tercera consola de videojuegos lanzada por Microsoft con polémica, puesto que se pretendía que fuese obligatorio que siempre estuviese conectada a Internet para poder usarse. Lanzada en 2013, se considera de anterior generación, precedida por la actual Xbox Series X.
      .col-lg-3.col-md-6.mb-4
        .tarjeta.tarjeta-flip
          .br-10.tarjeta-flip__contenedor
            .tarjeta-flip__img.border-blue(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj2-img3.png')})`}")
            .tarjeta-flip__contenido.bg-5.p-4
              h4.t-color1.text-center PS5
              p.mb-5 Consola de videojuegos de la marca Sony, la quinta en ser lanzada por esta marca, en 2020.  Con dos modelos, uno con unidad lectora de disco y otro sin esta. Desarrollada para mostrar juegos con resoluciones 4K.
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-4
        .tarjeta.tarjeta-flip
          .br-10.tarjeta-flip__contenedor
            .tarjeta-flip__img.border-blue(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj2-img4.png')})`}")
            .tarjeta-flip__contenido.bg-5.p-4
              h4.t-color1.text-center Xbox Series X
              p.mb-5 Cuarta consola de generación lanzada por Microsoft para competir con la PS5. Destaca por su capacidad de dar soporte a resoluciones 8K.
      .col-lg-3.col-md-6.mb-4
        .tarjeta.tarjeta-flip
          .br-10.tarjeta-flip__contenedor
            .tarjeta-flip__img.border-blue(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj2-img5.png')})`}")
            .tarjeta-flip__contenido.bg-5.p-4
              h4.t-color1.text-center Nintendo Switch
              p.mb-5 La consola de menor potencia de la actualidad, pero se ve compensada por su versatilidad y portabilidad. Tiene una resolución de 1280 x 720px, aunque el sistema puede llegar a 1080p cuando está conectada al televisor. 

    .row.fondo3-t1.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center

          .col-12
            .bg-6.br-10.w-fit.mb-4.px-4.py-2(data-aos="fade")
              h4.mb-0.text-white PC 

            p.mb-4(data-aos="fade") En los últimos años, se ha vuelto muy popular el PC como sistema de videojuegos, esto en parte porque las desarrolladoras están lanzando por este medio los juegos que salen en videoconsolas. Se perfila a futuro como el sistema por excelencia. En el PC, es posible encontrar plataformas dedicadas a videojuegos basados en la nube, en un sistema similar a como trabaja Netflix, de las cuales podemos destacar las siguientes:

          .col-lg-4.d-none.d-lg-flex(data-aos="fade-right")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='') 
          .col-lg-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6")
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-7
                    img.m-auto(src='@/assets/curso/temas/t1/tarj3-img1.png' alt='' style="max-width: 115px;")
                .bg-6.w-fit.mb-4.m-auto.px-4.py-2
                  h5.mb-0 STEAM
                p Perteneciente a Valve, es la más grande plataforma de videojuegos para PC y MAC, con más de 7300 juegos, en la cual se pueden encontrar juegos de todo tipo, incluso los llamados Free to Play.  
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-7
                    img.m-auto(src='@/assets/curso/temas/t1/tarj3-img2.png' alt='' style="max-width: 115px;")
                .bg-6.w-fit.mb-4.m-auto.px-4.py-2
                  h5.mb-0 Google Stadia
                p Es la plataforma de videojuegos de Google, ofrece videojuegos vía streaming, es decir, se ejecutan en los servidores de Google y se juegan a través de la app o el navegador.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-7
                    img.m-auto(src='@/assets/curso/temas/t1/tarj3-img3.png' alt='' style="max-width: 115px;")
                .bg-6.w-fit.mb-4.m-auto.px-4.py-2
                  h5.mb-0 UPLAY
                p Es la plataforma de Ubisoft, desarrolladora destacada de videojuegos, en la cual podemos encontrar la saga “Assassins Creed”.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-7
                    img.m-auto(src='@/assets/curso/temas/t1/tarj3-img4.png' alt='' style="max-width: 115px;")
                .bg-6.w-fit.mb-4.m-auto.px-4.py-2
                  h5.mb-0 Origin
                p Plataforma perteneciente a la desarrolladora Electronics Arts, que se destaca por poseer juegos como FIFA.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-7
                    img.m-auto(src='@/assets/curso/temas/t1/tarj3-img5.png' alt='' style="max-width: 115px;")
                .bg-6.w-fit.mb-4.m-auto.px-4.py-2
                  h5.mb-0 EPIC Games
                p Plataforma que ha tomado mucha popularidad por ser la desarrolladora del juego free to play “Fornite” y el motor de videojuegos Unreal Engine; además de que semanalmente obsequian juegos.
              .tarjeta.color-primario.p-4
                .row.justify-content-center.mb-4
                  .col-7
                    img.m-auto(src='@/assets/curso/temas/t1/tarj3-img6.png' alt='' style="max-width: 115px;")
                .bg-6.w-fit.mb-4.m-auto.px-4.py-2
                  h5.mb-0 Navegadores web
                p.mb-0 Son plataformas que toman como base los navegadores web; generalmente alojan juegos casuales. Un sistema en el cual la mayoría son juegos gratis. Tuvo sus inicios en la ya difunta Adobe Flash Player. Entre ellas, se destacan: 
                  a(:href="('https://armorgames.com/')" target="_blank") https://armorgames.com/
                  | , 
                  a(:href="('https://www.minijuegos.com/')" target="_blank") https://www.minijuegos.com/
                  | , 
                  a(:href="('https://www.juegosdiarios.com/')" target="_blank") https://www.juegosdiarios.com/

    .bg-6.br-10.w-fit.mb-4.px-4.py-2(data-aos="fade")
      h4.mb-0.text-white Máquinas recreativas o arcades 

    .row.justify-content-center.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Populares en los 80 y 90, en los centros comerciales o salones recreativos. Han visto disminuida su popularidad al entrar en juego los sistemas domésticos y el Internet. Algunos Arcades populares son el Pong, Rush'nAttack, Astro Fighter y Frogger.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img3.png', alt='') 

    .row.fondo4-t1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center

          .col-12
            .bg-6.br-10.w-fit.mb-4.px-4.py-2(data-aos="fade")
              h4.mb-0.text-white Celulares

          .col-lg-7.mb-4(data-aos="fade-right")
            p Los celulares, en la última década, se han posicionado como el hardware con mayor catálogo de juegos. Sea de paso dicho, su mayor concentración se basa en videojuegos casuales, popularizándose con el lanzamiento de “Angry Birds”, “Candy Crush”, “Plant vs. Zombies”, entre otros. Aunque con la tecnología avanzando de manera exponencial, los videojuegos que antes se lanzaban en consolas están llegando a estos dispositivos; juegos tipo battle royale (todos contra todos), como “Free Fire” o “Fortnite”, siendo así que las consolas portátiles prácticamente han desaparecido del panorama actual y los teléfonos móviles han tomado el lugar que estas han dejado.
          .col-lg-5.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img4.png', alt='') 


    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Pipeline del videojuego

    p.mb-4(data-aos="fade") El pipeline es el proceso productivo que acarrea el videojuego. Por ello es importante definirlo, para tener un flujo de trabajo detallado, lo que permite que se realice en un proceso lógico, evitando retrasos en la realización del producto final.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 1.] Pipeline videojuego
        figure
          img(src='@/assets/curso/temas/t1/fig1.svg', alt=' La figura detalla las etapas de creación de un videojuego, dividido en preproducción, producción y postproducción. En la preproducción se define la base del juego; la producción concreta esas ideas mediante diseño y programación; y la postproducción optimiza y refina el juego para su lanzamiento. Juntas, estas fases aseguran un juego coherente y funcional para el jugador.') 
  




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
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
