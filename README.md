# Sainte-Baume — PWA GPS hors ligne

## Installation sur GitHub Pages (Android)

1. Sur GitHub, créer un dépôt **public** nommé `sainte-baume-rando`.
2. Cliquer **Add file > Upload files**, puis déposer **tous les fichiers à la racine** du ZIP : `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`. Ne pas déposer le ZIP lui-même. Valider **Commit changes**.
3. Dans **Settings > Pages**, sous **Build and deployment**, choisir **Deploy from a branch**, `main`, `/ (root)`, puis **Save**.
4. Attendre le déploiement ; ouvrir `https://VOTRE-PSEUDO.github.io/sainte-baume-rando/` dans **Chrome sur Android**.
5. Garder Internet actif, recharger une fois. Cliquer **Vérifier les fichiers en cache** ; obtenir la confirmation. Dans Chrome, menu ⋮ > **Ajouter à l'écran d'accueil** > **Installer** (selon version), ou utiliser le bouton **Installer** s'il apparaît.
6. Télécharger le GPX depuis le lien du guide (ou un autre GPX vérifié). Dans la PWA, cliquer **Importer GPX**, sélectionner le fichier et vérifier visuellement qu'il couvre la grotte, le col, la chapelle et le retour au parking. Vérifier environ 6,3–6,5 km et l'absence de tronçons aberrants. **Ne pas importer une trace au hasard.**
7. Autoriser la localisation **précise** lorsque Chrome le demande, puis appuyer sur **Activer le suivi GPS**. Attendre une précision correcte à l'extérieur.
8. **TEST INDISPENSABLE AVANT LE DÉPART :** fermer l'application, activer le mode avion, la rouvrir depuis l'icône, vérifier que le guide et la trace restent visibles, puis tester le GPS dehors. Le GPS peut nécessiter plus de temps pour acquérir une position sans réseau. Repasser en ligne pour vérifier les conditions météo et les fermetures.
9. Conserver **en secours** la même trace et une carte topographique réellement téléchargée dans une application spécialisée (Visorando/AllTrails/Organic Maps selon couverture), plus une batterie externe.

## Limites importantes

- L'application **n'inclut pas** de fond topographique IGN ou OSM : uniquement une trace GPS vectorielle sur fond abstrait.
- Les positions GPS et écarts sont indicatifs ; ne pas suivre une flèche dans un pierrier ou une falaise.
- L'indicateur « distance jusqu'à fin du GPX » dépend de l'ordre des points : sur une boucle, il peut être trompeur au voisinage du départ ou de portions proches.
- La flèche pointe vers la trace selon le **nord**, pas selon l'orientation physique du téléphone.
- Le suivi peut être interrompu lorsque le téléphone verrouille l'écran ou que le système met le navigateur en veille.
- Le GPX est stocké localement dans le navigateur. Effacer les données du site ou changer de navigateur peut le supprimer.
- Cette PWA n'est pas un appareil de navigation certifié et **n'a pas été testée sur votre téléphone ni sur le terrain**.
- Les descriptions du parcours sont un guide, pas une garantie de conformité avec un GPX tiers.

## Dépannage

- **Page 404** : vérifier `index.html` à la racine, branche `main`, Pages activé et patienter quelques minutes.
- **Pas de bouton Installer** : ouvrir en HTTPS avec Chrome, puis menu ⋮ > Ajouter à l'écran d'accueil.
- **Cache incomplet** : recharger en ligne, attendre quelques secondes et relancer le contrôle.
- **GPS bloqué** : autorisations Android > Applications > Chrome > Position > Autoriser, puis paramètres du site.
- **Pas de GPX** : télécharger le fichier `.gpx`, pas la page HTML de la plateforme de randonnée.
- **Mise à jour** : changer la valeur de `CACHE` dans `sw.js` (ex. `v2`) avant de republier pour forcer le renouvellement.

## Sources de parcours à comparer

- Parc naturel régional / Chemins des Parcs : https://www.cheminsdesparcs.fr/trek/73715-PLAN-D-AUPS-SAINTE-BAUME---La-chapelle-du-Saint-Pilon
- Visorando : https://www.visorando.com/randonnee-grotte-sainte-madeleine-saint-pilon/
- Trace communautaire VisuGPX : https://www.visugpx.com/YP5OoGlrfO

Vérifier que la trace choisie correspond **exactement** à la variante grotte + chapelle + Chemin des Roys.
