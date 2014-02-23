function DishDetailsView($target, model) {
  this.$el = $("<div>");
  this.template = tmpl('dishDetailsViewTmpl');
  $target.append(this.$el);
  // Show the new selected dish.
  this.updateDish = function(id) {
    this.$el.html(this.template(model.getDish(id)));
    this.update();
  }
  // This view is observing the model.
  model.addObserver(this);
  // Update view elements when model change.
  this.update = function(arg) {
    var totalPrice = 0;
    // Update price for each ingredient.
    this.$el.find("[data-price]").each(function(i, el) {
      var $el = $(el);
      var price = $el.data("price") * model.getNumberOfGuests()
      $el.html(price);
      totalPrice += price;
    });
    // Update quantity for each ingredient.
    this.$el.find("[data-quantity]").each(function(i, el) {
      var $el = $(el);
      $el.html($el.data("quantity") * model.getNumberOfGuests());
    });
    // Update total elements.
    this.$el.find(".dishDetailsTotalPrice").html(totalPrice);
    this.$el.find(".dishDetailsIngredientsPeople").html(model.getNumberOfGuests());
  }
}

