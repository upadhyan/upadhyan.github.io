# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based academic personal website using the **al-folio** theme (v0.14.6). Site is deployed to GitHub Pages at https://upadhyan.github.io.

## Build & Development Commands

### Local Development (Docker — preferred)
```bash
docker compose pull
docker compose up
# Site at http://localhost:8080, LiveReload on port 35729
```

### Local Development (Manual)
```bash
bundle install
bundle exec jekyll serve
# Site at http://localhost:4000
```

### Production Build
```bash
JEKYLL_ENV=production bundle exec jekyll build
# Output in _site/
```

### Formatting
```bash
npx prettier --check .    # check
npx prettier --write .    # fix
```

## Architecture

- **Static site generator:** Jekyll (Ruby). All content compiles to `_site/`.
- **Templating:** Liquid templates in `_layouts/` and `_includes/`.
- **Styling:** SCSS in `_sass/`, compiled to CSS. Theme colors in `_sass/_themes.scss`.
- **Custom plugins:** Ruby plugins in `_plugins/` (cache-busting, citation fetching, BibTeX filtering, etc.).

### Content Structure

| Directory | Purpose |
|-----------|---------|
| `_pages/` | Top-level site pages (about, publications, cv, blog, etc.) |
| `_posts/` | Blog posts (Markdown, supports Distill-style posts) |
| `_books/` | Book review collection |
| `_coffee/` | Coffee review collection |
| `_projects/` | Portfolio projects |
| `_news/` | News/announcement items |
| `_bibliography/` | BibTeX files (`papers.bib`) for publications page |

### Data Files (`_data/`)

- `cv.yml` — CV content rendered on the CV page
- `coauthors.yml` — Co-author metadata
- `repositories.yml` — GitHub repos to display
- `socials.yml` — Social media links

### Key Config

- `_config.yml` — Main Jekyll config: site metadata, collections, plugin settings, feature toggles
- `Gemfile` — Ruby dependencies (Jekyll + ~20 plugins)
- `docker-compose.yml` — Docker dev environment using `amirpourmand/al-folio:v0.14.6` image

## CI/CD

GitHub Actions workflows in `.github/workflows/`:
- **deploy.yml** — Builds with Ruby 3.3.5 + Python 3.13, runs PurgeCSS, deploys to `gh-pages` branch
- **prettier.yml** — Formatting check on PRs
- **broken-links.yml** — Link validation with lychee
- **axe.yml** — Accessibility testing
- **codeql.yml** — Security scanning

## Content Authoring

- Blog posts go in `_posts/` with filename format `YYYY-MM-DD-slug.md`
- Publications are managed via BibTeX in `_bibliography/papers.bib`; rendered by jekyll-scholar
- Images in `assets/img/` are auto-processed to responsive WebP by jekyll-imagemagick

## Book Reviews (`_books/`)

Each book is a Markdown file in `_books/` using `layout: book-review`. The shelf listing is at `_pages/books.md` (permalink `/reading-list/`), rendered by `book-shelf.liquid`. Use any existing `_books/*.md` file as a template for front matter fields (title, author, cover, status, stars, etc.).

Key behaviors:
- Cover images resolve in order: `cover` (local path) → `olid` (Open Library) → `isbn` (Open Library)
- `status` accepts: `abandoned`, `finished`, `interested`, `paused`, `queued`, `reading`, `reread`. Unrecognized values show as `UNCATEGORIZED`.
- If the body is empty or inside an HTML comment, the layout renders a "no review" view with just the cover and status label.
- `started` date determines the year grouping on the shelf.

## Coffee Reviews (`_coffee/`)

Each coffee is a Markdown file in `_coffee/` using `layout: coffee-review`. The shelf listing is at `_pages/coffee.md` (permalink `/coffee/`), rendered by `coffee-shelf.liquid`. Use any existing `_coffee/*.md` file as a template for front matter fields (title, roaster, origin, stars, etc.).

Key behaviors:
- `roasted` date determines the year grouping on the shelf.
- Reviews typically include a tasting note paragraph followed by a `## From the Roaster` section with blockquoted roaster description.

## Gotchas

- **Prettier config:** Uses `@shopify/prettier-plugin-liquid` with `printWidth: 150`. Run `npx prettier --write .` to format.
- **ImageMagick required:** `imagemagick` must be installed and on PATH for responsive WebP image generation to work. Verify with `convert -version`.
- **jekyll-terser fork:** Pulled from a custom GitHub fork (`RobertoJBeltran/jekyll-terser`), not the standard RubyGem.
- **Jekyll Scholar author config:** `scholar.last_name` and `scholar.first_name` in `_config.yml` control which author name is highlighted in bibliography entries.
