
 const currentDate = new Date();
 const currentDay = currentDate.getDate();
 const calendarContainer = document.getElementById('calendar');

 // generate div elements cuz writing is for nerds
 for (let i = 1; i <= 24; i++) {
   const dayContainer = document.createElement('div');
   dayContainer.classList.add('day');
   
   // checking if the time matches up
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
   calendarContainer.appendChild(dayContainer);
 }

// function openDoor(day) {  alert(`${day}`); }
 function openDoor(day) {
    modal.style.display = "block";
 }

 // locked message for naughty children
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
 
