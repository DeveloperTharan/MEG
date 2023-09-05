//navbar scrol function
function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-light');
      } else {
        navbar.classList.remove('bg-light');
      }
    }); 
  }
  

//counter function
let valueDisplay = document.querySelectorAll('.counter');
let interval = 4000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue + "+";
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
})

/* scroll animation */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));



document.addEventListener('DOMContentLoaded', userScroll);