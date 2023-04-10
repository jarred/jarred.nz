import type { IColorItem, ITheme } from "./types";
import postcss from "postcss";
import postcssJs from "postcss-js";

// export const themeFromObj = (item: any): Theme => {
//   let output = Object.assign({}, item) as Theme;
//   return output;
// }


const trimArrayItems = (input: string[]) => {
  
  return input.map(item => {
    console.log(item);
    return item.trim()
  })
}

export const colorVars = (input: {[key: string]: string}):string => {
  let output = "";
  Object.keys(input).map((key) => {
    output += `--color-${key}:${input[key]};`
  })
  return output; 
}

export const firstTheme = (input: any): Theme => {
  let n = Object.keys(input)[0];
  console.log(n);
  return input[n];
}

export const themeFromSlug = (slug: string, themes: Theme[]): Theme => {

  let match = themes.find((item) => {
    return item.slug === slug;
  })

  return match;
  
}

export const themesFromObj = (input:any, colors: ColorItem[]):Theme[] => {
  let output: Theme[] = [];
  Object.keys(input).forEach((themeSlug) => {
    let item = input[themeSlug];
    let theme:Theme = {
      slug: themeSlug,
      bg: trimArrayItems(item.bg.split(",")),
      text: trimArrayItems(item.text.split(","))
    }
    output.push(theme);
    console.log(item);
  })
  return output;
}

export const genThemeObj = (input: any, colors: ColorItem[]):any => {
  let output = {};
  Object.keys(input).forEach((themeSlug, index) => {
    let item = input[themeSlug];
    let bg = trimArrayItems(item.bg.split(","))
    let text = trimArrayItems(item.text.split(","));
    let theme:Theme = {
      slug: themeSlug,
      bg,
      text
    }
    let result = themeCSSFromObj(theme, colors);
    Object.assign(output, result);
    // also set default theme
    if (index === 0) {
      let defaultTheme:Theme = {
        slug: 'default',
        bg,
        text
      }
      let defaultThemeCss = themeCSSFromObj(defaultTheme, colors);
      Object.assign(output, defaultThemeCss);
    }
  })

  return output;
  
}

export const themeCSSFromObj = (theme:Theme, colors: ColorItem[]) => {

  let output: any = {};

  let selector = `.theme-${theme.slug}`;
  output[selector] = {}
  // add colour CSS variables
  Object.keys(colors).map((slug:string) => {
    let colorItem = Object.assign(colors[slug], {
      slug
    }) as ColorItem;
    output[selector][`--color-${slug}`] = colors[slug];
  })
  // add backgrounds
  theme.bg.forEach((colorSlug, index: number) => {
    let n = index + 1;
    output[selector][`--color-bg-${n}`] = `var(--color-${colorSlug})`
    output[`${selector}.bg-${n}, ${selector} .bg-${n}`] = {
      backgroundColor: `var(--color-bg-${n})`,
    }
    output[`${selector}.hover\\:bg-${n}:hover, ${selector} .hover\\:bg-${n}:hover`] = {
      backgroundColor: `var(--color-bg-${n})`,
    }
  })    

  // add text
  theme.text.forEach((colorSlug: string, index: number) => {
    let n = index + 1; 
    output[selector][`--color-text-${n}`] = `var(--color-${colorSlug})`
    output[`${selector}.text-${n}, ${selector} .text-${n}`] = {
      color: `var(--color-text-${n})`
    }
    output[`${selector}.hover\\:text-${n}:hover, ${selector} .hover\\:text-${n}:hover`] = {
      color: `var(--color-text-${n})`
    }
  })

  return output;
}

export const compileCss = async (input) => {
  let result = await postcss().process(input, { parser: postcssJs });
  return result.content
}

