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
    return `
            <img class="card-img-top img-filter" src="${this.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Nama tipe mobil</h5>
            <p class="card-text harga-sewa">${this.typeDriver}</p>
            <p class="cars-description">${this.availableAt}</p>
                
              <div class="description-more">
                 <div class="penumpang d-flex" style="border: 3px solid green;">
                      <img src="images/fi_users.png" alt="jumlah penumpang" width="18px" height="18px">
                            <p class="ms-3">${this.capacity} Orang</p>
                  </div>

                  <div class="penumpang d-flex" style="border: 3px solid green;">
                      <img src="images/fi_settings.png" alt="jumlah penumpang" width="18px" height="18px">
                      <p class="ms-3">${this.transmission}</p>
                  </div>
                  <div class="penumpang d-flex" style="border: 3px solid green;">
                      <img src="images/fi_calendar.png" alt="jumlah penumpang" width="18px" height="18px">
                      <p class="ms-3">Tahun${this.year}</p>
                  </div>
               </div>
                  <button class="btn btn-success btn-car-filter" type="button">Pilih Mobil</button>
               </div>
       `;
  }
}
