import { useState, useEffect } from "react";
import axios from "axios";

export default function useUser() {
	const [user, setUser] = useState(null);

	function getUserDetails() {
		axios
			.get(process.env.NEXT_PUBLIC_MAIN_SERVER_URL + "/user", {
				withCredentials: true,
			})
			.then((res) => setUser(res.data));
	}

	return [user, getUserDetails];
}
