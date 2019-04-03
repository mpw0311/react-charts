import React, { Component } from 'react';
import { Map, ThickRay, Marker } from 'react-bmap';
import { utilCityCenter } from 'mapv';
import simpleMapStyle from './simpleMapStyle';

export default class App extends Component {
    render() {
        var center = utilCityCenter.getCenterByCityName('北京');
        return (<Map
            style={{ height: '400px' }}
            mapStyle={simpleMapStyle}
            center={{ lng: 105.403119, lat: 38.328658 }}
            zoom='13'
        >
            <ThickRay
                showFromPoint={false}
                showToPoint={true}
                data={[
                    {
                        color: 'red',
                        from: {
                            city: '北京'
                        },
                        to: {
                            city: '南京'
                        },
                        count: 10001
                    },
                    {
                        from: {
                            city: '北京',
                        },
                        to: {
                            name: '哈哈',
                            point: {
                                lng: 101.45934,
                                lat: 39.135305
                            }
                        },
                        count: 1
                    },
                    {
                        from: {
                            city: '北京'
                        },
                        to: {
                            city: '成都'
                        },
                        count: 500
                    },
                    {
                        from: {
                            city: '北京'
                        },
                        to: {
                            city: '广州'
                        },
                        count: 20
                    }
                ]} />
            <Marker position={center} />
        </Map>);
    }
}

