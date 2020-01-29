// como o estado é imutavel, foi utilizado essa lib
import produce from 'immer';

// state = estado anterior
// action = informacões contendo o type e a informacão
export default function cart(state = [], action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          })
        }
      })
    default:
      return state;
  }
}
