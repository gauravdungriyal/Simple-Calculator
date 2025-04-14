const value=document.querySelectorAll("p");
const mainArea=document.querySelector(".main-input");
const resultBtn=document.querySelector(".result");
const clear=document.querySelector(".clear");
let array=[]
value.forEach(para => { 
    para.addEventListener("click",()=>{
        if(!isNaN(array.at(-1)) && !isNaN(array.at(-1))<=9 && para.innerText!="+" && para.innerText!="-" && para.innerText!="*" && para.innerText!="/" && para.innerText!="%" && para.innerText!="="){
            mainArea.innerHTML=mainArea.innerHTML+para.innerText;
            array[array.length-1]=array[array.length-1]*10+parseInt(para.innerText);
        }
        else if(para.innerText!="="){
                array.push(para.innerText);
                mainArea.innerHTML=mainArea.innerHTML+para.innerText;
                
        
        }
    })
});

resultBtn.addEventListener("click",()=>{
    let operation=[];
    let ans=0;
    array.forEach((el)=>{
        if(operation.length==2){
            const operator=operation.pop();
            switch(operator){
                case "+":
                    ans=parseInt(operation.pop())+parseInt(el);
                    break;
                case "-":
                    ans=parseInt(operation.pop())-parseInt(el);
                    break;
                case "*":
                    ans=parseInt(operation.pop())*parseInt(el);
                    break;
                case "%":
                    ans=parseInt(operation.pop())%parseInt(el);
                    break;
                case "/":
                    ans=parseInt(operation.pop())/parseInt(el);
                    break;
            }
            operation.push(ans)
        }
        else{
            operation.push(el);
        }
        mainArea.innerHTML=ans;
    })
    array=[]
    array.push(ans)
});
clear.addEventListener("click",()=>{
    mainArea.innerHTML="";
    array=[]
    operation=[]
})