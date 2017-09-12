function media(type, callback) {
   var mediaTypes = {
      sm: '(max-width: 640px)',
      'sm-md': '(max-width: 1024px)',
      md: '(min-width: 641px) and (max-width: 1024px)',
      'md-lg': '(min-width: 641px)',
      lg: '(min-width: 1025px)'
   }
   var currentMedia
   for(var mediaType in mediaTypes) {
      if(mediaType === type) currentMedia = mediaTypes[mediaType]
   }
   if(window.matchMedia(currentMedia).matches) callback()
}
