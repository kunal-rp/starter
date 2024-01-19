import { atom } from "recoil";

export const percentageScrollState = atom({
	key: "percentageScrollState",
	default: 0,
});

export const acmeAccessTokenState = atom({
	key: "acmeAccessToken",
	default: null,
});
