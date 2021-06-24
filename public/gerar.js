var silabas;

//mudar a url depois
fetch('https://raw.githubusercontent.com/LucasPB710/GeradorDeLingua/master/silabas.txt')
  .then(response => response.text())
  .then(text => silabas = text.split("\n"))






function gerar_palavra(silabas){
  var tamanhoP, tamanhoGerado;

  var input = document.getElementById("frase").value;
  if(input != null && input != "" && input != " ")
    var palavras = input.split(" ");
  else
    return

  var str_final = "";
  for(var i = 0; i<palavras.length; i++){

    if(palavras[i].length >= 4){
      if(palavras[i].length%2 == 0)
        tamanhoP = palavras[i].length/2;
      else
        tamanhoP = (palavras[i].length+1)/2;
    }

    else
      tamanhoP = palavras.length-1;

    tamanhoGerado = Math.floor(Math.random()*tamanhoP)+1;
    while(tamanhoGerado < 2)
      tamanhoGerado = Math.floor(Math.random()*tamanhoP)+1;

    for(var j = 0; j<tamanhoGerado; j++){
      var _rand = Math.floor(Math.random()*silabas.length)+1;
      str_final += silabas[_rand];
    }
    str_final+=" ";
  }

  document.getElementById("traduzido").innerHTML = str_final;

}


