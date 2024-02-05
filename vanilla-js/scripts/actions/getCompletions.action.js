import { fetchApi } from "../helper/fetchApi.helper.js";

const getCompletions = async ({ prompt }) => {
    const response = await fetchApi({prompt: prompt});
    return response?.choices[0]?.message?.content.replace("\n", ""); 
};

export { getCompletions };