// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  const rootEl = $('#root');
  const timeBlocks = $('.time-block'); 
  const saveBtns = $('.saveBtn'); 
  let currentTime = dayjs().format('h:mm'); 
  let currentHour = dayjs().get('h'); 

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  saveBtns.on('click', function () { //put saveProject function here later
    console.log('save button clicked');
    console.log(currentTime);  
    console.log(currentHour);  
  })

  // function saveProject(event) {
  //   event.preventDefault(); 

  //   const projectObj { //create a larger array for all hours in the program so that updates are just updating the correct hour and not overriding each one
  //     block: event.target.parent(); 
  //     time: event.target.siblings('div').text; 
  //     project: event.target.siblings('textarea'); 
  //   }

  //   let timeArray = []; 
  //   timeArray.push(projectObj);
  //   let storageManager = localStorage.getItem('storageManager'); 
  //     if (!storageManager) {
  //       return;
  //     }
  //   timeArray = JSON.parse(storageManager); 
  //   for (let i=0; i < timeArray.length; i++) {

  //   }
  //   timeArray.push(storageManager); 
  //   localStorage.setItem('storageManager', JSON.stringify(timeArray)); 
  // }

  // Get is so when you click the save button it traverses the DOM to get the text value and hours saved
  // Can add data attributes
  // When click save it goes to the parent and then traverse down to id and text value, stringify to save to local storage
  // Use JSON.stringify 


  function setBlockColor() {
      timeBlocks.each(function(i) {
        let blockId = this.id; 
        console.log(+blockId, currentHour); 
        if (currentHour > +blockId) {
          this.classList.add('past'); 
        } else if (currentHour === +blockId) {
          this.classList.add('present');         
        } else {
          this.classList.add('future'); 
        }
      }); 
  };



  // function getTime() {
  //   let currentTime = dayjs().format('h:mm'); 
  //   console.log(currentTime); 
  // }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  // TODO: Add code to display the current date in the header of the page.
  var date = dayjs().format('dddd, MMMM D, YYYY  h:mm a');
  $('#currentDay').text(date);
  setBlockColor(); 

});
