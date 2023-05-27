      function pararAnimacao() {
        var imagem = document.getElementById("imagem");
        if (imagem.classList.contains("girando")) {
          imagem.classList.remove("girando");
          imagem.classList.add("parado");
        } else {
          imagem.classList.remove("parado");
          imagem.classList.add("girando");
        }
      }
