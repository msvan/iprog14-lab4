function DishListView(model, type) {
  this.$el = $('<div>');
  // Precompile template.
  this.template = tmpl('dishListViewTmpl');
  // Insert all the separate dish list views.
  this.updateDishList = function(dishes) {
    this.$el.html(this.template({dishes:dishes}));
  }
}

