export function blurLoad(className, node, url) {
  let image = new Image()
  let parent = node.parentNode
  image.src = url
  image.style.width = node.style.width
  image.className = className.slice(0, -12)
  image.addEventListener('load', () => {
      parent.removeChild(node)
      image.className += ' loaded'
  })
  parent.appendChild(image)
}
