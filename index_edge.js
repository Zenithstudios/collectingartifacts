/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)": [
                ["style", "-webkit-transform-origin", [17,31], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17,31],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17,31],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17,31],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17,31],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["transform", "translateY", '0px'],
                ["transform", "translateX", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "translateY", '-127px', { fromValue: '0px'}], position: 0, duration: 4500, easing: "easeInOutQuad" },
                { id: "eid10", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "translateY", '-226px', { fromValue: '-127px'}], position: 4500, duration: 3500, easing: "easeInOutQuad" },
                { id: "eid12", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "translateY", '-152px', { fromValue: '-226px'}], position: 8000, duration: 3500, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "translateY", '0px', { fromValue: '-152px'}], position: 11500, duration: 3500, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "scaleY", '1.18', { fromValue: '1'}], position: 0, duration: 4500 },
                { id: "eid22", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "scaleY", '0.85', { fromValue: '1.18'}], position: 4500, duration: 7000 },
                { id: "eid24", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "scaleY", '1', { fromValue: '0.85'}], position: 11500, duration: 3500 },
                { id: "eid7", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "translateX", '380px', { fromValue: '0px'}], position: 0, duration: 4500, easing: "easeInOutQuad" },
                { id: "eid9", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "translateX", '54px', { fromValue: '380px'}], position: 4500, duration: 3500, easing: "easeInOutQuad" },
                { id: "eid11", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "translateX", '-81px', { fromValue: '54px'}], position: 8000, duration: 3500, easing: "easeInOutQuad" },
                { id: "eid13", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "translateX", '0px', { fromValue: '-81px'}], position: 11500, duration: 3500, easing: "easeInOutQuad" },
                { id: "eid19", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "scaleX", '1.18', { fromValue: '1'}], position: 0, duration: 4500 },
                { id: "eid20", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "scaleX", '0.85', { fromValue: '1.18'}], position: 4500, duration: 7000 },
                { id: "eid23", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "scaleX", '1', { fromValue: '0.85'}], position: 11500, duration: 3500 },
                { id: "eid6", tween: [ "transform", "${_scene} > li:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > img:nth-child(1)", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 15000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1726689828");
