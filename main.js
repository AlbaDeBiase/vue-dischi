// Rifate l'esercizio dei dischi nella versione base, come l'abbiamo visto stamattina,
// cioè fare una chiamata ajax per recuperare una decina di dischi musicali e utilizzando vue,
// stampare a schermo una card per ogni album.

// BONUS 1: Creare una select con tutti i generi dei dischi.
// In base al genere che viene selezionato nella select, vengono visualizzati i cd corrispondenti.
// N.B.: per fare questo punto non è necessario modificare l'array dei dati

var app = new Vue ({
    el:'#container_dischi',
    data: {
        dischi:[], //array  vuoto nel quale visualizzerò i miei dischi
        generi_musicali:[], //array vuoto dove visualizzero i miei generi
        selezionaGenere: 'tutto' //stringa che può essere anche vuota perchè non seleziono nessun genere
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')// chiamata api
        .then((risposta) => {
            // recupero la risposta
        this.dischi = risposta.data.response;
        // console.log(this.dischi); visualizzo il mio array di oggetti in console

            // scorro l'array di dischi
            this.dischi.forEach((disco) => {
                // console.log(disco);

                // se genere non è incluso lo inserisco nell'array vuoto
            if (!this.generi_musicali.includes(disco.genre)) {
                    this.generi_musicali.push(disco.genre);
                    console.log(disco.genre); //visualizzo i generi
                }
            })
            // ordino i dischi per anno di uscita
            // this.dischi.sort(disco1,disco2){
            //     return parseInt(disco1.year) - parseInt(disco2.year);
            // };
        });

    } //chiudo mounted

}) //chiudo Vue
