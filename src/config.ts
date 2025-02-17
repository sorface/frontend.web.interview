const getFromEnv = (varName: string) => {
  const value = process.env && process.env[varName];
  if (!value) {
    throw new Error(`process.env.${varName} are not defined`);
  }
  return value;
};

export const REACT_APP_GATEWAY_HTTP_URL = getFromEnv('REACT_APP_GATEWAY_HTTP_URL');
export const REACT_APP_GATEWAY_WS_URL = getFromEnv('REACT_APP_GATEWAY_WS_URL');

export const REACT_APP_LOGIN_URL = REACT_APP_GATEWAY_HTTP_URL.concat(getFromEnv('REACT_APP_LOGIN_PATH'));
export const REACT_APP_LOGOUT_URL = REACT_APP_GATEWAY_HTTP_URL.concat(getFromEnv('REACT_APP_LOGOUT_PATH'));
export const REACT_APP_PASSPORT_URL = REACT_APP_GATEWAY_HTTP_URL.concat(getFromEnv('REACT_APP_PASSPORT_PATH'));
export const REACT_APP_BACKEND_URL = REACT_APP_GATEWAY_HTTP_URL.concat(getFromEnv('REACT_APP_BACKEND_PATH'));
export const REACT_APP_ROOM_STREAM_WS_URL = REACT_APP_GATEWAY_WS_URL.concat(getFromEnv('REACT_APP_ROOM_STREAM_WS_PATH'));
export const REACT_APP_BUILD_HASH = getFromEnv('REACT_APP_BUILD_HASH');
