var s1 = process.argv[2];
var s2 = process.argv[3];

console.log(s1);
console.log(s2);
if (s1.length == s2.length) {
    var a = [];
    var b = [];
    
    for (var i = 0; i < s1.length; i++) {
        if (a[s1[i].charCodeAt(0)] == null) {
            a[s1[i].charCodeAt(0)] = 1;
        } else {
            a[s1[i].charCodeAt(0)]++;
        }
        if (b[s2[i].charCodeAt(0)] == null) {
            b[s2[i].charCodeAt(0)] = 1;
        } else {
            b[s2[i].charCodeAt(0)]++;
        }
    }
    
    a.sort();
    b.sort();
    console.log(a);
    console.log(b);
    
    var k = 0;
    var printed = 0;
    while(b[k] != null) {
        if (a[k] > b[k]) {
            console.log("false");
            printed = 1;
            break;
        }
        k++;
    }
    if (printed == 0)
        console.log("true");

} else {
    console.log("false");
}

