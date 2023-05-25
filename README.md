# Elegant SEO Website
An elegant website ⛩️, aim to be easy et beautiful, with just the necessary, and optimize for SEO.

# NOTES

- content-first https://gridless.design/for-developers
- mobile-first

# TODO

- [x] feat: create main pages: homepage, productpage, productlistpage, basketpage, loginpage/registerpage, myaccountpage
- [x] build: add `reset css`
- [x] add `scss` & `concurrently` (to build scss independently) libs
- [x] generate inline css (we not rely on vite => hard...)
- [x] refactor: clean default `vite` files
- [x] refactor: init fonts
- [x] feat(homepage): design global zones
- [x] design(homepage): tune `base.scss`
- [x] design(text): limit with max-length
- [x] design(font): optimize space between title vs. text
- [x] perf(lighthouse): change the build in order to have feedbacks on performances (100% fcp:1.4 lcp:1.4 si:1.4)
- [ ] check :
`content should be dictating the layout and layout should adjust to the available space. This means that smaller components of the page need to respond to the size of their closer ancestors.`
- [ ] design(grid): init a fluid grid (based on //utopia.fyi)
1920 => 300 margin (col:12 gutter:24px)

12 col => 4 col 📱
- [ ] refactor: switch from `px` to `rem` ?
- [ ] design(r&d): extract main components from beautiful websites
- [ ] design(link): init component
- [ ] design(button): init component
- [ ] design(icon): init component
- [ ] design(menu): for mobile
- [ ] design(menu): for desktop
- [ ] design: design slider
- [ ] design(icon): use dynamic icons ?
- [ ] design(text): use letter spacing ?
- [ ] perf(seo): generate metas ?
- [ ] refactor(text): for max-length use 2 values : 42ch and 60ch?
- [ ] refactor: remove `style.scss`
- [ ] refactor: remove `*.css.map`?
- [ ] style: implement snap (`scroll-snap-type: x mandatory`)
- [ ] ci: deploy on production

#

# TEMP commit message

- `build` : changements qui affectent le système de build ou des dépendances externes (npm, make…)
- `ci` : changements concernant les fichiers et scripts d’intégration ou de configuration (Travis, Ansible, BrowserStack…)
- `feat` : ajout d’une nouvelle fonctionnalité
- `fix` : correction d’un bug
- `perf` : amélioration des performances
- `refactor` : modification qui n’apporte ni nouvelle fonctionalité ni d’amélioration de performances
- `style` : changement qui n’apporte aucune alteration fonctionnelle ou sémantique (indentation, mise en forme, ajout d’espace, renommante d’une variable…)
- `docs` : rédaction ou mise à jour de documentation
- `test` : ajout ou modification de tests