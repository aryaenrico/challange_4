class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
    typeDriver
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
    this.typeDriver = typeDriver
  }

  render() {
    let date = new Date(this.availableAt);
    let menit = prefixDate(date.getMinutes())
    let jam = prefixDate(date.getHours());
    let bulan =date.getMonth() <= 9 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    let tahun =prefixDate(date.getFullYear());
    let tanggal = prefixDate(date.getDate());
    return `<div class ="img-filter-container">
            <img class="card-img-top img-filter" src="${this.image}" alt="Card image cap">
            </div>
            <div class="card-body ">
            <div class="card-body-height">
            <h5 class="card-title">Nama tipe mobil</h5>
            <p class="card-text harga-sewa">${this.type}</p>
            <p class="cars-description">Driver : ${this.typeDriver}</p>
            <p class="cars-description">Deskripsi : ${this.description}</p>
            
            <p class="cars-description">Tersedia pada : ${tanggal}:${bulan}:${tahun} sampai jam ${jam}:${menit }</p>
            </div>
                
              <div class="description-more">
                 <div class="penumpang d-flex">
                      <img src="images/fi_users.png" alt="jumlah penumpang" width="18px" height="18px">
                            <p class="ms-3">${this.capacity} Orang</p>
                  </div>

                  <div class="penumpang d-flex">
                      <img src="images/fi_settings.png" alt="jumlah penumpang" width="18px" height="18px">
                      <p class="ms-3">${this.transmission}</p>
                  </div>
                  <div class="penumpang d-flex">
                      <img src="images/fi_calendar.png" alt="jumlah penumpang" width="18px" height="18px">
                      <p class="ms-3">Tahun${this.year}</p>
                  </div>
               </div class ="justify-content-center">
                  <button class="btn btn-success btn-car-filter" type="button">Pilih Mobil</button>
               </div>
       `;
  }
}
function prefixDate(params) {

  return params <= 9 ? `0${params}`:params;

  
}
