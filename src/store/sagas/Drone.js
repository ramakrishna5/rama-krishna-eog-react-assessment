import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";
import { toast } from "react-toastify";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

/*
  1. The weather service requires us to make a search by lat/lng to find its
  weather ID.
  2. We then use that weather ID to get the weather.

  This process is pretty well defined here with a saga.

  call invokes a method
  put dispatches an action
  takeEvery watches actions and executes a function

  Also -- the `*` in function is important; turns it into a "generator"

*/

function* findDrone(action) {
  toast.success('Positioning of drone is started', {toastId: 1});

  while(true){
    const { error, data } = yield call(
      API.findDrone
    );

    yield call(delay, 5000);

    if (error) {
      yield put({ type: actions.API_ERROR, code: error.code });
      yield cancel();
      return;
    }

    yield put({ type: actions.RECEIVE_DRONE_LOCATION, data: data });
  }
}

function* findDroneLocation() {
  yield all([
    takeEvery(actions.FETCH_DRONE_LOCATION, findDrone)
  ]);
}

export default [findDroneLocation];
