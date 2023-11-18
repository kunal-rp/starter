import React from "react";

import DashBoard from "./DashBoard.jsx";

export default function LogisticsDashboard(props) {
	return (
		<DashBoard>
			<div className="grid grid-cols-6 grid-rows-6 grid-flow-row gap-5 min-h-full h-full">
				<div className="col-span-2 row-span-6 rounded-xl bg-gray-100 flex justify-center items-center">
					Map
				</div>
				<div className="col-span-2 row-span-4 rounded-xl bg-gray-100 flex justify-center items-center">
					Materials Listed out
				</div>
				<div className="col-span-2 row-span-4 rounded-xl bg-gray-100 flex justify-center items-center">
					Suppliers Listed out
				</div>
				<div className="col-span-4 row-span-1 rounded-xl bg-gray-100 flex justify-center items-center">
					Project Operations
				</div>
			</div>
		</DashBoard>
	);
}
