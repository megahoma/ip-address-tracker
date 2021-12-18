import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { setNotification } from './notificationActions'
import { State } from '../../types'
import { apiKey } from '../../config'
import axios from 'axios'

const baseUrl: string = `https://geo.ipify.org/api/v1/?apiKey=${apiKey}`

const setGeo = (
  ip: string | null,
  flagDomaine: boolean
): ThunkAction<void, State, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${baseUrl}&${flagDomaine ? 'domain' : 'ipAddress'}=${
          ip === null ? '' : ip
        }`
      )

      dispatch({
        type: 'SET-GEO',
        payload: res.data,
      })
    } catch (err: any) {
      dispatch(
        setNotification(
          err.response.data.message || 'Ошибка',
          err.response.status || 400,
          3
        )
      )
    }
  }
}

export { setGeo }
