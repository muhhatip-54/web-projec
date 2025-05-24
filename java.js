
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
/********************************************************ilgi****************************************************************/
