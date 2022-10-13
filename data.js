var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "Reception",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5842219364256174,
        "pitch": 0.07345326815483588,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.6654321945612001,
          "pitch": 0.02297368900008223,
          "rotation": 0,
          "target": "1-reception01"
        },
        {
          "yaw": 0.058824077754053405,
          "pitch": 0.04544934514665755,
          "rotation": 0,
          "target": "3-lounge"
        },
        {
          "yaw": 1.0186248855708158,
          "pitch": 0.025879470931332804,
          "rotation": 0,
          "target": "2-reception02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception01",
      "name": "Reception01",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.0579548322319994,
        "pitch": -0.0263760694984132,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.910274762714625,
          "pitch": 0.13014804385818834,
          "rotation": 0,
          "target": "0-reception"
        },
        {
          "yaw": 1.6743140086626225,
          "pitch": 0.11363608874426134,
          "rotation": 0,
          "target": "2-reception02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception02",
      "name": "Reception02",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.1320496694547852,
        "pitch": 0.17308019439378342,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 3.1320496694547852,
          "pitch": 0.17308019439378342,
          "rotation": 0,
          "target": "0-reception"
        },
        {
          "yaw": -1.3962604149738418,
          "pitch": 0.13603083008534256,
          "rotation": 0,
          "target": "1-reception01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lounge",
      "name": "Lounge",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.59452466432227,
          "pitch": 0.3245249238491752,
          "rotation": 0,
          "target": "0-reception"
        },
        {
          "yaw": 0.004441121265649883,
          "pitch": 0.08418161378986966,
          "rotation": 0,
          "target": "4-lounge01"
        },
        {
          "yaw": -3.0822669391165824,
          "pitch": 0.07763001498428501,
          "rotation": 0,
          "target": "21-yoga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lounge01",
      "name": "Lounge01",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7302966640715614,
          "pitch": 0.1858059258268625,
          "rotation": 0,
          "target": "3-lounge"
        },
        {
          "yaw": -0.2036509184812587,
          "pitch": 0.06947787519228399,
          "rotation": 0,
          "target": "5-lounge02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lounge02",
      "name": "Lounge02",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6956282457435616,
          "pitch": 0.09473741999185847,
          "rotation": 0,
          "target": "4-lounge01"
        },
        {
          "yaw": -0.062096298312482645,
          "pitch": 0.0884206807460437,
          "rotation": 0,
          "target": "6-lounge03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lounge03",
      "name": "Lounge03",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1098992588867382,
          "pitch": 0.09632132762092738,
          "rotation": 0,
          "target": "5-lounge02"
        },
        {
          "yaw": -0.07093931096579098,
          "pitch": 0.0839717785613523,
          "rotation": 0,
          "target": "7-lounge04"
        },
        {
          "yaw": 1.0506616219409324,
          "pitch": 0.15395524587783171,
          "rotation": 0,
          "target": "12-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lounge04",
      "name": "Lounge04",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0431250752456496,
          "pitch": 0.09426984297778773,
          "rotation": 0,
          "target": "6-lounge03"
        },
        {
          "yaw": 2.2291501977633743e-10,
          "pitch": 0.09739613495675847,
          "rotation": 0,
          "target": "8-lounge05"
        },
        {
          "yaw": 1.5632435852911586,
          "pitch": 0.1408654902911195,
          "rotation": 0,
          "target": "15-bar-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lounge05",
      "name": "Lounge05",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.668776906899078,
          "pitch": 0.08245463478477078,
          "rotation": 0,
          "target": "7-lounge04"
        },
        {
          "yaw": 0.173658781691703,
          "pitch": 0.19856864061550894,
          "rotation": 0,
          "target": "9-co-work"
        },
        {
          "yaw": 1.5366548669467512,
          "pitch": 0.15522183059946926,
          "rotation": 0,
          "target": "16-bar-dinning01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-co-work",
      "name": "Co-Work",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.017828262346482,
          "pitch": 0.09305914345985933,
          "rotation": 0,
          "target": "8-lounge05"
        },
        {
          "yaw": 0.3954747685346369,
          "pitch": 0.14447786033456822,
          "rotation": 0,
          "target": "10-co-work01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-co-work01",
      "name": "Co-Work01",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.140763875793665,
        "pitch": -0.018698587618459328,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.844600793183835,
          "pitch": 0.09956812092185352,
          "rotation": 0,
          "target": "9-co-work"
        },
        {
          "yaw": 0.9441259903859169,
          "pitch": 0.11209125366706019,
          "rotation": 0,
          "target": "11-co-work-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-co-work-terrace",
      "name": "Co-Work Terrace",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.6309438453663194,
        "pitch": 0.08922395483594414,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.0294972676341594,
          "pitch": 0.18450767638019627,
          "rotation": 0,
          "target": "10-co-work01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kitchen",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4539042908456992,
          "pitch": 0.0749327240470663,
          "rotation": 0,
          "target": "13-kitchen01"
        },
        {
          "yaw": -1.495626503853476,
          "pitch": 0.2954809121603095,
          "rotation": 0,
          "target": "6-lounge03"
        },
        {
          "yaw": 0.35198273171115524,
          "pitch": 0.14381857461163072,
          "rotation": 0,
          "target": "14-kitchen02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-kitchen01",
      "name": "Kitchen01",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4392386475642773,
          "pitch": 0.11389813665707749,
          "rotation": 0,
          "target": "12-kitchen"
        },
        {
          "yaw": -0.2185123735763792,
          "pitch": 0.12293996812062069,
          "rotation": 0,
          "target": "14-kitchen02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-kitchen02",
      "name": "Kitchen02",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.935017203367776,
          "pitch": 0.11689333376417821,
          "rotation": 0,
          "target": "12-kitchen"
        },
        {
          "yaw": -0.11909411122127267,
          "pitch": 0.15981337135382567,
          "rotation": 0,
          "target": "15-bar-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bar-dinning",
      "name": "Bar-Dinning",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1399857241996703,
          "pitch": 0.1309084408603578,
          "rotation": 0,
          "target": "14-kitchen02"
        },
        {
          "yaw": -0.1710689506232086,
          "pitch": 0.09469110521951762,
          "rotation": 0,
          "target": "16-bar-dinning01"
        },
        {
          "yaw": -1.612905108626931,
          "pitch": 0.09020472486028375,
          "rotation": 0,
          "target": "7-lounge04"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bar-dinning01",
      "name": "Bar-Dinning01",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.120018939340941,
          "pitch": 0.1021037925911088,
          "rotation": 0,
          "target": "15-bar-dinning"
        },
        {
          "yaw": -1.5959733877235394,
          "pitch": 0.10749584586838168,
          "rotation": 0,
          "target": "8-lounge05"
        },
        {
          "yaw": 0.8788794500609782,
          "pitch": 0.11842460049586734,
          "rotation": 0,
          "target": "17-bar-dinning02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bar-dinning02",
      "name": "Bar-Dinning02",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.60468358607074,
          "pitch": 0.06278816334061155,
          "rotation": 0,
          "target": "16-bar-dinning01"
        },
        {
          "yaw": -3.0164610432270216,
          "pitch": 0.08856439338880051,
          "rotation": 0,
          "target": "15-bar-dinning"
        },
        {
          "yaw": 0.128741736894602,
          "pitch": 0.13095970357587383,
          "rotation": 0,
          "target": "18-work-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-work-area",
      "name": "Work Area",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.073865299153587,
          "pitch": 0.06714003781775091,
          "rotation": 0,
          "target": "17-bar-dinning02"
        },
        {
          "yaw": 0.05988395203670649,
          "pitch": 0.21601908001764691,
          "rotation": 0,
          "target": "19-work-area01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-work-area01",
      "name": "Work Area01",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.6270044004841697,
        "pitch": 0.028577441126174108,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.6045983791365543,
          "pitch": 0.20777124537905678,
          "rotation": 0,
          "target": "18-work-area"
        },
        {
          "yaw": 1.584879393564532,
          "pitch": 0.02064799306464593,
          "rotation": 0,
          "target": "20-work-area02"
        },
        {
          "yaw": 3.1177542362762862,
          "pitch": -0.003930915196947993,
          "rotation": 0,
          "target": "21-yoga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-work-area02",
      "name": "Work Area02",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6520260230037476,
          "pitch": 0.0960891613708128,
          "rotation": 0,
          "target": "19-work-area01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-yoga",
      "name": "Yoga",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4138649830611776,
          "pitch": 0.04084984764184618,
          "rotation": 0,
          "target": "3-lounge"
        },
        {
          "yaw": 1.0738004069711131,
          "pitch": 0.01749994139691502,
          "rotation": 0,
          "target": "19-work-area01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
