import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { promises as fs } from "fs";
import path from "path";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getMarkdownContent(filename: string) {
  const contentPath = path.join(process.cwd(), "src/content", filename);
  return await fs.readFile(contentPath, "utf8");
}

export async function getAllMarkdownFiles() {
  const contentDir = path.join(process.cwd(), "src/content");
  const files = await fs.readdir(contentDir);
  return files.filter((file) => file.endsWith(".md"));
}
