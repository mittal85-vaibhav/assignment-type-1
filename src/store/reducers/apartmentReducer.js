import { SELECT_APT_TYPE, SELECT_SLIDER } from '../constants';

const initialState = {
  selectedAptType: {},
  selectedSlider: 0,
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_APT_TYPE:
      return { ...state, ...action.selectedAptType };
    case SELECT_SLIDER:
      return { ...state, ...action.selectedSlider };
    default:
      return state;
  }
}
