//Selecting side navbar, menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})

//Product search functionality
var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var entervalue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count++){

        var productname = productlist[count].querySelector("h2").textContent
        if(productlist[count].textContent.toUpperCase().indexOf(entervalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})