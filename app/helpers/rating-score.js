import Ember from 'ember';

export function ratingScore(params/*, hash*/) {
  console.log(params[0]);
  return params;
}

export default Ember.Helper.helper(ratingScore);
