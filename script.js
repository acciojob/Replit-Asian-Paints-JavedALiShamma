//your JS code here. If required.
for(let i=1;i<=9;i++){
    //  First we need to create a div
    const gridContainer=document.querySelector("#grid-container");
    let ele= document.createElement("div");
    /// this is how we can add Element Elemet can be div span p anything
    ele.id=i;
    ele.innerHTML=i;
    gridContainer.appendChild(ele);
    // Here we have append the 9 div in the main container
}
console.log("Hello Sanjay")
 
// Now here the all works started
// now we have to extract the detils which were filled by the user
// Here we need a event listner
 // STEP 1 we need form here 
 const form= document.querySelector("#color-form");
 let prevcell=null;
 // We have the form where we need to add events listners to 
 form.addEventListener("submit",function(event){
    event.preventDefault();
    // Here we have the form and form have the default 
    // that values are send to another page

    console.log("Iam in ");
    let cellId=form.inputId.value;
    let selectedColor = form.color.value;
    let cell = document.getElementById(cellId);
    cell.style.backgroundColor = selectedColor;
    if(prevcell!=null){
        prevcell.style.backgroundColor="white";
    }
    prevcell=cell;
 });

