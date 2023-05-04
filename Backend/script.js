//  redemander pq function Async ?

async function getDataWorks() {
    try {
        const reponse = await fetch("http://localhost:5678/api/works/");
        const dataWorks = await reponse.json();
        return dataWorks
        
    }  catch(error){
    console.log(error)
    }
}

async function getDataCategory() {
    try {
        const reponse = await fetch("http://localhost:5678/api/categories/");
        const DataCategory = await reponse.json();
        return DataCategory
        
    }  catch(error){
    console.log(error)
    }
}

async function init() {

    let a = 10;
    let b = 5;

    console.log(a + b)

    const dataWorks = await getDataWorks()
    console.log(dataWorks)
    console.log("coucou")

    const dataCategory = await getDataCategory()
    // console.log(dataCategory)

    function genererFiltre(dataCategory){   
        for (let i = 0; i < dataCategory.length; i++) {
            const container = document.getElementById("filters")
            container.innerHTML += `<div selector="${dataCategory[i].id}" class="filter ${dataCategory[i].id} ${dataCategory[i].name}" id="${dataCategory[i].id}"> ${dataCategory[i].name} </div>`

        }
    }
    genererFiltre(dataCategory);

    function genererDataWorks(dataWorks){
        for (let i = 0; i < dataWorks.length; i++) {

            const figure = dataWorks[i]

            const sectionGallery = document.querySelector(".gallery")

            const workElement = document.createElement("figure")

            const imageElement = document.createElement("img");
            
            imageElement.src = figure.imageUrl
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

    const btnAll = document.querySelector(".filter_All")
    // console.log(btnAll)
    const btnOne = document.querySelector('div[selector="1"]')
    // console.log(btnOne)
    const btnTwo = document.querySelector('div[selector="2"]')
    // console.log(btnTwo)
    const btnThree = document.querySelector('div[selector="3"]')
    // console.log(btnThree)

    btnAll.addEventListener("click", function (){
        const trier = dataWorks.filter(function (dataWork){
            return dataWork ;
        });
        document.querySelector("#gallery").innerHTML = "";
        genererDataWorks(trier);

    });

    btnOne.addEventListener("click", function (){
        const trier = dataWorks.filter(function (dataWork){
            return dataWork.categoryId == 1;
        });
        document.querySelector("#gallery").innerHTML = "";
        genererDataWorks(trier);

    });

    btnTwo.addEventListener("click", function (){
        const trier = dataWorks.filter(function (dataWork){
            return dataWork.categoryId == 2;
        });
        document.querySelector("#gallery").innerHTML = "";
        genererDataWorks(trier);

    });

    btnThree.addEventListener("click", function (){
        const trier = dataWorks.filter(function (dataWork){
            return dataWork.categoryId == 3;
        });
        document.querySelector("#gallery").innerHTML = "";
        genererDataWorks(trier);
    });


    























}

init()


