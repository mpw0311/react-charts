import { Map, Marker, NavigationControl, InfoWindow, DrivingRoute } from 'react-bmap';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import ChartView from '@components/ChartView';

export default function () {
  const simpleMapStyle = {
    styleJson: [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": {
          "lightness": 41,
          "saturation": -70
        }
      }
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

      <ChartView />
      <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="12" />
      <hr />
      <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
        <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
        <NavigationControl />
        <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="内容" title="标题" />
      </Map>
      <Map style={{ height: '200px' }} mapStyle={simpleMapStyle} center={{ lng: 116.403981, lat: 39.915599 }} zoom='10'>
        <DrivingRoute start='天安门' end='百度大厦C座' autoViewport={true} />
      </Map>
    </div>
  );
}
