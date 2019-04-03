import {
    Map,
    Boundary
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
            <Boundary data={[
                {
                    name: '海淀区',
                    count: 20
                },
                {
                    name: '朝阳区',
                    count: 10
                }
            ]} />
        </Map>
    );
};