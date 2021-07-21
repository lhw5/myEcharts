// 柱状图1
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector('.bar1 .chart'));

  // 指定图表的配置项和数据
  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ["旅游", "教育", "游戏", "医疗", "电商", "社交", "金融"],
        axisTick: {
          alignWithLabel: true
        },
        // 控制x轴显示隐藏，希望显示
        show: true,
        // 配置刻度的颜色
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // 配置刻度的颜色
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        // y轴线条样式
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          }
        },
        // y 轴分隔线样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        // 由数据决定，在y轴中的高度
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 监听屏幕的宽度变化，让图表重新自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 柱状图2
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);

  // 4. 监听屏幕的宽度变化，让图表重新自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();


// 折线图1
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector('.line1 .chart'));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    // 图例: 如果图例不配置 data，只要下面 series 配置了name，也可以实现
    legend: {
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%
    },
    // 设置网格样式
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a', // 设置边框的颜色
      containLabel: true // 是否显示刻度
    },
    // x轴
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      boundaryGap: false  // 去除轴内间距
    },

    // y轴
    yAxis: {
      type: 'value',
      axisTick: {
        show: false  // 去除刻度
      },
      axisLabel: {
        show: true,
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    // 调色盘
    color: ['#00f2f1', '#ed3535'],

    // 图表的数据
    series: [{
      name: '新增粉丝',
      data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      type: 'line',
      smooth: true
    }, {
      name: '新增游客',
      data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      type: 'line',
      smooth: true
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 监听屏幕的宽度变化，让图表重新自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();


// 折线图2 模块制作
(function () {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },

    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30"
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "邮件营销",
        type: "line",
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          20,
          60,
          50,
          40
        ]
      },
      {
        name: "联盟广告",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [
          130,
          10,
          20,
          40,
          30,
          40,
          80,
          60,
          20,
          40,
          90,
          40,
          20,
          140,
          30,
          40,
          130,
          20,
          20,
          40,
          80,
          70,
          30,
          40,
          30,
          120,
          20,
          99,
          50,
          20
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 饼状图1
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector('.pie1 .chart'));

  // 指定图表的配置项和数据
  var option = {
    // 提示框
    tooltip: {
      trigger: 'item'
    },
    // 图例
    legend: {
      // 距离底部为0%
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "14"
      },
    },
    color: [
      'red',
      'pink',
      'green',
      'blue',
      'orange'
    ],
    // 数据项
    series: [
      {
        name: '访问来源',
        type: 'pie',
        center: ['50%', '50%'], // 设置图表在整个盒子中的位置
        radius: ['40%', '60%'], // 设置圆形的内外直径
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ]
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  // 监听屏幕的宽度变化，让图表重新自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();


// 饼形图2 地区分布模块
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 地图
// (function () {
//   var chinaGeoCoordMap = {
//     '黑龙江': [127.9688, 45.368],
//     '内蒙古': [110.3467, 41.4899],
//     "吉林": [125.8154, 44.2584],
//     '北京市': [116.4551, 40.2539],
//     "辽宁": [123.1238, 42.1216],
//     "河北": [114.4995, 38.1006],
//     "天津": [117.4219, 39.4189],
//     "山西": [112.3352, 37.9413],
//     "陕西": [109.1162, 34.2004],
//     "甘肃": [103.5901, 36.3043],
//     "宁夏": [106.3586, 38.1775],
//     "青海": [101.4038, 36.8207],
//     "新疆": [87.9236, 43.5883],
//     "西藏": [91.11, 29.97],
//     "四川": [103.9526, 30.7617],
//     "重庆": [108.384366, 30.439702],
//     "山东": [117.1582, 36.8701],
//     "河南": [113.4668, 34.6234],
//     "江苏": [118.8062, 31.9208],
//     "安徽": [117.29, 32.0581],
//     "湖北": [114.3896, 30.6628],
//     "浙江": [119.5313, 29.8773],
//     "福建": [119.4543, 25.9222],
//     "江西": [116.0046, 28.6633],
//     "湖南": [113.0823, 28.2568],
//     "贵州": [106.6992, 26.7682],
//     "云南": [102.9199, 25.4663],
//     "广东": [113.12244, 23.009505],
//     "广西": [108.479, 23.1152],
//     "海南": [110.3893, 19.8516],
//     '上海': [121.4648, 31.2891]
//   };
//   var chinaDatas = [
//     [{
//       name: '黑龙江',
//       value: 0
//     }], [{
//       name: '内蒙古',
//       value: 0
//     }], [{
//       name: '吉林',
//       value: 0
//     }], [{
//       name: '辽宁',
//       value: 0
//     }], [{
//       name: '河北',
//       value: 0
//     }], [{
//       name: '天津',
//       value: 0
//     }], [{
//       name: '山西',
//       value: 0
//     }], [{
//       name: '陕西',
//       value: 0
//     }], [{
//       name: '甘肃',
//       value: 0
//     }], [{
//       name: '宁夏',
//       value: 0
//     }], [{
//       name: '青海',
//       value: 0
//     }], [{
//       name: '新疆',
//       value: 0
//     }], [{
//       name: '西藏',
//       value: 0
//     }], [{
//       name: '四川',
//       value: 0
//     }], [{
//       name: '重庆',
//       value: 0
//     }], [{
//       name: '山东',
//       value: 0
//     }], [{
//       name: '河南',
//       value: 0
//     }], [{
//       name: '江苏',
//       value: 0
//     }], [{
//       name: '安徽',
//       value: 0
//     }], [{
//       name: '湖北',
//       value: 0
//     }], [{
//       name: '浙江',
//       value: 0
//     }], [{
//       name: '福建',
//       value: 0
//     }], [{
//       name: '江西',
//       value: 0
//     }], [{
//       name: '湖南',
//       value: 0
//     }], [{
//       name: '贵州',
//       value: 0
//     }], [{
//       name: '广西',
//       value: 0
//     }], [{
//       name: '海南',
//       value: 0
//     }], [{
//       name: '上海',
//       value: 1
//     }]
//   ];

//   var convertData = function (data) {
//     var res = [];
//     for (var i = 0; i < data.length; i++) {
//       var dataItem = data[i];
//       var fromCoord = chinaGeoCoordMap[dataItem[0].name];
//       var toCoord = [116.4551, 40.2539];
//       if (fromCoord && toCoord) {
//         res.push([{
//           coord: fromCoord,
//           value: dataItem[0].value
//         }, {
//           coord: toCoord,
//         }]);
//       }
//     }
//     return res;
//   };
//   var series = [];
//   [['北京市', chinaDatas]].forEach(function (item, i) {
//     console.log(item)
//     series.push({
//       type: 'lines',
//       zlevel: 2,
//       effect: {
//         show: true,
//         period: 4, //箭头指向速度，值越小速度越快
//         trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
//         symbol: 'arrow', //箭头图标
//         symbolSize: 5, //图标大小
//       },
//       lineStyle: {
//         normal: {
//           width: 1, //尾迹线条宽度
//           opacity: 1, //尾迹线条透明度
//           curveness: .3 //尾迹线条曲直度
//         }
//       },
//       data: convertData(item[1])
//     }, {
//       type: 'effectScatter',
//       coordinateSystem: 'geo',
//       zlevel: 2,
//       rippleEffect: { //涟漪特效
//         period: 4, //动画时间，值越小速度越快
//         brushType: 'stroke', //波纹绘制方式 stroke, fill
//         scale: 4 //波纹圆环最大限制，值越大波纹越大
//       },
//       label: {
//         normal: {
//           show: true,
//           position: 'right', //显示位置
//           offset: [5, 0], //偏移设置
//           formatter: function (params) {//圆环显示文字
//             return params.data.name;
//           },
//           fontSize: 13
//         },
//         emphasis: {
//           show: true
//         }
//       },
//       symbol: 'circle',
//       symbolSize: function (val) {
//         return 5 + val[2] * 5; //圆环大小
//       },
//       itemStyle: {
//         normal: {
//           show: false,
//           color: '#f00'
//         }
//       },
//       data: item[1].map(function (dataItem) {
//         return {
//           name: dataItem[0].name,
//           value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
//         };
//       }),
//     },
//       //被攻击点
//       {
//         type: 'scatter',
//         coordinateSystem: 'geo',
//         zlevel: 2,
//         rippleEffect: {
//           period: 4,
//           brushType: 'stroke',
//           scale: 4
//         },
//         label: {
//           normal: {
//             show: true,
//             position: 'right',
//             //offset:[5, 0],
//             color: '#0f0',
//             formatter: '{b}',
//             textStyle: {
//               color: "#0f0"
//             }
//           },
//           emphasis: {
//             show: true,
//             color: "#f60"
//           }
//         },
//         symbol: 'pin',
//         symbolSize: 50,
//         data: [{
//           name: item[0],
//           value: chinaGeoCoordMap[item[0]].concat([10]),
//         }],
//       }
//     );
//   });


//   // 基于准备好的dom，初始化echarts实例
//   var myChart = echarts.init(document.querySelector('.map .chart'));

//   // 指定图表的配置项和数据
//   var option = {
//     tooltip: {
//       trigger: 'item',
//       backgroundColor: 'rgba(166, 200, 76, 0.82)',
//       borderColor: '#FFFFCC',
//       showDelay: 0,
//       hideDelay: 0,
//       enterable: true,
//       transitionDuration: 0,
//       extraCssText: 'z-index:100',
//       formatter: function (params, ticket, callback) {
//         //根据业务自己拓展要显示的内容
//         var res = "";
//         var name = params.name;
//         var value = params.value[params.seriesIndex + 1];
//         res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
//         return res;
//       }
//     },
//     visualMap: { //图例值控制
//       min: 0,
//       max: 1,
//       calculable: true,
//       show: true,
//       color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
//       textStyle: {
//         color: '#fff'
//       }
//     },
//     geo: {
//       map: 'china',
//       zoom: 1.2,
//       label: {
//         emphasis: {
//           show: false
//         }
//       },
//       roam: true, //是否允许缩放
//       itemStyle: {
//         normal: {
//           color: 'rgba(51, 69, 89, .5)', //地图背景色
//           borderColor: '#516a89', //省市边界线00fcff 516a89
//           borderWidth: 1
//         },
//         emphasis: {
//           color: 'rgba(37, 43, 61, .5)' //悬浮背景
//         }
//       }
//     },
//     series: series
//   };

//   // 使用刚指定的配置项和数据显示图表。
//   myChart.setOption(option);

//   // 监听屏幕的宽度变化，让图表重新自适应
//   window.addEventListener('resize', function () {
//     myChart.resize()
//   })
// })();


// 模拟飞行路线模块地图模块
(function() {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: "西安" }, { name: "拉萨", value: 100 }],
    [{ name: "西安" }, { name: "上海", value: 100 }],
    [{ name: "西安" }, { name: "广州", value: 100 }],
    [{ name: "西安" }, { name: "西宁", value: 100 }],
    [{ name: "西安" }, { name: "银川", value: 100 }]
  ];

  var XNData = [
    [{ name: "西宁" }, { name: "北京", value: 100 }],
    [{ name: "西宁" }, { name: "上海", value: 100 }],
    [{ name: "西宁" }, { name: "广州", value: 100 }],
    [{ name: "西宁" }, { name: "西安", value: 100 }],
    [{ name: "西宁" }, { name: "银川", value: 100 }]
  ];

  var YCData = [
    [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
    [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
    [{ name: "银川" }, { name: "上海", value: 100 }],
    [{ name: "银川" }, { name: "西安", value: 100 }],
    [{ name: "银川" }, { name: "西宁", value: 100 }]
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
  var series = [];
  [
    ["西安", XAData],
    ["西宁", XNData],
    ["银川", YCData]
  ].forEach(function(item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function(val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: "vertical",
      top: "bottom",
      left: "right",
      data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
      textStyle: {
        color: "#fff"
      },
      selectedMode: "multiple"
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      // 把中国地图放大了1.2倍
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          // 地图省份的背景颜色
          areaColor: "rgba(20, 41, 87,0.6)",
          borderColor: "#195BB9",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();