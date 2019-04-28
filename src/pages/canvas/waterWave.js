import { PureComponent } from 'react';
import { connect } from 'dva';
import { InputNumber } from 'antd';
import WaterWave from '@components/Charts/WaterWave';
import PageHeader from '@components/PageHeader';

@connect(({ canvas }) => canvas)
class Chart extends PureComponent {
    state = {
        percent: 40
    }
    handleChange = (percent) => {
        this.setState({ percent });
    }
    render() {
        const { description } = this.props;
        const { percent } = this.state;
        return (
            <PageHeader
                title={'waterWave'}
                pathtitles={['canvas', 'waterWave']}
                description={description}
            >
                <WaterWave title={'water-wave'} percent={percent} height={200} />
                {/* <div style={{ width: 200, height: 260, border: '1px solid red' }}>
                    <WaterWave title={'water-wave'} percent={percent} />
                </div> */}
                <div style={{ marginLeft: 50, paddingTop: 20 }}>
                    值：<InputNumber max={100} min={0} defaultValue={40} onChange={this.handleChange} />
                </div>
            </PageHeader>
        );
    }
}
export default Chart;