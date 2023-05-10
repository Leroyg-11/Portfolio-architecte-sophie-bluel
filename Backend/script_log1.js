const form = document.querySelector(".container_log");
const error = document.querySelector(".form_error")

console.log(form)

async function postUser(form_mail, form_password){
    const body = {
        email: form_mail,
        password: form_password,
      }

    try{
        const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
        });
        document.location = "index.html"


    }  catch(error){
        console.log(error)
        error.innerHTML ="Veuillez entrer une adresse mail et un mot de passe valide"

    }



}

function handleSubmit(event){
    event.preventDefault();

    const form_mail = event.target[0].value
    const form_password = event.target[1].value

    postUser(form_mail, form_password)


    
}


form.addEventListener("submit", handleSubmit)
