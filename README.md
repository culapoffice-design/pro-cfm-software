# PRO CFM – Asset & Maintenance Dashboard

Eine minimalistische Beispieloberfläche für das Asset-&-Maintenance-Modul. Das Layout orientiert sich an modernen UI-Sprachen im Google/Apple-Stil und umfasst:

- feste Topbar mit Suche und Aktionen
- dreispaltiges Dashboard mit Navigationsmenü, Arbeitsbereich und Kontextspalte
- Karten für Kennzahlen, Asset-Portfolio und Detailinformationen
- leichte Interaktion zur Auswahl von Menüpunkten und Assets

## Schnellstart

1. Abhängigkeiten sind nicht erforderlich – es handelt sich um statische Dateien.
2. Projektordner öffnen und per Browser die Datei `index.html` laden **oder**
3. Einen lokalen Server starten, z. B. mit:

   ```bash
   python3 -m http.server 8000
   ```

4. Anschließend `http://localhost:8000/index.html` im Browser aufrufen.

## Tests

Automatisierte Tests sind nicht vorhanden. Zum manuellen Testen kann der oben genannte Server gestartet werden, um das Dashboard zu prüfen.

## Dateien

- `index.html` – Struktur des Dashboards
- `styles.css` – Gestaltung der Oberfläche
- `main.js` – Interaktion für Navigation und Asset-Auswahl

