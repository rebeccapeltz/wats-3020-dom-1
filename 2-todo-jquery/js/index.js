$(document).ready(event => {
  //TODO wrap all code related to user submit  
  $("#todo-form").submit(event => {
    event.preventDefault()

    //need to find a single input but need it as a jquery object
    let itemInput = $($("input[name=item-input]")[0])
    let itemValue = itemInput.val()

    //check that user has input a value before proceeding
    if (itemValue.length !== 0) {

      //create new item
      let newItemEl = $("<li>")[0]
      let newCheckBox = $('<input type="checkbox" />')[0]
      let newLabel = $(`<label>`).html(itemValue)[0]
      newItemEl.append(newCheckBox, newLabel)

      //get a reference to list and append list item
      $('.todo-list')[0].appendChild(newItemEl);

      //clear user input
      itemInput.val('')

      //set up toggle on check box click
      $(':checkbox').change(function (event) {
        event.preventDefault()
        if ($(this).is(':checked')) {
          $(this).siblings("label").css("text-decoration", "line-through")
        } else {
          $(this).siblings("label").css("text-decoration", "none")
        }
      })
    }
  })
})