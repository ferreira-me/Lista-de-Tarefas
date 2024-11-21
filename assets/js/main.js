const inputTarefa = document.querySelection ('.input-tarefa');
const btnTarefa = document.querySelection ('.btn-tarefa');
const tarefas = document.querySelection ('.tarefas');



function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener ('keypress', function (e) {
    if (e.KeyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa (inputTarefa.value);
    }
});

function limpaInput (){
    inputTarefa.value = '';
    inputTarefa.focus ();
}

function criaBotaoApagar (li){
    li.innerText += ' ';
    const botaoApagar = document.cresteElement ('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add ('apagar');
    botaoApagar.setAttribute ('class', 'apagar');
    botaoApagar.setAttribute ('title', 'Apagar esta tarefa');
    
    li.appendChild(botaoApagar);

}


function criaTarefa (textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar (li);
    salvarTarefas();
}

btnTarefa.addEventListener ('click', function(){
        if (!inputTarefa.value) return;
        criaTarefa (inputTarefa.value);
});

document.addEventListener ('click', function(e) {
    const el = e.target;

    if (el.classList.container ('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll ('li');
    const listaDeTarefas = [];

    for (let tarefa of listaDeTarefa){
        let tarefaTexto = tarefa.innerText;
         tarefaTexto = tarefaTexto.replace ('Apagar', '').trim();
         listaDeTarefas.push(tarefaTexto);
}
    const tarefasJSON = JSON.stringify (listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSakvas() {
    const tarefas = localStorage.getItem ('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listenDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();