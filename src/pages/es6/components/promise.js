import { PureComponent } from 'react';
export default class es6 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
    }
    componentDidMount() {
        /*eslint-disable-next-line */
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('我是成功');
            }, 3000);
        });
        p.then(res => {
            this.setState({
                data: res
            });
        });
    }
    render() {


        return (
            <div>
                {this.state.data}
            </div>
        );
    }
} 