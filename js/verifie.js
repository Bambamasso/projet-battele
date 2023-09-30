let nonUtilisateur =JSON.parse(localStorage.getItem("session"))
let profile =document.querySelector("span")
profile.innerHTML=nonUtilisateur.nom
