class Carro {
    constructor(marca, modelo, categoria, ano, quilometragem, valor) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Categoria = categoria;
        this.Ano = ano;
        this.Quilometragem = quilometragem;
        this.Valor = valor;
    }
}

// Função para mostrar todos os carros
function mostrarCarros() {
    return fetch("https://apigenerator.dronahq.com/api/iFCnPlnz/carros")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error("Erro ao buscar carros:", error);
            throw error;
        });
}

// Função para adicionar um carro
function enviarCarro(carro) {
    return fetch('https://apigenerator.dronahq.com/api/iFCnPlnz/carros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Corrigido o erro de digitação
        },
        body: JSON.stringify(carro)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Carro adicionado:", data);
        return data;
    })
    .catch(error => {
        console.error("Erro ao adicionar carro:", error);
        throw error;
    });
}

// Função para atualizar um carro
function atualizarCarro(id, carro) {
    return fetch(`https://apigenerator.dronahq.com/api/iFCnPlnz/carros/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // Corrigido o erro de digitação
        },
        body: JSON.stringify(carro)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Carro atualizado:", data);
        return data;
    })
    .catch(error => {
        console.error("Erro ao atualizar carro:", error);
        throw error;
    });
}

// Função para deletar um carro
function deletarCarro(id) {
    return fetch(`https://apigenerator.dronahq.com/api/iFCnPlnz/carros/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log("Carro deletado:", data);
        return data;
    })
    .catch(error => {
        console.error("Erro ao deletar carro:", error);
        throw error;
    });
}

module.exports = { mostrarCarros, enviarCarro, atualizarCarro, deletarCarro };