 const colors = ['hue-rotate(10deg)','hue-rotate(20deg)', 'hue-rotate(30deg)','hue-rotate(40deg)','hue-rotate(50deg)','hue-rotate(60deg)', 'hue-rotate(70deg)' , 'hue-rotate(80deg)','hue-rotate(90deg)','hue-rotate(100deg)', 'hue-rotate(110deg)', 'hue-rotate(120deg)' , 'hue-rotate(150deg)','hue-rotate(160deg)', 'hue-rotate(180deg)','hue-rotate(190deg)', 'hue-rotate(200deg)', 'hue-rotate(220deg)', 'hue-rotate(240deg)', 'hue-rotate(260deg)', 'hue-rotate(280deg)', 'hue-rotate(300deg)', 'hue-rotate(310deg)','hue-rotate(320deg)', 'hue-rotate(330deg)', 'hue-rotate(340deg)', 'hue-rotate(350deg)', 'hue-rotate(360deg)'];  
  let currentIndex = 0;
   function changeImageColor() { 
    document.getElementById('background-container').style.filter = colors[currentIndex];
     currentIndex = (currentIndex + 1) % colors.length;
     } 
    setInterval(changeImageColor, 1000); 
    


    
    
