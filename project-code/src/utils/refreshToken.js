
   
export const refreshTokenSetup = (res) => {
    // 1 hour timer to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  
    const refreshToken = async () => {
      const newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      console.log('newAuthRes:', newAuthRes);
      // saveUserToken(newAuthRes.access_token);  <-- save new token
      localStorage.setItem('authToken', newAuthRes.id_token);
  
      // sets up another timer after the first one
      setTimeout(refreshToken, refreshTiming);
    };
  
    // sets up the first refresh timer
    setTimeout(refreshToken, refreshTiming);
  };