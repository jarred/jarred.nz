import _ from "lodash";

export const thumbFromMedia = (media: any[]) => { 
  let match = _.find(media, (item) => {
    return item.thumb;
  })
  return match;
}