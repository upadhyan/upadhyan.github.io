# Coffee Shelf Star Rating Overlay — Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show star ratings as a bottom overlay on coffee cover thumbnails in the `/coffee/` shelf page.

**Architecture:** Add a `<figcaption class="stars-overlay">` inside the existing `<a class="cover-link">` in `coffee-shelf.liquid`, using the same Font Awesome star icons already used in `coffee-review.liquid`. Style with absolute positioning inside `figure.cover` in `_sass/_base.scss`.

**Tech Stack:** Liquid templates, SCSS, Font Awesome icons (already loaded)

**Spec:** `docs/superpowers/specs/2026-03-16-coffee-shelf-star-overlay-design.md`

---

### Task 1: Add star overlay HTML to coffee shelf layout

**Files:**
- Modify: `_layouts/coffee-shelf.liquid:32-33` (between `</img>` closing and `</a>` closing)

- [ ] **Step 1: Add star rendering block after the `<img>` tag**

Inside the `<a class="cover-link">` tag, after the `{% endif %}` that closes the cover image conditional (line 32), add:

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

### Task 2: Add CSS for overlay positioning and styling

**Files:**
- Modify: `_sass/_base.scss` (inside existing `figure.cover` block, around line 1383)

- [ ] **Step 2: Add positioning to `a.cover-link` and style `.stars-overlay`**

Inside the `figure.cover {` block, before the existing `figcaption.abandoned` rule, add:

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
    color: #f5c518;
    font-size: 0.85rem;

    i.fa-regular {
      color: #888;
    }
  }
```

### Task 3: Build and verify

- [ ] **Step 3: Build the site**

Run: `bundle exec jekyll build`
Expected: Build succeeds with no new errors.

- [ ] **Step 4: Visual verification**

Check these pages:
1. `/coffee/` — coffees with `stars` show gold star overlay at bottom of cover image
2. `/coffee/` — coffees without `stars` show no overlay
3. `/reading-list/` — book status badges still render correctly (no regression from the `a.cover-link` positioning change)

- [ ] **Step 5: Commit**

```bash
git add _layouts/coffee-shelf.liquid _sass/_base.scss
git commit -m "feat: add star rating overlay to coffee shelf thumbnails"
```
