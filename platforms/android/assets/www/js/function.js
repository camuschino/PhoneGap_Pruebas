function button(){

    alert("test");
}

function create_file(){

    alert("test");

    window.requestFileSystem(window.PERSISTENT, onInitFs(), errorHandler());


    function onInitFs(fs) {
        alert("test");

        fs.root.getFile('looog.txt', {create: true}, function(fileEntry) {
            alert("test");

            // Create a FileWriter object for our FileEntry (log.txt).
            fileEntry.createWriter(function(fileWriter) {
                alert("test");

                fileWriter.onwriteend = function(e) {
                    alert('Write completed.');
                };

                fileWriter.onerror = function(e) {
                    alert('Write failed: ' + e.toString());
                };

                // Create a new Blob and write it to log.txt.
                var bb = new BlobBuilder(); // Note: window.WebKitBlobBuilder in Chrome 12.
                bb.append('Lorem Ipsum');
                fileWriter.write(bb.getBlob('text/plain'));

            }, errorHandler());

        }, errorHandler());

    }

    function errorHandler(e) {
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

        console.log('Error: ' + msg);
    }

}