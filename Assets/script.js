// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  const timeBlocks = $('.time-block'); 
  const saveBtns = $('.saveBtn'); 
  let currentHour = dayjs().get('h'); 

  // FUNCTION TO DISPLAY CURRENT DATE/TIME AT TOP OF PAGE
  var date = dayjs().format('dddd, MMMM D, YYYY  h:mm a');
  $('#currentDay').text(date);



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
  
  setBlockColor(); 

  // ADDED EVENT LISTENER TO SAVE BUTTONS
  // Input will be added to the local storage

  saveBtns.on('click', function (event) { 
    event.preventDefault(); 

    let project = $(this).siblings('.description').val(); 
    let timeId = $(this).parent().attr('id'); 

    localStorage.setItem(timeId, project); 
  }); 

console.log(localStorage.getItem(7)); 

  // RENDERS PREVIOUS PROJECT INPUTS UPON REFRESHING PAGE

  $('#7').children(1).val(localStorage.getItem('7'));
  $('#8').children(1).val(localStorage.getItem('8'));
  $('#9').children(1).val(localStorage.getItem('9'));
  $('#10').children(1).val(localStorage.getItem('10'));
  $('#11').children(1).val(localStorage.getItem('11'));
  $('#12').children(1).val(localStorage.getItem('12'));
  $('#13').children(1).val(localStorage.getItem('13'));
  $('#14').children(1).val(localStorage.getItem('14'));
  $('#15').children(1).val(localStorage.getItem('15'));
  $('#16').children(1).val(localStorage.getItem('16'));
  $('#17').children(1).val(localStorage.getItem('17'));
  $('#18').children(1).val(localStorage.getItem('18'));
  $('#19').children(1).val(localStorage.getItem('19'));
  $('#20').children(1).val(localStorage.getItem('20'));



});
