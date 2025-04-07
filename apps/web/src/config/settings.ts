interface BreakpointLv {
  lv1: number;
  lv2: number;
}

interface Design {
  size: number;
  frame: number;
  edge: number;
}

interface Font {
  baseSize: number;
  family: {
    ja: string;
    en1: string;
    en2: string;
  };
}

interface Settings {
  breakpoint: BreakpointLv;
  design: {
    pc: Design;
    // sp: Design;
  };
  font: Font;
}

const settings = {
  breakpoint: {
    lv1: 768,
    lv2: 1280,
  },
  design: {
    pc: {
      size: 1280,
      frame: 1200,
      edge: 0,
    },
    sp: {
      size: 375,
      frame: 335,
      edge: 0,
    },
  },
  font: {
    baseSize: 1,
    family: {
      ja: "'Noto Sans JP', sans-serif;",
      en1: "'Roboto', 'Noto Sans JP', sans-serif;",
      en2: "'Roboto Condensed', 'Noto Sans JP', sans-serif;",
    },
  },
  // color: {
  //   black: "#000000",
  //   richBlack: "#161616",
  //   gray: "#5a5a5a",
  //   white: "#ffffff",
  // },
  // "baseDuration": 0.45,
  // "path": {
  //   "image": "img/clubdecorte",
  //   "style": "resources/css/clubdecorte",
  //   "script": "resources/js/clubdecorte"
  // },
};

settings.design.pc.edge =
  (settings.design.pc.size - settings.design.pc.frame) / 2;

settings.design.sp.edge =
  (settings.design.sp.size - settings.design.sp.frame) / 2;

export default settings;
