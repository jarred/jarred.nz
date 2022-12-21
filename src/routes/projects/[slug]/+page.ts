export const load = async ({ params }) => {
  const slug = params.slug;
  const data = await import(`../../../content/projects/${params.slug}.md`);

  return {
    content: data.default,
    metadata: data.metadata
  }
}