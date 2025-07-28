# 🟩 Mini‑Wordle React

**Mini‑Wordle** est un mini-jeu inspiré du célèbre Wordle :
- ⚛️ Développé avec **React 19**
- ⚡ Basé sur **Vite 7** pour un environnement de développement rapide avec **HMR**
  
Le but ? Deviner le mot mystère en un maximum de 6 essais. Chaque lettre est colorée selon sa présence et sa position dans le mot cible :

- 🟩 **Vert** : lettre correcte et bien placée
- 🟨 **Jaune** : lettre présente mais mal placée
- ⬜ **Gris** : lettre absente du mot

> ⚠️ **Important** : le jeu n’accepte **que des mots de 5 lettres**.  
> L’input est automatiquement limité à 5 caractères ; si vous tapez moins, il ne se passera rien au click sur le bouton **Guess**.

---

## ⚡ Aperçu rapide

| Fonctionnalité          | Détail                                                  |
|--------------------------|----------------------------------------------------------|
| 🎮 Jeu interactif        | Saisie clavier, validation, feedback couleur              |
| 🔁 Composants dynamiques | Composant `Row` pour chaque ligne, props + logique de style |
| ⚛️ Hooks React           | `useState` pour suivre les tentatives et l'état du jeu     |
| ⚡ Vite                   | Dev ultra‑rapide avec hot reload (HMR)                     |
| 🎨 CSS simple            | Sans frameworks, facile à personnaliser                    |

---

## 🚀 Lancer le projet en local

### 📦 Prérequis

[Node.js](https://nodejs.org/) ≥ 16.x *(inclut npm ≥ 8.x)*

### 🧪 Étapes

#### 1. Cloner le repo
```bash
git clone https://github.com/Hamzael25/Mini_Wordle_React.git
cd Mini_Wordle_React
```

#### 2. Installer les dépendances et lancer le serveur de dev
```bash
npm install
npm run dev
```


