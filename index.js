let videos = document.querySelectorAll("video");

const disableVideoDownload = (video) => {
    // Set attribute
    video.setAttribute("controlsList", "nodownload");
};

const disablePictureInPicture = (video) => {
    // Check if video node is undefined (for FireFox) OR false (for Chrome)
    if (
        video.disablePictureInPicture == undefined ||
        video.disablePictureInPicture == false
    ) {
        // Disable picture in picture feature
        video.disablePictureInPicture = true;
    }
};

// Check to see if the document has video
if (videos.length > 0) {
    // Loop through Video Object
	Object.keys(videoBlocks).map((video, index) => {
		// Disable video download
		disableVideoDownload(videoBlocks[index]);

		// Disable picture-in-picture
		disablePictureInPicture(videoBlocks[index]);
	});

	// Disable window mouse right-click option
    document.addEventListener("contextmenu", (event) => event.preventDefault());
}
