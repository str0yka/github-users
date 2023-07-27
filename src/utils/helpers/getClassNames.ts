type getClassNamesProps = Array<
  | {
      [key: string]: boolean | null | undefined;
    }
  | string
  | undefined
>;

export const getClassNames = (...classNames: getClassNamesProps) => {
  let result: string[] = [];

  for (let i = 0; i < classNames.length; i++) {
    const currentClassName = classNames[i];

    if (typeof currentClassName === "object") {
      for (let className in currentClassName) {
        !!currentClassName[className] && result.push(className);
      }
    }

    if (typeof currentClassName === "string") {
      result.push(currentClassName);
    }
  }

  return result.join(" ");
};
