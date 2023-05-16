import {Position } from 'reactflow';

// read from the localstorage 
var localStorageNodes  = localStorage.getItem("nodes");
if(localStorageNodes!== null) {
    localStorageNodes = JSON.parse(localStorageNodes);
}
else {
    localStorageNodes= [
      {
        "width": 150,
        "height": 36,
        "id": "13",
        "type": "default",
        "data": {
          "label": "World"
        },
        "position": {
          "x": 1898.5971878930206,
          "y": 288.20211726149967
        },
        "selected": false,
        "positionAbsolute": {
          "x": 1898.5971878930206,
          "y": 288.20211726149967
        },
        "dragging": false,
        "sourcePosition": "left",
        "targetPosition": "right"
      },
      {
        "width": 150,
        "height": 36,
        "id": "14",
        "type": "default",
        "data": {
          "label": "Hi"
        },
        "position": {
          "x": 1899.2034234154023,
          "y": 241.17573370646875
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 1899.2034234154023,
          "y": 241.17573370646875
        },
        "dragging": false
      },
      {
        "width": 150,
        "height": 36,
        "id": "18",
        "type": "default",
        "data": {
          "label": "Hi component"
        },
        "position": {
          "x": 1620.2043247561237,
          "y": 157.99634170943793
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 1620.2043247561237,
          "y": 157.99634170943793
        },
        "dragging": false
      },
      {
        "width": 150,
        "height": 36,
        "id": "19",
        "type": "default",
        "data": {
          "label": "World component"
        },
        "position": {
          "x": 466.729521355541,
          "y": 254.62887553355472
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 466.729521355541,
          "y": 254.62887553355472
        },
        "dragging": false
      },
      {
        "width": 150,
        "height": 36,
        "id": "22",
        "type": "default",
        "data": {
          "label": "inner spacing"
        },
        "position": {
          "x": 1902.5397297136876,
          "y": 186.25240673365886
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 1902.5397297136876,
          "y": 186.25240673365886
        },
        "dragging": false,
        "animated": true
      },
      {
        "width": 150,
        "height": 36,
        "id": "23",
        "type": "default",
        "data": {
          "label": "black border"
        },
        "position": {
          "x": 1901.8877155601106,
          "y": 129.36797943777265
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 1901.8877155601106,
          "y": 129.36797943777265
        },
        "dragging": false
      },
      {
        "width": 150,
        "height": 36,
        "id": "24",
        "type": "default",
        "data": {
          "label": "rounded edge"
        },
        "position": {
          "x": 1902.1722972972975,
          "y": 76.12837837837839
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 1902.1722972972975,
          "y": 76.12837837837839
        },
        "dragging": false
      },
      {
        "width": 150,
        "height": 36,
        "id": "35",
        "type": "default",
        "data": {
          "label": "pulse emitter"
        },
        "position": {
          "x": 2818.0077782917547,
          "y": 285.7208242124894
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 2818.0077782917547,
          "y": 285.7208242124894
        },
        "dragging": false
      },
      {
        "width": 150,
        "height": 36,
        "id": "37",
        "type": "default",
        "data": {
          "label": "Call"
        },
        "position": {
          "x": 1755.3540155713076,
          "y": -710.1498160504576
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 1755.3540155713076,
          "y": -710.1498160504576
        },
        "dragging": false
      },
      {
        "width": 150,
        "height": 36,
        "id": "39",
        "type": "default",
        "data": {
          "label": "E-Mail"
        },
        "position": {
          "x": 1756.9981025108073,
          "y": -647.1335219456952
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 1756.9981025108073,
          "y": -647.1335219456952
        },
        "dragging": false
      },
      {
        "width": 150,
        "height": 36,
        "id": "40",
        "type": "default",
        "data": {
          "label": "unKnown"
        },
        "position": {
          "x": 971.8325981877128,
          "y": -49.09036406709337
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 971.8325981877128,
          "y": -49.09036406709337
        },
        "dragging": false,
        "hidden": true
      },
      {
        "width": 150,
        "height": 36,
        "id": "41",
        "type": "default",
        "data": {
          "label": "known"
        },
        "position": {
          "x": 771.8325981877128,
          "y": -39.09036406709337
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "positionAbsolute": {
          "x": 771.8325981877128,
          "y": -39.09036406709337
        },
        "dragging": false,
        "hidden": true
      },
      {
        "width": 191,
        "height": 39,
        "id": "247",
        "position": {
          "x": 2303.2558759262024,
          "y": -680.7407123544995
        },
        "data": {
          "label": "Alert",
          "style": {
            "background": "black",
          }
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 2303.2558759262024,
          "y": -680.7407123544995
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "487",
        "position": {
          "x": 2144.3529848021954,
          "y": 125.02158526388023
        },
        "data": {
          "label": "Visuals"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 2144.3529848021954,
          "y": 125.02158526388023
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "281",
        "position": {
          "x": 2120.1290504887243,
          "y": 390.20991880082806
        },
        "data": {
          "label": "Content"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 2120.1290504887243,
          "y": 390.20991880082806
        },
        "resizing": false
      },
      {
        "width": 191,
        "height": 39,
        "id": "943",
        "position": {
          "x": 1269.7457888355273,
          "y": 236.23455435750043
        },
        "data": {
          "label": "onClick"
        },
        "type": "custom",
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "positionAbsolute": {
          "x": 1269.7457888355273,
          "y": 236.23455435750043
        },
        "resizing": false
      },
      {
        "width": 191,
        "height": 39,
        "id": "152",
        "position": {
          "x": 2118.4129292437087,
          "y": 611.6678779835765
        },
        "data": {
          "label": "Interaction"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 2118.4129292437087,
          "y": 611.6678779835765
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "423",
        "position": {
          "x": -544.0610071323812,
          "y": 50.27828190765052
        },
        "data": {
          "label": "React"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -544.0610071323812,
          "y": 50.27828190765052
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "138",
        "position": {
          "x": -543.5103554422301,
          "y": 151.6390220213987
        },
        "data": {
          "label": "Angular"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -543.5103554422301,
          "y": 151.6390220213987
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "703",
        "position": {
          "x": -540.2919577041212,
          "y": 229.30812975000282
        },
        "data": {
          "label": "Svelte"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -540.2919577041212,
          "y": 229.30812975000282
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "101",
        "position": {
          "x": -1133.8422236583483,
          "y": -57.52415151189087
        },
        "data": {
          "label": "Styled JSX"
        },
        "type": "custom",
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "positionAbsolute": {
          "x": -1133.8422236583483,
          "y": -57.52415151189087
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "71",
        "position": {
          "x": -1131.4964927038254,
          "y": -2.267611460939335
        },
        "data": {
          "label": "Styled Components"
        },
        "type": "custom",
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "positionAbsolute": {
          "x": -1131.4964927038254,
          "y": -2.267611460939335
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "808",
        "position": {
          "x": -809.7789918247145,
          "y": -4.372934802120177
        },
        "data": {
          "label": "Style Library"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -809.7789918247145,
          "y": -4.372934802120177
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "687",
        "position": {
          "x": -805.3908430336602,
          "y": 79.08237785672432
        },
        "data": {
          "label": "State Library"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -805.3908430336602,
          "y": 79.08237785672432
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "28",
        "position": {
          "x": -1138.3541036223196,
          "y": 69.34728812233817
        },
        "data": {
          "label": "useState"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -1138.3541036223196,
          "y": 69.34728812233817
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "124",
        "position": {
          "x": -1137.927612595758,
          "y": 114.7307856097757
        },
        "data": {
          "label": "Mobx"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -1137.927612595758,
          "y": 114.7307856097757
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "942",
        "position": {
          "x": -795.6578380085352,
          "y": 249.00678417402457
        },
        "data": {
          "label": "State handling"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -795.6578380085352,
          "y": 249.00678417402457
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "4",
        "position": {
          "x": -1139.6578380085352,
          "y": 226.00678417402457
        },
        "data": {
          "label": "Variables"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -1139.6578380085352,
          "y": 226.00678417402457
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "328",
        "position": {
          "x": -1140.6578380085352,
          "y": 285.5067841740246
        },
        "data": {
          "label": "Proxy"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -1140.6578380085352,
          "y": 285.5067841740246
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "31",
        "position": {
          "x": -1560.1578380085352,
          "y": 159.50678417402457
        },
        "data": {
          "label": "Code"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": -1560.1578380085352,
          "y": 159.50678417402457
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "296",
        "position": {
          "x": 2023.035919436097,
          "y": -681.0201190592779
        },
        "data": {
          "label": "PagerDuty"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 2023.035919436097,
          "y": -681.0201190592779
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "228",
        "position": {
          "x": 661.7889282266152,
          "y": -771.6871909059277
        },
        "data": {
          "label": "Telemetry"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 661.7889282266152,
          "y": -771.6871909059277
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "795",
        "position": {
          "x": 660.1666412455937,
          "y": -706.4034314719039
        },
        "data": {
          "label": "Mux"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 660.1666412455937,
          "y": -706.4034314719039
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "1001",
        "position": {
          "x": 1236.7348182370736,
          "y": -678.2473422303854
        },
        "data": {
          "label": "Run books"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 1236.7348182370736,
          "y": -678.2473422303854
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "426",
        "position": {
          "x": 658.4549052270727,
          "y": -639.8071098863429
        },
        "data": {
          "label": "New relic"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 658.4549052270727,
          "y": -639.8071098863429
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "153",
        "position": {
          "x": 1482.7185843951308,
          "y": -680.6933872764321
        },
        "data": {
          "label": "on call"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 1482.7185843951308,
          "y": -680.6933872764321
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "420",
        "position": {
          "x": 2031.1430606106226,
          "y": -199.97339863381274
        },
        "data": {
          "label": "Jira"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 2031.1430606106226,
          "y": -199.97339863381274
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "280",
        "position": {
          "x": 1776.954024537408,
          "y": -200.57431834084156
        },
        "data": {
          "label": "Ready for QA"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 1776.954024537408,
          "y": -200.57431834084156
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "116",
        "position": {
          "x": 971.3446790055671,
          "y": -740.5749738649046
        },
        "data": {
          "label": "Web Entertainment"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 971.3446790055671,
          "y": -740.5749738649046
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "339",
        "position": {
          "x": 974.1089234952403,
          "y": -618.794489550368
        },
        "data": {
          "label": "Web User services"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 974.1089234952403,
          "y": -618.794489550368
        }
      },
      {
        "width": 642,
        "height": 52,
        "id": "343",
        "position": {
          "x": -325.56373006412764,
          "y": -616.3535715723456
        },
        "data": {
          "label": "https://docs.google.com/presentation/d/1dfBJ7-hmWyRgxUjIL8vjLLMpErt0r6t-uvS4qr7cXIY/edit#slide=id.g228b1168528_0_25"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12,
          "width": 642,
          "height": 52
        },
        "positionAbsolute": {
          "x": -325.56373006412764,
          "y": -616.3535715723456
        },
        "resizing": false
      },
      {
        "width": 191,
        "height": 39,
        "id": "146",
        "position": {
          "x": 656.6152283312381,
          "y": -579.9064006787995
        },
        "data": {
          "label": "web-pd-slack"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 656.6152283312381,
          "y": -579.9064006787995
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "442",
        "position": {
          "x": 2618.104169159044,
          "y": -759.7144014686338
        },
        "data": {
          "label": "Grafana"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 2618.104169159044,
          "y": -759.7144014686338
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "631",
        "position": {
          "x": 3933.7805035325346,
          "y": -752.9127170014381
        },
        "data": {
          "label": "Outlook"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 3933.7805035325346,
          "y": -752.9127170014381
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "62",
        "position": {
          "x": 3931.7805035325346,
          "y": -698.9127170014381
        },
        "data": {
          "label": "Slack"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 3931.7805035325346,
          "y": -698.9127170014381
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "297",
        "position": {
          "x": 3932.2805035325346,
          "y": -641.4127170014381
        },
        "data": {
          "label": "Discovery Gmail"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 3932.2805035325346,
          "y": -641.4127170014381
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "620",
        "position": {
          "x": 3932.7805035325346,
          "y": -580.4127170014381
        },
        "data": {
          "label": "youtube"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 3932.7805035325346,
          "y": -580.4127170014381
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "202",
        "position": {
          "x": 3934.7805035325346,
          "y": -520.4127170014381
        },
        "data": {
          "label": "pinterest"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 3934.7805035325346,
          "y": -520.4127170014381
        }
      },
      {
        "width": 191,
        "height": 39,
        "id": "59",
        "position": {
          "x": 3936.2805035325346,
          "y": -459.41271700143807
        },
        "data": {
          "label": "reddit"
        },
        "type": "custom",
        "sourcePosition": "left",
        "targetPosition": "right",
        "selected": false,
        "dragging": false,
        "style": {
          "background": "#fff",
          "border": "1px solid black",
          "borderRadius": 15,
          "fontSize": 12
        },
        "positionAbsolute": {
          "x": 3936.2805035325346,
          "y": -459.41271700143807
        }
      }
    ]
    .map(node=>{
      // add onConnect for each node.
    
      const nodeData = {
        label: node.data.label,
        onConnect: (params) => {
          console.log('Edge connected:', params);
        },
        onDisconnect: (element) => {
          console.log('Edge disconnected:', element);
        },
      };
      node.data.style = node.data.style || {};
      node.data.style.padding = '10px 20px' 
      node.data = {...node.data, ...nodeData};
      return node
    });
    
    
}

export const nodes = localStorageNodes;