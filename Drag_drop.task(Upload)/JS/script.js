let icon=document.getElementById("icon");
let input=document.getElementById("input");
let table=document.getElementById("table");
let tableBody=table.lastElementChild;



icon.onclick=function(){
    input.click();
}

input.onchange=function(e){
    for (const item of e.target.files) {
       var reader= new FileReader();
       reader.onloadend=function(e){
         //console.log(e.target.result);
         let tr=document.createElement("tr");
         let tdImage=document.createElement("td");
         let image=document.createElement("img");
         image.setAttribute("src",e.target.result)
         image.style.height="240px";
         image.style.width="300px"
         tdImage.append(image);
         let tdImageName=document.createElement("td");
         tdImageName.innerText=item.name;
         let tdSize=document.createElement("td")
         tdSize.innerText=item.size;

         tr.append(tdImage,tdImageName,tdSize);
         tableBody.append(tr);
       }

       reader.readAsDataURL(item);
    }

}
thead.addEventListener("click",(e)=>{
    if (e.target.tagName === "BUTTON") {
        const button =e.target;
        const tr =button.parentNode;
        const thead =tr.parentNode;

        if (button.textContent === "remove") {
            thead.removeChild();
        }
    }
})