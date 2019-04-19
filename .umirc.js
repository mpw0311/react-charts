
import { resolve } from "path";

export default {
  treeShaking: true,
  publicPath: './',
  history: 'hash',
  hash: true,
  externals: {
    echarts: 'window.echarts'
  },
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: '../src/components/RouteLoading/index.js',
      },
      title: 'react-Echarts',
      dll: false,
      locale: {
        enable: false,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    "@": resolve(__dirname, "./src"),
    '@components': resolve(__dirname, "./src/components"),
    '@config': resolve(__dirname, "./src/utils/config"),
  },
}
// 测试：
// npm test
// 生成测试报告：
// npm test -- --coverage