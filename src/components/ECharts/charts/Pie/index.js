/**
 * author：M
 * E-mail: mpw0311@163.com
 */
import { PureComponent } from 'react';
import Chart from '../../B_basic';
class Index extends PureComponent {
  static defaultProps = {
    data: {},
    type: 'pie',
    loading: false,
    showLegend: false,
    tooltip: {},
    seriesSettings: {
        radius : '55%',
        center: ['40%', '50%'],
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