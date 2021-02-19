    // Brand and links and button colors
    const colorChange = document.getElementById('color-change');
    //navigation bar effect on scroll
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });
  
      //responsive navigation sidebar menu
      var menu = document.querySelector('.menu');
      var menuBtn = document.querySelector('.menu-btn');
      var closeBtn = document.querySelector('.close-btn');
  
      menuBtn.addEventListener("click", () => {
        menu.classList.add('active');
      });
  
      closeBtn.addEventListener("click", () => {
        menu.classList.remove('active');
      });