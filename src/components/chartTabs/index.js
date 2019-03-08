import { Line, Bar, Area, YBar, Funnel, Pie, Sankey } from '../Echarts';
import ChartTabs from './tabPane';
import data from './data01.json';
import funneldata from './data02.json';
import Sankeydata from './data03.json';
export default function () {
    return (
        <ChartTabs>
            <Bar config={{ name: '柱状图' }} data={data} showLabel />
            <Area config={{ name: '面积图' }} data={data} />
            <Line config={{ name: '折线图' }} data={data} showToolbox showToolboxMagicType showY2 showY2SplitLine />
            <Bar config={{ name: '堆叠柱图' }} data={data} stack />
            <YBar config={{ name: '条形图' }} data={data} />
            <Funnel config={{ name: '漏斗图' }} data={funneldata} height={400} />
            <Pie config={{ name: '饼图' }} data={funneldata} height={400} />
            <Sankey config={{ name: '桑基图' }} data={Sankeydata} height={400} />
        </ChartTabs>
    );
}
