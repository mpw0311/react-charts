import {
    Map,
    MarkerList
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
            <MarkerList
                data={[
                    {
                        text: "长沙大道",
                        location: "113.22183,28.191712"
                    },
                    {
                        text: "机场高速",
                        location: "113.057565,28.175208"
                    }
                ]}
                fillStyle="#ff3333"
                animation={true}
                isShowShadow={false}
                multiple={true}
                autoViewport={true}
            />
        </Map>
    );
};