
import { resolve } from "path";

export default {
  treeShaking: true,
  outputPath:'./example',
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
      dynamicImport: { webpackChunkName: true },
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
  },
}
