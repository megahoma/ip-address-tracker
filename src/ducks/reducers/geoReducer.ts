import { GeoState, GeoAction } from '../../types'

const initialState: GeoState = null

const geoReducer = (
  state: GeoState = initialState,
  action: GeoAction
): GeoState => {
  switch (action.type) {
    case 'SET-GEO':
      return action.payload
    default:
      return state
  }
}

export default geoReducer
