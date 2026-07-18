# Design System Spec: Aetherial Logic

This document specifies the design tokens, component architecture, layout hierarchy, and design guidelines for **Aetherial Logic**, a premium AI chatbot platform.

---

## 1. Color Palette

The Aetherial Logic theme is a dark-first system crafted for developer tools and high-performance AI interfaces. It relies on atmospheric depth, light borders, and neon-inspired accents.

### Base & Surfaces
| Token | HEX | Description |
| :--- | :--- | :--- |
| `background` / `surface` / `surface-dim` | `#0F1321` | Base canvas and body background |
| `surface-container-lowest` | `#0A0D1C` | Deepest panels (e.g., chat workspace canvas, footer background) |
| `surface-container-low` | `#171B2A` | Lower elevation container background (e.g., input toolbar) |
| `surface-container` | `#1B1F2E` | Default container background (e.g., cards, nav-bars) |
| `surface-container-high` | `#262939` | Higher elevation containers |
| `surface-container-highest` | `#303444` | Highlighted/elevated interactive cards |
| `surface-bright` | `#353849` | Active hover surfaces |

### Foreground & Typography
| Token | HEX | Description |
| :--- | :--- | :--- |
| `on-surface` / `on-background` | `#DFE1F6` | Primary body text & prominent headers |
| `on-surface-variant` | `#C7C4D8` | Secondary body text, captions, and muted labels |
| `inverse-surface` | `#DFE1F6` | High-contrast inverse surface background |
| `inverse-on-surface` | `#2C303F` | Text on inverse surface |

### Brand & Interactive Accents
| Token | HEX | Description |
| :--- | :--- | :--- |
| `primary` | `#C3C0FF` | Primary brand accent / neon highlights |
| `primary-container` | `#4F46E5` | Indigo background color for primary actions and badges |
| `on-primary` | `#1D00A5` | Text color on primary background |
| `on-primary-container` | `#DAD7FF` | Text color on primary container background |
| `secondary` | `#D2BBFF` | Muted violet brand accent |
| `secondary-container` | `#6001D1` | Violet background color for secondary containers / gradients |
| `tertiary` | `#89CEFF` | Cyan highlight / success / latency indicator text |
| `tertiary-container` | `#006693` | Deep cyan backing container |
| `outline` | `#918FA1` | Standard divider / border outline color |
| `outline-variant` | `#464555` | Dim divider / border outline color |

---

## 2. Typography

We utilize **Inter** for all standard UI and communication layouts to ensure a neutral, highly readable canvas. **JetBrains Mono** is used for code snippets, metadata labels, and system status indicators.

| Type Scale Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | Inter | `72px` | `800` (ExtraBold) | `1.1` | `-0.04em` |
| `display-xl-mobile` | Inter | `40px` | `800` (ExtraBold) | `1.2` | `-0.02em` |
| `headline-lg` | Inter | `48px` | `700` (Bold) | `1.2` | `-0.02em` |
| `headline-lg-mobile` | Inter | `32px` | `700` (Bold) | `1.3` | Default |
| `body-md` | Inter | `16px` | `400` (Regular) | `1.6` | `0em` |
| `label-mono` | JetBrains Mono | `12px` | `500` (Medium) | `1.0` | `0.05em` |

---

## 3. Spacing System

Spacing is based on an **8px base unit**, scaling incrementally to allow layouts to breathe.

| Token | Value | Application |
| :--- | :--- | :--- |
| `base` | `8px` | Small gaps, paddings, micro-alignments |
| `gutter` | `24px` | Standard page edge padding |
| `section-gap-mobile` | `80px` | Vertical spacing between main sections on mobile screens |
| `section-gap-desktop` | `160px` | Vertical spacing between main sections on desktop screens |
| `container-max-width`| `1200px` | Center-aligned container boundary limit |

### Border Radius (Rounded Corners)
- **Small (`sm`)**: `0.25rem` (4px) — Small status elements
- **Medium (`md` / `DEFAULT`)**: `0.5rem` (8px) — Buttons, form inputs
- **Large (`lg` / `xl`)**: `0.75rem` (12px) to `1.5rem` (24px) — Outer card bounds, preview shells
- **Full (`full`)**: `9999px` — Circular badges, pill tags, profiles

