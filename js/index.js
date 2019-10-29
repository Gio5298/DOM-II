// Your code goes here
const header = document.querySelector('.logo-heading');
    header.addEventListener('dblclick', function(event) {
        header.style.color='skyblue'
    })

    const yellowBus = document.querySelector('.yellow-bus-header');
    yellowBus.addEventListener('mouseenter', function(event){
        event.target.style.border = '3px solid moccasin';
        event.target.style.transform ='scale(1.1)';
        event.target.style.transition ='all 0.5s';

    });
    yellowBus.addEventListener('mouseleave', function(event){
        event.target.style.border = '3px solid dodgerblue';
        event.target.style.transform ='scale(1)';
        event.target.style.transition ='all 0.5s';
    });