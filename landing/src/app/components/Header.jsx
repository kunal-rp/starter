import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import FadeIn from "./FadeIn.jsx";
import useUser from "../util/useUser.jsx";

export default function Header(props) {
	const ref = useRef();

	const [user, fetchUser] = useUser();

	useEffect(() => fetchUser(), []);

	return (
		<FadeIn
			ref={ref}
			className={
				(props.className ? props.className : " ") + " w-full h-fit"
			}
			stopAfterInitialRender={true}
		>
			<div className="flex flex-row p-3 md:ml-20 md:mr-20 rounded-xl shadow-xl justify-between items-center max-h-20px">
				<Image
					width={1500}
					height={300}
					src="/logo.png"
					className="max-h-[50px] w-auto"
					alt="ACME logo"
				/>
				<div className="items-center" />
				{user ? (
					<div className="flex flex-row h-fit bg-primary p-2 rounded-md text-white items-center space-x-5">
						<span>Goto App</span>
						<img
							src={user.picture}
							className="h-[30px] rounded-2xl"
						/>
					</div>
				) : (
					<Link
						href="/login"
						className="flex flex-row bg-secondary p-2 w-fit rounded-xl items-center mr-3 "
					>
						Login
					</Link>
				)}
			</div>
		</FadeIn>
	);
}
