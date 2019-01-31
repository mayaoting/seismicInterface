<template>
    <div class="side-menu">
      <!--<button type="button" class="btn btn-success">成功</button>-->
      <div id="map" style="float: left;margin-top: 10px"></div>
      <div id="r-result" style="float: right;width: 20%"></div>
    </div>
</template>

<script>
  import BMap from 'BMap';
    export default {
        name: "index",
      data(){
          return{

        }
      },
      methods:{

      },
      mounted(){
        var map = new BMap.Map("map");
        var point = new BMap.Point(116.404, 39.915);// 创建Map实例
        map.centerAndZoom(point, 15);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]}));
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);  //开启鼠标滚轮缩放
        // window.setTimeout(function () {
        //   map.panTo(new BMap.Point(116.409,39.918))
        // },2000);
        //添加平移缩放控件
        map.addControl(new BMap.NavigationControl());
        //添加比例尺控件
        map.addControl(new BMap.ScaleControl());
        //添加缩略地图，默认在地图的右下方，是一个可折叠的缩略地图
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        // function addMarker(point,index){
        //   var myIcon = new BMap.Icon("http://http://developer.baidu.com/map/jsdemo/img/fox.gif",new BMap.Size(23,25),{
        //     anchor:new BMap.Size(10,25),
        //     imageOffset:new BMap.Size(0,0 - index * 25)
        //   });
        //   console.log(myIcon);
        //   var marker = new BMap.Marker(point,{icon:myIcon});
        //   map.addOverlay(marker);
        //   return marker;
        // }
        // var bounds = map.getBounds();
        // var lngSpan = bounds.maxX - bounds.minX;
        // var latSpan = bounds.maxY - bounds.minY;
        // for(var i=0;i<10;i++){
        //   var point = new BMap.Point(bounds.minX + lngSpan * (Math.random() * 0.7 + 0.15),
        //     bounds.minY + latSpan * (Math.random() * 0.7 + 0.15));
        //   addMarker(point,i);
        // }

        var pt = new BMap.Point(116.432, 39.930);
        var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300,157));  //定义自己的标注
        var marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
        map.addOverlay(marker);
        marker.addEventListener("click",function(){
          var opts = {
            width:250,
            height:100,
            title:"hello"
          }
          var infoWindow = new BMap.InfoWindow("World",opts);
          map.openInfoWindow(infoWindow,pt);
        });
        marker.enableDragging();
        marker.addEventListener("dragend",function (e) {
          console.log("当前位置:" + e.point.lng + "," + e.point.lat);
        })

        var polyline = new BMap.Polyline([
            new BMap.Point(116.399, 39.910),
            new BMap.Point(116.405, 39.920)
          ],
          {strokeColor:"blue", strokeWeight:12, strokeOpacity:0.5}
        );
        map.addOverlay(polyline);
        var traffic = new BMap.TrafficLayer();
        map.addTileLayer(traffic);

        //根据daboxId创建自定义图层，用户可用自己创建的geotableid替换30960
        var customLayer=new BMap.CustomLayer({
          geotableId: 30960,
          q: '', //检索关键字
          tags: '', //空格分隔的多字符串
          filter: '' //过滤条件,参考http://lbsyun.baidu.com/index.php?title=lbscloud/api/geosearch
        });
        map.addTileLayer(customLayer);
        customLayer.addEventListener('onhotspotclick',callback);//单击图层事件
        function callback(e)//单击热点图层
        {
          var customPoi = e.customPoi,  //获取poi对象
            str = [];
          str.push("address = " + customPoi.address);
          str.push("phoneNumber = " + customPoi.phoneNumber);
          var content = '<p style="width:280px;margin:0;line-height:20px;">地址：' + customPoi.address + '<br>电话：' + customPoi.phoneNumber + '</p>';
          var searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {  //带检索的信息窗口
            title: customPoi.title, //标题
            width: 290, //宽度
            height: 40, //高度
            panel : "panel", //检索结果面板
            enableAutoPan : true, //自动平移
            enableSendToPhone: true, //是否显示发送到手机按钮
            searchTypes :[
              BMAPLIB_TAB_SEARCH,   //周边检索
              BMAPLIB_TAB_TO_HERE,  //到这里去
              BMAPLIB_TAB_FROM_HERE //从这里出发
            ]
          });
          var point = new BMap.Point(customPoi.point.lng, customPoi.point.lat);
          searchInfoWindow.open(point);
        }

        var local = new BMap.LocalSearch(map, {
          renderOptions:{map: map}
        });
        local.search("景点");
        var driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, panel: "r-result", autoViewport: true}});
        driving.search("天安门", "颐和园");
      },
      created(){

      }
    }
</script>

<style scoped>
  .side-menu{
    width: auto;
    height: 100%;
    overflow-y: scroll;
  }
#map{
  height: 80%;
  width: 80%;
}
</style>
