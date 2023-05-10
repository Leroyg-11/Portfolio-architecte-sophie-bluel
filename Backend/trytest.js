const form = document.querySelector("form");
const error = document.querySelector(".form-error")

async function postUser({formMail, formPass}){

    const  body = {
        email: formMail,
        password: formPass,
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
    }catch (error) {
        console.log(error)
    }



}




function btnSubmit(event) {
    event.preventDefault()

    console.log(event)

    const formMail = event.target[0].value;
    const formPass = event.target[1].value;

    if(!formMail || !formPass){
        error.innerHTML = "try again"
    }else{
        error.innerHTML = "bon retour"
    }

    postUser({formMail, formPass})


}

form.addEventListener("submit", btnSubmit)