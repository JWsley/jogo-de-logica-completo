var paused = true;


window.onload = time('120');

function time(duration){

let audio = document.querySelector('#yoshi')
audio.play()

let fail = document.querySelector('#fail')

let elemento = document.querySelector('#contador');
		let contador = duration;
        

		interval = setInterval(function cont(){
          if(!paused){ if(contador >=0)  {
             elemento.innerHTML = contador--; 
             console.log(contador);
                if (contador<10){
                    elemento.style.color="red"

                }
        
        }else{
            clearInterval(interval)
            fail.play()
            errado1('noselect')
            errado2('noselect')
            errado3('noselect')
            correto('noselect')
           }
            console.log(contador)}
            
        }, 1000);
        console.log(interval)
      
     
           

}








 


function correto(verify){
    
    var certo = document.querySelector('#o4')
    var seta = document.querySelector('#next')
    var audio = document.querySelector('#coin')
    let verif = verify
    if (verif == 'select'){audio.play()}
    clearInterval(interval)

    certo.style.background="green" 
    certo.style.animation="certo 2s"


    seta.style.opacity="100%"

    seta.disabled="false"

   
}


    
    
function errado1(verify){
    let errado = document.querySelector('#o1')
    var audio = document.querySelector('#error')
    let verif = verify
    if (verif == 'select'){audio.play()}
   

    errado.style.background ="red"
    errado.style.animation="errado 2s"
    
   

}
function errado2(verify){
    let errado = document.querySelector('#o2')
    var audio = document.querySelector('#error')
    let verif = verify
    if (verif == 'select'){audio.play()}
   

    errado.style.background ="red"
    errado.style.animation="errado 2s"
   

}

function errado3(verify){
    let errado = document.querySelector('#o3')
    var audio = document.querySelector('#error')
    let verif = verify
    if (verif == 'select'){audio.play()}
    

    errado.style.background ="red"
    errado.style.animation="errado 2s"
   

}


 
 function breaky(){
    
    var menu = document.querySelector('#menu')
    var btpause = document.querySelector('#btp')
    
    paused = false
    
    
 
    
 }

 function resume(){
    var menu = document.querySelector('#menu')
    paused = false
         
    menu.style.display="none"
    btp.style.display="block"

    

 }


 function vacalo_chirudo(){

    var calavo = document.querySelector('#vacalo')
    calavo.play()



 }