
var sexo = 'f';
const retorno = (sexo ==='M') ? 'Masculino' : 'Feminino';//condição ternária , verificar se é Masculino ou feminino.
console.log(retorno);

/*estrtura de repetição*/

for (var i = 0; i <= 100; i++){
  console.log(i);//usa se o for quando nós sabemos o fim do laço.
}

/* while*/
var j = 219345872
while(j > 50){
  console.log(j);//usa o while quando não sabemos quantas vezes vai ser utilizado o laço.
  j /= 5;
}

/* intervalos e timeout */

/*function exibeAlgo() {
  console.log('hello word');
}//executa hello word a cada 1 segundo.
setInterval(exibeAlgo, 1000);*/

function exibeAlgo() {
  console.log('hello word');
}//executa hello word a cada 1 segundo.
setTimeout(exibeAlgo, 5000);// executa uma unica vez no exemplo em 5 segundo


/* exerccios*/
// 1º exercício
// Crie uma função que dado o objeto a seguir:
function retornar(){
var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"}
 return endereco;
}

var endereco = (`o usuário mora em ${cidade}/${uf}, no bairro${bairro}, na rua ${rua} com o nº${numero}.`)
console.log(endereco);

  