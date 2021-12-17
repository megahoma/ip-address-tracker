import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { setNotification } from './notificationActions'
import { State } from '../../types'
import { apiKey } from '../../config'
import axios from 'axios'

const baseUrl: string = `https://geo.ipify.org/api/v1/?apiKey=${apiKey}`

const setGeo = (
  ip: string | null
): ThunkAction<void, State, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}${ip === null ? '' : ip}`)

      dispatch({
        type: 'SET-GEO',
        payload: res.data,
      })

      dispatch(setNotification('Completed', 200, 3))
    } catch (err: any) {
      dispatch(
        setNotification(err.response.data.message, err.response.status, 3)
      )
    }
  }
}

export { setGeo }
