self.addEventListener('fetch', event => {
    if (event && 
        event.request && 
        event.request.url && 
        // check if basename includes a dot, i.e. if it is not a file
        ! event.request.url.split(/[\\/]/).pop().includes(".")
    ) {
      event.stopImmediatePropagation();
    }
  });
  
  self.importScripts('./ngsw-worker.js');