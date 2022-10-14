export namespace Dice
{
  // Returns random integer in <0, upperBound) interval.
  export function getRandomInt(upperBound: number): number
  {
    return Math.floor(Math.random() * upperBound);
  }
}