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
    
    // Task 2: Create a SalesRep Class

class SalesRep { // creating a salesRep class
    constructor(name) { // properties is name
        this.name = name
        this.clients = []; // client array
    }
    addClient(customer) { // adds a customer to the sales rep client list
        this.clients.push(customer);
    }
    getClientTotal(name) { // finds client by name and returns total
        const client = this.clients.find(customer => customer.name === name);
    return client ? client.getTotalSpent() : 0;
    }
}
// test logging for SalesRep class
const salesRep1 = new SalesRep("Sandy Canes"); // adding new SalesRep  
salesRep1.addClient(customer1);
salesRep1.addClient(customer2);
console.log(`Sales Rep: ${salesRep1.name}, Client Total for Jeigh: $${salesRep1.getClientTotal("Jeigh Ives")}`);
console.log(`Sales Rep: ${salesRep1.name}, Client Total for Alfie: $${salesRep1.getClientTotal("Alfie Adey")}`);

console.log("\nTask 3: Create a VIPCustomer Class (extends Customer)");

// Task 3: Create a VIPCustomer Class (extends Customer)

class VIPCustomer extends Customer { // extending cutomer class to VIP
    constructor(name, email, viplevel) {
        super(name, email); // extending customers properties
        this.vipLevel = this.vipLevel; // viplevel gold, platinum

    }
    getTotalSpent() { // override method
        const originalTotal = super.getTotalSpent();
        return originalTotal * 1.10; // adding 10% bonus
      }
};
const vipCustomer1 = new VIPCustomer("Harley", "harleydavidson@gmail.com", "Gold");
vipCustomer1.addPurchase(682); // purcahse of $682
vipCustomer1.addPurchase(48);// purchase of $48
console.log(`VIP Customer Total Spent: $${vipCustomer1.getTotalSpent().toFixed(2)}`); // output: VIP Customer Total Spent: $803.00

console.log("\nTask 4: Build a Client Report System");

// Task 4: Build a Client Report System

const customers = [
    customer1,
    new Customer("Omni Man", "omniman@yahoo.com"),
    new Customer("Cecil Stedman", "cecilstedman@gmail.com"),
    vipCustomer1,
    new VIPCustomer("Mark Grayson", "mark.grayson100@yahoo.com", "Platinum")
  ];
  
  // add purchases for customers
  customers[1].addPurchase(600); // Omni Man spent $600
  customers[2].addPurchase(450); // Cecil spent $450
  customers[4].addPurchase(700); // Mark spent $700
  
  const salesRep2 = new SalesRep("Bernard Adey");  // assign customers to a sales rep
  customers.forEach(customer => salesRep2.addClient(customer));
  
  const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0); // calculate total revenue from all customers
  console.log(`Total Revenue: $${totalRevenue}`);
  
  const highSpenders = customers.filter(customer => customer.getTotalSpent() > 500); // find customers who spent over $500
  console.log("High Spending Customers:", highSpenders.map(customer => customer.name));
  
  const customerSummary = customers.map(customer => ({ // create a customer summary (name + total spent)
    name: customer.name,
    totalSpent: customer.getTotalSpent()
  }));
  console.log("Customer Summary:", customerSummary);
