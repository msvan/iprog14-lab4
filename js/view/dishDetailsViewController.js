function DishDetailsViewController(view, model) {
  // Go back to the previous stage when the back button is pressed.
  view.$el.on('click', '.dishDetailsBackButton', function(e) {
    changeStage('dishSelection');
  });
  // Add this dish to the selected dish list when the confirm button is pressed.
  view.$el.on('click', '.dishDetailsConfirmDishButton', function(e) {
    model.addDishToMenu($(this).data('id'));
    changeStage('dishSelection');
  });
}

