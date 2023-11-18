import React from "react";

import DashBoard from "./DashBoard.jsx";

export default function MaterialsDashboard(props) {
	return (
		<DashBoard>
			<div className="grid grid-cols-4 grid-rows-6 grid-flow-row gap-5 min-h-full h-full">
				<div className="col-span-4 row-span-1 rounded-xl bg-gray-100 flex justify-center items-center">
					Search Bar
				</div>
				<div className="col-span-2 row-span-5 rounded-xl bg-gray-100 flex justify-center items-center">
					Results
				</div>
				<div className="col-span-2 row-span-4 rounded-xl bg-gray-100 flex justify-center items-center">
					Material Description
				</div>
				<div className="col-span-2 row-span-1 rounded-xl bg-gray-100 flex justify-center items-center">
					Product Operations
				</div>
			</div>
		</DashBoard>
	);
}
