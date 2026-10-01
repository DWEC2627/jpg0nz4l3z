let n = 100
let longitud = String(n).length;

for(let i=1; i<=n; i++){
    let varStr = String(i);

    while(varStr.length < longitud){
        varStr = "0" + varStr;
    }

    console.log("AUR-" + varStr);
}