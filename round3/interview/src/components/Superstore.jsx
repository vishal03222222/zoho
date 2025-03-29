class SuperStore {
    constructor() {
        this.users = [];
        this.inventory = [];
    }
    
    registerUser(name, role) {
        this.users.push({ name, role });
    }
    
    addItem(item) {
        this.inventory.push(item);
    }
    
    listInventory() {
        return this.inventory;
    }
}
const store = new SuperStore();
store.registerUser("Alice", "Buyer");
store.addItem({ name: "Laptop", price: 1000 });
console.log(store.listInventory());

export default SuperStore;