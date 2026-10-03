const FILM_DB = [
  // ═══════════════════════════════════════
  // DISNEY
  // ═══════════════════════════════════════
  {
    titolo: "Il Re Leone",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Hakuna Nachos", desc: "Nachos stratificati con cheddar fuso, guacamole, jalapeños, panna acida e chili con carne. Senza pensieri, senza problemi." },
      primo: { nome: "La Savana nel Panino", desc: "Smash burger triplo con bacon croccante, onion rings, salsa BBQ affumicata e formaggio colante. Il cerchio della vita in un bun." },
      dolce: { nome: "Il Tramonto di Mufasa", desc: "Cheesecake al mango e passion fruit con coulis di lamponi rossi e scaglie d'oro commestibili. Maestoso come Pride Rock." }
    }
  },
  {
    titolo: "Frozen",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Fiocchi di Neve Fritti", desc: "Mozzarella in carrozza a forma di fiocco di neve, fritta due volte e servita con salsa rosa piccante." },
      primo: { nome: "Il Pupazzo di Neve che si Scioglie", desc: "Mac & cheese al forno con fontina e gorgonzola, crosta di pangrattato dorata. Si scioglie in bocca come Olaf al sole." },
      dolce: { nome: "Let It Gelato", desc: "Coppa gelato tripla: cocco, mirtillo e vaniglia con panna montata, meringhe sbriciolate e glassa azzurra." }
    }
  },
  {
    titolo: "Aladdin",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Tappeto Volante di Falafel", desc: "Falafel croccanti su piadina dorata con hummus, tahina, pomodorini e salsa harissa." },
      primo: { nome: "I 3 Desideri del Genio", desc: "Tre mini burger: uno al pulled lamb con menta, uno al pollo tandoori, uno al manzo con datteri e formaggio blu." },
      dolce: { nome: "La Lampada Magica", desc: "Profiterole ripieno di crema al pistacchio, glassato oro e fumante di zucchero filato." }
    }
  },
  {
    titolo: "Ratatouille",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Il Critico Rimane Senza Parole", desc: "Bruschette triple: nduja e burrata, lardo di colonnata e fichi, gorgonzola e noci caramellate." },
      primo: { nome: "Ratatouille dello Sgarro", desc: "Ratatouille di verdure gratinate con cascata di scamorza affumicata fusa e olio al tartufo." },
      dolce: { nome: "Ricordo d'Infanzia", desc: "Crêpe Suzette con Nutella, banana caramellata, gelato alla vaniglia e granella di nocciole." }
    }
  },
  {
    titolo: "La Sirenetta",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Tesori del Fondale", desc: "Frittura mista di calamari, gamberi e zucchine con maionese allo zafferano e limone." },
      primo: { nome: "Sotto il Mare Burger", desc: "Fish burger con filetto di merluzzo in tempura, coleslaw, salsa tartara e cheddar fuso." },
      dolce: { nome: "La Perla di Ariel", desc: "Sfera di cioccolato bianco ripiena di mousse ai frutti di bosco, che si apre con salsa calda al cioccolato fondente." }
    }
  },
  {
    titolo: "Coco",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Offrenda dei Morti", desc: "Quesadillas ripiene di pulled pork, peperoni arrosto, formaggio Oaxaca fuso e salsa verde tomatillo." },
      primo: { nome: "La Chitarra di Miguel", desc: "Tacos al pastor con ananas grigliato, cipolla rossa, coriandolo, crema di avocado e habanero." },
      dolce: { nome: "Pan de Muerto Supremo", desc: "Pan de muerto farcito con crema pasticcera al dulce de leche, glassato con cioccolato messicano e cannella." }
    }
  },
  {
    titolo: "Toy Story",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Verso l'Infinito e Oltre Wings", desc: "Alette di pollo fritte con glassa BBQ-miele piccante, servite con salsa blue cheese." },
      primo: { nome: "Woody's Loaded Hotdog", desc: "Hot dog da cowboy: wurstel avvolto in bacon, chili, cheddar fuso, cipolla fritta e jalapeños." },
      dolce: { nome: "La Pizza di Pizza Planet", desc: "Pizza dolce: base di pasta frolla, Nutella, marshmallow tostati, fragole e zucchero a velo." }
    }
  },
  {
    titolo: "Gli Incredibili",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Super Mozzarella Sticks", desc: "Bastoncini di mozzarella giganti impanati nel panko, fritti e serviti con salsa marinara piccante." },
      primo: { nome: "Il Pugno di Mr. Incredible", desc: "Burrito XXL con carne asada, riso, fagioli neri, panna acida, guacamole e tre formaggi fusi." },
      dolce: { nome: "Elastigirl Churros", desc: "Churros lunghissimi ripieni di dulce de leche, ricoperti di cioccolato fondente e zucchero alla cannella." }
    }
  },
  {
    titolo: "Rapunzel",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Le Lanterne Dorate", desc: "Arancini allo zafferano ripieni di ragù e mozzarella filante, serviti con crema di zucca." },
      primo: { nome: "Lo Stufato del Cavallo Smash", desc: "Smash burger doppio con cipolla caramellata, formaggio raclette fuso, rucola e salsa al tartufo." },
      dolce: { nome: "La Treccia di Rapunzel", desc: "Treccia di brioche farcita con crema al pistacchio e gocce di cioccolato, glassata al miele." }
    }
  },
  {
    titolo: "Moana",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Il Cuore di Te Fiti", desc: "Poké bowl con tonno crudo, avocado, mango, edamame, salsa ponzu e maionese sriracha." },
      primo: { nome: "Il Granchio Tamatoa", desc: "Aragosta alla griglia con burro all'aglio, patate fritte e coleslaw cremoso." },
      dolce: { nome: "L'Onda di Cocco", desc: "Torta al cocco con crema di lime, ananas caramellato e meringata italiana tostata." }
    }
  },
  {
    titolo: "Lilo & Stitch",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Experiment 626 Bites", desc: "Popcorn chicken speziati con salsa teriyaki e maionese wasabi. Distruttivi come Stitch." },
      primo: { nome: "Hawaiian Smash Burger", desc: "Burger con ananas grigliato, bacon affumicato, formaggio pepper jack e salsa teriyaki." },
      dolce: { nome: "Ohana Sundae", desc: "Sundae gigante con gelato al cocco, banana fritta, sciroppo al caramello, panna e macadamia tostati." }
    }
  },
  {
    titolo: "Mulan",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Involtini del Drago Mushu", desc: "Involtini primavera fritti ripieni di maiale, cavolo e funghi, con salsa agrodolce." },
      primo: { nome: "La Rivincita dell'Imperatore", desc: "Ramen con brodo tonkotsu, pancetta chashu, uovo marinato, pak choi e olio piccante." },
      dolce: { nome: "Il Fiore di Loto", desc: "Mochi ripieni di gelato al tè matcha, con salsa al cioccolato bianco e sesamo nero." }
    }
  },

  // ═══════════════════════════════════════
  // ROMANTICI
  // ═══════════════════════════════════════
  {
    titolo: "Titanic",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "L'Iceberg di Formaggi", desc: "Piatto di formaggi stratificati: brie fuso, gorgonzola, pecorino e miele, con crostini dorati. Affonda nel piacere." },
      primo: { nome: "Il Cuore dell'Oceano Burger", desc: "Burger con patty di manzo blue-rare, gorgonzola piccante, cipolle caramellate al vino rosso e rucola." },
      dolce: { nome: "Draw Me Like a French Crêpe", desc: "Crêpe al Grand Marnier con fragole, panna montata al mascarpone e scaglie di cioccolato fondente." }
    }
  },
  {
    titolo: "The Notebook",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "Lettere d'Amore Fritte", desc: "Ravioli fritti ripieni di ricotta e spinaci con fonduta di parmigiano e tartufo." },
      primo: { nome: "Il Bacio sotto la Pioggia", desc: "Pulled pork sandwich con coleslaw cremoso, salsa BBQ dolce e formaggio cheddar fuso che cola." },
      dolce: { nome: "365 Giorni di Dolcezza", desc: "Tiramisù con strati di mascarpone, Nutella, biscotti al cacao e caffè, spolverato di cacao amaro." }
    }
  },
  {
    titolo: "Pretty Woman",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "Rodeo Drive Bruschette", desc: "Bruschette di lusso: carpaccio di manzo con tartufo, burrata con prosciutto crudo, salmone con avocado." },
      primo: { nome: "La Collana di Diamanti", desc: "Risotto allo champagne con gamberi rossi, bottarga e foglia d'oro commestibile." },
      dolce: { nome: "Big Mistake... Huge Cake", desc: "Lava cake al cioccolato fondente con cuore di caramello salato, gelato alla vaniglia e fragole." }
    }
  },
  {
    titolo: "Ghost - Fantasma",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "Il Vasaio Innamorato", desc: "Fonduta di tre formaggi servita in ciotola di pane scavata con grissini e verdure crude." },
      primo: { nome: "Unchained Melted Cheese", desc: "Philly cheesesteak con manzo tagliato sottile, peperoni, cipolle e provolone fuso che non finisce mai." },
      dolce: { nome: "Ditto Dolce", desc: "Panna cotta al caramello con crumble di biscotti speculoos e panna montata." }
    }
  },
  {
    titolo: "Dirty Dancing",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "Nobody Puts Baby in a Corner Nachos", desc: "Nachos supremi con guacamole, salsa di fagioli, jalapeños, panna acida e cheddar liquido." },
      primo: { nome: "Il Sollevamento Finale", desc: "Torre di onion rings giganti con burger smash tra ogni anello, cheddar fuso e salsa segreta." },
      dolce: { nome: "Ho Portato un'Anguria", desc: "Anguria svuotata riempita di gelato alla fragola, panna, cioccolato bianco e meringhe." }
    }
  },
  {
    titolo: "Notting Hill",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "Sono Solo una Ragazza... che Mangia", desc: "Fish & chips mignon con maionese al limone e aceto di malto." },
      primo: { nome: "Il Giardino Privato Burger", desc: "Burger con brie fuso, bacon croccante, marmellata di cipolle rosse e rucola su brioche." },
      dolce: { nome: "Brownie da Libreria", desc: "Brownie triplo cioccolato con cuore fondente, gelato al caramello salato e noci pecan." }
    }
  },
  {
    titolo: "Colpa delle Stelle",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "Infinito tra Due Panini", desc: "Mini panini olandesi: uno con salmone e cream cheese, uno con gouda fuso e senape." },
      primo: { nome: "Okay? Okay Mac & Cheese", desc: "Mac & cheese con aragosta, tartufo nero e pangrattato al burro dorato." },
      dolce: { nome: "La Stella che Brilla", desc: "Stella di pasta sfoglia ripiena di Nutella, con gelato stracciatella e salsa ai lamponi." }
    }
  },
  {
    titolo: "P.S. I Love You",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "Lettere dall'Irlanda", desc: "Patate hasselback con burro, erba cipollina, cheddar e bacon sbriciolato." },
      primo: { nome: "Irish Stew dello Sgarro", desc: "Shepherd's pie con ragù di agnello, purè gratinato con tre formaggi e birra scura." },
      dolce: { nome: "P.S. Ti Amo Dolce", desc: "Trifle al whiskey irlandese con crema, frutti di bosco, pan di Spagna e cioccolato." }
    }
  },
  {
    titolo: "A Star Is Born",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "Shallow Wings", desc: "Ali di pollo Nashville hot con salsa ranch al gorgonzola e sedano croccante." },
      primo: { nome: "Il Palco Principale", desc: "Costine BBQ glassate al bourbon con pannocchia grigliata al burro e coleslaw." },
      dolce: { nome: "Standing Ovation Sundae", desc: "Sundae con brownie caldo, gelato al burro d'arachidi, banana, cioccolato fondente e panna." }
    }
  },
  {
    titolo: "Romeo + Giulietta",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "Il Ballo in Maschera", desc: "Crostini veneziani: fegatini, baccalà mantecato e sarde in saor su pane croccante." },
      primo: { nome: "Veleno Dolce", desc: "Pasta alla carbonara con tuorlo extra, guanciale croccantissimo, pecorino e pepe nero. Mortale." },
      dolce: { nome: "Il Balcone dei Sospiri", desc: "Cannoli siciliani con crema di ricotta, gocce di cioccolato, pistacchio e scorza d'arancia candita." }
    }
  },

  // ═══════════════════════════════════════
  // THRILLER
  // ═══════════════════════════════════════
  {
    titolo: "Shutter Island",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "L'Isola dei Fritti", desc: "Assortimento di fritti: olive ascolane, crocchette di patate, fiori di zucca e mozzarelline. Non puoi fidarti di nessuno, ma di questi sì." },
      primo: { nome: "Il Paziente 67", desc: "Burger nero (pane al carbone) con pulled pork, coleslaw rosso e salsa chipotle. Ti farà impazzire." },
      dolce: { nome: "La Verità Nascosta", desc: "Sfera di cioccolato fondente che nasconde un cuore di mousse al lampone. Niente è come sembra." }
    }
  },
  {
    titolo: "Se7en",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "I 7 Peccati Capitali", desc: "7 mini bruschette diverse: lardo, nduja, gorgonzola, mortadella, salmone, foie gras, tartare." },
      primo: { nome: "What's in the Box?!", desc: "Box di fried chicken con waffle, sciroppo d'acero, burro e salsa piccante. Non aprirla... o forse sì." },
      dolce: { nome: "Gola", desc: "Torta a 7 strati di cioccolato con ganache, caramello, nocciole e panna. Il peccato più dolce." }
    }
  },
  {
    titolo: "Inception",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "Sogno nel Sogno", desc: "Cipolla fritta a strati infiniti con fonduta al parmigiano. Ogni strato ti porta più in profondo." },
      primo: { nome: "Il Totem", desc: "Trottola di pasta ripiena: tortellini fritti ripieni di ossobuco, serviti su crema di zucca." },
      dolce: { nome: "Limbo Dolce", desc: "Millefoglie infinita con crema chantilly, fragole e caramello. Non vorrai più tornare alla realtà." }
    }
  },
  {
    titolo: "Gone Girl",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "La Moglie Perfetta", desc: "Tartare di tonno con avocado, salsa ponzu e chips di wonton croccanti. Perfetta fuori, letale dentro." },
      primo: { nome: "Diario di Bugie", desc: "Lasagna con strati segreti: ragù, besciamella, salsiccia e provola affumicata." },
      dolce: { nome: "Amazing Amy Cake", desc: "Red velvet cake con frosting al cream cheese, frutti rossi e glassa al cioccolato bianco." }
    }
  },
  {
    titolo: "Il Sesto Senso",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "Vedo i Fritti", desc: "Zucchine, melanzane e peperoni in pastella leggera, fritti e serviti con aioli all'aglio." },
      primo: { nome: "Il Colpo di Scena", desc: "Calzone ripieno di quattro formaggi, speck e funghi porcini. Il finale ti sorprenderà." },
      dolce: { nome: "Il Segreto di Bruce", desc: "Tiramisù al caffè con cuore nascosto di crema al pistacchio. Il finale ribalta tutto." }
    }
  },
  {
    titolo: "Zodiac",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "Il Codice Cifrato", desc: "Tagliere con salumi e formaggi disposti a simbolo zodiacale con miele, noci e mostarda." },
      primo: { nome: "L'Ossessione di Graysmith", desc: "Pizza deep-dish stile San Francisco: doppia mozzarella, salsiccia, funghi e salsa di pomodoro densa." },
      dolce: { nome: "Caso Irrisolto", desc: "Tortino al cioccolato dal cuore misterioso: fondente fuori, caramello salato dentro. Mai risolto, sempre divorato." }
    }
  },
  {
    titolo: "Prisoners",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "Nella Tana del Coniglio", desc: "Croquetas di prosciutto e formaggio con salsa al peperone rosso affumicato." },
      primo: { nome: "6 Ore di Cottura", desc: "Pulled beef cotto 6 ore nel bourbon, su pane di mais con pickles e cipolla croccante." },
      dolce: { nome: "La Ricerca Disperata", desc: "Bread pudding al cioccolato con salsa al whiskey, gelato alla vaniglia e noci pecan." }
    }
  },
  {
    titolo: "Memento",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "Non Ricordo l'Antipasto", desc: "Polpette di tre carni diverse con tre salse diverse. Ogni boccone è una sorpresa." },
      primo: { nome: "Tatuaggio Commestibile", desc: "Wrap nero con pollo fritto, bacon, avocado, salsa ranch e formaggio fuso. Indimenticabile." },
      dolce: { nome: "Il Polaroid", desc: "Cheesecake a quadrato perfetto con coulis di frutta che si sviluppa come una foto istantanea." }
    }
  },

  // ═══════════════════════════════════════
  // HORROR
  // ═══════════════════════════════════════
  {
    titolo: "IT",
    genere: "Horror",
    menu: {
      antipasto: { nome: "Palloncini Rossi di Arancini", desc: "Arancini rossi al pomodoro, tondi come palloncini, ripieni di ragù e mozzarella." },
      primo: { nome: "Il Pagliaccio Burger", desc: "Burger con salsa rossa piccante, formaggio fuso colante, bacon e cipolle fritte. Galleggerai anche tu." },
      dolce: { nome: "Georgie's Boat", desc: "Barchetta di pasta frolla ripiena di crema al cioccolato e fragole con velo di zucchero rosso." }
    }
  },
  {
    titolo: "The Conjuring",
    genere: "Horror",
    menu: {
      antipasto: { nome: "La Cantina Maledetta", desc: "Funghi ripieni di salsiccia e formaggio, gratinati e serviti su letto di crema di patate." },
      primo: { nome: "La Bambola Perversa", desc: "Costolette di maiale glassate al miele e soia con riso fritto all'uovo e verdure." },
      dolce: { nome: "L'Esorcismo del Cioccolato", desc: "Torta al cioccolato fondente con peperoncino, glassa nera e crema di lamponi. Posseduta dal sapore." }
    }
  },
  {
    titolo: "Scream",
    genere: "Horror",
    menu: {
      antipasto: { nome: "Che Film Horror Preferisci?", desc: "Assortimento di dip: guacamole, hummus al peperone, salsa di formaggio con nachos e crudités." },
      primo: { nome: "Ghostface Pizza", desc: "Pizza bianca a forma di maschera: stracchino, salsiccia, friarielli e olio piccante." },
      dolce: { nome: "L'Ultima Telefonata", desc: "Cornetti alla crema di nocciola e cioccolato bianco, serviti caldi con zucchero a velo." }
    }
  },
  {
    titolo: "L'Esorcista",
    genere: "Horror",
    menu: {
      antipasto: { nome: "Teste Girevoli di Polpette", desc: "Polpettine di carne su spiedini con salsa verde piccante e crema di peperoni." },
      primo: { nome: "Il Potere di Cristo ti Sfama", desc: "Rigatoni alla gricia con guanciale croccante, pecorino romano e pepe nero. Diabolicamente buoni." },
      dolce: { nome: "Possessione Dolce", desc: "Profiterole al cioccolato con crema pasticcera, cioccolato fondente caldo e panna montata." }
    }
  },
  {
    titolo: "Hereditary",
    genere: "Horror",
    menu: {
      antipasto: { nome: "La Casa delle Miniature", desc: "Mini quiche assortite: lorraine, spinaci-ricotta e pomodoro-mozzarella." },
      primo: { nome: "L'Eredità Oscura", desc: "Costine BBQ in salsa dark (cola, soia, aglio nero) con purè affumicato e cipolla fritta." },
      dolce: { nome: "La Torta della Nonna Graham", desc: "Crostata con frolla al cacao, crema al cioccolato bianco e frutti di bosco." }
    }
  },
  {
    titolo: "A Quiet Place",
    genere: "Horror",
    menu: {
      antipasto: { nome: "Silenzio... Si Mangia", desc: "Carpaccio di polpo con patate tiepide, olive taggiasche e olio al prezzemolo. Mangia piano." },
      primo: { nome: "Non Fare Rumore", desc: "Gnocchi al forno con ragù bolognese e mozzarella di bufala. Così buoni che non parlerai." },
      dolce: { nome: "Il Sussurro Dolce", desc: "Soufflé al cioccolato caldo con cuore fondente. Soffice e silenzioso." }
    }
  },
  {
    titolo: "Get Out",
    genere: "Horror",
    menu: {
      antipasto: { nome: "Il Tè della Suocera", desc: "Bastoncini di formaggio impanati con salsa al cranberry e rosmarino fritto." },
      primo: { nome: "The Sunken Place Burger", desc: "Burger con pane nero, cheddar nero (carbone), bacon e salsa truffle. Ti porta in un altro posto." },
      dolce: { nome: "Scappa se Puoi", desc: "Fondant al cioccolato con gelato al tè matcha e biscotto al sesamo. Non riuscirai a smettere." }
    }
  },
  {
    titolo: "Saw - L'Enigmista",
    genere: "Horror",
    menu: {
      antipasto: { nome: "Vuoi Fare un Gioco?", desc: "Roulette di bruschette: 5 normali, 1 con habanero letale. Scegli saggiamente." },
      primo: { nome: "La Trappola Mortale", desc: "Burrito trappola: avvolto stretto con carne, fagioli, riso, formaggio, guacamole e jalapeños." },
      dolce: { nome: "Game Over", desc: "Torta al cioccolato con peperoncino Carolina Reaper e gelato alla vaniglia per spegnere il fuoco." }
    }
  },

  // ═══════════════════════════════════════
  // GIALLI
  // ═══════════════════════════════════════
  {
    titolo: "Knives Out",
    genere: "Giallo",
    menu: {
      antipasto: { nome: "La Ruota dei Sospetti", desc: "Tagliere circolare con formaggi, salumi, olive, sottaceti e mieli assortiti. Ognuno nasconde qualcosa." },
      primo: { nome: "Il Coltello nella Ciambella", desc: "Donut burger: patty di manzo in un donut glassato con bacon, cheddar e salsa BBQ." },
      dolce: { nome: "L'Indizio Finale", desc: "Torta decostruita: strati separati di pan di Spagna, crema e cioccolato. Ricomponi il mistero." }
    }
  },
  {
    titolo: "Il Nome della Rosa",
    genere: "Giallo",
    menu: {
      antipasto: { nome: "Il Manoscritto Proibito", desc: "Focaccia al rosmarino con lardo di Colonnata, miele di castagno e pepe nero." },
      primo: { nome: "Il Pasto dei Monaci", desc: "Ribollita toscana con cavolo nero, fagioli, pane raffermo e olio nuovo, servita con crostoni." },
      dolce: { nome: "La Rosa Avvelenata", desc: "Torta di mele con crema di rose, pistacchi e miele. Bella e pericolosa." }
    }
  },
  {
    titolo: "Assassinio sull'Orient Express",
    genere: "Giallo",
    menu: {
      antipasto: { nome: "Vagone Ristorante", desc: "Blini con salmone affumicato, crème fraîche e caviale. Eleganza su rotaia." },
      primo: { nome: "Il Sospetto di Poirot", desc: "Boeuf bourguignon con purè di patate al burro e tartufo. Un delitto di bontà." },
      dolce: { nome: "Dodici Sospetti, Un Dolce", desc: "Vassoio di 12 mignon diversi: éclairs, tartellette, macaron, mini tiramisù." }
    }
  },
  {
    titolo: "Mystic River",
    genere: "Giallo",
    menu: {
      antipasto: { nome: "Boston Clam Chowder", desc: "Zuppa cremosa di vongole con patate, bacon e pane a ciotola. Come a Boston." },
      primo: { nome: "Il Fiume dei Segreti", desc: "Lobster roll con mayo, limone, burro caldo e patatine fritte croccanti." },
      dolce: { nome: "Il Peso del Passato", desc: "Boston cream pie: pan di Spagna, crema pasticcera e glassa al cioccolato fondente." }
    }
  },
  {
    titolo: "Cluedo",
    genere: "Giallo",
    menu: {
      antipasto: { nome: "Nel Salone con il Candelabro", desc: "Fonduta di formaggio con pane, verdure e salumi da intingere." },
      primo: { nome: "Colonel Mustard's Curry", desc: "Pollo tikka masala con riso basmati, naan al burro e raita di cetriolo." },
      dolce: { nome: "Miss Scarlet Red Velvet", desc: "Red velvet cupcake gigante con frosting di cream cheese e lamponi freschi." }
    }
  },
  {
    titolo: "L'Uomo di Neve",
    genere: "Giallo",
    menu: {
      antipasto: { nome: "Salmone del Nord", desc: "Gravlax con senape dolce, pane croccante e insalata di patate nordica." },
      primo: { nome: "Polpette Scandinave", desc: "Polpette svedesi con salsa cremosa, purè di patate, mirtilli rossi e cetrioli." },
      dolce: { nome: "Il Pupazzo Gelato", desc: "Parfait ghiacciato alla vaniglia con salsa ai frutti di bosco caldi e crumble." }
    }
  },

  // ═══════════════════════════════════════
  // MENTE CRIMINALE
  // ═══════════════════════════════════════
  {
    titolo: "Il Silenzio degli Innocenti",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "Fave e Chianti", desc: "Bruschette con crema di fave, pecorino e un filo d'olio. Da gustare con un bel Chianti, ssss." },
      primo: { nome: "Il Pasto di Hannibal", desc: "Bistecca alla fiorentina con contorno di fave saltate, aglio e rosmarino. Di classe superiore." },
      dolce: { nome: "Quid Pro Quo", desc: "Dessert a doppio strato: panna cotta al caffè sotto e crema brûlée sopra. Uno scambio equo." }
    }
  },
  {
    titolo: "American Psycho",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "La Prenotazione al Dorsia", desc: "Tartare di manzo con tuorlo d'uovo, capperi, scalogno e toast al tartufo." },
      primo: { nome: "Il Biglietto da Visita", desc: "Wagyu burger con foie gras, cipolla caramellata al porto e brioche al burro. Lettera impressa a caldo." },
      dolce: { nome: "Morning Routine", desc: "Crème brûlée alla vaniglia del Madagascar con frutti esotici e tuile croccante." }
    }
  },
  {
    titolo: "Il Padrino",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "Un'Offerta che Non Puoi Rifiutare", desc: "Antipasto siciliano: caponata, arancini, panelle e crocchè. La famiglia offre." },
      primo: { nome: "Il Cannolo del Don", desc: "Pasta alla Norma con melanzane fritte, ricotta salata e basilico fresco. Lascia il fucile, prendi i cannoli." },
      dolce: { nome: "Prendi i Cannoli", desc: "Cannoli siciliani con ricotta freschissima, cioccolato, pistacchio e scorza d'arancia candita." }
    }
  },
  {
    titolo: "Mindhunter",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "L'Interrogatorio", desc: "Chicken wings marinate per 24 ore in salsa segreta, grigliate e servite con blue cheese." },
      primo: { nome: "Il Profilo del Killer", desc: "Steak sandwich con manzo al sangue, cipolla caramellata, rucola e salsa al pepe verde." },
      dolce: { nome: "La Mente Oscura", desc: "Torta al cioccolato fondente 85% con ganache, noci e sale Maldon. Nera come l'anima." }
    }
  },
  {
    titolo: "Joker",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "Perché Così Serio?", desc: "Smile fries: patatine fritte tagliate a sorriso con ketchup, mayo e salsa barbecue." },
      primo: { nome: "La Scalinata della Follia", desc: "Hot dog di Gotham: wurstel con crauti, senape, ketchup, cipolle fritte e relish." },
      dolce: { nome: "Non Capisci la Battuta?", desc: "Cotton candy gigante colorata di blu e verde con pop corn caramellati e M&M's." }
    }
  },
  {
    titolo: "Scarface",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "Benvenuto a Miami", desc: "Ceviche di gamberi con lime, cipolla rossa, avocado, coriandolo e chips di platano." },
      primo: { nome: "Say Hello to My Little Friend", desc: "Cuban sandwich supremo: maiale arrosto, prosciutto, formaggio svizzero, senape e cetrioli su pane cubano pressato." },
      dolce: { nome: "La Montagna Bianca", desc: "Mont blanc: meringata con crema di castagne, panna montata e zucchero a velo. Una montagna irresistibile." }
    }
  },
  {
    titolo: "Breaking Bad",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "I'm the One Who Knocks Wings", desc: "Alette di pollo fritte con glassa al peperoncino blu e ranch. 99.1% pure." },
      primo: { nome: "Los Pollos Hermanos", desc: "Pollo fritto croccante con purè, gravy, pannocchia al burro e biscuit. Il miglior pollo di Albuquerque." },
      dolce: { nome: "Blue Sky Candy", desc: "Zucchero filato blu con cristalli di zucchero, pop rocks e gelato alla menta." }
    }
  },
  {
    titolo: "Dexter",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "La Colazione di Dexter", desc: "Pancake stack con bacon, uova, sciroppo d'acero e frutta fresca. Come nella sigla." },
      primo: { nome: "Miami Metro Sub", desc: "Submarine sandwich con prosciutto, salame, capocollo, provolone, lattuga e olio d'oliva." },
      dolce: { nome: "Il Codice di Harry", desc: "Torta alle tre cioccolate (bianco, latte, fondente) con fragole e panna. Ha le sue regole." }
    }
  },

  // ═══════════════════════════════════════
  // ANIME
  // ═══════════════════════════════════════
  {
    titolo: "La Città Incantata",
    genere: "Anime",
    menu: {
      antipasto: { nome: "Il Banchetto dei Genitori", desc: "Gyoza fritti ripieni di maiale e verdure con salsa ponzu e olio di sesamo piccante." },
      primo: { nome: "La Polpetta di Riso di Haku", desc: "Onigiri giganti: uno al salmone teriyaki, uno all'umeboshi, uno al tonno mayo. Confortanti come l'abbraccio di Haku." },
      dolce: { nome: "La Torta di Senza Volto", desc: "Dorayaki gigante ripieno di crema di fagioli rossi, gelato al matcha e mochi." }
    }
  },
  {
    titolo: "Your Name",
    genere: "Anime",
    menu: {
      antipasto: { nome: "Il Filo Rosso del Destino", desc: "Sashimi misto (tonno, salmone, branzino) con salsa di soia, wasabi e zenzero. Legati dal gusto." },
      primo: { nome: "Ramen del Crepuscolo", desc: "Ramen miso con chashu pork, uovo marinato, mais, nori e cipollotto. Un tramonto in ciotola." },
      dolce: { nome: "La Cometa Dolce", desc: "Taiyaki (pesce waffle) ripieno di crema al cioccolato con gelato alla fragola e pocky." }
    }
  },
  {
    titolo: "L'Attacco dei Giganti",
    genere: "Anime",
    menu: {
      antipasto: { nome: "Le Mura del Gusto", desc: "Katsu di pollo tagliato a fette con salsa tonkatsu, riso e insalata di cavolo." },
      primo: { nome: "Il Pasto del Titano", desc: "Mega ramen tonkotsu con doppia porzione di chashu, uovo extra, germogli e nori. Porzione da gigante." },
      dolce: { nome: "Patate di Sasha", desc: "Patate dolci arrosto caramellate con burro, cannella, marshmallow tostati e gelato alla vaniglia." }
    }
  },
  {
    titolo: "Dragon Ball",
    genere: "Anime",
    menu: {
      antipasto: { nome: "I Senzu Beans Fritti", desc: "Edamame fritti e salati con salsa teriyaki dolce e peperoncino. Ricaricano le energie." },
      primo: { nome: "Il Banchetto di Goku", desc: "Piatto misto giapponese XXL: tonkatsu, tempura, riso, udon, gyoza e takoyaki. Mangia come un Saiyan." },
      dolce: { nome: "Kame Hame Ha Ice", desc: "Gelato fritto a sfera con salsa al cioccolato, wafer e pocky. Energia concentrata." }
    }
  },
  {
    titolo: "Naruto",
    genere: "Anime",
    menu: {
      antipasto: { nome: "Jutsu degli Onigiri", desc: "Onigiri assortiti con ripieno di salmone, tonno mayo e teriyaki chicken. Shadow clone no jutsu!" },
      primo: { nome: "Ichiraku Ramen", desc: "Ramen di Naruto: brodo di maiale, chashu, narutomaki, uovo, cipollotto e nori. Il preferito dell'Hokage." },
      dolce: { nome: "Rasengan Mochi", desc: "Mochi a spirale ripieni di gelato (matcha, fragola, mango) con salsa al cioccolato bianco." }
    }
  },
  {
    titolo: "One Piece",
    genere: "Anime",
    menu: {
      antipasto: { nome: "Il Tesoro di Sanji", desc: "Takoyaki (polpette di polpo) con salsa takoyaki, maionese giapponese e katsuobushi." },
      primo: { nome: "Il Banchetto del Re dei Pirati", desc: "Costoletta di carne gigante (stile Luffy) con riso, patate e salsa teriyaki. Formato Imperatore." },
      dolce: { nome: "Il Frutto del Diavolo", desc: "Frutto della passione mousse con gelatina di frutti esotici, mango e cioccolato rubino." }
    }
  },
  {
    titolo: "Demon Slayer",
    genere: "Anime",
    menu: {
      antipasto: { nome: "Respiro dell'Acqua Soup", desc: "Zuppa di miso con tofu, wakame e cipollotto. Fluida come la tecnica di Tanjiro." },
      primo: { nome: "La Spada del Cacciatore", desc: "Yakitori misto: pollo, manzo e gamberoni su spiedini con tare e shichimi togarashi." },
      dolce: { nome: "Nezuko's Box Cake", desc: "Torta a scatola: esterna di cioccolato, interna di mousse alla fragola e crema al latte." }
    }
  },
  {
    titolo: "Death Note",
    genere: "Anime",
    menu: {
      antipasto: { nome: "Le Mele di Ryuk", desc: "Mele caramellate al toffee con granella di nocciole e cioccolato fondente." },
      primo: { nome: "Il Quaderno della Morte", desc: "Bento box nera: riso al sesamo nero, salmone teriyaki, tamagoyaki, edamame e tsukemono." },
      dolce: { nome: "La Torta di L", desc: "Strawberry shortcake giapponese: soffice, panna montata fresca e fragole. L ne andrebbe pazzo." }
    }
  },
  {
    titolo: "Il Castello Errante di Howl",
    genere: "Anime",
    menu: {
      antipasto: { nome: "La Colazione di Calcifer", desc: "Uova al tegamino con bacon croccantissimo, pane tostato al burro e pomodori grigliati." },
      primo: { nome: "Lo Stufato del Castello", desc: "Stufato ricco con manzo, patate, carote, funghi e brodo denso servito in ciotola di pane." },
      dolce: { nome: "Il Cuore di Sophie", desc: "Heart-shaped pancake con frutti di bosco, panna, Nutella e zucchero a velo." }
    }
  },
  {
    titolo: "Neon Genesis Evangelion",
    genere: "Anime",
    menu: {
      antipasto: { nome: "LCL Soup", desc: "Gazpacho arancione con gamberi grigliati e crostini all'aglio." },
      primo: { nome: "Il Dilemma di Shinji", desc: "Curry giapponese piccante con riso, katsu di maiale e tsukemono. Sali sull'EVA... e mangia." },
      dolce: { nome: "Congratulazioni!", desc: "Purin (crème caramel giapponese) gigante con salsa al caramello e panna montata. Omedetou!" }
    }
  },

  // ═══════════════════════════════════════
  // EXTRA - MIX GENERI
  // ═══════════════════════════════════════
  {
    titolo: "Matrix",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "Pillola Rossa o Blu?", desc: "Due dip: salsa rossa piccante e salsa blu cheese con nachos. Scegli la tua realtà." },
      primo: { nome: "La Bistecca di Cypher", desc: "Ribeye alla griglia con burro alle erbe, patate hasselback e asparagi. L'ignoranza è un bene." },
      dolce: { nome: "Glitch nel Sistema", desc: "Cheesecake pixelata: quadratini di sapori diversi (fragola, mango, cioccolato, pistacchio)." }
    }
  },
  {
    titolo: "Pulp Fiction",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "Royale with Cheese", desc: "Mini cheeseburger con cheddar, ketchup, senape e cetriolini. Come a Parigi." },
      primo: { nome: "Il $5 Milkshake Meal", desc: "Smash burger con patatine fritte e milkshake alla vaniglia. Cinque dollari ben spesi." },
      dolce: { nome: "Twist al Jack Rabbit Slim's", desc: "Banana split con gelato al cioccolato, panna, ciliegie e salsa caramello." }
    }
  },
  {
    titolo: "La La Land",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "City of Stars Bruschetta", desc: "Bruschette con avocado, pomodorini gialli, burrata e riduzione di balsamico." },
      primo: { nome: "Jazz Club Sliders", desc: "Mini burger gourmet con brie, rucola, marmellata di fichi e prosciutto crudo." },
      dolce: { nome: "Un Altro Giorno di Sole", desc: "Pavlova con crema al limone, frutti gialli (mango, passion fruit, pesca) e meringhe dorate." }
    }
  },
  {
    titolo: "Fight Club",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "Prima Regola: Mangiare", desc: "Loaded potato skins con bacon, cheddar, panna acida e erba cipollina." },
      primo: { nome: "Sapone e Grasso", desc: "Pork belly croccante con purè fumante, salsa gravy e cipolla fritta. Unto come Tyler Durden." },
      dolce: { nome: "Distruzione Creativa", desc: "Deconstructed cookie dough: impasto di biscotto crudo, gelato, cioccolato caldo e pretzel." }
    }
  },
  {
    titolo: "Interstellar",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "Il Mais di Cooper", desc: "Pannocchia grigliata con burro, parmigiano, lime e peperoncino. L'ultimo raccolto." },
      primo: { nome: "Buco Nero di Sapore", desc: "Black angus burger con salsa truffle, funghi porcini, gruyère fuso e cipolla croccante." },
      dolce: { nome: "Murph's Watch", desc: "Orologio di cioccolato: disco di cioccolato con mousse al caffè, caramello e polvere d'oro." }
    }
  },
  {
    titolo: "Parasite",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "Ram-Don dei Ricchi", desc: "Jjapaguri (noodles istantanei) con cubetti di controfiletto di manzo. Il piatto simbolo del film." },
      primo: { nome: "Il Semi-Interrato", desc: "Korean fried chicken con gochujang glaze, riso al vapore e kimchi fatto in casa." },
      dolce: { nome: "La Torta di Compleanno", desc: "Castella cake giapponese con crema al latte, fragole e decorazioni minimali. Eleganza e inganno." }
    }
  },
  {
    titolo: "Blade Runner 2049",
    genere: "Thriller",
    menu: {
      antipasto: { nome: "Repliche di Gyoza", desc: "Gyoza alla piastra ripieni di pollo e zenzero con salsa ponzu. Perfetti come un replicante." },
      primo: { nome: "Noodles Distopici", desc: "Dan dan noodles piccantissimi con maiale macinato, pak choi e olio di Sichuan. Il futuro brucia." },
      dolce: { nome: "Lacrime nella Pioggia", desc: "Panna cotta trasparente con gocce di yuzu, fiori eduli e perle di tapioca." }
    }
  },
  {
    titolo: "Inside Out",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Le Emozioni nel Piatto", desc: "5 bruschette colorate: rossa (pomodoro), gialla (uovo), blu (gorgonzola), verde (pesto), viola (radicchio)." },
      primo: { nome: "La Pizza di San Francisco", desc: "Pizza con broccoli, ananas e salsa ranch. Disgusto odierebbe... ma tu la amerai." },
      dolce: { nome: "Il Treno dei Pensieri", desc: "Éclairs mignon colorati con creme diverse: vaniglia, pistacchio, cioccolato, fragola e caffè." }
    }
  },
  {
    titolo: "Up",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Palloncini di Arancini", desc: "Mini arancini colorati con zafferano, pomodoro, nero di seppia e spinaci." },
      primo: { nome: "Il Panino dell'Avventura", desc: "Club sandwich triplo con pollo, bacon, avocado, uovo, pomodoro e mayo al lime." },
      dolce: { nome: "La Casa Volante", desc: "Waffle a forma di casa con gelato, panna, frutti di bosco e zucchero filato come nuvole." }
    }
  },
  {
    titolo: "Encanto",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Arepas de Julieta", desc: "Arepas fritte ripiene di formaggio, carne sfilacciata e guacamole. Curano ogni ferita." },
      primo: { nome: "No Se Habla de Bruno's Bandeja", desc: "Bandeja paisa: riso, fagioli, carne macinata, uovo fritto, chicharrón, platano e avocado." },
      dolce: { nome: "La Magia dei Madrigal", desc: "Tres leches cake con cannella, dulce de leche e fiori di zucchero colorati." }
    }
  },
  {
    titolo: "The Ring",
    genere: "Horror",
    menu: {
      antipasto: { nome: "La Videocassetta", desc: "Rotolini di melanzana fritti ripieni di ricotta e salsa di pomodoro. 7 giorni per mangiarli tutti." },
      primo: { nome: "Il Pozzo di Samara", desc: "Riso nero venere con seppie in umido, pomodorini e olive. Nero come il pozzo." },
      dolce: { nome: "7 Giorni", desc: "Torta a cerchio (ciambellone) al cioccolato con glassa nera e crema al rum." }
    }
  },
  {
    titolo: "10 Cose che Odio di Te",
    genere: "Romantico",
    menu: {
      antipasto: { nome: "10 Mozzarelle che Amo di Te", desc: "10 mozzarelline fritte con 10 salse diverse. Da odiare? Impossibile." },
      primo: { nome: "Il Concerto sugli Spalti", desc: "Mac & cheese con lobster tail, erba cipollina e pangrattato al tartufo." },
      dolce: { nome: "Il Poema di Kat", desc: "Cheesecake al lampone con biscotto speculoos e coulis di passion fruit." }
    }
  },
  {
    titolo: "Studio Ghibli - Ponyo",
    genere: "Anime",
    menu: {
      antipasto: { nome: "Ponyo Ama il Prosciutto", desc: "Prosciutto cotto tagliato spesso, grigliato e servito con miele e senape. Il piatto preferito di Ponyo." },
      primo: { nome: "Il Ramen di Sosuke", desc: "Ramen al miso con prosciutto cotto spesso, uovo sodo, cipollotto e verdure. Comfort food supremo." },
      dolce: { nome: "La Bolla d'Acqua Dolce", desc: "Raindrop cake (mizu shingen mochi) con sciroppo di zucchero nero e kinako." }
    }
  },
  {
    titolo: "Oldboy",
    genere: "Mente Criminale",
    menu: {
      antipasto: { nome: "15 Anni di Dumpling", desc: "Mandu (ravioli coreani) fritti con salsa di soia, aceto e olio di sesamo." },
      primo: { nome: "Il Polpo Vivo", desc: "Polpo alla griglia marinato con gochujang, sesamo e verdure saltate. Crudo di coraggio." },
      dolce: { nome: "La Vendetta è Dolce", desc: "Bingsu (ghiaccio tritato coreano) con fagioli rossi, mochi, frutta e latte condensato." }
    }
  },
  {
    titolo: "Nightmare Before Christmas",
    genere: "Disney",
    menu: {
      antipasto: { nome: "Halloween Town Bites", desc: "Zucca fritta in tempura con salsa aioli all'aglio nero. Spaventosamente buoni." },
      primo: { nome: "Jack Skellington's Ribs", desc: "Costolette a vista (come le costole di Jack) glassate con salsa BBQ alla zucca e spezie." },
      dolce: { nome: "Sally's Patchwork Cake", desc: "Torta patchwork con fette di gusti diversi cucite insieme: cioccolato, vaniglia, fragola e pistacchio." }
    }
  },
  {
    titolo: "Fullmetal Alchemist",
    genere: "Anime",
    menu: {
      antipasto: { nome: "Lo Scambio Equivalente", desc: "Antipasto doppio: edamame e takoyaki. Per ottenere qualcosa, devi dare qualcosa." },
      primo: { nome: "L'Apple Pie di Winry", desc: "Katsu curry giapponese con riso, insalata e una fetta di apple pie salata." },
      dolce: { nome: "La Pietra Filosofale", desc: "Gemma di gelatina rossa ripiena di mousse alla fragola e cioccolato rubino. Potere infinito." }
    }
  }
];

function getRandomFilms(count = 3) {
  const shuffled = [...FILM_DB].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
