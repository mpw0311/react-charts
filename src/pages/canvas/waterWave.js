import { useState, useEffect, useContext } from 'react';
import { InputNumber } from 'antd';
import WaterWave from '@components/Charts/WaterWave';
import PageHeader from '@components/PageHeader';
import stateContext from '../../layouts/context';

export default () => {
    //声明新状态变量
    const [percent, setPercent] = useState(40);
    const { theme } = useContext(stateContext);
    useEffect(() => {
        console.log(theme, percent);
    }, [percent]);//只有percent值发生变化的时候执行
    return (
        <PageHeader
            title={'waterWave'}
            pathtitles={['canvas', 'waterWave']}
        >
            <WaterWave title={'water-wave'} percent={percent} height={200} />
            <div style={{ marginLeft: 50, paddingTop: 20 }}>
                值：<InputNumber max={100} min={0} defaultValue={40} onChange={() => setPercent(percent + 1)} />
            </div>
        </PageHeader>
    );
};