function DinnerOverviewViewController(view, model) {
  view.$el.on('click', '.goBackButton', function(e) {
    e.preventDefault();
    changeStage('dishSelection');
  });
  view.$el.on('click', '.fullButton', function(e) {
    e.preventDefault();
    view.$el.find('.dinnerOverview').hide();
    view.$el.find('.dinnerOverviewFull').show();
  });
}
