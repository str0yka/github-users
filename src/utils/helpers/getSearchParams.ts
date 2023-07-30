interface GetSearchParamsProps {
  [key: string]: number | string | boolean | null | undefined;
}

export const getSearchParams = (
  params: GetSearchParamsProps
): URLSearchParams => {
  let result: { [key: string]: string } = {};

  for (let key in params) {
    const currentParams = params[key];

    if (!!currentParams) {
      result[key] = currentParams.toString();
    }
  }

  return new URLSearchParams(result);
};
