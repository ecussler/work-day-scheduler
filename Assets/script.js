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

  // ADDED EVENT LISTENER TO SAVE BUTTONS
  // Input will be added to the local storage

  saveBtns.on('click', function (event) { 
    event.preventDefault(); 
    let target = $(event.target); 
    let parentId = target.parentNode.id; 
    let projectObj = { //create a larger array for all hours in the program so that updates are just updating the correct hour and not overriding each one?
      key: parentId, 
      text: target.siblings(".description").value
      // blockId: target.parent("id"),
      // time: target.siblings("div").text, 
      // project: target.siblings("textarea")
    };
  
    console.log(projectObj); 
  
    storedProjectArr.add(projectObj);
    localStorage.setItem('projectObj', JSON.stringify(projectObj)); 
    renderSavedProjects(); 
    });

   

  // Get is so when you click the save button it traverses the DOM to get the text value and hours saved
  // Can add data attributes
  // When click save it goes to the parent and then traverse down to id and text value, stringify to save to local storage






});
