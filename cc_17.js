console.log("Task 1: Create a Customer Class");

// Task 1: Create a Customer Class

class Customer { // creating a customer class
    constructor(name, email) { // properties name and email
        this.name = name;
        this.email = email;
        this.purchaseHistory = []; // purchaseHistory property array
    }
    addPurchase(amount) { // adds purchase amount
        this.purchaseHistory.push(amount);
      }

      getTotalSpent() { // caluclating total amount spent
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
      }
    }
    
    // test logging for Customer class
    const customer1 = new Customer("Jeigh Ives", "jeighivess@icloud.com"); // new customer Jeigh Ives
    const customer2 = new Customer("Alfie Adey", "AlfAdey200@gmail.com") // new customer Alfie Adey
    customer1.addPurchase(200.75);
    customer1.addPurchase(150);
    customer2.addPurchase(768);
    customer2.addPurchase(13.50);
    console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`);
    console.log(`Customer: ${customer2.name}, Total Spent: $${customer2.getTotalSpent()}`);

    console.log("\nTask 2: Create a SalesRep Class");
    
    