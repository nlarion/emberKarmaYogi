import Ember from 'ember';

export function ratingScore(params) {
  var totalRatings = 0;
  var test = params[0].get('ratings').forEach(function(prop){
    totalRatings++;
  });


  return "This studio has "+totalRatings+ " ratings from users";
}

export default Ember.Helper.helper(ratingScore);
