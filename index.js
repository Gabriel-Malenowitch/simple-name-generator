const db = {
    names: [
    'Miguel','Sophia'
    ,'Davi','Alice'
    ,'Arthur','Julia'
    ,'Pedro','Isabella'
    ,'Gabriel','Manuela'
    ,'Bernardo','Laura'
    ,'Lucas','Luiza'
    ,'Matheus','Valentina'
    ,'Rafael','Giovanna'
    ,'Heitor','Maria','Eduarda'
    ,'Enzo','Helena'
    ,'Guilherme','Beatriz'
    ,'Nicolas','Maria','Luiza'
    ,'Lorenzo','Lara'
    ,'Gustavo','Mariana'
    ,'Felipe','Nicole'
    ,'Samuel','Rafaela'
    ,'João','Pedro','Heloísa'
    ,'Daniel','Isadora'
    ,'Vitor','Lívia'
    ,'Leonardo','Maria','Clara'
    ,'Henrique','Ana','Clara'
    ,'Theo','Lorena'
    ,'Murilo','Gabriela'
    ,'Eduardo','Yasmin'
    ,'Pedro','Henrique','Isabelly'
    ,'Pietro','Sarah'
    ,'Cauã','Ana','Julia'
    ,'Isaac','Letícia'
    ,'Caio','Ana','Luiza'
    ,'Vinicius','Melissa'
    ,'Benjamin','Marina'
    ,'Clara'
    ,'Lucca','Cecília'
    ,'Miguel','Esther'
    ,'Bryan','Emanuelly'
    ,'Joaquim','Rebeca'
    ,'Vitor','Ana','Beatriz'
    ,'Thiago','Lavínia'
    ,'Antônio','Vitória'
    ,'Davi','Lucas','Bianca'
    ,'Francisco','Catarina'
    ,'Enzo','Gabriel','Larissa'
    ,'Bruno','Maria','Fernanda'
    ,'Emanuel','Fernanda'
    ,'Gabriel','Amanda'
    ,'Ian','Alícia'
    ,'Davi','Luiz','Carolina'
    ,'Rodrigo','Agatha'
    ,'Otávio','Gabrielly',"João"
    ,"Maria","Pedro","Ana","Lucas"
    ,"Sofia","Mateus","Isabela","Gustavo"
    ,"Manuela","Arthur","Julia","Bernardo"
    ,"Valentina","Heitor","Lara","Davi"
    ,"Giovanna","Henrique","Helena"
    ,"Bruno","Mariana","Rafael","Beatriz","Nicolas",
    "Lorena","Enzo","Melissa","Guilherme",
    "Gabriela","Thiago","Rafaela","Vitor",
    "Alice","Eduardo","Laura","Pietro","Analu","Samuel",
    "Yasmin","Diego","Isadora","Fernando","Carolina",
    "Murilo","Marina",
    "Paulo","Júlia","Victor","Lívia",
    "Enzo Gabriel","Cecília","Joaquim","Elisa","Antônio","Martha",
    "Luan","Ana Luiza","Francisco","Ana Clara"],
    lastNames: [
        'Albuquerque',
        'Almeida',
        'Alvares',
        'Alves',
        'Amorim',
        'Andrade',
        'Antunes',
        'Aragão',
        'Araújo',
        'Azevedo',
        'Barbosa',
        'Bastos',
        'Batista',
        'Bernardes',
        'Botelho',
        'Camargo',
        'Cardoso',
        'Carmo',
        'Carvalho',
        'Castro',
        'Coelho',
        'Costa',
        'Coutinho',
        'Couto',
        'Cruz',
        'Cunha',
        'Dias',
        'Duarte',
        'Fernandes',
        'Ferreira',
        'Figueiredo',
        'Fonseca',
        'Freitas',
        'Frota',
        'Furtado',
        'Garcia',
        'Gomes',
        'Gonçalves',
        'Lima',
        'Lopes',
        'Machado',
        'Marques',
        'Martins',
        'Mendes',
        'Mesquita',
        'Monteiro',
        'Moraes',
        'Moreira',
        'Moura',
        'Nascimento',
        'Neves',
        'Nunes',
        'Oliveira',
        'Pedrosa',
        'Pereira',
        'Pimentel',
        'Pires',
        'Ramos',
        'Ribeiro',
        'Rocha',
        'Rodrigues',
        'Santana',
        'Santiago',
        'Santos',
        'Silva',
        'Soares',
        'Souza',
        'Simões',
        'Teixeira',
        'Vieira'
    ]
}

function copyTextToClipboard(text, fallbackCopyTextToClipboard) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard?.(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
    console.error('Async: Could not copy text: ', err);
    });
    }

const button = document.getElementById('randomButton')
const nameField = document.getElementById('nameField')
button.addEventListener('click', () => {
    const name = `${db.names[Math.floor(Math.random()*db.names.length)]} ${db.lastNames[Math.floor(Math.random()*db.lastNames.length)]}`
    nameField.innerText = name
    copyTextToClipboard(name, ()=>alert("Não foi possível compiar o nome : ("))
})