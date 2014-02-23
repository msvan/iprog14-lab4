function DishSelectionView($target, model) {
  this.$el = $(tmpl('dishSelectionViewTmpl', true));
  $target.append(this.$el);
  // Store elements we will use.
  this.dishListViewEl = this.$el.find('#dishListView')
  this.formEl = this.$el.find('#dishListSearchForm')
  this.searchEl = this.$el.find('#dishListSearchFormInput')
  this.selectEl = this.$el.find('#dishListTypeSelect');
}

