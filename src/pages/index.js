import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import ChartTabs from '@components/chartTabs';

export default function () {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>

      <ChartTabs />
    </div>
  );
}
