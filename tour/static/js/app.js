!function() {
    "use strict";
    $.ajaxPrefilter(function(e) {
        e.async = !0;
    }), $(".mda-form-control > input").on("change", function() {
        $(this)[this.value.length ? "addClass" :"removeClass"]("has-value");
    });
}(), function() {
    "use strict";
    function e() {
        function e() {
            for (l.length > 0 && (l = l.slice(1)); l.length < s; ) {
                var e = l.length > 0 ? l[l.length - 1] :50, t = e + 10 * Math.random() - 5;
                0 > t ? t = 0 :t > 100 && (t = 100), l.push(t);
            }
            for (var o = [], a = 0; a < l.length; ++a) o.push([ a, l[a] ]);
            return [ o ];
        }
        function t() {
            c = e(), $("#realtime-flotchart").plot(c, i), setTimeout(t, 30);
        }
        if ($.fn.plot && $("#bar-flotchart").length) {
            $.get("server/chart/bar.json", function(e) {
                var t = e, o = {
                    series:{
                        bars:{
                            align:"center",
                            lineWidth:0,
                            show:!0,
                            barWidth:.6,
                            fill:!0,
                            fillColor:{
                                colors:[ {
                                    opacity:.8
                                }, {
                                    opacity:.5
                                } ]
                            }
                        }
                    },
                    grid:{
                        borderColor:"rgba(162,162,162,.26)",
                        borderWidth:1,
                        hoverable:!0,
                        backgroundColor:"transparent"
                    },
                    tooltip:!0,
                    tooltipOpts:{
                        content:function(e, t, o) {
                            return t + " : " + o;
                        }
                    },
                    xaxis:{
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        },
                        mode:"categories"
                    },
                    yaxis:{
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        }
                    },
                    shadowSize:0
                };
                $("#bar-flotchart").plot(t, o);
            }), $.get("server/chart/barstacked.json", function(e) {
                var t = e, o = {
                    series:{
                        stack:!0,
                        bars:{
                            align:"center",
                            lineWidth:0,
                            show:!0,
                            barWidth:.6,
                            fill:.9
                        }
                    },
                    grid:{
                        borderColor:"rgba(162,162,162,.26)",
                        borderWidth:1,
                        hoverable:!0,
                        backgroundColor:"transparent"
                    },
                    tooltip:!0,
                    tooltipOpts:{
                        content:function(e, t, o) {
                            return t + " : " + o;
                        }
                    },
                    xaxis:{
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        },
                        mode:"categories"
                    },
                    yaxis:{
                        min:0,
                        max:200,
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        }
                    },
                    shadowSize:0
                };
                $("#barstacked-flotchart").plot(t, o);
            }), $.get("server/chart/spline.json", function(e) {
                var t = e, o = {
                    series:{
                        lines:{
                            show:!1
                        },
                        points:{
                            show:!0,
                            radius:2
                        },
                        splines:{
                            show:!0,
                            tension:.4,
                            lineWidth:1,
                            fill:1
                        }
                    },
                    grid:{
                        borderColor:"rgba(162,162,162,.26)",
                        borderWidth:1,
                        hoverable:!0,
                        backgroundColor:"transparent"
                    },
                    tooltip:!0,
                    tooltipOpts:{
                        content:function(e, t, o) {
                            return t + " : " + o;
                        }
                    },
                    xaxis:{
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        },
                        mode:"categories"
                    },
                    yaxis:{
                        min:0,
                        max:150,
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        },
                        tickFormatter:function(e) {
                            return e;
                        }
                    },
                    shadowSize:0
                };
                $("#spline-flotchart").plot(t, o);
            }), $.get("server/chart/area.json", function(e) {
                var t = e, o = {
                    series:{
                        lines:{
                            show:!0,
                            fill:!0,
                            fillColor:{
                                colors:[ {
                                    opacity:.5
                                }, {
                                    opacity:.9
                                } ]
                            }
                        },
                        points:{
                            show:!1
                        }
                    },
                    grid:{
                        borderColor:"rgba(162,162,162,.26)",
                        borderWidth:1,
                        hoverable:!0,
                        backgroundColor:"transparent"
                    },
                    tooltip:!0,
                    tooltipOpts:{
                        content:function(e, t, o) {
                            return t + " : " + o;
                        }
                    },
                    xaxis:{
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        },
                        mode:"categories"
                    },
                    yaxis:{
                        min:0,
                        max:150,
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        }
                    },
                    shadowSize:0
                };
                $("#area-flotchart").plot(t, o);
            }), $.get("server/chart/line.json", function(e) {
                var t = e, o = {
                    series:{
                        lines:{
                            show:!0,
                            fill:.01
                        },
                        points:{
                            show:!0,
                            radius:4
                        }
                    },
                    grid:{
                        borderColor:"rgba(162,162,162,.26)",
                        borderWidth:1,
                        hoverable:!0,
                        backgroundColor:"transparent"
                    },
                    tooltip:!0,
                    tooltipOpts:{
                        content:function(e, t, o) {
                            return t + " : " + o;
                        }
                    },
                    xaxis:{
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        },
                        mode:"categories"
                    },
                    yaxis:{
                        tickColor:"rgba(162,162,162,.26)",
                        font:{
                            color:Colors.byName("blueGrey-200")
                        }
                    },
                    shadowSize:0
                };
                $("#line-flotchart").plot(t, o);
            });
            var o = [ {
                label:"CSS",
                color:"#009688",
                data:40
            }, {
                label:"LESS",
                color:"#FFC107",
                data:90
            }, {
                label:"SASS",
                color:"#FF7043",
                data:75
            } ], a = {
                series:{
                    pie:{
                        show:!0,
                        innerRadius:0,
                        label:{
                            show:!0,
                            radius:.8,
                            formatter:function(e, t) {
                                return '<div class="flot-pie-label">' + Math.round(t.percent) + "%</div>";
                            },
                            background:{
                                opacity:.8,
                                color:"#222"
                            }
                        }
                    }
                }
            };
            $("#pie-flotchart").plot(o, a);
            var r = [ {
                color:"#4CAF50",
                data:60,
                label:"Coffee"
            }, {
                color:"#009688",
                data:90,
                label:"CSS"
            }, {
                color:"#FFC107",
                data:50,
                label:"LESS"
            }, {
                color:"#FF7043",
                data:80,
                label:"Jade"
            }, {
                color:"#3949AB",
                data:116,
                label:"AngularJS"
            } ], n = {
                series:{
                    pie:{
                        show:!0,
                        innerRadius:.5
                    }
                }
            };
            $("#donut-flotchart").plot(r, n);
            var i = {
                series:{
                    lines:{
                        show:!0,
                        fill:!0,
                        fillColor:{
                            colors:[ "#3F51B5", "#3F51B5" ]
                        }
                    },
                    shadowSize:0
                },
                grid:{
                    show:!1,
                    borderWidth:0,
                    minBorderMargin:20,
                    labelMargin:10
                },
                xaxis:{
                    tickFormatter:function() {
                        return "";
                    }
                },
                yaxis:{
                    min:0,
                    max:110
                },
                legend:{
                    show:!0
                },
                colors:[ "#3F51B5" ]
            }, l = [], s = 300, c = e();
            t();
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if ($.fn.knob && $.fn.easyPieChart) {
            var e = {
                width:"50%",
                displayInput:!0,
                thickness:.1,
                fgColor:Colors.byName("info"),
                bgColor:"rgba(162,162,162, .09)"
            }, e1 = {
                width:"50%",
                displayInput:!0,
                thickness:.1,
                fgColor:Colors.byName("info"),
                bgColor:"rgba(162,162,162, .09)"
            }, e2 = {
                width:"50%",
                displayInput:!0,
                thickness:.1,
                fgColor:Colors.byName("info"),
                bgColor:"rgba(162,162,162, .09)"
            }, e3 = {
                width:"50%",
                displayInput:!0,
                thickness:.1,
                fgColor:Colors.byName("info"),
                bgColor:"rgba(162,162,162, .09)"
            }, e4 = {
                width:"50%",
                displayInput:!0,
                thickness:.1,
                fgColor:Colors.byName("info"),
                bgColor:"rgba(162,162,162, .09)"
            }, e5 = {
                width:"50%",
                displayInput:!0,
                thickness:.1,
                fgColor:Colors.byName("info"),
                bgColor:"rgba(162,162,162, .09)"
            }, e6 = {
                width:"50%",
                displayInput:!0,
                thickness:.1,
                fgColor:Colors.byName("info"),
                bgColor:"rgba(162,162,162, .09)"
            }, t = {
                width:"50%",
                displayInput:!0,
                thickness:1,
                inputColor:"#fff",
                fgColor:Colors.byName("deepPurple-500"),
                bgColor:Colors.byName("green-500"),
                readOnly:!0
            }, o = {
                width:"50%",
                displayInput:!0,
                fgColor:Colors.byName("pink-500"),
                bgColor:"rgba(162,162,162, .09)",
                displayPrevious:!0,
                thickness:.1,
                lineCap:"round"
            }, a = {
                width:"50%",
                displayInput:!0,
                fgColor:Colors.byName("info"),
                bgColor:"rgba(162,162,162, .09)",
                angleOffset:-125,
                angleArc:250
            };
            $("#knob-chart11").knob(e1), $("#knob-chart12").knob(e), $("#knob-chart13").knob(e),
            $("#knob-chart14").knob(e), $("#knob-chart15").knob(e), $("#knob-chart16").knob(e),
            $("#knob-chart1").knob(e), $("#knob-chart2").knob(t), $("#knob-chart3").knob(o), $("#knob-chart4").knob(a);
            var r = {
                animate:{
                    duration:800,
                    enabled:!0
                },
                barColor:Colors.byName("success"),
                trackColor:!1,
                scaleColor:!1,
                lineWidth:10,
                lineCap:"circle"
            }, n = {
                animate:{
                    duration:800,
                    enabled:!0
                },
                barColor:Colors.byName("warning"),
                trackColor:!1,
                scaleColor:!1,
                lineWidth:4,
                lineCap:"circle"
            }, i = {
                animate:{
                    duration:800,
                    enabled:!0
                },
                barColor:Colors.byName("danger"),
                trackColor:!1,
                scaleColor:Colors.byName("gray"),
                lineWidth:15,
                lineCap:"circle"
            }, l = {
                animate:{
                    duration:800,
                    enabled:!0
                },
                barColor:Colors.byName("danger"),
                trackColor:"rgba(162,162,162, .09)",
                scaleColor:Colors.byName("gray-dark"),
                lineWidth:15,
                lineCap:"circle"
            };
            $("#easypiechart1").easyPieChart(r), $("#easypiechart2").easyPieChart(n), $("#easypiechart3").easyPieChart(i), 
            $("#easypiechart4").easyPieChart(l);
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        for (var e = [ [], [], [] ], t = new Rickshaw.Fixtures.RandomData(150), o = 0; 150 > o; o++) t.addData(e);
        var a = new Rickshaw.Graph({
            element:document.querySelector("#rickshaw-chart1"),
            renderer:"area",
            series:[ {
                color:Colors.byName("indigo-700"),
                data:e[0],
                name:"New York"
            }, {
                color:Colors.byName("primary"),
                data:e[1],
                name:"London"
            }, {
                color:Colors.byName("info"),
                data:e[2],
                name:"Tokyo"
            } ]
        });
        a.render();
        var r = new Rickshaw.Graph({
            element:document.querySelector("#rickshaw-chart2"),
            renderer:"bar",
            series:[ {
                color:Colors.byName("green-700"),
                data:e[0],
                name:"New York"
            }, {
                color:Colors.byName("green-500"),
                data:e[1],
                name:"London"
            }, {
                color:Colors.byName("green-200"),
                data:e[2],
                name:"Tokyo"
            } ]
        });
        r.render();
        for (var n = [ [], [], [] ], i = new Rickshaw.Fixtures.RandomData(150), l = 0; 200 > l; l++) i.addData(n);
        var s = new Rickshaw.Graph({
            element:document.querySelector("#rickshaw-chart3"),
            width:"100%",
            renderer:"scatterplot",
            legend:{
                toggle:!0,
                highlight:!0
            },
            series:[ {
                color:Colors.byName("pink-700"),
                data:n[0],
                name:"New York"
            }, {
                color:Colors.byName("pink-500"),
                data:n[1],
                name:"London"
            }, {
                color:Colors.byName("pink-200"),
                data:n[2],
                name:"Tokyo"
            } ]
        });
        new Rickshaw.Graph.HoverDetail({
            graph:s,
            xFormatter:function(e) {
                return "t=" + e;
            },
            yFormatter:function(e) {
                return "$" + e;
            }
        }), s.render(), window.addEventListener("resize", function() {
            a.configure({
                width:$("#rickshaw-chart1").width(),
                height:$("#rickshaw-chart1").height()
            }), a.render(), r.configure({
                width:$("#rickshaw-chart2").width(),
                height:$("#rickshaw-chart2").height()
            }), r.render(), s.configure({
                width:$("#rickshaw-chart3").width(),
                height:$("#rickshaw-chart3").height()
            }), s.render();
        });
    }
    document.querySelector("#rickshaw-chart1") && document.querySelector("#rickshaw-chart2") && document.querySelector("#rickshaw-chart3") && $(e);
}(), function(e) {
    "use strict";
    e.APP_COLORS = {
        "gray-darker":"#263238",
        "gray-dark":"#455A64",
        gray:"#607D8B",
        "gray-light":"#90A4AE",
        "gray-lighter":"#ECEFF1",
        primary:"#448AFF",
        success:"#4CAF50",
        info:"#03A9F4",
        warning:"#FFB300",
        danger:"#F44336"
    };
}(window), function(e) {
    "use strict";
    function t() {
        function e(e) {
            var t = APP_COLORS[e];
            if (!t && "undefined" != typeof materialColors) {
                var o = e.split("-");
                o.length && (t = (materialColors[o[0]] || {})[o[1]]);
            }
            return t || "#fff";
        }
        this.byName = e;
    }
    e.Colors = new t();
}(window), function() {
    "use strict";
    function e() {
        function e(e, t) {
            e.sparkline(t, $.extend(b, e.data()));
        }
        if ($.fn.plot && $.fn.easyPieChart) {
            var t = [ {
                label:"Clicks",
                color:Colors.byName("purple-300"),
                data:[ [ "1", 40 ], [ "2", 50 ], [ "3", 40 ], [ "4", 50 ], [ "5", 66 ], [ "6", 66 ], [ "7", 76 ], [ "8", 96 ], [ "9", 90 ], [ "10", 105 ], [ "11", 125 ], [ "12", 135 ] ]
            }, {
                label:"Unique",
                color:Colors.byName("green-400"),
                data:[ [ "1", 30 ], [ "2", 40 ], [ "3", 20 ], [ "4", 40 ], [ "5", 80 ], [ "6", 90 ], [ "7", 70 ], [ "8", 60 ], [ "9", 90 ], [ "10", 150 ], [ "11", 130 ], [ "12", 160 ] ]
            }, {
                label:"Recurrent",
                color:Colors.byName("blue-500"),
                data:[ [ "1", 10 ], [ "2", 20 ], [ "3", 10 ], [ "4", 20 ], [ "5", 6 ], [ "6", 10 ], [ "7", 32 ], [ "8", 26 ], [ "9", 20 ], [ "10", 35 ], [ "11", 30 ], [ "12", 56 ] ]
            } ], o = {
                series:{
                    lines:{
                        show:!1
                    },
                    points:{
                        show:!1,
                        radius:3
                    },
                    splines:{
                        show:!0,
                        tension:.39,
                        lineWidth:5,
                        fill:1,
                        fillColor:Colors.byName("primary")
                    }
                },
                grid:{
                    borderColor:"#eee",
                    borderWidth:0,
                    hoverable:!0,
                    backgroundColor:"transparent"
                },
                tooltip:!0,
                tooltipOpts:{
                    content:function(e, t, o) {
                        return t + " : " + o;
                    }
                },
                xaxis:{
                    tickColor:"transparent",
                    mode:"categories",
                    font:{
                        color:Colors.byName("blueGrey-200")
                    }
                },
                yaxis:{
                    show:!1,
                    min:0,
                    max:220,
                    tickColor:"transparent",
                    font:{
                        color:Colors.byName("blueGrey-200")
                    },
                    tickFormatter:function(e) {
                        return e;
                    }
                },
                shadowSize:0
            };
            $("#flot-main-spline").each(function() {
                var e = $(this);
                e.data("height") && e.height(e.data("height")), e.plot(t, o);
            });
            var a = [ {
                data:[ [ 1, 45 ], [ 2, 42 ], [ 3, 45 ], [ 4, 43 ], [ 5, 45 ], [ 6, 47 ], [ 7, 45 ], [ 8, 42 ], [ 9, 45 ], [ 10, 43 ] ]
            }, {
                data:[ [ 1, 35 ], [ 2, 35 ], [ 3, 17 ], [ 4, 29 ], [ 5, 10 ], [ 6, 7 ], [ 7, 35 ], [ 8, 35 ], [ 9, 17 ], [ 10, 29 ] ]
            } ], r = {
                bars:{
                    show:!0,
                    fill:!0,
                    barWidth:.3,
                    lineWidth:1,
                    align:"center",
                    fillColor:{
                        colors:[ {
                            opacity:1
                        }, {
                            opacity:1
                        } ]
                    }
                },
                colors:[ Colors.byName("blue-100"), Colors.byName("blue-500") ],
                series:{
                    shadowSize:3
                },
                xaxis:{
                    show:!0,
                    position:"bottom",
                    ticks:10,
                    font:{
                        color:Colors.byName("blueGrey-200")
                    }
                },
                yaxis:{
                    show:!1,
                    min:0,
                    max:60,
                    font:{
                        color:Colors.byName("blueGrey-200")
                    }
                },
                grid:{
                    hoverable:!0,
                    clickable:!0,
                    borderWidth:0,
                    color:"rgba(120,120,120,0.5)"
                },
                tooltip:!0,
                tooltipOpts:{
                    content:"Value %x.0 is %y.0",
                    defaultTheme:!1,
                    shifts:{
                        x:0,
                        y:-20
                    }
                }
            };
            $("#flot-stacked-chart").each(function() {
                var e = $(this);
                e.data("height") && e.height(e.data("height")), e.plot(a, r);
            });
            var n = {
                series:{
                    bars:{
                        show:!0,
                        fill:1,
                        barWidth:.2,
                        lineWidth:0,
                        align:"center"
                    },
                    highlightColor:"rgba(255,255,255,0.2)"
                },
                grid:{
                    hoverable:!0,
                    clickable:!0,
                    borderWidth:0,
                    color:"#8394a9"
                },
                tooltip:!0,
                tooltipOpts:{
                    content:function(e, t, o) {
                        return "Visitors for " + t + " was " + 1e3 * o;
                    }
                },
                xaxis:{
                    tickColor:"transparent",
                    mode:"categories",
                    font:{
                        color:Colors.byName("blueGrey-200")
                    }
                },
                yaxis:{
                    tickColor:"transparent",
                    font:{
                        color:Colors.byName("blueGrey-200")
                    }
                },
                legend:{
                    show:!1
                },
                shadowSize:0
            }, i = [ {
                label:"New",
                bars:{
                    order:0,
                    fillColor:Colors.byName("primary")
                },
                data:[ [ "Jan", 20 ], [ "Feb", 15 ], [ "Mar", 25 ], [ "Apr", 30 ], [ "May", 40 ], [ "Jun", 35 ] ]
            }, {
                label:"Recurrent",
                bars:{
                    order:1,
                    fillColor:Colors.byName("green-400")
                },
                data:[ [ "Jan", 35 ], [ "Feb", 25 ], [ "Mar", 45 ], [ "Apr", 25 ], [ "May", 30 ], [ "Jun", 15 ] ]
            } ];
            $("#flot-bar-chart").each(function() {
                var e = $(this);
                e.data("height") && e.height(e.data("height")), e.plot(i, n);
            });
            var l = [ {
                label:"Total",
                color:Colors.byName("primary"),
                data:[ [ "Jan", 14 ], [ "Feb", 14 ], [ "Mar", 12 ], [ "Apr", 16 ], [ "May", 13 ], [ "Jun", 14 ], [ "Jul", 19 ] ]
            } ], s = {
                series:{
                    lines:{
                        show:!1
                    },
                    points:{
                        show:!1
                    },
                    splines:{
                        show:!0,
                        tension:.4,
                        lineWidth:3,
                        fill:1
                    }
                },
                legend:{
                    show:!1
                },
                grid:{
                    show:!1
                },
                tooltip:!0,
                tooltipOpts:{
                    content:function(e, t, o) {
                        return t + " : " + o;
                    }
                },
                xaxis:{
                    tickColor:"#fcfcfc",
                    mode:"categories"
                },
                yaxis:{
                    min:0,
                    max:30,
                    tickColor:"#eee",
                    tickFormatter:function(e) {
                        return e;
                    }
                },
                shadowSize:0
            };
            $("#flot-task-chart").each(function() {
                var e = $(this);
                e.data("height") && e.height(e.data("height")), e.plot(l, s);
            });
            var c = {
                lineWidth:6,
                trackColor:"transparent",
                barColor:Colors.byName("primary"),
                scaleColor:!1,
                size:90,
                lineCap:"round",
                animate:{
                    duration:3e3,
                    enabled:!0
                }
            };
            $("#dashboard-easypiechartTask").easyPieChart(c);
            var d = [ {
                latLng:[ 40.71, -74 ],
                name:"New York"
            }, {
                latLng:[ 34.05, -118.24 ],
                name:"Los Angeles"
            }, {
                latLng:[ 41.87, -87.62 ],
                name:"Chicago",
                style:{
                    fill:Colors.byName("pink-500"),
                    r:15
                }
            }, {
                latLng:[ 29.76, -95.36 ],
                name:"Houston",
                style:{
                    fill:Colors.byName("purple-500"),
                    r:10
                }
            }, {
                latLng:[ 39.95, -75.16 ],
                name:"Philadelphia"
            }, {
                latLng:[ 38.9, -77.03 ],
                name:"Washington"
            }, {
                latLng:[ 37.36, -122.03 ],
                name:"Silicon Valley",
                style:{
                    fill:Colors.byName("green-500"),
                    r:20
                }
            } ], u = {
                map:"us_mill_en",
                normalizeFunction:"polynomial",
                backgroundColor:"#fff",
                regionsSelectable:!1,
                markersSelectable:!1,
                zoomButtons:!1,
                zoomOnScroll:!1,
                markers:d,
                regionStyle:{
                    initial:{
                        fill:Colors.byName("blueGrey-200")
                    },
                    hover:{
                        fill:Colors.byName("gray-light"),
                        stroke:"#fff"
                    }
                },
                markerStyle:{
                    initial:{
                        fill:Colors.byName("blue-500"),
                        stroke:"#fff",
                        r:10
                    },
                    hover:{
                        fill:Colors.byName("orange-500"),
                        stroke:"#fff"
                    }
                }
            };
            $("#vector-map").vectorMap(u), $("#dashboard-datepicker").datepicker();
            var m = [ 4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6 ], f = [ 2, 3, 4, 6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 5 ], h = [ 4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6 ], p = [ 6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 3, 2, 2 ], b = {
                type:"line",
                height:20,
                width:"70",
                lineWidth:2,
                valueSpots:{
                    "0:":Colors.byName("blue-700")
                },
                lineColor:Colors.byName("blue-700"),
                spotColor:Colors.byName("blue-700"),
                fillColor:"transparent",
                highlightLineColor:Colors.byName("blue-700"),
                spotRadius:0
            };
            e($("#sparkline1"), m, b), e($("#sparkline2"), f, b), e($("#sparkline3"), h, b), 
            e($("#sparkline4"), p, b);
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        $('[data-toggle="popover"]').popover(), $('[data-toggle="tooltip"]').tooltip({
            container:"body"
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if ($.fn.imagesLoaded) var e = $(".grid").imagesLoaded(function() {
            e.masonry({
                itemSelector:".grid-item",
                percentPosition:!0,
                columnWidth:".grid-sizer"
            });
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = function(e) {
            var t = e.length ? e :$(e.target), o = t.data("output");
            window.JSON ? o.text(window.JSON.stringify(t.nestable("serialize"))) :o.text("JSON browser support required for this demo.");
        };
        $("#nestable").each(function() {
            $(this).nestable({
                group:1
            }).on("change", e), e($(this).data("output", $("#nestable-output")));
        }), $(".js-nestable-action").on("click", function(e) {
            var t = $(e.target), o = t.data("action");
            "expand-all" === o && $(".dd").nestable("expandAll"), "collapse-all" === o && $(".dd").nestable("collapseAll");
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        $("#swal-demo1").on("click", function(e) {
            e.preventDefault(), swal("Here's a message!");
        }), $("#swal-demo2").on("click", function(e) {
            e.preventDefault(), swal("Here's a message!", "It's pretty, isn't it?");
        }), $("#swal-demo3").on("click", function(e) {
            e.preventDefault(), swal("Good job!", "You clicked the button!", "success");
        }), $("#swal-demo4").on("click", function(e) {
            e.preventDefault(), swal({
                title:"Are you sure?",
                text:"You will not be able to recover this imaginary file!",
                type:"warning",
                showCancelButton:!0,
                confirmButtonColor:"#DD6B55",
                confirmButtonText:"Yes, delete it!",
                closeOnConfirm:!1
            }, function() {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            });
        }),$("#swal_duplicate_applicant").on("click", function(e) {
            e.preventDefault(), swal({
                title:"Duplicate Applicant",
                text:"Already This Applicant name is selected, Please check",
                type:"warning",
                showCancelButton:!0,
                confirmButtonColor:"#DD6B55",
                confirmButtonText:"Yes, delete it!",
                closeOnConfirm:!1
            }, function() {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            });
        }),$("#swal-demo4").on("click", function(e) {
            e.preventDefault(), swal({
                title:"Are you sure?",
                text:"You will not be able to recover this imaginary file!",
                type:"warning",
                showCancelButton:!0,
                confirmButtonColor:"#DD6B55",
                confirmButtonText:"Yes, delete it!",
                closeOnConfirm:!1
            }, function() {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            });
        }),$("#swal-demo5").on("click", function(e) {
            e.preventDefault(), swal({
                title:"Are you sure?",
                text:"You will not be able to recover this imaginary file!",
                type:"warning",
                showCancelButton:!0,
                confirmButtonColor:"#DD6B55",
                confirmButtonText:"Yes, delete it!",
                cancelButtonText:"No, cancel plx!",
                closeOnConfirm:!1,
                closeOnCancel:!1
            }, function(e) {
                e ? swal("Deleted!", "Your imaginary file has been deleted.", "success") :swal("Cancelled", "Your imaginary file is safe :)", "error");
            });
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        "undefined" != typeof Dropzone && (Dropzone.options.dropzoneArea = {
            autoProcessQueue:!1,
            uploadMultiple:!0,
            parallelUploads:100,
            maxFiles:100,
            dictDefaultMessage:'<em class="ion-upload text-info icon-2x"></em><br>Drop files here to upload',
            paramName:"file",
            maxFilesize:2,
            addRemoveLinks:!0,
            accept:function(e, t) {
                "justinbieber.jpg" === e.name ? t("Naha, you dont. :)") :t();
            },
            init:function() {
                var e = this;
                this.element.querySelector("button[type=submit]").addEventListener("click", function(t) {
                    t.preventDefault(), t.stopPropagation(), e.processQueue();
                }), this.on("addedfile", function(e) {
                    console.log("Added file: " + e.name);
                }), this.on("removedfile", function(e) {
                    console.log("Removed file: " + e.name);
                }), this.on("sendingmultiple", function() {}), this.on("successmultiple", function() {}), 
                this.on("errormultiple", function() {});
            }
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        $(".summernote").each(function() {
            $(this).summernote({
                height:380
            });
        }), $(".summernote-air").each(function() {
            $(this).summernote({
                airMode:!0
            });
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if ($.fn.select2 && $.fn.datepicker && $.fn.clockpicker && $.fn.colorpicker) {
            $("#select2-1").select2(), $("#select2-2").select2(), $("#select2-3").select2(), 
            $("#select2-4").select2({
                placeholder:"Select a state",
                allowClear:!0
            }), $("#example-datepicker-1").datepicker(), $("#example-datepicker-2").datepicker(), 
            $("#example-datepicker-3").datepicker(), $("#example-datepicker-4").datepicker({
                container:"#example-datepicker-container-4"
            }), $("#example-datepicker-5").datepicker({
                container:"#example-datepicker-container-5"
            });
            var e = $(".clockpicker").clockpicker();
            $("main").scroll(function() {
                e.clockpicker("hide");
            }), $(".ui-slider").each(function() {
                noUiSlider.create(this, {
                    start:$(this).data("start"),
                    connect:!0,
                    range:{
                        min:0,
                        max:100
                    }
                });
            }), $(".ui-slider-range").each(function() {
                noUiSlider.create(this, {
                    start:[ 25, 75 ],
                    range:{
                        min:0,
                        max:100
                    },
                    connect:!0
                });
            }), $(".ui-slider-values").each(function() {
                function e() {
                    var e = t.noUiSlider.get();
                    $("#ui-slider-value-lower").html(e[0]), $("#ui-slider-value-upper").html(e[1]);
                }
                var t = this;
                noUiSlider.create(t, {
                    start:[ 35, 75 ],
                    connect:!0,
                    behaviour:"tap-drag",
                    range:{
                        min:0,
                        max:100
                    }
                }), t.noUiSlider.on("slide", e), e();
            }), $("#cp-demo-basic").colorpicker({
                customClass:"colorpicker-2x",
                sliders:{
                    saturation:{
                        maxLeft:200,
                        maxTop:200
                    },
                    hue:{
                        maxTop:200
                    },
                    alpha:{
                        maxTop:200
                    }
                }
            }), $("#cp-demo-component").colorpicker(), $("#cp-demo-hex").colorpicker(), $("#cp-demo-bootstrap").colorpicker({
                colorSelectors:{
                    "default":"#777777",
                    primary:"#337ab7",
                    success:"#5cb85c",
                    info:"#5bc0de",
                    warning:"#f0ad4e",
                    danger:"#d9534f"
                }
            });
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        $("#form-register").validate({
            errorPlacement:t,
            rules:{
                email:{
                    required:!0,
                    email:!0
                },
                password1:{
                    required:!0
                },
                confirm_match:{
                    required:!0,
                    equalTo:"#id-password"
                }
            }
        }), $("#form-login").validate({
            errorPlacement:t,
            rules:{
                loginemail:{
                    required:!0,
                    email:!0
                },
                loginpassword:{
                    required:!0
                }
            }
        }), $("#form-subscribe").validate({
            errorPlacement:t,
            rules:{
                feedemail:{
                    required:!0,
                    email:!0
                }
            }
        }), $("#form-example").validate({
            errorPlacement:t,
            rules:{
                sometext:{
                    required:!0
                },
                email:{
                    required:!0,
                    email:!0
                },
                digits:{
                    required:!0,
                    digits:!0
                },
                url:{
                    required:!0,
                    url:!0
                },
                min:{
                    required:!0,
                    min:6
                },
                max:{
                    required:!0,
                    max:6
                },
                minlength:{
                    required:!0,
                    minlength:6
                },
                maxlength:{
                    required:!0,
                    maxlength:10
                },
                length:{
                    required:!0,
                    range:[ 6, 10 ]
                },
                match1:{
                    required:!0
                },
                confirm_match:{
                    required:!0,
                    equalTo:"#id-source"
                }
            }
        });
    }
    function t(e, t) {
        t.parent().parent().is(".mda-input-group") ? e.insertAfter(t.parent().parent()) :t.parent().is(".mda-form-control") ? e.insertAfter(t.parent()) :t.is(":radio") || t.is(":checkbox") ? e.insertAfter(t.parent()) :e.insertAfter(t);
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        function e(e, t) {
            t.parent().parent().is(".mda-input-group") ? e.insertAfter(t.parent().parent()) :t.parent().is(".mda-form-control") ? e.insertAfter(t.parent()) :t.is(":radio") || t.is(":checkbox") ? e.insertAfter(t.parent()) :e.insertAfter(t);
        }
        if ($.fn.steps) {
            var t = $("#example-form").removeClass("hidden");
            t.validate({
                errorPlacement:e,
                rules:{
                    confirm:{
                        equalTo:"#password"
                    }
                }
            }), t.children("div").steps({
                headerTag:"h4",
                bodyTag:"fieldset",
                transitionEffect:"slideLeft",
                onStepChanging:function() {
                    return t.validate().settings.ignore = ":disabled,:hidden", t.valid();
                },
                onFinishing:function() {
                    return t.validate().settings.ignore = ":disabled", t.valid();
                },
                onFinished:function() {
                    alert("Submitted!"), $(this).submit();
                }
            }), $("#example-vertical").removeClass("hidden").steps({
                headerTag:"h4",
                bodyTag:"section",
                transitionEffect:"slideLeft",
                stepsOrientation:"vertical"
            });
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        $.fn.editableform && ($.fn.editableform.buttons = '<button type="submit" class="btn btn-primary btn-sm editable-submit"><i class="icon-fw ion-checkmark"></i></button><button type="button" class="btn btn-default btn-sm editable-cancel"><i class="icon-fw ion-close-round"></i></button>', 
        $.fn.editable.defaults.url = "server/xeditable.res", $("#enable").click(function() {
            $("#user .editable").editable("toggleDisabled");
        }), $("#username").editable({
            url:"server/xeditable.res",
            type:"text",
            pk:1,
            name:"username",
            title:"Enter username"
        }), $("#firstname").editable({
            validate:function(e) {
                return "" === $.trim(e) ? "This field is required" :void 0;
            }
        }), $("#sex").editable({
            prepend:"not selected",
            source:[ {
                value:1,
                text:"Male"
            }, {
                value:2,
                text:"Female"
            } ],
            display:function(e, t) {
                var o = {
                    "":"gray",
                    1:"green",
                    2:"blue"
                }, a = $.grep(t, function(t) {
                    return t.value === e;
                });
                a.length ? $(this).text(a[0].text).css("color", o[e]) :$(this).empty();
            }
        }), $("#status").editable(), $("#group").editable({
            showbuttons:!1
        }), $("#dob").editable(), $("#event").editable({
            placement:"right",
            combodate:{
                firstItem:"name"
            }
        }), $("#comments").editable({
            showbuttons:"bottom"
        }), $("#note").editable(), $("#pencil").click(function(e) {
            e.stopPropagation(), e.preventDefault(), $("#note").editable("toggle");
        }), $("#fruits").editable({
            pk:1,
            limit:3,
            source:[ {
                value:1,
                text:"banana"
            }, {
                value:2,
                text:"peach"
            }, {
                value:3,
                text:"apple"
            }, {
                value:4,
                text:"watermelon"
            }, {
                value:5,
                text:"orange"
            } ]
        }), $("#user .editable").on("hidden", function(e, t) {
            if ("save" === t || "nochange" === t) {
                var o = $(this).closest("tr").next().find(".editable");
                $("#autoopen").is(":checked") ? setTimeout(function() {
                    o.editable("show");
                }, 300) :o.focus();
            }
        }), $("#users a").editable({
            type:"text",
            name:"username",
            title:"Enter username"
        }));
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = $(".modal-search");
        $("#header-search").on("click", function(t) {
            t.preventDefault(), e.on("show.bs.modal", function() {
                $("body").addClass("modal-backdrop-soft");
            }).on("hidden.bs.modal", function() {
                $("body").removeClass("modal-backdrop-soft");
            }).on("shown.bs.modal", function() {
                $(".header-input-search").focus();
            }).modal();
        });
        var t = $(".modal-settings");
        $("#header-settings").on("click", function() {
            t.on("show.bs.modal", function() {
                $("body").addClass("modal-backdrop-soft");
            }).on("hidden.bs.modal", function() {
                $("body").removeClass("modal-backdrop-soft");
            }).modal();
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = document.getElementById("datamap-basic"), t = document.getElementById("datamap-arc");
        if (e && t) {
            var o = new Datamap({
                element:e,
                scope:"usa",
                responsive:!0,
                options:{
                    width:1110,
                    legendHeight:60
                },
                geographyConfig:{
                    highlightFillColor:Colors.byName("info"),
                    highlightBorderWidth:0
                },
                fills:{
                    HIGH:Colors.byName("info"),
                    MEDIUM:Colors.byName("info"),
                    LOW:Colors.byName("info"),
                    defaultFill:Colors.byName("gray-lighter")
                },
                data:{
                    AZ:{
                        fillKey:"MEDIUM"
                    },
                    CO:{
                        fillKey:"HIGH"
                    },
                    DE:{
                        fillKey:"LOW"
                    },
                    GA:{
                        fillKey:"MEDIUM"
                    }
                }
            }), a = new Datamap({
                element:t,
                scope:"usa",
                responsive:!0,
                fills:{
                    defaultFill:Colors.byName("blue-500"),
                    win:Colors.byName("blueGrey-700")
                },
                geographyConfig:{
                    borderWidth:0,
                    highlightFillColor:Colors.byName("blue-100"),
                    highlightBorderWidth:0
                },
                data:{
                    TX:{
                        fillKey:"win"
                    },
                    FL:{
                        fillKey:"win"
                    },
                    NC:{
                        fillKey:"win"
                    },
                    CA:{
                        fillKey:"win"
                    },
                    NY:{
                        fillKey:"win"
                    },
                    CO:{
                        fillKey:"win"
                    }
                }
            });
            a.arc([ {
                origin:"CA",
                destination:"TX",
                options:{
                    strokeWidth:3,
                    strokeColor:"#fff"
                }
            }, {
                origin:"OR",
                destination:"TX",
                options:{
                    strokeWidth:3,
                    strokeColor:"#fff"
                }
            }, {
                origin:"NY",
                destination:"TX",
                options:{
                    strokeWidth:3,
                    strokeColor:"#fff"
                }
            } ]), $(window).resize(function() {
                a.resize(), o.resize();
            });
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if (document.getElementById("mapfull-markers")) {
            for (var e = [ {
                id:0,
                name:"Canada",
                coords:{
                    latitude:56.130366,
                    longitude:-106.346771
                }
            }, {
                id:1,
                name:"New York",
                coords:{
                    latitude:40.712784,
                    longitude:-74.005941
                }
            }, {
                id:2,
                name:"Toronto",
                coords:{
                    latitude:43.653226,
                    longitude:-79.383184
                }
            }, {
                id:3,
                name:"San Francisco",
                coords:{
                    latitude:37.774929,
                    longitude:-122.419416
                }
            }, {
                id:4,
                name:"Utah",
                coords:{
                    latitude:39.32098,
                    longitude:-111.093731
                }
            } ], t = new GMaps({
                div:"#mapfull-markers",
                lat:e[0].coords.latitude,
                lng:e[0].coords.longitude,
                zoom:4
            }), o = 0; o < e.length; o++) t.addMarker({
                lat:e[o].coords.latitude,
                lng:e[o].coords.longitude,
                infoWindow:{
                    content:"<p>" + e[o].name + "</p>"
                }
            });
            $("#markers-list").on("click", "[data-panto-marker]", function() {
                var e = t.markers, o = $(this).data("pantoMarker");
                e[o] && t.map.panTo(e[o].getPosition());
            });
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if (document.getElementById("map")) {
            var e = new GMaps({
                div:"#map",
                lat:-12.043333,
                lng:-77.028333
            });
            GMaps.geocode({
                address:"276 N TUSTIN ST, ORANGE, CA 92867",
                callback:function(t, o) {
                    if ("OK" === o) {
                        var a = t[0].geometry.location;
                        e.setCenter(a.lat(), a.lng()), e.addMarker({
                            lat:a.lat(),
                            lng:a.lng()
                        });
                    }
                }
            });
        }
        if (document.getElementById("map-markers")) {
            var t = new GMaps({
                div:"#map-markers",
                lat:-12.043333,
                lng:-77.028333
            });
            t.addMarker({
                lat:-12.043333,
                lng:-77.03,
                title:"Lima",
                details:{
                    database_id:42,
                    author:"HPNeo"
                },
                click:function(e) {
                    console.log && console.log(e), alert("You clicked in this marker");
                }
            }), t.addMarker({
                lat:-12.042,
                lng:-77.028333,
                title:"Marker with InfoWindow",
                infoWindow:{
                    content:"<p>HTML Content</p>"
                }
            });
        }
        document.getElementById("panorama") && GMaps.createPanorama({
            el:"#panorama",
            lat:42.3455,
            lng:-71.0983
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if (document.getElementById("vector-map-world")) {
            var e = [ {
                latLng:[ 47.14, 9.52 ],
                name:"Liechtenstein"
            }, {
                latLng:[ 7.11, 171.06 ],
                name:"Marshall Islands"
            }, {
                latLng:[ 17.3, -62.73 ],
                name:"Saint Kitts and Nevis"
            }, {
                latLng:[ 3.2, 73.22 ],
                name:"Maldives"
            }, {
                latLng:[ 35.88, 14.5 ],
                name:"Malta"
            }, {
                latLng:[ 12.05, -61.75 ],
                name:"Grenada"
            }, {
                latLng:[ 13.16, -61.23 ],
                name:"Saint Vincent and the Grenadines"
            }, {
                latLng:[ 13.16, -59.55 ],
                name:"Barbados"
            }, {
                latLng:[ 17.11, -61.85 ],
                name:"Antigua and Barbuda"
            }, {
                latLng:[ -4.61, 55.45 ],
                name:"Seychelles"
            }, {
                latLng:[ 7.35, 134.46 ],
                name:"Palau"
            }, {
                latLng:[ 42.5, 1.51 ],
                name:"Andorra"
            } ], t = {
                map:"world_mill_en",
                normalizeFunction:"polynomial",
                backgroundColor:"#fff",
                regionsSelectable:!0,
                markersSelectable:!0,
                markers:e,
                regionStyle:{
                    initial:{
                        fill:Colors.byName("gray-lighter")
                    },
                    hover:{
                        fill:Colors.byName("indigo-500"),
                        stroke:"#fff"
                    }
                },
                markerStyle:{
                    initial:{
                        fill:Colors.byName("pink-500"),
                        stroke:"#fff",
                        r:10
                    },
                    hover:{
                        fill:Colors.byName("amber-500"),
                        stroke:"#fff"
                    }
                }
            };
            $("#vector-map-world").vectorMap(t);
        }
        if (document.getElementById("vector-map-usa")) {
            var o = [ {
                latLng:[ 40.71, -74 ],
                name:"New York"
            }, {
                latLng:[ 34.05, -118.24 ],
                name:"Los Angeles"
            }, {
                latLng:[ 41.87, -87.62 ],
                name:"Chicago"
            }, {
                latLng:[ 29.76, -95.36 ],
                name:"Houston"
            }, {
                latLng:[ 39.95, -75.16 ],
                name:"Philadelphia"
            }, {
                latLng:[ 38.9, -77.03 ],
                name:"Washington"
            }, {
                latLng:[ 37.36, -122.03 ],
                name:"Silicon Valley",
                style:{
                    fill:Colors.byName("green-500"),
                    r:20
                }
            } ], a = {
                map:"us_mill_en",
                normalizeFunction:"polynomial",
                backgroundColor:"#fff",
                regionsSelectable:!0,
                markersSelectable:!0,
                markers:o,
                regionStyle:{
                    initial:{
                        fill:Colors.byName("deepPurple-400")
                    },
                    hover:{
                        fill:Colors.byName("deepPurple-100"),
                        stroke:"#fff"
                    }
                },
                markerStyle:{
                    initial:{
                        fill:Colors.byName("amber-500"),
                        stroke:"#fff",
                        r:10
                    },
                    hover:{
                        fill:Colors.byName("orange-500"),
                        stroke:"#fff"
                    }
                }
            };
            $("#vector-map-usa").vectorMap(a);
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = $(".msg-display");
        e.each(function() {
            var e = $(this);
            e.on("click", function(e) {
                $(e.target).is(".dropdown") || $(e.target).parents(".dropdown").length > 0 || $(".modal-message").modal();
            });
        }), $("#compose").on("click", function() {
            $(".modal-compose").modal();
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if ($.fn.editable) {
            var e = $(".is-editable, #gender");
            $("#edit-enable").click(function(t) {
                t.preventDefault(), e.editable("toggleDisabled"), $("#edit-disable").removeClass("hidden"), 
                $("#edit-enable").addClass("hidden");
            }), $("#edit-disable").click(function(t) {
                t.preventDefault(), e.editable("toggleDisabled"), $("#edit-enable").removeClass("hidden"), 
                $("#edit-disable").addClass("hidden");
            }), $(".is-editable").each(function() {
                var e = $(this).data();
                $(this).editable({
                    showbuttons:"bottom",
                    disabled:!0,
                    mode:e.mode || "inline",
                    type:e.type || "text"
                });
            }), $("#gender").editable({
                disabled:!0,
                mode:"inline",
                url:"",
                source:[ {
                    value:1,
                    text:"Male"
                }, {
                    value:2,
                    text:"Female"
                } ]
            });
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        $(".ripple").each(function() {
            new Ripple($(this));
        });
    }
    $(e);
}(), function(e) {
    "use strict";
    function t(e) {
        var t = "transitionend webkitTransitionEnd", o = jQuery;
        this.element = e, this.rippleElement = this.getElement(), this.$rippleElement = o(this.rippleElement);
        var a = this.detectClickEvent(), r = this;
        e.on(a, function() {
            r.$rippleElement.removeClass("md-ripple-animate"), r.calcSizeAndPos(), r.$rippleElement.addClass("md-ripple-animate");
        }), this.$rippleElement.on(t, function() {
            r.$rippleElement.removeClass("md-ripple-animate"), r.rippleElement.style.width = 0, 
            r.rippleElement.style.height = 0;
        });
    }
    e.Ripple = t, t.prototype.getElement = function() {
        var e = this.element[0], t = e.querySelector(".md-ripple");
        return null === t && (t = document.createElement("span"), t.className = "md-ripple", 
        this.element.append(t)), t;
    }, t.prototype.calcSizeAndPos = function() {
        var e = Math.max(this.element.width(), this.element.height());
        this.rippleElement.style.width = e + "px", this.rippleElement.style.height = e + "px", 
        this.rippleElement.style.marginTop = -(e / 2) + "px", this.rippleElement.style.marginLeft = -(e / 2) + "px";
    }, t.prototype.detectClickEvent = function() {
        var e = /iphone|ipad/gi.test(navigator.appVersion);
        return e ? "touchstart" :"click";
    };
}(window), function() {
    "use strict";
    function e() {
        function e(e, t) {
            var o = t.match(/(^|\s)theme-\S+/g);
            return (o || []).join(" ");
        }
        var t = [ "theme-1", "theme-2", "theme-3", "theme-4", "theme-5", "theme-6", "theme-7", "theme-8", "theme-9" ], o = $("body"), a = ($(".layout-container > header"), 
        $(".layout-container > aside")), r = a.find(".sidebar-header");
        $(".layout-container > main"), $('input[name="setting-theme"]:radio').change(function() {
            var a = this.value;
            t[a] && (o.removeClass(e), o.addClass(t[a]));
        }), $('input[name="headerMenulink"]:radio').change(function() {
            var e = $(".menu-link");
            e.removeClass("menu-link-slide menu-link-arrow menu-link-close"), e.addClass(this.value);
        }), $("#sidebar-showheader").change(function() {
            r[this.checked ? "show" :"hide"]();
        });
        var n = $(".sidebar-toolbar");
        $("#sidebar-showtoolbar").change(function() {
            n[this.checked ? "show" :"hide"]();
        }), $("#sidebar-offcanvas").change(function() {
            o[this.checked ? "addClass" :"removeClass"]("sidebar-offcanvas");
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        function e(e) {
            var t = e.target, o = t.parentNode;
            return "a" === t.tagName.toLowerCase() ? t :"a" === o.tagName.toLowerCase() ? o :"a" === o.parentNode.tagName.toLowerCase() ? o.parentNode :void 0;
        }
        function t(e) {
            e.find("a").each(function() {
                var e = $(this).attr("href").replace("#", "");
                return "" !== e && window.location.href.indexOf(e) >= 0 ? ($(this).parents("li").addClass("active"), 
                !1) :void 0;
            });
        }
        var o = $(".sidebar-nav");
        $(".sidebar-content"), t(o), o.on("click", function(t) {
            var o = e(t);
            if (o) {
                var a = $(o), r = a.parent()[0], n = a.parent().parent().children();
                n.find("li").removeClass("active"), $.each(n, function(e, t) {
                    t !== r && $(t).removeClass("active");
                });
                var i = a.next();
                i.length && "UL" === i[0].tagName && (a.parent().toggleClass("active"), t.preventDefault());
            }
        });
        var a = $(".layout-container"), r = $("body");
        $("#sidebar-toggler").click(function(e) {
            e.preventDefault(), a.toggleClass("sidebar-visible"), $(this).parent().toggleClass("active");
        }), $(".sidebar-layout-obfuscator").click(function(e) {
            e.preventDefault(), a.removeClass("sidebar-visible"), $("#sidebar-toggler").parent().removeClass("active");
        }), $("#offcanvas-toggler").click(function(e) {
            e.preventDefault(), r.toggleClass("offcanvas-visible"), $(this).parent().toggleClass("active");
        }), window.addEventListener("resize", function() {
            window.innerWidth < 768 && (r.removeClass("offcanvas-visible"), $("#offcanvas-toggler").parent().addClass("active"));
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if ($.fn.bootgrid) {
            var e = {
                icon:"icon",
                iconColumns:"ion-ios-list-outline",
                iconDown:"ion-chevron-down",
                iconRefresh:"ion-refresh",
                iconSearch:"ion-search",
                iconUp:"ion-chevron-up"
            };
            $("#bootgrid-basic").bootgrid({
                css:e
            }), $("#bootgrid-selection").bootgrid({
                css:e,
                selection:!0,
                multiSelect:!0,
                rowSelect:!0,
                keepSelection:!0,
                templates:{
                    select:'<label class="mda-checkbox"><input name="select" type="{{ctx.type}}" class="{{css.selectBox}}" value="{{ctx.value}}" {{ctx.checked}} /><em class="bg-warning"></em></label>'
                }
            }), $("#bootgrid-command").bootgrid({
                css:e,
                formatters:{
                    commands:function(e, t) {
                        return '<button type="button" class="btn btn-flat btn-sm btn-info" data-row-id="' + t.id + '"><em class="ion-edit"></em></button><button type="button" class="btn btn-flat btn-sm btn-danger" data-row-id="' + t.id + '"><em class="ion-trash-a"></em></button>';
                    }
                }
            });
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if ($.fn.dataTable) {
            $("#datatable1").dataTable({
                paging:!0,
                ordering:!0,
                info:!0,
                oLanguage:{
                    sSearch:'<em class="ion-search"></em>',
                    sLengthMenu:"_MENU_ records per page",
                    info:"Showing page _PAGE_ of _PAGES_",
                    zeroRecords:"Nothing found - sorry",
                    infoEmpty:"No records available",
                    infoFiltered:"(filtered from _MAX_ total records)",
                    oPaginate:{
                        sNext:'<em class="ion-ios-arrow-right"></em>',
                        sPrevious:'<em class="ion-ios-arrow-left"></em>'
                    }
                }
            });
            var e = $("#datatable2").dataTable({
                paging:!0,
                ordering:!0,
                info:!0,
                oLanguage:{
                    sSearch:'<em class="ion-search"></em>',
                    sLengthMenu:"_MENU_ records per page",
                    info:"Showing page _PAGE_ of _PAGES_",
                    zeroRecords:"Nothing found - sorry",
                    infoEmpty:"No records available",
                    infoFiltered:"(filtered from _MAX_ total records)",
                    oPaginate:{
                        sNext:'<em class="ion-ios-arrow-right"></em>',
                        sPrevious:'<em class="ion-ios-arrow-left"></em>'
                    }
                }
            }), t = "datatable_input_col_search", o = $("tfoot ." + t);
            o.keyup(function() {
                e.fnFilter(this.value, o.index(this));
            });
        }
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        if ($.fn.localize) {
            var e = {
                language:a,
                pathPrefix:r,
                callback:function(e, t) {
                    t(e);
                }
            };
            t(e), $("[data-set-lang]").on("click", function() {
                var a = $(this).data("setLang");
                a && e.language !== a && (e.language = a, t(e), o($(this)));
            });
        }
    }
    function t(e) {
        $("[data-localize]").localize(n, e);
    }
    function o(e) {
        var t = e.parents(".dropdown-menu");
        if (t.length) {
            var o = t.prev("button, a");
            o.text(e.text());
        }
    }
    $(e);
    var a = "en", r = "server/i18n", n = "site";
}(), function() {
    "use strict";
    function e() {
        var e = $("#save-book-step1");
        e.validate({
            errorPlacement:t,
            rules:{
                start_date:{
                    required:!0
                },
                end_date:{
                    required:!0
                },
                panchayat_code:{
                    required:!0
                },
                work_category:{
                    required:!0
                },
                work_code:{
                    required:!0
                },
                measurement_book_number:{
                    required:!0
                },
                page_number:{
                    required:!0
                },
                officer:{
                    required:!0
                },
                /*semi_skill:{
                    required:!0
                },
                voucher_number:{
                    required:!0
                },
                number_days:{
                    required:!0
                }*/
            },
            submitHandler:function() {
                //console.log("Form submitted!"), window.location.href = "dashboard.html";
                document.getElementById("save-book-step1").submit();
            }
        });
    }
    function t(e, t) {
        t.parent().is(".mda-form-control") ? e.insertAfter(t.parent()) :t.is(":radio") || t.is(":checkbox") ? e.insertAfter(t.parent()) :e.insertAfter(t);
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = $("#save-book-step2");
        e.validate({
            errorPlacement:t,
            rules:{
                muster_roll_no:{
                    required:!0
                },
                wage:{
                    required:!0
                },
                person:{
                    required:!0
                },
                card1:{
                    required:!0
                },
                name1:{
                    required:!0
                },
                card2:{
                    required:!0
                },
                name2:{
                    required:!0
                },
                card3:{
                    required:!0
                },
                name3:{
                    required:!0
                },
                card4:{
                    required:!0
                },
                name4:{
                    required:!0
                },
                card5:{
                    required:!0
                },
                name5:{
                    required:!0
                },
                card6:{
                    required:!0
                },
                name6:{
                    required:!0
                },
                card7:{
                    required:!0
                },
                name7:{
                    required:!0
                },
                card8:{
                    required:!0
                },
                name8:{
                    required:!0
                },
                card9:{
                    required:!0
                },
                name9:{
                    required:!0
                },
                card10:{
                    required:!0
                },
                name10:{
                    required:!0
                },
                card11:{
                    required:!0
                },
                name11:{
                    required:!0
                },
                card12:{
                    required:!0
                },
                name12:{
                    required:!0
                },
                card13:{
                    required:!0
                },
                name13:{
                    required:!0
                },
                card14:{
                    required:!0
                },
                name14:{
                    required:!0
                },
                card15:{
                    required:!0
                },
                name15:{
                    required:!0
                },
                card16:{
                    required:!0
                },
                name16:{
                    required:!0
                },
                card17:{
                    required:!0
                },
                name17:{
                    required:!0
                },
                card18:{
                    required:!0
                },
                name18:{
                    required:!0
                },
                card19:{
                    required:!0
                },
                name19:{
                    required:!0
                },
                card20:{
                    required:!0
                },
                name20:{
                    required:!0
                }
            },
            submitHandler:function() {
                //console.log("Form submitted!"), window.location.href = "dashboard.html";
                document.getElementById("save-book-step2").submit();
            }
        });
    }
    function t(e, t) {
        t.parent().is(".mda-form-control") ? e.insertAfter(t.parent()) :t.is(":radio") || t.is(":checkbox") ? e.insertAfter(t.parent()) :e.insertAfter(t);
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = $("#user-lock");
        e.validate({
            errorPlacement:t,
            rules:{
                accountName:{
                    required:!0,
                    email:!0
                }
            },
            submitHandler:function() {
                console.log("Form submitted!"), window.location.href = "dashboard.html";
            }
        });
    }
    function t(e, t) {
        t.parent().is(".mda-form-control") ? e.insertAfter(t.parent()) :t.is(":radio") || t.is(":checkbox") ? e.insertAfter(t.parent()) :e.insertAfter(t);
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = $("#user-login");
        //document.getElementById("login-error").innerHTML = "";
        e.validate({
            errorPlacement:t,
            rules:{
                accountName:{
                    required:!0,
                    email:!0
                },
                accountPassword:{
                    required:!0
                }
            },
            submitHandler:function() {
                //console.log("Form submitted!");
                document.getElementById("user-login").submit();
            }
        });
    }
    function t(e, t) {
        t.parent().is(".mda-form-control") ? e.insertAfter(t.parent()) :t.is(":radio") || t.is(":checkbox") ? e.insertAfter(t.parent()) :e.insertAfter(t);
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = $("#user-recover");
        e.validate({
            errorPlacement:t,
            rules:{
                accountName:{
                    required:!0,
                    email:!0
                }
            },
            submitHandler:function() {
                console.log("Form submitted!"), e.hide(), $("#confirmation").hide().removeClass("hidden").show(500);
            }
        });
    }
    function t(e, t) {
        t.parent().is(".mda-form-control") ? e.insertAfter(t.parent()) :t.is(":radio") || t.is(":checkbox") ? e.insertAfter(t.parent()) :e.insertAfter(t);
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = $("#user-signup");
        e.validate({
            errorPlacement:t,
            rules:{
                accountName:{
                    required:!0,
                    email:!0
                },
                accountPassword:{
                    required:!0
                },
                accountPasswordCheck:{
                    required:!0,
                    equalTo:"#account-password"
                }
            },
            submitHandler:function() {
                console.log("Form submitted!"), $("#form-ok").hide().removeClass("hidden").show(500);
            }
        });
    }
    function t(e, t) {
        t.parent().is(".mda-form-control") ? e.insertAfter(t.parent()) :t.is(":radio") || t.is(":checkbox") ? e.insertAfter(t.parent()) :e.insertAfter(t);
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = $("[data-toggle-fullscreen]");
        window.jQBrowser.msie ? e.addClass("hide") :e.on("click", function(e) {
            e.preventDefault(), screenfull.enabled && screenfull.toggle();
        });
    }
    $(e);
}(), function() {
    "use strict";
    function e() {
        var e = $("[data-svg-replace]");
        e.each(function() {
            var e = $(this), t = e.data("svgReplace");
            if (!t || t.indexOf(".svg") < 0) throw "only support for SVG images";
            $.get(t).success(function(t) {
                var o = $(t).find("svg");
                o = o.removeAttr("xmlns:a"), e.replaceWith(o);
            });
        });
    }
    $(e);
}();
