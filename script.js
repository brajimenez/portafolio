function responciveMenu() {
  const a = document.getElementById("nav");
  if (a.className === "") {
    a.className = "responsive";
  } else {
    a.className = "";
  }
}
