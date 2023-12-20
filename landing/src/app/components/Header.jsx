import { useRef, useEffect } from "react";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

import FadeIn from "./FadeIn.jsx";

export default function Header(props) {
	const ref = useRef();

	const { data: session } = useSession();

	return (
		<FadeIn
			ref={ref}
			className={
				(props.className ? props.className : " ") + " w-full h-fit"
			}
			stopAfterInitialRender={true}
		>
			<div className="flex flex-row p-3 md:ml-20 md:mr-20 rounded-xl shadow-xl justify-center ">
				<Image
					width={1500}
					height={300}
					src="/logo.png"
					className="max-h-[50px] w-auto"
					alt="ACME logo"
				/>
				<div className="m-auto" />
				<button
					className="flex flex-row bg-secondary p-2 w-fit rounded-xl items-center mr-3 "
					onClick={() => (session ? signOut() : signIn())}
				>
					{session ? session.user.name + " Logout" : "Login"}
				</button>
			</div>
		</FadeIn>
	);
}
