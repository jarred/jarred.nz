import { compileCss, genThemeObj } from '$lib/theme';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url, params }) => {
  const slug = params.slug;
  const data = await import(`../../../../content/projects/${params.slug}.md`);
  let themeStructure = genThemeObj(data.metadata.themes, data.metadata.colors);
  let output = await compileCss(themeStructure);
  return new Response(output, {
    headers: {
      "content-type": "text/css",
  }});
}