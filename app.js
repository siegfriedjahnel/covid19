/* if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(function() {
            console.log('Service Worker Registered');
      });
  } */

//-----------------------------------------------------


const dataList = document.getElementById("dataList");
alleOrte.forEach(element=>{
  dataList.innerHTML += `<option id="${element.attributes.AdmUnitId}" value="${element.attributes.county}--${element.attributes.AdmUnitId}" \>`;
})
let myLocations = localStorage.getItem('myLocations');
myLocations = JSON.parse(myLocations);

const btnRemoveLocation = document.getElementById("btnRemoveLocation");
btnRemoveLocation.addEventListener('click', function(){
  removeLocation(0);
})
const btnAddLocation = document.getElementById("btnAddLocation");
btnAddLocation.addEventListener('click',function(){
  let tf1 = document.getElementById("tf1");
  if(tf1.value!=''){
    let AdmUnitId = tf1.value.split("--")[1];
    let county = tf1.value.split("--")[0];
    addNewLocation(AdmUnitId,county);
    tf1.value="";
  }
})

function addNewLocation(AdmUnitId, county){
  //insert new location
  let location = new Object;
  location.AdmUnitId = AdmUnitId;
  location.county = county;
  myLocations.push(location);
  console.log(myLocations);
  localStorage.setItem('myLocations', JSON.stringify(myLocations));

}

function removeLocation(index){
  myLocations.splice(index, 1);
  localStorage.setItem('myLocations', JSON.stringify(myLocations));
}