// state = estado anterior
// action = informacões contendo o type e a informacão
export default function cart(state = [], action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      return [ ...state, action.product ];
    default:
      return state;
  }
}
