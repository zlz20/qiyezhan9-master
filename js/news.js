$(document).ready(function () {
  var total = 0
  function fetch(num, refetch) {
    // axios.get(`https://mock-api.com/mgvrkAgQ.mock/newsinfo?page=${num}`)
    axios
      .get(
        `https://www.fastmock.site/mock/94f343e570ed51af1945ceabda0c1104/_shop-zlz/api/zlz04?page=${num}`
      )
      .then(function (res) {
        console.log(res.data.newslis)
        res.data.newlist.forEach(function (item, key) {
          console.log(item)
          $('#newsInfo > ul').append(`
            <li>
                <a href="./newslist.html?id=${item.id}" name="${item}"><img src="${item.img}" alt=""></a>
                <div class="msg">
                  <p class="title">${item.title}</p>
                  <p class="date">${item.date}</p>
                  <p class="text">${item.text}</p>
                </div>
            </li>
        `)
        })

        total = res.data.total
        if (!refetch) {
          var page = Math.ceil(res.data.total / 8)
          $('#page ul').append(`<li id="pre"><</li>`)
          for (i = 1; i <= page; i++) {
            $('#page ul').append(`<li class="common">${i}</li>`)
          }
          $('#page ul').append(`<li id="next"">></li>`)

          $('#page ul .common:first').css({ 'background-color': '#baeffd' })
        }
      })
  }

  const refetch = (page) => {
    $('#newsInfo > ul').empty()
    fetch(page, 'refetch')

    $('#page ul')
      .children('.common')
      .each(function () {
        if (page == $(this).text()) {
          $('#page ul li').css({ background: 'white' })
          $(this).css({ 'background-color': '#baefd' })
        }
      })
  }

  const render = async () => {
    var page = 1
    await fetch(page)

    $('#page ul').on('click', '#pre', function () {
      if (page >= 2) {
        page--
        refetch(page)
      }
    })

    $('#page ul').on('click', '.common', function () {
      page = $(this).text()
      refetch(page, $(this))
    })

    $('#page ul').on('click', '#next', function () {
      if (page < total / 8) {
        page++
        refetch(page)
      }
    })
  }

  render()
})
