const redux = require('redux');
const legacy_createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers

//Action describes the changes in the state of the application
const BUY_CAKE = 'Buy Cake';
const BUY_ICECREAM = 'Buy Ice Cream';

//This function returns the type of action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'First purchase'
  }
}

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: 'First purchase'
  }
}



//state of the application
const cakeInitialState = {
  numberOfCakes: 10
}

const iceCreamInitialState = {
  numberOfCakes: 15
}

//Reducer carries the state transition of the application depending on the action sent to the store
//This function returns the next state of the application and returns a new object(does not mutate the object)
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,              //make a copy of the initial state
      numberOfCakes: state.numberOfCakes - 1  //new state
    }
    default: return state
  }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,              //make a copy of the initial state
      numberOfCakes: state.numberOfCakes - 1  //new state
    }
    default: return state
  }
}

//Redux store holds the state of the application. It holds one object for the entire application
//
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})  
const store = legacy_createStore(rootReducer)  //store the state of the application
console.log("Initial state", store.getState()) //allows access to the state
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState())) //registers listeners via subscribe
store.dispatch(buyCake()) //allows state to be updated
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


unsubscribe()