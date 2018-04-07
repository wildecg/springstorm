var springstorm = {
"mancanza di magia":{
	"concept": "Battaglia per fonti di magia",
	"system" : "Protezione delle proprie fonti, ricerca e conquista delle fonti avversarie",
	"mechanics": "Carte fonte di energia nascoste fra varie carte coperte. Con 1 mossa vai a scoprire 1 carta avversaria. Se è un'energia, la rubi. Se è una trappola, te la becchi. Negli altri casi viene scambiata segretamente con 1 altra carta coperta.<br>Per poter usare le tue carte ne scopri una, e la usi. Se è <u>una energia, resta scoperta (ed è suscettibile ad attacchi nemici), ma finché resta scoperta in campo ti fornisce energia in modo continuativo.</u>"},
"collezionare parti del corpo":{
	"concept": "Dei \"mostri di Frankenstein\" lottano per ottenere parti del corpo da unire ai loro corpi",
	"system" : "Assemblare mostri con le carte, sconfiggere i mostri avversari per rubare loro dei pezzi",
	"mechanics": "Puoi giocare le carte sui tuoi mostri. 1 carta evoca 1 parte del corpo, che puoi attacare dove vuoi sul mostro bersaglio. <u>Graficamente, quado giochi 1 carta poi non la vedi più. Resta solo il modello modulare del mostro</u>.<br>I mostri combattono in modo semi-automatico (<u>controlli il \"boss\", uno solo fra i tuoi. Gli altri agiscono in modo automatico</u> con una A.I.). Quando fai fuori un mostro, o se riesci in un \"assalto\", gli strappi via un pezzo, che aggiungi subito ad uno dei tuoi."},
"virus":{
	"concept": "Da piccoli cambiamenti derivano grosse conseguenze",
	"system" : "Modifica/crea virus da inoculare nelle tue truppe o sui nemici. Osserva i cambiamenti indiretti e incrementali prodotti dalle inoculazioni. Prendi decisioni, modifica il \"cockctail\" in tempo e diffondi nuovi virus prima che gli effetti negativi dei primi prendano il sopravvento",
	"mechanics": "<dl><dt><u>Controllo Indiretto</u></dt><dd>In tempo reale o pseudo-reale (e.g. turni con tempo limitato) puoi modificare 1 virus o crearne 1 nuovo.<br>La creazione è astratta, e fatta con qualche sistema graficamente carino.<br>Le parti che usi nel tuo virus hanno diversi effetti e diversa potenza. Di solito, ogni parte codifica per 1 effetto (o parte di 1 effetto) positivo, che ha la sua curva di andatura nel tempo (e.g. prima dà molti vantaggi, poi si riducono nel tempo), ma ha anche un effetto negativo o potenzialmente negativo, anch'esso con la sua curva di efficacia (e.g. 1 debolezza che cresce e diventa sempre più grande).<br>Parti diverse combinate possono avere effetti nuovi, inaspettati, combinati, sinergici o contrastanti. Di solito non si conosce l'effetto di 1 componente finché non si usa e si vede in azione: ne scopri l'effetto in modo diretto, in stile sistema di Alchemy in Skyrim, o in modo indiretto, osservando gli effetti globali e deducendo chi ha prodotto cosa.<br>Puoi diffondere il virus su tutte le tue truppe o solo alcune o sugli avversari (direttamente, lanciando bio-bombe localizzate, armando con il virus le armi delle tue truppe, etc.)<br>Nel tempo, i virus fanno effetto, con conseguenti modifiche grafiche delle unità, dei terreni, dello scenario, magari generate in modo automatico dal computer secondo qualche algoritmo. Devi cogliere in tempo gli effetti dei virus e prevedere gli svantaggi a breve termine, e agire in fretta preparando dei virus \"antidoti\" che contrastino gli effetti estremi negativi dei tuoi virus precedenti, o preparando virus migliorati. Il gioco fa sì che tu acceda alle versioni migliorate ogni volta che fai uso di qualche componente.</dd><dt><u>Controllo Diretto</u></dt><dd>Si può aggiungere del controllo diretto al gioco, rendendolo più complesso. Un gioco dove puoi \"cambiare la visuale\" e passare a gestire 1 altro ambito della battaglia (e.g. sei soddisfatto con i tuoi virus, che avranno un effetto che si svilupperà nel corso dei prossimi 7 turni, quindi \"switchi\" dal \"turno da scienziato\" al \"turno da guerriero\", e passi a giocare controllando le tue unità in battaglia in modo diretto. Graficamente, questo è riflesso in un cambio di GUI, da qualcosa tipo un pannello che simula un tavolo da laboratorio, a una visuale più affine ad un gioco di guerra.</dd></dl>",
	"starred": 1},
"scacco matto":{
	"concept": "Spingere il nemico ad arrendersi",
	"system": "In palio, nella partita vi sono dei punti (che ognuno mette a disposizione dai propri). Lo stato della partita determina l'ago di 1 bilancia che pende più da 1 parte piuttosto che dall'altra, determinando quanti punti si prenderebbe ciascun giocatore nel caso in cui la partita finisse in quel preciso momento. Il gioco è fatto in modo da generare situazioni di pericolo (\"scacco al re\") in vari ambiti: situazioni in cui 1 giocatore sta avendo la meglio sull'altro, e l'altro (quello che sta \"subendo\" lo scacco, quello che è \"in a pinch\") è messo sempre di fronte alla scelta: \"Mi arrendo, o continuo a giocare, pur sapendo che in questa situazione, se faccio la mossa sbagliata, perdo un sacco di punti? (Mentre se riesco a fare la cosa giusta posso uscirne indenne, o addirittura ribaltare)\"",
	"mechanics": "Varie situazioni di \"<u>pinch</u>\" possibili. Ex:<br/>Ottieni la maggioranza in campo, con un distacco di almeno 2 unità -> Pinch! Se l'avversario non riesce a rompere questa situazione nei prossimi 2 turni, l'ago della bilancia si sposta di 3 tacche in tuo favore. (Analoghe cose si possono fare con maggioranza di carte in mano, risorse, posizioni, carte particolari, avanzamenti teconologici, etc.).<br/>Un pinch speciale è il \"Final Pinch\": attivato quando la lancetta è quasi tutta verso un giocatore. Questo pinch è: \"o l'avversario riesce a spostare la lancetta, oppure la lancetta finisce di spostarsi del tutto, e la partita termina. Quel giocatore perde tutti i punti che aveva scommesso (scenario peggiore. Doveva arrendersi prima!)\"."
	},
"cambiare gli obiettivi":{
	"concept": "In base a condizioni esterne (random) o globali/dipendenti dalle scelte combinate dei 2 giocatori, i fattori determinanti per la vittoria cambiano. (Fattori quali: politica, raccolta risorse, andare in guerra, etc)",
	"system": "Gioco in cui l'obiettivo per la vittoria muta nel corso della partita, in base a se accadono certe cose. Dunque i giocatori hanno la possibilità di agire direttamente per cercare di massimizzare l'obiettivo del momento (o il modo più favorevole al momento di fare punti), o indirettamente, per cercare di cambiare \"il gioco\", ovvero cambiare i modi in cui si vince o in cui si guadagna il vantaggio.",
	"mechanics": "Modalità di vittoria: <dl><dt>Annientamento</dt><dd>Distruggi tutto ciò che c'è sul campo</dd><dt>Desertificazione</dt><dd>Mantieni almeno 2 turni di seguito in cui l'avversario non ha nulla in campo e non riesce a giocare nulla</dd><dt>Supremazia</dt><dd>Mantieni 3 turni di seguito la maggioranza di carte in campo</dd><dt>Punti - \"Classifica blood\"</dt><dd>Si vince a punti. Alcune cose danno punti, e ciò che dà più punti sono gli achievement più simili all'annientamento.<br/>Ex: uccidi 1 unità -> guadagni punti pari al suo livello.<br/>Ottieni la maggioranza in campo -> 5 punti.<br/>L'avversario non gioca niente -> 1 punto.</dd><dt>Punti - \"Classifica mista\"</dt><dd>Set di condizioni tramite cui fare punti che favorisce strategie miste.<br/>Ex: Uccidi 1 unità -> 1 punto.<br/>Giochi 2 cose in 1 turno -> 1 punto.<br/>Ottieni la maggioranza -> 1 punto.<br/>Hai più carte in mano dell'avversario -> 1 punto.</dd><dt>Punti - \"Classifica politics\"</dt><dd>Favorisce il gioco strategico.<br/>Ex: ottieni 1 buona posizione con le truppe -> 3 punti.<br/>Cambia tipologia di turno (ex: switch da \"controllo truppe\" a \"sintesi di virus\") -> 2 punti.<br/>Ottieni 1 risorsa -> 2 punti.<br/>Fai 1 baratto favorevole col nemico -> 4 punti</dd><dt>Flooding</dt><dd>Vinci se superi 1 tot di carte in campo + risorse.</dd><dt>Cooperativo</dt><dd>Compaiono creature ostili controllate da A.I.. Tu e l'avversario vi alleate per sconfiggerle assieme. Potete vincere entrambi o perdere entrambi.</dd><dt>Terzo incomodo (o Jungle)</dt><dd>Compaiono creature ostili. Tu e l'avversario competete per chi ne fa fuori di più.</dd></dl>Eccetera.<br/>Queste modalità possono cambiare. Stanno in qualche relazione topologica di vicinanza tra loro (ex: stanno in 1 ruota, con gli spicchi vicini corrispondenti a condizioni simili) e cambiano quando vengono raggiunte certe condizioni globali, che sono funzione dello stato di gioco, e quindi dipendono da entrambi i giocatori.<br/>Queste <u>condizioni di vittoria potrebbero essere editabili</u> (si può fare i crafting, come si fa per le carte.)",
	"starred": 1}
}
