function button(){
    alert("test");
}

function create_folder(folder_name){

    alert('La carpeta de llamara : ' + folder_name);

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

    function gotFS(fileSystem) {

        alert("File system recived");

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