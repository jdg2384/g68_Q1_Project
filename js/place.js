$( document ).ready(function() {
    //event.preventDefault();
    var placeArray = [];
    localStorage.setItem('Location', placeArray);
    function splitString(){
        var locationSplit = window.location.href.split('?')[1].split('%20');
        flickr = locationSplit[0]+locationSplit[1];
        placeChoices = locationSplit[0]+' '+locationSplit[1];
        placeArray.push(placeChoices);
    }
    splitString();
    console.log(placeArray);
    var pictureArray =[]; 
    
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dc1d13330bebc0f61addf0d18f7b5270&tags="+flickr+"&safe_search=1&per_page=20";
            
    $.getJSON(url + "&format=json&jsoncallback=?", function(data){
        console.log(data);
        for(var i =0; i< 10; i++){
        var farm = data.photos.photo[i].farm;
        var id = data.photos.photo[i].id;
        var server = data.photos.photo[i].server;
        var secret = data.photos.photo[i].secret;
        pictureArray.push('http://farm'+farm+'.static.flickr.com/'+server+'/'+id+'_'+secret+'_c.jpg');
        
        }
        for(var i =0; i<pictureArray.length;i++){
            console.log('in the for loop ',pictureArray[i]);
            $("#placesPictures" ).append(`<div class="col-md-6"><img class="img-responsive" src="`+pictureArray[i]+`"></div>`);
        }
    });
});  



