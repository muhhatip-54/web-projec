
/**************************************************************************************************************************/
/********************************************************şehir****************************************************************/
let currentSlide = 0;
const slides = document.querySelectorAll('.slides a');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.querySelector('img').classList.remove('active');
    slide.style.display = 'none';
    if (i === index) {
      slide.querySelector('img').classList.add('active');
      slide.style.display = 'block';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
/**************************************************************************************************************************/
/********************************************************ilgi alanlarim****************************************************************/
fetch("https://api.football-data.org/v4/competitions/PL/matches", {
  method: "GET",
  headers: {
    "X-Auth-Token": "423799a83dbc455d94a2de3c1294ba1a"
  }
})
  .then(res => res.json())
  .then(data => {
    const matchesList = document.getElementById("matches-list");
    data.matches.forEach(match => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");

      const homeTeam = match.homeTeam.name;
      const awayTeam = match.awayTeam.name;
      const matchDate = new Date(match.utcDate).toLocaleString();

      listItem.textContent = `${homeTeam} vs ${awayTeam} — ${matchDate}`;
      matchesList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));
/**************************************************************************************************************************/
/********************************************************iletisim****************************************************************/
function validateJS() {
  const f = document.getElementById('contactForm');
  const name = f.elements[0].value.trim();
  const email = f.elements[1].value.trim();
  const phone = f.elements[2].value.trim();
  const topic = f.elements[3].value;
  const gender = f.elements[4].checked || f.elements[5].checked;
  const message = f.elements[6].value.trim();
  const cookie = f.elements['cookie'].checked;

  const errs = [];
  if (!name || !email || !phone || !topic || !gender || !message) errs.push("Tüm alanlar doldurulmalı");
  if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) errs.push("E‑posta formatı hatalı");
  if (message.length < 20) errs.push("Mesaj en az 20 karakter");
  if (!cookie) errs.push("Çerez onayı gerekli");

  alert(errs.length ? errs.join("\n") : "✔ JS: Tüm kontroller geçti!");
}

const { createApp, reactive } = Vue;
createApp({
  setup() {
    const form = reactive({
      name: '',
      email: '',
      phone: '',
      topic: '',
      gender: '',
      message: '',
      cookie: false,
      file: null
    });

    const errors = reactive([]);

    function handleFileUpload(event) {
      form.file = event.target.files[0];
    }

    function validate() {
      errors.splice(0);
      if (!form.name || !form.email || !form.phone || !form.topic || !form.gender || !form.message)
        errors.push("Tüm alanlar doldurulmalı");

      if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email))
        errors.push("E‑posta formatı hatalı");

      if (form.message.length < 20)
        errors.push("Mesaj en az 20 karakter");

      if (!form.cookie)
        errors.push("Çerez onayı gerekli");

      return !errors.length;
    }

    function submitVue() {
      if (!validate()) return;

      
      const q = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        topic: form.topic,
        gender: form.gender,
        message: form.message,
        cookie: form.cookie
      }).toString();

      window.location.href = 'result.html?' + q;
    }

    return { form, errors, submitVue, handleFileUpload };
  }
}).mount('#app');

/**************************************************************************************************************************/

