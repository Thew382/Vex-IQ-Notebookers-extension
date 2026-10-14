# VEX IQ component images

Extracted from pages 55–94 of “Copy of Digital IQ Parts v5.0.” Page 77 is a divider with no labeled component pictures.

There are 297 component folders for the distinct names printed in this range. They cover 580 labeled appearances and 1156 individual picture objects. Each component folder contains `cover/cover.png`, copied from its selected distinctive top or main view, and `piece_images/`, containing the original PNG payloads from the presentation export, with repeat uses of the same payload stored once per component. A payload reused for different components appears in each relevant folder.

`manifest.json` records each cover’s source filename and any choice requiring review, the printed label and part number on each slide, plus the image file, dimensions, slide placement, rotation, flips, and crop metadata. Folder names follow printed component names. Filename-unsafe characters such as `/` are changed to `-`; the manifest preserves the printed text.

## Image format and editing

All extracted picture objects in this range are PNGs. The export contains no SVG versions of them. 571 of 573 distinct PNG payloads have transparent pixels. `image170.png` and `image228.png` are opaque, narrow side-view drawings.

These are raster images. CSS can display them and recolor their silhouettes with `mask-image`, and Fabric.js can load, move, scale, rotate, filter, or tint them. Their individual lines and faces are not separately editable vector paths. Recoloring detailed gray drawings with one CSS color will replace their shading. The image files here are unchanged from the export.

## Source caveats

The presentation reuses some views under more than one label and varies some names and part numbers between scale sections. The manifest transcribes the visible labels and part numbers rather than correcting them. Page 94 is titled “Game Elements - Mix & Match (Third Scale)” while its component label says “Level Up Scoring Object.”

## Covers to check

See `cover-review.md` for five choices where several source views are plausible or no clear top view exists. The Pneumatic Control Unit cover is copied from `image59.png`.
