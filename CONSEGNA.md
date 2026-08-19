# 🧑‍💻 English Teacher Landing Page
## Technical Guide

Benvenuta nel progetto Pauly!

Questo documento ti accompagnerà passo dopo passo nello sviluppo della landing page.

L'obiettivo è permetterti di lavorare sul progetto in autonomia, anche se è passato un po' di tempo dall'ultima volta che hai utilizzato Git, React o Vite.

Non è necessario ricordare tutto a memoria.

Segui gli step nell'ordine indicato e procedi con calma.

---

# 1. Prima di iniziare

Il progetto utilizza:

- React
- Vite
- JavaScript
- CSS
- React Icons
- Git
- GitHub
- npm

Prima di iniziare assicurati di avere installati:

- Node.js
- Git
- Visual Studio Code

Per verificare che Node.js sia installato e aggiornato apri un terminale e scrivi:

```bash
node -v dovrà risultare questa versione di NODE=
Node.js 22.x LTS
npm 10.x o superiore SE NON HAI QUESTA SCARICA LA NUOVA VERSIONE DIRETTAMENTE DAL SITO DI NODE, FALLO PASSO PASSO CON CHAT GPT.



Per verificare Git:

git --version

Se entrambi i comandi restituiscono una versione, puoi procedere.

2. Clonare il repository

Il progetto è ospitato su GitHub.

Per iniziare devi clonare il repository sul tuo computer.

Apri VS Code.

Apri il terminale integrato:

Terminale → Nuovo terminale

Spostati nella cartella nella quale vuoi salvare il progetto.

Esegui:

git clone URL_DEL_REPOSITORY

Sostituisci URL_DEL_REPOSITORY con il link GitHub ricevuto.

Esempio:

git clone https://github.com/USERNAME/english-teacher-landing.git

Dopo il clone entra nella cartella:

cd english-teacher-landing

3. Aprire il progetto in VS Code

Se hai già aperto VS Code puoi utilizzare:

File → Apri cartella

e selezionare:

english-teacher-landing

In alternativa, dal terminale puoi utilizzare:

code .

Se il comando code . non funziona, apri semplicemente la cartella da VS Code.

4. Controllare la struttura

Nell'Explorer di VS Code dovresti vedere una struttura simile:

english-teacher-landing
│
├── public
│   └── images
│
├── src
│   ├── components
│   ├── data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

Non modificare o cancellare file di configurazione se non è necessario.

5. Installare le dipendenze

Il repository contiene package.json, ma le dipendenze devono essere installate sul tuo computer.

Dal terminale, assicurati di essere dentro:

english-teacher-landing

Poi esegui:

npm install

Attendi che l'installazione termini.

Se non compaiono errori bloccanti, puoi procedere.

6. Avviare il progetto

Ora possiamo avviare il server di sviluppo.

Esegui:

npm run dev

Nel terminale comparirà un indirizzo simile a:

http://localhost:5173/

Apri l'indirizzo nel browser.

La pagina verrà aggiornata automaticamente mentre lavori.

7. Fermare il server

Quando vuoi fermare il server di sviluppo:

Ctrl + C

Per riavviarlo:

npm run dev


8. Prima di modificare il codice

Prima di iniziare a costruire la landing LEGGI ATTENTAMENTE IL READ ME E LA CONSEGNA POI 

apri il progetto;
avvia npm run dev;
guarda cosa è già presente;
esplora le cartelle;
controlla App.jsx;
controlla i componenti presenti;
controlla index.css;
controlla package.json.

L'obiettivo è capire la struttura prima di modificarla.


9. Organizzazione dei componenti

La landing deve essere suddivisa in componenti.

Una possibile struttura è:

src/
│
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Method.jsx
│   ├── Services.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   └── Contact.jsx
│
├── data/
│   └── content.js
│
├── App.jsx
├── main.jsx
└── index.css

Ogni componente dovrebbe avere una responsabilità precisa.

Per esempio:

Hero.jsx

gestisce la Hero.

Pricing.jsx

gestisce la sezione prezzi.

FAQ.jsx

gestisce le domande frequenti.

Contact.jsx

gestisce la sezione contatti.

Evita di inserire tutta la landing dentro App.jsx.

10. Inserimento delle immagini

Le immagini statiche devono essere inserite nella cartella, OLTRE ALLA FOTO DELLA CLIENTE PUOI INSERIRE ALTRE IMMAGINI UTILI 

public/images/

Esempio:

public/
└── images/
    ├── teacher.jpg
    └── ...

Nel componente puoi richiamarle utilizzando:

<img
  src="/images/teacher.jpg"
  alt="Descrizione della fotografia"
/>

Ricorda di utilizzare sempre un alt descrittivo.

11. Contenuti

I contenuti principali possono essere organizzati nella cartella:

src/data/

Per esempio:

src/data/content.js

Questo permette di separare il contenuto dalla struttura dei componenti.

Esempio:

export const content = {
  hero: {
    title: "...",
    subtitle: "...",
    cta: "...",
  },


  about: {
    title: "...",
    text: "...",
  },
};

Il contenuto fornito dalla cliente deve essere utilizzato come base della landing.

Può essere riorganizzato per la lettura sul web, mantenendo il significato originale.

12. Sviluppare una sezione alla volta

Non modificare tutta la landing contemporaneamente.

Procedere per sezioni.

Ordine consigliato:

Header
Hero
About
Method
Services
Pricing
FAQ
Contact
Responsive
Rifiniture finali

Dopo ogni sezione:

salva;
guarda il browser;
controlla il layout;
controlla la console;
correggi eventuali problemi;
passa alla sezione successiva.
13. Controllare la console

Durante lo sviluppo controlla anche la console del browser.

Apri gli strumenti sviluppatore:

F12

oppure:

Ctrl + Shift + I

Controlla la scheda:

Console

Se compaiono errori rossi, cerca di risolverli prima di continuare.

14. Git: capire dove siamo

Git serve a tenere traccia delle modifiche.

Per vedere lo stato del progetto:

git status

Questo comando è molto importante.

Usalo spesso.

15. Creare il branch di lavoro

Non lavorare direttamente sul branch principale.

Crea un branch dedicato:

git checkout -b feature/landing-page

Dopo averlo creato puoi verificare il branch corrente:

git branch

Il branch attivo sarà indicato con:

*
16. Lavorare e salvare le modifiche

Dopo aver modificato il codice:

git status

Git mostrerà i file modificati.

Esempio:

modified: src/components/Hero.jsx
modified: src/index.css

Questo significa che Git ha rilevato le modifiche.

17. Creare un commit

Quando hai completato una parte significativa del lavoro:

git add .

Poi:

git commit -m "feat: add hero section"

Il messaggio del commit deve spiegare cosa hai fatto.

Esempi VA BENE ANCHE IN ITALIANO:

feat: create landing page structure
feat: add hero section
feat: add about section
feat: add method section
feat: add services section
feat: add pricing section
feat: add faq section
feat: add contact section
style: improve responsive layout
style: refine typography
fix: correct mobile layout
fix: correct contact links

Evita messaggi generici come:

update
changes
test
prova
fix


18. Regola importante sui commit

Un commit dovrebbe rappresentare un blocco di lavoro comprensibile.

Per esempio:

Hai completato la Hero.

Fai:

git add .
git commit -m "feat: add hero section"

Poi lavori sulla sezione About.

Quando è pronta:

git add .
git commit -m "feat: add about section"

In questo modo la cronologia del progetto rimane leggibile.

19. Push su GitHub

Dopo aver creato i commit puoi inviare il branch su GitHub.

Il primo push del branch sarà:

git push -u origin feature/landing-page

Dopo questo primo comando, per i push successivi sarà sufficiente:

git push
20. Non modificare il branch principale

Il branch principale deve rimanere stabile.

Il lavoro quotidiano deve essere svolto nel branch:

feature/landing-page

Eventuali modifiche successive potranno essere gestite attraverso GitHub.

21. Responsive

La landing deve essere controllata durante tutto lo sviluppo.

Non aspettare la fine del progetto per verificare il mobile.

Controllare almeno:

desktop;
tablet;
smartphone.

Nel browser puoi utilizzare gli strumenti sviluppatore per simulare diverse dimensioni dello schermo.

Controllare soprattutto:

Hero;
menu;
titoli;
immagini;
prezzi;
pulsanti;
FAQ;
contatti;
spaziature.

22. Link e CTA

Ogni link deve essere verificato.

Controllare:

navigazione interna;
WhatsApp;
email;
CTA;
eventuali anchor link.

Per WhatsApp utilizzare un link diretto alla conversazione.

Per l'email utilizzare:

mailto:indirizzo-email
23. Prima della consegna

Prima di considerare concluso il lavoro:

npm run build

La build deve terminare correttamente.

Poi eseguire nuovamente:

npm run dev

e fare un controllo finale nel browser.

24. Checklist tecnica

Prima della consegna verificare:

 npm install funziona
 npm run dev funziona
 La landing si apre correttamente
 Non ci sono errori nella console
 Tutti i componenti funzionano
 Tutte le immagini vengono visualizzate
 Tutti i link funzionano
 WhatsApp funziona
 Email funziona
 Le FAQ funzionano
 Le CTA funzionano
 Il layout desktop è corretto
 Il layout tablet è corretto
 Il layout mobile è corretto
 Non sono presenti testi placeholder
 npm run build termina correttamente
 Le modifiche sono state committate
 Il branch è stato pushato su GitHub
25. Se qualcosa non funziona

Prima di modificare molte cose contemporaneamente:

leggi l'errore;
controlla la console;
controlla il terminale;
controlla il file indicato dall'errore;
verifica l'ultima modifica effettuata;
prova a correggere una cosa alla volta.

Evita di cancellare parti del progetto per tentativi.

Se una modifica rompe qualcosa, puoi utilizzare Git per capire cosa è cambiato.

Controlla:

git status

e:

git log --oneline
26. Regola fondamentale

Il progetto deve rimanere semplice, ordinato e comprensibile.

Prima di aggiungere una nuova libreria o una soluzione complessa, verificare se il problema può essere risolto con ciò che è già presente nel progetto.

Non è necessario complicare il progetto per ottenere un buon risultato.

La priorità è:

funzionalità → chiarezza → responsive → qualità visiva → rifinitura

27. Obiettivo del lavoro

La landing deve permettere al visitatore di capire rapidamente:

chi è l'insegnante

↓

cosa offre

↓

come funziona il metodo

↓

per chi sono le lezioni

↓

quanto costano

↓

come iniziare

↓

come contattarla

La destinazione finale del percorso deve essere il contatto diretto attraverso:

primo incontro gratuito;
WhatsApp;
email.
28. Ultimo controllo prima del push

Prima di inviare il lavoro:

git status

Controlla che tutte le modifiche importanti siano state salvate.

Poi:

git add .
git commit -m "feat: complete landing page"

Infine:

git push

Il branch aggiornato sarà disponibile su GitHub per la revisione.

🌱 Ricorda

Non è necessario ricordare tutti i comandi.

Il workflow fondamentale è:

CLONA
  ↓
npm install
  ↓
npm run dev
  ↓
SVILUPPA
  ↓
git status
  ↓
git add .
  ↓
git commit
  ↓
git push

Lavora una sezione alla volta, controlla quello che fai e salva spesso il lavoro scrivimi per qualsiasi cosa!

Buon lavoro! 🚀