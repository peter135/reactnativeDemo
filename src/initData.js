import { createStore, applyMiddleware, combineReducers,compose} from 'redux'
import * as ListDto from './common/list.dto'
import * as DetailDto from './common/detail.dto'
import thunk from 'redux-thunk'

const enhancers = []
const middleware = [
  thunk
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const reducer = combineReducers({
    listDto: ListDto.reducer,
    detailDto: DetailDto.reducer
})


export const initialState = {
  listDto:      ListDto.initialState,
  detailDto:      DetailDto.initialState
}

export const rootReducer = (state, action) => {
  return reducer(state, action)
}

export const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
