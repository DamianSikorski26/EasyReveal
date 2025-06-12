let elementsHidden = document.querySelectorAll(".display")

function reveal(){

 elementsHidden.forEach((e) => {
        let position = e.getBoundingClientRect().top;
        if (position < window.innerHeight){
            e.classList.add("revealed");
        }
        
    })
}

reveal();




window.addEventListener("scroll",(e) => {
    
   reveal();
    

})
        

