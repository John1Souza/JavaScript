function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'dia_1.png'
        document.body.style.background = '#e3735b'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde_1.png'
        document.body.style.background = '#1e3c3c'
    } else {
        //BOA NOITE!
        img.src = 'noite_1.png'
        document.body.style.background = '001626'
    }
}
