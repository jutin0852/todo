var light=document.getElementById('light');
var ul=document.querySelector('ul');
var list=document.querySelectorAll('.sort li');
var sun=document.getElementById('sun');
var text=document.getElementById("text");
var but=document.querySelector("button");
var check=document.querySelectorAll('.check');
var ps=document.querySelectorAll('.p');
var shadow=document.getElementById('shadow')

// dark mode
function moon(){
    if(light.className==""){
        light.className="light"
        light.style.backgroundImage="url(/images/bg-desktop-dark.jpg)";
    light.style.backgroundColor="hsl(235, 21%, 11%)";
    shadow.style.backgroundColor="hsl(235, 24%, 19%)";
    ul.style.color="hsl(234, 39%, 85%)";
    
    sun.src="/images/icon-sun.svg";
    

    }
    else{
        light.classList.remove("light");
        light.style.backgroundImage="url(/images/bg-desktop-light.jpg)";
        light.style.backgroundColor="white";
        shadow.style.backgroundColor="white";
        ul.style.color="hsl(235, 19%, 35%)";
        
        sun.src="/images/icon-moon.svg";

    }
    
    

   
}


but.addEventListener("click",function(e){
    e.preventDefault();
    // create elements
    var li=document.createElement('li');
    var label=document.createElement('label');
    var span=document.createElement('span');
    var task=document.createElement('span');
    var img=document.createElement('img');
    var input=document.createElement('input')
    // appending child to parents
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
    label.appendChild(span);
    li.appendChild(task);
    li.appendChild(img);
    // add attributes
    input.setAttribute("type","checkbox");
    input.setAttribute("class","check");
    img.setAttribute("src","/images/icon-cross.svg");
    // add class
    img.classList.add("cross");
    label.classList.add('container');
    span.classList.add('checkmark');
    task.classList.add('p');
    
    
    task.textContent=text.value
    })
    // added event listener to the ul
    ul.addEventListener("click",function(e){
        //delete btn
        if(e.target.className=="cross"){
           var taskList= e.target.parentElement;
           ul.removeChild(taskList); }
           
           //strike through when ticked
        if(e.target.className=="check"){
            if(e.target.checked){
                e.target.parentElement.nextElementSibling.classList.add('line');
            }
            else{
                e.target.parentElement.nextElementSibling.classList.remove('line');
            }
            } 

          })
        //   draging elements
        var dragged=null;
        
        function dragStart(){
          
            dragged=event.target;
            console.log("dragging")
        }
        function dragOver() {
            event.preventDefault();
            
        }
        function Drop(){
            event.preventDefault();
            
            if(event.target!=dragged){
                console.log(event.target);
                let allitems = document.querySelectorAll(".sort li");
                let draggedpos= 0 ;
                let droppedpos = 0;
                for(let x = 0; x<allitems.length; x++){
                    if(dragged == allitems[x]){ draggedpos = x;}
                    if(event.target == allitems[x]){ droppedpos = x;}
                    
                }
                if(draggedpos < droppedpos ){
                    event.target.parentNode.insertBefore(dragged,event.target.nextSibling)

                }
                else{
                    event.target.parentNode.insertBefore(dragged,event.target)
                }
                
                
            }


        }
 
