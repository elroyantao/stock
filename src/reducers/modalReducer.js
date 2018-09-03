import createReducer from '../lib/create-reducer'

const initialState = {
  open: false,
  children: []
}

export default createReducer(initialState, {
  OPEN_MODAL: (state, { children }) => ({
    ...state,
    children,
    open: true
  }),
  CLOSE_MODAL: (state) => ({
    ...state,
    children: [],
    open: false
  })
})