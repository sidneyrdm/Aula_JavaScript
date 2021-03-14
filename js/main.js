function botao(){
document.getElementById("teste").innerHTML="<a>Obrigado por clicar!</a>";
}

function redirecionar(){
    //window.open("https://jogostorrents.site/lista-jogos/");
    window.location.href="https://jogostorrents.site/lista-jogos/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML= "Obrigado por passar o mouse Aqui";
}

function voltar(){
    document.getElementById("mousemove").innerHTML= "Passe o mouse Aqui";
}

function load(){
    alert("Página carregada!");
}

function change(elemento){
    console.log(elemento.value);
}




/*function soma(n1, n2){
    return n1+n2;
}

function validaMaiorIdade(idade){
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}

var idade = prompt("Digite sua idade.: ");
if(validaMaiorIdade(idade)){
    console.log(idade+" - Anos, Você é Maior de idade");
}else{
    console.log(idade+" - Anos, Você é Menor de idade");
}

/*var p1 = "teste1";
var p2 = "teste2";

alert(p1+p2+" "+1425+"-"+1519);

/*let date = new Date();

alert(date.toLocaleDateString("pt-BR"));

/*var count = 0;
let array =[];
let total =0;
while (count <= 100) {
    console.log(count);
    count = count + 10;
    array.push(count);
};

for(let i=0; i< array.length; i++){
    total+= array[i];
}
console.log("itens listados.: "+array);
console.log("Soma dos itens listados.: "+total);
let idade = prompt("Qual a sua idade.: ");
if(idade >= 18){

    alert(idade+" maior de idade");
}else{
    alert(idade+" menor de idade");
}
let nome = "Sidney Brito";
let idade = 31;
let idade2 = 29;
let frase = "Japão é o melhor time do mundo!";

//alert(nome+" tem "+idade+" Anos");
//alert(idade + idade2);
console.log("Soma das idades declaradas.:"+(idade + idade2));
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));

let lista = ["maça", "pera", "uva"];
console.log(lista);

lista.push("Manga");

console.log("lista original.: "+lista);
console.log("lista ordenada.: "+lista.sort());
console.log("lista invertida.: "+lista.reverse());
console.log("lista com Join.: "+lista.reverse().join(" - "));

let fruta = {nome:"maça", cor:"vermelho"};

let fruta = [{nome:"maça", cor:"vermelho"}, {nome:"Melancia", cor:"Verde"}];
console.log(fruta);*/


