class Automovil {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false;
    this.velocidad = 0;
  }

  encender() {
    if (!this.encendido) {
      this.encendido = true;
      console.log("El auto se ha encendido");
    }
  }

  apagar() {
    this.velocidad = 0;
    console.log("El auto se ha apagado");
  }

  acelerar() {
    if (this.encendido) {
      this.velocidad += 10;
      console.log(`El auto se ha acelerado a ${this.velocidad} km/h`);
    }
  }

  frenar() {
    if (this.encendido) {
      this.velocidad -= 10;

      if (this.velocidad < 0) {
        this.velocidad = 0;
      }

      console.log(`El auto se ha frenado a ${this.velocidad} km/h`);
    }
  }
}

let auto = new Automovil("Toyota", "Corolla");

class Electrico extends Automovil {
  constructor(marca, modelo, cargaDeBateria, timpoDeCarga) {
    super(marca, modelo);
    this.cargaDeBateria = cargaDeBateria;
    this.timpoDeCarga = timpoDeCarga;
  }
}

let autoElectrico = new Electrico(
  "Tesla",
  "Model S",
  100,
  120
);

class Motor {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class AutomovilConMotor {
  constructor(marca, modelo, motor) {
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false;
    this.velocidad = 0;
    this.motor = new Motor(motor);
    this.radio = null;
  }

  instalarRadio(radio) {
    this.radio = radio;
  }

  usarGps(gps, destino) {
    gps.navegar(destino);
  }
}

class Radio {
  constructor(marca) {
    this.marca = marca;
  }
}

let radio = new Radio("Sony");

class Gps {
  navegar(destino) {
    console.log(`Navegando hacia ${destino}`);
  }
}

let gps = new Gps();

let auto2 = new AutomovilConMotor(
  "Toyota",
  "Corolla",
  "Nafta"
);

auto2.instalarRadio(radio);
auto2.usarGps(gps, "Buenos Aires");


