$( document ).ready(function() {
    
    $( "#submit" ).on( "click", function() {
        event.preventDefault();
        //$("#map").slideDown();
        $("#map").addClass("map");
        $(".header").addClass("header");
		
        var name = $( "#mapLookUp" ).val();
        var key = 'AIzaSyAucu-0t05lrs1nV296Sa2nkvg92qFzt7s';
        var mapKey = 'AIzaSyBj076Id5nrVYr8ULvRQ3k1F9JiYlf_-JA';
        var name = $( "#mapLookUp" ).val();
        localStorage.setItem('Location', name);
        var $xhr = $.getJSON('https://googleplacesg68.herokuapp.com/maps/api/place/textsearch/json?query='+name+'&key='+ key);
        $xhr.done(function(data) {
            if ($xhr.status !== 200) {
                return;
            }
            for(var i=0; i<data.results.length;i++){
                var newHref = window.location.href+'?'+name;
                var latitude = data.results[i].geometry.location.lat;
                var longitude = data.results[i].geometry.location.lng;
                $("#placesHref").attr("href", "./place.html?"+name);
                function initMap() {
                    var uluru = {lat: latitude, lng: longitude};
                    var map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 8,
                      center: uluru,
                      styles: styles,
                    });
                    var marker = new google.maps.Marker({
                      position: uluru,
                      map: map
                    });
                  }
                initMap();
            }
        });
        ///End of submit event.
    });  
});  



    
    
    
    
    
    
    
    
    
    
