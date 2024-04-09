const containerEl = document.querySelector('.container');

  for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
    
  }
  console.log(containerEl);

  const colorContainerEls = document.querySelectorAll('.color-container');
  console.log(colorContainerEls);
  colorContainerEls.forEach((colorContainerEl) => {
    const colorCode = randomColor();
    colorContainerEl.style.backgroundColor = '#'+colorCode;
    colorContainerEl.innerHTML = '#' + colorCode;
  })


  function randomColor(){
    const chars = '0123456789abcdef'; //lấy ký tự của string này
    let colorNumber ='';
    for (let index = 0; index < 6; index++) {
      let randomNum = Math.floor(Math.random()*16);
      colorNumber += chars.substring(randomNum,randomNum+1) ; 
    }
    return colorNumber;
  }