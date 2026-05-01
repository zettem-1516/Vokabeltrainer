/**
 * Spanisch-Vokabeltrainer — Wortschatz
 * 
 * Format pro Eintrag:
 *   id:                  eindeutige ID (Zahl)
 *   rank:                Häufigkeitsrang (1 = häufigstes Wort)
 *   level:               Sprachniveau (A1, A2, B1)
 *   spanisch:            Lemma (Grundform)
 *   deutsch:             deutsche Übersetzung
 *   wortart:             Substantiv, Verb, Adjektiv, Adverb, Pronomen,
 *                        Präposition, Konjunktion, Artikel, Zahl, Interjektion
 *   thema:               Themengruppe für Filter
 *   beispielSpanisch:    Beispielsatz mit ___ als Lücke
 *   loesung:             Wort, das in die Lücke gehört (kann gebeugt sein)
 *   beispielUebersetzung: vollständige deutsche Übersetzung des Beispielsatzes
 *                        (wird auf Wunsch eingeblendet)
 *
 * Hinweis: Diese Startversion enthält ~70 sorgfältig gepflegte Einträge
 * aus dem absoluten Kernwortschatz. Wird später auf 1000 Einträge erweitert.
 */

const VOCAB = [
  // === Artikel & Pronomen (Grundwortschatz) ===
  { id: 1,  rank: 1,  level: "A1", spanisch: "el",       deutsch: "der",            wortart: "Artikel",   thema: "Grundwortschatz", beispielSpanisch: "___ libro está aquí.",          loesung: "El",       beispielUebersetzung: "Das Buch ist hier." },
  { id: 2,  rank: 2,  level: "A1", spanisch: "la",       deutsch: "die",            wortart: "Artikel",   thema: "Grundwortschatz", beispielSpanisch: "___ casa es grande.",           loesung: "La",       beispielUebersetzung: "Das Haus ist groß." },
  { id: 3,  rank: 3,  level: "A1", spanisch: "yo",       deutsch: "ich",            wortart: "Pronomen",  thema: "Grundwortschatz", beispielSpanisch: "___ soy de Alemania.",          loesung: "Yo",       beispielUebersetzung: "Ich komme aus Deutschland." },
  { id: 4,  rank: 4,  level: "A1", spanisch: "tú",       deutsch: "du",             wortart: "Pronomen",  thema: "Grundwortschatz", beispielSpanisch: "¿___ hablas español?",          loesung: "Tú",       beispielUebersetzung: "Sprichst du Spanisch?" },
  { id: 5,  rank: 5,  level: "A1", spanisch: "él",       deutsch: "er",             wortart: "Pronomen",  thema: "Grundwortschatz", beispielSpanisch: "___ es mi hermano.",            loesung: "Él",       beispielUebersetzung: "Er ist mein Bruder." },
  { id: 6,  rank: 6,  level: "A1", spanisch: "ella",     deutsch: "sie",            wortart: "Pronomen",  thema: "Grundwortschatz", beispielSpanisch: "___ vive en Madrid.",           loesung: "Ella",     beispielUebersetzung: "Sie wohnt in Madrid." },
  { id: 7,  rank: 7,  level: "A1", spanisch: "nosotros", deutsch: "wir",            wortart: "Pronomen",  thema: "Grundwortschatz", beispielSpanisch: "___ vamos al cine.",            loesung: "Nosotros", beispielUebersetzung: "Wir gehen ins Kino." },
  { id: 8,  rank: 8,  level: "A1", spanisch: "vosotros", deutsch: "ihr",            wortart: "Pronomen",  thema: "Grundwortschatz", beispielSpanisch: "¿___ tenéis hambre?",           loesung: "Vosotros", beispielUebersetzung: "Habt ihr Hunger?" },
  { id: 9,  rank: 9,  level: "A1", spanisch: "ellos",    deutsch: "sie (Plural)",   wortart: "Pronomen",  thema: "Grundwortschatz", beispielSpanisch: "___ son mis amigos.",           loesung: "Ellos",    beispielUebersetzung: "Sie sind meine Freunde." },

  // === Hilfs- und Grundverben ===
  { id: 10, rank: 10, level: "A1", spanisch: "ser",      deutsch: "sein",           wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "Yo ___ alemán.",                loesung: "soy",      beispielUebersetzung: "Ich bin Deutscher." },
  { id: 11, rank: 11, level: "A1", spanisch: "estar",    deutsch: "sein (Zustand)", wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "Ella ___ cansada.",             loesung: "está",     beispielUebersetzung: "Sie ist müde." },
  { id: 12, rank: 12, level: "A1", spanisch: "tener",    deutsch: "haben",          wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "Yo ___ dos hermanos.",          loesung: "tengo",    beispielUebersetzung: "Ich habe zwei Geschwister." },
  { id: 13, rank: 13, level: "A1", spanisch: "haber",    deutsch: "haben (Hilfsverb)", wortart: "Verb",   thema: "Grundwortschatz", beispielSpanisch: "Yo ___ comido ya.",             loesung: "he",       beispielUebersetzung: "Ich habe schon gegessen." },
  { id: 14, rank: 14, level: "A1", spanisch: "hacer",    deutsch: "machen, tun",    wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "¿Qué ___ tú hoy?",              loesung: "haces",    beispielUebersetzung: "Was machst du heute?" },
  { id: 15, rank: 15, level: "A1", spanisch: "ir",       deutsch: "gehen, fahren",  wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "Yo ___ a la playa.",            loesung: "voy",      beispielUebersetzung: "Ich gehe an den Strand." },
  { id: 16, rank: 16, level: "A1", spanisch: "venir",    deutsch: "kommen",         wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "Ella ___ a las ocho.",          loesung: "viene",    beispielUebersetzung: "Sie kommt um acht." },
  { id: 17, rank: 17, level: "A1", spanisch: "decir",    deutsch: "sagen",          wortart: "Verb",      thema: "Kommunikation",   beispielSpanisch: "Él ___ la verdad.",             loesung: "dice",     beispielUebersetzung: "Er sagt die Wahrheit." },
  { id: 18, rank: 18, level: "A1", spanisch: "ver",      deutsch: "sehen",          wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "Yo ___ una película.",          loesung: "veo",      beispielUebersetzung: "Ich sehe einen Film." },
  { id: 19, rank: 19, level: "A1", spanisch: "saber",    deutsch: "wissen",         wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "No ___ la respuesta.",          loesung: "sé",       beispielUebersetzung: "Ich weiß die Antwort nicht." },
  { id: 20, rank: 20, level: "A1", spanisch: "querer",   deutsch: "wollen, mögen",  wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "Yo te ___ mucho.",              loesung: "quiero",   beispielUebersetzung: "Ich mag dich sehr." },
  { id: 21, rank: 21, level: "A1", spanisch: "poder",    deutsch: "können",         wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "¿___ ayudarme?",                loesung: "Puedes",   beispielUebersetzung: "Kannst du mir helfen?" },
  { id: 22, rank: 22, level: "A1", spanisch: "hablar",   deutsch: "sprechen",       wortart: "Verb",      thema: "Kommunikation",   beispielSpanisch: "Yo ___ alemán e inglés.",       loesung: "hablo",    beispielUebersetzung: "Ich spreche Deutsch und Englisch." },
  { id: 23, rank: 23, level: "A1", spanisch: "comer",    deutsch: "essen",          wortart: "Verb",      thema: "Essen & Trinken", beispielSpanisch: "Nosotros ___ paella.",          loesung: "comemos",  beispielUebersetzung: "Wir essen Paella." },
  { id: 24, rank: 24, level: "A1", spanisch: "beber",    deutsch: "trinken",        wortart: "Verb",      thema: "Essen & Trinken", beispielSpanisch: "Yo ___ agua.",                  loesung: "bebo",     beispielUebersetzung: "Ich trinke Wasser." },
  { id: 25, rank: 25, level: "A1", spanisch: "vivir",    deutsch: "leben, wohnen",  wortart: "Verb",      thema: "Grundwortschatz", beispielSpanisch: "Yo ___ en Berlín.",             loesung: "vivo",     beispielUebersetzung: "Ich wohne in Berlin." },

  // === Familie ===
  { id: 26, rank: 80, level: "A1", spanisch: "familia",  deutsch: "Familie",        wortart: "Substantiv", thema: "Familie & Menschen", beispielSpanisch: "Mi ___ es grande.",          loesung: "familia",  beispielUebersetzung: "Meine Familie ist groß." },
  { id: 27, rank: 81, level: "A1", spanisch: "padre",    deutsch: "Vater",          wortart: "Substantiv", thema: "Familie & Menschen", beispielSpanisch: "Mi ___ trabaja mucho.",       loesung: "padre",    beispielUebersetzung: "Mein Vater arbeitet viel." },
  { id: 28, rank: 82, level: "A1", spanisch: "madre",    deutsch: "Mutter",         wortart: "Substantiv", thema: "Familie & Menschen", beispielSpanisch: "Mi ___ cocina muy bien.",     loesung: "madre",    beispielUebersetzung: "Meine Mutter kocht sehr gut." },
  { id: 29, rank: 83, level: "A1", spanisch: "hijo",     deutsch: "Sohn",           wortart: "Substantiv", thema: "Familie & Menschen", beispielSpanisch: "Su ___ tiene cinco años.",    loesung: "hijo",     beispielUebersetzung: "Ihr Sohn ist fünf Jahre alt." },
  { id: 30, rank: 84, level: "A1", spanisch: "hija",     deutsch: "Tochter",        wortart: "Substantiv", thema: "Familie & Menschen", beispielSpanisch: "Mi ___ estudia medicina.",    loesung: "hija",     beispielUebersetzung: "Meine Tochter studiert Medizin." },
  { id: 31, rank: 85, level: "A1", spanisch: "hermano",  deutsch: "Bruder",         wortart: "Substantiv", thema: "Familie & Menschen", beispielSpanisch: "Mi ___ vive en Sevilla.",     loesung: "hermano",  beispielUebersetzung: "Mein Bruder wohnt in Sevilla." },
  { id: 32, rank: 86, level: "A1", spanisch: "hermana",  deutsch: "Schwester",      wortart: "Substantiv", thema: "Familie & Menschen", beispielSpanisch: "Mi ___ es muy simpática.",    loesung: "hermana",  beispielUebersetzung: "Meine Schwester ist sehr sympathisch." },
  { id: 33, rank: 87, level: "A1", spanisch: "amigo",    deutsch: "Freund",         wortart: "Substantiv", thema: "Familie & Menschen", beispielSpanisch: "Pablo es mi mejor ___.",      loesung: "amigo",    beispielUebersetzung: "Pablo ist mein bester Freund." },

  // === Essen & Trinken ===
  { id: 34, rank: 100, level: "A1", spanisch: "agua",    deutsch: "Wasser",         wortart: "Substantiv", thema: "Essen & Trinken", beispielSpanisch: "Quiero un vaso de ___.",      loesung: "agua",     beispielUebersetzung: "Ich möchte ein Glas Wasser." },
  { id: 35, rank: 101, level: "A1", spanisch: "pan",     deutsch: "Brot",           wortart: "Substantiv", thema: "Essen & Trinken", beispielSpanisch: "Compro ___ en la panadería.", loesung: "pan",      beispielUebersetzung: "Ich kaufe Brot in der Bäckerei." },
  { id: 36, rank: 102, level: "A1", spanisch: "leche",   deutsch: "Milch",          wortart: "Substantiv", thema: "Essen & Trinken", beispielSpanisch: "El café con ___ está rico.",  loesung: "leche",    beispielUebersetzung: "Der Milchkaffee schmeckt gut." },
  { id: 37, rank: 103, level: "A1", spanisch: "café",    deutsch: "Kaffee",         wortart: "Substantiv", thema: "Essen & Trinken", beispielSpanisch: "Bebo ___ por la mañana.",     loesung: "café",     beispielUebersetzung: "Ich trinke morgens Kaffee." },
  { id: 38, rank: 104, level: "A1", spanisch: "queso",   deutsch: "Käse",           wortart: "Substantiv", thema: "Essen & Trinken", beispielSpanisch: "Me gusta el ___ manchego.",   loesung: "queso",    beispielUebersetzung: "Ich mag Manchego-Käse." },
  { id: 39, rank: 105, level: "A1", spanisch: "carne",   deutsch: "Fleisch",        wortart: "Substantiv", thema: "Essen & Trinken", beispielSpanisch: "No como ___ los lunes.",      loesung: "carne",    beispielUebersetzung: "Montags esse ich kein Fleisch." },
  { id: 40, rank: 106, level: "A1", spanisch: "fruta",   deutsch: "Obst",           wortart: "Substantiv", thema: "Essen & Trinken", beispielSpanisch: "La ___ es muy sana.",         loesung: "fruta",    beispielUebersetzung: "Obst ist sehr gesund." },
  { id: 41, rank: 107, level: "A1", spanisch: "manzana", deutsch: "Apfel",          wortart: "Substantiv", thema: "Essen & Trinken", beispielSpanisch: "Como una ___ cada día.",      loesung: "manzana",  beispielUebersetzung: "Ich esse jeden Tag einen Apfel." },

  // === Zeit & Datum ===
  { id: 42, rank: 60, level: "A1", spanisch: "día",      deutsch: "Tag",            wortart: "Substantiv", thema: "Zeit & Datum",    beispielSpanisch: "Hoy es un buen ___.",         loesung: "día",      beispielUebersetzung: "Heute ist ein guter Tag." },
  { id: 43, rank: 61, level: "A1", spanisch: "noche",    deutsch: "Nacht",          wortart: "Substantiv", thema: "Zeit & Datum",    beispielSpanisch: "Buenas ___ a todos.",         loesung: "noches",   beispielUebersetzung: "Gute Nacht euch allen." },
  { id: 44, rank: 62, level: "A1", spanisch: "mañana",   deutsch: "Morgen, morgen", wortart: "Substantiv", thema: "Zeit & Datum",    beispielSpanisch: "Te veo ___.",                 loesung: "mañana",   beispielUebersetzung: "Wir sehen uns morgen." },
  { id: 45, rank: 63, level: "A1", spanisch: "hoy",      deutsch: "heute",          wortart: "Adverb",     thema: "Zeit & Datum",    beispielSpanisch: "___ hace mucho calor.",       loesung: "Hoy",      beispielUebersetzung: "Heute ist es sehr heiß." },
  { id: 46, rank: 64, level: "A1", spanisch: "ayer",     deutsch: "gestern",        wortart: "Adverb",     thema: "Zeit & Datum",    beispielSpanisch: "___ fui al museo.",           loesung: "Ayer",     beispielUebersetzung: "Gestern bin ich ins Museum gegangen." },
  { id: 47, rank: 65, level: "A1", spanisch: "año",      deutsch: "Jahr",           wortart: "Substantiv", thema: "Zeit & Datum",    beispielSpanisch: "Tengo treinta ___.",          loesung: "años",     beispielUebersetzung: "Ich bin dreißig Jahre alt." },
  { id: 48, rank: 66, level: "A1", spanisch: "semana",   deutsch: "Woche",          wortart: "Substantiv", thema: "Zeit & Datum",    beispielSpanisch: "La ___ tiene siete días.",    loesung: "semana",   beispielUebersetzung: "Die Woche hat sieben Tage." },
  { id: 49, rank: 67, level: "A1", spanisch: "hora",     deutsch: "Stunde, Uhrzeit", wortart: "Substantiv", thema: "Zeit & Datum",   beispielSpanisch: "¿Qué ___ es?",                loesung: "hora",     beispielUebersetzung: "Wie spät ist es?" },

  // === Zahlen ===
  { id: 50, rank: 200, level: "A1", spanisch: "uno",     deutsch: "eins",           wortart: "Zahl",       thema: "Zahlen",          beispielSpanisch: "Solo tengo ___ euro.",        loesung: "un",       beispielUebersetzung: "Ich habe nur einen Euro." },
  { id: 51, rank: 201, level: "A1", spanisch: "dos",     deutsch: "zwei",           wortart: "Zahl",       thema: "Zahlen",          beispielSpanisch: "Tengo ___ gatos en casa.",    loesung: "dos",      beispielUebersetzung: "Ich habe zwei Katzen zu Hause." },
  { id: 52, rank: 202, level: "A1", spanisch: "tres",    deutsch: "drei",           wortart: "Zahl",       thema: "Zahlen",          beispielSpanisch: "Mi hijo tiene ___ años.",     loesung: "tres",     beispielUebersetzung: "Mein Sohn ist drei Jahre alt." },
  { id: 53, rank: 203, level: "A1", spanisch: "cuatro",  deutsch: "vier",           wortart: "Zahl",       thema: "Zahlen",          beispielSpanisch: "La mesa tiene ___ patas.",    loesung: "cuatro",   beispielUebersetzung: "Der Tisch hat vier Beine." },
  { id: 54, rank: 204, level: "A1", spanisch: "cinco",   deutsch: "fünf",           wortart: "Zahl",       thema: "Zahlen",          beispielSpanisch: "Son las ___ de la tarde.",    loesung: "cinco",    beispielUebersetzung: "Es ist fünf Uhr nachmittags." },
  { id: 55, rank: 205, level: "A1", spanisch: "diez",    deutsch: "zehn",           wortart: "Zahl",       thema: "Zahlen",          beispielSpanisch: "Compro ___ manzanas.",        loesung: "diez",     beispielUebersetzung: "Ich kaufe zehn Äpfel." },

  // === Wohnen ===
  { id: 56, rank: 150, level: "A1", spanisch: "casa",    deutsch: "Haus",           wortart: "Substantiv", thema: "Wohnen",          beispielSpanisch: "Mi ___ es muy bonita.",       loesung: "casa",     beispielUebersetzung: "Mein Haus ist sehr schön." },
  { id: 57, rank: 151, level: "A1", spanisch: "puerta",  deutsch: "Tür",            wortart: "Substantiv", thema: "Wohnen",          beispielSpanisch: "Cierra la ___, por favor.",   loesung: "puerta",   beispielUebersetzung: "Mach bitte die Tür zu." },
  { id: 58, rank: 152, level: "A1", spanisch: "ventana", deutsch: "Fenster",        wortart: "Substantiv", thema: "Wohnen",          beispielSpanisch: "Abre la ___ por favor.",      loesung: "ventana",  beispielUebersetzung: "Öffne bitte das Fenster." },
  { id: 59, rank: 153, level: "A1", spanisch: "mesa",    deutsch: "Tisch",          wortart: "Substantiv", thema: "Wohnen",          beispielSpanisch: "El libro está en la ___.",    loesung: "mesa",     beispielUebersetzung: "Das Buch liegt auf dem Tisch." },
  { id: 60, rank: 154, level: "A1", spanisch: "silla",   deutsch: "Stuhl",          wortart: "Substantiv", thema: "Wohnen",          beispielSpanisch: "Siéntate en esa ___.",        loesung: "silla",    beispielUebersetzung: "Setz dich auf diesen Stuhl." },
  { id: 61, rank: 155, level: "A1", spanisch: "cama",    deutsch: "Bett",           wortart: "Substantiv", thema: "Wohnen",          beispielSpanisch: "La ___ es muy cómoda.",       loesung: "cama",     beispielUebersetzung: "Das Bett ist sehr bequem." },

  // === Reisen & Verkehr ===
  { id: 62, rank: 250, level: "A1", spanisch: "coche",   deutsch: "Auto",           wortart: "Substantiv", thema: "Reisen & Verkehr", beispielSpanisch: "Mi ___ es nuevo.",            loesung: "coche",    beispielUebersetzung: "Mein Auto ist neu." },
  { id: 63, rank: 251, level: "A1", spanisch: "tren",    deutsch: "Zug",            wortart: "Substantiv", thema: "Reisen & Verkehr", beispielSpanisch: "El ___ llega a las nueve.",   loesung: "tren",     beispielUebersetzung: "Der Zug kommt um neun." },
  { id: 64, rank: 252, level: "A1", spanisch: "avión",   deutsch: "Flugzeug",       wortart: "Substantiv", thema: "Reisen & Verkehr", beispielSpanisch: "Vamos en ___ a Madrid.",      loesung: "avión",    beispielUebersetzung: "Wir fliegen nach Madrid." },
  { id: 65, rank: 253, level: "A1", spanisch: "calle",   deutsch: "Straße",         wortart: "Substantiv", thema: "Reisen & Verkehr", beispielSpanisch: "Vivo en esta ___.",           loesung: "calle",    beispielUebersetzung: "Ich wohne in dieser Straße." },
  { id: 66, rank: 254, level: "A1", spanisch: "ciudad",  deutsch: "Stadt",          wortart: "Substantiv", thema: "Stadt & Orte",    beispielSpanisch: "Madrid es una ___ grande.",   loesung: "ciudad",   beispielUebersetzung: "Madrid ist eine große Stadt." },

  // === Adjektive (häufig) ===
  { id: 67, rank: 300, level: "A1", spanisch: "grande",  deutsch: "groß",           wortart: "Adjektiv",   thema: "Grundwortschatz", beispielSpanisch: "Esta casa es muy ___.",      loesung: "grande",   beispielUebersetzung: "Dieses Haus ist sehr groß." },
  { id: 68, rank: 301, level: "A1", spanisch: "pequeño", deutsch: "klein",          wortart: "Adjektiv",   thema: "Grundwortschatz", beispielSpanisch: "Mi perro es ___.",            loesung: "pequeño",  beispielUebersetzung: "Mein Hund ist klein." },
  { id: 69, rank: 302, level: "A1", spanisch: "bueno",   deutsch: "gut",            wortart: "Adjektiv",   thema: "Grundwortschatz", beispielSpanisch: "Es un ___ libro.",            loesung: "buen",     beispielUebersetzung: "Es ist ein gutes Buch." },
  { id: 70, rank: 303, level: "A1", spanisch: "malo",    deutsch: "schlecht",       wortart: "Adjektiv",   thema: "Grundwortschatz", beispielSpanisch: "Hace ___ tiempo hoy.",        loesung: "mal",      beispielUebersetzung: "Heute ist schlechtes Wetter." },
  { id: 71, rank: 304, level: "A1", spanisch: "nuevo",   deutsch: "neu",            wortart: "Adjektiv",   thema: "Grundwortschatz", beispielSpanisch: "Tengo un coche ___.",         loesung: "nuevo",    beispielUebersetzung: "Ich habe ein neues Auto." },
  { id: 72, rank: 305, level: "A1", spanisch: "viejo",   deutsch: "alt",            wortart: "Adjektiv",   thema: "Grundwortschatz", beispielSpanisch: "Este libro es muy ___.",      loesung: "viejo",    beispielUebersetzung: "Dieses Buch ist sehr alt." },
  { id: 73, rank: 306, level: "A1", spanisch: "bonito",  deutsch: "schön, hübsch",  wortart: "Adjektiv",   thema: "Grundwortschatz", beispielSpanisch: "Qué vestido tan ___.",        loesung: "bonito",   beispielUebersetzung: "Was für ein hübsches Kleid." },
];

// Export für Browser-Globalvariable
if (typeof window !== "undefined") {
  window.VOCAB = VOCAB;
}
