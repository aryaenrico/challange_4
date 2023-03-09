class App {
  constructor() {
   // this.clearButton = document.getElementById("clear-btn");
    //this.loadButton = document.getElementById("load-btn");
    this.filterButton = document.getElementById("filter");
    this.tanggal = document.getElementById("tanggal");
    this.carContainerElement = document.getElementById("container-car");
  
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.filterButton.onclick = this.filter;
    this.tanggal.valueAsDate = new Date();
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      setAttributes(node, {"class": "card col-md-4 container-card"});
      node.style.width ="18rem";
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };
  typeDriver(param,data){
    return param.typeDriver =data

  }
  async filter() {
    const driver = document.getElementById("tipeDriver").value
    const penumpang =document.getElementById("penumpang").value; 
    const tanggal = document.getElementById("tanggal").value;
    const waktu = document.getElementById("waktu").value;

    let jam =waktu.split(":",1);
    console.info(penumpang);
    
  
    const cars = await Binar.listCars((e)  => {
      return e.typeDriver == driver && compareDate(tanggal,e.availableAt,jam[0]) && e.capacity >= penumpang;
    });
    console.log(cars);
    Car.init(cars);
    document.getElementById("container-car").innerHTML =""
   
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      setAttributes(node, {"class": "card col-md-4 container-card"});
      node.style.width ="18rem";
      node.innerHTML = car.render();

      document.getElementById("container-car").appendChild(node);
     

    });
  } 

  
   

  

  async load(filter) {
    const cars = await Binar.listCars(filter);
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}



  function compareDate(param1,param2,jam){
    let data1 = new Date (param1);
    let data2 = new Date(param2);
    return (data1.getFullYear() <=  data2.getFullYear() && data1.getMonth() <=  data2.getMonth() && data1.getDate() <=  data2.getDate()) && (parseInt(jam) <= data2.getHours()) ;
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
