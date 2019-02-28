import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Line, Bar, Area } from '@components/Echarts';

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
        "2016": 185.8,
        "2017": 293.7
      },
      {
        "product": 'Milk Tea',
        "2015": 83.1,
        "2016": 173.4,
        "2017": 255.1
      },
      {
        "product": 'Cheese Cocoa',
        "2015": 86.4,
        "2016": 165.2,
        "2017": 282.5
      },
      {
        "product": 'Walnut Brownie',
        "2015": 72.4,
        "2016": 153.9,
        "2017": 239.1
      },
    ]
  };
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
      <Line data={d} showToolbox showY2 showY2SplitLine />
      <Area data={d} />
      <Bar data={d} />
    </div>
  );
}