---

## 4. Component Inventory

The following reusable UI elements are defined in the interface:

### 1. Navigation Elements
- **Sticky Top Header**: Persistent header featuring blur backdrop filtering (`backdrop-blur-xl`), site logo, text mark "Aetherial Logic", primary action CTA button, and user profile avatar.
- **Sticky Bottom Navigation Bar**: Fixed bottom bar on mobile screens containing 4 key routes: Home (`dashboard`), Explore (`auto_awesome`), Chats (`chat_bubble`), and Settings (`settings`).

### 2. Buttons & Form Controls
- **Gradient Button**: Uses linear gradients (`from-primary-container to-secondary-container`) with a vibrant drop shadow glow to draw maximum user attention.
- **Primary Solid Button**: Filled button styling (`bg-primary-container`) with transition scaling hover effects.
- **Outline Button**: Structured with `border-outline-variant/30`, hover transitions to background bright (`bg-surface-bright`).
- **Icon Buttons**: Borderless controls using `material-symbols-outlined` icons.
- **Form Input Field**: Inactive state features a dark background with an outline (`border-outline-variant/20`); input is disabled for visual preview states.

### 3. Interactive Panels
- **Live AI Preview Shell**: Standard mockup resembling a chat application.
  - Header: `bg-surface-container` with pulsing online indicator dot and monospaced text header (`AETHER_CORE_v4.0`).
  - Chat Bubble (User): Elevated container (`bg-surface-container-high`) aligned left.
  - Chat Bubble (AI): Gradient filled container (`from-primary-container to-secondary-container`) aligned right.
  - Typing Indicator: 3 bouncing dot animations and monospaced "Thinking..." text tag.
- **Capabilities Cards**: Elevated blocks utilizing `bg-surface-container` with custom icons, bold headings, and detailed text summaries.
- **FAQ Accordion Panel**: JavaScript-driven panel that expands/collapses with height transition hooks (`max-h-[200px]` toggle) and chevron rotation styling.

---

## 5. Layout Hierarchy

1. **Top Header**: Global brand identity anchor.
2. **Hero Frame**: Single-column typography focal point with floating telemetry cards (`ACCURACY 99.9%` and `LATENCY 2.4ms`) positioned absolute.
3. **Live Sandbox Preview**: Centered feature mock showing interactive chat logic.
4. **Features Grid**: Responsive card dashboard containing six central key value propositions.
5. **Horizontal/Vertical Stepper**: Timeline list explaining implementation steps ("1. Connect Data", "2. Fine-Tune", "3. Go Live").
6. **FAQ Accordion**: Single-column text toggle menu.
7. **Footer Navigation**: Multi-column directory and copyright block.
8. **Bottom Nav-bar**: Screen navigation controller.

---

## 6. Responsive Behavior

- **Breakpoints**: Standard mobile viewport sizing up to desktop bounds of `1200px`.
- **Navigation Toggles**: Desktop headers render full navigations, while mobile scales to show bottom utility navigation and header menus.
- **Fluid Layout Transitions**: Section gaps shrink from `160px` (desktop) to `80px` (mobile). Margins conform to `24px` gutter layout grids.
- **Grid Adaptability**:
  - Hero floating badges scale or reposition to avoid layout overlap.
  - Capabilities cards transition from a 3-column layout on desktop to a single-column layout on mobile devices.
  - The Stepper component scales from horizontal layouts to vertical column timelines.

---

## 7. Design Rules

1. **Dark Mode First**: Light mode is not supported; contrast values must adapt to dark background tones (`#0F1321`).
2. **Atmospheric Glows**: Do not apply flat drop shadows. Use colored blur gradients (`bg-primary/10`, `bg-secondary/10` with `blur-[120px]`) and soft, outer container drop shadows for primary objects.
3. **Precision Accents**: Incorporate 1px subtle border details (`border-outline-variant/10`) to frame cards instead of thick solid borders.
4. **Micro-Transitions**: All active interactive hover states should execute transition styling (`transition-all duration-300`, `hover:-translate-y-2`, `hover:scale-105`).
5. **JetBrains Mono Badges**: Monospaced typography must be reserved for metrics, hardware versioning, timestamps, code labels, and telemetry stats.
