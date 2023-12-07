 // Get the current date
 const currentDate = new Date();
 const currentDay = currentDate.getDate();

 // Get the calendar container
 const calendarContainer = document.getElementById('calendar');

 // Dynamically generate the calendar with dynamic classes
 for (let i = 1; i <= 24; i++) {
   const dayContainer = document.createElement('div');
   dayContainer.classList.add('day');
   
   // Check if the day is past or future
   if (i < currentDay) {
     dayContainer.classList.add('inactive');
     dayContainer.addEventListener('click', () => openDoor(i));
   } else if (i === currentDay) {
     dayContainer.classList.add('active');
     dayContainer.addEventListener('click', () => openDoor(i));
   } else {
     dayContainer.classList.add('inactive');
     dayContainer.addEventListener('click', () => showLockedMessage());
   }
     const customMessages = [
   "Vuoden kylmin ja pimein kuukausi alkaa",
   "Ensilumi on lähellä", "Oletko miettinyt jo joululahjoja?", "Tontut vaanivat sinua..." , "Joulupukki tulee isojen kassien ja kovien pakettien kanssa", "Hösh.. tontut seuraavat liikkeitäsi",
    "Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Mielentila pettää","Nyt jännittää", "Jouluaatto"]

   dayContainer.innerHTML = `
     <h2>${i}</h2>
     <p> ${customMessages[i - 1]} </p>
   `;

   // Append the day container to the calendar
   calendarContainer.appendChild(dayContainer);
 }

 // Function to simulate opening the door for past days
// function openDoor(day) {  alert(`${day}`); }
 function openDoor(day) {
    modal.style.display = "block";
 }

 // Function to show a locked message for future days
 function showLockedMessage() {
   alert("Eikö ole kärsivällisyyttä?");
 }

 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 

 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
 