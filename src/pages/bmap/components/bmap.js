import { Tabs } from 'antd';
import {
    Map,
    Marker,
    NavigationControl,
    InfoWindow,
    DrivingRoute,
    MarkerList,
    Circle,
    Polyline,
    Polygon,
    PointLabel
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
                <TabPane tab="Tab 5" key="5">
                    <Map
                        style={{ height: '600px' }}
                        mapStyle={simpleMapStyle}
                        center={{ lng: 116.403119, lat: 39.929543 }}
                        zoom='12'
                        enableScrollWheelZoom
                    >
                        <NavigationControl />
                        <Circle
                            center={{ lng: 116.403119, lat: 39.929543 }}
                            fillColor='blue'
                            strokeColor='white'
                            radius="3000"
                        />
                        <Polyline
                            strokeColor='green'
                            path={[
                                { lng: 116.403119, lat: 39.929543 },
                                { lng: 116.265139, lat: 39.978658 },
                                { lng: 116.217996, lat: 39.904309 }
                            ]}
                        />
                        <Polygon
                            fillColor='red'
                            strokeColor='yellow'
                            path={[
                                { lng: 116.442519, lat: 39.945597 },
                                { lng: 116.484488, lat: 39.905315 },
                                { lng: 116.443094, lat: 39.886494 },
                                { lng: 116.426709, lat: 39.900001 }
                            ]}
                        />
                    </Map>
                </TabPane>
                <TabPane tab="Tab 6" key="6">
                    <Map center={{
                        lng: 116.404556,
                        lat: 39.91582
                    }}
                        style={{
                            height: '500px'
                        }}
                        zoom='12'
                        mapStyle={simpleMapStyle}>
                        <PointLabel data={[
                            {
                                name: '阜成门',
                                index: 1,
                                color: 'red',
                                isShowNumber: true,
                                numberDirection: 'right',
                                point: {
                                    lng: 116.35629191343,
                                    lat: 39.923656708429
                                }
                            },
                            {
                                name: '东大桥',
                                index: 2,
                                color: 'red',
                                point: {
                                    lng: 116.45165158593,
                                    lat: 39.922979382266
                                }
                            },
                            {
                                name: '复兴门',
                                index: 3,
                                color: 'red',
                                point: {
                                    lng: 116.3566138544,
                                    lat: 39.907146730611
                                }
                            },
                            {
                                name: '国贸',
                                index: 4,
                                color: 'red',
                                point: {
                                    lng: 116.46007926258,
                                    lat: 39.908464623343
                                }
                            },
                            {
                                name: '青年路',
                                index: 5,
                                color: 'red',
                                point: {
                                    lng: 116.5174653022,
                                    lat: 39.923132911536
                                }
                            },
                            {
                                name: '宋家庄',
                                index: 6,
                                color: 'red',
                                point: {
                                    lng: 116.4283725021,
                                    lat: 39.84602609593
                                }
                            },
                            {
                                name: '西直门',
                                index: 7,
                                color: 'red',
                                point: {
                                    lng: 116.3555775438,
                                    lat: 39.940171435273
                                }
                            },
                            {
                                name: '苏州街',
                                index: 8,
                                color: 'red',
                                point: {
                                    lng: 116.30623351961,
                                    lat: 39.975748497825
                                }
                            },
                            {
                                name: '团结湖',
                                index: 9,
                                color: 'red',
                                point: {
                                    lng: 116.46174509945,
                                    lat: 39.933704360624
                                }
                            },
                            {
                                name: '人民大学',
                                index: 10,
                                color: 'rgb(51, 153, 255)',
                                point: {
                                    lng: 116.32148092791,
                                    lat: 39.967049268766
                                }
                            }
                        ]}
                            changePosition={(point, index) => {
                                console.log(point, index);
                            }}
                        />
                    </Map>
                </TabPane>
            </Tabs>
        </div>
    );
}