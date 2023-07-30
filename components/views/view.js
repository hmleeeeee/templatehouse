$(function () {
  const path = window.location.pathname
  const pathArry = path.split('/')
  const title = pathArry[pathArry.length - 2]
  const fileName = pathArry[pathArry.length - 1].replace('.html', '')

  // title
  $('title').prepend(title.toUpperCase() + ' | ')
  $('.template-title').html(title + ' : ' + '<small>' + fileName + '</small>')
})
