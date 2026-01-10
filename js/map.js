// --- DATOS SIMULADOS (Luego esto vendrá de tu GeoJSON) ---

// Base de Datos 1: DESALOJOS (Coordenadas cerca de Lima Centro)
var datosDesalojos = [
    { coords: [-12.046, -77.042], titulo: "Desalojo Centro" },
    { coords: [-12.055, -77.030], titulo: "Desalojo Barrios Altos" },
    { coords: [-12.035, -77.050], titulo: "Desalojo Cercado" }
];

// Base de Datos 2: CONFLICTOS (Coordenadas cerca de Miraflores/San Isidro para diferenciar)
var datosConflictos = [
    { coords: [-12.110, -77.030], titulo: "Conflicto Vial" },
    { coords: [-12.090, -77.020], titulo: "Protesta Urbana" },
    { coords: [-12.120, -77.040], titulo: "Conflicto Zonificación" }
];

// Configuración inicial común
var centroLima = [-12.070, -77.040]; // Un centro intermedio
var zoomInit = 12;

// ==========================================
// 1. MAPA GENERAL (Muestra TODO)
// ==========================================
var mapGeneral = L.map('map-general').setView(centroLima, zoomInit);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mapGeneral);

// Agregamos Desalojos (Círculos ROJOS)
datosDesalojos.forEach(function(item) {
    L.circleMarker(item.coords, {
        color: '#fd2827', // Tu rojo
        fillColor: '#fd2827',
        fillOpacity: 0.5,
        radius: 8
    }).addTo(mapGeneral).bindPopup("<b>Desalojo:</b> " + item.titulo);
});

// Agregamos Conflictos (Círculos AZULES)
datosConflictos.forEach(function(item) {
    L.circleMarker(item.coords, {
        color: '#0056b3', // Azul
        fillColor: '#0056b3',
        fillOpacity: 0.5,
        radius: 8
    }).addTo(mapGeneral).bindPopup("<b>Conflicto:</b> " + item.titulo);
});


// ==========================================
// 2. MAPA ESPECÍFICO: DESALOJOS
// ==========================================
var mapDesalojos = L.map('map-desalojos').setView([-12.046, -77.042], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mapDesalojos);

// Solo cargamos datosDesalojos
datosDesalojos.forEach(function(item) {
    L.circleMarker(item.coords, {
        color: '#fd2827', // Rojo
        fillColor: '#fd2827',
        fillOpacity: 0.7,
        radius: 10
    }).addTo(mapDesalojos).bindPopup(item.titulo);
});


// ==========================================
// 3. MAPA ESPECÍFICO: CONFLICTOS
// ==========================================
var mapConflictos = L.map('map-conflictos').setView([-12.110, -77.030], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mapConflictos);

// Solo cargamos datosConflictos
datosConflictos.forEach(function(item) {
    L.circleMarker(item.coords, {
        color: '#0056b3', // Azul
        fillColor: '#0056b3',
        fillOpacity: 0.7,
        radius: 10
    }).addTo(mapConflictos).bindPopup(item.titulo);
});