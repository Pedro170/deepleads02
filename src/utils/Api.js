export const BASE_URL = "https://deepleads-api.azurewebsites.net/api/auth/";
 
export const BASE_URL_DEV = "http://localhost:8080/api/auth/";
 
export const BASE_MINERAR = 'https://deepleads-api.azurewebsites.net/api/mineracao/generate/leads/by-id?id=';
export const BASE_CHAT = 'https://deepleads-api.azurewebsites.net/api/';
// export const BASE_LEADS = 'https://deepleads-api.azurewebsites.net/api/';
export const BASE_LEADS = 'http://localhost:8080/api/mineracao/get/leads/by-id?id=';
 
 
export const BASE_MINERAR_DEV = 'http://localhost:8080/api/mineracao/generate/leads/by-id?id=';
export const BASE_CHAT_DEV = 'http://localhost:8080/api/openai/generate/ia/'
 
export const BASE_UPDATE_USUARIO = 'http://localhost:8080/api/usuario/atualizar/'

export const BASE_DISPARAR_CAMPANHA = 'http://localhost:8080/api/whatsapp/send/message'

export const TOKEN_POST = ( body ) => {
  return {
    url: BASE_URL_DEV + 'signin',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }
  }
}

export const TOKEN_VALIDATE_POST = ( token ) => {
  return {
    url: BASE_URL_DEV + 'signin',
    options: {
      method: "POST",
      Authorization: 'Bearer ' + token,
    }
  }
}

export const USER_GET = ( body ) => {
  return {
    url: BASE_URL_DEV + 'signin',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }
  }
}

export const USER_POST = ( body ) => {
  return {
    url: BASE_URL_DEV + 'signup',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }
  }
}