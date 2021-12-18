import { GeoState, GeoAction } from '../../types'

const initialState: GeoState = {
  ip: '',
  location: {
    country: '',
    region: '',
    city: '',
    lat: 0,
    lng: 0,
    postalCode: '',
    timezone: '',
    geonameId: 0,
  },
  as: {
    asn: 0,
    name: '',
    route: '',
    domain: '',
    type: '',
  },
  isp: '',
  proxy: {
    proxy: false,
    vpn: false,
    tor: false,
  },
}

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
