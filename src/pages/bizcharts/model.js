
export default {
    namespace: 'bizcharts',
    state: {
        description: 'Bizcharts是基于 G2 封装的 React 图表库，具有 G2、React 的全部优点，可以让用户以组件的形式组合出无数种图表'
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
