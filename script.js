function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.66841074456351, lng: 135.43024709795904
        },
        zoom: 18,
        mapId: '22af6788193f5b19',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false

      });
    
    // Name
    // Latitude, Longitude
    // Image URL
    // scaledSize width, height

    const markers = [
      [
        "Yoshi\'s House",
        34.66822544005415,
        135.43040601891443,
        "yoshi_house.svg",
        38,
        31
      ],
      [
        'You Are Here',
        34.66767112713121,
        135.4297887322531,
        'pointer.svg',
        30,
        47.8,
      ],
      [
        'Ghost House',
        34.66832715150856,
        135.43292762674864,
        'ghosthouse.svg',
        40,
        48,
      ],
      [
        'Yoshi',
        34.66942660300762, 
        135.43115636687202,
        'Yoshi.svg',
        40,
        48,
      ],
      [
        'Castle', 
        34.66775608022106, 
        135.43139547897843, 
        'castle.svg', 
        40, 53
      ],
      [
        'Warp Pipe', 
        34.66739738878135, 
        135.43225049775214, 
        'pipe.svg', 
        38, 
        42.5
      ],
      [
        'Warp Pipe',  
        34.66702205364187, 
        135.42980453352874, 
        'pipe.svg', 
        38, 
        42.5
      ],
      [
        'Star World', 
        34.667959023359266, 
        135.42866400953733, 
        'star.svg', 
        38, 
        38
      ],
      [
        'Donut Plains',
        34.66830355359945,
        135.4320565322381,
        'hill_with_eyes.svg',
        50,
        60.7,
      ],
      [
        'Donut Plains',
        34.66829411443392,
        135.43231361996433,
        'hill_with_eyes.svg',
        50,
        60.7,
      ],
      [
        'Donut Plains',
        34.6683781779677,
        135.43217016043528,
        'hill_with_eyes.svg',
        50,
        60.7,
      ],
      [
        "It\'s me, Mario!",
        34.668941286737706, 
        135.4333986936076,
        'Mario.svg',
        50,
        60.7,
      ],
    ];

    for(let i = 0; i<markers.length; i++){
      const currMarker = markers[i];

      const marker = new google.maps.Marker({
        position: { lat: currMarker[1], lng: currMarker[2] },
        map,
        title: currMarker[0],  
        icon: {
            url: currMarker[3],
            scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
        },
        animation: google.maps.Animation.DROP
      });
    
        const infowindow = new google.maps.InfoWindow({
          content: currMarker[0],
      });
    
        marker.addListener("click", () => {
          infowindow.open(map, marker);
      });
    }

}
 

// 34.66841074456351, 135.43024709795904
// 34.66822544005415, 135.43040601891443


// const currMarker = markers[i];

//       const marker = new google.maps.Marker({
//         position: { lat: 34.66822544005415, lng: 135.43040601891443 },
//         map,
//         title: "Yoshi\'s House",  
//         icon: {
//             url: "yoshi_house.svg",
//             scaledSize: new google.maps.Size(38, 31)
//         },
//         animation: google.maps.Animation.DROP
//       });
    
//         const infowindow = new google.maps.InfoWindow({
//           content: "Yoshi\'s House",
//       });
    
//         marker.addListener("click", () => {
//           infowindow.open(map, marker);
//       });
//     }

// }


