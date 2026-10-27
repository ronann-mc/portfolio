# ronanmcmanus.com

Portfolio de Ronan McManus, monteur de shorts (YouTube Shorts, Reels, TikTok) pour podcasteurs et coachs.
Site 100 % statique fait avec [Astro](https://astro.build) 7, en anglais (`/en/`, langue par défaut) et en français (`/fr/`), hébergé gratuitement sur GitHub Pages.

---

## 1. Lancer le site en local

Il faut **Node.js 22.23 ou plus** (`node -v` pour vérifier).

```bash
npm install        # une seule fois
npm run dev        # site en direct sur http://localhost:4321/en/
npm run build      # vérifie les types puis génère le site dans dist/
npm run preview    # sert le contenu de dist/ pour le tester comme en production
```

`npm run build` doit finir par `Complete!`. Deux avertissements sont normaux tant qu'ils ne sont pas réglés :

- `[legal] LEGAL_ADDRESS and LEGAL_PHONE not set` → voir la section 4.
- `[youtube] No thumbnail for …` → la vidéo est privée ; la miniature apparaîtra au prochain build une fois la vidéo publique.

---

## 2. Où modifier chaque contenu

Tu n'as jamais besoin de toucher aux composants. Tout est dans `src/data/` :

| Je veux changer… | Fichier | Où |
|---|---|---|
| Les chiffres (vues, abonnés, rétention), la date des chiffres | `src/data/shared.ts` | `statsDate`, `channels` |
| Les shorts mis en avant (ID YouTube) | `src/data/shared.ts` | `channels[].bestShort.youtubeId` |
| Les démos de montage, la source et les minutages | `src/data/shared.ts` | `demos` |
| Les prix (€ et $, avec le taux utilisé en commentaire), le pilote, les places disponibles | `src/data/shared.ts` | `pricing` |
| L'adresse e-mail affichée | `src/data/shared.ts` | `site.email` |
| SIREN, TVA, hébergeur | `src/data/shared.ts` | `legal` |
| Le token Cloudflare Web Analytics | `src/data/shared.ts` | `analytics.cloudflareToken` |
| Tous les textes en anglais (accroche, offres, process, FAQ, mentions légales…) | `src/data/en.ts` | |
| Tous les textes en français | `src/data/fr.ts` | |
| Le lien du formulaire Tally | `src/data/en.ts` et `src/data/fr.ts` | `contact.formUrl` |
| Les témoignages clients | `src/data/en.ts` et `src/data/fr.ts` | `testimonials.items` |
| Les couleurs | `src/styles/global.css` | variables en haut du fichier |

Deux conventions dans les textes :

- `*mots*` : met les mots en vert (dans les titres), comme un mot-clé de sous-titre.
- `{views}`, `{months}`, `{price}`… : valeurs remplies automatiquement depuis `shared.ts`. Ne les traduis pas et ne les supprime pas : si une variable manque, le build s'arrête avec un message qui dit laquelle.

Les chiffres du haut de page, de la section « Qui je suis », de la description Google et de l'image de partage (`/og/en.png`, `/og/fr.png`) sont **calculés** à partir de `channels` : mets à jour les chaînes et tout suit.

### Ajouter une démo

1. Dans `src/data/shared.ts`, ajoute un bloc dans `demos` (ID du short, niche `business` / `finance` / `sport`, langue, durée, source et minutages).
2. Ajoute son titre dans `examples.titles` de `src/data/en.ts` **et** de `src/data/fr.ts` (le build te le rappelle si tu oublies).
3. Mets la vidéo en **non répertoriée** sur YouTube et vérifie que **« Autoriser l'intégration »** est coché.

### Mettre à jour les captures YouTube Studio

1. Dépose les nouvelles captures dans `images/` avec les mêmes noms qu'aujourd'hui. Ce dossier n'est **jamais** envoyé sur GitHub (`.gitignore`), car les captures d'origine affichent tes revenus.
2. Lance `npm run crop-proofs` : le script retire la ligne des tuiles (dont les revenus) et écrit les images propres dans `src/assets/proofs/`.
3. Ouvre les images générées pour vérifier qu'aucun montant ne reste visible.

### Créer le formulaire Tally

Crée un formulaire par langue sur [tally.so](https://tally.so) avec 3 champs : e-mail (obligatoire), lien de la chaîne ou du podcast (obligatoire), forfait souhaité (facultatif : Pilote, Starter, Growth, Scale). Colle chaque lien dans `contact.formUrl`. Tant que le champ est vide, les boutons ouvrent un e-mail à la place.

### Activer Cloudflare Web Analytics (sans cookie)

Dans le tableau de bord Cloudflare : **Web Analytics → Add a site → ronanmcmanus.com**, choisis l'installation manuelle par extrait JavaScript, copie le `token` et colle-le dans `analytics.cloudflareToken`. Le paragraphe « Mesure d'audience » des mentions légales apparaît alors automatiquement. Ça fonctionne même si ton DNS reste chez Spaceship.

---

## 3. Déployer sur GitHub Pages

Le déploiement est automatique : chaque `git push` sur la branche `main` lance le workflow officiel d'Astro (`.github/workflows/deploy.yml`), qui construit le site et le publie.

Première mise en ligne :

1. Crée un dépôt **public** vide sur GitHub (par exemple `portfolio`), sans README.
2. Envoie le code (remplace `TON-PSEUDO`) :
   ```bash
   git remote add origin https://github.com/TON-PSEUDO/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. **Settings → Secrets and variables → Actions → New repository secret** : crée `LEGAL_ADDRESS` et `LEGAL_PHONE` (voir section 4).
5. **Settings → Pages → Custom domain** : saisis `ronanmcmanus.com`, enregistre, puis coche **Enforce HTTPS** dès que GitHub le propose (après la configuration DNS ci-dessous).

Pour publier une modification ensuite :

```bash
git add -A
git commit -m "Mise à jour des chiffres"
git push
```

Le site est à jour 1 à 2 minutes plus tard (onglet **Actions** du dépôt pour suivre).

---

## 4. Adresse et téléphone des mentions légales

Ils sont obligatoires pour un site professionnel mais **ne sont jamais écrits dans le code** : le dépôt est public et l'historique Git est permanent.

- **En production** : secrets GitHub `LEGAL_ADDRESS` et `LEGAL_PHONE` (section 3, étape 4). Après les avoir créés ou modifiés, relance le déploiement : onglet **Actions → Deploy to GitHub Pages → Run workflow**.
- **En local** : copie `.env.example` en `.env` (ignoré par Git) et remplis les deux valeurs.

Tant qu'ils sont absents, les deux lignes ne s'affichent pas et le build affiche un avertissement.

---

## 5. DNS chez Spaceship

Dans Spaceship, ouvre la gestion DNS de `ronanmcmanus.com` (Domain Manager → le domaine → **Advanced DNS**).

**À supprimer d'abord** : les enregistrements par défaut sur `@` et `www` (page de parking, redirection Spaceship, anciens A ou CNAME). Ne touche à rien d'autre.

**À créer** :

| Type | Hôte | Valeur |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `TON-PSEUDO.github.io` |

Laisse le TTL par défaut. `www.ronanmcmanus.com` redirigera automatiquement vers `ronanmcmanus.com`. La propagation et le certificat HTTPS prennent de quelques minutes à 24 h.

**Recommandé** : sur GitHub, **Settings (de ton compte) → Pages → Add a domain** pour vérifier le domaine. GitHub te donne un enregistrement `TXT` (`_github-pages-challenge-TON-PSEUDO`) à ajouter chez Spaceship ; il empêche quelqu'un d'autre d'utiliser ton domaine sur GitHub Pages.

### Et la messagerie Proton ?

Aujourd'hui tu utilises `ronan.mcmanus@proton.me` : il n'y a **aucun enregistrement mail** sur le domaine, donc rien à protéger.

Si tu ajoutes plus tard `contact@ronanmcmanus.com` (offre Proton payante), Proton te donnera des enregistrements à créer **en plus** de ceux du tableau : un `TXT` de vérification, deux `MX` (`mail.protonmail.ch` et `mailsec.protonmail.ch`), un `TXT` SPF, trois `CNAME` DKIM et un `TXT` DMARC. Copie exactement les valeurs affichées par Proton. Ils cohabitent sans problème avec ceux de GitHub Pages. Deux règles :

- ne supprime jamais les `MX` ni les `TXT` / `CNAME` de Proton en modifiant le DNS du site ;
- ne crée jamais de `CNAME` sur `@` : il casserait les `MX`.

Pense ensuite à mettre la nouvelle adresse dans `site.email` (`src/data/shared.ts`).

---

## 6. Structure du projet

```
src/
  data/          ← tout le contenu (shared.ts, en.ts, fr.ts)
  assets/proofs/ ← captures YouTube Studio recadrées (sans revenus)
  components/    ← sections de la page
  layouts/       ← <head>, SEO, en-tête et pied de page
  lib/           ← formats (nombres, durées), lecteur YouTube, image de partage
  pages/         ← /en/, /fr/, mentions légales, 404, redirection de /
  styles/        ← couleurs et styles communs
scripts/crop-proofs.mjs  ← recadrage des captures
public/          ← CNAME, robots.txt
```

Choix techniques à connaître :

- **Vidéos** : aucun fichier vidéo dans le dépôt. Les miniatures sont téléchargées au build et servies par le site ; l'iframe YouTube (`youtube-nocookie.com`) ne se charge qu'au clic. Aucun cookie avant ce clic.
- **Police** : TikTok Sans (licence libre OFL), un seul fichier variable auto-hébergé (caractères latins uniquement). L'image de partage utilise ses versions fixes, car Satori ne lit pas les polices variables.
- **Identité** : fond noir, un seul accent vert `#b9f53c` (variable `--accent` dans `src/styles/global.css`, à changer avec `--accent-rgb`, `--accent-hover` et `COLORS.accent` dans `src/lib/og.ts`). Le vert colore les mots et les boutons, mais ne sert jamais de pavé derrière un mot à côté d'un texte blanc.
- **SEO** : balises `hreflang`, Open Graph par langue, `sitemap-index.xml`, `robots.txt`. Les mentions légales sont en `noindex`.
