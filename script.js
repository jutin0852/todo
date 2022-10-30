var light=document.getElementById('light');
var ul=document.querySelector('ul');
var list=document.querySelectorAll('.sort li');
var sun=document.getElementById('sun');
var text=document.getElementById("text");
var but=document.querySelector("button");
var check=document.querySelectorAll('.check');
var foot=document.getElementById('foot');
var form=document.forms['textback']

var shadow=document.getElementById('shadow');



// dark mode
function moon(){
    if(light.className==""){
        light.className="light"
        light.style.backgroundImage="url(/images/bg-desktop-dark.jpg)";
    light.style.backgroundColor="hsl(235, 21%, 11%)";
    shadow.style.backgroundColor="hsl(235, 24%, 19%)";
    ul.style.color="hsl(234, 39%, 85%)";
    form.style.background="hsl(235, 24%, 19%)";
    text.style.background="hsl(235, 24%, 19%)";
    text.style.color="hsl(234, 39%, 85%)";
    
    sun.src="/images/icon-sun.svg";
    

    }
    else{
        light.classList.remove("light");
        light.style.backgroundImage="url(/images/bg-desktop-light.jpg)";
        light.style.backgroundColor="white";
        shadow.style.backgroundColor="white";
        ul.style.color="hsl(235, 19%, 35%)";
        form.style.background="white";
    text.style.background="white";
    text.style.color="hsl(235, 19%, 35%)";
        
        sun.src="/images/icon-moon.svg";

    }
    
    

   
}

form.addEventListener('click',function(e){
    if(e.target.className=="check"){
        if(!e.target.checked && !text.value==""){
            add();
        }
        else{
            text.value=""
        }
    }
})


 function add(){
    // e.preventDefault();
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
    ul.setAttribute("ondragover","dragOver()");
    ul.setAttribute("ondrop","Drop()");
    li.setAttribute("draggable","true");
    li.setAttribute("ondragstart","dragStart()")
    li.setAttribute("class","lm")
    li.setAttribute("class","ml")
    // add class
    img.classList.add("cross");
    label.classList.add('container');
    span.classList.add('checkmark');
    task.classList.add('p');
    task.textContent=text.value;

    //item mumber
    var num=document.querySelectorAll(".lm");
    var itemnum=document.getElementById('itemnum');
    if(num.length<=1){
        itemnum.innerHTML=num.length+ " item left";
    }
    else{   
    itemnum.innerHTML=num.length+ " items left";
    }
    
    }

    var list=document.querySelectorAll('.sort li');
    var items=document.querySelectorAll('.lm');
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

                //items left 
                items.forEach(function(item){
                    e.target.parentElement.parentNode.classList.remove("lm")
                })
                var num=document.querySelectorAll(".lm");
                var itemnum=document.getElementById('itemnum');
                if(num.length<=1){
                    itemnum.innerHTML=num.length+ " item left";
                }
                else{   
                itemnum.innerHTML=num.length+ " items left";
                }

               
                
                
            }
            else{
                e.target.parentElement.nextElementSibling.classList.remove('line');

                  //items left 
                  items.forEach(function(item){
                    e.target.parentElement.parentNode.classList.add("lm")
                })
                var num=document.querySelectorAll(".lm");
                var itemnum=document.getElementById('itemnum');
                if(num.length<=1){
                    itemnum.innerHTML=num.length+ " item left";
                }
                else{   
                itemnum.innerHTML=num.length+ " items left";
                }
            }
            } 

          })
        //   draging elements
        var dragged=null;
        
function dragStart(){
          
            dragged=event.target;
           
        }
 function dragOver() {
            event.preventDefault();
            
        }
 function Drop(){
            event.preventDefault();
            
            if(event.target.hasAttribute("draggable")){
                
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
 
        
        
foot.addEventListener('click',function(e){
            var ps=document.querySelectorAll('.p');
            if(e.target.id=="complete"){

                ps.forEach(function(p){
                if(p.className=="p"){
                p.parentElement.style.display="none" }
                else{
                    p.parentElement.style.display="block" 
                }
            })
        }
        if(e.target.id=="active"){
            ps.forEach(function(p){
                if(p.className=="p line"){
                p.parentElement.style.display="none" ;

            }
                else{
                    p.parentElement.style.display="block" 

                }
                
            })
            

        }

        if(e.target.id=="all"){
            ps.forEach(function(p){
                if(p.classList.contains("p")){
                    p.parentElement.style.display='block'
                }
            })
        }

        if(e.target.id=="clear"){

            ps.forEach(function(p){
            if(p.className=="p line"){
                ul.removeChild(p.parentElement)
                    }
           })
           }
        })
        
        ul.addEventListener('mouseover',function(e){
            if(e.target.classList.contains('ml')){
                e.target.children[2].style.display='block'
            }
        })
     ul.addEventListener('mouseout',function(e){
        if(e.target.classList.contains('ml')){
            e.target.children[2].style.display='none'
        }
     })


        


   
        
        

       