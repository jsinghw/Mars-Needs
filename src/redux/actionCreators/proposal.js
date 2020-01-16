import { domain, jsonHeaders, handleJsonResponse } from "./constants"
import { POSTPROPOSAL } from "../actionTypes"

const url = domain + "/proposals"

export const postProposal= values => dispatch => {
  dispatch({
    type: POSTPROPOSAL.START
  })
  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(values)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTPROPOSAL.SUCCESS,
        payload: result
      })
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: POSTPROPOSAL.FAIL,
          payload: err
        })
      )
    })
}
// export const postProposal = values => dispatch => {
//   return dispatch(_createUser(values)).then(() =>
//     dispatch(
//       // login({
//       //   username: values.username,
//       //   password: values.password
//       // })
//     )
//   )
// }
