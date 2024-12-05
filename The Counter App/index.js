let count = 0

// aiea apde pella myCount naam nu varialble banayu ane ema details mangavii 
// html ma thii using "getElementByID" naam na function ne use karine
let myCount = document.getElementById("el-button")
let saveEl = document.getElementById("save-el")
function increment() {

    count = count + 1
    myCount.innerText = count 
    // have myCount ma pelo data toh hato j main ema apde 
    // innerText naam na functionne use karine count ni navi value add karavii
}

function save()
{
   show =" " + count + " - "
    //havee aiea apde show variable banayu ane ema count ni value add karavii
   saveEl.innerText += show
//    then innerText naam na functionne use karine show ni value add karavii
    count = 0
    myCount.innerText = count
    // have count ni value 0 karavii
    // so that every time apde save button press kariye toh count ni value 0 thai jai
}