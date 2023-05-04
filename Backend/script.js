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
    const dataWorks = await getDataWorks()
    console.log(dataWorks)

    const dataCategory = await getDataCategory()
    console.log(dataCategory)

    


}

init()




// for(category in dataCategory){
//     const container = document.getElementById("filters")
//     container.innerHTML += `<div class="filter ${dataCategory[category].id} ${dataCategory[category].name}" id="${dataCategory[category].id}"> ${dataCategory[category].name} </div>`
// }


// for (projet in dataWorks) {
//     const container = document.getElementById("gallery")
//     const img = "http://localhost:5678/images/"

//     container.innerHTML += `<a href="${dataWorks[projet].imageUrl}" >
//     <figure class="active">
//         <img src="${dataWorks[projet].imageUrl}"  alt="Categorie : ${dataWorks[projet].category.name} : ${dataWorks[projet].title}">
//         <figcaption class="title" id="title">${dataWorks[projet].title}</figcaption>
//     </figure>
// </a>`}