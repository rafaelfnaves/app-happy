// create map
const map = L.map('mapid').setView([-16.6887583,-49.2781878], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker 

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)


})

// add photos field
function addPhotoField() {
    // catch container of photos #images
    const container = document.querySelector('#images')
    // catch container for double .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // the clone of last add photo
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // check field none
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // clean field before add to container of images
    input.value = ""
    // the clone to container #images
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        // clean field value
        span.parentNode.children[0].value = ""
        return
    }

    // delete field
    span.parentNode.remove()

}

// select yes or no
function toggleSelect(event) {

    // remove the class .active to buttons
    document.querySelectorAll('.button-select button').forEach( (button) => button.classList.remove('active') )
    // insert the class .active to buttons
    const button = event.currentTarget
    button.classList.add('active')
    // update my input hidden with selected value
    const input = document.querySelector('[name="open_on_weekends"]')
    // yes or no
    input.value = button.dataset.value 

}

function validate(event) {
    const inputLat = document.querySelector('[name="lat"]')
    const inputLng = document.querySelector('[name="lng"]')

    if(inputLat.value == "" && inputLng.value == "") {
        event.preventDefault()
        alert('Insira um ponto no mapa informando a localização do orfanato.')
    }
}