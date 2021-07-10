interface Usuario {
    nome: string;
    idade: number;
    email: string;
    telefone: string;
    data_nascimento: string;
    sexo: string;
}

function getUsuario(): Usuario {
    return {
        nome: "Lucas",
        idade: 21,
        email: "lucas@email.com",
        telefone: "(00)0000-0000",
        data_nascimento: "11/02/2000",
        sexo: "M"
    };
}

// Usando as interface como types
function setUsuario(usuario: Usuario) {
    console.log(usuario.nome);
}


interface EveryExampleInOne {
	str: string;
	num: number;
	bool: boolean;
	func(arg1: string): void;
	arr: string[];
}