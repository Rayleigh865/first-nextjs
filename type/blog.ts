import type { MicroCMSListContent } from "microcms-js-sdk";

export type BlogTag = {
    name: string
} & MicroCMSListContent

export type Blog = {
    title: string;
    description: string,
    tag: BlogTag[];
    text: string,
} & MicroCMSListContent