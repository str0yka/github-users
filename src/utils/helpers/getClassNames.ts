interface getClassNamesProps {
  [key: string]: boolean;
}

export const getClassNames = (...classNames: getClassNamesProps[]) => {
  console.log(classNames);
};
