import type { GuiLocalizationInterface } from "../GuiLocalizationInterface";

export const guiLocalization: GuiLocalizationInterface =
{
  cs:
  {
    title: "Dračí doupě k6",
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
        id: "dice",
        route: "/kostky",
        label: "Kostky"
      },
      {
        id: "sounds",
        route: "/zvuky",
        label: "Zvuky"
      },
      {
        id: "links",
        route: "/odkazy",
        label: "Odkazy"
      },
      {
        id: "downloads",
        route: "/ke_stazeni",
        label: "Ke stažení"
      }
    ]
  }
};