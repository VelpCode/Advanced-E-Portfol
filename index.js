function contact() {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const succes = document.querySelector(".modal__overlay--succes");
  loading.classList.remove("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_1y1cu",
      "template_8vorh",
      event.target,
      ""
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      succes.classList += " modal__overlay--visible";
    })
    .catch(() => {
      alert(
        "The email service is temporarly unavailable. Please contact me directly at velpmail@gmail.com"
      );
    });
}




  function toggleModal() {
    document.body.classList.toggle("modal--open");
  }

function darkTheme() {
  document.body.classList.toggle("darkTheme");
}

const scaleFactor = 1 / 20;
const scaleFactor2 = 1 / 5;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const xRot = event.clientX * scaleFactor2;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 - 1 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${xRot * boolInt}deg)`;
  }


  
}

function alertNotification() {
  alert("Feature still being built.. 😅")
}
