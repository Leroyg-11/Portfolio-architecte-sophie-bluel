window.onload = () => {

    const url = "http://localhost:5678/api/works/";
    let catId = "http://localhost:5678/api/categories/"   
    const container = document.getElementById("gallery")
    const img = "http://localhost:5678/images/"
    const filter = document.querySelectorAll("#filter");
    let filters = document.querySelectorAll("#filters div"); 

    console.log(filters)
    console.log(catId)


    const getWorks = () => {
        fetch(url)
        .then(function (resultat) {
            return resultat.json()
        })
        .then (function (data) {
            console.log(data)
            for (projet in data) {
                container.innerHTML += `<a href="${data[projet].imageUrl}" >
                <figure class="active">
                    <img src="${data[projet].imageUrl}"  alt="Categorie : ${data[projet].category.name} : ${data[projet].title}">
                    <figcaption class="title" id="title">${data[projet].title}</figcaption>
                </figure>
            </a>`}
        })

        const trySomething = () => {
            fetch(url)
            .then(function(resultat){
                return resultat.json()
            })
            .then (function (dataId){
                console.log(`${dataId[projetId].category}`)
                // for(projetId in dataId){
                //     catId = projetId.category.name;
                //     console.log()
                    
                    
                // }

                
                for(let filter of filters){
                    filter.addEventListener('click', function(){
                        let tag = this.id;
                        let figures = document.querySelectorAll("#gallery figure");
                        console.log(tag)

                        

                        // for (let figure of figures){
                        //     figure.classList.replace("active", "inactive");
                            
                        //     if(tag == `${data[projet].categoryId}` || tag == "1 2 3 All"){
                        //         figure.classList.replace("inactive", "active");
                                
                        //     }
                        // }
                    });
                };
                
            })
        }

        trySomething();
            

        

        
    }
    getWorks();
}    