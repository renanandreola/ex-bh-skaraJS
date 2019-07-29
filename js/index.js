var a = parseInt(prompt("Digite o valor de a"));
var b = parseInt(prompt("Digite o valor de b"));
var c = parseInt(prompt("Digite o valor de c"));

var delta = (b*b) - (4 * a * c);

if(delta < 0) {
  document.body.append("Não existem raízes reais")
} else if(delta === 0) {
    document.body.append("1 raíz= " + (-b/2*a));
}else {
  var x1 = (b*-1 + Math.sqrt(delta))/2*a;
  var x2 = (b*-1 - Math.sqrt(delta))/2*a;
  document.body.append("Valor x1= " + x1)
  document.body.append("Valor x2= " + x2 )
  document.body.append("Delta =" + delta)
}
