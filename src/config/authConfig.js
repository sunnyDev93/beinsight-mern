export const msalConfig = {
    auth: {
      clientId: "055a35c7-f9d9-42d2-9120-10f2d1852977",
      authority: "https://login.microsoftonline.com/7dbc552d-50d7-4396-aeb9-04d0d393261b",
      redirectUri: "http://localhost:5173/", 
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set to true if you are having issues on IE11 or Edge
      },
  };
  export const loginRequest = {
    scopes: ["User.Read"],
  };
  