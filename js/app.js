var map = new L.Map('map',{
	center: [40.7127,-74.0059], 
	zoom: 10,
	doubleClickZoom: true
});

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicnp0MTAxIiwiYSI6ImNpcHNmcmwwcDAzNHhoMm5yN3A1bXlteW0ifQ.10zV7Vnsy3ZpiKXA71G53A', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	minZoom: 9,
	id: 'nycedcmisgis.ndh346pj',
	accessToken: 'pk.eyJ1IjoibnljZWRjbWlzZ2lzIiwiYSI6ImViWWc2bXMifQ.tQLdsPcTjM1Db66vk8YoPA',
}).addTo(map);

var nabeStyle = {  
	"color": "#0194A7",
	"weight": 1,
	"opacity": .9,
	"fillOpacity": 0.2,
	"fillColor": "#0194A7"
};

var highlightStyle = {
	color: "#0194A7", 
	weight: 1,
	opacity: 0.6,
	fillOpacity: 0,
	fillColor: "#0194A7"
};

zoomStyle = {
	color: "#0194A7", 
	weight: 6,
	opacity: 0.6,
	fillOpacity: 0,
	fillColor: "#0194A7"
};
var hoverOnEachFeature = function(feature, layer) {
	// layer.setStyle(nabeStyle);
	(function(layer) {
		layer.on("mouseover", function (e) {
			layer.setStyle(highlightStyle);
		});
		layer.on("mouseout", function (e) {
			layer.setStyle(nabeStyle);
			});
		layer.on("click", function (e){
			map.fitBounds(layer.getBounds());
			layer.setStyle(zoomStyle);

			// map.panBy([150, 0]);
		}); 
		
	})(layer);
};	

var nycNeighborhoodsBoundary = L.geoJson(nycNeighborhoods, {
	style: nabeStyle,
	onEachFeature: hoverOnEachFeature
}).addTo(map);

// var zoomClick =  function(feature, layer) {
// map.on('dblclick', function(event){
//     layer.setStyle(zoomStyle);
// });
// }







