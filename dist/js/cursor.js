const
cursor = document.querySelector('#cursor'),
stalker = document.querySelector('#stalker');

document.addEventListener('mousemove', (event) => {
  const 
  x = event.clientX,
  y = event.clientY;
    
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  stalker.style.transform = `translate(${x}px, ${y}px)`;
  
  console.log('X :' , event.clientX , 'Y :' , event.clientY);
});