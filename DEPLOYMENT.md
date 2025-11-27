# 🚀 Deployment Guide - TransIP SFTP

Deze gids helpt je stap-voor-stap om de Zorgzaam Geregeld website naar TransIP te uploaden.

## Voorbereiding

### 1. Build de website
Open een terminal/PowerShell in de project folder en voer uit:
```bash
npm run build
```

Dit maakt een `dist` folder aan met alle productie-bestanden.

### 2. Benodigde informatie
Zorg dat je de volgende gegevens bij de hand hebt:
- TransIP domeinnaam (bijv. `zorgzaamgeregeld.nl`)
- SFTP hostnaam (meestal `ftp.jouwdomein.nl` of via TransIP control panel)
- SFTP gebruikersnaam
- SFTP wachtwoord
- Poort: 22 (standaard voor SFTP)

## SFTP Client installeren

### Optie 1: FileZilla (Aanbevolen voor beginners)
1. Download FileZilla Client van https://filezilla-project.org/
2. Installeer FileZilla
3. Open FileZilla

### Optie 2: WinSCP (Windows)
1. Download WinSCP van https://winscp.net/
2. Installeer WinSCP
3. Open WinSCP

### Optie 3: Cyberduck (Mac/Windows)
1. Download Cyberduck van https://cyberduck.io/
2. Installeer Cyberduck
3. Open Cyberduck

## Verbinding maken met TransIP

### In FileZilla:
1. Klik op "Bestand" → "Sitebeheer" → "Nieuwe site"
2. Vul in:
   - **Protocol**: SFTP - SSH File Transfer Protocol
   - **Host**: `ftp.jouwdomein.nl` (of je TransIP SFTP adres)
   - **Poort**: 22
   - **Aanmeldtype**: Normaal
   - **Gebruiker**: Je TransIP gebruikersnaam
   - **Wachtwoord**: Je TransIP wachtwoord
3. Klik op "Verbinden"
4. Accepteer de server fingerprint (eerste keer)

### In WinSCP:
1. Klik op "Nieuwe site"
2. Vul in:
   - **Bestandsprotocol**: SFTP
   - **Hostnaam**: `ftp.jouwdomein.nl`
   - **Poortnummer**: 22
   - **Gebruikersnaam**: Je TransIP gebruikersnaam
   - **Wachtwoord**: Je TransIP wachtwoord
3. Klik op "Aanmelden"

## Bestanden uploaden

### Stap 1: Navigeer naar de juiste folder
Op de server (rechterkant in FileZilla):
- Zoek de `public_html` of `www` of `httpdocs` folder
- Dit is de root folder voor je website
- Open deze folder

### Stap 2: Verwijder oude bestanden (optioneel)
Als er al bestanden in de folder staan:
- Maak eerst een backup (download de oude bestanden)
- Verwijder de oude bestanden

### Stap 3: Upload de nieuwe bestanden
Op je computer (linkerkant in FileZilla):
1. Navigeer naar de `dist` folder in je project
2. Selecteer ALLE bestanden en folders in de `dist` folder
3. Sleep ze naar de `public_html` folder op de server
   OF
   Rechtermuisklik → "Upload"

**Belangrijk**: Upload de INHOUD van de `dist` folder, niet de `dist` folder zelf!

De structuur op de server moet zijn:
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── hero-photo-[hash].jpg
└── vite.svg
```

### Stap 4: Controleer de upload
- Zorg dat alle bestanden succesvol zijn geüpload
- Controleer of de `assets` folder alle bestanden bevat
- Controleer of `index.html` in de root staat

## Website testen

1. Open je browser
2. Ga naar je domeinnaam (bijv. `https://zorgzaamgeregeld.nl`)
3. Test alle pagina's:
   - Home
   - Over mij
   - Diensten
   - Tarieven
   - Contact
4. Test op verschillende apparaten (mobiel, tablet, desktop)

## Problemen oplossen

### Website toont oude versie
- Wis je browser cache (Ctrl+F5 of Cmd+Shift+R)
- Wacht 5-10 minuten (DNS propagatie)

### 404 Error / Pagina niet gevonden
- Controleer of `index.html` in de root folder staat
- Controleer of de bestandsnamen correct zijn (hoofdlettergevoelig!)

### Afbeeldingen worden niet geladen
- Controleer of de `assets` folder correct is geüpload
- Controleer of alle bestanden in de `assets` folder staan

### Styling werkt niet
- Controleer of de CSS bestanden in de `assets` folder staan
- Wis browser cache

### Links werken niet (React Router)
TransIP heeft mogelijk extra configuratie nodig voor client-side routing:

1. Maak een `.htaccess` bestand aan in de root folder met:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

2. Upload dit bestand naar de `public_html` folder

## Updates uploaden

Als je later wijzigingen maakt:

1. Maak wijzigingen in de code
2. Run `npm run build` opnieuw
3. Upload alleen de gewijzigde bestanden
   OF
   Upload alle bestanden opnieuw (veiliger)

## Backup maken

**Belangrijk**: Maak regelmatig backups!

1. Download de hele `public_html` folder naar je computer
2. Bewaar deze op een veilige plek
3. Doe dit voor elke grote update

## Checklist voor deployment

- [ ] `npm run build` succesvol uitgevoerd
- [ ] Alle bestanden uit `dist` folder geüpload
- [ ] `index.html` staat in de root folder
- [ ] `assets` folder met alle bestanden geüpload
- [ ] Website bereikbaar via domeinnaam
- [ ] Alle pagina's werken (Home, Over mij, Diensten, Tarieven, Contact)
- [ ] Afbeeldingen worden geladen
- [ ] Styling ziet er correct uit
- [ ] Getest op mobiel
- [ ] Getest op desktop

## Support

Bij vragen of problemen:
- Check de TransIP documentatie: https://www.transip.nl/knowledgebase/
- Neem contact op met TransIP support
- Of neem contact op met de ontwikkelaar van deze website

---

**Succes met je website! 🎉**
