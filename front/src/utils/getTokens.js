export function getAccessToken(){
  const tokens = localStorage.getItem('tokens');

  if (!tokens) {
    /* Traitement dans le cas où aucun token n'existe dans le localStorage */
  }

  /* Le localStorage stocke les données sous forme de chaines de caractères nous transformons donc la donnée en JSON */
  const { accessToken } = JSON.parse(tokens);

  return accessToken
}

export function getRefreshToken(){
  const tokens = localStorage.getItem('tokens');

  if (!tokens) {
    /* Traitement dans le cas où aucun token n'existe dans le localStorage */
  }

  /* Le localStorage stocke les données sous forme de chaines de caractères nous transformons donc la donnée en JSON */
  const { refreshToken } = JSON.parse(tokens);

  return refreshToken
}

