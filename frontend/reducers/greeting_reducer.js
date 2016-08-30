import { merge } from 'loadsh';

const _defaultGreeting = Object.freeze({
  currentUser: {}
});

const GreetingReducer = function (state = _defaultGreeting, action) {

  switch(action.type) {

    default:
      return state;

  }
};
