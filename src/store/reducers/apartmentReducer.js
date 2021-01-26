import { SELECT_APT_TYPE } from '../constants';

const initialState = {
  selectedAptType: {},
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_APT_TYPE:
      return { ...state, ...action.selectedAptType };
    default:
      return state;
  }
}
