(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{n1O6:function(e,o,t){"use strict";t.r(o);var a=t("jehZ"),n=t.n(a),r=t("q1tI"),l=t.n(r),s=(t("17x9"),t("8Qy9"));class i extends r["PureComponent"]{render(){var e=this.props,o=e.data,t=o.nodes,a=o.links,r=e.orient,i=e.focusNodeAdjacency,d=e.nodeAlign,g=e.draggable,p=e.top,c=e.bottom,u=e.right,y=e.left,b=e.showLabel,h=[{type:"sankey",layoutIterations:64,orient:r,layout:"none",data:t,links:a,focusNodeAdjacency:i,nodeAlign:d,draggable:g,top:p,bottom:c,right:u,left:y,label:{show:b},itemStyle:{normal:{borderWidth:1,borderColor:"#aaa"}},lineStyle:{normal:{curveness:.5}}}];return l.a.createElement(s["a"],n()({},this.props,{series:h}))}}i.defaultProps={data:{},dataType:"special",type:"sankey",loading:!1,tooltip:{trigger:"item",triggerOn:"mousemove"},orient:"horizontal",focusNodeAdjacency:"allEdges",nodeAlign:"left",draggable:!0,right:200,left:20,showLabel:!0},o["default"]=i}}]);