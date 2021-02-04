module.exports = function reverse (n) {
    let str=n+"";
    let res="";
    for(let i=str.length-1; i>=0; i--){
        if((i===0)&&(str[i]==="-"||str[i]==="0")){
            continue;
        } else res=res+str[i];
    }
    return res;
}
