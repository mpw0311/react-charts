import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

const data = [
    {
        month: "Jan",
        Tokyo: 7.0,
        London: 3.9
    },
    {
        month: "Feb",
        Tokyo: 6.9,
        London: 4.2
    },
    {
        month: "Mar",
        Tokyo: 9.5,
        London: 5.7
    },
    {
        month: "Apr",
        Tokyo: 14.5,
        London: 8.5
    },
    {
        month: "May",
        Tokyo: 18.4,
        London: 11.9
    },
    {
        month: "Jun",
        Tokyo: 21.5,
        London: 15.2
    },
    {
        month: "Jul",
        Tokyo: 25.2,
        London: 17.0
    },
    {
        month: "Aug",
        Tokyo: 26.5,
        London: 16.6
    },
    {
        month: "Sep",
        Tokyo: 23.3,
        London: 14.2
    },
    {
        month: "Oct",
        Tokyo: 18.3,
        London: 10.3
    },
    {
        month: "Nov",
        Tokyo: 13.9,
        London: 6.6
    },
    {
        month: "Dec",
        Tokyo: 9.6,
        London: 4.8
    }
];

@connect(({ bizcharts }) => bizcharts)
class ChartView extends PureComponent {
    render() {
        const { description } = this.props;
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: 'fold',
            fields: ['Tokyo', 'London'],
            //展开字段集
            key: 'city',
            //key字段
            value: "temperature",//value字段
        });
        console.log(dv);
        const cols = {
            month: {
                range: [0, 1]
            }
        };
        return (
            <PageHeader
                title={'折线图'}
                pathtitles={['Bizchart', '折线图']}
                description={description}
            >
                <Chart height={400} data={dv} scale={cols} forceFit>
                    <Legend />
                    <Axis name='month' />
                    <Axis name='temperature' label={{ formatter: val => `${val}°C` }} />
                    <Tooltip crosshairs={{ type: 'y' }} />
                    <Geom type='line' position='month*temperature' color={'city'} size={2} shape={"smooth"} />
                    <Geom type='point' position="month*temperature" size={4} shape={'circle'} color={'city'} style={{ stroke: '#fff', lineWidth: 1 }} />
                </Chart>
            </PageHeader>
        );
    }
}
export default ChartView;