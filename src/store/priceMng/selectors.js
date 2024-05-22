export const selectTranscript = (state) =>
  state.persistedReducer.chatMedia.transcript;

// Select the user's authentication status (e.g., authenticated or not)
export const selectPrices = (state) => state.persistedReducer.priceMng.prices;
export const selectIsLoading = (state) =>
  state.persistedReducer.chatMedia.isLoading;

export const isChatLoading = (state) =>
  state.persistedReducer.chatMedia.isGetChat;

// Select the user's information (e.g., username, email)
export const selectUserInfo = (state) => state.auth.userInfo;
