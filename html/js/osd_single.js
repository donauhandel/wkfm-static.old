/* function trigger when static html img was loaded */

function loadImage(container_id) {

    /* get container holding the image and set height and padding */
    var container = document.getElementById(container_id);
    container.style.height = "700px";
    container.style.padding ="2em";

    /* get image src (url) */
    var image = document.getElementById(`${container_id}-img`);
    var imageURL = {
        type: 'image',
        url: image.getAttribute("src")
    };

    // OpenSeaDragon Image Viewer
    var viewer = OpenSeadragon({
        id: container_id,
        prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.0/images/",
        defaultZoomLevel: 0,
        fitHorizontally: true,
        tileSources: imageURL,
        degrees: 0, // Initial rotation angle
        showRotationControl: true, // Show rotation buttons
        gestureSettingsTouch: {
            pinchRotate: true // Enable touch rotation on tactile devices
        }
    });
    /* remove static html image element */
    image.remove();
}
