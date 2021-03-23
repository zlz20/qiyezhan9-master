const id = window.location.search.split('id=')[1]
axios.get(`https://www.fastmock.site/mock/94f343e570ed51af1945ceabda0c1104/_shop-zlz/api/zlz03`)
  .then(function (res) {
    let item = res.data.newslist[id]

    $('#titleDivAA').append(`
     
    `)
    $('#infoAA').append(`
      <img src="${item.img}" alt="">
      <p>${item.text}</p>
      <p>${item.date}</p>
    `)
  })
 