// Função para inicializar o mapa
function initMap() {
    // Coordenadas do seu mercado
    var myLatLng = {lat: -23.550520, lng: -46.633308};
  
    // Opções do mapa
    var mapOptions = {
      center: myLatLng,
      zoom: 15
    };
  
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Marcador do seu mercado
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Meu Mercado'
    });
  }
  
  