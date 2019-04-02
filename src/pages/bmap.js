import { Tabs } from 'antd';
import {
    Map,
    Marker,
    NavigationControl,
    InfoWindow,
    DrivingRoute,
    MarkerList
} from 'react-bmap';
const TabPane = Tabs.TabPane;
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
        <div>
            <Tabs defaultActiveKey="1" tabPosition="left" >
                <TabPane tab="Tab 1" key="1">
                    <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="12" />
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
                        <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
                        <NavigationControl />
                        <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="内容" title="标题" />
                    </Map>
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    <Map style={{ height: '400px' }} mapStyle={simpleMapStyle} center={{ lng: 116.403981, lat: 39.915599 }} zoom='10'>
                        <DrivingRoute start='天安门' end='百度大厦C座' autoViewport={true} />
                    </Map>
                </TabPane>
                <TabPane tab="Tab 4" key="4">
                    <Map style={{ height: '600px' }} mapStyle={simpleMapStyle} center={{ lng: 116.403981, lat: 39.915599 }} zoom='10'>
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
                </TabPane>
            </Tabs>,
        </div>
    );
}