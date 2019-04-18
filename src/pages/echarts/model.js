
import data1 from './services/data01.json';
import data2 from './services/data02.json';
import data3 from './services/data03.json';
export default {
    namespace: 'echarts',
    state: {
        bar_data: data1,
        line_data: data1,
        funnel_data: data2,
        sankey_data: data3,
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
