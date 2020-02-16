import * as actions from './constants'
import axios from 'axios'

export function clockIn() {
  return dispatch => {
    axios.post("/api/work_logs/clock_in").then(response => {
      dispatch({ type: actions.CLOCKED_IN_WORK_LOG_ACTION, workLog: response.data.workLog })
    }).catch(error => {
      alert("Clock in error! " + error.message)
    })
  }
}

export function clockOut() {
  return dispatch => {
    axios.post("/api/work_logs/clock_out").then(response => {
      dispatch({ type: actions.CLOCKED_OUT_WORK_LOG_ACTION, workLog: response.data.workLog })
    }).catch(error => {
      alert("Clock out error! " + error.message)
    })
  }
}
