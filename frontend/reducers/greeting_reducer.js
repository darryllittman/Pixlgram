import { merge } from 'loadsh';
import { GreetingConstants } from '../actions/greeting_actions';

const _defaultGreeting = Object.freeze({
  currentUser: {}
});

const GreetingReducer = function (state = _defaultGreeting, action) {

  switch(action.type) {

    default:
      return state;

  }
};
