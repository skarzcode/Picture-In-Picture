const button = document.getElementById('button');
const videoElement = document.getElementById('video');

// pass media stream to video element

async function selectMedia() {
try{
    // promts user to select a window to share
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // passes that shared window into the src of html video element
    videoElement.srcObject = mediaStream;
    // once duration, size and dimensions have been determeined the video can start playing
    videoElement.onloadedmetadata = () => {
        videoElement.play();
    }
} catch(error){

}
};

button.addEventListener('click', async () => {
    // once clicked it disables the button and no longer can be used
    button.disabled = true;
    // once pictureinpicture is successfull the button is then active and functional. If not the button wont function untill the error is resolved.
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

selectMedia();