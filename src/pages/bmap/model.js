
export default {
    namespace: 'echarts',
    state: {
        description: '本Demo仅作为参考，只展示部分百度地图，仍有许多需要完善和修改的地方，后期有时间会慢慢完善更新！'
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
