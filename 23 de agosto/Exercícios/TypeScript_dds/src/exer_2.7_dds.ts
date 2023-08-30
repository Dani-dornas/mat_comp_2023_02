class Veiculo {
  longitude: number;
  latitude: number;

  constructor(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  mover_dds(mov_longi: number, mov_lat: number) {
    this.longitude += mov_longi;
    this.latitude += mov_lat;
    console.log(
      `O veículo se move nas cordenadas de latitude: ${this.latitude} e longitude ${this.longitude}.`
    );
  }
}

class Eletrico extends Veiculo {
  bateria: number;

  constructor(bateria: number, longitude: number, latitude: number) {
    super(longitude, latitude);
    this.bateria = bateria;
  }
}

class Voador extends Eletrico {
  altitude: number;

  constructor(
    bateria: number,
    altitude: number,
    longitude: number,
    latitude: number
  ) {
    super(longitude, latitude, bateria);
    this.altitude = altitude;
  }

  voar_dds(mov_alti: number, mov_longi: number, mov_lat: number) {
    this.altitude += mov_alti;
    this.mover_dds(mov_longi, mov_lat);
    console.log(
      `O veículo voa nas coordenadas de latitude: ${this.latitude}, longitude ${this.longitude} e altitude ${this.altitude}.`
    );
  }
}

export{Veiculo, Eletrico, Voador}

