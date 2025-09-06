document.querySelector('header .humberger').addEventListener('click', () => {
  document.querySelector('header ul').classList.toggle('open');
});

document.querySelectorAll('header ul li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('header ul').classList.remove('open');
  });
});
document.querySelector('#arrow').addEventListener('click', () => { 
  window.scrollTo({
    top: 0
  })
})
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    document.querySelector('#arrow'). style.display = 'flex'
  } else {
    document.querySelector('#arrow').style.display = 'none'
  }
})
