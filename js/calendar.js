var openCalendar = document.querySelector(".calendar-button");
var calendar = document.querySelector(".calendar-window");
var opened = document.querySelector(".opened-calendar");
var closed = document.querySelector(".closed-calendar");
var checker = 0;
openCalendar.addEventListener("click", function(event){
if (checker == 0) {
  event.preventDefault();
  calendar.classList.add("calendar-window-show");
  calendar.classList.add("opened-calendar");
  checker = 1;
}
else {
  event.preventDefault();
  setTimeout(function() {
  calendar.classList.remove("calendar-window-show");}, 600);
  calendar.classList.add("closed-calendar");
  setTimeout(function() {
    calendar.classList.remove("closed-calendar");}, 600);
  checker = 0;
}
});
