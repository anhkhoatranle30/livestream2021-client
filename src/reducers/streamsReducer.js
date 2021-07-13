import {
  CREATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
} from "../actions/types";
import _ from "lodash";

const streamsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_STREAM:
    case FETCH_STREAM:
    case EDIT_STREAM: {
      return { ...state, [payload.id]: payload };
    }

    case DELETE_STREAM:
      return _.omit(state, payload);
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, "id") };
    default:
      return state;
  }
};

export default streamsReducer;
