
export default {
    namespace: 'canvas',
    state: {
    },
    subscriptions: {

    },

    effects: {

    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
