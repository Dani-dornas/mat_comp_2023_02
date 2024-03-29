class Graduando {
    private name: string;
    private curso: string;

    constructor(name: string, curso: string) {
        this.name = name;
        this.curso = curso;
    }

    cumprimentar_dds() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.curso}.`);
    }
}

class Mestrando extends Graduando {
    especializacao: string;

    constructor(name: string, curso: string, especializacao: string) {
        super(name, curso);
        this.especializacao = especializacao;
    }

    cumprimentar_dds(){
        super.cumprimentar_dds();
        console.log(`Minha especialização é ${this.especializacao}.`);
    }
}

// Criando instâncias das classes
const person = new Graduando("Daniel Dornelas", "Desenvolvimento de Software Multiplataforma");
person.cumprimentar_dds();

const desenvolvedor = new Mestrando("Sandro", "Engenharia de Software", "Habilidades e Técnicas avaçadas para entrega de software");
desenvolvedor.cumprimentar_dds();
