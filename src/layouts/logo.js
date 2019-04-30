import { Layout } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import logo from '../assets/logo.png';
const Header = Layout.Header;

export default ({ collapsed }) => {
    return (<Header className={styles.header}>
        <span className={styles.logo}>
            <img src={logo} alt="可视化" />
        </span>
        <h2
            className={classNames(styles.title, {
                [styles.logoHide]: collapsed
            })}
        >数据可视化</h2>
    </Header>);
};