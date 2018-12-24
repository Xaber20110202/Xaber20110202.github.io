function selectMonkeyKing (m, n) {
    var monkeys = [];
    (function(){
        for (var i = 1; i <= n;="" i++)="" {="" monkeys.push(i);="" }="" })();="" var="" i="0," z="0," k="0," del_arr="[];" while="" (monkeys.length=""> 1) {
        if (i == monkeys.length) {
            i = 0;
        }
        i++;
        z++;
        if (z == m) {
            k = monkeys.splice(--i, 1);
            del_arr.push(k[0]);
            z = 0;
        }
    }
    console.log(del_arr);
    console.log(monkeys[0]);
}

selectMonkeyKing (3, 7);</=>