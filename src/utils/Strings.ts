export namespace Strings
{
  export function uglifyMinuses(str: string): string
  {
    return str.split("–").join("-");
  }

  export function beautifyMinuses(str: string): string
  {
    return str.split("-").join("–");
  }
}