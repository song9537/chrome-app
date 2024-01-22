function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
}
function onGeoError() {
  alert("Can't find you. No weather available.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
