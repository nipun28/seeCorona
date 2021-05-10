function updateMap() {

    console.log("Updating");
  fetch("data.json")
    .then((response) => response.json())
    .then((rsp) => {

      let sum = 0, num = 0;
      rsp.data.forEach((element) => {

          const longitude = element.longitude;
          const latitude = element.latitude;
          const infected = element.infected;

          sum += infected;
          num++;

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

      console.log(sum/num);
    });

}

// setInterval(updateMap, 1);
updateMap();
