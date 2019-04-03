import {
    Map,
    TrafficLayer
} from 'react-bmap';
import simpleMapStyle from './simpleMapStyle';
export default (props) => {
    return (
        <Map
            style={{ height: '600px' }}
            mapStyle={simpleMapStyle}
            center={{ lng: 116.403981, lat: 39.915599 }}
            zoom='10'
            enableScrollWheelZoom
            {...props}
        >
            <TrafficLayer />
        </Map>
    );
};