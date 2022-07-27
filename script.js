$( document ).ready(function() {

var today = moment().format("LLLL");
console.log(today);
$("#currentDay").text(today);
//display current date and time.

var row = ""
//loop to dispaly 9am-18pm
  for (var i= 9 ; i<=18; i++){
    // Creation of the row elements
    row = $(`<div class="row">`)
    col1 = $(`<div class ="col-lg-2 hour">${displayAmorPm(i)}</div>`)
    col2 = $(`<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`)
    col3 = $(`<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
    row.append(col1)
    row.append(col2)
    row.append(col3)
    $(".container").append(row)
  }
  $("saveBtn").click(function(e){
    var id = $(this).data("id")
    var inputText = $(this).parent().siblings().find("saveBtn").val()
    localStorage.setItem(id,inputText)
    })

      //  Convert Am to Pm
      function displayAmorPm(hour){
        var b=""
        if(hour<=12){
          b= "AM"
        }else{
          b="PM"
        }
        hour = hour % 12
        hour = hour ? hour : 12
        return hour + " " + b
      }
     });

     //need to get it to save to local storage
     //change color when hovering over it
     
