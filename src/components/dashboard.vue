<template>
    <div class="dashboard">
      <div class="col-lg-12" style="height: 10%;padding: 0 0 0 5px;">
         <div class="login-line">
           <img style="height: 76%;margin: 11px 5px 15px 19px;float: left;"
                src="../../static/images/logo.png">
           <img style="height: 50%;margin: 19px 0px 7px -7px;width: 52%;float: left;"
                src="../../static/images/font.png">
         </div>
      </div>
      <div class="col-lg-7" style="height: 70%; padding-right: 0px">
        <div class="col-lg-12" style="height:100%;border-right:1px solid rgba(128,128,128,0.17)">
          <div class="bar" >
            <div style="letter-spacing: 2px;">
              台站分布图 <span style="font-size: 11px;color: gray;">Device Distribute</span>
            </div>
          </div>
          <div class="map" id="map"></div>
        </div>
      </div>
      <div class="col-lg-5" style="height: 70%;border-bottom: 1px solid rgba(128, 128, 128, 0.17)">
        <img src="../../static/images/titleBk.png" >
        <div class="col-lg-12 lxTitle" >
          连续率排行</div>
        <div class="col-lg-6" style="height: 65%;padding: 0px">
          <div id="barChart1"></div>
        </div>
        <div class="col-lg-6" style="height: 65%;padding: 0px">
          <div id="barChart2"></div>
        </div>
        <div class="col-lg-6" style="height: 35%;padding: 0px">
          <div class="chartH"><div class="chartH1">近7日连续率</div> <span class="chartH2">Recent 7 Days Continuity</span></div>
          <div id="lineChart"></div>
        </div>
        <div class="col-lg-6" style="height: 35%">
          <div class="chartH"><div class="chartH1">近7日连续率状态 <span style="font-size: 11px;color: #a5a5a5;"> Continuity Status</span></div></div>
          <div id="areaChart"></div>
        </div>
      </div>
      <div class="col-lg-7" style="height: 20%;padding-right: 0px">
        <div class="col-lg-4 block" style="height: 100%;">
          <div class="widget widget-stats bg-gradient-head1">
            <div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
            <div class="stats-content">
              <div class="stats-title" style="margin-bottom: 9px;">当前设备情况</div>
              <div class="stats-number" style="margin-bottom: 13px;font-size: 26px;text-align: center">
                <div style="position: absolute;font-size: 17px;line-height: 50px;">台网</div>
                <ul class="runNum" id="onlineNum" style="float: left;text-align: right">4</ul>
                <span style="float: left;width: 10%;font-size: 33px">/</span>
                <ul class="runNum" style="float: left">
                  <div style="float:left" id="totalNum">
                    --
                  </div>
                </ul>
                <div style="position: absolute;font-size: 17px;line-height: 50px;right:0px">台站</div>
              </div>
              <div style="clear: both"></div>
              <div class="stats-desc">平台已接入吉林省，辽宁省，黑龙江省和内蒙古自治区的实时流数据</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 block" style="height: 100%;">
          <div class="widget widget-stats bg-gradient-head2" style="padding: 0px">
            <div class="stats-icon stats-icon-lg"><i class="fa fa-indent" style="font-size: 130px;right: -26px;"></i>
            </div>
            <div class="stats-content">
              <div class="widget widget-stats bg-gradient-head2">
                <div class="stats-icon stats-icon-lg">
                  <i class="fa fa-indent" style="font-size: 130px;right: -26px;"></i>
                </div>
                <div class="stats-content">
                  <div class="stats-title">接收数据总数</div>
                  <div class="stats-number" style="font-size: 20px;margin:25px 0"><span
                    id="receiveNum">--</span> 条
                  </div>
                  <div class="stats-desc">平台运行时期共接收数据条数</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 block" style="height: 100%;">
          <div class="widget widget-stats bg-gradient-head5" style="padding: 0px;background-color: grey">
            <div class="stats-content" style="margin: 15px">
              <div class="stats-title">实时接收数据包</div>
              <div class="stats-number" style="font-size: 37px">
                <span id="realReceiveNum">689</span>
                <small style="font-weight: 500;    font-size: 24px;">包/秒</small>
              </div>
              <div class="stats-desc">平台对外提供接口服务次数</div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-lg-5" style="height: 20%;">
        <div class="col-lg-5" style="padding: 10px 0px 34px 0px;height: 100%" id="map-container">
          <iframe id="iframe" runat="server"
                  width="100%" height="100%" frameborder="no" border="0"
                  marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" ></iframe>
        </div>
        <div class="col-lg-7">
          <div class="seismicMag"><div class="magIcon">震级</div>4.9</div>
          <div class="seismicTitle">乾安县 地震</div>
          <div class="seismicContent"><i class="icon iconfont icon-xiazai18"></i> 坐 标：124.1,44.7</div>
          <div class="seismicContent"><i class="icon iconfont icon-xiazai18"></i> 范围：20121平方公里</div>
          <div class="seismicContent"><i class="icon iconfont icon-iconcity"></i> 发震地：吉林省松原市乾安县</div>
          <div class="seismicContent"><i class="icon iconfont icon-timer"></i> 速报时间：2013-11-03 12:26:54</div>
        </div>
      </div>
    </div>
