import experiencesApi from '../services/experiences-Api';
import { EXPERIENCE_LOAD, EXPERIENCE_ADD, LOAD_USER_EXP } from './reducers';

export function loadExp(id) {
  return (dispatch, getState) => {
    dispatch({
      type: EXPERIENCE_LOAD,
      payload: experiencesApi.get(id)
    });
  };
}

export function addExperience(exp) {
  return (dispatch, getState) => {
    dispatch({
      type: EXPERIENCE_ADD,
      payload: experiencesApi.post(exp)
    });
  };
}

export function loadExpByUser(id) {
  return dispatch => {
    dispatch({
      type: LOAD_USER_EXP,
      payload: experiencesApi.getUserExp(id)
    });
  };
}