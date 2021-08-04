var silabas;

var palavras_geradas = [];
var palavras_pt = [];
var str_final = "";

//mudar a url depois
fetch('https://lucaspb710.gitlab.io/geradordelingua-site/silabas.txt')
  .then(response => response.text())
  .then(text => silabas = text.split("\n")) //Cada linha é uma silaba




function gerar_palavra(silabas, modo){
  palavras_geradas = [];
  palavras_pt = [];
  str_final = "";
  var tamanhoP, tamanhoGerado;

  switch(modo){
    case 1:
      //Frase que o usuario deseja que seja modificada
      //var input = document.getElementById("frase").value;
      var input = document.getElementById("frase").innerText;
      break;
    case 2:
      var input = conteudo_arquivo;
      break;
  }



  //garantir que o usuario tenho escrito algo
  if(input != null && input != "" && input != " "){
    var palavras = input.replace("\n", " ").replace(/\0/g, " ").split(" "); //Cria uma array das palavras que a pessoa digitou
    }
  else
    return

  for(var i = 0; i<palavras.length; i++){
    if(palavras[i] == ""){
      palavras.splice(i,1);
    }
  }

  for(var i = 0; i<palavras.length; i++){
    palavras[i] = palavras[i].replace(/[,.!?;]/g, '');
    console.log(palavras[i])
    console.log(input)

    //basicamente tenta chutar a quantidade de
    //silabas que uma palavra tem
    if(palavras[i].length >= 4){
      if(palavras[i].length%2 == 0)
        tamanhoP = palavras[i].length/2;
      else
        tamanhoP = (palavras[i].length+1)/2;
    }
    else
      tamanhoP = palavras[i].length;

    //Gera um numero aleatorio de silabas que a palavra
    //final terá que ter, garantindo que ela tenha pelo
    //menos duas silabas
    tamanhoGerado = Math.floor(Math.random()*tamanhoP)+1;
    while(tamanhoGerado < 2)
      tamanhoGerado = Math.floor(Math.random()*tamanhoP)+1;

    //adiciona silabas aleatorias correspondendo à quantidade
    //de silabas que foi determinado, aleatoriamente, acima
    var str_tmp = "";
    for(var j = 0; j<tamanhoGerado; j++){
      var _rand = Math.floor(Math.random()*(silabas.length-1))+1;
      // str_final += silabas[_rand];
      str_tmp += silabas[_rand];
    }

    // if(!palavras_geradas.includes(str_tmp)){
      // palavras_geradas.push(str_tmp);
    // }

    if(!palavras_pt.includes(palavras[i])){
      palavras_pt.push(palavras[i]);
      palavras_geradas.push(str_tmp);
    }

    // str_final+=" ";
  }

  for(var i = 0; i<palavras.length; i++){
    var pos;
    for(var j = 0; j<palavras_pt.length; j++){
      if(palavras[i] == palavras_pt[j])
        pos = j;
    }
    str_final+=palavras_geradas[pos]+" ";

  }

  var dicionario_HTML = "";
  for(var i = 0; i<palavras_pt.length; i++){
    dicionario_HTML += palavras_pt[i] + " → " + palavras_geradas[i]+"<br>";
  }
  document.getElementById("dic").innerHTML = dicionario_HTML;

  document.getElementById("traduzido").innerHTML = str_final;

  if(document.getElementById("download_trad").style.display == "none"){
    document.getElementById("download_trad").style.display = "inline";
    document.getElementById("download_dic").style.display = "inline";
  }
}

//usar replace para descodificar

function download_trad(){
  var blob = new Blob([str_final], { type: "text/plain;charset=utf-8" });
  console.log(blob.text());

  var url = window.URL.createObjectURL(blob);
  document.getElementById("download_link_trad").href = url;
  document.getElementById("download_link_trad").download = "arquivo_traduzido.txt";

}

function download_dic(){

  var dic = "";

  for(var i = 0; i<palavras_geradas.length; i++){
    dic += palavras_geradas[i] + " -> " +palavras_pt[i] + "\n";
  }

  var blob = new Blob([dic], { type: "text/plain;charset=utf-8" });
  console.log(blob.text());

  var url = window.URL.createObjectURL(blob);
  document.getElementById("download_link_dic").href = url;
  document.getElementById("download_link_dic").download = "arquivo_dicionario.txt";

}



