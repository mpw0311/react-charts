import { PureComponent } from 'react';
import { connect } from 'dva';
import Media from 'react-media';
import Layout from './layout';
import Context from './context';

class Index extends PureComponent {
  state = {
    theme: 'dark'
  }
  render() {

    return (
      <Context.Provider value={{ theme: this.state.theme }}>
        <Layout {...this.props} />
      </Context.Provider>
    );
  }
}
export default connect(({ global }) => ({
  collapsed: global.collapsed,
}))(props =>
  <Media query="(max-width: 899px)">
    {isMobile => <Index {...props} isMobile={isMobile} />}
  </Media>
);