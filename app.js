const button = document.getElementById('button');
const videoElement = document.getElementById('video');

// pass media stream to video element

async function selectMedia() {
try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
        videoElement.play();
    }
} catch(error){

}
};

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

selectMedia();