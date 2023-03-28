type RandomTables =
{
  [key: string]:
  {
    name: string,
    tables:
    {
      [key: string]:
      {
        name: string,
        itemType: string,
        items: string[]
      }
    }
  }
};

export const randomTables: RandomTables =
{
  // eslint-disable-next-line @typescript-eslint/naming-convention
  hracske_postavy:
  {
    name: "Hráčské postavy",
    tables:
    {
      chovani:
      {
        name: "chování",
        itemType: "rys",
        items:
        [
          "držgrešle",
          "exotický přízvuk",
          "gurmán",
          "když je nervózní, brousí si zbraně",
          "kleptoman",
          "má oblíbenou frázi",
          "milovník alkoholu",
          "miluje boj",
          "miluje šperky",
          "mluví rychle",
          "mluví sprostě",
          "mluví učeně",
          "mrmlá na novoty",
          "muž činu",
          "náruživý kuřák",
          "nenechá přítele ve štychu",
          "nesnáší pavouky",
          "nezná stud",
          "nikdy nelže",
          "prostořeký",
          "prozradí každé tajemství",
          "ráčkuje",
          "snadno se rozpláče",
          "spřádá dalekosáhlé plány",
          "spřádá konspirační teorie",
          "strohý",
          "stydlivý",
          "sukničkář",
          "štědrý",
          "veselý",
          "vždy dbá na svůj vzhled",
          "vždy hladový",
          "zabíjí jen v krajní nouzi",
          "zbožný",
          "ztratil víru",
          "zvědavý",

          // Následující rysy nejsou v pravidlech.
          "citlivý žaludek",
          "otužilý nebo zimomřivý",
          "nejí maso"
        ]
      },
      vzhled:
      {
        name: "vzhled",
        itemType: "rys",
        items:
        [
          "albín",
          "aristokratické rysy",
          "bílé vlasy a vousy",
          "chybějící prst",
          "chybějící ucho",
          "dobrácká tvář",
          "holohlavý",
          "hrbatý",
          "jizvy od popálenin",
          "jizvy z boje",
          "klanové tetování",
          "kulhá",
          "kultistické tetování",
          "malý",
          "maska na tváři",
          "náušnice nebo jiné ozdoby v kůži",
          "neobvyklý účes",
          "námořnické tetování",
          "orlí nos",
          "otrocký cejch",
          "oči nezvyklé barvy",
          "pihovatý",
          "páska přes oko",
          "přitažlivý",
          "přísný výraz",
          "rituální tetování",
          "rozložitý",
          "usměvavý",
          "velký nos",
          "vychrtlý",
          "vypadá mladší",
          "vysoký",
          "výrazná brada",
          "výstředně se obléká",
          "zavalitý",
          "zlomený nos"
        ]
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  nehracske_postavy:
  {
    name: "Nehráčské postavy",
    tables:
    {
      chovani:
      {
        name: "chování",
        itemType: "rys",
        items:
        [
          "držgrešle",
          "exotický přízvuk",
          "gurmán",
          "když je nervózní, brousí si zbraně",
          "kleptoman",
          "má oblíbenou frázi",
          "milovník alkoholu",
          "miluje boj",
          "miluje šperky",
          "mluví rychle",
          "mluví sprostě",
          "mluví učeně",
          "mrmlá na novoty",
          "muž činu",
          "náruživý kuřák",
          "nenechá přítele ve štychu",
          "nesnáší pavouky",
          "nezná stud",
          "nikdy nelže",
          "prostořeký",
          "prozradí každé tajemství",
          "ráčkuje",
          "snadno se rozpláče",
          "spřádá dalekosáhlé plány",
          "spřádá konspirační teorie",
          "strohý",
          "stydlivý",
          "sukničkář",
          "štědrý",
          "veselý",
          "vždy dbá na svůj vzhled",
          "vždy hladový",
          "zabíjí jen v krajní nouzi",
          "zbožný",
          "ztratil víru",
          "zvědavý",

          // Následující rysy nejsou v pravidlech.
          "má citlivý žaludek",
          "otužilý nebo zimomřivý",
          "nejí maso",

          // Rysy pouze pro nehráčské postavy.
          "nemotorný",
          "hlasitě chrápe",
          "dýchavičný",
          "nedoslýchavý",
          "slabozraký",
          "často kleje",
          "huhlá",
          "šišlá",
          "masochista",
          "milovník rostlin",
          "milovník zvířat",
          "krutý",
          "surový",
          "mluví ve verších",
          "má nějakou fóbii",
          "strašpytel",
          "vtipálek",
          "lhostejný"
        ]
      },
      vzhled:
      {
        name: "vzhled",
        itemType: "rys",
        items:
        [
          "albín",
          "aristokratické rysy",
          "bílé vlasy a vousy",
          "chybějící prst",
          "chybějící ucho",
          "dobrácká tvář",
          "holohlavý",
          "hrbatý",
          "jizvy od popálenin",
          "jizvy z boje",
          "klanové tetování",
          "kulhá",
          "kultistické tetování",
          "malý",
          "maska na tváři",
          "nadpozemsky krásný",
          "neobvyklý účes",
          "námořnické tetování",
          "orlí nos",
          "otrocký cejch",
          "oči nezvyklé barvy",
          "pihovatý",
          "páska přes oko",
          "přitažlivý",
          "přísný výraz",
          "rituální tetování",
          "rozložitý",
          "usměvavý",
          "velký nos",
          "vychrtlý",
          "vypadá mladší",
          "vysoký",
          "výrazná brada",
          "výstředně se obléká",
          "zavalitý",
          "zlomený nos",

          // Rysy pouze pro nehráčské postavy.
          "ochrnutá část těla",
          "chybějící končetina",
          "jizvy od neštovic",
          "velké poprsí",
          "znetvořený"
        ]
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      osobni_predmety:
      {
        name: "osobní předměty",
        itemType: "předmět",
        items:
        [
          "nůž",
          "rezavý nůž",
          "šperk",
          "váček s bylinkami",
          "troud a křesadlo, dýmka a dýmkové koření",
          "váček se sušeným ovocem",
          "váček s ořechy",
          "dřevěná lžíce",
          "dřevěná vařečka",
          "jehla a niť",
          "párátko",
          "smotek vlasů",
          "ohlazený oblázek",
          "váček se sušeným masem",
          "uhel na kreslení",
          "olůvko",
          "křída",
          "zrcátko",
          "líčidla",
          "flakónek s jedem",
          "balíček karet",
          "balíček karet (označených)",
          "hrací kostky",
          "hrací kostky (cinknuté)",
          "pletací jehlice a klubko vlny",
          "paklíče",
          "pilník",
          "kleště",
          "kulička a tři dřevěné kelímky",
          "uzená ryba v mastném papíru",
          "váček se surovými polodrahokamy",
          "lupa",
          "flakónek se silným alkoholem",
          "pár bot s prošlapanými podrážkami",
          "náhradní struna",
          "kost s vyrytými runami",
          "lastura",
          "váček s rybími šupinami",
          "krabička s popelem",
          "skleněná kulička",
          "medvědí dráp",
          "upíří zub",
          "kůra s vyrytým nákupním seznamem",
          "maska na obličej",
          "dřevěná figurka koně",
          "slaměná panenka",
          "vlasec a háček na rybaření",
          "pytlík dřevěných zubů",
          "flakón s čirou slanou tekutinou (dětské slzy)",
          "váček s useknutým prstem",
          "dřevěný náramek",
          "dřevěný talisman",
          "padělatelské náčiní",
          "léčitelské potřeby",
          "kůrka starého chleba",
          "kovová pouta",
          "náhradní spona na opasek",
          "skleněný \"drahokam\"",
          "sklenička s rybím tukem",
          "nůž z dračí kosti",
          "váček s pálivým kořením",
          "krabička se živou včelí královnou",
          "krabička plná mravenců",
          "pečetidlo a pečetní vosk",
          "váček se živou ropuchou",
          "olejnička",
          "krabička plná pavoučích sítí",
          "krabička šňupacího tabáku",
          "flakón s modrou pěnivou tekutinou a nálepkou \"na nespavost\"",
          "dřevěná tabulka s obrázkem elfí dívky",
          "krabička se žvýkací drogou",
          "figurka zapomenutého božstva",
          "lahvička s vonným olejem",
          "dřevěný hřeben",
          "vycpaná myš",
          "natahovací skříňka, hraje veselou melodii",
          "kulatá krabička se smradlavou mastí",
          "dětský prak",
          "dřevěná píšťalka",
          "cínová píšťalka",
          "hrst vlašských ořechů",
          "skleněné oko",
          "svíčka",
          "složený šátek",
          "abakus (počítadlo)",
          "smotek březové kůry",
          "břitva",
          "částečně vyrobené šípy",
          "částečně vyrobený luk",
          "chřestidlo",
          "destičky na tkaní",
          "dřevěná loďka",
          "dřevěná miska",
          "dřevěný skarabeus",
          "dřevěný symbol kola",
          "hliněná okarína",
          "několik hrotů šípů",
          "korbel",
          "křesadlo",
          "několik mincí bez ražby",
          "provrtaná mince na šňůrce",
          "odpichovátko na přenášení vzdáleností",
          "provázky",
          "šiška",
          "sklíčko z vitráže",
          "škrabka",
          "píšťalka vydávající strašidelné zvuky",
          "svazek ptačích per",
          "vábnička (píšťalka)",
          "vycpaná kozlí hlava",
          "zeměměřičká sada",
          "zkamenělý trilobit",
          "zvoneček",
          "velká mince z černého kovu (meteorické železo)",
          "lebka upletená z proutí",
          "náhrdelník z mušlí",
          "náramek z mušlí",
          "píšťala vyrobená z lastury",
          "ptačí lebka",
          "váček s pestrobarevnými ptačími pery",
          "vojenská insignie z dávno zaniklé říše",
          "bronzový náprstek",
          "mosazný korbel se znakem kladiva",
          "dřevěná zvonkohra",
          "tři pazourkové hroty šípů",
          "váček s vonnými bylinami",
          "balíček tarotových karet s obrázky nemrtvých",
          "vyschlá lidská hlava velikosti pěsti",
          "cínová krabička, která nejde otevřít (uvnitř je kaviár)",
          "podkova",
          "čirý křišťál, ve kterém je vidět miniaturní ledový hrad",
          "nepopsaný zápisník",
          "tři trojúhelníkové bronzové mince",
          "váček plný zohýbaných hřebíků",
          "lahvička s kysaným zelím",
          "brýle",
          "kožené rukavice",
          "kostěný nůž a vidlička",
          "umělý nos",
          "modlitební chřestítko",
          "váček se sadou runových kamenů",
          "váček se skleněnou kuličkou a cedulkou \"oko hydry\"",
          "kadeřnické nůžky",
          "železo na vypalování otrockého cejchu",
          "hrst fazolí",
          "tabulka s voskovým povrchem a rydlo",
          "králičí pacička",
          "jídelní hůlky",
          "tenké dřívko s rozžvýkaným koncem",
          "keramická figurka plnoštíhlé ženy",
          "kyselé jablko",
          "ostrouhaný kořen křenu",
          "rezavý klíč",
          "přezka na opasek",
          "zlomený husí brk",
          "lahvička inkoustu",
          "lněný kapesník",
          "váček sušených datlí",
          "troud a křesadlo",
          "mýdlo",
          "psací brk",
          "balíček s pláství medu",
          "balíček s tvrdým sýrem",
          "smotaný drát",
          "dřevěná káča",
          "džbánek medu",
          "drátěný kartáč",
          "talisman",
          "nožík na dopisy",
          "pytlík zvířecích kostí",
          "samorost",
          "sekáček na maso",
          "sněžnice",
          "soška bohyně",
          "soška hlavonožce",
          "vlna a pletací jehlice",
          "slaměná panenka",
          "zdobený nožík na dopisy",
          "zdobený nůž",
          "liščí kožešina",
          "železný prsten"
        ]
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  zenska_jmena:
  {
    name: "Ženská jména",
    tables:
    {
      barbar:
      {
        name: "barbar",
        itemType: "jméno",
        items:
        [
          "Atuga",
          "Defa",
          "Fergana",
          "Fríga",
          "Ivada",
          "Jora",
          "Nelgara",
          "Nofren",
          "Ulfgyn",
          "Vergara"
        ]
      },
      clovek:
      {
        name: "člověk",
        itemType: "jméno",
        items:
        [
          "Anita",
          "Ciri",
          "Darjen",
          "Elmera",
          "Kamea",
          "Karmína",
          "Mirvada",
          "Nekla",
          "Riana",
          "Sulima"
        ]
      },
      elf:
      {
        name: "elf",
        itemType: "jméno",
        items:
        [
          "Alia",
          "Aridala",
          "Ariela",
          "Eledriel",
          "Elerien",
          "Finiel",
          "Gildara",
          "Miala",
          "Sindariel",
          "Therien"
        ]
      },
      hobit:
      {
        name: "hobit",
        itemType: "jméno",
        items:
        [
          "Jitřenka",
          "Jíva",
          "Konvalinka",
          "Kopretina",
          "Ovečka",
          "Prvosenka",
          "Pšenka",
          "Ruměnka",
          "Včelka",
          "Vrběna"
        ]
      },
      kroll:
      {
        name: "kroll",
        itemType: "jméno",
        items:
        [
          "Draga",
          "Drena",
          "Grana",
          "Kraga",
          "Krana",
          "Kruga",
          "Trela",
          "Truda",
          "Zraga",
          "Zrena"
        ]
      },
      kuduk:
      {
        name: "kudůk",
        itemType: "jméno",
        items:
        [
          "Duha",
          "Chvilka",
          "Kudla",
          "Láska",
          "Liška",
          "Pilka",
          "Starost",
          "Svíčka",
          "Šelest",
          "Vrána"
        ]
      },
      trpaslik:
      {
        name: "trpaslík",
        itemType: "jméno",
        items:
        [
          "Alda",
          "Bera",
          "Dagrún",
          "Fjóla",
          "Gurli",
          "Igrun",
          "Malga",
          "Svana",
          "Tira",
          "Valda"
        ]
      },
      goblin:
      {
        name: "goblin",
        itemType: "jméno",
        items:
        [
          "Akaša",
          "Aša",
          "Ašada",
          "Ašaga",
          "Giša",
          "Hašhaga",
          "Rišada",
          "Šhivra",
          "Šivara",
          "Šugura"
        ]
      },
      ork:
      {
        name: "ork",
        itemType: "jméno",
        items:
        [
          "Braga",
          "Bresara",
          "Draga",
          "Fruga",
          "Furana",
          "Hagra",
          "Chaga",
          "Mugra",
          "Tekla",
          "Varva"
        ]
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  muzska_jmena:
  {
    name: "Mužská jména",
    tables:
    {
      barbar:
      {
        name: "barbar",
        itemType: "jméno",
        items:
        [
          "Dered",
          "Frox",
          "Hogen",
          "Hrun",
          "Kasudor",
          "Mogor",
          "Sargun",
          "Tagabur",
          "Tredgar",
          "Valkon"
        ]
      },
      clovek:
      {
        name: "člověk",
        itemType: "jméno",
        items:
        [
          "Alar",
          "Beldar",
          "Dralfax",
          "Jerin",
          "Kelen",
          "Midar",
          "Oltis",
          "Pelek",
          "Ulan",
          "Ventar"
        ]
      },
      elf:
      {
        name: "elf",
        itemType: "jméno",
        items:
        [
          "Airon",
          "Fionor",
          "Gildon",
          "Gilias",
          "Iandil",
          "Istarten",
          "Linias",
          "Norgalad",
          "Theinor",
          "Turandil"
        ]
      },
      hobit:
      {
        name: "hobit",
        itemType: "jméno",
        items:
        [
          "Ječmínek",
          "Kapřík",
          "Klásek",
          "Koník",
          "Kovařík",
          "Kůzlátko",
          "Pasáček",
          "Rybařík",
          "Štístko",
          "Třmínek"
        ]
      },
      kroll:
      {
        name: "kroll",
        itemType: "jméno",
        items:
        [
          "Dran",
          "Drog",
          "Drund",
          "Grud",
          "Grul",
          "Krag",
          "Krug",
          "Trond",
          "Zrud",
          "Zrul"
        ]
      },
      kuduk:
      {
        name: "kudůk",
        itemType: "jméno",
        items:
        [
          "Jásot",
          "Mýval",
          "Pilník",
          "Přízrak",
          "Smutek",
          "Stesk",
          "Stín",
          "Svišť",
          "Šepot",
          "Šperhák"
        ]
      },
      trpaslik:
      {
        name: "trpaslík",
        itemType: "jméno",
        items:
        [
          "Bombidur",
          "Dóri",
          "Duchar",
          "Gimdór",
          "Gorin",
          "Kínar",
          "Nárin",
          "Nóri",
          "Telónar",
          "Váli"
        ]
      },
      goblin:
      {
        name: "goblin",
        itemType: "jméno",
        items:
        [
          "Čagruš",
          "Gháš",
          "Grišnág",
          "Hašág",
          "Huršůg",
          "Hušnág",
          "Mašgul",
          "Šagrul",
          "Šarkůf",
          "Šiveš"
        ]
      },
      ork:
      {
        name: "ork",
        itemType: "jméno",
        items:
        [
          "Argug",
          "Dhorgar",
          "Frug",
          "Gharg",
          "Gorg",
          "Grurg",
          "Hugrug",
          "Hurg",
          "Thrt",
          "Vorg"
        ]
      }
    }
  }
};