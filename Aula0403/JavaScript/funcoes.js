function calcular(opera)
{
    var result = 0;
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if (opera == 'soma')
    {
        result = parseFloat(num1) + parseFloat(num2);
        console.log("Executando função calcular(soma)"); 
    }
    if (opera == 'sub')
    {
        result = parseFloat(num1) - parseFloat(num2);
        console.log("Executando função calcular(sub)");
    }
    if (opera == 'mult')
    {
        result = parseFloat(num1) * parseFloat(num2);
        console.log("Executando função calcular(mult)");
    }
    if (opera == 'divi')
    {
        if (num2 == 0)
        {
            alert("Essa conta não é possível :(")
        } 
        else 
        {
            result = parseFloat(num1) / parseFloat(num2);
        }
        console.log("Executando função calcular(divi)");
    }
    document.getElementById('result').value = result;
}
