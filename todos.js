var listElement = document.querySelector('#app ul');//buscar ul no HTML
var inputElement = document.querySelector('#app input');// buscar o input no HTML.
var buttonElement = document.querySelector('#app button');//buscar o botão no HTML.

var todos = [//lista de array.
  'Fazer Cafá',
  'Estudar Javascript',
  'Acessar Comunidade RocketSeat'
];

function renderTodos() {
  listElement.innerHTML = '';//apagar o texto anterior , pois ao renderizar surge uma nova lista.

  for (todo of todos) {// for especifico pra array.percorrre cada item e retorna variavel todo.
    var todoElement = document.createElement('li');// criando Elemanto lista.
    var todoText = document.createTextNode(todo);// criando todoText que vai ficar na variavel todo. 

    todoElement.appendChild(todoText);// adicionado todoText dentro do todoElement.
    listElement.appendChild(todoElement);// adicionando todoElement dentro da lista.
  }
}
renderTodos();//exculta a função.

//adicionando todo.
function addTodo() {
  var todoText = inputElement.value;// busca o valor do input.

  todos.push(todoText);//adiciona o todo no array.obs: push adiciona um item ao fim da lista.
  inputElement.value = '';// apaga o input atual que foi digitado na caixa de texto.
  renderTodos();//chamar função .
}
buttonElement.onclick = addTodo;// chamar a função ao clicar. 