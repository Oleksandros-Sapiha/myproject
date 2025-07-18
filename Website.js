const increaseTextButton = 
document.getElementById('increaseText');
const toggleContrastButton = 
document.getElementById('toggleContrast')
let textSize = 16;
let isHighContrast = false;

IncreaseTextButton.onclick = function() {
textSize += 2;
document.body.style.fontSize = fontSize + 'px';
}

toggleContrastButton.onclick = function() {
   isHighContrast = !isHighContrast;
   if (isHighContrast) {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
   } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = "#000";
   }
};