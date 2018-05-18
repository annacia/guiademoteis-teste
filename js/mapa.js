function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(-26.8685063,-49.0982589);
    var mapProp= {
        // center:new google.maps.LatLng(51.508742,-0.120850),
        center:new google.maps.LatLng(-26.8685063,-49.0982589),
        zoom:18,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: "img/pin-mapa.png"
    });
    marker.setMap(map);
}