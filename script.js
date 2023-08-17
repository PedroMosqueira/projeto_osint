
var valor=document.getElementById("imodo_b").value;
document.getElementById("imodo_bt").value=String(valor);

 function val(){
    var valor=document.getElementById("imodo_b").value;
document.getElementById("imodo_bt").value=String(valor);



 }
 function nome(n){
    
    document.getElementById('imodo_bt').name=String(n);


 }




function desm(){
    document.getElementById("divb").style.backgroundColor='rgba(255, 255, 255, 0.062)';
    document.getElementById("divb").style.color='white';

    document.getElementById("divv").style.backgroundColor='rgba(255, 255, 255, 0.062)';
    document.getElementById("divv").style.color='white';

    document.getElementById("divc").style.backgroundColor='rgba(255, 255, 255, 0.062)';
    document.getElementById("divc").style.color='white';

    if (window.innerWidth<=600){
        document.getElementById('centrob').style.display='none';
        document.getElementById('centrov').style.display='none';
        document.getElementById('centroc').style.display='none';
    }




}




function selecionar(id){

    desm();
   
    
    document.getElementById(id).style.backgroundColor='white';
    document.getElementById(id).style.color='black';

    
    document.getElementById('dd').style.display='initial';
    document.getElementById('tk').style.display='initial';

    switch(id){

        case 'divb':
            document.getElementById('linkb').href='tokenb.html';
            break;
        
        case 'divv' :
            document.getElementById('linkb').href='tokenv.html';
            break;
        case 'divc' :
            document.getElementById('linkb').href='tokenc.html';
            break;

 
    }  
    if (window.innerWidth<=600){
    switch(id){

        case 'divb':
            document.getElementById('centrob').style.display='block';
            break;
        
        case 'divv' :
            document.getElementById('centrov').style.display='block';
            break;
        case 'divc' :
            document.getElementById('centroc').style.display='block';
            break;

 
    }  

}
}
    

    

   
 





function dados(){



    document.getElementById('inivel').style.display='none';
    document.getElementById("subm").style.display='block';

    var d= document.querySelector('input[name="nivel"]:checked').value;

    
    
    if(d=='basico'){
        document.getElementById('op_b').style.display='block';
        

    }else if(d=='veiculo'){
        document.getElementById('op_v').style.display='block';
        


    }else if(d=='completo'){
        document.getElementById('op_c').style.display='block';
}

}






