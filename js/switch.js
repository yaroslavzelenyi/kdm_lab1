'use strict'
window.addEventListener('DOMContentLoaded', ()=>{

    const wrapper = document.querySelector('.switcher__wrapper'),
          switcher = document.querySelectorAll('.switcher__item'),
          switchBlock = document.querySelector('.switcher__color'),
          buttonWrapper = document.querySelector('.table__buttons'),
          btns = document.querySelectorAll('.arrow'),
          right = document.querySelector('#right'),
          left = document.querySelector('#left'),
          clear = document.querySelector('.clearTable'),
          build = document.querySelector('.buildTable'),
          graphBtns = document.querySelectorAll('.build__item');


    wrapper.addEventListener('click', (event)=>{
        
        let target = event.target;
        if(target.classList.contains('switcher__item')){
            if(!(target.classList.contains('active'))){
                switcher.forEach((g)=>{
                    g.classList.toggle('active');
                });

            }
            if(!(target.classList.contains('forward'))){
                switchBlock.style.cssText += 'transform: translateX(120px);transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)';
            } else{
                switchBlock.style.cssText += 'transform: translateX(0);transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)';
            }
        }
    });

    btns.forEach((e)=>{
        e.addEventListener('click',()=>{
            if(e.classList.contains('arrow')){
                e.classList.toggle('button__active');
            }
            if(e.classList.contains('right','button__active')){
                left.classList.remove('button__active');
            }
            if(e.classList.contains('left','button__active')){
                right.classList.remove('button__active');
            }
        });
    });
    
    graphBtns.forEach((e)=>{
        e.addEventListener('click', ()=>{
            if(e.classList.contains('build__item')){
                e.classList.toggle('build__active');
            }
            if(e.classList.contains('buildTable','build__item')){
                clear.classList.remove('build__active');
            }
            if(e.classList.contains('clearTable','build__item')){
                build.classList.remove('build__active');
            }
        });
    });
});

