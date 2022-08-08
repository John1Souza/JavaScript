function contar(){
    var i = window.document.getElementById('iinicio')
    var f = window.document.getElementById('ifim')
    var p = window.document.getElementById('ipasso')
    /*
    
    */

    
    if (i.value.length == 0 || f.value.legth == 0 || p.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }else {
        msg.innerHTML = 'Contando:<br>'
        var ini = Number(i.value)
        var fim = Number(f.value)
        var pas = Number(p.value)

        if (pas == 0){
            var pas = 1
        }
        if (ini > fim){
            for (ini ; ini >= fim ; ini -= pas){            
                if (ini == fim){
                    msg.innerHTML += `${ini} \u{1F6A9}`
                } else {
                    msg.innerHTML += ` ${ini} \u{1F449}`  
                }                
            }
        } else {
            for (ini ; ini <= fim ; ini += pas) {
                if (ini == fim){
                    msg.innerHTML += `${ini} \u{1F6A9}`
                } else {
                    msg.innerHTML += ` ${ini} \u{1F449}`  
                }  
            }    
        }
    }
    
    
    /*do {        
        msg.innerHTML = `${ini}`
        ini += pas
    } while (ini <= fim)
    */
}