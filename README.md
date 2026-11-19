
# App Ref. Card 02
React Application (serverless)

---
title: App Ref. Card 01
author: Rinaldo Lanza, BBW
date: 12. Februar 2023
---

Link zur Übersicht<br/>
https://gitlab.com/bbwrl/m347-ref-card-overview


### Projekt bauen und starten
Die Ausführung der Befehle erfolgt im Projektordner
Builden mit Node/npm<br/>
```$ npm install```

Das Projekt wird gebaut und die entsprechenden Dateien unter dem Ordner node_modules gespeichert.
Die App kann nun mit folgendem Befehl gestartet werden<br/>
```$ npm start```

Die App kann nun im Browser unter der URL http://localhost:3000 betrachtet werden.


### Tests und Linter ausführen
```
$ npm run test:ci   # Jest einmal ausführen inkl. Coverage (wie in der Pipeline)
$ npm test          # Jest im Watch-Modus während dem Entwickeln
$ npm run lint      # ESLint, jede Warnung ist ein Fehler
```
In VS Code: Testing-Panel (Kolben-Symbol, Extension "Jest") oder `Terminal > Run Task`.

### Inbetriebnahme mit Docker Container
```
$ docker build -t refcard02 .
$ docker run --rm -p 8081:80 refcard02
```
Danach im Browser http://localhost:8081 öffnen. Das Image baut die App mit Node und liefert sie mit Nginx aus.

### CI/CD (GitHub Actions)
Workflow: `.github/workflows/ci-cd.yml`

1. **build-and-test**: `npm ci`, ESLint, Jest-Tests, Produktions-Build, Coverage und Build als Artefakte
2. **docker**: Image bauen, Container starten und mit `curl` prüfen (Smoke-Test), danach Push zu Docker Hub und ghcr.io

Benötigte Repository-Secrets (Settings > Secrets and variables > Actions):

| Secret | Inhalt |
|---|---|
| `DOCKERHUB_USERNAME` | Docker-Hub-Benutzername |
| `DOCKERHUB_TOKEN` | Docker-Hub Personal Access Token (Read & Write) |

Für ghcr.io braucht es kein Secret, der Workflow nutzt das automatische `GITHUB_TOKEN`.



