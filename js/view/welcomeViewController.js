function WelcomeViewController(view, model) {
  view.createButton.click(function(){
    changeStage('dishSelection');
  });
}

