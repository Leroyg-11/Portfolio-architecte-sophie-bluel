const form = document.querySelector(".container_log");
const error = document.querySelector(".form_error")
// const url = await fetch("http://localhost:5678/api/users/login")


async function postUser(form_mail, form_password){
    const body = {
        email: form_mail,
        password: form_password,
    };

 
    try{
        const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
        }).then((getToken)=>getToken.json())
        .then((dataToken)=> {
            tokenAuth(dataToken.userId, dataToken.token)
            // document.location = "index.html"
            localStorage.setItem("token", dataToken.token)
            localStorage.setItem("userId", dataToken.userId)
        });
        // document.location = "index.html"
       
        
        
    } catch(error){
        console.log(error);
    };


};



async function handleSubmit(event){
    event.preventDefault();

    const form_mail = event.target[0].value
    const form_password = event.target[1].value

    if (!form_password || !form_mail) {
        error.innerHTML = "Veuillez entrer un mot de passe valide";
        return;
      }

    await postUser(form_mail, form_password)

    
};


function tokenAuth(userId, token){
    userId = this.userId;
    token = this.token
    
}







form.addEventListener("submit", handleSubmit);
