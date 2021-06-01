
function hi () {
  alert('Hello, world!')
}

function joke () {
  document.getElementById('p1').innerHTML = "noones home!"
  document.getElementById('p1').style.color = "blue"
  let img = document.createElement('IMG')
  img.src = "./images/trollfacej.png"
  document.getElementById('body').appendChild(img)
}
