var chosenImage = 1;

//This variable counts how many images are in the "main" element so that no matter
//no matter how many images are put in the code knows how many there are
let numberOfImages = document.getElementById("main").childElementCount;


document.getElementById("bigButton").addEventListener("click", ()=>{

    let imageToDeselect = document.querySelector(`#main img:nth-child(${chosenImage})`);
    imageToDeselect.classList.remove("chosen");

    //This allows for looping of the images
    chosenImage += 1;
    if(chosenImage > numberOfImages){
        chosenImage = 1
    }

    let imageToSelect = document.querySelector(`#main img:nth-child(${chosenImage})`);
    imageToSelect.classList.add("chosen");
    document.getElementById("biggerImage").style.backgroundImage = `url(${imageToSelect.src})`;
    

})