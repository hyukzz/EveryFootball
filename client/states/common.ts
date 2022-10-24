import { atom } from "recoil";

export const isLoginAtom = atom({
	key: "isLogin",
	default: false,
});

export const isKeywordAtom = atom({
	key: "isKeyword",
	default: "",
});
