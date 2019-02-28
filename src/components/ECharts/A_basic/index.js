/**
 * author：mpw
 * E-mail: mpw0311@163.com
 */
import { PureComponent } from 'react';
import Chart from '../core';
import { _isData } from '../methods';
import PropTypes from 'prop-types';
import getTooltip from './tooltip';
import getLegend from './legend';
import getDataset from './dataset';
import getXAxis from './xAxis';
import getYAxis from './yAxis';
import getSeries from './series';
class BasicChart extends PureComponent {
    static defaultProps = {
        data: {},
        type: 'line',
        loading: false,
        showTooltip: true,
        axisPointer: 'shadow',
        showLegend: true,
        YUnit: undefined,
        showY2: false,
        Y2Index: [1],
    }
    render() {
        const { data } = this.props;
        if (!_isData(data)) {
            return (<div>无数据</div>);
        }
        const option = {
            tooltip: getTooltip(this.props),
            legend: getLegend(this.props),
            dataset: getDataset(this.props),
            xAxis: getXAxis(this.props),
            yAxis: getYAxis(this.props),
            series: getSeries(this.props)
        }
        debugger
        return (
            <Chart
                option={option}
            />
        );
    }
}
export default BasicChart;

BasicChart.propTypes = {
    //支持的图形类型
    type: PropTypes.oneOf(['line', 'area', 'bar']),
    //数据格式校验
    data: PropTypes.shape({
        columns: PropTypes.array,
        rows: PropTypes.array,
    }),
    //是否显示正在加载中
    loading: PropTypes.bool,
    //图形标题
    title: PropTypes.string,
    //可以传入tooltip配置，校验
    tooltip: PropTypes.object,
    //是否显示tootip
    showTooltip: PropTypes.bool,
    //axisPointer类型
    axisPointer: PropTypes.oneOf(['shadow', 'cross', undefined]),
    //图形图例配置项
    legend: PropTypes.object,
    //是否显示图例
    showLegend: PropTypes.bool,
    //x轴配置
    xAxis: PropTypes.object,
    //y轴配置
    yAxis: PropTypes.object,
    //图形系列(series)配置项
    series: PropTypes.object,
    //指定 dataset 的列（column）还是行（row）映射为图形系列（series）
    seriesLayoutBy: PropTypes.oneOf(['column', 'row']),
    //y轴单位
    YUnit: PropTypes.string,
    //是否显示y2轴
    showY2: PropTypes.bool,
    //y2轴类型，默认与y1轴相同
    Y2Type: PropTypes.string,
    //y2轴单位
    Y2Unit: PropTypes.string,
    //y2轴映射数据索引
    Y2Index: PropTypes.array,
};