<?php

    $id = $_GET['id'];
    $id = filter_var($id, FILTER_VALIDATE_INT);

    if(!$id){
        header('Location: /admin');
    }
    // var_dump($id);

    //Base de datos

    require '../../includes/config/database.php';

    $db = conectarDB();

    //obtener los datos de las propiedades
    $consulta = "SELECT * FROM propiedades WHERE id=$id";
    $resultado = mysqli_query($db, $consulta);
    $propiedad = mysqli_fetch_assoc($resultado);

    //consultar para obtener los vendedores

    $consulta = "SELECT * FROM vendedores";
    $resultado =mysqli_query($db, $consulta);
    //  arregla con mensajes de errores

    $errores = [];

    
    $titulo = $propiedad['titulo']; 
    $precio = $propiedad['precio']; 
    $descripcion = $propiedad['descripcion'];
    $habitaciones = $propiedad['habitaciones'];
    $wc = $propiedad['wc']; 
    $estacionamiento = $propiedad['estacionamiento'];
    $vendedores_id = $propiedad['vendedores_id'];
    $imagenPropiedad = $propiedad['imagen'];

    //ejecutar el coódigo después de que el usuario envia el formulario
    if($_SERVER['REQUEST_METHOD'] == 'POST') {


        // $numero = "1HOLA";
        // $numero1 = 1;

        //Sanitizar

        // $resultado = filter_var($numero, FILTER_SANITIZE_NUMBER_INT);

        // var_dump($resultado);

        // // exit;
        // echo "<pre>";
        // var_dump($_POST);
        // echo "</pre>";
        
        // echo "<pre>";
        // var_dump($_FILES);
        // echo "</pre>";


        $titulo = mysqli_real_escape_string( $db, $_POST['titulo'] );
        $precio = mysqli_real_escape_string( $db, $_POST['precio'] );
        $descripcion = mysqli_real_escape_string( $db, $_POST['descripcion'] );
        $habitaciones = mysqli_real_escape_string( $db, $_POST['habitaciones'] );
        $wc = mysqli_real_escape_string( $db, $_POST['wc'] );
        $estacionamiento = mysqli_real_escape_string( $db, $_POST['estacionamiento'] );
        $vendedores_id = mysqli_real_escape_string( $db, $_POST['vendedor'] );
        $creado = date('Y/m/d');
        $imagen = $_FILES['imagen'];

        //Asignar files hacia una variable


        if(!$titulo){
            $errores[] = "Debes añadir un título";
        }
        if(!$precio){
            $errores[] = "El Precio es obligatorio";
        }
        if(strlen( $descripcion) < 50){
            $errores[] = "La descripcion es obligatorio y debe tener al menos 50 caracteres";
        }
        if(!$habitaciones){
            $errores[] = "El Número de Habitaciones es obligatorio";
        }
        if(!$wc){
            $errores[] = "El Número de wc es obligatorio";
        }
        if(!$estacionamiento){
            $errores[] = "El Número de lugar de estacionamientos es obligatorio";
        }
        if(!$vendedores_id){
            $errores[] = "Elige un vendedor";
        }
        // validar imagen por tamaño (kb maximo)

        $medida = 1000 * 200;

        if($imagen['size'] > $medida){
            $errores[] = "La imagen es muy Grande";
        }

        //  echo "<pre>";
        //  var_dump($errores);
        //  echo "</pre>";

        
        if (empty($errores)){
            // Subida de Archivos 

            // Crear Carpeta 

             $carpetaImagenes = '../../imagenes/';

             if(!is_dir($carpetaImagenes)){
                 mkdir($carpetaImagenes);
             }

             $nombreImagen = '';
             
             if($imagen['name']){
                //Eliminar la imagen Previa
                unlink($carpetaImagenes . $propiedad['imagen']);
            // //Generar un nombre unico
                 $nombreImagen = md5(uniqid( rand(), true )) . ".jpg";
             // // subir la imagen
                move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $nombreImagen);
             }else{
                $nombreImagen = $propiedad['imagen'];
             }
            
    
            //insertar en la base de datos
            $query = "UPDATE propiedades SET titulo ='$titulo', precio = '$precio', imagen = '$nombreImagen', descripcion = '$descripcion', habitaciones= $habitaciones, wc = $wc, estacionamiento = $estacionamiento, vendedores_id =$vendedores_id WHERE id = $id";
            
            $resultado = mysqli_query($db, $query);
    
        
        // Mensaje de exito
        if($resultado) {
            // Redireccionar al usuario.
            header('Location: /admin?resultado=2');
        }
    }
    }


    require '../../includes/funciones.php';
    incluirTemplate('header');

    
?>
    <main class="contenedor seccion">
        <h1>Actualizar Propiedad</h1>
        <a href="/admin" class="boton boton-verde">Volver</a>

        <?php foreach($errores as $error): ?>
        <div class="alerta error">
        <?php echo $error; ?>
        </div>
        <?php endforeach ?>
        <form  
        class="formulario" 
        method="POST"
        enctype="multipart/form-data"
        >
            <fieldset>
                <legend>Informacion General</legend>

                <label for="titulo">Título:</label>
                <input type="text" id="titulo" name="titulo" placeholder="Título Propiedad" value="<?php echo $titulo; ?>">

                <label for="precio">Precio:</label>
                <input
                type="number" 
                id="precio" 
                name="precio" 
                placeholder="Precio Propiedad" 
                value="<?php echo $precio; ?>">

                <label for="imagen">Imagen:</label>
                <input 
                type="file" 
                id="imagen" 
                accept="image/jpeg, image/png"
                name = "imagen">
                <img class="imagen_small" src="/imagenes/<?php echo $imagenPropiedad ?>" alt="">

                <label for="descripcion">Descripción:</label>
                <textarea 
                name="descripcion" 
                id="descripcion" >
                    <?php echo $descripcion; ?>
                </textarea>

            </fieldset>
            <fieldset>
                <legend>Información Propiedad</legend>

                <label for="habitaciones">Habitaciones</label>
                <input 
                type="number" 
                id="habitaciones" 
                name="habitaciones" 
                placeholder="Ej: 3" 
                min="1" max="9" 
                value="<?php echo $habitaciones; ?>" >

                <label for="wc">Baños</label>
                <input type="number" 
                id="wc" 
                name="wc" 
                placeholder="Ej: 3" 
                min="1" max="9" 
                value="<?php echo $wc; ?>">

                <label for="estacionamiento">Estacionamiento</label>
                <input 
                type="number" 
                id="estacionamiento" 
                name="estacionamiento" 
                placeholder="Ej: 3" 
                min="1" max="9" 
                value="<?php echo $estacionamiento; ?>">

            </fieldset>

            <fieldset>

                <legend>Vendedor</legend>
                <select name="vendedor" id="">
                    <option 
                    value="">-- Seleccione --</option>
                    
                    <?php while($vendedor = mysqli_fetch_assoc($resultado) ) :?>
                    <option <?php echo $vendedores_id === $vendedor['id'] ? 'selected' : ''; ?>
                     
                    value=" <?php echo $vendedor['id'] ?> ">

                    <?php echo $vendedor['nombre'] . " " . $vendedor['apellidos'] ; ?>
                    </option>
                    <?php endwhile; ?>
                </select>
            </fieldset>
            <input type="submit" 
            value="Actualizar Propiedad" 
            class="boton boton-verde">
        </form>


    </main>
<?php
    incluirTemplate('footer');
?>