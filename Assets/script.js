// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  const rootEl = $('#root');
  const timeBlocks = $('.time-block'); 
  const saveBtns = $('.saveBtn'); 
  const timeIds = $('.time-block'.id); 
  const textDescrip = $('.description'); 
  let currentTime = dayjs().format('h:mm'); 
  let currentHour = dayjs().get('h'); 
  let storedProjectArr = []; 

  // FUNCTION TO DISPLAY CURRENT DATE/TIME AT TOP OF PAGE
  var date = dayjs().format('dddd, MMMM D, YYYY  h:mm a');
  $('#currentDay').text(date);
  setBlockColor(); 


  // FUNCTION SETS BLOCK COLOR FOR PAST, PRESENT, FUTURE

  function setBlockColor() {
    timeBlocks.each(function(i) {
      let blockId = this.id; 
      // If statement uses time block ID (in 24hr) to determine which color to use
      if (currentHour > +blockId) {
        this.classList.add('past'); 
      } else if (currentHour === +blockId) {
        this.classList.add('present');         
      } else {
        this.classList.add('future'); 
      }
    }); 
  };
  

  // ADDED EVENT LISTENER TO SAVE BUTTONS
  // Input will be added to the local storage

  saveBtns.on('click', function (event) { 
    event.preventDefault(); 

    let project = $(this).siblings('.description').val(); 
    let timeId = $(this).parent().attr('id'); 

    console.log(project, timeId);

    localStorage.setItem(project, timeId); 
  }); 

  $('#7 time-block').val(localStorage.getItem('7'));
  $('#8 time-block').val(localStorage.getItem('8'));
  $('#9 time-block').val(localStorage.getItem('9'));
  $('#10 time-block').val(localStorage.getItem('10'));
  $('#11 time-block').val(localStorage.getItem('11'));
  $('#12 time-block').val(localStorage.getItem('12'));
  $('#13 time-block').val(localStorage.getItem('13'));
  $('#14 time-block').val(localStorage.getItem('14'));
  $('#15 time-block').val(localStorage.getItem('15'));
  $('#16 time-block').val(localStorage.getItem('16'));
  $('#17 time-block').val(localStorage.getItem('17'));
  $('#18 time-block').val(localStorage.getItem('18'));
  $('#19 time-block').val(localStorage.getItem('19'));
  $('#120 time-block').val(localStorage.getItem('20'));


  // RENDERS PREVIOUS PROJECT INPUTS UPON REFRESHING PAGE

  function renderSavedProjects() {
    let renderSavedArr = localStorage.getItem("storedObjs"); 
    if (!renderSavedArr) {
      return;
    }
  timeArray = JSON.parse(storedProjectArr); 
  for (let i=0; i < timeArray.length; i++) {

  }
  timeArray.push(storedProjectArr); 
  localStorage.setItem("projectObj", JSON.stringify(storedProjectArr)); 
}  

   

  // Get is so when you click the save button it traverses the DOM to get the text value and hours saved
  // When click save it goes to the parent and then traverse down to id and text value, stringify to save to local storage






});
