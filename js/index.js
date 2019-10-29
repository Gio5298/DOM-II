// Your code goes here

    //dblclick vvv
const header = document.querySelector('.logo-heading');
    header.addEventListener('dblclick', function(event) {
        header.style.color='skyblue'
    });

    //mouseenter vvv
const yellowBus = document.querySelector('.yellow-bus-header');
    yellowBus.addEventListener('mouseenter', function(event){
        event.target.style.border = '3px solid moccasin';
        event.target.style.transform ='scale(1.1)';
        event.target.style.transition ='all 0.5s';
    });
const nav = document.querySelectorAll('.nav a').forEach(el =>{
    el.addEventListener('mouseenter', () =>{
        el.style.color='red';
        setTimeout(function(){
            el.style.color='';
        }, 400)
    }, false);
    //mouseover vvv
    el.addEventListener('mouseover', () =>{
        el.style.color='blue';
        setTimeout(function(){
            el.style.color='blue';
        }, 350)
    }), false;
});

    //mouseleave vvv
    yellowBus.addEventListener('mouseleave', function(event){
        event.target.style.border = '3px solid dodgerblue';
        event.target.style.transform ='scale(1)';
        event.target.style.transition ='all 0.5s';
    });