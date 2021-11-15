/*
Treinando herança com JavaScript.

Todos os funcionários tem:
.nome
.sobrenome
.email
.cpf
.função
.registro

Todo cliente tem:
.nome
.sobrenome
.email
.cpf
.renda

Tendo em vista que os funcionários e clientes tem 4 propriedades em comum,
uma classe pai poderia ter todas essas propriedades juntamente com os
métodos getters e setters delas para que assim tais métodos e propriedades
fossem reaproveitados tornando o código mais limpo e fácil de manter.

*/

class Pessoa {
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome
        this._sobrenome = sobrenome
        this._email = email
        this._cpf = cpf
    }

    get nome() {
        return this._nome
    }

    set nome(nome) {
        this._nome = nome
    }

    get sobrenome() {
        return this._sobrenome
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome
    }

    get email() {
        return this._nome
    }

    set email(email) {
        this._email = email
    }

    get cpf() {
        return this._cpf
    }

    set cpf(_cpf) {
        this._cpf = cpf
    }

    //Método extra

    get nomeCompleto() {
        return this._nome + ' ' +  this.sobrenome
    }
}

//'class Funcionario extends Pessoa' Indica que a classe Funcionário está herdando da classe Pessoa

// Indica também que o funcionário é uma pessoa, por isso herda todos os métodos e propriedades.

//Pessoa é a classe pai e Funcionário é a classe filha, e por isso no construtor da classe Pessoa, super(), é passado todos os atributos que será herdado. As propriedades funcao e registro não estão sendo passados para a classe Funcionario justamente por ser uma propriedade exclusiva dela, logo é necessário criar os métodos get's e set's individualmente.

class Funcionario extends Pessoa {
    constructor(nome, sobrenome, email, cpf, registro) {
        super(nome, sobrenome, email, cpf)
        this._funcao = funcao
        this._registro = registro
    }

    get funcao() {
        return this._funcao
    }

    set funcao(funcao) {
        this._funcao = funcao
    }

    get registro() {
        return this._registro
    }

    set registro(registro) {
        this._registro = registro
    }
}


//Como renda é uma propriedade exclusiva de Cliente, é necessário criar o método get e set para ela, e as outras propriedades estão sendo herdadas da classe pai (classe Pessoa).
class Cliente extends Pessoa {
    constructor(nome, sobrenome, email, cpf, renda) {
        super(nome, sobrenome, email, cpf)
        this._renda = renda
    }

    get renda() {
        return this._renda
    }

    set renda(renda) {
        this._renda = renda
    }
}


// Instanciando Cliente
const c1 = new Cliente('Lana', 'del Rey', 'lanadelrey@gmail.com', '123.456.123-50', 8997.21)
console.log(c1)
console.log(c1.nomeCompleto)