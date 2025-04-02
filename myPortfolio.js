const menu = document.getElementById("nav")
const toogle = document.getElementById("toogler");
toogle.addEventListener("click", () => {
    menu.classList.toggle("show");
    const hideHeadings = document.getElementById("titles");
    hideHeadings.classList.toggle("hide");
    const zIndexphoto = document.getElementById("hero-image");
    zIndexphoto.classList.toggle("zIndex");
 });

 const alarm = document.getElementById("alarm-button").addEventListener("click", () => {
   return alert("Sorry, this button is not functional yet as Asavela is not taking messages yet, Please check back later!");
 });

 const alart = document.getElementById("alart-button").addEventListener("click", () => {
   return alert("Sorry, this button is not functional yet as Asavela is not taking messages yet, Please check back later!");
 });


 

