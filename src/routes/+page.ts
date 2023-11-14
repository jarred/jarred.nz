

export const load = async ({ params }) => {
  const allProjectFiles = import.meta.glob('/src/content/projects/*.md', { eager: true })
  const projects = [];
  const slideshowItems = [];
  Object.entries(allProjectFiles).map(async ([path, item]) => {
    const metadata = await item.metadata;
    const slug = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".md"));
    metadata.slug = slug;
    if (metadata.published) {
      projects.push(metadata);
    }
    //
    // console.log('frames', metadata.frames);
    metadata.frames?.forEach((frame) => {
      if (frame.featured) {
        slideshowItems.push({
          frame,
          colors: metadata.colors,
          theme: metadata.themes[frame.theme]
        })
      }
    })
  })


  return { projects, slideshowItems };
}