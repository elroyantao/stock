import createReducer from '../lib/create-reducer'

const initialState = {
  trades: []
}

export default createReducer(initialState, {
  ADD_TRADE: (state, { trade }) => ({
    ...state,
    trades: [ ...state.trades, trade ]
  })
})