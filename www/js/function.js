
/*
 * Boton de prueba que arroja un mensaje
 * con el texto "test".
 * */
function button(){
    alert("test");
}

/*
* funcion para la creacion de carpetas
* El parametro "folder_name" tiene por funcion dar
* el nombre a la carpeta, y su valor se lo pasa
* una caja de texto en el index.html.
* */
function create_folder(folder_name){

    alert('La carpeta de llamara : ' + folder_name);

    // La siguiente funciona genera un FileSystem de caracter persistente.
    // El objeto FS es dirigido a la funcion gotFS mediante Callback.
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

    function gotFS(fileSystem) {

        alert("File system recived");

        // La siguiente funcion obtiene todos los datos de la carpeta que escogemos
        // y si la misma no existe, lo que hace es crearla en el directorio raiz o ROOT.
        // Luego se dirige a la funcion dirReady siguiendo con el patron callback.
        fileSystem.root.getDirectory(folder_name, {
            create : true,
            exclusive : false
        }, dirReady, fail);
    }

    function dirReady(entry) {
        window.appRootDir = entry;
        alert(JSON.stringify(window.appRootDir));
    }

    function fail() {
        alert("fCreate folder fail");
    }

}