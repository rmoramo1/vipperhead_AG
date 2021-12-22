const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			post: [],
		},
		actions: {
			loadPersonas: async () => {
				const url = "https://www.vipperhead.ag/blog/wp-json/wp/v2/posts";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ post: results });
			},
		}
	};
};

export default getState;
