import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import {
    Chart, Geom, Axis, Tooltip
} from 'bizcharts';
const data = [
    {
        year: "1991",
        value: 3
    },
    {
        year: "1992",
        value: 4
    },
    {
        year: "1993",
        value: 3.5
    },
    {
        year: "1994",
        value: 5
    },
    {
        year: "1995",
        value: 4.9
    },
    {
        year: "1996",
        value: 6
    },
    {
        year: "1997",
        value: 7
    },
    {
        year: "1998",
        value: 9
    },
    {
        year: "1999",
        value: 13
    }
];
@connect(({ bizcharts }) => bizcharts)
class ChartView extends PureComponent {
    render() {
        const { description } = this.props;
        const cols = {
            value: {
                min: 0
            },
            year: {
                range: [0, 1]
            }
        };
        return (
            <PageHeader
                title={'折线图'}
                pathtitles={['Bizchart', '折线图']}
                description={description}
            >
                <Chart height={400} data={data} scale={cols} forceFit>
                    <Axis name='year' />
                    <Axis name='value' />
                    <Tooltip crosshairs={{ type: 'y' }} />
                    <Geom type='line' position='year*value' size={2} />
                    <Geom type='point' position="year*value" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1 }} />
                </Chart>
            </PageHeader>
        );
    }
}
export default ChartView;