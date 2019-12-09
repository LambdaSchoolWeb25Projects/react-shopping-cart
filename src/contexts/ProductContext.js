// Using context
// create ContextObject
// use contextObject provider component to wrap component tree
// pass in data to share with component tree via value prop
// consume data in child/nested component

import { createContext } from 'react';

export const ProductContext = createContext({});


