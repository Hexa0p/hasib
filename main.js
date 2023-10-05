let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");

 openBtn.addEvenListener("click", ()=> {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
});

closeBtn.addEvenListener("click", ()=> {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
});
