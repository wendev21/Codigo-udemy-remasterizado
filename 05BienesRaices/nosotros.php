<?php

    require 'includes/funciones.php';
    incluirTemplate('header');
?>
    <main class="contenedor seccion seccion-nosotros ">
        <h1>Conoce Sobre Nosotros</h1>
        <div class="nosotros">
            <picture>
                <source srcset="build/img/nosotros.webp" type="image/webp">
                <source srcset="build/img/nosotros.jpg" type="image/jpeg">
                <img src="build/img/nosotros.jpg" alt="imagen sobre nosotros" loading="lazy">
            </picture>
            <div class="contenido-nosotros">
            <blockquote>25 Años de Experiencia</blockquote>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quibusdam, inventore numquam facere animi autem similique ad itaque est officiis tenetur aliquid, maxime quos soluta porro magnam quae modi debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, sit saepe! Sed aperiam ab est soluta velit cumque. Quae, similique. Perspiciatis quibusdam vitae voluptatum praesentium alias voluptatibus quia quo veniam.0</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident obcaecati id nobis at modi eaque consequuntur. Necessitatibus suscipit explicabo, iste assumenda nobis optio consequuntur deleniti ut
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa eos nemo obcaecat voluptates. asperiores eaque deserunt!</p>
            </div>
            
        </div>
        <section>
            <h1>Más Sobre Nosotros</h1>
            <div class="iconos-nosotros">
                <div class="icono">
                    <img src="build/img/icono1.svg" alt="icono seguridad" loading="lazy">
                    <h3>Seguridad</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse culpa vero ad! Expedita suscipit tenetur sequi mollitia, accusamus quia labore assumenda nemo incidunt necessitatibus quos! Ipsum ipsa consequuntur aperiam tempora?</p>                
                </div>
                <div class="icono">
                    <img src="build/img/icono2.svg" alt="icono Precio" loading="lazy">
                    <h3>Precio</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse culpa vero ad! Expedita suscipit tenetur sequi mollitia, accusamus quia labore assumenda nemo incidunt necessitatibus quos! Ipsum ipsa consequuntur aperiam tempora?</p>
                </div>
                <div class="icono">
                    <img src="build/img/icono3.svg" alt="icono Tiempo" loading="lazy">
                    <h3>Tiempo</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse culpa vero ad! Expedita suscipit tenetur sequi mollitia, accusamus quia labore assumenda nemo incidunt necessitatibus quos! Ipsum ipsa consequuntur aperiam tempora?</p>
                </div>
            </div>
        </section>
           
       
    </main>
<?php

    incluirTemplate('footer');
?>
