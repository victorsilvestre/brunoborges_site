---
name: Sala Educacional sales page
description: "/salaeducacional sales surface on the TraderLab Aprendizagem base (ivory canvas, ink, lime #A2CB10, Roboto Serif/Roboto) with full-bleed lime and ink fields added."
colors:
  lime: "#a2cb10"
  lime-bright: "#c6ef42"
  lime-hover: "#8bae0b"
  lime-ink: "#354604"
  lime-soft: "#eff6d9"
  ink: "#0c0d0e"
  ink-raised: "#15170d"
  canvas-ivory: "#f5f3ef"
  surface-ivory: "#fffbf7"
  muted: "#5c5b57"
  line: "#e5e1dc"
  on-ink-muted: "#bdbbb4"
  on-lime-muted: "#27310a"
  focus: "#4c6108"
  idle-grey: "#8a877f"
typography:
  display:
    fontFamily: "Roboto Serif, Georgia, serif"
    fontSize: "clamp(40px, 5.4vw, 80px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Roboto Serif, Georgia, serif"
    fontSize: "clamp(34px, 4.6vw, 62px)"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Roboto Serif, Georgia, serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  numeral:
    fontFamily: "Roboto Serif, Georgia, serif"
    fontSize: "clamp(64px, 8vw, 96px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "lining-nums tabular-nums"
  quote:
    fontFamily: "Roboto Serif, Georgia, serif"
    fontSize: "clamp(20px, 2vw, 24px)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Roboto, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.04em"
rounded:
  button: "4px"
  media: "8px"
  card: "14px"
  pill: "99px"
spacing:
  gutter: "clamp(20px, 5vw, 56px)"
  section: "clamp(72px, 9vw, 128px)"
  wrap: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.lime-hover}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas-ivory}"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "56px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "56px"
  topbar-cta:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "44px"
  card-ink:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.canvas-ivory}"
    rounded: "{rounded.card}"
    padding: "40px"
  card-lime:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "48px"
  card-ivory:
    backgroundColor: "{colors.surface-ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "48px"
  pull-quote-panel:
    backgroundColor: "{colors.lime-soft}"
    textColor: "{colors.lime-ink}"
    rounded: "{rounded.card}"
    padding: "64px"
  live-chip:
    textColor: "{colors.lime-bright}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
---

# Design System: Sala Educacional sales page

Scope: the /salaeducacional surface (sales page and /obrigado). It reuses the TraderLab Aprendizagem base (ivory canvas, ink, lime, Roboto Serif and Roboto) and adds full-bleed lime and ink fields at section scale. Other surfaces keep their own DESIGN.md.

## Overview

**Creative North Star: "The Open Trading Floor"**

The page behaves like a market panel at the opening bell: a clock, a pulsing "ao vivo" status, and rows of tabular serif numerals. Warmth comes from an ivory canvas and printed-feeling serif headlines; energy comes from whole sections flooded in lime or ink rather than from cards, gradients, or ornament. The reader moves ivory, lime, ink, ivory, lime, ink, so each section change is a hard color change of the entire band.

Density is generous (sections 72-128px of vertical padding, 1180px content column), but inside a section the content is typographic: big serif numerals, ruled lists, italic serif quotes. Structure is drawn with 2px ink rules and 1px warm lines, not boxes.

**Key Characteristics:**
- Full-bleed color fields: lime (`numbers`, `shift`, `finale`, thank-you hero), ink (`pain`, `results`, `plans`, footer, topbar), ivory and warm surface in between.
- Roboto Serif at 600 for every heading and numeral, with italic serif for the turn word and quotes; Roboto for everything functional.
- Photography of Bruno cut out and seated on a lime block, bleeding to the viewport edge in the hero.
- Flat surfaces; one soft shadow, used only on screenshots in /obrigado.
- Motion limited to a highlighter sweep, a live-dot ping, button lift and arrow nudge, FAQ plus rotation; all disabled under reduced motion.

## Colors

