$(document).ready(function () {
  // 获取团队信息
  axios.get('./router/team-info.json')
  .then(function (res) {
    res.data.team.forEach(function (item) {
      $('#team > ul').append(`
        <li>
          <div class="contentImg"><img src="http://s4.sinaimg.cn/mw690/006uWPTUgy72CNFYNjB93&690" data-src="${item.img}" alt=""></div>
          <div class="contentBox">
            <h2>${item.title}</h2>
            <p class="text">${item.text}</p>
            <hr />
            
          </div>
        </li>
      `)
    })
  })

  // 获取新闻信息
  axios.get('./router/news.json')
  .then(function (res) {
    res.data.news.forEach(function (item) {
      $('#news > ul').append(`
        <li>
          <a href="./news.html"><img src="http://s4.sinaimg.cn/mw690/006uWPTUgy72CNFYNjB93&690" data-src="${item.img}" alt=""></a>
          <p class="newsTitle">${item.title}</p>
          <hr>
          <p class="newsText">${item.text}</p>
        </li> 
      `)
    })
  })

  $(window).resize(function() {
  var imgHeight = $('.carousel .panels > a').height()
  $('.carousel .panels').height(imgHeight)
  })

  // 图片懒加载
  start();
    // 当页面开始滚动的时候，遍历图片，如果图片出现在视窗中，就加载图片
    var clock; //函数节流
    $(window).on('scroll',function(){
      if(clock){
        clearTimeout(clock);
      }
      clock = setTimeout(function(){
        start()
      },200)
    })
    
    function start(){
      $('img').not('[data-isLoading]').each(function () {
        if (isShow($(this))) {
          loadImg($(this));
        }
      })
    }


    // 判断图片是否出现在视窗的函数
    function isShow($node){
      return $node.offset().top <= $(window).height()+$(window).scrollTop();
    }

    // 加载图片的函数，就是把自定义属性data-src 存储的真正的图片地址，赋值给src
    function loadImg($img){
      $img.attr('src', $img.attr('data-src'));

      $img.attr('data-isLoading',1);
    }
})
