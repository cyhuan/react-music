import * as actionTypes from './constants.js'
import { Map } from 'immutable'

const defalutState = Map({
  topBanners: [

  ]
})

function reducer(state = defalutState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners }
    default:
      return state;
  }
}

export default reducer
