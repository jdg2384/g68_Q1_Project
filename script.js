$( document ).ready(function() {
    // Click Event to search location
    $( "#submit" ).on( "click", function() {
         event.preventDefault();
         var name = $( "#mapLookUp" ).val();
         
         var $xhr = $.getJSON('https://g68.herokuapp.com/geocoding/v5/mapbox.places/'+name+'.json?country=us&access_token=pk.eyJ1IjoiamRnMjM4NCIsImEiOiJjajk3bDB2em0wMTM3MnhwYXpndjR5azluIn0.rF-lTJv--A2S4vQFUaGwAQ');
         
         $xhr.done(function(place) {
             var apiToken = 'pk.eyJ1IjoiamRnMjM4NCIsImEiOiJjajk3bDB2em0wMTM3MnhwYXpndjR5azluIn0.rF-lTJv--A2S4vQFUaGwAQ';
             //var googleApiToken = ;
             if ($xhr.status !== 200) {
                 return;
             }
             for(var i = 0; i<place.features.length;i++){
                console.log(typeof place.features[i].bbox);
                if(typeof place.features[i].bbox === 'object'){
                    //Information for card to display
                    var placesChoice = place.features[i];
                    var location = placesChoice['place_name'];
                    var center = placesChoice['center'][0]+","+placesChoice['center'][1];
                    console.log(place.features[i].bbox.length);
                    var cordOne = placesChoice.bbox[1]+","+placesChoice.bbox[0];
                }
                else {
                    return false;    
                } 
                //Variable for Map Picture
                var mapPicUrl = 'https://api.mapbox.com/v4/mapbox.outdoors/'+center+',10/400x200.png?access_token='+apiToken;
                // Card Html
                $("#places" ).append(`</br></br> 
                <div class="placeInfo">
                <img src="`+mapPicUrl+`">
                <h4 class="nameOfLocation">`+placesChoice["place_name"]+`</h4>
                <p class="coordinates">`+cordOne+`</p>
                </div></br></br>`);

                $( ".placeInfo" ).on( "click", function() {
                    event.preventDefault();
                    var latLong = $(this).find('p').text();
                    var placeLocation = $(this).find('h4').text();
                    var key = 'AIzaSyAucu-0t05lrs1nV296Sa2nkvg92qFzt7s';
                    //console.log('https://googleplacesg68.herokuapp.com/maps/api/place/nearbysearch/json?location='+latLong+'&radius=500&type=town&keyword=&key='+ key);
                    //console.log(latLong);
                    
                    var $xhr = $.getJSON('https://googleplacesg68.herokuapp.com/maps/api/place/nearbysearch/json?location='+latLong+'&radius=500&type=town&keyword=&key='+ key);
                    
                    $xhr.done(function(data) {
                        console.log('https://googleplacesg68.herokuapp.com/maps/api/place/nearbysearch/json?location='+latLong+'&radius=500&type=town&keyword=&key='+ key);
                       const googleCords = data.results[0].geometry.location.lat+','+data.results[0].geometry.location.lng;
                        
                        if ($xhr.status !== 200) {
                            return;
                    
                        }
                        var $xhrX = $.getJSON('https://googleplacesg68.herokuapp.com/maps/api/place/nearbysearch/json?location='+googleCords+'&radius=500&type=restaurant&keyword=cruise&key='+ key);
                        
                    });
                        
                    $xhr.done(function(detail) {
                        console.log("detail", detail);
                        if ($xhr.status !== 200) {
                            return;
                    
                        }
                    });

                });

            }
        });
    });
});
// Places search
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
//Photo url
//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyAucu-0t05lrs1nV296Sa2nkvg92qFzt7s
//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAcVJNm2x9ghLBPge7KYHg1ojt4K6dY3QhAxeNhXjlOr…HsRk4OJqX1EVmmBlvzUGhSqeVHfFjdTXYL5MDecCQyiV0m5Ug&key=AIzaSyAucu-0t05lrs1nV296Sa2nkvg92qFzt7s













