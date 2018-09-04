const axios = require("axios")
const mainURL = 'https://ypyfp8e61f.execute-api.ap-southeast-1.amazonaws.com/development/v1/graphql'
let getTravelRoutes = `{
  travelRoutes(
    type: "getAll",
    params: {}
  ) {
    moduleOriginId,
    moduleDestinationId,

  }
}`

function getTravel() {
  axios({
    url: mainURL,
    method: 'post',
    data: {
      query: getTravelRoutes,
    }
  }).then((result) => {
    console.log(result.data.data);
  }).catch((err) => {
    console.log(err);
  });
}

//var route =getTravel()
//console.log(route);
var route =
  //{ travelRoutes:
  [{
    routeId: '78dbe128-394e-4bae-8cbb-af4bfd0bcfc3',
    origin: 'Bandara Juanda T1 Domestik',
    destination: 'Malang'
  },
  {
    routeId: 'ae5f2dc5-f264-4c26-b011-fbcb29c09448',
    origin: 'Madiun',
    destination: 'Malang'
  },
  {
    routeId: 'b0085958-23cb-4c14-a674-91e944d85041',
    origin: 'Malang',
    destination: 'Bandara Juanda T1 Domestik'
  }]
var resultArr = Array.from(Object.keys(route).map(function (key) {
  return [Number[key], route[key]];
}));


/*function printReply() {
  if (resultArr[0][0]) {
    console.log(resultArr[0][1]);
  } else if (resultArr[1]) {
    console.log("Yahoo");
  }
}*/

//console.log(printReply());
//console.log(route.length)
console.log(getTravel())

/*var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj).map(function(key) {
  return [Number(key), obj[key]];
});

console.log(result.length);*/
