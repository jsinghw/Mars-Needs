import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import {
  POSTPROPOSAL
} from "../actionTypes"

const url = domain + "/proposals"

const _PostProposal = messageBody => (dispatch) => {
  dispatch({
    type: POSTPROPOSAL.START
  })

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(messageBody)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTPROPOSAL.SUCCESS,
        payload: result
      })
    })
    .catch(err => {
      if (err.statusCode === 401) {
        return dispatch({
          type: POSTPROPOSAL.SUCCESS,
          payload: { statusCode: 200 }
        })
      }
      return Promise.reject(
        dispatch({ type: POSTPROPOSAL.FAIL, payload: err.message })
      )
    })

    export const PostProposal = messageBody => (dispatch) => {
      return dispatch(_PostProposal(messageBody))
    }
}