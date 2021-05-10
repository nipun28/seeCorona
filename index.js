function updateMap() {

  fetch("data.json")
    .then((response) => response.json())
    .then((rsp) => {

      rsp.data.forEach((element) => {

          const longitude = element.longitude;
          const latitude = element.latitude;
          const infected = element.infected;

          var color;
          if(infected < 100) color = 'green';
          else if(infected < 250) color = 'lightgreen';
          else if(infected < 500) color = 'yellow';
          else if(infected < 1000) color = 'orange';
          else color = 'red';

          var marker = new mapboxgl.Marker({
              color: color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
      });

    });

}

updateMap();
