function insertValues(num){/* função para manipular os numeros*/
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input + num /* variavel para guardar os numeros*/


}

function calculate(){/*metodo para calculo dos values dos input*/  
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = eval(input)
}

function clearInput(){/*limpar display*/  
    document.getElementById('input-value').value = ""
}

function invertValue(){/*funcao para inverter o numero de positivo para negativo e vice versa*/  
    calculate()/*primeiro calcula depois inverte*/
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input * -1

}
