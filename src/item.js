const ITEM_TYPES = {
    image: drawImage,
    audio: drawAudio,
    video: drawVideo
}

function drawImage(item) {
    const element = document.createElement('img')
    element.classList = "gallery-item__image"
    element.src = item.resource
    return element
}

function drawAudio(item) {
    const element = document.createElement('audio')
    element.classList = "gallery-item__audio"
    element.src = item.resource
    element.controls = true
    return element
}

function drawVideo(item) {
    const element = document.createElement('video')
    element.classList = "gallery-item__video"
    element.src = item.resource
    element.controls = true
    return element
}

export function drawGalleryItem(item) {
    const itemElement = document.createElement('div')
    itemElement.classList = "gallery-item"

    const resourceWrapElement = document.createElement('div')
    resourceWrapElement.classList = "gallery-item__resource"

    const drawerForType = ITEM_TYPES[item.type]
    resourceWrapElement.appendChild(drawerForType(item))

    const titleElement = document.createElement('span')
    titleElement.classList = "gallery-item__title"
    titleElement.textContent = item.title

    itemElement.appendChild(resourceWrapElement)
    itemElement.appendChild(titleElement)

    return itemElement
}
