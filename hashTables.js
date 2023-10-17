// ****HASH TABLES*****

//EXAMPLE:

function hash(key, arrayLen) {
    let total = 0;
    for(let char of key) {
        // map "a" to 1, "b" to 2,  "c" to 3, etc..
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}

console.log("HASH")
console.log(hash("pink", 10));
console.log(hash("cyan", 10));
console.log(hash("red", 10));
console.log(hash("blue", 10));

//HASH revisited

function reHash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log("REHASH")
console.log(reHash("pink", 10));
console.log(reHash("cyan", 10));
console.log(reHash("red", 10));
console.log(reHash("blue", 10));

//HashTable Class

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    //SET: Accepts a key and a value. Hashes the key. 
    //Stores the key-value pair in the hash table array via seperate chaining

    //GET: Accepts a key. Hashes the key. Retrieves the key-value pair in the has table. If the key isn't found,
    //returns undefined.
}