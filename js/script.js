function colorChanger(){
    let colorSwitch = document.getElementById("colorSwitch");
    let items = document.getElementsByClassName("ch")

    if (colorSwitch.checked == true){
        for (i=0; i<items.length; i++)
        items[i].classList.add("dark")
    }else{
        for (i=0; i<items.length; i++)
        items[i].classList.remove("dark")
    }
    
}



