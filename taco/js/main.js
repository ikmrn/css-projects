const year = document.getElementById("year");
const ThisYear = new Date().getFullYear();
year.setAttribute("datetime", ThisYear);
year.textContent = ThisYear;
