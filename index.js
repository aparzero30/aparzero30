
    let header = document.getElementById("menu");
    let menuicon = document.getElementById("menu-icon");

   
   
    menuicon.onclick = function(){

        header.classList.toggle("openmenu")

        if(menu.classList.contains("openmenu")){
            menuicon.innerHTML ="close";  
         }
         else{
             menuicon.innerHTML="menu";
         }

    }

   
    

