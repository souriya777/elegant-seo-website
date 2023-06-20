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
- [x] feat: can open/close `drawer`
- [x] design(drawer): prevent body slide
- [x] ci: deploy on production //elegant-seo-website.vercel.app
- [x] build(architecture): find architecture in order to have `SEO & performances optimizations`, mixed with `facilities of svelte reactivity`
- [x] design(header): tune it
- [x] perf(page): add specific css/js per page
- [x] refactor: remove `style.scss`
- [x] design(drawer): inject menu content
- [x] design(drawer): choose shape
- [x] refactor(drawer): use `svelte store` & <custom-component>
- [x] design(r&d): extract main components from beautiful websites
- [x] design(r&d): sketch main mobile screen
- [x] perf(seo): generate metas ? => yes by `prestashop`
- [x] design(drawer): add `shadow` on background
- [x] design(icon): use dynamic icons ? => no
- [x] design(icon): add `ripple` effect ? => no
- [x] design(icon): style `button` & `icon`
- [x] design(icon): add keyboard interactions
- [x] design(drawer): close it when clicked `scrim`
- [x] design(drawer): open/close button + logo
- [x] design(drawer): tune effect
- [x] design(button): init all kind of button + add "back-to-top" functionalities
- [x] feat(button): connect to `store`
- [x] perf(lazy): <icon>
- [x] design(basketicon): create it + connect to store
- [x] perf(lighthouse): create configuration to test lighthouse score (score: 100%-FCP:1.1-LCP:1.2-CLS:.002-SI:1.1)
- [x] feat(slider): code my own slider, based on //esqido.com
- [x] design(headtop-slider): make it
- [ ] design(horizontal-slider): make it
- [ ] test(slider): on all browsers, all mobiles
- [ ] refactor(slider): move product slider css to `/pages/product.scss`
- [ ] feat(css): implement `text-wrap: balance`
- [ ] feat(add-to-cart): call FAKE API https://fakestoreapi.com/docs
- [ ] feat(r&d): test <dialog>
- [ ] feat(r&d): test `initialLetter css`
- [ ] feat(r&d): test `container queries`
 [ ] design(menu): for desktop (inspired by https://vercel.com)
- [ ] feat(menu): switch betwee mobile/desktop
- [ ] design(link): init component
- [ ] perf(lazy): <img loading="lazy" src="">
- [ ] perf(lazy): <video>
- [ ] design(footer): init
- [ ] design(newsletter): init
- [ ] feat(newsletter): connect to API
- [ ] design(socialnetwork): init
- [ ] design(form): create `input`
- [ ] design(form): create `form` => see REGISTER of https://bohemiantraders.com/
🟧 HOMEPAGE OK
🟥 PRODUCTPAGE OK
🟥 PRODUCTLISTPAGE OK
🟥 BASKETPAGE OK
🟥 MYACCOUNTPAGE OK
🟥 LOGINPAGE OK
🟥 REGISTERPAGE OK
- [ ] feat(r&d): test `array.at()`
- [ ] feat(r&d): test `structuredClone()` (spread use shallow copy) (`JSON.parse(JSON.stringify(myobj))`) 
- [ ] feat(r&d): test `color mix` for progressive gradient color
- [ ] perf(svg): import file {{> svg/icon-arrow-prev}} ???
- [ ] perf(js): use import type `modulepreload` ?
- [ ] perf(css): remove generation of `*.map` files
- [ ] perf(css): check if `inlined CSS` are too big
- [ ] design(text): use letter spacing ?
- [ ] refactor: remove `*.css.map`?
- [ ] refactor: remove all vars ` --md-ref-palette-neutral*`?
- [ ] style: implement snap (`scroll-snap-type: x mandatory`)
- [ ] refactor: switch from `px` to `rem` ?
- [ ] refactor(text): for max-length use 2 values : 42ch and 60ch?
- [ ] feat(cookieconsent): can accept/refuse cookie consent
- [ ] feat(googleavis): can see google avis
- [ ] feat(basket-drawer): https://www.volandotequila.com.au/volando-blanco-750ml ???
- [ ] feat(homepage): adapt to //ts-barnum
- [ ] feat(form): add `reCAPTCHA` https://bohemiantraders.com/
- [ ] refactor(old-project): remove project `elegant-seo-design-system`
- [ ] feat(checkout): clone https://bohemiantraders.com/ ?
- [ ] feat(payment): grab payment-types (paypal, Gpay) => see https://bohemiantraders.com/checkout
- [ ] design(payment): create it 
- [ ] feat(payment): create it 
- [ ] refactor(css): test `:is()`
- [ ] refactor(css): test `:has()`

# SPECS

# DEPLOYMENT

- vercel: change default `output directory` to `dist/client`
- `.env`: rename `.env-to-rename` to `.env`

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