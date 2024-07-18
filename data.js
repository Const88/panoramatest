var APP_DATA = {
  "scenes": [
    {
      "id": "0-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.2972354636422825,
        "pitch": 0.032699439981247025,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.056562159472653306,
          "pitch": 0.2050551622258574,
          "rotation": 0,
          "target": "1-livingroom0"
        },
        {
          "yaw": -3.048170866566629,
          "pitch": 0.11354844184343627,
          "rotation": 1.5707963267948966,
          "target": "8-entrance---copy"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-livingroom0",
      "name": "LivingRoom0",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4181969402552426,
          "pitch": 0.41695346375902176,
          "rotation": 0,
          "target": "2-livingroom1"
        },
        {
          "yaw": -3.0524592930703403,
          "pitch": 0.13275837605988094,
          "rotation": 0,
          "target": "3-hallway---copy"
        },
        {
          "yaw": -1.7361676927614145,
          "pitch": 0.39451207759884355,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-livingroom1",
      "name": "LivingRoom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.2906337619353945,
        "pitch": 0.11409052834098077,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.824905974699428,
          "pitch": 0.2630969064084141,
          "rotation": 0,
          "target": "4-livingroom0---copy"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway---copy",
      "name": "Hallway - Copy",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -3.0279577475884523,
        "pitch": -0.012727143816420039,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.03625323842273431,
          "pitch": 0.24200653645713288,
          "rotation": 0,
          "target": "1-livingroom0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-livingroom0---copy",
      "name": "LivingRoom0 - Copy",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.521274521477304,
        "pitch": 0.03398047916992297,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -3.0612123573782384,
          "pitch": 0.21008965636002586,
          "rotation": 0,
          "target": "3-hallway---copy"
        },
        {
          "yaw": 1.4548746769084477,
          "pitch": 0.257081603042872,
          "rotation": 0,
          "target": "5-livingroom1---copy"
        },
        {
          "yaw": -1.703342930961032,
          "pitch": 0.4327592231983619,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-livingroom1---copy",
      "name": "LivingRoom1 - Copy",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.279984993435983,
        "pitch": 0.07073652175632716,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.8011929208480701,
          "pitch": 0.252933748231186,
          "rotation": 0,
          "target": "4-livingroom0---copy"
        },
        {
          "yaw": -2.292353229104773,
          "pitch": 0.2112009955836598,
          "rotation": 5.497787143782138,
          "target": "3-hallway---copy"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1389521678158694,
          "pitch": 0.3797334845331424,
          "rotation": 0,
          "target": "7-livingroom0---copy---copy"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-livingroom0---copy---copy",
      "name": "LivingRoom0 - Copy - Copy",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.651716137569177,
        "pitch": 0.08523284213431381,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.4486185593746566,
          "pitch": 0.44664493452142473,
          "rotation": 0,
          "target": "2-livingroom1"
        },
        {
          "yaw": -1.715089492374764,
          "pitch": 0.4242207844180985,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -3.0225822700094724,
          "pitch": 0.32811734749323307,
          "rotation": 0,
          "target": "3-hallway---copy"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-entrance---copy",
      "name": "Entrance - Copy",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 3.119094672647006,
        "pitch": 0.0649660062512929,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 3.1003333220892255,
          "pitch": 0.2987393069888604,
          "rotation": 9.42477796076938,
          "target": "9-entrance"
        },
        {
          "yaw": -0.2821839471241496,
          "pitch": 0.24427725337960737,
          "rotation": 4.71238898038469,
          "target": "0-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3418841227261318,
          "pitch": 0.2104554176537068,
          "rotation": 4.71238898038469,
          "target": "0-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FestivalPark",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
