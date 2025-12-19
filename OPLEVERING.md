# Handleiding: Uploaden naar TransIP

Gefeliciteerd! De website is klaar voor productie. Volg de onderstaande stappen om de site live te zetten via de TransIP File Manager.

## 1. Wat moet je uploaden?
Je moet de INHOUD van de map `dist` uploaden naar de hoofdmap (vaak `www` of `public_html`) op je TransIP hosting.

**De belangrijkste bestanden in `dist` zijn:**
- `assets/` (map met alle vormgeving en logica)
- `api/` (map met de e-mail functionaliteit)
- `index.html` (het startpunt van de site)
- `.htaccess` (voor de juiste paden en e-mail ondersteuning)

## 2. Stappenplan File Manager
1. Log in op je TransIP controlepaneel.
2. Ga naar 'Webhosting' en open de **File Manager**.
3. Navigeer naar de map waar de site moet komen (bijv. de `www` map).
4. Verwijder eventuele oude bestanden (maak eerst een backup als dat nodig is).
5. Upload alle bestanden en mappen **die in de `dist` map staan**. 
   *Tip: Je kunt de inhoud van `dist` zippen, de zip uploaden en dan in de File Manager 'Extract' kiezen.*

## 3. PHPMailer (Cruciaal voor de Mail-functie)
Het e-mail script zoekt naar PHPMailer om de mails veilig via SMTP te versturen.
1. Download PHPMailer (of ik kan je helpen de juiste bestanden klaar te zetten).
2. Zorg dat er een map genaamd `vendor` of `PHPMailer` in de hoofdmap van je site staat.
3. Als je PHPMailer handmatig uploadt, plaats deze dan in: `public_html/api/PHPMailer/`

## 4. Controleren
Zodra de bestanden op de server staan:
1. Ga naar je domeinnaam (bijv. `https://zorgzaamgeregeld.nl`).
2. Test de Zorgcheck en de "Mail me de uitslag" knop.
3. Werkt het niet? Controleer de 'Error log' in je TransIP paneel of neem contact met mij op.

**Succes met de lancering!**
