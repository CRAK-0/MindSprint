import fs from "node:fs";
import https from "node:https";

const URL =
  "https://raw.githubusercontent.com/monkeytypegame/monkeytype/master/frontend/src/ts/constants/themes.ts";

const output = "theme/themes.ts";

const fetchFile = (url) =>
  new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        resolve(data);
      });

      response.on("error", reject);
    });
  });

const titleCase = (name) => {
  return name
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const source = await fetchFile(URL);

const themeRegex =
  /(?:["']([^"']+)["']|([a-zA-Z0-9_]+)):\s*\{([\s\S]*?)\n\s*\},/g;

const themes = {};

let match;

while ((match = themeRegex.exec(source)) !== null) {
  const themeKey = match[1] ?? match[2];
  const body = match[3];

  const getColor = (name) => {
    const regex = new RegExp(`${name}:\\s*["'](#[0-9a-fA-F]{3,8})["']`);

    return body.match(regex)?.[1];
  };

  const bg = getColor("bg");
  const main = getColor("main");
  const sub = getColor("sub");
  const subAlt = getColor("subAlt");
  const text = getColor("text");
  const error = getColor("error");
  const errorExtra = getColor("errorExtra");

  if (!bg || !main || !sub || !subAlt || !text || !error || !errorExtra) {
    continue;
  }

  themes[themeKey] = {
    name: titleCase(themeKey),

    colors: {
      background: bg,

      surface: subAlt,

      surfaceHover: sub,

      text,

      mutedText: sub,

      primary: main,

      primaryHover: main,

      border: sub,

      correct: main,

      correctBackground: subAlt,

      wrong: error,

      wrongBackground: errorExtra,

      disabled: sub,

      focus: main,
    },
  };
}

const file = `export type Theme = {
    name: string;

    colors: {
        background: string;
        surface: string;
        surfaceHover: string;

        text: string;
        mutedText: string;

        primary: string;
        primaryHover: string;

        border: string;

        correct: string;
        correctBackground: string;

        wrong: string;
        wrongBackground: string;

        disabled: string;
        focus: string;
    };
};

export const themes: Record<string, Theme> = ${JSON.stringify(themes, null, 4)};
`;

fs.writeFileSync(output, file);

console.log(`Imported ${Object.keys(themes).length} Monkeytype themes.`);
