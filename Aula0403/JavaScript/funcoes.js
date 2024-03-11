var num1 = 2;
var num2 = 10;
var result = 0;
//var opera = 3;

function soma()
{
    result = num1 + num2;
    alert(num1 + " + " + num2 + " = " + result);
    console.log("Executando função soma()");
}

function sub()
{
    result = num1 - num2;
    alert(num1 + " - " + num2 + " = " + result);
    console.log("Executando função sub()");
}

function mult()
{
    result = num1 * num2;
    alert(num1 + " * " + num2 + " = " + result);
    console.log("Executando função mult()");
}

function divi()
{
    result = num1 / num2;
    alert(num1 + " / " + num2 + " = " + result);
    console.log("Executando função divi()");
}


/*switch (opera)
{
    case 1:
    soma();
    break;

    case 2:
    sub();
    break;

    case 3:
    divi();
    break;

    case 4:
    mult();
    break;

    default:
    alert("ERRO! Essa operação não existe");
    break;
}*/
