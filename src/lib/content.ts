"use server";
import path from "path";
import { cache } from "react";
import fs from "fs/promises";

export const getContent = cache(async (filename: string) => {
  const contentPath = path.join(process.cwd(), "src/content", filename);
  return await fs.readFile(contentPath, "utf8");
});

export const getJSONContent = cache(async (filename: string) => {
  const content = await getContent(filename);
  return content;
});

export const getAllMarkdownFiles = cache(async () => {
  const contentDir = path.join(process.cwd(), "src/content");
  const files = await fs.readdir(contentDir);
  return files.filter((file) => file.endsWith(".md"));
});
