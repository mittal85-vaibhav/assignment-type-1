import { SELECT_APT_TYPE, SELECT_SLIDER } from '../constants';

// Select apartment type from carousel
export const selectAptType = (selectedAptType) => {
  return {
    type: SELECT_APT_TYPE,
    selectedAptType: selectedAptType,
  };
};

// Select apartment type from dropdown
export const selectSlider = (selectedSlider) => {
  return {
    type: SELECT_SLIDER,
    selectedSlider: selectedSlider,
  };
};
