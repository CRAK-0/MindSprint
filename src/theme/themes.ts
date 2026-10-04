export type Theme = {
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

export const themes: Record<string, Theme> = {
    "8008": {
        "name": "8008",
        "colors": {
            "background": "#333a45",
            "surface": "#2e343d",
            "surfaceHover": "#939eae",
            "text": "#e9ecf0",
            "mutedText": "#939eae",
            "primary": "#f44c7f",
            "primaryHover": "#f44c7f",
            "border": "#939eae",
            "correct": "#f44c7f",
            "correctBackground": "#2e343d",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#939eae",
            "focus": "#f44c7f"
        }
    },
    "9009": {
        "name": "9009",
        "colors": {
            "background": "#eeebe2",
            "surface": "#d3cfc1",
            "surfaceHover": "#99947f",
            "text": "#080909",
            "mutedText": "#99947f",
            "primary": "#080909",
            "primaryHover": "#080909",
            "border": "#99947f",
            "correct": "#080909",
            "correctBackground": "#d3cfc1",
            "wrong": "#c87e74",
            "wrongBackground": "#a56961",
            "disabled": "#99947f",
            "focus": "#080909"
        }
    },
    "80s_after_dark": {
        "name": "80s After Dark",
        "colors": {
            "background": "#1b1d36",
            "surface": "#17182c",
            "surfaceHover": "#99d6ea",
            "text": "#e1e7ec",
            "mutedText": "#99d6ea",
            "primary": "#fca6d1",
            "primaryHover": "#fca6d1",
            "border": "#99d6ea",
            "correct": "#fca6d1",
            "correctBackground": "#17182c",
            "wrong": "#fffb85",
            "wrongBackground": "#fffb85",
            "disabled": "#99d6ea",
            "focus": "#fca6d1"
        }
    },
    "aether": {
        "name": "Aether",
        "colors": {
            "background": "#101820",
            "surface": "#292136",
            "surfaceHover": "#cf6bdd",
            "text": "#eedaea",
            "mutedText": "#cf6bdd",
            "primary": "#eedaea",
            "primaryHover": "#eedaea",
            "border": "#cf6bdd",
            "correct": "#eedaea",
            "correctBackground": "#292136",
            "wrong": "#ff5253",
            "wrongBackground": "#e3002b",
            "disabled": "#cf6bdd",
            "focus": "#eedaea"
        }
    },
    "alduin": {
        "name": "Alduin",
        "colors": {
            "background": "#1c1c1c",
            "surface": "#242424",
            "surfaceHover": "#444444",
            "text": "#f5f3ed",
            "mutedText": "#444444",
            "primary": "#dfd7af",
            "primaryHover": "#dfd7af",
            "border": "#444444",
            "correct": "#dfd7af",
            "correctBackground": "#242424",
            "wrong": "#af5f5f",
            "wrongBackground": "#4d2113",
            "disabled": "#444444",
            "focus": "#dfd7af"
        }
    },
    "alpine": {
        "name": "Alpine",
        "colors": {
            "background": "#6c687f",
            "surface": "#77738c",
            "surfaceHover": "#9994b8",
            "text": "#ffffff",
            "mutedText": "#9994b8",
            "primary": "#ffffff",
            "primaryHover": "#ffffff",
            "border": "#9994b8",
            "correct": "#ffffff",
            "correctBackground": "#77738c",
            "wrong": "#e32b2b",
            "wrongBackground": "#a62626",
            "disabled": "#9994b8",
            "focus": "#ffffff"
        }
    },
    "anti_hero": {
        "name": "Anti Hero",
        "colors": {
            "background": "#00002e",
            "surface": "#060548",
            "surfaceHover": "#ff3d8b",
            "text": "#f1deef",
            "mutedText": "#ff3d8b",
            "primary": "#ffadad",
            "primaryHover": "#ffadad",
            "border": "#ff3d8b",
            "correct": "#ffadad",
            "correctBackground": "#060548",
            "wrong": "#8fecff",
            "wrongBackground": "#558cab",
            "disabled": "#ff3d8b",
            "focus": "#ffadad"
        }
    },
    "arch": {
        "name": "Arch",
        "colors": {
            "background": "#0c0d11",
            "surface": "#171a25",
            "surfaceHover": "#454864",
            "text": "#f6f5f5",
            "mutedText": "#454864",
            "primary": "#7ebab5",
            "primaryHover": "#7ebab5",
            "border": "#454864",
            "correct": "#7ebab5",
            "correctBackground": "#171a25",
            "wrong": "#ff4754",
            "wrongBackground": "#b02a33",
            "disabled": "#454864",
            "focus": "#7ebab5"
        }
    },
    "aurora": {
        "name": "Aurora",
        "colors": {
            "background": "#011926",
            "surface": "#000c13",
            "surfaceHover": "#245c69",
            "text": "#fff",
            "mutedText": "#245c69",
            "primary": "#00e980",
            "primaryHover": "#00e980",
            "border": "#245c69",
            "correct": "#00e980",
            "correctBackground": "#000c13",
            "wrong": "#b94da1",
            "wrongBackground": "#9b3a76",
            "disabled": "#245c69",
            "focus": "#00e980"
        }
    },
    "beach": {
        "name": "Beach",
        "colors": {
            "background": "#ffeead",
            "surface": "#f7dc8f",
            "surfaceHover": "#ffcc5c",
            "text": "#5b7869",
            "mutedText": "#ffcc5c",
            "primary": "#96ceb4",
            "primaryHover": "#96ceb4",
            "border": "#ffcc5c",
            "correct": "#96ceb4",
            "correctBackground": "#f7dc8f",
            "wrong": "#ff6f69",
            "wrongBackground": "#ff6f69",
            "disabled": "#ffcc5c",
            "focus": "#96ceb4"
        }
    },
    "bento": {
        "name": "Bento",
        "colors": {
            "background": "#2d394d",
            "surface": "#263041",
            "surfaceHover": "#4a768d",
            "text": "#fffaf8",
            "mutedText": "#4a768d",
            "primary": "#ff7a90",
            "primaryHover": "#ff7a90",
            "border": "#4a768d",
            "correct": "#ff7a90",
            "correctBackground": "#263041",
            "wrong": "#ee2a3a",
            "wrongBackground": "#f04040",
            "disabled": "#4a768d",
            "focus": "#ff7a90"
        }
    },
    "bingsu": {
        "name": "Bingsu",
        "colors": {
            "background": "#b8a7aa",
            "surface": "#ab989e",
            "surfaceHover": "#48373d",
            "text": "#ebe6ea",
            "mutedText": "#48373d",
            "primary": "#83616e",
            "primaryHover": "#83616e",
            "border": "#48373d",
            "correct": "#83616e",
            "correctBackground": "#ab989e",
            "wrong": "#921341",
            "wrongBackground": "#640b2c",
            "disabled": "#48373d",
            "focus": "#83616e"
        }
    },
    "bliss": {
        "name": "Bliss",
        "colors": {
            "background": "#262727",
            "surface": "#343231",
            "surfaceHover": "#665957",
            "text": "#fff",
            "mutedText": "#665957",
            "primary": "#f0d3c9",
            "primaryHover": "#f0d3c9",
            "border": "#665957",
            "correct": "#f0d3c9",
            "correctBackground": "#343231",
            "wrong": "#bd4141",
            "wrongBackground": "#883434",
            "disabled": "#665957",
            "focus": "#f0d3c9"
        }
    },
    "blue_dolphin": {
        "name": "Blue Dolphin",
        "colors": {
            "background": "#003950",
            "surface": "#014961",
            "surfaceHover": "#00e4ff",
            "text": "#82eaff",
            "mutedText": "#00e4ff",
            "primary": "#ffcefb",
            "primaryHover": "#ffcefb",
            "border": "#00e4ff",
            "correct": "#ffcefb",
            "correctBackground": "#014961",
            "wrong": "#ffbde6",
            "wrongBackground": "#ff8188",
            "disabled": "#00e4ff",
            "focus": "#ffcefb"
        }
    },
    "blueberry_dark": {
        "name": "Blueberry Dark",
        "colors": {
            "background": "#212b42",
            "surface": "#1b2334",
            "surfaceHover": "#5c7da5",
            "text": "#91b4d5",
            "mutedText": "#5c7da5",
            "primary": "#add7ff",
            "primaryHover": "#add7ff",
            "border": "#5c7da5",
            "correct": "#add7ff",
            "correctBackground": "#1b2334",
            "wrong": "#df4576",
            "wrongBackground": "#d996ac",
            "disabled": "#5c7da5",
            "focus": "#add7ff"
        }
    },
    "blueberry_light": {
        "name": "Blueberry Light",
        "colors": {
            "background": "#dae0f5",
            "surface": "#c1c7df",
            "surfaceHover": "#92a4be",
            "text": "#678198",
            "mutedText": "#92a4be",
            "primary": "#506477",
            "primaryHover": "#506477",
            "border": "#92a4be",
            "correct": "#506477",
            "correctBackground": "#c1c7df",
            "wrong": "#df4576",
            "wrongBackground": "#d996ac",
            "disabled": "#92a4be",
            "focus": "#506477"
        }
    },
    "botanical": {
        "name": "Botanical",
        "colors": {
            "background": "#7b9c98",
            "surface": "#72908d",
            "surfaceHover": "#495755",
            "text": "#eaf1f3",
            "mutedText": "#495755",
            "primary": "#eaf1f3",
            "primaryHover": "#eaf1f3",
            "border": "#495755",
            "correct": "#eaf1f3",
            "correctBackground": "#72908d",
            "wrong": "#f6c9b4",
            "wrongBackground": "#f59a71",
            "disabled": "#495755",
            "focus": "#eaf1f3"
        }
    },
    "bouquet": {
        "name": "Bouquet",
        "colors": {
            "background": "#173f35",
            "surface": "#1f4e43",
            "surfaceHover": "#408e7b",
            "text": "#e9e0d2",
            "mutedText": "#408e7b",
            "primary": "#eaa09c",
            "primaryHover": "#eaa09c",
            "border": "#408e7b",
            "correct": "#eaa09c",
            "correctBackground": "#1f4e43",
            "wrong": "#d44729",
            "wrongBackground": "#8f2f19",
            "disabled": "#408e7b",
            "focus": "#eaa09c"
        }
    },
    "breeze": {
        "name": "Breeze",
        "colors": {
            "background": "#e8d5c4",
            "surface": "#f6e6da",
            "surfaceHover": "#3a98b9",
            "text": "#1b4c5e",
            "mutedText": "#3a98b9",
            "primary": "#7d67a9",
            "primaryHover": "#7d67a9",
            "border": "#3a98b9",
            "correct": "#7d67a9",
            "correctBackground": "#f6e6da",
            "wrong": "#7d67a9",
            "wrongBackground": "#9f3e6d",
            "disabled": "#3a98b9",
            "focus": "#7d67a9"
        }
    },
    "bushido": {
        "name": "Bushido",
        "colors": {
            "background": "#242933",
            "surface": "#1c222d",
            "surfaceHover": "#596172",
            "text": "#f6f0e9",
            "mutedText": "#596172",
            "primary": "#ec4c56",
            "primaryHover": "#ec4c56",
            "border": "#596172",
            "correct": "#ec4c56",
            "correctBackground": "#1c222d",
            "wrong": "#ec4c56",
            "wrongBackground": "#9b333a",
            "disabled": "#596172",
            "focus": "#ec4c56"
        }
    },
    "cafe": {
        "name": "Cafe",
        "colors": {
            "background": "#ceb18d",
            "surface": "#bba180",
            "surfaceHover": "#d4d2d1",
            "text": "#14120f",
            "mutedText": "#d4d2d1",
            "primary": "#14120f",
            "primaryHover": "#14120f",
            "border": "#d4d2d1",
            "correct": "#14120f",
            "correctBackground": "#bba180",
            "wrong": "#c82931",
            "wrongBackground": "#ac1823",
            "disabled": "#d4d2d1",
            "focus": "#14120f"
        }
    },
    "camping": {
        "name": "Camping",
        "colors": {
            "background": "#faf1e4",
            "surface": "#e7dccb",
            "surfaceHover": "#c2b8aa",
            "text": "#3c403b",
            "mutedText": "#c2b8aa",
            "primary": "#618c56",
            "primaryHover": "#618c56",
            "border": "#c2b8aa",
            "correct": "#618c56",
            "correctBackground": "#e7dccb",
            "wrong": "#ad4f4e",
            "wrongBackground": "#7e3a39",
            "disabled": "#c2b8aa",
            "focus": "#618c56"
        }
    },
    "carbon": {
        "name": "Carbon",
        "colors": {
            "background": "#313131",
            "surface": "#2b2b2b",
            "surfaceHover": "#616161",
            "text": "#f5e6c8",
            "mutedText": "#616161",
            "primary": "#f66e0d",
            "primaryHover": "#f66e0d",
            "border": "#616161",
            "correct": "#f66e0d",
            "correctBackground": "#2b2b2b",
            "wrong": "#e72d2d",
            "wrongBackground": "#7e2a33",
            "disabled": "#616161",
            "focus": "#f66e0d"
        }
    },
    "catppuccin": {
        "name": "Catppuccin",
        "colors": {
            "background": "#1e1e2e",
            "surface": "#181825",
            "surfaceHover": "#7f849c",
            "text": "#cdd6f4",
            "mutedText": "#7f849c",
            "primary": "#cba6f7",
            "primaryHover": "#cba6f7",
            "border": "#7f849c",
            "correct": "#cba6f7",
            "correctBackground": "#181825",
            "wrong": "#f38ba8",
            "wrongBackground": "#eba0ac",
            "disabled": "#7f849c",
            "focus": "#cba6f7"
        }
    },
    "chaos_theory": {
        "name": "Chaos Theory",
        "colors": {
            "background": "#141221",
            "surface": "#1e1d2f",
            "surfaceHover": "#676e8a",
            "text": "#dde5ed",
            "mutedText": "#676e8a",
            "primary": "#fd77d7",
            "primaryHover": "#fd77d7",
            "border": "#676e8a",
            "correct": "#fd77d7",
            "correctBackground": "#1e1d2f",
            "wrong": "#fd77d7",
            "wrongBackground": "#b03c47",
            "disabled": "#676e8a",
            "focus": "#fd77d7"
        }
    },
    "cheesecake": {
        "name": "Cheesecake",
        "colors": {
            "background": "#fdf0d5",
            "surface": "#f3e2bf",
            "surfaceHover": "#d91c81",
            "text": "#3a3335",
            "mutedText": "#d91c81",
            "primary": "#8e2949",
            "primaryHover": "#8e2949",
            "border": "#d91c81",
            "correct": "#8e2949",
            "correctBackground": "#f3e2bf",
            "wrong": "#5cf074",
            "wrongBackground": "#5cf074",
            "disabled": "#d91c81",
            "focus": "#8e2949"
        }
    },
    "cherry_blossom": {
        "name": "Cherry Blossom",
        "colors": {
            "background": "#323437",
            "surface": "#2d2f31",
            "surfaceHover": "#787d82",
            "text": "#d1d0c5",
            "mutedText": "#787d82",
            "primary": "#d65ccc",
            "primaryHover": "#d65ccc",
            "border": "#787d82",
            "correct": "#d65ccc",
            "correctBackground": "#2d2f31",
            "wrong": "#ca4754",
            "wrongBackground": "#d32738",
            "disabled": "#787d82",
            "focus": "#d65ccc"
        }
    },
    "comfy": {
        "name": "Comfy",
        "colors": {
            "background": "#4a5b6e",
            "surface": "#425366",
            "surfaceHover": "#9ec1cc",
            "text": "#f5efee",
            "mutedText": "#9ec1cc",
            "primary": "#f8cdc6",
            "primaryHover": "#f8cdc6",
            "border": "#9ec1cc",
            "correct": "#f8cdc6",
            "correctBackground": "#425366",
            "wrong": "#c9465e",
            "wrongBackground": "#c9465e",
            "disabled": "#9ec1cc",
            "focus": "#f8cdc6"
        }
    },
    "copper": {
        "name": "Copper",
        "colors": {
            "background": "#442f29",
            "surface": "#50362e",
            "surfaceHover": "#7ebab5",
            "text": "#e7e0de",
            "mutedText": "#7ebab5",
            "primary": "#b46a55",
            "primaryHover": "#b46a55",
            "border": "#7ebab5",
            "correct": "#b46a55",
            "correctBackground": "#50362e",
            "wrong": "#a32424",
            "wrongBackground": "#ec0909",
            "disabled": "#7ebab5",
            "focus": "#b46a55"
        }
    },
    "creamsicle": {
        "name": "Creamsicle",
        "colors": {
            "background": "#ff9869",
            "surface": "#fe8954",
            "surfaceHover": "#ff661f",
            "text": "#fcfcf8",
            "mutedText": "#ff661f",
            "primary": "#fcfcf8",
            "primaryHover": "#fcfcf8",
            "border": "#ff661f",
            "correct": "#fcfcf8",
            "correctBackground": "#fe8954",
            "wrong": "#6a0dad",
            "wrongBackground": "#6a0dad",
            "disabled": "#ff661f",
            "focus": "#fcfcf8"
        }
    },
    "cy_red": {
        "name": "Cy Red",
        "colors": {
            "background": "#6e2626",
            "surface": "#3f1616",
            "surfaceHover": "#ff6060",
            "text": "#ffaaaa",
            "mutedText": "#ff6060",
            "primary": "#e55050",
            "primaryHover": "#e55050",
            "border": "#ff6060",
            "correct": "#e55050",
            "correctBackground": "#3f1616",
            "wrong": "#919fd9",
            "wrongBackground": "#4d5d9e",
            "disabled": "#ff6060",
            "focus": "#e55050"
        }
    },
    "cyberspace": {
        "name": "Cyberspace",
        "colors": {
            "background": "#181c18",
            "surface": "#131613",
            "surfaceHover": "#9578d3",
            "text": "#c2fbe1",
            "mutedText": "#9578d3",
            "primary": "#00ce7c",
            "primaryHover": "#00ce7c",
            "border": "#9578d3",
            "correct": "#00ce7c",
            "correctBackground": "#131613",
            "wrong": "#ff5f5f",
            "wrongBackground": "#d22a2a",
            "disabled": "#9578d3",
            "focus": "#00ce7c"
        }
    },
    "dark": {
        "name": "Dark",
        "colors": {
            "background": "#111",
            "surface": "#191919",
            "surfaceHover": "#444",
            "text": "#eee",
            "mutedText": "#444",
            "primary": "#eee",
            "primaryHover": "#eee",
            "border": "#444",
            "correct": "#eee",
            "correctBackground": "#191919",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#444",
            "focus": "#eee"
        }
    },
    "dark_magic_girl": {
        "name": "Dark Magic Girl",
        "colors": {
            "background": "#091f2c",
            "surface": "#071823",
            "surfaceHover": "#93e8d3",
            "text": "#a288d9",
            "mutedText": "#93e8d3",
            "primary": "#f5b1cc",
            "primaryHover": "#f5b1cc",
            "border": "#93e8d3",
            "correct": "#f5b1cc",
            "correctBackground": "#071823",
            "wrong": "#e45c96",
            "wrongBackground": "#e45c96",
            "disabled": "#93e8d3",
            "focus": "#f5b1cc"
        }
    },
    "dark_note": {
        "name": "Dark Note",
        "colors": {
            "background": "#1f1f1f",
            "surface": "#141414",
            "surfaceHover": "#768f95",
            "text": "#d2dff4",
            "mutedText": "#768f95",
            "primary": "#f2c17b",
            "primaryHover": "#f2c17b",
            "border": "#768f95",
            "correct": "#f2c17b",
            "correctBackground": "#141414",
            "wrong": "#ff0000",
            "wrongBackground": "#588498",
            "disabled": "#768f95",
            "focus": "#f2c17b"
        }
    },
    "darling": {
        "name": "Darling",
        "colors": {
            "background": "#fec8cd",
            "surface": "#f2babd",
            "surfaceHover": "#a30000",
            "text": "#ffffff",
            "mutedText": "#a30000",
            "primary": "#ffffff",
            "primaryHover": "#ffffff",
            "border": "#a30000",
            "correct": "#ffffff",
            "correctBackground": "#f2babd",
            "wrong": "#2e7dde",
            "wrongBackground": "#2e7dde",
            "disabled": "#a30000",
            "focus": "#ffffff"
        }
    },
    "deku": {
        "name": "Deku",
        "colors": {
            "background": "#058b8c",
            "surface": "#0e7d7e",
            "surfaceHover": "#255458",
            "text": "#f7f2ea",
            "mutedText": "#255458",
            "primary": "#b63530",
            "primaryHover": "#b63530",
            "border": "#255458",
            "correct": "#b63530",
            "correctBackground": "#0e7d7e",
            "wrong": "#b63530",
            "wrongBackground": "#530e0e",
            "disabled": "#255458",
            "focus": "#b63530"
        }
    },
    "desert_oasis": {
        "name": "Desert Oasis",
        "colors": {
            "background": "#fff2d5",
            "surface": "#eddebc",
            "surfaceHover": "#0061fe",
            "text": "#332800",
            "mutedText": "#0061fe",
            "primary": "#d19d01",
            "primaryHover": "#d19d01",
            "border": "#0061fe",
            "correct": "#d19d01",
            "correctBackground": "#eddebc",
            "wrong": "#76bb40",
            "wrongBackground": "#4e7a27",
            "disabled": "#0061fe",
            "focus": "#d19d01"
        }
    },
    "dev": {
        "name": "Dev",
        "colors": {
            "background": "#1b2028",
            "surface": "#151a21",
            "surfaceHover": "#4b5975",
            "text": "#ccccb5",
            "mutedText": "#4b5975",
            "primary": "#23a9d5",
            "primaryHover": "#23a9d5",
            "border": "#4b5975",
            "correct": "#23a9d5",
            "correctBackground": "#151a21",
            "wrong": "#b81b2c",
            "wrongBackground": "#84131f",
            "disabled": "#4b5975",
            "focus": "#23a9d5"
        }
    },
    "diner": {
        "name": "Diner",
        "colors": {
            "background": "#537997",
            "surface": "#4d6f8b",
            "surfaceHover": "#445c7f",
            "text": "#dfdbc8",
            "mutedText": "#445c7f",
            "primary": "#c3af5b",
            "primaryHover": "#c3af5b",
            "border": "#445c7f",
            "correct": "#c3af5b",
            "correctBackground": "#4d6f8b",
            "wrong": "#ad5145",
            "wrongBackground": "#7e2a33",
            "disabled": "#445c7f",
            "focus": "#c3af5b"
        }
    },
    "dino": {
        "name": "Dino",
        "colors": {
            "background": "#ffffff",
            "surface": "#cafad8",
            "surfaceHover": "#d5d5d5",
            "text": "#1d221f",
            "mutedText": "#d5d5d5",
            "primary": "#40d672",
            "primaryHover": "#40d672",
            "border": "#d5d5d5",
            "correct": "#40d672",
            "correctBackground": "#cafad8",
            "wrong": "#ff5f5f",
            "wrongBackground": "#d22a2a",
            "disabled": "#d5d5d5",
            "focus": "#40d672"
        }
    },
    "discord": {
        "name": "Discord",
        "colors": {
            "background": "#313338",
            "surface": "#2b2d31",
            "surfaceHover": "#565861",
            "text": "#dcdee3",
            "mutedText": "#565861",
            "primary": "#5a65ea",
            "primaryHover": "#5a65ea",
            "border": "#565861",
            "correct": "#5a65ea",
            "correctBackground": "#2b2d31",
            "wrong": "#df4f4b",
            "wrongBackground": "#df4f4b",
            "disabled": "#565861",
            "focus": "#5a65ea"
        }
    },
    "dmg": {
        "name": "Dmg",
        "colors": {
            "background": "#dadbdc",
            "surface": "#bec1d2",
            "surfaceHover": "#3846b1",
            "text": "#414141",
            "mutedText": "#3846b1",
            "primary": "#ae185e",
            "primaryHover": "#ae185e",
            "border": "#3846b1",
            "correct": "#ae185e",
            "correctBackground": "#bec1d2",
            "wrong": "#ae185e",
            "wrongBackground": "#93335c",
            "disabled": "#3846b1",
            "focus": "#ae185e"
        }
    },
    "dollar": {
        "name": "Dollar",
        "colors": {
            "background": "#e4e4d4",
            "surface": "#cbd0bf",
            "surfaceHover": "#8a9b69",
            "text": "#555a56",
            "mutedText": "#8a9b69",
            "primary": "#6b886b",
            "primaryHover": "#6b886b",
            "border": "#8a9b69",
            "correct": "#6b886b",
            "correctBackground": "#cbd0bf",
            "wrong": "#d60000",
            "wrongBackground": "#f68484",
            "disabled": "#8a9b69",
            "focus": "#6b886b"
        }
    },
    "dots": {
        "name": "Dots",
        "colors": {
            "background": "#121520",
            "surface": "#1b1e2c",
            "surfaceHover": "#676e8a",
            "text": "#fff",
            "mutedText": "#676e8a",
            "primary": "#fff",
            "primaryHover": "#fff",
            "border": "#676e8a",
            "correct": "#fff",
            "correctBackground": "#1b1e2c",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#676e8a",
            "focus": "#fff"
        }
    },
    "dracula": {
        "name": "Dracula",
        "colors": {
            "background": "#282a36",
            "surface": "#20222c",
            "surfaceHover": "#6272a4",
            "text": "#f8f8f2",
            "mutedText": "#6272a4",
            "primary": "#bd93f9",
            "primaryHover": "#bd93f9",
            "border": "#6272a4",
            "correct": "#bd93f9",
            "correctBackground": "#20222c",
            "wrong": "#ff5555",
            "wrongBackground": "#f1fa8c",
            "disabled": "#6272a4",
            "focus": "#bd93f9"
        }
    },
    "drowning": {
        "name": "Drowning",
        "colors": {
            "background": "#191826",
            "surface": "#1e1f2f",
            "surfaceHover": "#50688c",
            "text": "#9393a7",
            "mutedText": "#50688c",
            "primary": "#4a6fb5",
            "primaryHover": "#4a6fb5",
            "border": "#50688c",
            "correct": "#4a6fb5",
            "correctBackground": "#1e1f2f",
            "wrong": "#be555f",
            "wrongBackground": "#7e2a33",
            "disabled": "#50688c",
            "focus": "#4a6fb5"
        }
    },
    "dualshot": {
        "name": "Dualshot",
        "colors": {
            "background": "#737373",
            "surface": "#646464",
            "surfaceHover": "#aaaaaa",
            "text": "#212222",
            "mutedText": "#aaaaaa",
            "primary": "#212222",
            "primaryHover": "#212222",
            "border": "#aaaaaa",
            "correct": "#212222",
            "correctBackground": "#646464",
            "wrong": "#c82931",
            "wrongBackground": "#ac1823",
            "disabled": "#aaaaaa",
            "focus": "#212222"
        }
    },
    "earthsong": {
        "name": "Earthsong",
        "colors": {
            "background": "#292521",
            "surface": "#1d1b18",
            "surfaceHover": "#f5ae2d",
            "text": "#e6c7a8",
            "mutedText": "#f5ae2d",
            "primary": "#509452",
            "primaryHover": "#509452",
            "border": "#f5ae2d",
            "correct": "#509452",
            "correctBackground": "#1d1b18",
            "wrong": "#7e2a33",
            "wrongBackground": "#ff645a",
            "disabled": "#f5ae2d",
            "focus": "#509452"
        }
    },
    "everblush": {
        "name": "Everblush",
        "colors": {
            "background": "#141b1e",
            "surface": "#232a2d",
            "surfaceHover": "#838887",
            "text": "#dadada",
            "mutedText": "#838887",
            "primary": "#8ccf7e",
            "primaryHover": "#8ccf7e",
            "border": "#838887",
            "correct": "#8ccf7e",
            "correctBackground": "#232a2d",
            "wrong": "#e57474",
            "wrongBackground": "#ef7e7e",
            "disabled": "#838887",
            "focus": "#8ccf7e"
        }
    },
    "evil_eye": {
        "name": "Evil Eye",
        "colors": {
            "background": "#0084c2",
            "surface": "#0c79be",
            "surfaceHover": "#01589f",
            "text": "#171718",
            "mutedText": "#01589f",
            "primary": "#f7f2ea",
            "primaryHover": "#f7f2ea",
            "border": "#01589f",
            "correct": "#f7f2ea",
            "correctBackground": "#0c79be",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#01589f",
            "focus": "#f7f2ea"
        }
    },
    "ez_mode": {
        "name": "Ez Mode",
        "colors": {
            "background": "#0068c6",
            "surface": "#005bac",
            "surfaceHover": "#138bf7",
            "text": "#ffffff",
            "mutedText": "#138bf7",
            "primary": "#fa62d5",
            "primaryHover": "#fa62d5",
            "border": "#138bf7",
            "correct": "#fa62d5",
            "correctBackground": "#005bac",
            "wrong": "#4ddb47",
            "wrongBackground": "#42ba3b",
            "disabled": "#138bf7",
            "focus": "#fa62d5"
        }
    },
    "fire": {
        "name": "Fire",
        "colors": {
            "background": "#0f0000",
            "surface": "#200a0a",
            "surfaceHover": "#683434",
            "text": "#ffffff",
            "mutedText": "#683434",
            "primary": "#b31313",
            "primaryHover": "#b31313",
            "border": "#683434",
            "correct": "#b31313",
            "correctBackground": "#200a0a",
            "wrong": "#2f3cb6",
            "wrongBackground": "#434a8f",
            "disabled": "#683434",
            "focus": "#b31313"
        }
    },
    "fledgling": {
        "name": "Fledgling",
        "colors": {
            "background": "#3b363f",
            "surface": "#332e38",
            "surfaceHover": "#8e5568",
            "text": "#e6d5d3",
            "mutedText": "#8e5568",
            "primary": "#fc6e83",
            "primaryHover": "#fc6e83",
            "border": "#8e5568",
            "correct": "#fc6e83",
            "correctBackground": "#332e38",
            "wrong": "#f52443",
            "wrongBackground": "#bd001c",
            "disabled": "#8e5568",
            "focus": "#fc6e83"
        }
    },
    "fleuriste": {
        "name": "Fleuriste",
        "colors": {
            "background": "#c6b294",
            "surface": "#b4a389",
            "surfaceHover": "#64374d",
            "text": "#091914",
            "mutedText": "#64374d",
            "primary": "#405a52",
            "primaryHover": "#405a52",
            "border": "#64374d",
            "correct": "#405a52",
            "correctBackground": "#b4a389",
            "wrong": "#990000",
            "wrongBackground": "#8a1414",
            "disabled": "#64374d",
            "focus": "#405a52"
        }
    },
    "floret": {
        "name": "Floret",
        "colors": {
            "background": "#00272c",
            "surface": "#173033",
            "surfaceHover": "#779097",
            "text": "#e5e5e5",
            "mutedText": "#779097",
            "primary": "#ffdd6d",
            "primaryHover": "#ffdd6d",
            "border": "#779097",
            "correct": "#ffdd6d",
            "correctBackground": "#173033",
            "wrong": "#8a4000",
            "wrongBackground": "#00708d",
            "disabled": "#779097",
            "focus": "#ffdd6d"
        }
    },
    "froyo": {
        "name": "Froyo",
        "colors": {
            "background": "#e1dacb",
            "surface": "#d3cdc1",
            "surfaceHover": "#b29c5e",
            "text": "#7b7d7d",
            "mutedText": "#b29c5e",
            "primary": "#7b7d7d",
            "primaryHover": "#7b7d7d",
            "border": "#b29c5e",
            "correct": "#7b7d7d",
            "correctBackground": "#d3cdc1",
            "wrong": "#f28578",
            "wrongBackground": "#d56558",
            "disabled": "#b29c5e",
            "focus": "#7b7d7d"
        }
    },
    "frozen_llama": {
        "name": "Frozen Llama",
        "colors": {
            "background": "#9bf2ea",
            "surface": "#7fe7dd",
            "surfaceHover": "#b690fd",
            "text": "#ffffff",
            "mutedText": "#b690fd",
            "primary": "#6d44a6",
            "primaryHover": "#6d44a6",
            "border": "#b690fd",
            "correct": "#6d44a6",
            "correctBackground": "#7fe7dd",
            "wrong": "#e42629",
            "wrongBackground": "#e42629",
            "disabled": "#b690fd",
            "focus": "#6d44a6"
        }
    },
    "fruit_chew": {
        "name": "Fruit Chew",
        "colors": {
            "background": "#d6d3d6",
            "surface": "#cabfca",
            "surfaceHover": "#b49cb5",
            "text": "#282528",
            "mutedText": "#b49cb5",
            "primary": "#5c1e5f",
            "primaryHover": "#5c1e5f",
            "border": "#b49cb5",
            "correct": "#5c1e5f",
            "correctBackground": "#cabfca",
            "wrong": "#bd2621",
            "wrongBackground": "#a62626",
            "disabled": "#b49cb5",
            "focus": "#5c1e5f"
        }
    },
    "fundamentals": {
        "name": "Fundamentals",
        "colors": {
            "background": "#727474",
            "surface": "#666868",
            "surfaceHover": "#cac4be",
            "text": "#131313",
            "mutedText": "#cac4be",
            "primary": "#7fa482",
            "primaryHover": "#7fa482",
            "border": "#cac4be",
            "correct": "#7fa482",
            "correctBackground": "#666868",
            "wrong": "#5e477c",
            "wrongBackground": "#413157",
            "disabled": "#cac4be",
            "focus": "#7fa482"
        }
    },
    "future_funk": {
        "name": "Future Funk",
        "colors": {
            "background": "#2e1a47",
            "surface": "#27173c",
            "surfaceHover": "#c18fff",
            "text": "#f7f2ea",
            "mutedText": "#c18fff",
            "primary": "#f7f2ea",
            "primaryHover": "#f7f2ea",
            "border": "#c18fff",
            "correct": "#f7f2ea",
            "correctBackground": "#27173c",
            "wrong": "#f04e98",
            "wrongBackground": "#bd1c66",
            "disabled": "#c18fff",
            "focus": "#f7f2ea"
        }
    },
    "github": {
        "name": "Github",
        "colors": {
            "background": "#212830",
            "surface": "#141b23",
            "surfaceHover": "#788386",
            "text": "#ccdae6",
            "mutedText": "#788386",
            "primary": "#41ce5c",
            "primaryHover": "#41ce5c",
            "border": "#788386",
            "correct": "#41ce5c",
            "correctBackground": "#141b23",
            "wrong": "#c23e3a",
            "wrongBackground": "#c23e3a",
            "disabled": "#788386",
            "focus": "#41ce5c"
        }
    },
    "godspeed": {
        "name": "Godspeed",
        "colors": {
            "background": "#eae4cf",
            "surface": "#ded9c9",
            "surfaceHover": "#ada998",
            "text": "#646669",
            "mutedText": "#ada998",
            "primary": "#9abbcd",
            "primaryHover": "#9abbcd",
            "border": "#ada998",
            "correct": "#9abbcd",
            "correctBackground": "#ded9c9",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#ada998",
            "focus": "#9abbcd"
        }
    },
    "graen": {
        "name": "Graen",
        "colors": {
            "background": "#303c36",
            "surface": "#36453c",
            "surfaceHover": "#181d1a",
            "text": "#a59682",
            "mutedText": "#181d1a",
            "primary": "#a59682",
            "primaryHover": "#a59682",
            "border": "#181d1a",
            "correct": "#a59682",
            "correctBackground": "#36453c",
            "wrong": "#601420",
            "wrongBackground": "#5f0715",
            "disabled": "#181d1a",
            "focus": "#a59682"
        }
    },
    "grand_prix": {
        "name": "Grand Prix",
        "colors": {
            "background": "#36475c",
            "surface": "#42536b",
            "surfaceHover": "#5c6c80",
            "text": "#c1c7d7",
            "mutedText": "#5c6c80",
            "primary": "#c0d036",
            "primaryHover": "#c0d036",
            "border": "#5c6c80",
            "correct": "#c0d036",
            "correctBackground": "#42536b",
            "wrong": "#fc5727",
            "wrongBackground": "#fc5727",
            "disabled": "#5c6c80",
            "focus": "#c0d036"
        }
    },
    "grape": {
        "name": "Grape",
        "colors": {
            "background": "#2c003e",
            "surface": "#1f002d",
            "surfaceHover": "#6e225e",
            "text": "#fff",
            "mutedText": "#6e225e",
            "primary": "#ff8f00",
            "primaryHover": "#ff8f00",
            "border": "#6e225e",
            "correct": "#ff8f00",
            "correctBackground": "#1f002d",
            "wrong": "#ff4081",
            "wrongBackground": "#bf2054",
            "disabled": "#6e225e",
            "focus": "#ff8f00"
        }
    },
    "gruvbox_dark": {
        "name": "Gruvbox Dark",
        "colors": {
            "background": "#282828",
            "surface": "#212121",
            "surfaceHover": "#665c54",
            "text": "#ebdbb2",
            "mutedText": "#665c54",
            "primary": "#d79921",
            "primaryHover": "#d79921",
            "border": "#665c54",
            "correct": "#d79921",
            "correctBackground": "#212121",
            "wrong": "#fb4934",
            "wrongBackground": "#cc241d",
            "disabled": "#665c54",
            "focus": "#d79921"
        }
    },
    "gruvbox_light": {
        "name": "Gruvbox Light",
        "colors": {
            "background": "#fbf1c7",
            "surface": "#daceae",
            "surfaceHover": "#a89984",
            "text": "#3c3836",
            "mutedText": "#a89984",
            "primary": "#689d6a",
            "primaryHover": "#689d6a",
            "border": "#a89984",
            "correct": "#689d6a",
            "correctBackground": "#daceae",
            "wrong": "#cc241d",
            "wrongBackground": "#9d0006",
            "disabled": "#a89984",
            "focus": "#689d6a"
        }
    },
    "hammerhead": {
        "name": "Hammerhead",
        "colors": {
            "background": "#030613",
            "surface": "#0a1928",
            "surfaceHover": "#213c53",
            "text": "#e2f1f5",
            "mutedText": "#213c53",
            "primary": "#4fcdb9",
            "primaryHover": "#4fcdb9",
            "border": "#213c53",
            "correct": "#4fcdb9",
            "correctBackground": "#0a1928",
            "wrong": "#e32b2b",
            "wrongBackground": "#a62626",
            "disabled": "#213c53",
            "focus": "#4fcdb9"
        }
    },
    "hanok": {
        "name": "Hanok",
        "colors": {
            "background": "#d8d2c3",
            "surface": "#cdc0af",
            "surfaceHover": "#8b6f5c",
            "text": "#393b3b",
            "mutedText": "#8b6f5c",
            "primary": "#513a2a",
            "primaryHover": "#513a2a",
            "border": "#8b6f5c",
            "correct": "#513a2a",
            "correctBackground": "#cdc0af",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#8b6f5c",
            "focus": "#513a2a"
        }
    },
    "hedge": {
        "name": "Hedge",
        "colors": {
            "background": "#415e31",
            "surface": "#38502a",
            "surfaceHover": "#ede5b4",
            "text": "#f7f1d6",
            "mutedText": "#ede5b4",
            "primary": "#6a994e",
            "primaryHover": "#6a994e",
            "border": "#ede5b4",
            "correct": "#6a994e",
            "correctBackground": "#38502a",
            "wrong": "#ca3d3f",
            "wrongBackground": "#782832",
            "disabled": "#ede5b4",
            "focus": "#6a994e"
        }
    },
    "honey": {
        "name": "Honey",
        "colors": {
            "background": "#f2aa00",
            "surface": "#e19e00",
            "surfaceHover": "#a66b00",
            "text": "#f3eecb",
            "mutedText": "#a66b00",
            "primary": "#fff546",
            "primaryHover": "#fff546",
            "border": "#a66b00",
            "correct": "#fff546",
            "correctBackground": "#e19e00",
            "wrong": "#df3333",
            "wrongBackground": "#6d1f1f",
            "disabled": "#a66b00",
            "focus": "#fff546"
        }
    },
    "horizon": {
        "name": "Horizon",
        "colors": {
            "background": "#1c1e26",
            "surface": "#17181f",
            "surfaceHover": "#db886f",
            "text": "#bbbbbb",
            "mutedText": "#db886f",
            "primary": "#c4a88a",
            "primaryHover": "#c4a88a",
            "border": "#db886f",
            "correct": "#c4a88a",
            "correctBackground": "#17181f",
            "wrong": "#d55170",
            "wrongBackground": "#ff3d3d",
            "disabled": "#db886f",
            "focus": "#c4a88a"
        }
    },
    "husqy": {
        "name": "Husqy",
        "colors": {
            "background": "#000000",
            "surface": "#1e001e",
            "surfaceHover": "#972fff",
            "text": "#ebd7ff",
            "mutedText": "#972fff",
            "primary": "#c58aff",
            "primaryHover": "#c58aff",
            "border": "#972fff",
            "correct": "#c58aff",
            "correctBackground": "#1e001e",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#972fff",
            "focus": "#c58aff"
        }
    },
    "iceberg_dark": {
        "name": "Iceberg Dark",
        "colors": {
            "background": "#161821",
            "surface": "#232531",
            "surfaceHover": "#595e76",
            "text": "#c6c8d1",
            "mutedText": "#595e76",
            "primary": "#84a0c6",
            "primaryHover": "#84a0c6",
            "border": "#595e76",
            "correct": "#84a0c6",
            "correctBackground": "#232531",
            "wrong": "#e27878",
            "wrongBackground": "#e2a478",
            "disabled": "#595e76",
            "focus": "#84a0c6"
        }
    },
    "iceberg_light": {
        "name": "Iceberg Light",
        "colors": {
            "background": "#e8e9ec",
            "surface": "#ccceda",
            "surfaceHover": "#adb1c4",
            "text": "#33374c",
            "mutedText": "#adb1c4",
            "primary": "#2d539e",
            "primaryHover": "#2d539e",
            "border": "#adb1c4",
            "correct": "#2d539e",
            "correctBackground": "#ccceda",
            "wrong": "#cc517a",
            "wrongBackground": "#cc3768",
            "disabled": "#adb1c4",
            "focus": "#2d539e"
        }
    },
    "incognito": {
        "name": "Incognito",
        "colors": {
            "background": "#0e0e0e",
            "surface": "#151515",
            "surfaceHover": "#555555",
            "text": "#c6c6c6",
            "mutedText": "#555555",
            "primary": "#ff9900",
            "primaryHover": "#ff9900",
            "border": "#555555",
            "correct": "#ff9900",
            "correctBackground": "#151515",
            "wrong": "#e44545",
            "wrongBackground": "#e44545",
            "disabled": "#555555",
            "focus": "#ff9900"
        }
    },
    "ishtar": {
        "name": "Ishtar",
        "colors": {
            "background": "#202020",
            "surface": "#272727",
            "surfaceHover": "#847869",
            "text": "#fae1c3",
            "mutedText": "#847869",
            "primary": "#91170c",
            "primaryHover": "#91170c",
            "border": "#847869",
            "correct": "#91170c",
            "correctBackground": "#272727",
            "wrong": "#bb1e10",
            "wrongBackground": "#791717",
            "disabled": "#847869",
            "focus": "#91170c"
        }
    },
    "iv_clover": {
        "name": "Iv Clover",
        "colors": {
            "background": "#a0a0a0",
            "surface": "#bebebe",
            "surfaceHover": "#353535",
            "text": "#3b2d3b",
            "mutedText": "#353535",
            "primary": "#573e40",
            "primaryHover": "#573e40",
            "border": "#353535",
            "correct": "#573e40",
            "correctBackground": "#bebebe",
            "wrong": "#937173",
            "wrongBackground": "#987678",
            "disabled": "#353535",
            "focus": "#573e40"
        }
    },
    "iv_spade": {
        "name": "Iv Spade",
        "colors": {
            "background": "#0c0c0c",
            "surface": "#121212",
            "surfaceHover": "#404040",
            "text": "#d3c2c3",
            "mutedText": "#404040",
            "primary": "#b7976a",
            "primaryHover": "#b7976a",
            "border": "#404040",
            "correct": "#b7976a",
            "correctBackground": "#121212",
            "wrong": "#9d7b7d",
            "wrongBackground": "#a78587",
            "disabled": "#404040",
            "focus": "#b7976a"
        }
    },
    "joker": {
        "name": "Joker",
        "colors": {
            "background": "#1a0e25",
            "surface": "#14081f",
            "surfaceHover": "#7554a3",
            "text": "#e9e2f5",
            "mutedText": "#7554a3",
            "primary": "#99de1e",
            "primaryHover": "#99de1e",
            "border": "#7554a3",
            "correct": "#99de1e",
            "correctBackground": "#14081f",
            "wrong": "#e32b2b",
            "wrongBackground": "#a62626",
            "disabled": "#7554a3",
            "focus": "#99de1e"
        }
    },
    "laser": {
        "name": "Laser",
        "colors": {
            "background": "#221b44",
            "surface": "#1e173b",
            "surfaceHover": "#b82356",
            "text": "#dbe7e8",
            "mutedText": "#b82356",
            "primary": "#009eaf",
            "primaryHover": "#009eaf",
            "border": "#b82356",
            "correct": "#009eaf",
            "correctBackground": "#1e173b",
            "wrong": "#a8d400",
            "wrongBackground": "#668000",
            "disabled": "#b82356",
            "focus": "#009eaf"
        }
    },
    "lavender": {
        "name": "Lavender",
        "colors": {
            "background": "#ada6c2",
            "surface": "#a19bb9",
            "surfaceHover": "#e4e3e9",
            "text": "#2f2a41",
            "mutedText": "#e4e3e9",
            "primary": "#e4e3e9",
            "primaryHover": "#e4e3e9",
            "border": "#e4e3e9",
            "correct": "#e4e3e9",
            "correctBackground": "#a19bb9",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#e4e3e9",
            "focus": "#e4e3e9"
        }
    },
    "leather": {
        "name": "Leather",
        "colors": {
            "background": "#a86948",
            "surface": "#9a5f3f",
            "surfaceHover": "#81482b",
            "text": "#ffe4bc",
            "mutedText": "#81482b",
            "primary": "#ffe4bc",
            "primaryHover": "#ffe4bc",
            "border": "#81482b",
            "correct": "#ffe4bc",
            "correctBackground": "#9a5f3f",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#81482b",
            "focus": "#ffe4bc"
        }
    },
    "lil_dragon": {
        "name": "Lil Dragon",
        "colors": {
            "background": "#ebe1ef",
            "surface": "#dac7e2",
            "surfaceHover": "#a28db8",
            "text": "#212b43",
            "mutedText": "#a28db8",
            "primary": "#8a5bd6",
            "primaryHover": "#8a5bd6",
            "border": "#a28db8",
            "correct": "#8a5bd6",
            "correctBackground": "#dac7e2",
            "wrong": "#f794ca",
            "wrongBackground": "#f279c2",
            "disabled": "#a28db8",
            "focus": "#8a5bd6"
        }
    },
    "lilac_mist": {
        "name": "Lilac Mist",
        "colors": {
            "background": "#fffbfe",
            "surface": "#ecdcee",
            "surfaceHover": "#e094c2",
            "text": "#5c2954",
            "mutedText": "#e094c2",
            "primary": "#b94189",
            "primaryHover": "#b94189",
            "border": "#e094c2",
            "correct": "#b94189",
            "correctBackground": "#ecdcee",
            "wrong": "#ff6f69",
            "wrongBackground": "#ff6f69",
            "disabled": "#e094c2",
            "focus": "#b94189"
        }
    },
    "lime": {
        "name": "Lime",
        "colors": {
            "background": "#7c878e",
            "surface": "#737d82",
            "surfaceHover": "#4b5257",
            "text": "#bfcfdc",
            "mutedText": "#4b5257",
            "primary": "#93c247",
            "primaryHover": "#93c247",
            "border": "#4b5257",
            "correct": "#93c247",
            "correctBackground": "#737d82",
            "wrong": "#ea4221",
            "wrongBackground": "#7e2a33",
            "disabled": "#4b5257",
            "focus": "#93c247"
        }
    },
    "luna": {
        "name": "Luna",
        "colors": {
            "background": "#221c35",
            "surface": "#2f2346",
            "surfaceHover": "#5a3a7e",
            "text": "#ffe3eb",
            "mutedText": "#5a3a7e",
            "primary": "#f67599",
            "primaryHover": "#f67599",
            "border": "#5a3a7e",
            "correct": "#f67599",
            "correctBackground": "#2f2346",
            "wrong": "#efc050",
            "wrongBackground": "#c5972c",
            "disabled": "#5a3a7e",
            "focus": "#f67599"
        }
    },
    "macroblank": {
        "name": "Macroblank",
        "colors": {
            "background": "#b2d2c8",
            "surface": "#c6ddd3",
            "surfaceHover": "#717977",
            "text": "#490909",
            "mutedText": "#717977",
            "primary": "#c13117",
            "primaryHover": "#c13117",
            "border": "#717977",
            "correct": "#c13117",
            "correctBackground": "#c6ddd3",
            "wrong": "#c13117",
            "wrongBackground": "#fff5f5",
            "disabled": "#717977",
            "focus": "#c13117"
        }
    },
    "magic_girl": {
        "name": "Magic Girl",
        "colors": {
            "background": "#ffffff",
            "surface": "#f2f2f2",
            "surfaceHover": "#93e8d3",
            "text": "#00ac8c",
            "mutedText": "#93e8d3",
            "primary": "#f5b1cc",
            "primaryHover": "#f5b1cc",
            "border": "#93e8d3",
            "correct": "#f5b1cc",
            "correctBackground": "#f2f2f2",
            "wrong": "#ffe495",
            "wrongBackground": "#e45c96",
            "disabled": "#93e8d3",
            "focus": "#f5b1cc"
        }
    },
    "mashu": {
        "name": "Mashu",
        "colors": {
            "background": "#2b2b2c",
            "surface": "#27242c",
            "surfaceHover": "#d8a0a6",
            "text": "#f1e2e4",
            "mutedText": "#d8a0a6",
            "primary": "#76689a",
            "primaryHover": "#76689a",
            "border": "#d8a0a6",
            "correct": "#76689a",
            "correctBackground": "#27242c",
            "wrong": "#d44729",
            "wrongBackground": "#8f2f19",
            "disabled": "#d8a0a6",
            "focus": "#76689a"
        }
    },
    "matcha_moccha": {
        "name": "Matcha Moccha",
        "colors": {
            "background": "#523525",
            "surface": "#422b1e",
            "surfaceHover": "#9e6749",
            "text": "#ecddcc",
            "mutedText": "#9e6749",
            "primary": "#7ec160",
            "primaryHover": "#7ec160",
            "border": "#9e6749",
            "correct": "#7ec160",
            "correctBackground": "#422b1e",
            "wrong": "#fb4934",
            "wrongBackground": "#cc241d",
            "disabled": "#9e6749",
            "focus": "#7ec160"
        }
    },
    "material": {
        "name": "Material",
        "colors": {
            "background": "#263238",
            "surface": "#2e3c43",
            "surfaceHover": "#4c6772",
            "text": "#e6edf3",
            "mutedText": "#4c6772",
            "primary": "#80cbc4",
            "primaryHover": "#80cbc4",
            "border": "#4c6772",
            "correct": "#80cbc4",
            "correctBackground": "#2e3c43",
            "wrong": "#fb4934",
            "wrongBackground": "#cc241d",
            "disabled": "#4c6772",
            "focus": "#80cbc4"
        }
    },
    "matrix": {
        "name": "Matrix",
        "colors": {
            "background": "#000000",
            "surface": "#032000",
            "surfaceHover": "#006500",
            "text": "#d1ffcd",
            "mutedText": "#006500",
            "primary": "#15ff00",
            "primaryHover": "#15ff00",
            "border": "#006500",
            "correct": "#15ff00",
            "correctBackground": "#032000",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#006500",
            "focus": "#15ff00"
        }
    },
    "menthol": {
        "name": "Menthol",
        "colors": {
            "background": "#00c18c",
            "surface": "#17ae7d",
            "surfaceHover": "#186544",
            "text": "#ffffff",
            "mutedText": "#186544",
            "primary": "#ffffff",
            "primaryHover": "#ffffff",
            "border": "#186544",
            "correct": "#ffffff",
            "correctBackground": "#17ae7d",
            "wrong": "#e03c3c",
            "wrongBackground": "#b12525",
            "disabled": "#186544",
            "focus": "#ffffff"
        }
    },
    "metaverse": {
        "name": "Metaverse",
        "colors": {
            "background": "#232323",
            "surface": "#1d1d1d",
            "surfaceHover": "#5e5e5e",
            "text": "#e8e8e8",
            "mutedText": "#5e5e5e",
            "primary": "#d82934",
            "primaryHover": "#d82934",
            "border": "#5e5e5e",
            "correct": "#d82934",
            "correctBackground": "#1d1d1d",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#5e5e5e",
            "focus": "#d82934"
        }
    },
    "metropolis": {
        "name": "Metropolis",
        "colors": {
            "background": "#0f1f2c",
            "surface": "#0b1822",
            "surfaceHover": "#326984",
            "text": "#e4edf1",
            "mutedText": "#326984",
            "primary": "#56c3b7",
            "primaryHover": "#56c3b7",
            "border": "#326984",
            "correct": "#56c3b7",
            "correctBackground": "#0b1822",
            "wrong": "#d44729",
            "wrongBackground": "#8f2f19",
            "disabled": "#326984",
            "focus": "#56c3b7"
        }
    },
    "mexican": {
        "name": "Mexican",
        "colors": {
            "background": "#f8ad34",
            "surface": "#f9b951",
            "surfaceHover": "#333",
            "text": "#eee",
            "mutedText": "#333",
            "primary": "#b12189",
            "primaryHover": "#b12189",
            "border": "#333",
            "correct": "#b12189",
            "correctBackground": "#f9b951",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#333",
            "focus": "#b12189"
        }
    },
    "miami": {
        "name": "Miami",
        "colors": {
            "background": "#f35588",
            "surface": "#db4979",
            "surfaceHover": "#94294c",
            "text": "#f0e9ec",
            "mutedText": "#94294c",
            "primary": "#05dfd7",
            "primaryHover": "#05dfd7",
            "border": "#94294c",
            "correct": "#05dfd7",
            "correctBackground": "#db4979",
            "wrong": "#fff591",
            "wrongBackground": "#b9b269",
            "disabled": "#94294c",
            "focus": "#05dfd7"
        }
    },
    "miami_nights": {
        "name": "Miami Nights",
        "colors": {
            "background": "#18181a",
            "surface": "#0f0f10",
            "surfaceHover": "#47bac0",
            "text": "#fff",
            "mutedText": "#47bac0",
            "primary": "#e4609b",
            "primaryHover": "#e4609b",
            "border": "#47bac0",
            "correct": "#e4609b",
            "correctBackground": "#0f0f10",
            "wrong": "#fff591",
            "wrongBackground": "#b6af68",
            "disabled": "#47bac0",
            "focus": "#e4609b"
        }
    },
    "midnight": {
        "name": "Midnight",
        "colors": {
            "background": "#0b0e13",
            "surface": "#141a24",
            "surfaceHover": "#394760",
            "text": "#9fadc6",
            "mutedText": "#394760",
            "primary": "#60759f",
            "primaryHover": "#60759f",
            "border": "#394760",
            "correct": "#60759f",
            "correctBackground": "#141a24",
            "wrong": "#c27070",
            "wrongBackground": "#c28b70",
            "disabled": "#394760",
            "focus": "#60759f"
        }
    },
    "milkshake": {
        "name": "Milkshake",
        "colors": {
            "background": "#ffffff",
            "surface": "#ddeff3",
            "surfaceHover": "#62cfe6",
            "text": "#212b43",
            "mutedText": "#62cfe6",
            "primary": "#212b43",
            "primaryHover": "#212b43",
            "border": "#62cfe6",
            "correct": "#212b43",
            "correctBackground": "#ddeff3",
            "wrong": "#f19dac",
            "wrongBackground": "#e58c9d",
            "disabled": "#62cfe6",
            "focus": "#212b43"
        }
    },
    "mint": {
        "name": "Mint",
        "colors": {
            "background": "#05385b",
            "surface": "#07324e",
            "surfaceHover": "#20688a",
            "text": "#edf5e1",
            "mutedText": "#20688a",
            "primary": "#5cdb95",
            "primaryHover": "#5cdb95",
            "border": "#20688a",
            "correct": "#5cdb95",
            "correctBackground": "#07324e",
            "wrong": "#f35588",
            "wrongBackground": "#a3385a",
            "disabled": "#20688a",
            "focus": "#5cdb95"
        }
    },
    "mizu": {
        "name": "Mizu",
        "colors": {
            "background": "#afcbdd",
            "surface": "#9fc1d4",
            "surfaceHover": "#85a5bb",
            "text": "#1a2633",
            "mutedText": "#85a5bb",
            "primary": "#fcfbf6",
            "primaryHover": "#fcfbf6",
            "border": "#85a5bb",
            "correct": "#fcfbf6",
            "correctBackground": "#9fc1d4",
            "wrong": "#bf616a",
            "wrongBackground": "#793e44",
            "disabled": "#85a5bb",
            "focus": "#fcfbf6"
        }
    },
    "modern_dolch": {
        "name": "Modern Dolch",
        "colors": {
            "background": "#2d2e30",
            "surface": "#242527",
            "surfaceHover": "#54585c",
            "text": "#e3e6eb",
            "mutedText": "#54585c",
            "primary": "#7eddd3",
            "primaryHover": "#7eddd3",
            "border": "#54585c",
            "correct": "#7eddd3",
            "correctBackground": "#242527",
            "wrong": "#d36a7b",
            "wrongBackground": "#994154",
            "disabled": "#54585c",
            "focus": "#7eddd3"
        }
    },
    "modern_dolch_light": {
        "name": "Modern Dolch Light",
        "colors": {
            "background": "#dbdbdb",
            "surface": "#e8e8e8",
            "surfaceHover": "#a3a2a2",
            "text": "#454545",
            "mutedText": "#a3a2a2",
            "primary": "#8fd1c3",
            "primaryHover": "#8fd1c3",
            "border": "#a3a2a2",
            "correct": "#8fd1c3",
            "correctBackground": "#e8e8e8",
            "wrong": "#ea8a9a",
            "wrongBackground": "#e0556d",
            "disabled": "#a3a2a2",
            "focus": "#8fd1c3"
        }
    },
    "modern_ink": {
        "name": "Modern Ink",
        "colors": {
            "background": "#ffffff",
            "surface": "#ececec",
            "surfaceHover": "#b7b7b7",
            "text": "#000000",
            "mutedText": "#b7b7b7",
            "primary": "#ff360d",
            "primaryHover": "#ff360d",
            "border": "#b7b7b7",
            "correct": "#ff360d",
            "correctBackground": "#ececec",
            "wrong": "#d70000",
            "wrongBackground": "#b00000",
            "disabled": "#b7b7b7",
            "focus": "#ff360d"
        }
    },
    "monokai": {
        "name": "Monokai",
        "colors": {
            "background": "#272822",
            "surface": "#1f201b",
            "surfaceHover": "#e6db74",
            "text": "#e2e2dc",
            "mutedText": "#e6db74",
            "primary": "#a6e22e",
            "primaryHover": "#a6e22e",
            "border": "#e6db74",
            "correct": "#a6e22e",
            "correctBackground": "#1f201b",
            "wrong": "#f92672",
            "wrongBackground": "#fd971f",
            "disabled": "#e6db74",
            "focus": "#a6e22e"
        }
    },
    "moonlight": {
        "name": "Moonlight",
        "colors": {
            "background": "#191f28",
            "surface": "#141a22",
            "surfaceHover": "#4b5975",
            "text": "#ccccb5",
            "mutedText": "#4b5975",
            "primary": "#c69f68",
            "primaryHover": "#c69f68",
            "border": "#4b5975",
            "correct": "#c69f68",
            "correctBackground": "#141a22",
            "wrong": "#b81b2c",
            "wrongBackground": "#84131f",
            "disabled": "#4b5975",
            "focus": "#c69f68"
        }
    },
    "mountain": {
        "name": "Mountain",
        "colors": {
            "background": "#0f0f0f",
            "surface": "#1a1a1a",
            "surfaceHover": "#4c4c4c",
            "text": "#e7e7e7",
            "mutedText": "#4c4c4c",
            "primary": "#e7e7e7",
            "primaryHover": "#e7e7e7",
            "border": "#4c4c4c",
            "correct": "#e7e7e7",
            "correctBackground": "#1a1a1a",
            "wrong": "#ac8c8c",
            "wrongBackground": "#c49ea0",
            "disabled": "#4c4c4c",
            "focus": "#e7e7e7"
        }
    },
    "mr_sleeves": {
        "name": "Mr Sleeves",
        "colors": {
            "background": "#d1d7da",
            "surface": "#bfcbd1",
            "surfaceHover": "#9a9fa1",
            "text": "#1d1d1d",
            "mutedText": "#9a9fa1",
            "primary": "#daa99b",
            "primaryHover": "#daa99b",
            "border": "#9a9fa1",
            "correct": "#daa99b",
            "correctBackground": "#bfcbd1",
            "wrong": "#bf6464",
            "wrongBackground": "#793e44",
            "disabled": "#9a9fa1",
            "focus": "#daa99b"
        }
    },
    "ms_cupcakes": {
        "name": "Ms Cupcakes",
        "colors": {
            "background": "#ffffff",
            "surface": "#edf8fa",
            "surfaceHover": "#d64090",
            "text": "#0a282f",
            "mutedText": "#d64090",
            "primary": "#5ed5f3",
            "primaryHover": "#5ed5f3",
            "border": "#d64090",
            "correct": "#5ed5f3",
            "correctBackground": "#edf8fa",
            "wrong": "#a4dd32",
            "wrongBackground": "#90bd34",
            "disabled": "#d64090",
            "focus": "#5ed5f3"
        }
    },
    "muted": {
        "name": "Muted",
        "colors": {
            "background": "#525252",
            "surface": "#494949",
            "surfaceHover": "#939eae",
            "text": "#b1e4e3",
            "mutedText": "#939eae",
            "primary": "#c5b4e3",
            "primaryHover": "#c5b4e3",
            "border": "#939eae",
            "correct": "#c5b4e3",
            "correctBackground": "#494949",
            "wrong": "#edc1cd",
            "wrongBackground": "#edc1cd",
            "disabled": "#939eae",
            "focus": "#c5b4e3"
        }
    },
    "nautilus": {
        "name": "Nautilus",
        "colors": {
            "background": "#132237",
            "surface": "#0e1a29",
            "surfaceHover": "#0b4c6c",
            "text": "#1cbaac",
            "mutedText": "#0b4c6c",
            "primary": "#ebb723",
            "primaryHover": "#ebb723",
            "border": "#0b4c6c",
            "correct": "#ebb723",
            "correctBackground": "#0e1a29",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#0b4c6c",
            "focus": "#ebb723"
        }
    },
    "nebula": {
        "name": "Nebula",
        "colors": {
            "background": "#212135",
            "surface": "#191928",
            "surfaceHover": "#19b3b8",
            "text": "#838686",
            "mutedText": "#19b3b8",
            "primary": "#be3c88",
            "primaryHover": "#be3c88",
            "border": "#19b3b8",
            "correct": "#be3c88",
            "correctBackground": "#191928",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#19b3b8",
            "focus": "#be3c88"
        }
    },
    "night_runner": {
        "name": "Night Runner",
        "colors": {
            "background": "#212121",
            "surface": "#1a1a1a",
            "surfaceHover": "#5c4a9c",
            "text": "#e8e8e8",
            "mutedText": "#5c4a9c",
            "primary": "#feff04",
            "primaryHover": "#feff04",
            "border": "#5c4a9c",
            "correct": "#feff04",
            "correctBackground": "#1a1a1a",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#5c4a9c",
            "focus": "#feff04"
        }
    },
    "nord": {
        "name": "Nord",
        "colors": {
            "background": "#242933",
            "surface": "#2e3440",
            "surfaceHover": "#929aaa",
            "text": "#d8dee9",
            "mutedText": "#929aaa",
            "primary": "#88c0d0",
            "primaryHover": "#88c0d0",
            "border": "#929aaa",
            "correct": "#88c0d0",
            "correctBackground": "#2e3440",
            "wrong": "#bf616a",
            "wrongBackground": "#793e44",
            "disabled": "#929aaa",
            "focus": "#88c0d0"
        }
    },
    "nord_light": {
        "name": "Nord Light",
        "colors": {
            "background": "#eceff4",
            "surface": "#d8dee9",
            "surfaceHover": "#6a7791",
            "text": "#8fbcbb",
            "mutedText": "#6a7791",
            "primary": "#8fbcbb",
            "primaryHover": "#8fbcbb",
            "border": "#6a7791",
            "correct": "#8fbcbb",
            "correctBackground": "#d8dee9",
            "wrong": "#bf616a",
            "wrongBackground": "#793e44",
            "disabled": "#6a7791",
            "focus": "#8fbcbb"
        }
    },
    "norse": {
        "name": "Norse",
        "colors": {
            "background": "#242425",
            "surface": "#303333",
            "surfaceHover": "#505b5e",
            "text": "#ccc2b1",
            "mutedText": "#505b5e",
            "primary": "#2b5f6d",
            "primaryHover": "#2b5f6d",
            "border": "#505b5e",
            "correct": "#2b5f6d",
            "correctBackground": "#303333",
            "wrong": "#7e2a2a",
            "wrongBackground": "#771d1d",
            "disabled": "#505b5e",
            "focus": "#2b5f6d"
        }
    },
    "oblivion": {
        "name": "Oblivion",
        "colors": {
            "background": "#313231",
            "surface": "#3a3b3b",
            "surfaceHover": "#5d6263",
            "text": "#f7f5f1",
            "mutedText": "#5d6263",
            "primary": "#a5a096",
            "primaryHover": "#a5a096",
            "border": "#5d6263",
            "correct": "#a5a096",
            "correctBackground": "#3a3b3b",
            "wrong": "#dd452e",
            "wrongBackground": "#9e3423",
            "disabled": "#5d6263",
            "focus": "#a5a096"
        }
    },
    "olive": {
        "name": "Olive",
        "colors": {
            "background": "#e9e5cc",
            "surface": "#d4cfbc",
            "surfaceHover": "#b7b39e",
            "text": "#373731",
            "mutedText": "#b7b39e",
            "primary": "#92946f",
            "primaryHover": "#92946f",
            "border": "#b7b39e",
            "correct": "#92946f",
            "correctBackground": "#d4cfbc",
            "wrong": "#cf2f2f",
            "wrongBackground": "#a22929",
            "disabled": "#b7b39e",
            "focus": "#92946f"
        }
    },
    "olivia": {
        "name": "Olivia",
        "colors": {
            "background": "#1c1b1d",
            "surface": "#262223",
            "surfaceHover": "#4e3e3e",
            "text": "#f2efed",
            "mutedText": "#4e3e3e",
            "primary": "#deaf9d",
            "primaryHover": "#deaf9d",
            "border": "#4e3e3e",
            "correct": "#deaf9d",
            "correctBackground": "#262223",
            "wrong": "#bf616a",
            "wrongBackground": "#793e44",
            "disabled": "#4e3e3e",
            "focus": "#deaf9d"
        }
    },
    "onedark": {
        "name": "Onedark",
        "colors": {
            "background": "#2f343f",
            "surface": "#262b34",
            "surfaceHover": "#eceff4",
            "text": "#98c379",
            "mutedText": "#eceff4",
            "primary": "#61afef",
            "primaryHover": "#61afef",
            "border": "#eceff4",
            "correct": "#61afef",
            "correctBackground": "#262b34",
            "wrong": "#e06c75",
            "wrongBackground": "#d62436",
            "disabled": "#eceff4",
            "focus": "#61afef"
        }
    },
    "our_theme": {
        "name": "Our Theme",
        "colors": {
            "background": "#ce1226",
            "surface": "#9f1020",
            "surfaceHover": "#6d0f19",
            "text": "#ffffff",
            "mutedText": "#6d0f19",
            "primary": "#fcd116",
            "primaryHover": "#fcd116",
            "border": "#6d0f19",
            "correct": "#fcd116",
            "correctBackground": "#9f1020",
            "wrong": "#fcd116",
            "wrongBackground": "#fcd116",
            "disabled": "#6d0f19",
            "focus": "#fcd116"
        }
    },
    "pale_nimbus": {
        "name": "Pale Nimbus",
        "colors": {
            "background": "#433e4c",
            "surface": "#694f5e",
            "surfaceHover": "#ffaca3",
            "text": "#feffdb",
            "mutedText": "#ffaca3",
            "primary": "#94ffc2",
            "primaryHover": "#94ffc2",
            "border": "#ffaca3",
            "correct": "#94ffc2",
            "correctBackground": "#694f5e",
            "wrong": "#ff5c5c",
            "wrongBackground": "#ff0000",
            "disabled": "#ffaca3",
            "focus": "#94ffc2"
        }
    },
    "paper": {
        "name": "Paper",
        "colors": {
            "background": "#eeeeee",
            "surface": "#dddddd",
            "surfaceHover": "#b2b2b2",
            "text": "#444444",
            "mutedText": "#b2b2b2",
            "primary": "#444444",
            "primaryHover": "#444444",
            "border": "#b2b2b2",
            "correct": "#444444",
            "correctBackground": "#dddddd",
            "wrong": "#d70000",
            "wrongBackground": "#d70000",
            "disabled": "#b2b2b2",
            "focus": "#444444"
        }
    },
    "passion_fruit": {
        "name": "Passion Fruit",
        "colors": {
            "background": "#7c2142",
            "surface": "#833c5e",
            "surfaceHover": "#9994b8",
            "text": "#ffffff",
            "mutedText": "#9994b8",
            "primary": "#f4a3b4",
            "primaryHover": "#f4a3b4",
            "border": "#9994b8",
            "correct": "#f4a3b4",
            "correctBackground": "#833c5e",
            "wrong": "#deb80b",
            "wrongBackground": "#deb80b",
            "disabled": "#9994b8",
            "focus": "#f4a3b4"
        }
    },
    "pastel": {
        "name": "Pastel",
        "colors": {
            "background": "#e0b2bd",
            "surface": "#d29fab",
            "surfaceHover": "#b4e9ff",
            "text": "#6d5c6f",
            "mutedText": "#b4e9ff",
            "primary": "#fbf4b6",
            "primaryHover": "#fbf4b6",
            "border": "#b4e9ff",
            "correct": "#fbf4b6",
            "correctBackground": "#d29fab",
            "wrong": "#ff6961",
            "wrongBackground": "#c23b22",
            "disabled": "#b4e9ff",
            "focus": "#fbf4b6"
        }
    },
    "peach_blossom": {
        "name": "Peach Blossom",
        "colors": {
            "background": "#292929",
            "surface": "#2a363b",
            "surfaceHover": "#616161",
            "text": "#fecea8",
            "mutedText": "#616161",
            "primary": "#99b898",
            "primaryHover": "#99b898",
            "border": "#616161",
            "correct": "#99b898",
            "correctBackground": "#2a363b",
            "wrong": "#ff6961",
            "wrongBackground": "#e84a5f",
            "disabled": "#616161",
            "focus": "#99b898"
        }
    },
    "peaches": {
        "name": "Peaches",
        "colors": {
            "background": "#e0d7c1",
            "surface": "#e2caaf",
            "surfaceHover": "#e7b28e",
            "text": "#5f4c41",
            "mutedText": "#e7b28e",
            "primary": "#dd7a5f",
            "primaryHover": "#dd7a5f",
            "border": "#e7b28e",
            "correct": "#dd7a5f",
            "correctBackground": "#e2caaf",
            "wrong": "#ff6961",
            "wrongBackground": "#c23b22",
            "disabled": "#e7b28e",
            "focus": "#dd7a5f"
        }
    },
    "phantom": {
        "name": "Phantom",
        "colors": {
            "background": "#001",
            "surface": "#24283b",
            "surfaceHover": "#414868",
            "text": "#c0caf5",
            "mutedText": "#414868",
            "primary": "#7aa2f7",
            "primaryHover": "#7aa2f7",
            "border": "#414868",
            "correct": "#7aa2f7",
            "correctBackground": "#24283b",
            "wrong": "#f7768e",
            "wrongBackground": "#db4b4b",
            "disabled": "#414868",
            "focus": "#7aa2f7"
        }
    },
    "pink_lemonade": {
        "name": "Pink Lemonade",
        "colors": {
            "background": "#f6d992",
            "surface": "#f6cc93",
            "surfaceHover": "#f6b092",
            "text": "#fcfcf8",
            "mutedText": "#f6b092",
            "primary": "#f6a192",
            "primaryHover": "#f6a192",
            "border": "#f6b092",
            "correct": "#f6a192",
            "correctBackground": "#f6cc93",
            "wrong": "#ff6f69",
            "wrongBackground": "#ff6f69",
            "disabled": "#f6b092",
            "focus": "#f6a192"
        }
    },
    "pulse": {
        "name": "Pulse",
        "colors": {
            "background": "#181818",
            "surface": "#121212",
            "surfaceHover": "#53565a",
            "text": "#e5f4f4",
            "mutedText": "#53565a",
            "primary": "#17b8bd",
            "primaryHover": "#17b8bd",
            "border": "#53565a",
            "correct": "#17b8bd",
            "correctBackground": "#121212",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#53565a",
            "focus": "#17b8bd"
        }
    },
    "purpleish": {
        "name": "Purpleish",
        "colors": {
            "background": "#1e1e32",
            "surface": "#181829",
            "surfaceHover": "#5c5c99",
            "text": "#a3a3cc",
            "mutedText": "#5c5c99",
            "primary": "#7a52cc",
            "primaryHover": "#7a52cc",
            "border": "#5c5c99",
            "correct": "#7a52cc",
            "correctBackground": "#181829",
            "wrong": "#ff6666",
            "wrongBackground": "#ff6666",
            "disabled": "#5c5c99",
            "focus": "#7a52cc"
        }
    },
    "rainbow_trail": {
        "name": "Rainbow Trail",
        "colors": {
            "background": "#f5f5f5",
            "surface": "#e0e0e0",
            "surfaceHover": "#4f4f4f",
            "text": "#1f1f1f",
            "mutedText": "#4f4f4f",
            "primary": "#363636",
            "primaryHover": "#363636",
            "border": "#4f4f4f",
            "correct": "#363636",
            "correctBackground": "#e0e0e0",
            "wrong": "#ff0008",
            "wrongBackground": "#ff0008",
            "disabled": "#4f4f4f",
            "focus": "#363636"
        }
    },
    "red_dragon": {
        "name": "Red Dragon",
        "colors": {
            "background": "#1a0b0c",
            "surface": "#0e0506",
            "surfaceHover": "#e2a528",
            "text": "#4a4d4e",
            "mutedText": "#e2a528",
            "primary": "#ff3a32",
            "primaryHover": "#ff3a32",
            "border": "#e2a528",
            "correct": "#ff3a32",
            "correctBackground": "#0e0506",
            "wrong": "#771b1f",
            "wrongBackground": "#591317",
            "disabled": "#e2a528",
            "focus": "#ff3a32"
        }
    },
    "red_samurai": {
        "name": "Red Samurai",
        "colors": {
            "background": "#84202c",
            "surface": "#751d26",
            "surfaceHover": "#55131b",
            "text": "#e2dad0",
            "mutedText": "#55131b",
            "primary": "#c79e6e",
            "primaryHover": "#c79e6e",
            "border": "#55131b",
            "correct": "#c79e6e",
            "correctBackground": "#751d26",
            "wrong": "#33bbda",
            "wrongBackground": "#176b79",
            "disabled": "#55131b",
            "focus": "#c79e6e"
        }
    },
    "repose_dark": {
        "name": "Repose Dark",
        "colors": {
            "background": "#2f3338",
            "surface": "#3a3c3d",
            "surfaceHover": "#8f8e84",
            "text": "#d6d2bc",
            "mutedText": "#8f8e84",
            "primary": "#d6d2bc",
            "primaryHover": "#d6d2bc",
            "border": "#8f8e84",
            "correct": "#d6d2bc",
            "correctBackground": "#3a3c3d",
            "wrong": "#ff4a59",
            "wrongBackground": "#c43c53",
            "disabled": "#8f8e84",
            "focus": "#d6d2bc"
        }
    },
    "repose_light": {
        "name": "Repose Light",
        "colors": {
            "background": "#efead0",
            "surface": "#dbd6c4",
            "surfaceHover": "#8f8e84",
            "text": "#333538",
            "mutedText": "#8f8e84",
            "primary": "#5f605e",
            "primaryHover": "#5f605e",
            "border": "#8f8e84",
            "correct": "#5f605e",
            "correctBackground": "#dbd6c4",
            "wrong": "#c43c53",
            "wrongBackground": "#a52632",
            "disabled": "#8f8e84",
            "focus": "#5f605e"
        }
    },
    "retro": {
        "name": "Retro",
        "colors": {
            "background": "#dad3c1",
            "surface": "#c8c3b3",
            "surfaceHover": "#918b7d",
            "text": "#1d1b17",
            "mutedText": "#918b7d",
            "primary": "#1d1b17",
            "primaryHover": "#1d1b17",
            "border": "#918b7d",
            "correct": "#1d1b17",
            "correctBackground": "#c8c3b3",
            "wrong": "#bf616a",
            "wrongBackground": "#793e44",
            "disabled": "#918b7d",
            "focus": "#1d1b17"
        }
    },
    "retrocast": {
        "name": "Retrocast",
        "colors": {
            "background": "#07737a",
            "surface": "#26858b",
            "surfaceHover": "#f3e03b",
            "text": "#ffffff",
            "mutedText": "#f3e03b",
            "primary": "#88dbdf",
            "primaryHover": "#88dbdf",
            "border": "#f3e03b",
            "correct": "#88dbdf",
            "correctBackground": "#26858b",
            "wrong": "#ff585d",
            "wrongBackground": "#c04455",
            "disabled": "#f3e03b",
            "focus": "#88dbdf"
        }
    },
    "rgb": {
        "name": "Rgb",
        "colors": {
            "background": "#111",
            "surface": "#1a1a1a",
            "surfaceHover": "#444",
            "text": "#eee",
            "mutedText": "#444",
            "primary": "#eee",
            "primaryHover": "#eee",
            "border": "#444",
            "correct": "#eee",
            "correctBackground": "#1a1a1a",
            "wrong": "#eee",
            "wrongBackground": "#b3b3b3",
            "disabled": "#444",
            "focus": "#eee"
        }
    },
    "rose_pine": {
        "name": "Rose Pine",
        "colors": {
            "background": "#1f1d27",
            "surface": "#282533",
            "surfaceHover": "#c4a7e7",
            "text": "#e0def4",
            "mutedText": "#c4a7e7",
            "primary": "#9ccfd8",
            "primaryHover": "#9ccfd8",
            "border": "#c4a7e7",
            "correct": "#9ccfd8",
            "correctBackground": "#282533",
            "wrong": "#eb6f92",
            "wrongBackground": "#ebbcba",
            "disabled": "#c4a7e7",
            "focus": "#9ccfd8"
        }
    },
    "rose_pine_dawn": {
        "name": "Rose Pine Dawn",
        "colors": {
            "background": "#fffaf3",
            "surface": "#f0e9df",
            "surfaceHover": "#c4a7e7",
            "text": "#286983",
            "mutedText": "#c4a7e7",
            "primary": "#56949f",
            "primaryHover": "#56949f",
            "border": "#c4a7e7",
            "correct": "#56949f",
            "correctBackground": "#f0e9df",
            "wrong": "#b4637a",
            "wrongBackground": "#d7827e",
            "disabled": "#c4a7e7",
            "focus": "#56949f"
        }
    },
    "rose_pine_moon": {
        "name": "Rose Pine Moon",
        "colors": {
            "background": "#2a273f",
            "surface": "#211f32",
            "surfaceHover": "#c4a7e7",
            "text": "#e0def4",
            "mutedText": "#c4a7e7",
            "primary": "#9ccfd8",
            "primaryHover": "#9ccfd8",
            "border": "#c4a7e7",
            "correct": "#9ccfd8",
            "correctBackground": "#211f32",
            "wrong": "#eb6f92",
            "wrongBackground": "#ebbcba",
            "disabled": "#c4a7e7",
            "focus": "#9ccfd8"
        }
    },
    "rudy": {
        "name": "Rudy",
        "colors": {
            "background": "#1a2b3e",
            "surface": "#152231",
            "surfaceHover": "#3a506c",
            "text": "#c9c8bf",
            "mutedText": "#3a506c",
            "primary": "#af8f5c",
            "primaryHover": "#af8f5c",
            "border": "#3a506c",
            "correct": "#af8f5c",
            "correctBackground": "#152231",
            "wrong": "#bf616a",
            "wrongBackground": "#793e44",
            "disabled": "#3a506c",
            "focus": "#af8f5c"
        }
    },
    "ryujinscales": {
        "name": "Ryujinscales",
        "colors": {
            "background": "#081426",
            "surface": "#040e1d",
            "surfaceHover": "#ffbc90",
            "text": "#ffe4bc",
            "mutedText": "#ffbc90",
            "primary": "#f17754",
            "primaryHover": "#f17754",
            "border": "#ffbc90",
            "correct": "#f17754",
            "correctBackground": "#040e1d",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#ffbc90",
            "focus": "#f17754"
        }
    },
    "serika": {
        "name": "Serika",
        "colors": {
            "background": "#e1e1e3",
            "surface": "#d1d3d8",
            "surfaceHover": "#aaaeb3",
            "text": "#323437",
            "mutedText": "#aaaeb3",
            "primary": "#e2b714",
            "primaryHover": "#e2b714",
            "border": "#aaaeb3",
            "correct": "#e2b714",
            "correctBackground": "#d1d3d8",
            "wrong": "#da3333",
            "wrongBackground": "#791717",
            "disabled": "#aaaeb3",
            "focus": "#e2b714"
        }
    },
    "serika_dark": {
        "name": "Serika Dark",
        "colors": {
            "background": "#323437",
            "surface": "#2c2e31",
            "surfaceHover": "#646669",
            "text": "#d1d0c5",
            "mutedText": "#646669",
            "primary": "#e2b714",
            "primaryHover": "#e2b714",
            "border": "#646669",
            "correct": "#e2b714",
            "correctBackground": "#2c2e31",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#646669",
            "focus": "#e2b714"
        }
    },
    "sewing_tin": {
        "name": "Sewing Tin",
        "colors": {
            "background": "#241963",
            "surface": "#2a277a",
            "surfaceHover": "#446ad5",
            "text": "#ffffff",
            "mutedText": "#446ad5",
            "primary": "#f2ce83",
            "primaryHover": "#f2ce83",
            "border": "#446ad5",
            "correct": "#f2ce83",
            "correctBackground": "#2a277a",
            "wrong": "#c6915e",
            "wrongBackground": "#c6915e",
            "disabled": "#446ad5",
            "focus": "#f2ce83"
        }
    },
    "sewing_tin_light": {
        "name": "Sewing Tin Light",
        "colors": {
            "background": "#ffffff",
            "surface": "#c8cedf",
            "surfaceHover": "#385eca",
            "text": "#2d2076",
            "mutedText": "#385eca",
            "primary": "#2d2076",
            "primaryHover": "#2d2076",
            "border": "#385eca",
            "correct": "#2d2076",
            "correctBackground": "#c8cedf",
            "wrong": "#f2ce83",
            "wrongBackground": "#f2ce83",
            "disabled": "#385eca",
            "focus": "#2d2076"
        }
    },
    "shadow": {
        "name": "Shadow",
        "colors": {
            "background": "#000",
            "surface": "#171717",
            "surfaceHover": "#444",
            "text": "#eee",
            "mutedText": "#444",
            "primary": "#eee",
            "primaryHover": "#eee",
            "border": "#444",
            "correct": "#eee",
            "correctBackground": "#171717",
            "wrong": "#fff",
            "wrongBackground": "#d8d8d8",
            "disabled": "#444",
            "focus": "#eee"
        }
    },
    "shoko": {
        "name": "Shoko",
        "colors": {
            "background": "#ced7e0",
            "surface": "#b7cada",
            "surfaceHover": "#7599b1",
            "text": "#3b4c58",
            "mutedText": "#7599b1",
            "primary": "#81c4dd",
            "primaryHover": "#81c4dd",
            "border": "#7599b1",
            "correct": "#81c4dd",
            "correctBackground": "#b7cada",
            "wrong": "#bf616a",
            "wrongBackground": "#793e44",
            "disabled": "#7599b1",
            "focus": "#81c4dd"
        }
    },
    "slambook": {
        "name": "Slambook",
        "colors": {
            "background": "#fffdde",
            "surface": "#c6dce4",
            "surfaceHover": "#1c82adc4",
            "text": "#13005a",
            "mutedText": "#1c82adc4",
            "primary": "#03001c",
            "primaryHover": "#03001c",
            "border": "#1c82adc4",
            "correct": "#03001c",
            "correctBackground": "#c6dce4",
            "wrong": "#f900bf",
            "wrongBackground": "#ce1212",
            "disabled": "#1c82adc4",
            "focus": "#03001c"
        }
    },
    "snes": {
        "name": "Snes",
        "colors": {
            "background": "#bfbec2",
            "surface": "#b5b0c2",
            "surfaceHover": "#9f8ad4",
            "text": "#2e2e2e",
            "mutedText": "#9f8ad4",
            "primary": "#553d94",
            "primaryHover": "#553d94",
            "border": "#9f8ad4",
            "correct": "#553d94",
            "correctBackground": "#b5b0c2",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#9f8ad4",
            "focus": "#553d94"
        }
    },
    "soaring_skies": {
        "name": "Soaring Skies",
        "colors": {
            "background": "#fff9f2",
            "surface": "#e5ddd4",
            "surfaceHover": "#1e107a",
            "text": "#1d1e1e",
            "mutedText": "#1e107a",
            "primary": "#55c6f0",
            "primaryHover": "#55c6f0",
            "border": "#1e107a",
            "correct": "#55c6f0",
            "correctBackground": "#e5ddd4",
            "wrong": "#fb5745",
            "wrongBackground": "#b03c30",
            "disabled": "#1e107a",
            "focus": "#55c6f0"
        }
    },
    "solarized_dark": {
        "name": "Solarized Dark",
        "colors": {
            "background": "#002b36",
            "surface": "#00222b",
            "surfaceHover": "#2aa198",
            "text": "#268bd2",
            "mutedText": "#2aa198",
            "primary": "#859900",
            "primaryHover": "#859900",
            "border": "#2aa198",
            "correct": "#859900",
            "correctBackground": "#00222b",
            "wrong": "#d33682",
            "wrongBackground": "#9b225c",
            "disabled": "#2aa198",
            "focus": "#859900"
        }
    },
    "solarized_light": {
        "name": "Solarized Light",
        "colors": {
            "background": "#fdf6e3",
            "surface": "#e2d8be",
            "surfaceHover": "#2aa198",
            "text": "#181819",
            "mutedText": "#2aa198",
            "primary": "#859900",
            "primaryHover": "#859900",
            "border": "#2aa198",
            "correct": "#859900",
            "correctBackground": "#e2d8be",
            "wrong": "#d33682",
            "wrongBackground": "#9b225c",
            "disabled": "#2aa198",
            "focus": "#859900"
        }
    },
    "solarized_osaka": {
        "name": "Solarized Osaka",
        "colors": {
            "background": "#00141a",
            "surface": "#00222b",
            "surfaceHover": "#2aa198",
            "text": "#eee8d5",
            "mutedText": "#2aa198",
            "primary": "#859900",
            "primaryHover": "#859900",
            "border": "#2aa198",
            "correct": "#859900",
            "correctBackground": "#00222b",
            "wrong": "#dc322f",
            "wrongBackground": "#9b225c",
            "disabled": "#2aa198",
            "focus": "#859900"
        }
    },
    "sonokai": {
        "name": "Sonokai",
        "colors": {
            "background": "#2c2e34",
            "surface": "#232429",
            "surfaceHover": "#e7c664",
            "text": "#e2e2e3",
            "mutedText": "#e7c664",
            "primary": "#9ed072",
            "primaryHover": "#9ed072",
            "border": "#e7c664",
            "correct": "#9ed072",
            "correctBackground": "#232429",
            "wrong": "#fc5d7c",
            "wrongBackground": "#ecac6a",
            "disabled": "#e7c664",
            "focus": "#9ed072"
        }
    },
    "spiderman": {
        "name": "Spiderman",
        "colors": {
            "background": "#0d1219",
            "surface": "#0b1c2e",
            "surfaceHover": "#0476f2",
            "text": "#f0f0f0",
            "mutedText": "#0476f2",
            "primary": "#e23636",
            "primaryHover": "#e23636",
            "border": "#0476f2",
            "correct": "#e23636",
            "correctBackground": "#0b1c2e",
            "wrong": "#0476f2",
            "wrongBackground": "#0353a8",
            "disabled": "#0476f2",
            "focus": "#e23636"
        }
    },
    "stealth": {
        "name": "Stealth",
        "colors": {
            "background": "#010203",
            "surface": "#121212",
            "surfaceHover": "#5e676e",
            "text": "#383e42",
            "mutedText": "#5e676e",
            "primary": "#383e42",
            "primaryHover": "#383e42",
            "border": "#5e676e",
            "correct": "#383e42",
            "correctBackground": "#121212",
            "wrong": "#e25303",
            "wrongBackground": "#73280c",
            "disabled": "#5e676e",
            "focus": "#383e42"
        }
    },
    "strawberry": {
        "name": "Strawberry",
        "colors": {
            "background": "#f37f83",
            "surface": "#ef6e77",
            "surfaceHover": "#e53c58",
            "text": "#fcfcf8",
            "mutedText": "#e53c58",
            "primary": "#fcfcf8",
            "primaryHover": "#fcfcf8",
            "border": "#e53c58",
            "correct": "#fcfcf8",
            "correctBackground": "#ef6e77",
            "wrong": "#fcd23f",
            "wrongBackground": "#d7ae1e",
            "disabled": "#e53c58",
            "focus": "#fcfcf8"
        }
    },
    "striker": {
        "name": "Striker",
        "colors": {
            "background": "#124883",
            "surface": "#104176",
            "surfaceHover": "#0f2d4e",
            "text": "#d6dbd9",
            "mutedText": "#0f2d4e",
            "primary": "#d7dcda",
            "primaryHover": "#d7dcda",
            "border": "#0f2d4e",
            "correct": "#d7dcda",
            "correctBackground": "#104176",
            "wrong": "#fb4934",
            "wrongBackground": "#cc241d",
            "disabled": "#0f2d4e",
            "focus": "#d7dcda"
        }
    },
    "suisei": {
        "name": "Suisei",
        "colors": {
            "background": "#3b4a62",
            "surface": "#313e55",
            "surfaceHover": "#fe9841",
            "text": "#dbdeeb",
            "mutedText": "#fe9841",
            "primary": "#bef0ff",
            "primaryHover": "#bef0ff",
            "border": "#fe9841",
            "correct": "#bef0ff",
            "correctBackground": "#313e55",
            "wrong": "#ed2939",
            "wrongBackground": "#ce122c",
            "disabled": "#fe9841",
            "focus": "#bef0ff"
        }
    },
    "sunset": {
        "name": "Sunset",
        "colors": {
            "background": "#211e24",
            "surface": "#161319",
            "surfaceHover": "#5b578e",
            "text": "#f4e0c9",
            "mutedText": "#5b578e",
            "primary": "#f79777",
            "primaryHover": "#f79777",
            "border": "#5b578e",
            "correct": "#f79777",
            "correctBackground": "#161319",
            "wrong": "#66a1ff",
            "wrongBackground": "#376ca4",
            "disabled": "#5b578e",
            "focus": "#f79777"
        }
    },
    "superuser": {
        "name": "Superuser",
        "colors": {
            "background": "#262a33",
            "surface": "#1f232c",
            "surfaceHover": "#526777",
            "text": "#e5f7ef",
            "mutedText": "#526777",
            "primary": "#43ffaf",
            "primaryHover": "#43ffaf",
            "border": "#526777",
            "correct": "#43ffaf",
            "correctBackground": "#1f232c",
            "wrong": "#ff5f5f",
            "wrongBackground": "#d22a2a",
            "disabled": "#526777",
            "focus": "#43ffaf"
        }
    },
    "sweden": {
        "name": "Sweden",
        "colors": {
            "background": "#0058a3",
            "surface": "#024f8e",
            "surfaceHover": "#57abdb",
            "text": "#ffffff",
            "mutedText": "#57abdb",
            "primary": "#ffcc02",
            "primaryHover": "#ffcc02",
            "border": "#57abdb",
            "correct": "#ffcc02",
            "correctBackground": "#024f8e",
            "wrong": "#e74040",
            "wrongBackground": "#a22f2f",
            "disabled": "#57abdb",
            "focus": "#ffcc02"
        }
    },
    "tangerine": {
        "name": "Tangerine",
        "colors": {
            "background": "#ffede0",
            "surface": "#fdd3bf",
            "surfaceHover": "#ff9562",
            "text": "#3d1705",
            "mutedText": "#ff9562",
            "primary": "#fe5503",
            "primaryHover": "#fe5503",
            "border": "#ff9562",
            "correct": "#fe5503",
            "correctBackground": "#fdd3bf",
            "wrong": "#7fb500",
            "wrongBackground": "#5f8700",
            "disabled": "#ff9562",
            "focus": "#fe5503"
        }
    },
    "taro": {
        "name": "Taro",
        "colors": {
            "background": "#b3baff",
            "surface": "#a3a7df",
            "surfaceHover": "#6f6c91",
            "text": "#130f1a",
            "mutedText": "#6f6c91",
            "primary": "#130f1a",
            "primaryHover": "#130f1a",
            "border": "#6f6c91",
            "correct": "#130f1a",
            "correctBackground": "#a3a7df",
            "wrong": "#ffe23e",
            "wrongBackground": "#fff1c3",
            "disabled": "#6f6c91",
            "focus": "#130f1a"
        }
    },
    "terminal": {
        "name": "Terminal",
        "colors": {
            "background": "#191a1b",
            "surface": "#141516",
            "surfaceHover": "#48494b",
            "text": "#e7eae0",
            "mutedText": "#48494b",
            "primary": "#79a617",
            "primaryHover": "#79a617",
            "border": "#48494b",
            "correct": "#79a617",
            "correctBackground": "#141516",
            "wrong": "#a61717",
            "wrongBackground": "#731010",
            "disabled": "#48494b",
            "focus": "#79a617"
        }
    },
    "terra": {
        "name": "Terra",
        "colors": {
            "background": "#0c100e",
            "surface": "#0f1d18",
            "surfaceHover": "#436029",
            "text": "#f0edd1",
            "mutedText": "#436029",
            "primary": "#89c559",
            "primaryHover": "#89c559",
            "border": "#436029",
            "correct": "#89c559",
            "correctBackground": "#0f1d18",
            "wrong": "#d3ca78",
            "wrongBackground": "#89844d",
            "disabled": "#436029",
            "focus": "#89c559"
        }
    },
    "terrazzo": {
        "name": "Terrazzo",
        "colors": {
            "background": "#f1e5da",
            "surface": "#e3d3c6",
            "surfaceHover": "#688e8f",
            "text": "#023e3b",
            "mutedText": "#688e8f",
            "primary": "#e0794e",
            "primaryHover": "#e0794e",
            "border": "#688e8f",
            "correct": "#e0794e",
            "correctBackground": "#e3d3c6",
            "wrong": "#a01034",
            "wrongBackground": "#a01034",
            "disabled": "#688e8f",
            "focus": "#e0794e"
        }
    },
    "terror_below": {
        "name": "Terror Below",
        "colors": {
            "background": "#0b1e1a",
            "surface": "#041715",
            "surfaceHover": "#015c53",
            "text": "#dceae5",
            "mutedText": "#015c53",
            "primary": "#66ac92",
            "primaryHover": "#66ac92",
            "border": "#015c53",
            "correct": "#66ac92",
            "correctBackground": "#041715",
            "wrong": "#bf616a",
            "wrongBackground": "#793e44",
            "disabled": "#015c53",
            "focus": "#66ac92"
        }
    },
    "tiramisu": {
        "name": "Tiramisu",
        "colors": {
            "background": "#cfc6b9",
            "surface": "#d0bca7",
            "surfaceHover": "#c0976f",
            "text": "#7d5448",
            "mutedText": "#c0976f",
            "primary": "#c0976f",
            "primaryHover": "#c0976f",
            "border": "#c0976f",
            "correct": "#c0976f",
            "correctBackground": "#d0bca7",
            "wrong": "#e9632d",
            "wrongBackground": "#e9632d",
            "disabled": "#c0976f",
            "focus": "#c0976f"
        }
    },
    "trackday": {
        "name": "Trackday",
        "colors": {
            "background": "#464d66",
            "surface": "#3d4359",
            "surfaceHover": "#5c7eb9",
            "text": "#cfcfcf",
            "mutedText": "#5c7eb9",
            "primary": "#e0513e",
            "primaryHover": "#e0513e",
            "border": "#5c7eb9",
            "correct": "#e0513e",
            "correctBackground": "#3d4359",
            "wrong": "#e44e4e",
            "wrongBackground": "#fd3f3f",
            "disabled": "#5c7eb9",
            "focus": "#e0513e"
        }
    },
    "trance": {
        "name": "Trance",
        "colors": {
            "background": "#00021b",
            "surface": "#18214c",
            "surfaceHover": "#3c4c79",
            "text": "#fff",
            "mutedText": "#3c4c79",
            "primary": "#e51376",
            "primaryHover": "#e51376",
            "border": "#3c4c79",
            "correct": "#e51376",
            "correctBackground": "#18214c",
            "wrong": "#02d3b0",
            "wrongBackground": "#3f887c",
            "disabled": "#3c4c79",
            "focus": "#e51376"
        }
    },
    "tron_orange": {
        "name": "Tron Orange",
        "colors": {
            "background": "#0d1c1c",
            "surface": "#9c9191",
            "surfaceHover": "#ff6600",
            "text": "#ffffff",
            "mutedText": "#ff6600",
            "primary": "#f0e800",
            "primaryHover": "#f0e800",
            "border": "#ff6600",
            "correct": "#f0e800",
            "correctBackground": "#9c9191",
            "wrong": "#ff0000",
            "wrongBackground": "#ff0000",
            "disabled": "#ff6600",
            "focus": "#f0e800"
        }
    },
    "vaporwave": {
        "name": "Vaporwave",
        "colors": {
            "background": "#a4a7ea",
            "surface": "#989bd9",
            "surfaceHover": "#7c7faf",
            "text": "#f1ebf1",
            "mutedText": "#7c7faf",
            "primary": "#e368da",
            "primaryHover": "#e368da",
            "border": "#7c7faf",
            "correct": "#e368da",
            "correctBackground": "#989bd9",
            "wrong": "#573ca9",
            "wrongBackground": "#3d2b77",
            "disabled": "#7c7faf",
            "focus": "#e368da"
        }
    },
    "vesper": {
        "name": "Vesper",
        "colors": {
            "background": "#101010",
            "surface": "#1c1c1c",
            "surfaceHover": "#a0a0a0",
            "text": "#ffffff",
            "mutedText": "#a0a0a0",
            "primary": "#ffc799",
            "primaryHover": "#ffc799",
            "border": "#a0a0a0",
            "correct": "#ffc799",
            "correctBackground": "#1c1c1c",
            "wrong": "#ff8080",
            "wrongBackground": "#b25959",
            "disabled": "#a0a0a0",
            "focus": "#ffc799"
        }
    },
    "vesper_light": {
        "name": "Vesper Light",
        "colors": {
            "background": "#ffffff",
            "surface": "#fff8f4",
            "surfaceHover": "#a0a0a0",
            "text": "#000000",
            "mutedText": "#a0a0a0",
            "primary": "#fb7100",
            "primaryHover": "#fb7100",
            "border": "#a0a0a0",
            "correct": "#fb7100",
            "correctBackground": "#fff8f4",
            "wrong": "#ed2839",
            "wrongBackground": "#ff6c72",
            "disabled": "#a0a0a0",
            "focus": "#fb7100"
        }
    },
    "viridescent": {
        "name": "Viridescent",
        "colors": {
            "background": "#2c3333",
            "surface": "#232828",
            "surfaceHover": "#84a98c",
            "text": "#e9f5db",
            "mutedText": "#84a98c",
            "primary": "#95d5b2",
            "primaryHover": "#95d5b2",
            "border": "#84a98c",
            "correct": "#95d5b2",
            "correctBackground": "#232828",
            "wrong": "#ff4646",
            "wrongBackground": "#ab2f2f",
            "disabled": "#84a98c",
            "focus": "#95d5b2"
        }
    },
    "voc": {
        "name": "Voc",
        "colors": {
            "background": "#190618",
            "surface": "#2c0c28",
            "surfaceHover": "#4c1e48",
            "text": "#eeeae4",
            "mutedText": "#4c1e48",
            "primary": "#e0caac",
            "primaryHover": "#e0caac",
            "border": "#4c1e48",
            "correct": "#e0caac",
            "correctBackground": "#2c0c28",
            "wrong": "#af3735",
            "wrongBackground": "#7e2a29",
            "disabled": "#4c1e48",
            "focus": "#e0caac"
        }
    },
    "vscode": {
        "name": "Vscode",
        "colors": {
            "background": "#1e1e1e",
            "surface": "#191919",
            "surfaceHover": "#4d4d4d",
            "text": "#d4d4d4",
            "mutedText": "#4d4d4d",
            "primary": "#007acc",
            "primaryHover": "#007acc",
            "border": "#4d4d4d",
            "correct": "#007acc",
            "correctBackground": "#191919",
            "wrong": "#f44747",
            "wrongBackground": "#f44747",
            "disabled": "#4d4d4d",
            "focus": "#007acc"
        }
    },
    "watermelon": {
        "name": "Watermelon",
        "colors": {
            "background": "#1f4437",
            "surface": "#244d3f",
            "surfaceHover": "#3e7a65",
            "text": "#cdc6bc",
            "mutedText": "#3e7a65",
            "primary": "#d6686f",
            "primaryHover": "#d6686f",
            "border": "#3e7a65",
            "correct": "#d6686f",
            "correctBackground": "#244d3f",
            "wrong": "#c82931",
            "wrongBackground": "#ac1823",
            "disabled": "#3e7a65",
            "focus": "#d6686f"
        }
    },
    "wavez": {
        "name": "Wavez",
        "colors": {
            "background": "#1c292f",
            "surface": "#1b3238",
            "surfaceHover": "#1f5e6b",
            "text": "#e9efe6",
            "mutedText": "#1f5e6b",
            "primary": "#6bde3b",
            "primaryHover": "#6bde3b",
            "border": "#1f5e6b",
            "correct": "#6bde3b",
            "correctBackground": "#1b3238",
            "wrong": "#ca4754",
            "wrongBackground": "#7e2a33",
            "disabled": "#1f5e6b",
            "focus": "#6bde3b"
        }
    },
    "witch_girl": {
        "name": "Witch Girl",
        "colors": {
            "background": "#f3dbda",
            "surface": "#e7c8be",
            "surfaceHover": "#ddb4a7",
            "text": "#56786a",
            "mutedText": "#ddb4a7",
            "primary": "#56786a",
            "primaryHover": "#56786a",
            "border": "#ddb4a7",
            "correct": "#56786a",
            "correctBackground": "#e7c8be",
            "wrong": "#b29a91",
            "wrongBackground": "#b29a91",
            "disabled": "#ddb4a7",
            "focus": "#56786a"
        }
    }
};
