# Coffee Shelf Star Rating Overlay

## Summary

Display star ratings as a semi-transparent overlay at the bottom of coffee cover images on the `/coffee/` shelf page. Mirrors the pattern used for reading status badges on `/reading-list/`, but shows stars instead of text.

## Current State

- **Coffee shelf** (`_layouts/coffee-shelf.liquid`): Shows cover images as clickable thumbnails in a grid, grouped by year. No rating information is displayed.
- **Book shelf** (`_layouts/book-shelf.liquid`): Shows cover images with a `<figcaption>` status badge (e.g., "FINISHED", "READING") rendered below/on top of each cover. Styled via `figure.cover figcaption.*` rules in `_sass/_base.scss`.
- **Coffee review** (`_layouts/coffee-review.liquid`, lines 54-68): Renders star ratings using Font Awesome icons (`fa-solid fa-star`, `fa-solid fa-star-half-stroke`, `fa-regular fa-star`), supporting full, half, and empty stars out of 5.

## Design

### Behavior

- When a coffee item has a `stars` value, render a star overlay at the bottom of its cover thumbnail.
- When `stars` is not set, render nothing (no overlay, no empty stars).
- Star rendering logic (full/half/empty) is identical to `coffee-review.liquid`.

### HTML Changes — `_layouts/coffee-shelf.liquid`

Inside the existing `<a class="cover-link">` tag, after the `<img>` tag, add a conditional `<figcaption>` block:

```liquid
{% if item.stars %}
  <figcaption class="stars-overlay">
    {% assign full_stars = item.stars | floor %}
    {% assign half_star = item.stars | minus: full_stars %}
    {% assign empty_stars = 5 | minus: full_stars %}
    {% if half_star > 0 %}
      {% assign empty_stars = empty_stars | minus: 1 %}
    {% endif %}
    {% for i in (1..full_stars) -%}
      <i class="fa-solid fa-star fa-sm"></i>
    {%- endfor -%}
    {%- if half_star > 0 %}<i class="fa-solid fa-star-half-stroke fa-sm"></i>{% endif -%}
    {%- for i in (1..empty_stars) -%}
      <i class="fa-regular fa-star fa-sm"></i>
    {%- endfor -%}
  </figcaption>
{% endif %}
```

### CSS Changes — `_sass/_base.scss`

Add rules inside the existing `figure.cover` block:

```scss
a.cover-link {
  position: relative;
  display: inline-block;
}

figcaption.stars-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 4px 0;
  color: #f5c518; // gold for star icons
  font-size: 0.85rem;

  i.fa-regular {
    color: #888; // dimmer empty stars for contrast on dark background
  }
}
```

The `position: relative` on `a.cover-link` establishes the positioning context so the overlay anchors to the bottom of the image. This should not affect the existing book shelf `<figcaption>` elements since they are not absolutely positioned.

### Files Changed

| File | Change |
|------|--------|
| `_layouts/coffee-shelf.liquid` | Add star overlay `<figcaption>` inside the `<a>` tag |
| `_sass/_base.scss` | Add `.stars-overlay` and `a.cover-link` positioning rules inside `figure.cover` |

### No Changes To

- `_layouts/book-shelf.liquid` — book status badges are unaffected
- `_layouts/coffee-review.liquid` — individual review pages unchanged
- Any front matter or data files

## Verification

1. Build site with `bundle exec jekyll build`
2. Check `/coffee/` page: coffees with `stars` show gold star overlay at bottom of cover
3. Check `/coffee/` page: coffees without `stars` show no overlay
4. Check `/reading-list/` page: book status badges still render correctly (no regression)
5. Check an individual coffee review page: star rendering unchanged
