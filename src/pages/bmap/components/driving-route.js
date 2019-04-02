import {
    Map,
    DrivingRoute
} from 'react-bmap';
import simpleMapStyle from './simpleMapStyle';
export default (props) => {
    return (
        <Map
            style={{ height: '400px' }}
            mapStyle={simpleMapStyle}
            center={{ lng: 116.403981, lat: 39.915599 }}
            zoom='10'
            {...props}
        >
            <DrivingRoute start='天安门' end='百度大厦C座' autoViewport={true} />
        </Map>
    );
};