# Zorgzaam Geregeld Website

Een professionele, warme en luxe website voor Zorgzaam Geregeld - huishoudelijke ondersteuning en mantelzorg.

## 🚀 Snel starten

### Ontwikkeling
```bash
npm run dev
```
De website is dan beschikbaar op `http://localhost:5173`

### Productie build maken
```bash
npm run build
```
De productie-bestanden komen in de `dist` folder.

## 📁 Project structuur

```
zorgzaam-geregeld/
├── src/
│   ├── components/          # Herbruikbare componenten
│   │   ├── Header.tsx       # Navigatie header
│   │   ├── Footer.tsx       # Footer met contactinfo
│   │   ├── Hero.tsx         # Hero sectie voor homepage
│   │   ├── ServiceCard.tsx  # Diensten kaart component
│   │   └── PricingCard.tsx  # Prijzen kaart component
│   ├── pages/               # Pagina's
│   │   ├── Home.tsx         # Homepage
│   │   ├── OverMij.tsx      # Over mij pagina
│   │   ├── Diensten.tsx     # Diensten overzicht
│   │   ├── Tarieven.tsx     # Prijzen en pakketten
│   │   └── Contact.tsx      # Contact & intakeformulier
│   ├── assets/              # Afbeeldingen en media
│   │   └── hero-photo.jpg   # Jouw foto voor hero sectie
│   ├── App.tsx              # Hoofd app component met routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Globale styling met Tailwind
├── public/                  # Publieke bestanden
├── index.html               # HTML template
└── package.json             # Dependencies
```

## 🎨 Design & Kleuren

De website gebruikt een warm, professioneel kleurenpalet:
- **Chocolate Brown** (#8B6F47) - Hoofdkleur voor headers
- **Light Chocolate** (#A68A64) - Navigatie achtergrond
- **Beige** (#F5E6D3) - Achtergronden
- **Sand/Clay** - Accenten

Typografie:
- **Playfair Display** - Serif font voor koppen
- **Inter** - Sans-serif voor body tekst

## 📸 Foto vervangen

Je huidige foto staat in `src/assets/hero-photo.jpg`. Om deze te vervangen:

1. Plaats je nieuwe foto in `src/assets/`
2. Hernoem deze naar `hero-photo.jpg` (of pas de import aan in `Hero.tsx` en `OverMij.tsx`)
3. Zorg dat de foto een goede resolutie heeft (minimaal 800x1000px)
4. Portretoriëntatie werkt het beste

## 🌐 Uploaden naar TransIP via SFTP

### Stap 1: Build maken
```bash
npm run build
```

### Stap 2: SFTP verbinding maken
Gebruik een SFTP client zoals FileZilla, WinSCP, of Cyberduck.

**Verbindingsgegevens:**
- Host: `ftp.jouwdomein.nl` (of het SFTP adres van TransIP)
- Protocol: SFTP
- Poort: 22
- Gebruikersnaam: Je TransIP gebruikersnaam
- Wachtwoord: Je TransIP wachtwoord

### Stap 3: Bestanden uploaden
1. Navigeer naar de `public_html` of `www` folder op de server
2. Upload ALLE bestanden uit de `dist` folder
3. Zorg dat de mappenstructuur behouden blijft:
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── [css bestanden]
   │   ├── [js bestanden]
   │   └── [afbeeldingen]
   └── [andere bestanden]
   ```

### Stap 4: Controleren
Bezoek je domein in de browser om te controleren of alles werkt.

## 📝 Inhoud aanpassen

### Teksten wijzigen
- **Homepage**: `src/pages/Home.tsx`
- **Over mij**: `src/pages/OverMij.tsx`
- **Diensten**: `src/pages/Diensten.tsx`
- **Tarieven**: `src/pages/Tarieven.tsx`
- **Contact**: `src/pages/Contact.tsx`

### Contactgegevens
Zoek in de bestanden naar:
- `info@zorgzaamgeregeld.nl` - vervang met je echte email
- `06 12 34 56 78` - vervang met je echte telefoonnummer
- `Nederland` - vervang met je werkgebied

### Kleuren aanpassen
Wijzig de kleuren in `tailwind.config.js` onder `theme.extend.colors`.

## 🔧 Technische details

- **Framework**: React 18 met TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Build tool**: Vite
- **Responsive**: Mobile-first design

## 📱 Responsive Design

De website is volledig responsive en werkt perfect op:
- 📱 Mobiele telefoons
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop computers

## ✅ Checklist voor live gaan

- [ ] Vervang placeholder foto met je eigen foto
- [ ] Pas contactgegevens aan (email, telefoon)
- [ ] Vul je eigen verhaal in op de "Over mij" pagina
- [ ] Controleer alle prijzen in de Tarieven pagina
- [ ] Test het contactformulier
- [ ] Maak een productie build (`npm run build`)
- [ ] Upload naar TransIP via SFTP
- [ ] Test de live website op verschillende apparaten

## 🆘 Hulp nodig?

Als je vragen hebt over de website, neem dan contact op met de ontwikkelaar.

## 📄 Licentie

© 2025 Zorgzaam Geregeld. Alle rechten voorbehouden.
