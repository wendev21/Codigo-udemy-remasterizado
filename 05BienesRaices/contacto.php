<?php

    require 'includes/funciones.php';
    incluirTemplate('header');
?>
    <main class="contenedor seccion">
        <h1>Contacto</h1>
        <picture>
            <source srcset="build/img/destacada3.webp" type="image/webp">
            <source srcset="build/img/destacada3.webp" type="image/jpeg">
            <img loading="lazy" src="build/img/destacada3.jpg" alt="imagen contacto">
        </picture>
        <h2>Llene el formulario de Contacto</h2>

        <form action="" class="formulario">
            <fieldset>
                <legend>Información Personal</legend>
                <label for="nombre">Nombre</label>
                <input type="text" placeholder="Tu Nombre" id="nombre">
               
                <label for="Email">E-mail</label>
                <input type="mail" placeholder="Tu E-mail" id="Email">

                <label for="Telefono">Teléfono</label>
                <input type="tel" placeholder="Tu Teléfono" id="Telefono">

                <label for="mensaje">Mensaje: </label>
                <textarea name="" id="mensaje"></textarea>            
            </fieldset>

            <fieldset>
                <legend>Información Sobre la Propiedad</legend>

                <label for="opciones">Vende o Compra</label>
                <select name="" id="opciones">
                    <option value="" disabled selected>-- Seleccione --</option>
                    <option value="compra">Compra</option>
                    <option value="vende">Vende</option>

                </select>

                <label for="presupuesto">Precio o Presupuesto</label>
                <input type="number" placeholder="Tu Precio o Presupuesto" id="presupuesto">

            </fieldset>

            <fieldset>
                <legend>Contacto</legend>

                <p>Como desea ser Contactado</p>
                <div class="forma-contacto">
                    <label for="contactar-telefono">Teléfono</label>
                    <input type="radio" value="telefono" id="contactar-telefono" name="contacto">

                    <label for="contactar-email">Email</label>
                    <input type="radio" value="email" id="contactar-email" name="contacto">
                </div>
                
                <p>Si eligió Teléfono, eliga la fecha y la hora</p>

                <label for="fecha">Fecha : </label>
                <input type="date" id="fecha">

                <label for="hora">Hora : </label>
                <input type="time" id="nombre" min="09:00" max="18:00">
                
            </fieldset>

            <input type="submit" value="Enviar" class="boton-verde">
        </form>
    </main>
<?php
    incluirTemplate('footer');
?>
