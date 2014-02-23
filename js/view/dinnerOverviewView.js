function DinnerOverviewView($target, model) {
  this.$el = $("<div>");
  $target.append(this.$el);
  this.template = tmpl('dinnerOverviewViewTmpl');
  this.update = function() {
    this.$el.html(this.template({dishes:model.getFullMenu()}));
    // Update price for each ingredient.
    this.$el.find(".dishListViewElementPrice").each(function(i, el) {
      var $el = $(el);
      var price = model.getDishPrice($el.data('id'));
      $el.html(price);
    });
    // Update total elements.
    this.$el.find(".dinnerTotalPriceSpan").html(model.getTotalMenuPrice());
    this.$el.find(".overviewNumberOfGuests").html(model.getNumberOfGuests());
  }
}

