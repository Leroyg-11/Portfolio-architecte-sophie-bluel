const form = document.querySelector("form");
const error = document.querySelector(".form-error"); 


async function postUser({ form_email, form_password}){

    const body = {
        "email": form_email,
        "password": form_password
      }

    try{
        const response = await fetch("http://localhost:5678/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });
        console.log(response)
    }  catch (error){
        console.log(error)
    }
}

function handleSubmit(event){
    // empeche le rechargement complet de la page au click "se connecter"
    event.preventDefault(); 

    // Permet de savoir ou recuperer les valeurs entrés dans les champs mail et password (event.target[i].value;)
    // console.log(event)

    const form_email = event.target[0].value;
    const form_password = event.target[1].value;

    if(!form_email || !form_password){
        error.innerHTML = "try again"
    }

  postUser({form_email, form_password});
    

}




// ajout d'eventLisnter sur le btn submit ("se connecter") + lance la fonction handleSub 
form.addEventListener("submit", handleSubmit);