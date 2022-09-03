import('./main.scss')
import { drawGalleryItem } from './item'
import items from './items'

const galleryRootElement = document.getElementById('gallery')

console.log(items)

items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)))

