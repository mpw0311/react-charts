import {
    Map,
    NavigationControl,
    MapTypeControl,
    ScaleControl,
    OverviewMapControl
} from 'react-bmap';
import simpleMapStyle from './simpleMapStyle';
export default (props) => {
    return (
        <Map
            style={{ height: '600px' }}
            mapStyle={simpleMapStyle}
            center={{ lng: 116.403981, lat: 39.915599 }}
            zoom='10'
            {...props}
        >
            <NavigationControl />
            <MapTypeControl />
            <ScaleControl />
            <OverviewMapControl />
        </Map>
    );
};