import React, { PropsWithChildren } from 'react';
import setupTags from '../utils/setupTags';

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes);
  return <div>This is the tagslist</div>;
};

export default TagsList;
