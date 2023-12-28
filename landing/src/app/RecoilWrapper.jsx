"use client";

import { RecoilRoot } from "recoil";

export default function RecoilRootWrapper(props) {
    return <RecoilRoot>{props.children}</RecoilRoot>;
}
