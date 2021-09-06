'use strict'
window.addEventListener('DOMContentLoaded', ()=>{

    const wrapper = document.querySelector('.switcher__wrapper'),
          switcher = document.querySelectorAll('.switcher__item'),
          switchBlock = document.querySelector('.switcher__color'),
          buttonWrapper = document.querySelector('.table__buttons'),
          btns = document.querySelectorAll('.arrow'),
          right = document.querySelector('.right'),
          left = document.querySelector('.left'),
          clear = document.querySelector('.clear'),
          build = document.querySelector('.build'),
          graphBtns = document.querySelectorAll('.build-buttons__item'),
          tblBtnAdd = document.querySelector('.plus'),
          tblBtnRemove = document.querySelector('.minus'),
          tableA = document.querySelector('#tableA'),
          tableB = document.querySelector('#tableB'),
          tr = document.getElementsByTagName('tr'),
          close = document.querySelector('.close'),
          modal = document.querySelector('.modal');
          let rowCount;


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
    function btnAnimate(array,activeCLass, first, second){
        array.forEach((btn)=>{
            btn.addEventListener('click',()=>{
                btn.classList.toggle(activeCLass);
                if(btn.classList.contains(first, activeCLass)){

                    array[1].classList.remove(activeCLass);
                }
                if(btn.classList.contains(second, activeCLass)){
                    
                    array[0].classList.remove(activeCLass);
                }

            });
        });
    }
    tblBtnAdd.addEventListener('click', function building(){
        for (let i = 0; i < tr.length; i++) {

            let td = document.createElement('td');
            let input = document.createElement('INPUT');
            input.value='0';
            input.classList = 'table__input';
            td.appendChild(input);
            tr[i].appendChild(td);
            
        }
        
        function buildRowTable(table){

            let newRow = table.insertRow();
            rowCount = $('#tableA tr').length;

            for(let i = 0; i < rowCount; i++){
                
                let td = document.createElement('td');
                let input = document.createElement('INPUT');
                input.value='0';
                input.classList = 'table__input';
                td.appendChild(input);
                newRow.appendChild(td);
                
            }
            if(rowCount === 8){
                tblBtnAdd.removeEventListener('click',  building);
            }
        }
        buildRowTable(tableA);
        buildRowTable(tableB);
        
    });
    tblBtnRemove.addEventListener('click', ()=>{
        removeColumn();
        removeRow(tableA);
        removeRow(tableB);
    });
    function removeColumn(){
        let td = document.querySelectorAll('td');
        let rowLength = $('#tableA tr').length;
        for (let i = 0; i < rowLength; i++) {

            tr[i].lastElementChild.remove();
            
        }
    }
    function removeRow(table){
        const tableName = table;
        let rowLength = $('#tableA tr').length;
        // tr[--rowLength].remove();
        tableName.deleteRow(--rowLength);
    }

    build.addEventListener('click',() =>{
        modal.style.top = '0';
    });
    close.addEventListener('click', () =>{
        modal.style.top = '-110%';
    });
    window.addEventListener('click',(event)=>{
        if(event.target == modal){
            modal.style.top = '-110%';
        }
    });
    btnAnimate(btns, 'button__active', 'right', 'left');
    // btnAnimate(graphBtns, 'build-buttons__active', 'build', 'clear');
    
   
    
});

