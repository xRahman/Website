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
      return 0;

    return getRandomInt(sides) + 1;
  }

  export function rollKz(): number
  {
    return getRandomInt(2);
  }

  export function isCommandValid(command: string): boolean
  {
    return rollRegExp.test(removeSpaces(command));
  }

  export function evaluate(command: string):
    number | "TOO_MANY_DICE" | "SYNTAX_ERROR"
  {
    const parseResult = parse(command);

    if (parseResult === "SYNTAX_ERROR")
      return "SYNTAX_ERROR";

    let { numberOfDice } = parseResult;
    const { typeOfDice, sign, constant } = parseResult;

    if (isNaN(numberOfDice))
      numberOfDice = 1;

    if (numberOfDice > 1000)
      return "TOO_MANY_DICE";

    let result = 0;

    if (typeOfDice === "z")
    {
      for (let i = 0; i < numberOfDice; i++)
        result += rollKz();
    }
    else
    {
      const sizeOfDice = parseInt(typeOfDice, RADIX);

      if (isNaN(sizeOfDice))
        return "SYNTAX_ERROR";

      for (let i = 0; i < numberOfDice; i++)
        result += roll(sizeOfDice);
    }

    if (sign && isNaN(constant))
      return "SYNTAX_ERROR";

    switch (sign)
    {
      case "+":
        return result + constant;

      case "-":
        return result - constant;

      default:
        return result;
    }
  }

  // -------------- private module stuff -----------------

  const RADIX = 10;

  const rollRegExp = composeRollRegExp();

  function parse(command: string):
    {
      numberOfDice: number,
      typeOfDice: string,
      sign: string,
      constant: number
    }
    | "SYNTAX_ERROR"
  {
    const result = rollRegExp.exec(removeSpaces(command));

    if (!result || !result.groups)
      return "SYNTAX_ERROR";

    const numberOfDice = parseInt(result.groups.numberOfDice, RADIX);
    const typeOfDice = result.groups.typeOfDice;
    const sign = result.groups.sign;
    const constant = parseInt(result.groups.constant, RADIX);

    return { numberOfDice, typeOfDice, sign, constant };
  }

  function removeSpaces(str: string): string
  {
    return str.split(" ").join("");
  }

  function composeRollRegExp(): RegExp
  {
    // Examples to be matched: "k6+2", "2k6-3", "3kz+2".
    const numberOfDice = "([1-9][0-9]*)?";
    // const numberOfDice = "B";
    const typeOfDice = "z|[1-9][0-9]*";
    const sign = "[+-]";
    const constant = "[0-9]+";

    const dicerollPattern =
      `(?<numberOfDice>${numberOfDice})k(?<typeOfDice>${typeOfDice})`;
    const signPattern = `(?<sign>${sign})`;
    const constantPattern = `(?<constant>${constant})`;

    const pattern = `^${dicerollPattern}(${signPattern}${constantPattern})?$`;

    // "u" - reqire unicode.
    // "i" - case insensitive matching.
    const flags = "ui";

    return new RegExp(pattern, flags);
  }
}