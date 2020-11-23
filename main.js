// Rifate l'esercizio dei dischi nella versione base, come l'abbiamo visto stamattina,
// cioè fare una chiamata ajax per recuperare una decina di dischi musicali e utilizzando vue,
// stampare a schermo una card per ogni album.


var app = new Vue ({
    el:'#container_dischi',
    data: {
        dischi:[] //array  vuoto nel quale visualizzerò i miei dischi
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')// chiamata api
        .then((risposta) => {
            // recupero la risposta
        this.dischi = risposta.data.response;
        // console.log(this.dischi); visualizzo il mio array di oggetti in console
        });

    }

})

// BONUS 1: Creare una select con tutti i generi dei dischi. 
// In base al genere che viene selezionato nella select, vengono visualizzati i cd corrispondenti.
// N.B.: per fare questo punto non è necessario modificare l'array dei dati
