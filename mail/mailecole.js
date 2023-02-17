function sendMail() {
  var params = {
    nom_eleve: document.getElementById("nom_eleve").value,
    prenom_eleve: document.getElementById("prenom_eleve").value,
    date_de_naissance: document.getElementById("date_de_naissance").value,
    sex: document.querySelector(".form-check-input-sex:checked").value,
    inscription: document.querySelector(".form-check-input-insc:checked").value,
    nom_premier_res: document.getElementById("nom_premier_res").value,
    email_premier_res: document.getElementById("email_premier_res").value,
    //email_dexieme: document.getElementById("email-dexieme").value,
    tel_premier_res: document.getElementById("tel_premier_res").value,
    adress_premier_res: document.getElementById("adress_premier_res").value,
    //code_postal_premier_res: document.getElementById("code_postal_premier_res").value,
    //message: document.getElementById("message").value,
  };

  const serviceID = "service_iswtc4p";
  const templateID = "template_wj10iie";

  emailjs.send(serviceID, templateID, params).then(
    function (response) {
      document.getElementById("contactForm").reset();
      alert("vos informations sont envoyées à l'administration");
    },
    function (error) {
      alert("s'il vous plait vérifier votre information");
      document.getElementById("contactForm").reset();
    }
  );
}
