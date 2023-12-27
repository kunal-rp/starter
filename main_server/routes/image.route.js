var uploadedImage;
const uploadImageRoute = (req, res) => {
	// Log the files to the console

	uploadedImage = req.files.imageFile.data.toString("base64");

	// All good
	res.json({ status: "image_loaded" });
};
const imageRoute = (req, res) => {
	res.json({ image: uploadedImage });
};

module.exports = { imageRoute, uploadImageRoute };
