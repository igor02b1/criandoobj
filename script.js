function MeuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []

    function recebendoElemento (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push = ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

            resultado.innerHTML += `<p> nome: ${nome.value} </br> sobrenome: ${sobrenome.value} </br> peso: ${peso.value} </br> altura: ${altura.value} </br> </p>`
            console.log(pessoas);
        }

    
    form.addEventListener('submit', recebendoElemento);
}


MeuEscopo();