A three-field palette: warm ivory ground, near-black ink, and one saturated lime used both as a field and as a signal.

### Primary
- **Signal Lime** (`{colors.lime}`): section fields, primary button fill, the highlighter mark behind the hero turn word, step and icon discs on ivory, the ::selection color.
- **Bright Lime** (`{colors.lime-bright}`): lime when it must read as text or glyph on ink (italic turn words, prices, live status, check discs, focus ring on dark). Never used on ivory.
- **Pressed Lime** (`{colors.lime-hover}`): primary button hover only.
- **Lime Ink** (`{colors.lime-ink}`): the only lime-family color allowed as text on ivory or soft-lime (italic turn words, pull quotes, author name, testimonial credits).

### Neutral
- **Floor Ink** (`{colors.ink}`): body text on ivory, ink sections, topbar, footer, 2px structural rules.
- **Raised Ink** (`{colors.ink-raised}`): panels sitting on ink (results bars, thank-you live panel).
- **Ivory Canvas** (`{colors.canvas-ivory}`): page ground and text on ink.
- **Warm Surface** (`{colors.surface-ivory}`): alternating bands (`day`, `author`, `faq`), the Mensal plan, the "not for you" panel.
- **Soft Lime Wash** (`{colors.lime-soft}`): pull-quote panel and photo backing on ink sections.
- **Muted Stone** (`{colors.muted}`): secondary copy on ivory. **On-Ink Stone** (`{colors.on-ink-muted}`) and **On-Lime Olive** (`{colors.on-lime-muted}`) are the equivalents on ink and lime.
- **Warm Line** (`{colors.line}`): 1px dividers and the neutral disc behind "no" icons.
- **Idle Grey** (`{colors.idle-grey}`): closed or negative state (market closed dot, negative bar).
- **Focus Olive** (`{colors.focus}`): focus outline on light fields; sections on ink switch focus to Bright Lime.

### Named Rules
**The Text-Lime Rule.** Lime is a field or a fill on ivory; as text it is Lime Ink on light grounds and Bright Lime on ink. Signal Lime never colors text.
**The Whole-Band Rule.** Color changes happen at section edges as full-width bands. Do not tint half a section or float a colored card to fake a change of field; the exceptions are the three recorded panels (plan, fit-yes, testimonial highlights).

## Typography

**Display Font:** Roboto Serif (italic and normal, Georgia fallback), loaded through next/font as `--font-sala-display`.
**Body Font:** Roboto (400, 500, 700; system sans fallback), `--font-sala-body`.

**Character:** a financial-press serif carries every claim and number; the sans stays out of the way for reading and controls. Italic serif marks the turn word in headings and every spoken quote.

### Hierarchy
- **Display** (600, clamp 40-80px, 1.02-1.1, -0.035em): the h1 only, max 17ch.
- **Headline** (600, clamp 34-62px, 1.07, -0.03em): section h2, capped near 20ch; italic `em` at 500 in the turn color.
- **Title** (600, 24px, 1.25, -0.015em): h3; list-item titles step up to clamp 26-34px.
- **Numeral** (600, 64-96px, lining and tabular figures): prices, proof counts; the day timetable uses clamp 44-76px; the live clock is 28px.
- **Quote** (italic 400, 19-24px, 1.4): testimonial and day quotes in serif; pull quote is 500 at clamp 26-46px.
- **Body** (400, 17px/1.65, 16px under 640px): paragraphs, 50-62ch where set. Lead paragraphs clamp 18-21px.
- **Label** (700, 14px, 0.04em): attributions and credits (`cite`, `figcaption`). The shift table column header (700, 12px, 0.13em, uppercase) is the single uppercase tracked label.

### Named Rules
**The Serif Numerals Rule.** Every figure a visitor compares (price, hours, counts, clock) is Roboto Serif 600 with `lining-nums tabular-nums`.
**The One Italic Rule.** Italic serif is for the turn word of a heading and for quoted speech; nothing else is italic.

## Layout

