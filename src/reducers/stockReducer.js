import createReducer from '../lib/create-reducer'

import initialStock from '../stock.json'

const initialState = { ...initialStock }

export default createReducer(initialState, {
  SET_STOCK_PRICE: (state, { symbol, price }) => ({
    ...state,
    [symbol] : {
      ...state[symbol],
      price
    }
  })
})