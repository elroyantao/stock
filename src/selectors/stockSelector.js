import { createSelector } from 'reselect'

const tradesPerStockSelector = (state, props) => state.trade.trades.filter((trade) => trade.symbol === props.symbol)
export const latestPriceSelector = createSelector(
  tradesPerStockSelector,
  (trades) => trades.length ? trades[trades.length - 1].price : undefined
)

export const geometricMeanSelector = createSelector(
  tradesPerStockSelector,
  (trades) => {
    if (!trades.length) return ''
    const multiple = trades.reduce((result, trade) => {
      return result * trade.price
    }, 1)
    const geometricMean = Math.pow(multiple, 1/trades.length)
    return geometricMean.toFixed(2)
  }
)

export const weightedPriceSelector = createSelector(
  tradesPerStockSelector,
  (trades) => {
    if (!trades.length) return ''
    const summation = trades.reduce((sumObj, trade) => ({
      total: sumObj.total + trade.price * trade.quantity,
      quantity: sumObj.quantity + trade.quantity
    }), {
      total: 0,
      quantity: 0
    })
    const weightedPrice =  summation.quantity && summation.total / summation.quantity
    return weightedPrice.toFixed(2)
  }
)