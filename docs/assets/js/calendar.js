


document.addEventListener('DOMContentLoaded', getCalendarEvents("studenta"));

function getCalendarEvents(username)
{
  let base_url = "https://css566api.azurewebsites.net/api/calendar";
  let rest_url = `${base_url}?userName=${username}`;
  fetch(rest_url, {mode: "cors"})
  .then(function(response)
  {
    if(response.ok)
    {
      return response.json();
    }
  }).catch(err => console.error(`Error occurred: ${err}`))
  .then(function (calendarJSON)
  {
    makeCalendar(calendarJSON);
  })
  .catch(err => console.error(`Error occurred: ${err}`)); // end fetch

} // end getCalendarEvents

function makeCalendar(calendarEvents)
{
   var calendarEl = document.getElementById('calendar');
   var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid' ],
    header: {
      left: 'prevYear,prev,next,nextYear today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    defaultDate: new Date(),
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: calendarEvents
    });

  calendar.render();
}  // end makeCalendar
  
