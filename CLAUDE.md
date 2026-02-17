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

Each book is a Markdown file in `_books/`. Both collections are declared in `_config.yml` with `output: true` and have year/tag/category archives enabled.

### Layouts

- **`book-shelf.liquid`** — Listing page (`_pages/books.md`, permalink `/reading-list/`). Iterates the `books` collection in reverse date order, showing cover thumbnails with a colored status badge. Groups items by year with heading links to year archives.
- **`book-review.liquid`** — Individual review page. Shows title, author, release year, start/finish dates, star rating (supports half-stars), Goodreads link, buy link, cover image, and the review body. If the body is empty (or commented out), shows just the cover and status label.

### Front Matter Fields

| Field | Required | Description |
|---|---|---|
| `layout` | yes | Always `book-review` |
| `title` | yes | Book title |
| `author` | yes | Book author |
| `cover` | no | Local path to cover image (e.g. `assets/img/book_covers/foo.png`) |
| `olid` | no | Open Library ID — used to fetch cover if `cover` is empty |
| `isbn` | no | ISBN — used to fetch cover if both `cover` and `olid` are empty |
| `categories` | no | Genre(s), space-separated (e.g. `fiction`, `high-fantasy`) |
| `tags` | no | Tags, space-separated (e.g. `steampunk funny webnovel`) |
| `buy_link` | no | URL to purchase the book (shows cart icon; Amazon links get Amazon icon) |
| `started` | no | Date started reading (`YYYY-MM-DD`) — also determines the year grouping on the shelf |
| `finished` | no | Date finished reading (`YYYY-MM-DD`) |
| `released` | no | Year of publication |
| `stars` | no | Rating out of 5 (supports decimals for half-stars, e.g. `4.5`) |
| `goodreads_review` | no | Goodreads review ID — wraps star rating in a link |
| `status` | no | One of: `abandoned`, `finished`, `interested`, `paused`, `queued`, `reading`, `reread` (case-insensitive). Displayed as a badge on the shelf and label on empty reviews. Unrecognized values show as `UNCATEGORIZED`. |

### Cover Image Resolution Order

1. `cover` (local path)
2. `olid` → fetched from `covers.openlibrary.org/b/olid/{olid}-L.jpg`
3. `isbn` → fetched from `covers.openlibrary.org/b/isbn/{isbn}-L.jpg`

### Review Body

Markdown body below the front matter. If the body is empty or entirely inside an HTML comment (`<!-- ... -->`), the layout renders a "no review" view with just the cover floated left and the status displayed. Many existing entries use commented-out lorem ipsum as a placeholder.

## Coffee Reviews (`_coffee/`)

Each coffee is a Markdown file in `_coffee/`.

### Layouts

- **`coffee-shelf.liquid`** — Listing page (`_pages/coffee.md`, permalink `/coffee/`). Sorts collection by `roasted` date descending, groups by year, shows cover thumbnails.
- **`coffee-review.liquid`** — Individual review page. Shows title, roaster, origin, producer, varietal, MASL (altitude), process, roast date, price, star rating, buy link, cover image, and review body.

### Front Matter Fields

| Field | Required | Description |
|---|---|---|
| `layout` | yes | Always `coffee-review` |
| `title` | yes | Coffee name (quoted) |
| `roaster` | yes | Roaster name (quoted) |
| `origin` | no | Country of origin |
| `producer` | no | Farm/producer name |
| `varietal` | no | Coffee variety (e.g. `Caturra`, `Pink Bourbon (Landrace)`) |
| `masl` | no | Altitude in meters above sea level |
| `process` | no | Processing method (e.g. `Washed`, `Natural Decaf (Swiss Water)`) |
| `cover` | no | Local path to image (e.g. `assets/img/coffee/foo.webp`) or external URL |
| `tags` | no | Tasting notes, hyphenated (e.g. `Ruby-Port-Wine, Tropical-Fruits`) |
| `categories` | no | Brew methods, comma-separated (e.g. `filter, espresso`) |
| `buy_link` | no | URL to purchase |
| `stars` | no | Rating out of 5 (supports decimals) |
| `roasted` | no | Roast date (`YYYY-MM-DD`) — determines year grouping on the shelf |
| `price` | no | Price in CAD (displayed as `$X CAD`) |

### Review Body Convention

Reviews typically include a personal tasting note paragraph followed by a `## From the Roaster` (or `## From the Roasters`) section with blockquoted text from the roaster's description. Brewing notes can be included but are often commented out.
