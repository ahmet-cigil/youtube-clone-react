import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	url: BASE_URL,
	params: {
		maxResults: "50",
	},
	headers: {
		"X-RapidAPI-Key": "b34eb2bc11mshc91836324ed7789p143e08jsn8a272a8773b7",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
