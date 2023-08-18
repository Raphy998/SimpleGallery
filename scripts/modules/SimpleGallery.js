function build(parentElement, imageSource)
{
    var galleryDiv = document.createElement('div');
    galleryDiv.id = "betterGalleryContainer"
    galleryDiv.style = "border: solid black 1px;"

    parentElement.insertBefore(galleryDiv, parentElement.fistChild);

    var image = document.createElement('img');
    image.src = imageSource;
    galleryDiv.appendChild(image);
}

export {build};