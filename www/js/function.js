function button() {
    alert("HOLAAAAA");
}

function create_folder(){

// request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }

    function onError(Cod_error) {
        console.log(Cod_error.code);
    }

}