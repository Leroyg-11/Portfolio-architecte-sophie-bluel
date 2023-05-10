




// ajout d'eventLisnter sur le btn submit ("se connecter") + lance la fonction handleSub 
form.addEventListener("submit", handleSubmit);


const form = document.querySelector(".container_log");
const error = document.querySelector(".form-error");
const account = document.querySelector("account")

console.log(form)


async function postUser(form_email, form_password) {
  
  const body = {
    "email": form_email,
    "password": form_password,
  };

  try {
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });
    console.log(response.status)
    document.location = 'index.html'
    account.classList.add(".connected")

        
    
  } catch (error) {
    console.log(error);
    error.innerHTML ="Veuillez entrer une adresse mail et un mot de passe valide"
  }

  // TOKEN 
}





function handleSubmit(event) {
  event.preventDefault();

  const form_email = event.target[0].value; // OU QUERYSELECTOR INPUT
  const form_password = event.target[1].value;

  if (!form_password || !form_email) {
    error.innerHTML = "Veuillez entrer un mot de passe valide";
    return;
  }

  postUser(form_email, form_password);

  // Retrieve inputs value from form event (srcElement, value)

  // Use thoses values to call the backend login api
}

form.addEventListener("submit", handleSubmit);

