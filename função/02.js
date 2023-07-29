const carro = {
    ligado: false,
    velocidade: 0,

    ligar() {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            console.log("Carro ligado. Velocidade: " + this.velocidade + ".");
        }
    },

    desligar() {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            console.log("Carro desligado. Velocidade: " + this.velocidade + ".");
        }
    },

    acelerar() {
        if (!this.ligado) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            this.velocidade += 10;
            console.log("Carro ligado. Velocidade: " + this.velocidade + ".");
        }
    },

    desacelerar() {
        if (!this.ligado) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10;
            console.log("Carro ligado. Velocidade: " + this.velocidade + ".");
        }
    }
};

// Teste das funcionalidades do carro
carro.desligar(); // Este carro já está desligado.
carro.ligar(); // Carro ligado. Velocidade: 0.
carro.ligar(); // Este carro já está ligado.
carro.acelerar(); // Carro ligado. Velocidade: 10.
carro.acelerar(); // Carro ligado. Velocidade: 20.
carro.desacelerar(); // Carro ligado. Velocidade: 10.
carro.desligar(); // Carro desligado. Velocidade: 0.
carro.acelerar(); // Não é possível acelerar um carro desligado.
carro.desacelerar(); // Não é possível desacelerar um carro desligado.