</template>

<script>
  import "../../static/common/mapv"
  import "../../static/common/china"
  import "../../static/common/jilin"
  import "../../static/common/countUp"
  import "../../static/common/numAnimate"
  require('../../static/common/flot/jquery.flot');

    export default {
      name: "dashboard",
      data() {
        return {
          url:"../../static/data/getDeviceCount.json",
          initChinaMap:'',
          initChart:'',
          initLineChart:'',
          queryRateSort:'',
          rateSort:''
        }
      },
      methods: {
        getData(){
          this.$axios.get(this.url)
            .then(res=>{
              // console.log(res.data.mapData);
              this.initChinaMap(res.data.mapData);
              this.initChart(res.data.lxl_list);
              this.initLineChart(res.data.continuityList);
              $('#totalNum').html(res.data.mapData.lenght - 3);
              this.rateSort = res.data.cList;
              console.log(this.rateSort);
              this.queryRateSort(0);
            })
            .catch(error=>{
              console.log(error);
            })


        },
        draw(){

        },
      },
      mounted() {
        // this.$axios.get("../../static/data/json/HL.json")
        //   .then(res=>{
        //     console.log(res);
        //   })
        this.draw();
        this.getData();
        //地图中的扇形图近七日连续率状态
        this.initChart = function initChart(res) {
          var rich = {
            area: {
              color: '#515151',
              fontSize: 12,
              lineHeight: 20,
              fontWeight:900,
              align: 'center'
            },
            per: {
              color: '#7f7e7e',
              align: 'center',
              fontSize: 12
            }
          };
          var placeHolderStyle = {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              color: 'rgba(0, 0, 0, 0)',
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 0
            }
          };
          var data = [];
          var inter = parseInt(res[0].value * 0.2)
          for (var i = 0; i < res.length; i++) {
            data.push({
              value: parseInt(res[i].value),
              name: res[i].name,
              itemStyle: {
                normal: {
                  borderWidth: 6,
                  shadowBlur: 5,
                  borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: '#8ac1dc'
                  }, {
                    offset: 1,
                    color: '#2db6fc'
                  }]),
                  shadowColor: 'rgba(142, 152, 241, 0.6)'
                }
              }
            }, {
              value: inter,
              name: '',
              itemStyle: placeHolderStyle
            });
          }

          var areaOption = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
              show: false
            },
            graphic: {
              elements: [{
                type: 'image',
                style: {
                  image: "../../static/images/data.png",
                  width: 50,
                  height: 50
                },
                left: '41.5%',
                top: '39%'
              }]
            },
            legend: {
              show: false
            },
            toolbox: {
              show: false
            },
            series: {
              name: '',
              type: 'pie',
              clockWise: false,
              radius: [60, 65],
              center: ['50%', '50%'],
              hoverAnimation: false,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'outside',
                    color: 'black',
                    formatter: function (params) {
                      var percent = 0;
                      var total = 0;
                      for (var i = 0; i < res.length; i++) {
                        total += parseInt(res[i].value);
                      }
                      percent = ((params.value / total) * 100).toFixed(0);
                      if (params.name !== '') {
                        return '{area|' + '' + params.name + '}';
                      } else {
                        return '';
                      }
                    },
                    rich: rich
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              data: data
            }
          }

          var areaChart = this.$echarts.init(document.getElementById('areaChart'));
          areaChart.setOption(areaOption);
        }
        //初始化echarts实例
        //加载全国地图
        var mapChart = this.$echarts.init(document.getElementById('map'));
        this.initChinaMap = function initChinaMap(res) {
          var optionMap = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
              trigger: 'item'
            },
            visualMap: {
              min: -10,
              max: 150,
              left: 'left',
              top: 'bottom',
              text: ['高', '低'],
              color: ['#409cff', 'white'],
              calculable: true,
              show: false
            },
            geo: {
              show: true,
              map: 'china',
              zoom: 1.17,
              center: [105, 36],
              roam: false,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false,
                }
              },
              itemStyle: {
                normal: {
                  areaColor: 'transparent',
                  borderColor: '#54adeec2',
                  borderWidth: 2,
                  shadowColor: '#39abfec9',
                  shadowBlur: 8
                }
              }
            },
            //配置属性
            series: [
              {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: res,
                symbol: "triangle",
                symbolSize: 2,
                itemStyle: {
                  borderColor: "#5e8beb",
                  borderWidth: 3
                },
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false
                  },
                  formatter: '台站编码: {@name} 名称:{@name}'
                },
                tooltip: {
                  trigger: 'item',
                  formatter: function (params, ticket, callback) {
                    var tip = "台站编号：" + params.data.sta_code + " <br>" +
                      "名称：" + params.data.name + "<br>" +
                      "网络：" + params.data.net_status + "<br>" +
                      "负责人：" + params.data.sta_link + "<br>" +
                      "连续率：" + params.data.rate + "%"
                    return tip;
                  }
                }
              },
              {
                name: '数据',
                type: 'map',
                mapType: 'china',
                roam: true,
                zoom: 1.17,
                center: [105, 36],
                roam: false,
                tooltip: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 1,
                  },
                  emphasis: {
                    areaColor: '#409cff',
                  }
                },
                label: {
                  normal: {
                    show: false  //省份名称
                  },
                  emphasis: {
                    show: false
                  }
                },
                data: [
                  {name: "北京", value: 177},
                  {name: "天津", value: 42},
                  {name: "河北", value: 102},
                  {name: "山西", value: 81},
                  {name: "内蒙古", value: 47},
                  {name: "辽宁", value: 67},
                  {name: "吉林", value: 82},
                  {name: "黑龙江", value: 66},
                  {name: "上海", value: 24},
                  {name: "江苏", value: 92},
                  {name: "浙江", value: 114},
                  {name: "安徽", value: 109},
                  {name: "福建", value: 116},
                  {name: "江西", value: 91},
                  {name: "山东", value: 119},
                  {name: "河南", value: 137},
                  {name: "湖北", value: 116},
                  {name: "湖南", value: 114},
                  {name: "重庆", value: 91},
                  {name: "四川", value: 125},
                  {name: "贵州", value: 62},
                  {name: "云南", value: 83},
                  {name: "西藏", value: 20},
                  {name: "陕西", value: 80},
                  {name: "甘肃", value: 56},
                  {name: "青海", value: 52},
                  {name: "宁夏", value: 18},
                  {name: "新疆", value: 67},
                  {name: "广东", value: 123},
                  {name: "广西", value: 59},
                  {name: "海南", value: 62}
                ]
              }
            ]
          };
          //使用制定的配置项和数据显示图表

          mapChart.setOption(optionMap);

          // 绑定点击事件
          // 单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
          mapChart.on('click', function (params) {
            var areaName = params.name;
            if (areaName == "吉林" || areaName == "辽宁" || areaName == "黑龙江" || areaName == "内蒙古") {
              initAreaMap(params.name, res);
              console.log(params.name);
              console.log(areaName);
            } else if (params.data != null && params.data.net_code != null) {
              initAreaMap(params.data.net_code, res);
            } else {
              alert('无此区域地图显示');
            }
          });
        };
        // 近七日连续率图
        this.initLineChart = function initLineChart(data){
//        console.log(data)
          var xData = new Array();
          var devsData = new Array();
          var rateData = new Array();
          var shadowData = new Array();
          for(var i in data){
            xData.push(data[i].formatDate)
            if(data[i].changeRate<0){
              devsData.push(0-data[i].changeRate)
            }else{
              devsData.push(data[i].changeRate)
            }
            rateData.push(data[i].continuity)
            shadowData.push(100)
          }

          var maxDevs = 100;

          var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#283b56'
                }
              }
            },
            grid: {
              top: "32%",
              bottom: "20%",
              right: "15%",
              left: "14%"
            },
            legend: {
              data: ['连续率', '变化率'],
              right: 70,
              top: 30
            },
            toolbox: {
              show: false
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: true,
                data: xData,
                axisLine: {
                  lineStyle: {
                    color: '#8a8888'
                  }
                },
                axisTick: {
                  lineStyle: {
                    color: '#8a8888'
                  }
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '完整率',
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                  formatter: '{value} %',
                  textStyle: {
                    color: '#8a8888'
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: '#8a8888'
                  }
                },
                axisTick: {
                  lineStyle: {
                    color: '#8a8888'
                  }
                }
              },
              {
                type: 'value',
                name: '数量',
                min: 0,
                max: function (value) {
                  return value.max + Math.ceil(value.max * 0.4);
                },
                splitLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: '#8a8888'
                  },
                  formatter: function (value, index) {
                    //仅显示整数标签
                    if (value % 1 === 0) {
                      return value + "%";
                    }
                  }
                }, axisLine: {
                  lineStyle: {
                    color: '#999'
                  }
                },
                axisTick: {
                  lineStyle: {
                    color: '#999'
                  }
                }
              }
            ],
            series: [
              { // For shadow
                type: 'bar',
                itemStyle: {
                  normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: shadowData,
                animation: false
              },
              {
                name: '连续率',
                type: 'line',
                data: rateData,
                smooth: true,
                showSymbol: false,
                lineStyle: {
                  normal: {
                    width: 3,
                    color: '#66d6b4',
                    shadowColor: 'rgba(0,0,0,0.8)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#66d6b4',
                  }
                }
              },
              {
                name: '变化率',
                type: 'bar',
                yAxisIndex: 1,
                data: devsData,
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {
                          offset: 0,
                          color: '#2584ff' // 0% 处的颜色
                        }, {
                        offset: 1,
                        color: '#3dc0e9' // 100% 处的颜色
                      }
                      ]
                    )
                  }
                }
              }
            ]
          };

          var lineChart = this.$echarts.init(document.getElementById('lineChart'));
          lineChart.setOption(option);
        }
        //地图
        let that = this;
        function initAreaMap(areaName, res) {
          console.log(111111);
          console.log(res);
          var areaEname = "";
          var center, areaCenter1, areaCenter2;
          if (areaName == "吉林" || areaName == "JL") {
            areaEname = "JL"
            center = [125.460946, 43.809359]
            areaCenter1 = [126.55, 44.05]
            areaCenter2 = [126.5, 44]
          } else if (areaName == "黑龙江" || areaName == "HL") {
            areaEname = "HL"
            center = [126.680081, 45.751911]
            areaCenter1 = [125.9, 48.85]
            areaCenter2 = [126, 48.7]
          } else if (areaName == "辽宁" || areaName == "LN") {
            areaEname = "LN"
            center = [123.42453, 41.857656]
            areaCenter1 = [123.03, 41.07]
            areaCenter2 = [123, 41]
          } else if (areaName == "内蒙古" || areaName == "NM") {
            areaEname = "NM"
            center = [111.691488, 40.84145]
            areaCenter1 = [111.05, 45.15]
            areaCenter2 = [111, 45]
          }
          mapChart.clear();

//        整理数据
          var moveLine = new Array()
          var points = new Array()
          for (var i in res) {
            if (res[i].net_code == areaEname && res[i].value[0] > 0) {
              var staInfo = res[i];
              var line = {
                "fromName": staInfo.sta_code,
                "toName": areaName + "地震局",
                "point": res[i],
                "coords": [[staInfo.value[0], staInfo.value[1]], center]
              }
              moveLine.push(line);
              points.push(res[i])
            }
          }
          $.get('../../static/data/json/' + areaEname + ".json", function (data) {
            console.log(data);
            that.$echarts.registerMap(areaEname, data) //注册
            var value = [32, 12, 42, 51, 25, 63, 23, 53, 24, 78, 32, 45, 21, 35, 67, 32, 53, 26, 21]
            var cityData = []
            // console.log(data.features);
            for (var i in data.features) {
              cityData.push({
                name: data.features[i].properties.name,
                value: value[i]
              })
            }
            var option = {
              visualMap: {
                min: -20,
                max: 70,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],
                color: ['#409cff', 'white'],
                calculable: true,
                show: false
              },
              tooltip: {
                trigger: 'item'
              },
              geo: {
                type:'map',
                show: true,
                map: areaEname,
                center: areaCenter1,
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false,
                  }
                },
                roam: false,
                itemStyle: {
                  normal: {
                    areaColor: 'transparent',
                    borderColor: '#54adeec2',
                    borderWidth: 4,
                    shadowColor: '#39abfec9',
                    shadowBlur: 20
                  }
                }
              },
              series: [
                {
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  data: points,
                  symbol: "triangle",
                  symbolSize: 2,
                  itemStyle: {
                    borderColor: "#5e8beb",
                    borderWidth: 3
                  },
                  label: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: false
                    },
                    formatter: '台站编码: {@name} 名称:{@name}'
                  },
                  tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                      var tip = "台站编号：" + params.data.sta_code + " <br>" +
                        "名称：" + params.data.name + "<br>" +
                        "网络：" + params.data.net_status + "<br>" +
                        "负责人：" + params.data.sta_link + "<br>" +
                        "连续率：" + params.data.rate + "%"
                      return tip;
                    }
                  }

                },
                {
                  name: '数据',
                  type: 'map',
                  mapType: areaEname,
                  center: areaCenter2,
                  roam: false,
                  tooltip: {
                    show: false
                  },
                  itemStyle: {
                    normal: {
                      borderColor: 'rgba(0,0,0,0)',
                      borderWidth: 1,
                    },
                    emphasis: {
                      areaColor: '#409cff',
                    }
                  },
                  label: {
                    normal: {
                      show: false  //名称
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  data: cityData
                },
                {
                  name: '线路',
                  type: 'lines',
                  coordinateSystem: 'geo',
                  center: center,
                  zlevel: 2,
                  large: true,
                  tooltip: {
                    show: true
                  },
                  roam: false,
                  effect: {
                    show: true,
                    constantSpeed: 30,
                    symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                    symbolSize: 6,
                    trailLength: 0,
                  },
                  tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                      var tip = "台站编号：" + params.data.point.sta_code + " <br>" +
                        "名称：" + params.data.point.name + "<br>" +
                        "网络：" + params.data.point.net_status + "<br>" +
                        "负责人：" + params.data.point.sta_link + "<br>" +
                        "连续率：" + params.data.point.rate + "%"
                      return tip;
                    }
                  },
                  lineStyle: {
                    normal: {
                      color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2d5aff' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#005bffd1' // 100% 处的颜色
                      }], false),
                      width: 1,
                      opacity: 0.3,
                      curveness: 0.2
                    }
                  },
                  data: moveLine
                }

              ]
            };
            mapChart.setOption(option);
            mapChart.off('click');
            mapChart.on('click', function (params) {
              mapChart.clear();
              that.initChinaMap(res)
            });
          })
        }
        that.queryRateSort = function queryRateSort(pageNum) {
          var totalPageNum = that.rateSort.length / 10;
          if (that.rateSort.length % 10 != 0) {
            totalPageNum = parseInt(totalPageNum) + parseInt(1)
          }
          if (pageNum > totalPageNum) {
            alert("异常错误，页码大于总页数")
            return false;
          }

          var pageSize = 18;
          var showData1 = new Array()
          var showData2 = new Array()
          var end = (pageNum + 1) * pageSize
          if (end > that.rateSort.length) {
            end = that.rateSort.length
          }

          for (var i = pageNum * pageSize; i < end; i++) {
            if (i < (pageNum * 10 + pageSize / 2)) {
              showData1.push(that.rateSort[i]);
            } else {
              showData2.push(that.rateSort[i]);
            }
          }

          initBarChart(showData1, "barChart1")
          console.log("showdata1");
          console.log(showData1);
          initBarChart(showData2, "barChart2")

        }

        function initBarChart(data, id) {
          console.log(2222);
          console.log(data);
          var paiming = new Array()
          var percent = new Array()
          var stafs = new Array()

          for (var i = data.length - 1; i >= 0; i--) {
            paiming.push(data[i].index)
            percent.push(data[i].continuity)
            stafs.push(data[i])
          }

          var grayBar = [100, 100, 100, 100, 100, 100, 100, 100, 100];
//        var paiming = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//        var percent = [0.333, 0.444, 0.555, 0.777, 0.777, 0.777, 0.888, 0.888, 0.888, 0.922];
//        var city = ['【黑龙江】白山台 ', '【吉林】长白山    ', '【内蒙古】延边台    ', '【黑龙江】白山台      ', '【黑龙江】白山台      ', '【黑龙江】白山台      ', '【辽宁】长岭台      ', '【黑龙江】铁岭   ', '【黑龙江】铁岭   ', '【黑龙江】铁岭   ', '【吉林】长白山 '];
          var option = {
            grid: {
              top: '13%',
              bottom: "3%",
              left: "5%",
              right: "5%"
            },
            xAxis: [{
              show: false,
            }, {
              show: false,
            }
            ],
            yAxis: {
              type: 'category',
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false //隐藏Y轴刻度
              },
              axisLine: {
                show: false //隐藏Y轴线段
              },
              data: paiming,
            },
            series: [
              //背景色--------------------我是分割线君------------------------------//
              {
                show: true,
                type: 'bar',
                barGap: '-100%',
                barWidth: '40%', //统计条宽度
                itemStyle: {
                  normal: {
                    barBorderRadius: 5,
                    color: 'rgba(102, 102, 102,0.25)'
                  },
                },
                z: 1,
                data: grayBar,
              },
              //蓝条--------------------我是分割线君------------------------------//
              {
                show: true,
                type: 'bar',
                barGap: '-100%',
                barWidth: '40%', //统计条宽度
                itemStyle: {
                  normal: {
                    barBorderRadius: 6, //统计条弧度
                    color: {
                      colorStops: [{
                        offset: 0,
                        color: '#2584ff' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#3dc0e9' // 100% 处的颜色
                      }],
                      globalCoord: false, // 缺省为 false

                    }
                  },
                },
                max: 1,
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: '#fff', //百分比颜色
                    },
                    position: 'inside',
                    //百分比格式
                    formatter: function (data) {
                      return percent[data.dataIndex] + '%';
                    },
                  }
                },
                labelLine: {
                  show: false,
                },
                z: 2,
                data: percent,
              },
              //数据条--------------------我是分割线君------------------------------//
              {
                show: true,
                type: 'bar',
                xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
                barGap: '-100%',
                barWidth: '40%', //统计条宽度
                itemStyle: {
                  normal: {
                    barBorderRadius: 5,
                    color: 'rgba(22,203,115,0.05)'
                  },
                },
                label: {
                  normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: [0, '-90%'],
                    rich: { //富文本
                      black: { //自定义颜色
                        color: '#000',
                      },
                      blue: {
                        color: '#2584ff',
                        fontWeight: 1000
                      }
                    },
                    formatter: function (data) {
                      //富文本固定格式{colorName|这里填你想要写的内容}
                      var netCode = stafs[data.dataIndex].netCode;
                      if(netCode=="JL"){
                        netCode = "吉林"
                      }else if(netCode=="NM"){
                        netCode = "内蒙"
                      }else if (netCode=="LN"){
                        netCode = "辽宁"
                      }else if(netCode=="HL"){
                        netCode = "黑龙江"
                      }

                      var staName;
                      if (stafs[data.dataIndex].staInfo != null) {
                        if (stafs[data.dataIndex].staInfo.cname != null && stafs[data.dataIndex].staInfo.cname != "") {
                          staName = stafs[data.dataIndex].staInfo.cname;
                        } else if (stafs[data.dataIndex].staInfo.staCode != null && stafs[data.dataIndex].staInfo.staCode != "") {
                          staName = stafs[data.dataIndex].staInfo.staCode;
                        } else {
                          staName = stafs[data.dataIndex].staCode
                        }
                      } else {
                        staName = stafs[data.dataIndex].staCode
                      }

                      return '【 {black|' + paiming[data.dataIndex] + ' 【 ' + netCode + '】-- '+staName+'} 】' +
                        '{black|连续率: }{blue|' + percent[data.dataIndex] + '%}';
                    }
                  }
                },
                data: percent
              }

            ]
          };

          var barChart = that.$echarts.init(document.getElementById(id));
          barChart.setOption(option);
        }

        //更新统计信息
