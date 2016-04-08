import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
  saveStudio(params){
    var newProduct = this.store.createRecord('product', params);
    var user = params.user;
    user.get('products').addObject(newProduct);
    newProduct.save().then(function(){
      return user.save();
    });

    this.transitionTo('admin');
  },
  saveUser(params){
    var newUser = this.store.createRecord('user', params);
    newUser.save();
    this.transitionTo('admin');
  }
}
});
