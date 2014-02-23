function SidebarViewController(view, model ) {
  // Increase number of guests on click.
  view.plusButtonEl.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });
  // Decrease number of guests on click.
  view.minusButtonEl.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
  });
  //
  view.confirmButtonEl.click(function(){
    changeStage('dinnerOverview');
  });
  // When a dish list element remove button is clicked, remove it from the menu and update the view.
  view.$el.on('click', '.dishRemoveButton', function(e) {
    e.preventDefault();
    model.removeDishFromMenu($(this).data('id'));
    view.updateSelectedDishList();
  });
}