//         var countCache;
//         var totalNumAnimate;
//         function updateCount() {
//           $.ajax({
//             url: "${ctx}/index/getIndexCount",
//             type: 'GET',
//             dataType: 'json',
//             success: function (res) {
//               // console.log(res)
//               if (res.status == "success") {
//                 if (countCache == null) {
//                   countCache = res;
//                   //总数统计
//                   totalNumAnimate = new CountUp("receiveNum", 0, res.receiveDataNum, 0, 5);
//                   totalNumAnimate.start();
// //                        $("#onlineDay").html(res.runningDays)
//                 }
//
//                 if (res.receiveDataNum != countCache.receiveDataNum) {
//                   //更新接收数据总数
//                   totalNumAnimate = new CountUp("receiveNum", countCache.receiveDataNum, res.receiveDataNum, 0, 2);
//                   totalNumAnimate.start();
//                 }
//
//                 if (res.runningDays != countCache.runningDays) {
//                   //更新在线时长
//                   $("#onlineDay").html(res.runningDays)
//                 }
//
//                 countCache = res;
//
//                 setTimeout(function () {
//                   updateCount()
//                 }, 1500);
//
//               } else {
//                 //2秒后重试
//                 setTimeout(function () {
//                   updateCount()
//                 }, 2000);
//               }
//             }
//           });
//         }

        //实时波动图
