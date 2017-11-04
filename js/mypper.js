


$( document ).ready(function() {
    $("#map").addClass("map");
    
    var favoriteLocation = [];

    
    
    $( "#submit" ).on( "click", function() {
        event.preventDefault();
        
        
        var key = 'AIzaSyAucu-0t05lrs1nV296Sa2nkvg92qFzt7s';
        var mapKey = 'AIzaSyBj076Id5nrVYr8ULvRQ3k1F9JiYlf_-JA';
        var name = $( "#mapLookUp" ).val();
        localStorage.setItem('Location', name);
        var $xhr = $.getJSON('https://googleplacesg68.herokuapp.com/maps/api/place/textsearch/json?query='+name+'&key='+ key);
        $xhr.done(function(data) {
            if ($xhr.status !== 200) {
                return;
            }
            //for(var i=0; i<data.results.length;i++){
                var latitude = data.results[0].geometry.location.lat;
                var longitude = data.results[0].geometry.location.lng;
                
                $("#placesHref").attr("href", "./place.html?"+name);
                function initMap() {
                    var uluru = {lat: latitude, lng: longitude};
                    favoriteLocation.push(uluru);
                    
                    var map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 5,
                      center: favoriteLocation[favoriteLocation.length -1],
                      styles: styles,
                    });
                    var marker = new google.maps.Marker({
                      position: uluru,
                      map: map
                    });
                    if(favoriteLocation.length > 0){
                    for(var i = 0; i<favoriteLocation.length;i++){
                        var marker = new google.maps.Marker({
                            position: favoriteLocation[i],
                            map: map
                        });
                    }
                  }
                  }
                initMap();
            })
       // });
        ///End of submit event.
        
    });  
    
});  
