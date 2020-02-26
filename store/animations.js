export const state = () => ({
	hero: true,
	logo: true,
});

export const mutations = {
	disable(state, id) {
		state[id] = false;
	},
};

export const getters = {
	getStatus: state => id => {
		return state[id];
	},
};
