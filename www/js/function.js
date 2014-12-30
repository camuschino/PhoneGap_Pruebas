/*
 * funcion para la creacion de carpetas
 * El parametro "folder_name" tiene por funcion dar
 * el nombre a la carpeta, y su valor se lo pasa
 * una caja de texto en el index.html.
 * */
function create_folder(folder_name) {

    alert('La carpeta se llamara : ' + folder_name);

    // La siguiente funciona genera un FileSystem de caracter persistente.
    // El objeto FS es dirigido a la funcion gotFS mediante Callback.
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

    function gotFS(fileSystem) {

        alert("File system recived");

        // La siguiente funcion obtiene todos los datos de la carpeta que escogemos
        // y si la misma no existe, lo que hace es crearla en el directorio raiz o ROOT.
        // Luego se dirige a la funcion dirReady siguiendo con el patron callback.
        fileSystem.root.getDirectory(folder_name, {
            create: true,
            exclusive: false
        }, dirReady, fail);
    }

    function dirReady(entry) {
        window.appRootDir = entry;
        alert(JSON.stringify(window.appRootDir));
    }

    function fail(e) {
        alert("fail to Create File");

        var msg = '';

        switch (e.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
                msg = 'QUOTA_EXCEEDED_ERR';
                break;
            case FileError.NOT_FOUND_ERR:
                msg = 'NOT_FOUND_ERR';
                break;
            case FileError.SECURITY_ERR:
                msg = 'SECURITY_ERR';
                break;
            case FileError.INVALID_MODIFICATION_ERR:
                msg = 'INVALID_MODIFICATION_ERR';
                break;
            case FileError.INVALID_STATE_ERR:
                msg = 'INVALID_STATE_ERR';
                break;
            default:
                msg = 'Unknown Error';
                break;
        };

        alert('Error: ' + msg);
    }
}

function create_file(file_name) {

    alert('El archivo: ' + file_name);

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 1024*1024, gotFS, fail);

    function gotFS(fileSystem) {

        alert("File system recived");

        fileSystem.root.getFile(file_name + '.txt', {
            create: true,
            exclusive: false
        }, FileReady, fail);
    }

    function FileReady(fileEntry) {
        alert(1);
// Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function(fileWriter) {
            alert(2);

            fileWriter.onwriteend = function(e) {
                alert('Write completed.');
            };

            fileWriter.onerror = function(e) {
                alert('Write failed: ' + e.toString());
            };

            // Create a new Blob and write it to log.txt.
            var bb = new BlobBuilder();
            bb.append('Lorem Ipsum');
            alert(3);

            fileWriter.write(bb.getBlob('text/plain'));

        }, fail);
    }


    function fail(e) {
        alert("fail to Create File");

        var msg = '';

        switch (e.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
                msg = 'QUOTA_EXCEEDED_ERR';
                break;
            case FileError.NOT_FOUND_ERR:
                msg = 'NOT_FOUND_ERR';
                break;
            case FileError.SECURITY_ERR:
                msg = 'SECURITY_ERR';
                break;
            case FileError.INVALID_MODIFICATION_ERR:
                msg = 'INVALID_MODIFICATION_ERR';
                break;
            case FileError.INVALID_STATE_ERR:
                msg = 'INVALID_STATE_ERR';
                break;
            default:
                msg = 'Unknown Error';
                break;
        };

        alert('Error: ' + msg);
    }
}