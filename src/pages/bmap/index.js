import { PureComponent } from 'react';
import { Tabs } from 'antd';
import PageHeader from '@components/PageHeader';
import Bmap from './components/Map';
import MarkerMap from './components/Marker';
import DrivingRoute from './components/driving-route';
import MarkerList from './components/MarkerList';
import Road from './components/Road';
import Boundary from './components/Boundary';
import TrafficLayer from './components/TrafficLayer';
import Control from './components/Control';
import PointLabel from './components/PointLabel';
import NavigationControl from './components/NavigationControl';
import Polygon from './components/Polygon';
import ThickRay from './components/thick-ray';
import MapvMarkerList from './components/mapv-marker-list';
import Arc from './components/arc';
import Graphy from './components/graphy';
const TabPane = Tabs.TabPane;

export default class echarts extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
    }
    render() {

        const map = <Tabs defaultActiveKey="1" tabPosition="left" >
            <TabPane tab="Bmap" key="1">
                <Bmap />
            </TabPane>
            <TabPane tab="MarkerMap" key="2">
                <MarkerMap />
            </TabPane>
            <TabPane tab="DrivingRoute" key="3">
                <DrivingRoute />
            </TabPane>
            <TabPane tab="MarkerList" key="4">
                < MarkerList />
            </TabPane>
            <TabPane tab="Road" key="5">
                <Road />
            </TabPane>
            <TabPane tab="Boundary" key="6">
                <Boundary />
            </TabPane>
            <TabPane tab="TrafficLayer" key="7">
                <TrafficLayer />
            </TabPane>
            <TabPane tab="Control" key="8">
                <Control />
            </TabPane>
            <TabPane tab="PointLabel" key="9">
                <PointLabel />
            </TabPane>
            <TabPane tab="NavigationControl" key="10">
                <NavigationControl />
            </TabPane>
            <TabPane tab="Polygon" key="11">
                <Polygon />
            </TabPane>
            <TabPane tab="ThickRay" key="12">
                <ThickRay />
            </TabPane>
            <TabPane tab="MapvMarkerList" key="13">
                <MapvMarkerList />
            </TabPane>
            <TabPane tab="Arc" key="14">
                <Arc />
            </TabPane>
            <TabPane tab="Graphy" key="15">
                <Graphy />
            </TabPane>
        </Tabs>;
        return (
            <PageHeader
                title="百度地图"
                routes={['Home', '百度地图']}
            >
                {map}
            </PageHeader>
        );
    }
} 