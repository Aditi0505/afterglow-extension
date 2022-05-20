export const getGreetMessage = (currentTime) => {
  return currentTime.split(":")[0] >= "00" && currentTime.split(":")[0] <= "12"
    ? `Good Morning,`
    : currentTime.split(":")[0] >= "13" && currentTime.split(":")[0] <= "15"
    ? ` Good Afternoon,`
    : `Good Evening,`;
};
