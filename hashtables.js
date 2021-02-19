class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        let hasFindAExistentKey = false;
        const address = this.hashMethod(key);
        if (!this.data[address]) this.data[address] = [];
        if (this.data[address].filter(element => element[0] === key)) {
            this.data[address].forEach(element => {
                if (element[0] === key) {
                    hasFindAExistentKey = !hasFindAExistentKey;
                    element[1] = value;
                }
            });
        }
        if (!hasFindAExistentKey) this.data[address].push([key, value]);     
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        let currentValue;
        let value;
        if (currentBucket) {
            currentValue = currentBucket.filter(value => value[0] === key);
            value = currentValue[0][1];
        }
        return value;
    }
}
const myHashTable = new HashTable(50);
console.log(myHashTable);
console.log('1', myHashTable.set("Jose", "Oliva"));
console.log('2', myHashTable.set("Jose", "Angela"));
console.log('3', myHashTable.set("Jose", "Ana"));
console.log('4', myHashTable.set("Andres", "Yeraldin"));
console.log('5', myHashTable.set("Diego", "Mariana"));
console.log('6', myHashTable.set("Mariana", "Diego"));
console.log('7', myHashTable.get("Jose"));
console.log('8', myHashTable.get("Mariana"));
