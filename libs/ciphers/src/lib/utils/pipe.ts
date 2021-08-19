export function pipe(arg: any, ...fns: Array<(a: any) => any>) {
  return fns.reduce((acc, curr) => curr(acc), arg);
}
