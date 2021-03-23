// main
axios.get('./router/about.json')
  .then(function (res) {
    $('main > ul').append(`
      <li class="map-show" id="allmap"></li>
    `)

    var map = new BMap.Map("allmap");
    var point = new BMap.Point(119.247957,26.060076);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    map.centerAndZoom(point, 20);
    map.enableScrollWheelZoom(true);
    map.addControl(top_left_control);        
    map.addControl(top_left_navigation);     
    map.addControl(top_right_navigation); 
      var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
    /*缩放控件type有四种类型:
    BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
    
    //添加控件和比例尺
      map.addControl(top_left_control);        
    map.addControl(top_left_navigation); 

    res.data.about.forEach(function (item) {
      $('main > ul .aboutText').append(`
        <p>
          <span class="iconfont ${item.icon}"></span>
          <span>${item.text}</span>
        </p>
      `)
    })
})