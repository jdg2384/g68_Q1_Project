$( document ).ready(function() {
    
    $( "#submit" ).on( "click", function() {
        event.preventDefault();
        var name = $( "#mapLookUp" ).val();
        var key = 'AIzaSyAucu-0t05lrs1nV296Sa2nkvg92qFzt7s';
        var mapKey = 'AIzaSyBj076Id5nrVYr8ULvRQ3k1F9JiYlf_-JA';
        var name = $( "#mapLookUp" ).val();
        
        var $xhr = $.getJSON('https://googleplacesg68.herokuapp.com/maps/api/place/textsearch/json?query='+name+'&key='+ key);
        $xhr.done(function(data) {
            if ($xhr.status !== 200) {
                return;
            }
            //console.log(data);
            for(var i=0; i<data.results.length;i++){
                var newHref = window.location.href+'?'+name;
                var latitude = data.results[i].geometry.location.lat;
                var longitude = data.results[i].geometry.location.lng;
                console.log(newHref);
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
                  //$("#map" ).append(initMap());
                
            }
        });
        ///End of submit event.
    });  
});  


$("#placesHref").attr("href", "./place.html?"+name);
    
    
    
    
    
    
    
    
    
    
//     $( "#submit" ).on( "click", function() {
//          event.preventDefault();
//          var name = $( "#mapLookUp" ).val();
         
//          var $xhr = $.getJSON('https://g68.herokuapp.com/geocoding/v5/mapbox.places/loveland.json?country=us&access_token=pk.eyJ1IjoiamRnMjM4NCIsImEiOiJjajk3bDB2em0wMTM3MnhwYXpndjR5azluIn0.rF-lTJv--A2S4vQFUaGwAQ');
         
//          $xhr.done(function(place) {
//              var apiToken = 'pk.eyJ1IjoiamRnMjM4NCIsImEiOiJjajk3bDB2em0wMTM3MnhwYXpndjR5azluIn0.rF-lTJv--A2S4vQFUaGwAQ';
//              //var googleApiToken = ;
//              if ($xhr.status !== 200) {
//                  return;
//              }
//              for(var i = 0; i<place.features.length;i++){
//                 if(typeof place.features[i].bbox === 'object'){
//                     //Information for card to display
//                     var placesChoice = place.features[i];
//                     var location = placesChoice['place_name'];
//                     var center = placesChoice['center'][0]+","+placesChoice['center'][1];
//                     console.log(place.features[i].bbox.length);
//                     var cordOne = placesChoice.bbox[1]+","+placesChoice.bbox[0];
//                 }
//                 else {
//                     return false;    
//                 } 
//                 //Variable for Map Picture
//                 var mapPicUrl = 'https://api.mapbox.com/v4/mapbox.outdoors/'+center+',10/400x200.png?access_token='+apiToken;
//                 // Card Html
//                 $("#places" ).append(`</br></br> 
//                 <a href="./place.html"><div class="placeInfo">
//                 <img src="`+mapPicUrl+`">
//                 <h4 class="nameOfLocation">`+placesChoice["place_name"]+`</h4>
//                 <p class="coordinates">`+cordOne+`</p>
//                 </div></br></br></a>`);
//                 //// Click event on cards collect pictures for place.html
//                 $( ".placeInfo" ).on( "click", function() {
                    
//                     var placeLocation = $(this).find('h4').text();
//                     var key = 'AIzaSyAucu-0t05lrs1nV296Sa2nkvg92qFzt7s';
//                     var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dc1d13330bebc0f61addf0d18f7b5270&tags="+placeLocation+"&safe_search=1&per_page=20";
//                    $.getJSON(url + "&format=json&jsoncallback=?", function(data){
                    
//                     var pictureArray =[];
//                     var pictureLocal = JSON.stringify(pictureArray);
//                     localStorage.setItem(pictureArray, pictureLocal);

//                          for(var i =0; i< 10; i++){
//                             var farm = data.photos.photo[i].farm;
//                             var id = data.photos.photo[i].id;
//                             var server = data.photos.photo[i].server;
//                             var secret = data.photos.photo[i].secret;
//                             pictureArray.push('http://farm'+farm+'.static.flickr.com/'+server+'/'+id+'_'+secret+'_z.jpg');
                            
//                          }
//                         pictureLoop();
//                     });
//                 });
//                 //// End cards click event 
//                 function pictureLoop (){
//                     for(var i =0; i<pictureArray.length;i++){
//                         console.log('in the for loop ',pictureArray[i]);
//                         $("#placesPictures" ).append(`<img src="`+pictureArray[i]+`">`);

//                     }
//                 } 
            
//             }
//         });
//     });
// });


// var $xhr = $.getJSON('http://www.omdbapi.com/?t=Frozen');

// $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//         return;
//     }

//     console.log(data);
// });