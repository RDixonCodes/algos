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
    constructor(size = 17) {
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

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    //GET: Accepts a key. Hashes the key. Retrieves the key-value pair in the has table. If the key isn't found,
    //returns undefined.

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0]  === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }
    //KEYS: Loops through the hash table array and returns an array of keys in the table
    values() {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    //filter out duplicate values
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
    //VALUES: Loops through the hash table array and returns an array of values in the table
    keys() {
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    //filter out duplicate keys
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable();
// console.log(ht.set("hello world", "goodbye!"));
// console.log(ht.set("dogs", "are cool"));
// console.log(ht.set("cats", "are fine"));

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

console.log(ht.get("olive"))
console.log(ht.get("plum"))
console.log(ht.values())
console.log(ht.keys())

console.log("function")
ht.keys().forEach(function(key) {
    console.log(ht.get(key));
})