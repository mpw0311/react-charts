/**
 * author：M
 * E-mail: mpw0311@163.com
 */
import { PureComponent } from 'react';
import Chart from '../../B_basic';
class Index extends PureComponent {
  static defaultProps = {
    data: {},
    type: 'funnel',
    loading: false,
    tooltip: {},
    sort: 'descending',
    seriesSettings: {
      name: '漏斗图',
      left: '10%',
      top: 60,
      //x2: 80,
      bottom: 60,
      width: '80%',
      // height: {totalHeight} - y - y2,
      // min: 0,
      // max: 100,
      // minSize: '0%',
      // maxSize: '100%',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      // itemStyle: {
      // borderColor: '#fff',
      // borderWidth: 1/
      // },
      emphasis: {
        label: {
          show: true,
          fontSize: 20
        }
      },
    }
  }
  render() {

    return (
      <Chart
        {...this.props}
      />
    );
  }
}
export default Index;