export namespace Dice
{
  // Returns random integer in <0, upperBound) interval.
  export function getRandomInt(upperBound: number): number
  {
    return Math.floor(Math.random() * upperBound);
  }

  export function roll(sides: number): number
  {
    if (sides < 1)
      sides = 1;

    const result = getRandomInt(sides) + 1;

    // console.log(`Rolling k${sides}: ${result}`);

    return result;
  }

  export function rollKz(): number
  {
    return getRandomInt(2);
  }

  // Note: Current version of Dice.evaluate() doesn't
  // correctly handle nonstandard inputs like "k6kz".
  export function evaluate(inputStr: string): number
  {
    inputStr = removeSpaces(inputStr);
    inputStr = inputStr.toLowerCase();

    // console.log(`Evaluating ${inputStr}`);

    return evaluateAddition(inputStr);
  }

  function removeSpaces(str: string): string
  {
    return str.split(" ").join("");
  }

  function evaluateAddition(inputStr: string): number
  {
    let result = 0;

    const splitByPlus = inputStr.split("+");

    // console.log(`${splitByPlus}`);

    // Add results of each group.
    for (const node of splitByPlus)
    {
      // const tmp = evaluateSubtraction(node);

      // console.log(`Adding ${tmp}`);
      // result += tmp;

      result += evaluateSubtraction(node);
    }

    return result;
  }

  function evaluateSubtraction(inputStr: string): number
  {
    let result = 0;

    const splitByMinus = inputStr.split("-");

    // console.log("splitByMinus: ", splitByMinus);

    result += evaluateKz(splitByMinus[0]);

    for (let i = 1; i < splitByMinus.length; i++)
    {
      result -= evaluateKz(splitByMinus[i]);
    }

    return result;
  }

  function evaluateKz(str: string): number
  {
    let result = 0;

    const splitByKz = str.split("kz");

    if (splitByKz.length > 1)
    {
      // This is not entirely correct - if someone
      // types in something like "kzkz", result will
      // be 1kz (because the first "kz" is not a number).
      // It should work for sane inputs though.
      let numberOfDice = parseInt(splitByKz[0], 10);

      if (isNaN(numberOfDice))
        numberOfDice = 1;

      // console.log(`> Rolling: ${numberOfDice}kz`);

      for (let i = 0; i < numberOfDice; i++)
      {
        // console.log(`Rolling kz`);
        result += rollKz();
      }
    }
    else
    {
      return evaluateKx(str);
    }

    return result;
  }

  function evaluateKx(node: string): number
  {
    let result = 0;

    const splitByK = node.split("k");

    if (splitByK.length > 1)
    {
      let numberOfDice = parseInt(splitByK[0], 10);
      const sizeOfDice = parseInt(splitByK[1], 10);

      if (isNaN(numberOfDice))
        numberOfDice = 1;

      // console.log(`> Rolling: ${numberOfDice}k${sizeOfDice}`);

      for (let i = 0; i < numberOfDice; i++)
      {
        // console.log(`Rolling k${sizeOfDice}`);
        result += roll(sizeOfDice);
      }
    }
    else
    {
      result = parseInt(splitByK[0], 10);
    }

    return result;
  }
}