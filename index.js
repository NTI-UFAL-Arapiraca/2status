const Modal = {

  togleModal () {
    const modalClass = document
      .querySelector('.modal-overlay');
      
    if (modalClass.classList.incldes("active")) {
      modalClass.classList.remove("active");
    } else {
      document
        .querySelector('.modal-overlay')
        .classList
        .add('active');
    }
  }

  open () {
    // abrir modal
    // adicionar a classe active ao modal
    document
      .querySelector('.modal-overlay')
      .classList
      .add('active');
    
  },
  
  close () {
    // fechar Modal
    // remover a classe active no modal
    document
      .querySelector('.modal-overlay')
      .classList
      .remove('active');
  }
};


const card = document.getElementById("modal");

document.addEventListener("click", card);

