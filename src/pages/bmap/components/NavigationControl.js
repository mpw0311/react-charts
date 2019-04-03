import {
    Map,
    Marker,
    NavigationControl,
    InfoWindow
} from 'react-bmap';
import simpleMapStyle from './simpleMapStyle';
export default (props) => {
    return (
        <Map
            center={{ lng: 116.402544, lat: 39.928216 }} zoom="11"
            style={{ height: '600px' }}
            mapStyle={simpleMapStyle}
            enableScrollWheelZoom
            {...props}
        >
            <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
            <NavigationControl />
            <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="内容" title="标题" />
        </Map>
    );
};