refreshImage = function(){
  var img = document.getElementById("dogs");

 //console.log(img.src);


   img.src  = "http://placecorgi.com/500/300"
   console.log("hello");
   callAjax("http://placecorgi.com/500/300",);
}
function getImage(){

  //alertTimerId = setInterval ( "refreshImage()", 5000 );

}

refreshImage();

function callAjax(url, callback){
    let xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
getImage();
