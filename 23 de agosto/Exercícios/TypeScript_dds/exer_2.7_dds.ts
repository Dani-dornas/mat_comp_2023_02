class Veiculo {
  longitude: number;
  latitude: number;

  constructor(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  mover(mov_longi: number, mov_lat: number) {
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
  voar(mov_alti: number, mov_longi: number, mov_lat: number) {
    this.altitude += mov_alti;
    this.mover(mov_longi, mov_lat);
    console.log(
      `O veículo voa nas coordenadas de latitude: ${this.latitude}, longitude ${this.longitude} e altitude ${this.altitude}.`
    );
  }
}

// Criando uma instância da classe Pessoa
const golzinho_voador = new Voador(100, 20, 30, 20);

// Chamando o método da instância
golzinho_voador.voar(1, 2, 3);
