# Elegant SEO Website
An elegant website ⛩️, aim to be easy et beautiful, with just the necessary, and optimize for SEO.

DEMO 🔥 : https://elegant-seo-website.vercel.app/

Lighthouse score : 100% ???

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
- [x] design(grid): init a fluid grid (based on //utopia.fyi)
- [x] build: add `svelte` 
- [x] feat: can open/close `slide-panel`
- [x] design(panel): prevent body slide
- [x] ci: deploy on production //elegant-seo-website.vercel.app
- [ ] design(header): tune it
- [ ] feat(basketicon): use only one <custom-component> for store & to manage reactivity for others component ?

- [ ] design(r&d): extract main components from beautiful websites
- [ ] design(r&d): sketch all my mobile screen
- [ ] feat(cookieconsent): can accept/refuse cookie consent
- [ ] feat(googleavis): can see google avis
- [ ] perf(lazy): <img loading="lazy" src="">
- [ ] perf(lazy): <icon>
- [ ] perf(lazy): <video>
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 

- [ ] design: init `slider`
- [ ] refactor: switch from `px` to `rem` ?
- [ ] design(link): init component
- [ ] design(button): init component
- [ ] design(icon): init component
- [ ] design(panel): tune it
- [ ] design(menu): for mobile
- [ ] design(menu): for desktop
- [ ] design(icon): use dynamic icons ?
- [ ] design(text): use letter spacing ?
- [x] perf(seo): generate metas ?
- [ ] refactor(text): for max-length use 2 values : 42ch and 60ch?
- [ ] refactor: remove `svelte/store`?
- [ ] refactor: remove `style.scss`
- [ ] refactor: remove `*.css.map`?
- [ ] style: implement snap (`scroll-snap-type: x mandatory`)

# SPECS

## <button-icon>

- icon-size: 24px
- container-size (button-size): 40px
- touch-target-size (with margin): 48px

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