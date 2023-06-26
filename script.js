window.onload = function() {
    var categoriaSelect = document.getElementById('categoria');
    categoriaSelect.addEventListener('change', atualizarUnidades);
    atualizarCategorias();
  
    var converterButton = document.querySelector('button');
    converterButton.addEventListener('click', converter);
  };
  
  function atualizarCategorias() {
    var categoriaSelect = document.getElementById('categoria');
    categoriaSelect.innerHTML = '';
  
    var categorias = ['comprimento', 'peso', 'temperatura'];
  
    categorias.forEach(function(categoria) {
      var option = document.createElement('option');
      option.textContent = categoria;
      categoriaSelect.appendChild(option);
    });
  
    atualizarUnidades();
  }
  
  function atualizarUnidades() {
    var categoriaSelect = document.getElementById('categoria');
    var unidadeOrigemSelect = document.getElementById('unidadeOrigem');
    var unidadeDestinoSelect = document.getElementById('unidadeDestino');
    var categoriaSelecionada = categoriaSelect.value;
  
    unidadeOrigemSelect.innerHTML = '';
    unidadeDestinoSelect.innerHTML = '';
  
    var unidadesOrigem = [];
    var unidadesDestino = [];
  
    switch (categoriaSelecionada) {
      case 'comprimento':
        unidadesOrigem = ['metros', 'centímetros', 'polegadas'];
        unidadesDestino = ['metros', 'centímetros', 'polegadas'];
        break;
      case 'peso':
        unidadesOrigem = ['quilogramas', 'gramas', 'libras'];
        unidadesDestino = ['quilogramas', 'gramas', 'libras'];
        break;
      case 'temperatura':
        unidadesOrigem = ['Celsius', 'Fahrenheit', 'Kelvin'];
        unidadesDestino = ['Celsius', 'Fahrenheit', 'Kelvin'];
        break;
      default:
        break;
    }
  
    unidadesOrigem.forEach(function(unidade) {
      var option = document.createElement('option');
      option.textContent = unidade;
      unidadeOrigemSelect.appendChild(option);
    });
  
    unidadesDestino.forEach(function(unidade) {
      var option = document.createElement('option');
      option.textContent = unidade;
      unidadeDestinoSelect.appendChild(option);
    });
  }
  
  function converter() {
    var valorInput = document.getElementById('valor');
    var unidadeOrigemSelect = document.getElementById('unidadeOrigem');
    var unidadeDestinoSelect = document.getElementById('unidadeDestino');
    var resultadoOutput = document.getElementById('resultado');
  
    var valor = parseFloat(valorInput.value);
    var unidadeOrigem = unidadeOrigemSelect.value;
    var unidadeDestino = unidadeDestinoSelect.value;
  
    var categoriaSelecionada = document.getElementById('categoria').value;
    var resultado;
  
    switch (categoriaSelecionada) {
      case 'comprimento':
        resultado = converterComprimento(valor, unidadeOrigem, unidadeDestino);
        break;
      case 'peso':
        resultado = converterPeso(valor, unidadeOrigem, unidadeDestino);
        break;
      case 'temperatura':
        resultado = converterTemperatura(valor, unidadeOrigem, unidadeDestino);
        break;
      default:
        break;
    }
  
    resultadoOutput.textContent = valor + ' ' + unidadeOrigem + ' é igual a ' + resultado + ' ' + unidadeDestino;
  }
  
  function converterComprimento(valor, unidadeOrigem, unidadeDestino) {
    // Conversão para metros
    switch (unidadeOrigem) {
      case 'metros':
        valor = valor;
        break;
      case 'centímetros':
        valor = valor / 100;
        break;
      case 'polegadas':
        valor = valor * 0.0254;
        break;
      default:
        break;
    }
  
    switch (unidadeDestino) {
      case 'metros':
        return valor;
      case 'centímetros':
        return valor * 100;
      case 'polegadas':
        return valor / 0.0254;
      default:
        break;
    }
  }
  
  function converterPeso(valor, unidadeOrigem, unidadeDestino) {

    switch (unidadeOrigem) {
      case 'quilogramas':
        valor = valor;
        break;
      case 'gramas':
        valor = valor / 1000;
        break;
      case 'libras':
        valor = valor * 0.45359237;
        break;
      default:
        break;
    }
  

    switch (unidadeDestino) {
      case 'quilogramas':
        return valor;
      case 'gramas':
        return valor * 1000;
      case 'libras':
        return valor / 0.45359237;
      default:
        break;
    }
  }
  
  function converterTemperatura(valor, unidadeOrigem, unidadeDestino) {

    switch (unidadeOrigem) {
      case 'Celsius':
        valor = valor;
        break;
      case 'Fahrenheit':
        valor = (valor - 32) / 1.8;
        break;
      case 'Kelvin':
        valor = valor - 273.15;
        break;
      default:
        break;
    }
  
    switch (unidadeDestino) {
      case 'Celsius':
        return valor;
      case 'Fahrenheit':
        return valor * 1.8 + 32;
      case 'Kelvin':
        return valor + 273.15;
      default:
        break;
    }
  }
  
  
  