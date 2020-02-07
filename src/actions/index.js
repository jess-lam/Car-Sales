export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = addFeatureName => {
    return {
      type: ADD_FEATURE,
      payload: { name: addFeatureName}
    };
  };