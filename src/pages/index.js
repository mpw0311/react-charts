import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Line, Bar, Area, YBar, Funnel, Pie, Sankey } from '@components/Echarts';
// import View from '@components/Echarts/view';

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
  const funneldata = {
    columns: [
      {
        field: "name",
        name: "分类",
        type: "string"
      },
      {
        field: "value",
        name: "2015",
        type: "number"
      },
    ],
    rows: [
      {
        "name": 'Matcha Latte',
        "value": 43.3,
      },
      {
        "name": 'Milk Tea',
        "value": 83.1,
      },
      {
        "name": 'Cheese Cocoa',
        "value": 86.4,
      },
      {
        "name": 'Walnut Brownie',
        "value": 72.4,
      },
    ]

  };
  const Sankeydata = {
    nodes: [{
      name: 'a'
    }, {
      name: 'b'
    }, {
      name: 'a1'
    }, {
      name: 'a2'
    }, {
      name: 'b1'
    }, {
      name: 'c'
    }],
    links: [{
      source: 'a',
      target: 'a1',
      value: 5
    }, {
      source: 'a',
      target: 'a2',
      value: 3
    }, {
      source: 'b',
      target: 'b1',
      value: 8
    }, {
      source: 'a',
      target: 'b1',
      value: 3
    }, {
      source: 'b1',
      target: 'a1',
      value: 1
    }, {
      source: 'b1',
      target: 'c',
      value: 2
    }]
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
      <Line data={d} showToolbox showToolboxMagicType showY2 showY2SplitLine />
      <Area data={d} />
      <Bar data={d} showLabel />
      <Bar data={d} stack />
      <YBar data={d} />
      <Funnel data={funneldata} height={400} />
      <Pie data={funneldata} height={400} />
      <Sankey data={Sankeydata} height={400} />
      {/* <View /> */}
    </div>
  );
}
