import type { GuiLocalizationInterface } from "../GuiLocalizationInterface";

export const guiLocalization: GuiLocalizationInterface =
{
  cs:
  {
    title: "Dračák podle staré školy",
    connectToDiscord: "Připoj se na Discord:",
    rules:
    {
      pdfNotSupported: "Prohlížeč nepodporuje zobrazení pdf.",
      downloadHere: "Stáhnout pravidla"
    },
    navbar:
    [
      // {
      //   id: "news",
      //   route: "/novinky",
      //   label: "Novinky"
      // },
      {
        id: "rules",
        route: "/pravidla",
        label: "Pravidla"
      },
      // {
      //   id: "adventures",
      //   route: "/dobrodruzstvi",
      //   label: "Dobrodružství"
      // },
      {
        id: "generators",
        route: "/generatory",
        label: "Generátory"
      },
      {
        id: "links",
        route: "/odkazy",
        label: "Odkazy"
      },
      {
        id: "downloads",
        route: "/ke-stazeni",
        label: "Ke stažení"
      }
    ]
  }
};