$(document).ready(function() {
  // footer
  axios.get('./router/about.json')
  .then(function (res) {
    res.data.about.forEach(function (item) {
      $('footer > ul').append(`
        <li>
          <a href="./about.html"><span class="iconfont ${item.icon}"></span></a><br>
          <span>${item.text}</span>
        </li> 
      `)
    })
    $('footer > ul').append(`
      <li>
        <a href="./about.html"><span><img src="./ico/ewm.svg" alt="" /></span></a><br/>
        <span>天体行星 </span>
      </li> 
    `)
  })

  $('#menu').on('click', function() {
    document.querySelector('#nav2').classList.toggle('active')
    if ($('#nav2').hasClass('active')) {
      $('#nav2').animate({ marginTop: '15px', height: '70px' }, 200)
    } else {
      $('#nav2').animate({ height: '0px', marginTop: '0px' }, 200)
    }
  })

  $(window).resize(function() {
    $('#nav2').removeClass('active')
  })
})