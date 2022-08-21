const convites = ['johnatas','jhonatan'];
let nome = document.getElementsByClassName('.inome')

function convite(nomes){
    for (chave in nomes){
        if (chave === nome){
            window.alert('oi');
        }
    }
    
}