//         var indataRate = 0;
//         var processDataRate = 0;
//         var indataRateArray = new Array();
//         var processDataArray = new Array();
//         var realIndataChart = that.$echarts.init(document.getElementById('realIndataChart'));
//         function initRealTimeIndataChart() {
//           //先获取最近2分钟的数据，作为默认数据
//           $.ajax({
//             url: "${ctx}/index/getRecent2minData",
//             type: 'GET',
//             dataType: 'json',
//             success: function (res) {
// //                console.log(res)
//               if (res.status == "success") {
//                 //生成最近120秒的时间
//                 var nowTime = new Date();
//                 //生成最近120秒数据
//                 for (var i = 60; i > 0; i--) {
//                   var time = nowTime.getTime() - 1000 * i
//                   indataRateArray.push({
//                     value: [new Date(time), res.indataRate[i]]
//                   })
//                 }
//
//                 indataRate = res.indataRate[59]
//                 processDataRate = res.processRate[59]
//
//                 if (indataRate == 0) {
//                   indataRate = 1;
//                 }
//                 if (processDataRate == 0) {
//                   processDataRate = 1;
//                 }
//
//                 var realIndataOption = {
//                   legend: {
//                     show: false
//                   },
//                   backgroundColor: '#fff0',
//                   color: ['#abb9de', '#8fcbd9'],
//                   tooltip: {
//                     trigger: 'axis',
//                     axisPointer: {
//                       animation: false
//                     }
//                   },
//                   grid: {
//                     show: true,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     top: 0,
//                     backgroundColor: 'transparent',
//                     borderColor: 'transparent'
//                   },
//                   xAxis: {
//                     type: 'time',
//                     nameGap: '20',
//                     nameRotate: 50,
//                     axisLine: {
//                       show: false
//                     },
//                     axisTick: {
//                       show: false
//                     },
//                     axisLabel: {
//                       show: false
//                     },
//                     splitLine: {
//                       show: false
//                     }
//                   },
//                   yAxis: {
//                     type: 'value',
//                     boundaryGap: [0, 2.5],
//                     axisLine: {
//                       show: false
//                     },
//                     axisLabel: {
//                       showMinLabel: false
//                     },
//                     axisTick: {
//                       show: false
//                     },
//                     splitLine: {
//                       show: false
//                     }
//                   },
//                   series: [{
//                     name: '数据接收速率（包/秒）',
//                     type: 'line',
//                     connectNulls: true,
//                     showSymbol: false,
//                     hoverAnimation: false,
//                     lineStyle: {
//                       width: 0
//                     },
//                     areaStyle: {
//                       color: {
//                         type: 'linear',
//                         x: 0,
//                         y: 0,
//                         x2: 0,
//                         y2: 1,
//                         colorStops: [{
//                           offset: 0, color: '#adababd1' // 0% 处的颜色
//                         }, {
//                           offset: 1, color: '#4c4c4cdb' // 100% 处的颜色
//                         }],
//                         globalCoord: false // 缺省为 false
//                       },
//                       opacity: 0.7
//                     },
//                     smooth: true,
//                     data: indataRateArray
//                   }, {
//                     name: '数据处理速率（包/秒）',
//                     connectNulls: true,
//                     type: 'line',
//                     showSymbol: false,
//                     hoverAnimation: false,
//                     smooth: true,
//                     lineStyle: {
//                       width: 0
//                     },
//                     areaStyle: {
//                       color: {
//                         type: 'linear',
//                         x: 0,
//                         y: 0,
//                         x2: 0,
//                         y2: 1,
//                         colorStops: [{
//                           offset: 0, color: '#20acbbeb' // 0% 处的颜色
//                         }, {
//                           offset: 1, color: '#1a7bb3' // 100% 处的颜色
//                         }],
//                         globalCoord: false // 缺省为 false
//                       },
//                       opacity: 0.7
//                     },
//                     data: processDataArray
//                   }],
//                   animation: false
//                 };
//                 realIndataChart.setOption(realIndataOption);
//
//                 setInterval(function () {
//                   updateIndataChart()
//                 }, 1000);
//
//
//               } else {
//                 //2秒后重试
//                 setTimeout(function () {
//                   initRealTimeIndataChart()
//                 }, 2000);
//               }
//             }
//           });
//
//           //每秒根据既定值，增减一定随机数，以生成波动图。 每2秒更新一次固定值
//         }

        // function updateIndataChart() {
        //   indataRate = 120;
        //   processDataRate = 120
        //
        //   if (indataRate > 10) {
        //     //更新数据
        //     indataRateArray.shift();
        //     var value = indataRate * (Math.random() * 0.2 + 1);
        //     $("#realReceiveNum").html(value.toFixed(0))
        //     indataRateArray.push({value: [new Date(), value.toFixed(0)]});
        //     realIndataChart.setOption({
        //       series: [{
        //         data: indataRateArray
        //       }, {
        //         data: processDataArray
        //       }]
        //     })
        //   }
        // }
      }
  }

