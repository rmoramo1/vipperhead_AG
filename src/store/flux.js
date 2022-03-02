const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			post: [],
			post56: [
				{
					"title": {
						"rendered": "Bookie Software for Football Fans"
					},
					"yoast_head_json": {
						"og_description": "The best bookie software allows you to profit from football betting all year round. In this article we will show you how to find the best!",
					},
					"link": "https://www.vipperhead.ag/blog/bookie-software-for-football-fans/",
					"featured_image_url": "https://www.vipperhead.ag/blog/wp-content/uploads/2022/02/post59.webp",
					"modified_gmt": "2022-02-25T13:42:55",
					"author_meta": {
						"display_name": "VIP Pay Per Head",
					},
					"categories": {
						"category_name": "VIP Pay Per Head",
					},
				}
			],
		},
		actions: {
			loadPersonas: async () => {
				const url = "https://www.vipperhead.ag/blog/wp-json/wp/v2/posts/?per_page=100";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ post: results });
			},
		}
	};
};

export default getState;
