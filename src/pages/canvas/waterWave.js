import { useState, useEffect } from 'react';
import { InputNumber } from 'antd';
import WaterWave from '@components/Charts/WaterWave';
import PageHeader from '@components/PageHeader';
export default () => {
    //声明新状态变量
    const [percent, setPercent] = useState(40);
    useEffect(() => {
        console.log(percent);
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