</script>

<style scoped>
  .dashboard{
    width: auto;
    height: 100%;
  }
  .login-line {
    border-radius: 2px;
    width: 100%;
    height: 90px;
    float: left;
    margin: 0px;
    background: rgb(16, 106, 222)
  }
  .bar{
    height: 60px;
    margin-left: 30px;
    margin-top: 25px;
    font-size: 18px;
    background-color: #f4f4f4;
    padding: 16px 22px;
    position: absolute;
    text-align: left;
  }
  .map,.chart{
    /*display: block;*/
    position: absolute;
    /*width: 500px;*/
    /*height: 500px;*/
    width: 100%;
    height: 100%;
  }
   .widget.widget-stats {
     position: relative;
     color: #fff;
     padding: 15px;
     border-radius: 3px;
     overflow: hidden;
   }

  .bg-gradient-head1 {
    /*background-color: #2567d2cf;*/
    /*background: -webkit-linear-gradient(left, #565db0, #417ccf);*/
    /*background: -o-linear-gradient(right, #565db0, #417ccf);*/
    /*background: -moz-linear-gradient(right, #565db0, #417ccf);*/
    background: linear-gradient(to right, #226fd2d4, #5087d1);
  }

  .widget-stats .stats-icon.stats-icon-lg {
    font-size: 128px;
    top: 15px;
    right: 0;
    color: #fff;
    width: 128px;
    height: 50px;
    line-height: 50px;
    text-shadow: 3px 7px rgba(0, 0, 0, .25);
  }

  .widget-stats .stats-icon {
    font-size: 42px;
    height: 56px;
    width: 56px;
    text-align: center;
    line-height: 56px;
    margin-left: 15px;
    color: #000;
    position: absolute;
    right: 15px;
    top: 15px;
    opacity: .15;
  }

  .widget-stats .stats-icon.stats-icon-lg i {
    text-shadow: 6px 7px 3px #252222;
  }

  .widget-stats .stats-content, .widget-stats .stats-icon.stats-icon-lg i {
    position: relative;
  }

  .widget.widget-stats {
    position: relative;
    color: #fff;
    padding: 15px;
    border-radius: 3px;
    overflow: hidden;
  }

  .widget-stats .stats-title {
    position: relative;
    margin: 0 0 7px;
    font-size: 18px;
    letter-spacing: 1px;
  }

  .widget-stats .stats-number {
    font-size: 24px;
    margin-bottom: 17px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .runNum {
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    position: relative;
    width: 45%;
  }

  .widget-stats .stats-progress {
    background: rgba(0, 0, 0, 0.29);
    height: 3px;
    margin: 0 0 15px;
    border-radius: 3px;
  }

  .widget.widget-stats {
    position: relative;
    color: #fff;
    padding: 15px;
    border-radius: 3px;
    overflow: hidden;
  }

  .bg-gradient-head2 {
    background-color: #1ab394;
    background: -webkit-linear-gradient(left, #1eacbb, #1ec3a1);
    background: -o-linear-gradient(right, #1eacbb, #1ec3a1);
    background: -moz-linear-gradient(right, #1eacbb, #1ec3a1);
    background: linear-gradient(to right, #1eacbb, #1ec3a1);
  }

  .widget-stats .stats-icon.stats-icon-lg {
    font-size: 128px;
    top: 15px;
    right: 0;
    color: #fff;
    width: 128px;
    height: 50px;
    line-height: 50px;
    text-shadow: 3px 7px rgba(0, 0, 0, .25);
  }

  .widget-stats .stats-icon {
    font-size: 42px;
    height: 56px;
    width: 56px;
    text-align: center;
    line-height: 56px;
    margin-left: 15px;
    color: #000;
    position: absolute;
    right: 15px;
    top: 15px;
    opacity: .15;
  }

  .runNum > li {
    list-style: none;
    width: 40px;
    float: left;
    position: absolute;
  }
  .seismicTitle{
    font-size: 20px;
    font-weight: 700;
    padding: 10px 10px 5px 5px;
  }
  .seismicContent{
    padding: 3px 0px;
    font-size: 13px;
  }
  .seismicMag{
    position: absolute;
    right: 0;
    padding: 10px;
    font-size: 50px;
    color: #106ade;

  }
  .magIcon{
    font-size: 14px;
    color: grey;
  }
  .forum-item.active .fa {
    color: #2584ff;
    font-size: 32px;
    margin-left: -2px;
    margin-top: 15px;
  }

  .forum-item.active a.forum-item-title {
    color: #2584ff;
    font-size: 20px;
    text-align: left;
    letter-spacing: 3px;
  }

  .forum-item.active a.forum-item-title {
    color: #2584ff;
    font-size: 21px;
    text-align: left;
    letter-spacing: 3px;
  }

  .forum-item .forum-sub-title {
    color: rgb(153, 153, 153);
    margin-left: 0px;
    font-size: 12px;
    text-align: left;
    margin-top: 5px;
  }

  .forum-item.active .col-md-2 {
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  .views-number {
    font-size: 27px;
  }

  .forum-item small {
    font-size: 17px;
  }

  #barChart1, #barChart2, #lineChart, #areaChart {
    width: 100%;
    height: 100%;
  }

  .block {
    padding: 10px 10px 0px 10px
  }

  .about-history {
    height: 100%;
    padding: 0px;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .about-title {
    margin-bottom: 25px;
  }

  .about-title h3 {
    margin: 0 0 10px;
    font-size: 34px;
    font-weight: 400;
    color: #2c2c2c;
  }

  .about-title p {
    margin: 0;
    font-size: 36px;
    font-weight: 300;
    color: #ECECEC;
  }

  .title-white h3 {
    color: #d6d6d6;
  }

  .title-white p {
    color: rgba(222, 222, 222, .09);
  }

  .about-history-list {
    position: relative;
    height: 100%
  }

  .about-history-list .flex-viewport {
    padding: 0px;
    height: 100%
  }

  .about-history-list .flex-viewport:before {
    position: absolute;
    top: 83%;
    right: 0;
    left: 0;
    border-top: 3px solid #C7C7C7;
    content: '';
  }

  .about-history-list .slides li {
    position: relative;
    width: 253px;
    height: 100%;
    margin-right: 17px;
  }

  .about-history-list .slides li .item {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: auto;
    padding: 0px;
    min-height: 123px;
    background-color: #fff;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
  }

  .about-history-list .slides li .item:before {
    position: absolute;
    top: auto;
    bottom: -37px;
    left: 10%;
    width: 20px;
    height: 20px;
    overflow: hidden;
    margin-left: -10px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    background-color: rgba(218, 183, 101, .6);
    content: '';
  }

  .about-history-list .slides li .item:after {
    position: absolute;
    top: auto;
    bottom: -33px;
    left: 10%;
    width: 12px;
    height: 12px;
    overflow: hidden;
    margin-left: -6px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    background-color: #DAB765;
    content: '';
  }

  .about-history-list .slides li .item h3 {
    position: absolute;
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    height: 30px;
    line-height: 30px;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #999999;
    text-align: center;
    background-color: #e2e2e2;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
  }

  .about-history-list .slides li .item h3:before {
    position: absolute;
    top: 100%;
    bottom: auto;
    left: 10%;
    margin-left: -9px;
    border-width: 18px 9px 0;
    border-color: #E2E2E2 transparent transparent;
    border-style: solid;
    content: '';
  }

  .about-history-list .slides li .item .desc {
    letter-spacing: 3px;
    line-height: 24px;
    padding: 11px;
    font-size: 14px;
    color: #fafafa;
    background: linear-gradient(to right, #4886d6d4, #4883d2);
  }

  .about-history-list .slides li .item .desc p {
    margin: 0;
  }

  .about-history-list .flex-direction-nav {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .about-history-list .flex-direction-nav a {
    position: absolute;
    top: 50%;
    width: 48px;
    height: 160px;
    line-height: 160px;
    overflow: hidden;
    margin-top: -80px;
    font-size: 50px;
    font-family: simsun;
    color: #ffffff;
    text-align: center;
  }

  .about-history-list .flex-direction-nav a.flex-prev {
    left: -48px;
  }

  .about-history-list .flex-direction-nav a.flex-next {
    right: -48px;
  }

  .about-history-swiper {
    width: 100%;
  }

  .about-history-swiper .swiper-slide .item {
    overflow: hidden;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-color: #fff;
  }

  .about-history-swiper .swiper-slide .item h3 {
    position: absolute;
    border: 1px solid #d4d4d4;
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    height: 30px;
    line-height: 30px;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #737373;
    text-align: center;
    background-color: #70b5f51c;
  }

  .about-history-swiper .swiper-slide .item .desc {
    line-height: 20px;
    padding: 10px;
    font-size: 14px;
    color: #929292;
  }

  .about-history-swiper .swiper-slide .item .desc p {
    margin: 0;
  }

  .about-history-swiper .about-history-pagination {
    position: static;
    margin-top: 10px;
  }

  .about-history-swiper .about-history-pagination .swiper-pagination-bullet {
    background: #fff;
  }

  .about-history-swiper .about-history-pagination .swiper-pagination-bullet-active {
    background: #C91523;
  }

  .chartH{
    position: absolute;
  }
  .chartH1{
    font-size: 18px;
    font-weight: bold;
    margin-top: -8px;
    margin-left: 14px;
    float: left;
  }
  .chartH2{
    float: left;
    font-size: 13px;
    color: #a5a5a5;
    margin-left: 10px;
  }
  .lxTitle{
    height: 20px;
    position: absolute;
    text-align: left;
    color: white;
    line-height: 33px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-left: 15px;
  }
  .col-lg-5 img{
    position: absolute;
    margin-left: 15px;
  }
  .nav > li > a{
    padding: 24px 20px 25px 5px;
  }

</style>
