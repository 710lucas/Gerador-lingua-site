var conteudo_arquivo;

async function arquivoSelecionado(){
    var selected_archive =  document.getElementById('input').files[0];

    const reader = new FileReader();
    await reader.readAsText(selected_archive);
    reader.onload = function(){
      conteudo_arquivo = reader.result;
      conteudo_arquivo = conteudo_arquivo.replace(/\n/g, " ");
      gerar_palavra(silabas, 2);
    }

}


document.getElementById("input").addEventListener('change', arquivoSelecionado, false);;
