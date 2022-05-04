let button=document.getElementById('check')
  button.onclick = function validate () {
    let adress=document.getElementById('adressInput').value
    if (/^http:\/\//.test (adress) || /^https:\/\//.test (adress)) {
      if (/\.php$/.test (adress) || /\.html$/.test (adress)) {
        alert ('OK')
      } else {
        let visible=document.getElementById('alert')
        visible.removeAttribute('hidden', 'hidden')
      }
    } else {
      let visible=document.getElementById('alert')
      visible.removeAttribute('hidden', 'hidden')
      }
  }
