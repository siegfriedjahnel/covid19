
//-----------------------------------------------------

const tableBody = document.getElementById("tableBody");
const dataList = document.getElementById("dataList");
const btnAddLocation = document.getElementById("btnAddLocation");
const statusBar = document.getElementById("statusBar");
const infoBox = document.getElementById("infoBox");
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

alleOrte.forEach(element=>{
  dataList.innerHTML += `<option id="${element.attributes.AdmUnitId}" value="${element.attributes.county}--${element.attributes.AdmUnitId}" \>`;
})
let myLocations = [];//array of objects of locations
let myObjects ={}; //object of locations

init();

async function getDatafromRKI(){
  let query="";
  myLocations.forEach(function(element){
    query = query + "AdmUnitId="+element.AdmUnitId + " OR ";
  })
  query = query.substring(0, query.length-4);//remove the last OR
  let uri = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/rki_key_data_v/FeatureServer/0/query?f=json&where=(${query})&outFields=*`;
  const response = await fetch(uri);
  const json = await response.json();
  const data = await json.features;
  let lastUpdate = response.headers.get("last-modified");
  lastUpdate = new Date(lastUpdate);
  lastUpdate = lastUpdate.toLocaleDateString('de-DE', dateOptions);
  statusBar.innerHTML=`Stand: ${lastUpdate}`;
  return data;//data = array of results
}

function init(){
  if(localStorage.getItem('myLocations')){
    myLocations = localStorage.getItem('myLocations');
    myLocations = JSON.parse(myLocations);
    let numEntries = myLocations.length;
    if(numEntries == 0){
      infoBox.style.visibility = "visible";
    }else{
      infoBox.style.visibility = "hidden"
    }
  }else{
    infoBox.style.visibility = "visible";
    
  }
  tableBody.innerHTML="";
  getDatafromRKI()
  .then(function(data){
    drawTable(data);
  })
}



btnAddLocation.addEventListener('click',function(){
  let tf1 = document.getElementById("tf1");
  if(tf1.value!=''){
    let AdmUnitId = tf1.value.split("--")[1];
    let county = tf1.value.split("--")[0];
    addNewLocation(AdmUnitId,county);
    tf1.value="";
  }
})

function drawTable(data){
  data.forEach(function(element){
    let ea = element.attributes;
    let placeName = getCountyByAdmUniId(ea.AdmUnitId);
    let trend;
    if(ea.AnzAktivNeu ==0) trend = "&#8594;";
    if(ea.AnzAktivNeu <0) trend = "&#8600;";
    if(ea.AnzAktivNeu >0) trend = "&#8599;";
    let tr = document.createElement("tr");
    tr.innerHTML = `<tr>
    <td>${placeName}</td>
    <td>${ea.AnzFall}<br>(${ea.AnzFallNeu}${trend})</td>
    <td>${ea.AnzTodesfall}<br>(${ea.AnzTodesfallNeu})</td>
    <td>${ea.Inz7T}</td>
    <td><button onClick="removeLocation(${ea.AdmUnitId})">x</button>
    </tr>`;
    tableBody.appendChild(tr);
  })
}

function addNewLocation(AdmUnitId, county){
  let location = new Object;
  location.AdmUnitId = AdmUnitId;
  location.county = county;
  myLocations.push(location);
  localStorage.setItem('myLocations', JSON.stringify(myLocations));
  init();
}

function removeLocation(id){
  myLocations.forEach(element =>{
    if (element.AdmUnitId == id) {
      let index = myLocations.indexOf(element);
      myLocations.splice(index, 1);
      localStorage.setItem('myLocations', JSON.stringify(myLocations));
      init();
    }
  })
}

function getCountyByAdmUniId(id) {
  let name = "";
  myLocations.forEach(element => {
    if (element.AdmUnitId == id) {
      name = element.county;
    }
  })
  return name;
}