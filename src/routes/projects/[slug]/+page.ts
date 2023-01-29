import { redirect, fail } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const slug = params.slug;
  const data = await import(`../../../content/projects/${params.slug}.md`);

  data.metadata.slug = slug;

  if (data.metadata.locked) {
    throw redirect(301, "/login")
  }

  return {
    content: data.default,
    metadata: data.metadata
  }
}