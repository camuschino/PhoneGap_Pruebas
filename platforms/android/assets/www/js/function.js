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

function create_file(file_name, file_text) {

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
        alert("Archivo creado.");

// Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function(fileWriter) {
            fileWriter.write(file_text);
            alert("Archivo escrito.");

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

/*
* Funciones referentes al manejo
* y manipulacion de bases de datos
*
*POSIBLES ERRORES EN EL TRATO DE BD
 UNKNOWN_ERR = 0;

 DATABASE_ERR = 1;
 VERSION_ERR = 2;

 TOO_LARGE_ERR = 3;
 QUOTA_ERR = 4;
 SYNTAX_ERR = 5;
 CONSTRAINT_ERR = 6;
 TIMEOUT_ERR = 7;
* */

// Cordova is ready
//
 function CrearDB() {
     var db = window.openDatabase("phonegapspain", "1.0", "Test DB", 100000);
     db.transaction(populateDB, errorCB, successCB);     }

 // Populate the database
 function populateDB(tx) {
     tx.executeSql('DROP TABLE IF EXISTS DEMO');
     tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
     tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
     tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
 }

 // Transaction error callback
 function errorCB(tx, err) {
     alert("Error processing SQL: "+err);
 }

 // Transaction success callback
function successCB() {
    alert("success!");
}

var ultimallave;

function ConsultarDB(){
    var db = window.openDatabase("phonegapspain", "1.0", "Test DB", 100000);

db.transaction(datosSql ,errorCB, successCB);

    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    function successCB(tx,results) {
        console.log("transaccion sql, OK.");
    }

    //SENTENCIAS SQL
    function datosSql(tx,results){
        tx.

        tx.executeSql('SELECT * FROM DEMO order by id DESC limit 1',[],function (tx, results){
            alert(results.rows.item(0).data.toString());
        });

    }
}
