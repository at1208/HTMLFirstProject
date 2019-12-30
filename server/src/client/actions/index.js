export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: "vivek test"
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: "vivek test"
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: "vivek test"
  });
};

export const MOST_IMP_CONVERSION = 'most_imp_conversion';
export const fetchMostSearch = () => async (dispatch, getState, api) => {
  const res = await api.get('/mostSearch');
  const ress = "hello";

  dispatch({
    type: MOST_IMP_CONVERSION,
    payload: "vivek test"
  });
};
