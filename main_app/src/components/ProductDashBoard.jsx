import React, { useState, useEffect, useRef } from "react";

import { useGetData } from "../util/useGetData.jsx";
import { usePostData } from "../util/usePostData.jsx";
import { UPLOAD_URL, IMAGE_URL } from "../constants.jsx";
import DashBoard from "./DashBoard.jsx";

export default function ProductDashBoard(props) {
	// Action : Upload Image
	const fileInputRef = useRef();
	const [imageFile, setImageFile] = useState(null);
	const [postImageDataState, post] = usePostData({
		url: UPLOAD_URL,
		constructRequestData: () => {
			let formData = new FormData();
			formData.append("imageFile", imageFile);
			return formData;
		},
		onFail: (error) => console.log(error),
		onSuccess: (data) => {
			// reset upload data
			fileInputRef.current.value = null;
			setImageFile(null);
		},
	});

	// Action : render image from api
	// Will render image that is uploaded, NOTE: server will update client should just fetch and render
	const [productImage, setProductImage] = useState(null);
	const [fetchImageState, fetchImageAction] = useGetData({
		url: IMAGE_URL,
		onFail: (error) => console.log(error),
		onSuccess: (data) => {
			data.image
				? setProductImage("data:image/png;base64, " + data.image)
				: null;
		},
	});
	useEffect(() => fetchImageAction(), [imageFile]);

	return (
		<DashBoard>
			<div className="grid grid-cols-6 grid-rows-3 grid-flow-row gap-5 min-h-full h-full">
				<div className="col-span-3 row-span-3 rounded-xl bg-gray-100 flex justify-center items-center flex-col space-y-5">
					{productImage ? (
						<img src={productImage} className="w-[100px] h-fit" />
					) : null}
					<div>
						<input
							ref={fileInputRef}
							type="file"
							name="image"
							onChange={(event) => {
								setImageFile(event.target.files[0]);
							}}
						/>
						{imageFile ? (
							<button
								className={
									"border border-2 rounded-xl p-2 " +
									(imageFile
										? "shadow-xl"
										: "cursor-not-allowed bg-gray-200")
								}
								onClick={() => {
									post();
								}}
							>
								Upload
							</button>
						) : (
							<></>
						)}
					</div>
				</div>
				<div className="col-span-3 row-span-1 rounded-xl bg-gray-100 flex justify-center items-center">
					Project Details
				</div>

				<div className="col-span-3 row-span-1 rounded-xl bg-gray-100 flex justify-center items-center">
					Editing Document Operations
				</div>

				<div className="col-span-3 row-span-1 rounded-xl bg-gray-100 flex justify-center items-center">
					Technical Spec Operations
				</div>
			</div>
		</DashBoard>
	);
}
