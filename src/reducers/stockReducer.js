import createReducer from '../lib/create-reducer'

import initialStock from '../stock.json'

const initialState = { ...initialStock }


// maybe this is not needed. if needed this needs to be called on trade addition to change the stock price
export default createReducer(initialState, {
  SET_STOCK_PRICE: (state, { symbol, price }) => ({
    ...state,
    [symbol] : {
      ...state[symbol],
      price
    }
  })
})