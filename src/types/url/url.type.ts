import { URLS } from "config";

export type IUrlPathKey = (keyof typeof URLS);
export type IUrlPath = (typeof URLS)[IUrlPathKey];
