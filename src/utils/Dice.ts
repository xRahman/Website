export namespace Dice
{
  const rollRegExp = composeRollRegExp();

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

  export function validateRollString(str: string): "VALID" | "INVALID"
  {
    return rollRegExp.test(str) ? "VALID" : "INVALID";
  }

  function parseRollString(str: string):
    {
      numberOfDice: number,
      typeOfDice: string,
      sign: string,
      constant: number
    }
    | "SYNTAX_ERROR"
  {
    str = removeSpaces(str);
    str = str.toLowerCase();

    const parsed = rollRegExp.exec(str);

    if (!parsed || !parsed.groups)
      return "SYNTAX_ERROR";

    const numberOfDice = parseInt(parsed.groups.numberOfDice, 10);
    const typeOfDice = parsed.groups.typeOfDice;
    const sign = parsed.groups.sign;
    const constant = parseInt(parsed.groups.constant, 10);

    return { numberOfDice, typeOfDice, sign, constant };
  }

  export function evaluate(str: string):
    number | "TOO_MANY_DICE" | "SYNTAX_ERROR"
  {
    const parseResult = parseRollString(str);

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
      const sizeOfDice = parseInt(typeOfDice, 10);

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

      default: return result;
    }
  }

  // // Note: Current version of Dice.evaluate() doesn't
  // // correctly handle nonstandard inputs like "k6kz".
  // export function evaluate(inputStr: string): number
  // {
  //   inputStr = removeSpaces(inputStr);
  //   inputStr = inputStr.toLowerCase();

  //   // console.log(`Evaluating ${inputStr}`);

  //   return evaluateAddition(inputStr);
  // }

  // -------------- private module stuff -----------------

  function removeSpaces(str: string): string
  {
    return str.split(" ").join("");
  }

  // function evaluateAddition(inputStr: string): number
  // {
  //   let result = 0;

  //   const splitByPlus = inputStr.split("+");

  //   // console.log(`${splitByPlus}`);

  //   // Add results of each group.
  //   for (const node of splitByPlus)
  //   {
  //     // const tmp = evaluateSubtraction(node);

  //     // console.log(`Adding ${tmp}`);
  //     // result += tmp;

  //     result += evaluateSubtraction(node);
  //   }

  //   return result;
  // }

  // function evaluateSubtraction(inputStr: string): number
  // {
  //   let result = 0;

  //   const splitByMinus = inputStr.split("-");

  //   // console.log("splitByMinus: ", splitByMinus);

  //   result += evaluateKz(splitByMinus[0]);

  //   for (let i = 1; i < splitByMinus.length; i++)
  //   {
  //     result -= evaluateKz(splitByMinus[i]);
  //   }

  //   return result;
  // }

  // function evaluateKz(str: string): number
  // {
  //   let result = 0;

  //   const splitByKz = str.split("kz");

  //   if (splitByKz.length > 1)
  //   {
  //     // This is not entirely correct - if someone
  //     // types in something like "kzkz", result will
  //     // be 1kz (because the first "kz" is not a number).
  //     // It should work for sane inputs though.
  //     let numberOfDice = parseInt(splitByKz[0], 10);

  //     if (isNaN(numberOfDice))
  //       numberOfDice = 1;

  //     // console.log(`> Rolling: ${numberOfDice}kz`);

  //     for (let i = 0; i < numberOfDice; i++)
  //     {
  //       // console.log(`Rolling kz`);
  //       result += rollKz();
  //     }
  //   }
  //   else
  //   {
  //     return evaluateKx(str);
  //   }

  //   return result;
  // }

  // function evaluateKx(node: string): number
  // {
  //   let result = 0;

  //   const splitByK = node.split("k");

  //   if (splitByK.length > 1)
  //   {
  //     let numberOfDice = parseInt(splitByK[0], 10);
  //     const sizeOfDice = parseInt(splitByK[1], 10);

  //     if (isNaN(numberOfDice))
  //       numberOfDice = 1;

  //     // console.log(`> Rolling: ${numberOfDice}k${sizeOfDice}`);

  //     for (let i = 0; i < numberOfDice; i++)
  //     {
  //       // console.log(`Rolling k${sizeOfDice}`);
  //       result += roll(sizeOfDice);
  //     }
  //   }
  //   else
  //   {
  //     result = parseInt(splitByK[0], 10);
  //   }

  //   return result;
  // }

  function composeRollRegExp(): RegExp
  {
    // Examples to be matched: "k6+2", "2k6-3", "3kz+2".
    const numberOfDice = "[0-9]*";
    const typeOfDice = "z|[0-9]+";
    const sign = "[+-]";
    const constant = "[0-9]+";

    const pattern =
      `^(?<numberOfDice>${numberOfDice})k(?<typeOfDice>${typeOfDice})`
      + `((?<sign>${sign})(?<constant>${constant}))?$`;

    // "u" - reqire unicode.
    // "i" - case insensitive matching.
    const flags = "ui";

    return new RegExp(pattern, flags);
  }
}