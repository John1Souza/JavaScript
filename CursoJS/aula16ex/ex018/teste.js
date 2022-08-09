function adicionar(){
    let n = window.document.getElementById('inum')
    let tab = window.document.getElementById('valores') 
    //let final = window.document.querySelector('button') 
    let vetor = [1,2,3,4,5]

    if (n.value.length==0 || n.value > 100){
        window.alert('[ERRO] Valor inválido digitado.')
    } else{
        let num = Number(n.value)
        vetor.push(num)
        tab.innerHTML = ''
        let item = document.createElement('option')
        item.text += `Valor ${num} adicionado`
        //item.value = `tab${cont}`
        tab.appendChild(item)        
        
    }
    finalizar.onclick =  function(){       
        res.innerHTML = `Ao todo temos ${vetor.length} números cadastrados<br>`
        let cont = 1
        let maior = 0
        let menor = 0
        let soma = 0
        while (cont <= vetor.length){            
            if (cont == 1){
                maior = vetor[cont]
                menor = vetor[cont]
                
            } else {
                
                if (vetor[cont] > maior){
                    maior = vetor[cont]
                    
                }
                if (vetor[cont] < menor){
                    menor = vetor[cont]
                }
            }
            //soma += vetor[cont]
            cont++  
        }
        res.innerHTML += `O maior valor informado foi ${maior}<br>`
        res.innerHTML += `O menor valor informado foi ${menor}<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}`
    }       
           
}
