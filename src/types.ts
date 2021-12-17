export interface State {
  notification: NotificationState
  geo: GeoState
}

export type NotificationState = {
  message: string | null
  status: number | null
}
export type NotificationAction = {
  type: string
  payload: NotificationState
}
export type DispatchNotificationType = (
  args: NotificationAction
) => NotificationAction

export type GeoState = {
  ip: string
  location: {
    country: string
    region: string
    city: string
    lat: number
    lng: number
    postalCode: string
    timezone: string
    geonameId: number
  }
  as: {
    asn: number
    name: string
    route: string
    domain: string
    type: string
  }
  isp: string
  proxy: {
    proxy: boolean
    vpn: boolean
    tor: boolean
  }
} | null
export type GeoAction = {
  type: string
  payload: GeoState
}
export type DispatchGeoType = (args: GeoAction) => GeoAction
