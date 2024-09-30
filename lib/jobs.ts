import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'jobs');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  workspace: string;
  location: string;
  department: string;
  work: string;
  contentHtml: string;
}

// Function to get all posts' slugs
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

// Function to get post data by slug
export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse the post metadata and content
  const matterResult = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark()
  .use(remarkParse)  // Parse markdown
  .use(remarkRehype, { allowDangerousHtml: true })  // Convert markdown to HTML, allowing raw HTML
  .use(rehypeRaw)  // Process raw HTML
  .use(rehypeStringify)  // Convert it to string HTML
  .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    workspace: matterResult.data.workspace,
    location: matterResult.data.location,
    department: matterResult.data.department,
    work: matterResult.data.work,
    contentHtml,
  };
}
