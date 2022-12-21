export const load = async ({ params }) => {
  const allProjectFiles = import.meta.glob('/src/content/projects/*.md', { eager: true })
  const projects = [];
  Object.entries(allProjectFiles).map(async ([path, item]) => {
    const metadata = await item.metadata;
    const slug = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".md"));
    metadata.slug = slug;
    projects.push(metadata);
  })
  return { projects }
}