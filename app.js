const circles = document.querySelectorAll('.circle');

let activeLight = 0;
let delay = 5000;

let govno = () => {
    setTimeout(() => {
        changeLight();
        if (activeLight === 1) {
          delay = 1000;
          clearTimeout(govno);
          govno = setTimeout(() => {
            changeLight();
            if (activeLight === 2) {
              clearTimeout(govno)
              delay = 4000;
              govno = setTimeout(() => {
                  changeLight()
                  if(activeLight === 0){
                      clearTimeout(govno)
                      delay = 5000
                  }
              },delay)
            }
          }, delay);
        }
      }, delay);
}
govno()
setInterval(govno,10000)
function changeLight() {
  circles[activeLight].className = 'circle';
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }
  const currentLight = circles[activeLight];
  currentLight.classList.add(currentLight.getAttribute('color'));
}