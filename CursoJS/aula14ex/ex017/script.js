function tabuada() {
    let num = window.document.getElementById('itab')
    let tab = window.document.getElementById('seltab')
    
    if (num.value.legth == 0){
        window.alert('[ERRO] Valor inválido')
    }else {
        let numero = Number(num.value)
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} X ${cont} = ${numero*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont ++
        }
    }
    
}