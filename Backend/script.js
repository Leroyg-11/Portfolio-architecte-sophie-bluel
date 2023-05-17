//  redemander pq function Async ?

import { getDataWorks, getDataCategory } from "./api.js";
// import coucou from './imprtgetGata'


// async function getDataWorks() {
//   try {
//     const response = await fetch("http://localhost:5678/api/works/");
//     const dataWorks = await response.json();
//     return dataWorks;
//   } catch (error) {
//     console.log(error);
//   }
// }



// async function getDataCategory() {
//   try {
//     const response = await fetch("http://localhost:5678/api/categories/");
//     const DataCategory = await response.json();
//     return DataCategory;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function init() {
  const dataWorks = await getDataWorks();
  console.log(dataWorks);
  // console.log("coucou");

  const dataCategory = await getDataCategory();
  // console.log(dataCategory)

  function genererFiltre(dataCategory) {
    for (let i = 0; i < dataCategory.length; i++) {
      const container = document.getElementById("filters");
      container.innerHTML += `<div selector="${dataCategory[i].id}" class="filter ${dataCategory[i].id} ${dataCategory[i].name}" id="${dataCategory[i].id}"> ${dataCategory[i].name} </div>`;
    }
  }
  genererFiltre(dataCategory);

  function genererDataWorks(dataWorks) {
    for (let i = 0; i < dataWorks.length; i++) {
      const figure = dataWorks[i];

      const sectionGallery = document.querySelector(".gallery");

      const workElement = document.createElement("figure");

      const imageElement = document.createElement("img");

      imageElement.src = figure.imageUrl;
      const nomElement = document.createElement("p");
      nomElement.innerText = figure.title;

      // On rattache la balise figure a la section gallery
      sectionGallery.appendChild(workElement);
      // On rattache l’image à workElement (la balise figure)
      workElement.appendChild(imageElement);
      workElement.appendChild(nomElement);
    }
  }
  genererDataWorks(dataWorks);

  // gestion des clicks filtres

  const btnAll = document.querySelector(".filter_All");
  // console.log(btnAll)
  const btnOne = document.querySelector('div[selector="1"]');
  // console.log(btnOne)
  const btnTwo = document.querySelector('div[selector="2"]');
  // console.log(btnTwo)
  const btnThree = document.querySelector('div[selector="3"]');
  // console.log(btnThree)

  btnAll.addEventListener("click", function () {
    const trier = dataWorks.filter(function (dataWork) {
      return dataWork;
    });
    document.querySelector("#gallery").innerHTML = "";
    genererDataWorks(trier);
  });

  btnOne.addEventListener("click", function () {
    const trier = dataWorks.filter(function (dataWork) {
      return dataWork.categoryId == 1;
    });
    document.querySelector("#gallery").innerHTML = "";
    genererDataWorks(trier);
  });

  btnTwo.addEventListener("click", function () {
    const trier = dataWorks.filter(function (dataWork) {
      return dataWork.categoryId == 2;
    });
    document.querySelector("#gallery").innerHTML = "";
    genererDataWorks(trier);
  });

  btnThree.addEventListener("click", function () {
    const trier = dataWorks.filter(function (dataWork) {
      return dataWork.categoryId == 3;
    });
    document.querySelector("#gallery").innerHTML = "";
    genererDataWorks(trier);
  });
}

init();

// --------------------

