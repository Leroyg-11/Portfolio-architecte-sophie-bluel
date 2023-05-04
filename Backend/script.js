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
