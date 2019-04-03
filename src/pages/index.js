import styles from './index.css';
// import { formatMessage } from 'umi-plugin-locale';
import ChartView from '@components/ChartView';

export default function () {

  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li>
          {/* <a href="https://umijs.org/guide/getting-started.html"> */}
          {/* {formatMessage({ id: 'index.start' })} */}
          {/* </a> */}
          <a href="bmap">百度地图</a>
        </li>
      </ul>
      <ChartView />
    </div>
  );
}
