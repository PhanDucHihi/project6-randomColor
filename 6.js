
  const containerEl = document.querySelector('.container');

  for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('colorContainer');
    containerEl.appendChild(colorContainerEl);
  }

  const colorContainerEls = document.querySelectorAll('.colorContainer');

  colorContainerEls.forEach((colorContainerEl) => {
    const colorCode = random();
    colorContainerEl.style.backgroundColor = '#' + colorCode;
    colorContainerEl.innerHTML = '#' +colorCode;
  })

  function random(){
    const chars = '0123456789abcdef';
    let numberCode = '';
    for (let index = 0; index < 6; index++) {
      const randomNumber = Math.floor(Math.random()*16);
      numberCode+= chars.substring(randomNumber,randomNumber+1);
    }
    return numberCode;
  }