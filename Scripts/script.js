document.querySelectorAll('form span').forEach(item => {
  item.addEventListener('click', (e) => {
    addVal(item.innerHTML);
  })
})

function addVal(valor) {
  if (valor == 'CE') {
    document.calculadora.display.value = '';
  } else if (valor == '=') {
    try {
      document.calculadora.display.value = eval(document.calculadora.display.value);
    } catch (e) {
      alert('Expressão inválida!');
      document.calculadora.display.value = '';
      console.log(e);
    }
  } else {
    document.calculadora.display.value += valor;
  }
}
