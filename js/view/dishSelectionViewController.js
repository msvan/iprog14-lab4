function DishSelectionViewController(view, model ) {
  var type
    , dishListView
    , dishListViews = {};
  // Handle dish type selection change.
  view.selectEl.change(function(e) {
    type = $(this).val();
    // Reset search input.
    view.searchEl.val('');
    // If the view is already cached, re-use it and return.
    if (dishListView = dishListViews[type]) {
      view.dishListViewEl.html(dishListView.$el);
      return;
    }
    // Create the new dish list view.
    dishListView = new DishListView(model, type);
    // Update the dish list with dishes from the model.
    dishListView.updateDishList(model.getAllDishes(type));
    // Put the elements html in the target.
    view.dishListViewEl.html(dishListView.$el);
    // Cache the view.
    dishListViews[type] = dishListView;
  });
  // When the search form is submitted, update the dish list with all dishes filtered.
  view.formEl.submit(function(e) {
    e.preventDefault();
    // Update the dishlist view with new data.
    dishListView.updateDishList(model.getAllDishes(type, view.searchEl.val()));
    // Reset search input.
    return false;
  });
  // When a dish list element link is clicked, change stage to details of that dish.
  view.$el.on('click', '.dishListViewElementLink', function(e) {
    e.preventDefault();
    changeStage('dishDetails', $(this).attr('href'));
  });
  // Fake trigger a select change - to create the initial dish list view.
  view.selectEl.trigger($.Event('change'));
}

