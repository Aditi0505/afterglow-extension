export const weatherDetailsReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_WEATHER_DETAILS":
      return {
        ...state,
        icon: payload.data.weather[0].icon,
        currentTemp: payload.data.main.temp,
        city: payload.data.name,
      };

    default:
      return state;
  }
};
