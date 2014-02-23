$(function() {
	// Instantiate the model.
	var model = new DinnerModel();
  // Pre-create all the needed views and controllers.
  var sideView = new SidebarView($('#sideView'), model)
    , sideViewController = new SidebarViewController(sideView, model);
  var welcomeView = new WelcomeView($('#mainView'), model)
    , welcomeViewController = new WelcomeViewController(welcomeView, model);
  var dishSelectionView = new DishSelectionView($('#mainView'), model)
    , dishSelectionViewController = new DishSelectionViewController(dishSelectionView, model);
  var dishDetailsView = new DishDetailsView($('#mainView'), model)
    , dishDetailsViewController = new DishDetailsViewController(dishDetailsView, model);
  var dinnerOverviewView = new DinnerOverviewView($('#mainView'), model)
    , dinnerOverviewViewController = new DinnerOverviewViewController(dinnerOverviewView, model);
  // Basic logic for showing/hiding views in this app.
  window.changeStage = function(stage, args) {
    switch (stage) {
      case 'welcomeScreen':
        // Hide unused views.
        sideView.$el.hide();
        dishDetailsView.$el.hide()
        dishSelectionView.$el.hide();
        dinnerOverviewView.$el.hide();
        // Show used view.
        welcomeView.$el.show();
        break;
      case 'dishSelection':
        // Hide unused views.
        welcomeView.$el.hide();
        dishDetailsView.$el.hide()
        dinnerOverviewView.$el.hide();
        // Show used view.
        dishSelectionView.$el.show();
        sideView.$el.show();
        sideView.updateSelectedDishList();
        break;
      case 'dishDetails':
        // Hide unused views.
        welcomeView.$el.hide();
        dishSelectionView.$el.hide()
        dinnerOverviewView.$el.hide();
        // Show used view.
        dishDetailsView.$el.show()
        dishDetailsView.updateDish(args);
        sideView.$el.show();
        sideView.updateSelectedDishList(args);
        break;
      case 'dinnerOverview':
        // Hide unused views.
        welcomeView.$el.hide();
        dishSelectionView.$el.hide();
        dishDetailsView.$el.hide()
        sideView.$el.hide();
        // Show used view.
        dinnerOverviewView.$el.show();
        dinnerOverviewView.update();
        break;
    }
  }
  changeStage('welcomeScreen');
});
