console.log('全局js')

const scale = window.innerWidth / 1920
// console.log((screenInfo.clientWidth - 750 * scale) / 2)
// console.log(screenInfo.clientWidth - (750 * WC), scale)
// console.log(screenInfo.clientWidth * scale)
// console.log(`scale(${scale}, ${scale})`)
document.body.style.transform = `scale(${scale}, ${scale})`
// this.$el.style.left = ((screenInfo.clientWidth - 750 * scale) / 2) + 'px'
document.body.style.transformOrigin = `0 0 0`
setTimeout(() => {
  document.getElementsByTagName('html')[0].style.height = document.body.offsetHeight * scale + 'px'
}, 0)
