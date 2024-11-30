//li et lu les TAB
let li = document.querySelectorAll('.tab')
let div= document.querySelectorAll('.content')
let contenu1 = document.querySelector('.nomDuContenu1')
let contenu2 = document.querySelector('.nomDuContenu2')
let contenu3 = document.querySelector('.nomDuContenu3')


li.forEach(lis => {
    
    lis.addEventListener("click",function(){
        
        li.forEach(li =>{
            li.classList.remove('tab-active')
            li.classList.remove('borderrb')    
        })
        
        div.forEach((div =>{
            div.classList.remove('active')   
        }))
        
        this.classList.add('tab-active');  
        this.classList.add('borderrb'); 
        
        if (this.classList.contains('tab-nomDuContenu1')) {
            contenu1.classList.add('active');
        } else if (this.classList.contains('tab-nomDuContenu2')) {
            contenu2.classList.add('active');
        } else if (this.classList.contains('tab-nomDuContenu3')) {
            contenu3.classList.add('active');
        }   
    })
    
})



