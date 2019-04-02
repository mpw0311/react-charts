import {
    Map,
} from 'react-bmap';
import simpleMapStyle from './simpleMapStyle';
export default (props) => {
    return (
        <Map
            center={{ lng: 116.402544, lat: 39.928216 }}
            zoom="12"
            mapStyle={simpleMapStyle}
            {...props}
        />
    );
};