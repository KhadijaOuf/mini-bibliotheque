const form = document.querySelector("#contact-form");
const success = document.querySelector("#form-success");
const fields = ["name", "email", "subject", "message"];

function showError(field, message) {
  document.querySelector(`#${field}-error`).textContent = message;
}
form.addEventListener("submit", event => {
  event.preventDefault();
  success.textContent = "";
  let valid = true;
  const values = Object.fromEntries(new FormData(form).entries());

  fields.forEach(field => showError(field, ""));
  if (!values.name.trim()) { showError("name", "Veuillez saisir votre nom."); valid = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) { showError("email", "Veuillez saisir une adresse e-mail valide."); valid = false; }
  if (!values.subject.trim()) { showError("subject", "Veuillez préciser le sujet."); valid = false; }
  if (values.message.trim().length < 10) { showError("message", "Le message doit contenir au moins 10 caractères."); valid = false; }

  if (valid) {
    success.textContent = "Merci ! Le formulaire a été validé (démo : aucun message n'est envoyé à un serveur).";
    form.reset();
  }
});
