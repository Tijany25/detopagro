import classNames from "classnames";

export type ImageSrcFolder = 'icons' | 'logos' | 'images'
export const getImageDir = ( folder: ImageSrcFolder, object: string) => {
    if (object?.indexOf('http') === 0) return object;
    return `/images/${folder}/${object}`
}

export const getQueryStringFromObject = (object: Record<string, string>) => {
    return new URLSearchParams(object).toString()
}

export const cx = (...args: classNames.ArgumentArray) => {
    return classNames(...args);
}

export const formatNumberAsPrice = (number: number, currency: string = 'NGN') => {
    if (!number || !currency) return ''
  
    const formatted = (+number).toLocaleString('en', {
      style: 'currency',
      currency: currency,
    })
  
    return formatted.replace('.00', '').replace('NGN', '₦')
}


export const buildEndpoint = (endpoint: string, routeParams: { [key: string]: string | number } = {}, extendBy: string = '') => {
    let builtEndpoint = endpoint;
    for (const param in routeParams) {
      builtEndpoint = builtEndpoint.replace(
        `:${param}`,
        `${routeParams[param]}`
      );
    }
    return builtEndpoint + extendBy;
}


export const chunkArray = <T>(arr: T[], noOfChunks: number): T[][] => {
  const result: T[][] = [];
  for (const i in arr) {
    const pos = +i % noOfChunks;
    if (!result[pos]) {
      result[pos] = []
    }
    result[pos].push(arr[i]);
  }
  return result;
};
