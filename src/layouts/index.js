import { PureComponent } from 'react';
import Layout from './layout';
import Context from './context';

export default class extends PureComponent {
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