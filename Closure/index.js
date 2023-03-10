function calculation() {
    let x = 10;
    let y = 20;
    function sum(){
        console.log(x,y);
    }
    x = 20;
    y = 40;
    return sum;
}
const fun = calculation();

fun();