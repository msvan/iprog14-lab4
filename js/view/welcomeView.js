function WelcomeView($target, model) {
  this.$el = $(tmpl('welcomeScreenTmpl', true));
  $target.append(this.$el);
  this.createButton = this.$el.find(".joinButton");
}

