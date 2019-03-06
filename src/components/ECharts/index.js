import React, { Suspense } from 'react';
import { Skeleton } from 'antd';

const getComponent = Component => props => (
    <Suspense fallback={<Skeleton title={false} active/>}>
        <Component {...props} />
    </Suspense>
);

const Area = getComponent(React.lazy(() => import('./charts/Area')));
const Bar = getComponent(React.lazy(() => import('./charts/Bar')));
const YBar = getComponent(React.lazy(() => import('./charts/Bar-y')));
const Line = getComponent(React.lazy(() => import('./charts/Line')));
const Funnel = getComponent(React.lazy(() => import('./charts/Funnel')));

export {
    Area,
    Bar,
    YBar,
    // BarWaterfall,
    Line,
    Funnel,
    // Map,
    // Pie,
    // PieCustom,
    // PieNest,
    // Radar,
    // Sankey,
    // Scatter
};