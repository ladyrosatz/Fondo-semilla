// 1. Inicializar el mapa
// L.map('id-del-div')
// .setView([Latitud, Longitud], Zoom)
// Coordenadas ejemplo: Lima, Perú (-12.046, -77.042)
var map = L.map('map').setView([-12.046, -77.042], 13);

// 2. Añadir la capa base (El mapa visual)
// Usamos OpenStreetMap que es gratis y open source
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// 3. (Opcional) Un marcador de prueba para ver que funciona
var marker = L.marker([-12.046, -77.042]).addTo(map);
marker.bindPopup("<b>Nombre Ejemplito</b><br>Texto Ejemplito").openPopup();