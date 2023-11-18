import React from "react";

import DashBoard from "./DashBoard.jsx";

export default function ProductDashBoard(props) {
	return (
		<DashBoard>
			<div className="grid grid-cols-6 grid-rows-3 grid-flow-row gap-5 min-h-full h-full">
				<div className="col-span-3 row-span-3 rounded-xl bg-gray-100 flex justify-center items-center">
					3D view of product
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
