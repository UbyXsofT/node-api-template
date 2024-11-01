# 🚀 Node.js API Template

## 📝 Descrizione

Questo template moderno e scalabile offre un punto di partenza robusto per lo sviluppo di API REST con Node.js, seguendo le migliori pratiche di sviluppo software.

## ✨ Caratteristiche Principali

- 🏗️ **Architettura Modulare e Scalabile**

  - Struttura organizzata per progetti enterprise
  - Supporto nativo al versionamento delle API
  - Separazione chiara di responsabilità (MVC)

- 🛡️ **Sicurezza Avanzata**

  - Protezione tramite Helmet
  - Configurazione CORS personalizzabile
  - Gestione sicura delle variabili d'ambiente

- 📊 **Strumenti di Sviluppo**

  - Test automatizzati con Jest
  - Logging professionale con Winston
  - Controllo qualità del codice (ESLint e Prettier)

- 🔧 **Tecnologie Moderne**
  - Moduli ES con import/export
  - Supporto TypeScript (opzionale)
  - Configurazione flessibile per diversi ambienti

## 🛠️ Stack Tecnologico

| Categoria | Tecnologia | Versione Consigliata |
| --------- | ---------- | -------------------- |
| Runtime   | Node.js    | 18.x+                |
| Framework | Express    | 4.x+                 |
| Database  | MongoDB    | 6.x+                 |
| Testing   | Jest       | 29.x+                |
| Logging   | Winston    | 3.x+                 |
| Sicurezza | Helmet     | 6.x+                 |

## 🚦 Prerequisiti

- Node.js 18.x o superiore
- npm 9.x o superiore
- MongoDB 6.x o superiore
- Git

## 🔧 Installazione Rapida

```bash
# Clona il repository
git clone https://github.com/tuonome/nodejs-api-template.git
cd nodejs-api-template

# Installa le dipendenze
npm install

# Copia e configura le variabili d'ambiente
cp .env.example .env
# Modifica .env con le tue configurazioni
```

## 📋 Comandi Disponibili

| Comando          | Descrizione                       |
| ---------------- | --------------------------------- |
| `npm run dev`    | Avvia server in modalità sviluppo |
| `npm start`      | Avvia server in produzione        |
| `npm test`       | Esegue test suite                 |
| `npm run lint`   | Verifica qualità codice           |
| `npm run format` | Formatta codice automaticamente   |

## 🏗️ Struttura del Progetto

```
src/
├── config/                     # Configurazioni
│   └── database.js             # Configurazione della connessione al database
├── controllers/                # Logica di business
│   ├── v1/
│   │   ├── item.controller.js  # Controller per gli item (versione 1)
│   │   └── stato.controller.js # Controller per lo stato (versione 1)
│   └── v2/
│       ├── item.controller.js  # Controller per gli item (versione 2)
│       └── stato.controller.js # Controller per lo stato (versione 2)
├── middleware/                 # Middleware personalizzati
├── models/                     # Modelli dati
│   └── item.js                 # Modello Mongoose per gli item
├── routes/                     # Definizione API routes
│   ├── v1/
│   │   ├── item.routes.js      # Rotte per gli item (versione 1)
│   │   └── stato.routes.js     # Rotte per lo stato (versione 1)
│   └── v2/
│       ├── item.routes.js      # Rotte per gli item (versione 2)
│       └── stato.routes.js     # Rotte per lo stato (versione 2)
├── tests/                      # Test suite
├── utils/                      # Funzioni utility
└── index.js                    # Entry point dell'applicazione
```

## 🔒 Endpoint di Esempio

### API v1

- `GET /api/v1/stato`: Verifica stato server
- `GET /api/v1/items`: Lista items
- `POST /api/v1/items`: Crea nuovo item

### API v2

- `GET /api/v2/stato`: Stato server (versione 2)
- `GET /api/v2/items`: Lista items (versione 2)
- `POST /api/v2/items`: Crea item (versione 2)

## 🧪 Testing

Utilizziamo Jest per i testing. Aggiungi i tuoi test in `tests/`.

```bash
npm test
```

## 🔍 Best Practices Implementate

- Versionamento API
- Gestione centralizzata errori
- Logging strutturato
- Validazione input
- Configurazioni ambiente separate

## 🚀 Guida per Contribuire

1. Fork del repository
2. Crea branch feature (`git checkout -b feature/nuova-feature`)
3. Committa modifiche (`git commit -m 'Aggiungi nuova feature'`)
4. Pusha branch (`git push origin feature/nuova-feature`)
5. Apri Pull Request

## 🔒 Sicurezza

- Helmet per headers HTTP
- CORS configurabile
- Variabili sensibili in `.env`

## 📦 Dipendenze Principali

- `express`: Framework web
- `mongoose`: ODM MongoDB
- `winston`: Logging
- `dotenv`: Gestione ambiente
- `helmet`: Sicurezza headers
- `cors`: Gestione CORS

## 📄 Licenza

[MIT License] (https://github.com/UbyXsofT/node-api-template2?tab=MIT-1-ov-file)

## 🤝 Contributi

Contributi sono benvenuti! Leggi le linee guida prima di iniziare.

## 📞 Supporto

Per domande o problemi, [apri un'issue](https://github.com/UbyXsofT/node-api-template2/issues) o contatta info@ubyxsoft.com.

---

**🌟 Buon Coding!**
