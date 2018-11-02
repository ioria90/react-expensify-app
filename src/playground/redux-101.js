import { createStore } from "redux";

// ACTION GENERATOR - function that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});
const setCount = ({ count } = {}) => ({
  type: "SET",
  count
});
const resetCount = () => ({
  type: "RESET"
});

//Redducer
// 1. Reducers sono funzioni pure -> output determinato solo dall'input
// 2. Non modificano mai lo state o l'action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer());

// Viene chiamato ogni volta che cambia lo state
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

//SUBSCRIBE SOLO FINO A QUI FUNZIONA
//unsubscribe();

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
