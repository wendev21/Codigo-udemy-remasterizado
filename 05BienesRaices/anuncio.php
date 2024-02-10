<?php

    require 'includes/funciones.php';
    incluirTemplate('header');
?>
    <main class="contenedor seccion contenido-centrado">
        <h1>Casa En venta frente al Bosque</h1>
        <picture>
            <source srcset="build/img/destacada.webp" type="image/webp">
            <source srcset="build/img/destacada.jpg" type="image/jpeg">
            <img loading="lazy" src="build/img/destacada.jpg" alt="imagen de la propiedad">
        </picture>

        <div class="resumen-propiedad">
            <p class="precio">
                $3,000,000.00
            </p>
            <ul class="iconos-caracteristicas">
                <li>
                    <img class="icono" loading="lazy" src="build/img/icono_wc.svg" alt="icono wc">
                    <p>3</p>
                </li>
                <li>
                    <img class="icono" loading="lazy" src="build/img/icono_estacionamiento.svg" alt="icono icono_estacionamiento">
                    <p>3</p>
                </li>
                <li>
                    <img class="icono" loading="lazy" src="build/img/icono_dormitorio.svg" alt="icono dormitorio">
                    <p>4</p>
                </li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, sapiente! Quas, omnis inventore modi accusantium necessitatibus consequatur. Id, sed labore nihil expedita error quidem facere voluptas vel dignissimos, voluptates rem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ea aliquid voluptas doloribus, quo consequuntur architecto natus unde perspiciatis earum nostrum maiores temporibus id velit magnam asperiores sit, incidunt reiciendis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magnam laudantium architecto officia repudiandae reprehenderit numquam rem blanditiis debitis, ipsam totam fugiat iste officiis commodi amet minima nam exercitationem tenetur.</p>
        </div>

    </main>
<?php
    incluirTemplate('footer');
?>
