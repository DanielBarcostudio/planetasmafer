// Función para mostrar la información del planeta
function showPlanetInfo(planetName) {
  var planetInfo = {
    "Plutón": "Te amo hasta plutón y lo que queda más alla.",
    "Neptuno": "Si Neptuno supiera que cualquier universo es demasiado pequeño comparado con tus ojos.",
    "Urano": "Urano invita a establecer relaciones más profundas y es lo que quiero vivir contigo Fernanda.",
    "Saturno": "Saturno simboliza el amor inquebrantable,que perdurarán juntos para siempre.",
    "Marte": " Marte es el planeta de la acción, energia fisica y sexual jaja somos calenturientos por naturaleza jaja pero nosotros nos pasamos.",
    "Tierra": "La tierra es donde vivimos para estar por siempre .",
    "Venus": " Nombrado a partir de la diosa romana del amor y la bellez; como tu por completo.",
    "Mercurio": " Planeta que rige la comunicacion, la mente , pensamiento ; quiero todo esto en nuestra relación.",
    "Sol": "Cada día el sol ilumina un mundo nuevo, pero tu sonrisa ilumina mi mundo.",
    "Cinturón de Asteroides": "El cinturon representa que siempre voy a estar ahi para ti cuidandote y apoyandote.",
    "Júpiter": "Se asocia con la expansión, la abundancia y el crecimiento y quiero esto contigo"
  };

  document.getElementById("planet-info").innerText = planetInfo[planetName];
  document.getElementById("popup").style.display = "block";
}

// Función para cerrar el popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Agregar eventos de clic a las órbitas
var orbitas = document.querySelectorAll('.orbita');
orbitas.forEach(function(orbita) {
  orbita.addEventListener('click', function() {
    var planetName = this.textContent.trim();
    showPlanetInfo(planetName);
  });
});
