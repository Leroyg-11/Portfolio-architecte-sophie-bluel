window.onload = () => {
    const urlWorks = "http://localhost:5678/api/works/";
    const catId = "http://localhost:5678/api/categories/"; 

    const funcGlobal = () => {
        
        const getCategories = () =>  {
            fetch(catId)
            .then(function (resultat) {
                return resultat.json()
            })
            .then (function (dataId) {

                for(category in dataId){
                    const container = document.getElementById("filters")
                    container.innerHTML += `<div class="filter ${dataId[category].id} ${dataId[category].name}" id="${dataId[category].id}"> ${dataId[category].name} </div>`
                }

                fetch(urlWorks)
                .then(function (resultat) {
                return resultat.json()
                })
                .then (function (dataWorks) {
                // console.log(data)
                for (projet in dataWorks) {
                    const container = document.getElementById("gallery")
                    const img = "http://localhost:5678/images/"

                    container.innerHTML += `<a href="${dataWorks[projet].imageUrl}" >
                    <figure class="active">
                        <img src="${dataWorks[projet].imageUrl}"  alt="Categorie : ${dataWorks[projet].category.name} : ${dataWorks[projet].title}">
                        <figcaption class="title" id="title">${dataWorks[projet].title}</figcaption>
                    </figure>
                </a>`}


                })

                
            })
        }

        getCategories();

        const btnFiltre = () => {
            fetch(catId)
            .then(function (resultat) {
                return resultat.json()
            })
            .then (function (dataId) {


                fetch(urlWorks)
                .then(function (resultat) {
                return resultat.json()
                })
                .then (function (dataWorks) {
                    const clickFiltre1 = dataWorks.filter(function(dataWorks){
                        return dataWorks.categoryId == 1 ;
                    })
                    // console.table(clickFiltre1)

                    const clickFiltre2 = dataWorks.filter(function(dataWorks){
                        return dataWorks.categoryId == 2 ;
                    })
                    // console.log(clickFiltre2)

                    const clickFiltre3 = dataWorks.filter(function(dataWorks){
                        return dataWorks.categoryId == 3 ;
                    })
                    // console.log(clickFiltre3)       

                    const btn1 = document.getElementById("1")
                    // console.log(btn1)

                    const btn2 = document.getElementById("2")
                    // console.log(btn2)
                    
                    const btn3 = document.getElementById("3");
                    // console.log(btn3)

                    i = 1

                    for (i in dataWorks) {
                        const container = document.getElementById("gallery")
                        const img = "http://localhost:5678/images/"
    
                        container.innerHTML += `<a href="${dataWorks[i].imageUrl}" >
                        <figure class="active">
                            <img src="${dataWorks[i].imageUrl}"  alt="Categorie : ${dataWorks[i].category.name} : ${dataWorks[i].title}">
                            <figcaption class="title" id="title">${dataWorks[i].title}</figcaption>
                        </figure>
                    </a>`}



                })

                
            })
        }

        btnFiltre()

        
    
        

















        
        // 

        // const getFiltre = () => {
        //     fetch(urlWorks)
        //         .then(function (resultat) {
        //             return resultat.json()
        //         })
        //         .then (function (dataWorks) {
        //             // console.log(dataWorks[1].category.name)
        //             // console.log(dataWorks[0].categoryId)
    
        //                 fetch(catId)
        //                 .then(function (resultat) {
        //                     return resultat.json()
        //                 })
        //                 .then (function (dataId) {
        //                     // console.log(dataId[1].name)
        //                     // console.log(dataId[0].id)
    
        //                     const test = dataWorks.filter(function(dataWorks){
        //                         return dataWorks.categoryId == 1 ;
                                
        //                     })
        //                     // console.log(test)

        //                     const btn1 = document.getElementById("1")
        //                     console.log(btn1)

        //                     const btn2 = document.getElementById("2")
        //                     console.log(btn2)
                            
        //                     const btn3 = document.getElementById("3");
        //                     console.log(btn3)

        //                     btn3.addEventListener("click", function(){
        //                         const clickFiltre3 = dataWorks.filter(function(dataWorks){
        //                             return dataWorks.categoryId == 3 ;
        //                         }) 
        //                         document.querySelector("#gallery").innerHTML = " ";
        //                         GetWork(clickFiltre3);
        //                     })
        //                     console.log(btn3)
    
                            
    
    
    
        //                     const clickFiltre1 = dataWorks.filter(function(dataWorks){
        //                         return dataWorks.categoryId == 1 ;
        //                     })
        //                     // console.table(clickFiltre1)
    
        //                     const clickFiltre2 = dataWorks.filter(function(dataWorks){
        //                         return dataWorks.categoryId == 2 ;
        //                     })
        //                     // console.log(clickFiltre2)
    
        //                     const clickFiltre3 = dataWorks.filter(function(dataWorks){
        //                         return dataWorks.categoryId == 3 ;
        //                     })
        //                     // console.log(clickFiltre3)       


                           
                           



    
    
                            


                            
    
        //                 })
                          
    
        //         })
                
    
        // }
        // getFiltre();

    }

    funcGlobal()

    



}



