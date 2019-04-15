import * as actions from "../actions";

const initialState = {
  loading: false,
  name: "",
  data: {}
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const droneInfo = (state, action) => {
  const { data } = action;

  return {
    ...state,
    loading: false,
    data: data
  }
}

const handlers = {
  [actions.FETCH_DRONE_LOCATION]: startLoading,
  [actions.RECEIVE_DRONE_LOCATION]: droneInfo
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
