# Brand running-script typography

The CSS prioritizes locally installed 汉仪程行简 / HYChengXingJ and 华文行楷 /
STXingkai. The local verification machine has STXingkai, which supplies the
thick, sharply finished running script used in the reference-style preview.
No proprietary or operating-system font files are copied or distributed.

For devices without those fonts, zhi-mang-xing-brand-v1.woff2 supplies a local,
self-hosted brush-script fallback:

- Family: Zhi Mang Xing / 志莽行书.
- Designer: Wei Zhimang.
- Copyright 2018 The ZhiMangXing Project Authors.
- Project: https://github.com/m4rc1e/zhimangxing
- Official metadata: https://github.com/google/fonts/blob/main/ofl/zhimangxing/METADATA.pb
- License: SIL Open Font License 1.1; the original full text is in OFL.txt.
- The WOFF2 file is an unchanged Google Fonts provider subset containing the
  31 distinct glyphs used in the project brand labels and headings.
- CSS alias: Qingyan Running Brush. Font metadata and outlines were not edited.

The same fallback is embedded in the three native SVG demonstration covers;
embedded SVG font data is unchanged. Runtime font loading stays local.
