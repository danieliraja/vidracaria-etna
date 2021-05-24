let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -22.83738170448839, lng: -43.32463878465789 },
    zoom: 8,
    });
}

initMap()