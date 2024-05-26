import { OpenAI } from 'openai'

export const getOpenAI = async (apiKey?: string): Promise<OpenAI> => {
  const apiKeyFromEnv = process.env.OPENAI_API_KEY;
  const finalApiKey = apiKey || apiKeyFromEnv;

  if (!finalApiKey) {
    throw new Error('Missing API key, we can\'t call OpenAI');
  }

  const openai = new OpenAI({
    apiKey: finalApiKey,
    baseURL: "https://api.openai.com/v1",
    dangerouslyAllowBrowser: true,
  });

  return openai;
}



// import { OpenAI } from 'openai'

// // don't do this at home!
// // if we deploy one day to the cloud, we MUST rewrite this..
// export const persisted = {
//   apiKey: '',
//   model: '',
// }

// export const getOpenAI = async (apiKey?: string): Promise<OpenAI> => {
//   // don't do this at home!
//   // if we deploy one day to the cloud, we MUST rewrite this..
//   persisted.apiKey = apiKey || persisted.apiKey

//   if (!persisted.apiKey) { throw new Error(`missing API key, we can't call OpenAI`)}

//   const openai = new OpenAI({
//     apiKey: persisted.apiKey,
//     baseURL: "https://api.openai.com/v1",

//     // it's ~fine, chill out OpenAI we are running a Desktop app
//     dangerouslyAllowBrowser: true,
//   })

//   return openai
// }