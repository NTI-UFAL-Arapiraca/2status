let modal = document.getElementById("modal");
let online = document.getElementById("online");
let offline = document.getElementById("offline");
let modalTitle = document.getElementById("title");

function openModal(status, title){
    modal.style.display = "block";
    modalTitle.innerHTML = title;
    if(status){
        online.style.display = "flex";
        offline.style.display = "none";
    }else{
        online.style.display = "none";
        offline.style.display = "flex";
    }
}
function closeModal(){
    modal.style.display = "none";
}
document.addEventListener('keydown', (event) => {
    if(event.key === "Escape"){
        closeModal();
    }
})