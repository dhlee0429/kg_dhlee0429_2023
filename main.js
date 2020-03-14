/* It was not perfectly clear whether the question was asking about
 * a one-to-one mapping regardless of the order or a way of a substitution cipher
 * due to the lack of examples.
 * i.e., if s1 = aba, s2 = xxz, should it be true? Or should it be false?
 * If we map a-x and b-z, this should be perfectly fine.
 * Therefore by logical inference, I chose to solve this problem for former case.
 */ 

try {
    var s1 = process.argv[2];
    var s2 = process.argv[3];
    
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
} catch (err) {
    console.log("invalid argument");
}