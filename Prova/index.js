function registrarNotas() {
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
  
    var media = (nota1 + nota2) / 2;
    var situacao = media >= 5 ? "Aprovado" : "Reprovado";
  
    var tabela = document.getElementById("tabela-notas");
    var novaLinha = tabela.insertRow();
  
    var celulaNome = novaLinha.insertCell();
    var celulaMatricula = novaLinha.insertCell();
    var celulaNota1 = novaLinha.insertCell();
    var celulaNota2 = novaLinha.insertCell();
    var celulaMedia = novaLinha.insertCell();
    var celulaSituacao = novaLinha.insertCell();
  
    celulaNome.innerHTML = nome;
    celulaMatricula.innerHTML = matricula;
    celulaNota1.innerHTML = nota1;
    celulaNota2.innerHTML = nota2;
    celulaMedia.innerHTML = media.toFixed(2);
    celulaSituacao.innerHTML = situacao;
  
    document.getElementById("form-notas").reset();
  }
  
  function limparTabela() {
    var tabela = document.getElementById("tabela-notas");
    tabela.innerHTML = ""; // Limpa o conteúdo da tabela
  }