import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Line } from '@components/Echarts';

export default function () {
  const d = {
    columns: [
      {
        field: "product",
        name: "分类",
        type: "string"
      },
      {
        field: "2015",
        name: "2015",
        type: "number"
      },
      {
        field: "2016",
        name: "2016",
        type: "number"
      },
      {
        field: "2017",
        name: "2017",
        type: "number"
      }
    ],
    rows: [
      {
        "product": 'Matcha Latte',
        "2015": 43.3,
        "2016": 85.8,
        "2017": 93.7
      },
      {
        "product": 'Milk Tea',
        "2015": 83.1,
        "2016": 73.4,
        "2017": 55.1
      },
      {
        "product": 'Cheese Cocoa',
        "2015": 86.4,
        "2016": 65.2,
        "2017": 82.5
      },
      {
        "product": 'Walnut Brownie',
        "2015": 72.4,
        "2016": 53.9,
        "2017": 39.1
      },
    ]
  };
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
      <Line data={d} />
    </div>
  );
}
