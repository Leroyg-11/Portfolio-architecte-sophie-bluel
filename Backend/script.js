const url = "http://localhost:5678/api/works/";
const container = document.getElementById("gallery")
const img = "http://localhost:5678/images/"
const filter_item_container = document.querySelectorAll("filter_container div");
let filter_1 = document.getElementById("filter_1");


console.log("coucou");

const getWorks = () => {
    fetch(url)
    .then(function (resultat) {
        return resultat.json()
    })
    .then (function (data) {
        console.log(data)
        for (projet in data) {
            container.innerHTML += `<a href="${data[projet].imageUrl}">
            <figure>
                <img src="${data[projet].imageUrl}" alt="Categorie : ${data[projet].category.name} : ${data[projet].title}">
                <figcaption class="title" id="title">${data[projet].title}</figcaption>
            </figure>
        </a>`};

        // const filtreIdCategoryAll = data.filter(work => work.categoryId);
        // console.log(filtreIdCategoryAll);

        // const filtreIdCategory1 = data.filter(work => work.categoryId == '1');
        // console.log(filtreIdCategory1);

        // const filtreIdCategory2 = data.filter(work => work.categoryId == '2');
        // console.log(filtreIdCategory2);

        // const filtreIdCategory3 = data.filter(work => work.categoryId == '3');
        // console.log(filtreIdCategory3);


    })


    
}

getWorks();









// fetch("http://localhost:5678/api/categories").then((reponse) => {
//     return reponse.json()
// })
// .then((donnees) => {
//     console.log(donnees)
//     console.log(donnees[0])
// })



// fetch("http://localhost:5678/api/categories").then((reponse) => {
//     return reponse.json()
// })
// .then((donnees) => {
//     console.log(donnees)
//     console.log(donnees[1])
// })

// <div class="gallery">
//     <figure>
//         <img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
//         <figcaption>Abajour Tahina</figcaption>
//     </figure>
// </div>


// fetch("http://localhost:5678/api/works").then((test) => {
//     return test.json()
// })
// .then((donnees_test) => {
//     console.log(donnees_test)
//     console.log(donnees_test[5])
// })
