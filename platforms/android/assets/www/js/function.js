function button(){

    alert("test");
}

function create_file(){

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

    function fail() {
        alert("failed to get filesystem");
    }

    function gotFS(fileSystem) {
        alert("filesystem got");
        fileSystem.root.getDirectory("Carpeta", {
            create : true,
            exclusive : false
        }, dirReady, fail);
    }

    function dirReady(entry) {
        window.appRootDir = entry;
        alert(JSON.stringify(window.appRootDir));
    }

}