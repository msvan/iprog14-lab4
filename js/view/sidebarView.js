function SidebarView($target, model) {
  this.$el = $(tmpl('sidebarViewTmpl', true));
  $target.append(this.$el);
  // Store specific elements which will be updated.
  this.plusButtonEl = this.$el.find('#sidebarPlusButton');
  this.minusButtonEl = this.$el.find('#sidebarMinusButton');
  this.numberOfGuestsEl = this.$el.find('#sidebarNumberOfGuests');
  this.totalPriceEl = this.$el.find('#selectedDishesFinalPrice');
  this.selectedDishesEl = this.$el.find('#selectedDishes');
  this.confirmButtonEl = this.$el.find('.confirmDinnerButton');
  // This view is observing the model.
  model.addObserver(this);
  // Update view elements when model change.
  this.update = function(arg){
    this.numberOfGuestsEl.html(model.getNumberOfGuests());
    this.totalPriceEl.html(model.getTotalMenuPrice() + " SEK");
    // Update price for each dish.
    this.selectedDishesEl.find(".selectedDishElementPrice").each(function(i, el) {
      var $el = $(el);
      $el.html(model.getDishPrice($el.parent().data('id')) + " SEK");
    });
  }
  // Precompile template.
  this.template = tmpl('selectedDishesTmpl');
  // Insert all the separate dish list views.
  this.updateSelectedDishList = function(id) {
    var pending;
    // If we got an id, we have a pending model currently being viewed.
    if (id) {
      pending = model.getDish(id);
    }
    this.selectedDishesEl.html(this.template({dishes:model.getFullMenu(), pending:pending}));
    this.update();
  }
}

