// Removes and reapplies the active class to the nav bar
let getNav=document.querySelectorAll("a")


getNav.forEach(a=>{

    a.addEventListener("click", function(){
    
      // remove class from any currently active elements
      getNav.forEach(a => { a.classList.remove("active"); });
    
      // then add the active class to the selected element
      a.classList.add("active")
    
    })
})
