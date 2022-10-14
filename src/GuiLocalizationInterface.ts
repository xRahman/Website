interface LanguageInterface
{
  readonly title: string,
  readonly connectToDiscord: string,
  readonly rules:
  {
    pdfNotSupported: string,
    downloadHere: string
  },
  readonly navbar:
  [
    // {
    //   readonly id: "news",
    //   readonly route: string,
    //   readonly label: string
    // },
    {
      readonly id: "rules",
      readonly route: string,
      readonly label: string
    },
    // {
    //   readonly id: "adventures",
    //   readonly route: string,
    //   readonly label: string
    // },
    {
      readonly id: "generators",
      readonly route: string,
      readonly label: string
    },
    {
      readonly id: "dice",
      readonly route: string,
      readonly label: string
    },
    {
      readonly id: "links",
      readonly route: string,
      readonly label: string
    },
    {
      readonly id: "downloads",
      readonly route: string,
      readonly label: string
    }
  ]
}

export interface GuiLocalizationInterface
{
  readonly [language: string]: LanguageInterface
}