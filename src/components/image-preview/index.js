import ImagePreview from '../image/image-preview.js';

let imagePreviewInstance;

function getImagePreviewInstance () {
    imagePreviewInstance = imagePreviewInstance || ImagePreview.newInstance();

    return imagePreviewInstance;
}

ImagePreview.show = function (props = {}) {
    const instance = getImagePreviewInstance();

    props.onRemove = function () {
        imagePreviewInstance = null;
    }

    instance.show(props);
};

export default ImagePreview;