async function checkLocal() {
  const login = await document.querySelector(".login");
  const navUl = document.querySelector(".nav_ul");
  const logout = await document.createElement("li");

  logout.textContent = "logout";
  const imgLi = document.querySelector(".imgLi");
  const account = document.querySelector(".account");

  navUl.appendChild(logout);
  navUl.insertBefore(logout, imgLi);
  logout.classList.add("invisible");

  logout.classList.add("btn_logout");

  const localStatus = localStorage.getItem("status");

  // -------------- //

  if (localStatus === "200") {
    // code 200

    logout.classList.remove("invisible");
    logout.classList.add("visible");
    login.classList.add("invisible");

    account.classList.remove("account");
    account.classList.add("connected");
  } else {
    // code error
    login.classList.add("visible");
  }

  logout.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
    // genererDataWorks(dataWorks);

  });
  // -------MODALE------- //

  const modalContainer = document.querySelector(".modal_container");
  const modalTriggers = document.querySelectorAll(".modal-trigger");

  const modalOne = document.querySelector(".modal");
  

  modalTriggers.forEach((trigger) =>
    trigger.addEventListener("click", toggleModal)
  );


  function toggleModal() {
    const modal_update = document.querySelector(".modal_update");
    const btnAdd = document.querySelector(".add_work");

    modalContainer.classList.toggle("active");
    modalOne.classList.remove("invisible");

    btnAdd.addEventListener("click", function(){
      modalOne.classList.remove("active");
      modalOne.classList.add("invisible");
      modal_update.classList.remove("invisible");
      modal_update.classList.add("active");
    })
  }



  async function genererCatModal(){
    const dataCategory = await getDataCategory();
    

    function genererOption(dataCategory) {
      for(let i = 0; i < dataCategory.length; i++) {
        const modal_option = dataCategory[i];

        const modal_category = document.querySelector(".modal_category");

        modal_category.innerHTML = `<option class="${dataCategory[i].name}">${dataCategory[i].name}</option>`;

      }
    }  
    genererOption(dataCategory);

   
  }
  genererCatModal();





  


 

  async function initModal() {
    const dataWorks = await getDataWorks();

    function genererModalDataWorks(dataWorks) {
      for (let i = 0; i < dataWorks.length; i++) {
        const modalFigure = dataWorks[i];

        const sectionModalGallery = document.querySelector(".modal_gallery");
        const workModalElement = document.createElement("modal_figure");
        workModalElement.classList.add("modal_card");
        workModalElement.setAttribute('id', `${dataWorks[i].id}`)
        const imageModalElement = document.createElement("img");

        imageModalElement.src = modalFigure.imageUrl;
        const editModalElement = document.createElement("p");
        editModalElement.innerText = "éditer";

        const iconeModal = document.createElement("div");
        iconeModal.classList.add("icone_modal");
        iconeModal.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        iconeModal.setAttribute('id', `${dataWorks[i].id}`)

        // <i class="fa-solid fa-arrows-up-down-left-right"></i> MULTIFLECHES

        sectionModalGallery.appendChild(workModalElement);
        workModalElement.appendChild(imageModalElement);
        workModalElement.appendChild(editModalElement);
        workModalElement.appendChild(iconeModal);


        // iconeModal.addEventListener("click", function() {
        //   const modalFigureId = this.getAttribute('id')
        //   console.log(modalFigureId)

          
        // })

        iconeModal.addEventListener("click", async function() {
          const modalFigureId = this.getAttribute('id'); // Récupère l'ID de la modal figure
          const id = modalFigureId;
          const localToken = await localStorage.getItem("token");
          console.log(localToken)
          
          
          const response = await fetch(`http://localhost:5678/api/works/${id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${localToken.replace(/['"]+/g, '')}`, 
              // ${localToken.replace(/['"]+/g, '')} ==> Supprime les quotes qui entoure le token et qui bloque l'authentification
              "Content-Type": "application/json;charset=utf-8",
            }
          });
          
          if (response.status === 200) {
            // Suppression réussie
            const modalFigureElement = document.getElementById(modalFigureId);
            modalFigureElement.remove();
          } else if (response.status !== 200) {
            // Non autorisé
            console.log("Unauthorized");
          } else {
            // Erreur inattendue
            console.log("Unexpected Error");
          }
        });
        

      }
    }
    genererModalDataWorks(dataWorks);
  }
  initModal();

  
}

checkLocal();












