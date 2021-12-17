import axios from 'axios'
import { setNotification } from './notificationActions'
import { apiKey } from '../../config'

const baseUrl: string = `https://geo.ipify.org/api/v1/?apiKey=${apiKey}`

const setGeo = (ip: string | null) => {
  return async (dispatch: any) => {
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
