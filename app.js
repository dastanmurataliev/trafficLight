const circles = document.querySelectorAll('.circle');

let activeLight = 0;
let delay = 5000;

let svetofor = () => {
    setTimeout(() => {
        changeLight();
        if (activeLight === 1) {
          delay = 1000;
          clearTimeout(svetofor);
          svetofor = setTimeout(() => {
            changeLight();
            if (activeLight === 2) {
              clearTimeout(svetofor)
              delay = 4000;
              svetofor = setTimeout(() => {
                  changeLight()
                  if(activeLight === 0){
                      clearTimeout(svetofor)
                      delay = 5000
                  }
              },delay)
            }
          }, delay);
        }
      }, delay);
}
svetofor()
setInterval(svetofor,10000)
function changeLight() {
  circles[activeLight].className = 'circle';
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }
  const currentLight = circles[activeLight];
  currentLight.classList.add(currentLight.getAttribute('color'));
}