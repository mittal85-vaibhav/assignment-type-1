import { SELECT_APT_TYPE } from '../constants';

// Clear errors
export const selectAptType = (selectedAptType) => {
  return {
    type: SELECT_APT_TYPE,
    selectedAptType: selectedAptType,
  };
};