Single 1180px wrap with a fluid gutter (clamp 20-56px); sections pad vertically by clamp 72-128px. Two-column splits are asymmetric (0.7/1, 0.9/1.1, 1.2/0.8, 0.58/0.42) and collapse to one column at 960px. The hero is a four-track grid so the lime photo block spans from the content column to the right viewport edge; below 960px it becomes a full-width lime strip under the copy. Testimonials are CSS columns (3 x 300px min), not a carousel. The FAQ heading is sticky beside its list on desktop. Steps go 4, then 2, then 1 column at 960 and 640px. A sticky ink topbar (68px) holds logo, a live chip (hidden under 640px) and the lime "Planos" shortcut; anchor scroll offset is 84px.

## Elevation & Depth

Flat. Depth comes from color fields, 2px ink rules, and 1px warm lines. The single shadow is `0 12px 30px rgb(24 25 18 / 8%)`, used only under the product screenshots on /obrigado.

### Named Rules
**The Flat-Field Rule.** Panels are separated by color or rule, never by shadow; the one shadow stays on screenshots.

## Shapes

Three radii by role: 4px on buttons and the topbar CTA (squared-off, press-like), 14px on panels, photos and plan blocks, 99px on pills and the live chip. Icons sit in 24-56px circular discs. Structural rules are 2px ink (or 1.5px on lime); secondary dividers are 1px at low opacity. Photos are cut-out portraits on a lime or soft-lime backing, cropped by their container.

## Components

### Buttons
- **Shape:** 4px corners, 56px tall, 2px border matching the fill, Roboto 700 16px, trailing arrow icon.
- **Primary:** Signal Lime fill, ink text, 0 26px padding. Hover: Pressed Lime, lifts 2px, arrow nudges 4px right; active returns to rest.
- **Ink:** ink fill, ivory text; on ink sections it is re-filled lime.
- **Line:** transparent, 2px ink border; hover fills ink with Bright Lime text.
- **Topbar CTA:** 44px tall, lime, hover shifts to Bright Lime.
- **Focus:** 3px outline at 3px offset, Focus Olive on light, Bright Lime on ink.

### Live status (signature)
Ink panel (14px radius) or pill chip: a 12px dot (Bright Lime, pulsing ring while live; Idle Grey when closed), serif status line in Bright Lime, serif tabular clock, and schedule rows with the lit row's time in Bright Lime.

### Panels
Plan blocks (Mensal on warm surface, Trimestral on lime) with a pill flag, fit-yes on lime and fit-no on warm surface with a 1.5px line border, soft-lime pull-quote panel, ink-raised bars panel with 14px track bars (Bright Lime fill, Idle Grey for negative). All 14px radius, padding clamp 28-48px.

### Ruled lists
Facts, day timetable, shift table, FAQ and thank-you steps are lists between 2px ink rules with no boxes. FAQ rows open with a lime disc whose plus rotates 45deg.

### Testimonials
Figures with a 3px ink top rule; selected ones become lime or ink panels for rhythm.

### Hero mark
The turn word sits on a solid lime highlighter that sweeps in (0.9s) on load.

## Do's and Don'ts

### Do:
- **Do** switch whole sections between ivory, lime and ink, and set text per ground: Floor Ink on lime, Canvas Ivory on ink.
- **Do** use Lime Ink for lime-family text on light grounds and Bright Lime on ink.
- **Do** set prices, times and counts in Roboto Serif 600 with tabular lining numerals.
- **Do** draw structure with 2px ink rules and 1px Warm Line dividers.
- **Do** keep controls 4px, panels 14px, pills 99px.
- **Do** honor `prefers-reduced-motion` (all animation and transition off) and keep the focus outline per ground.

### Don't:
- **Don't** put Signal Lime on text over ivory; contrast fails.
- **Don't** add shadows to panels or cards.
- **Don't** replace testimonials with a carousel or the sections with icon-card grids.
- **Don't** introduce a third family or a system display face; Roboto Serif and Roboto only.
