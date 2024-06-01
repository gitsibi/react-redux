/* eslint-disable react-refresh/only-export-components */
const startingValue = {
    count:0
}
const Reducer = (state=startingValue,action) => {
    switch (action.type) {
        case "INCREMENT":
          return {
            ...state,
            count: state.count + 1,};
        case "DECREMENT":
          return {
            ...state,
            count: state.count > 0 ? state.count - 1 : 0,};
        default:
          return state;
      }
}

export { startingValue, Reducer };