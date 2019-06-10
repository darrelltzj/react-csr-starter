import { isValidElementType } from 'react-is';

export const isComponent = (inputProps, propName, componentName) => {
  if (inputProps && inputProps[propName] && !isValidElementType(inputProps[propName])) {
    return new Error(
      `Invalid prop '${propName}' supplied to '${componentName}': the prop is not a valid React component`,
    );
  }
  return null;
};
