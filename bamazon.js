var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"newuser1",
    password:"m1234567",
    database:"bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connection successful");
    makeTable();
})

var makeTable = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        for(var i=0; i<res.length; i++) {
            console.log(res[i].item_id+" || "+res[i].product_name+" || "+
        res[i].department_name+" || "+res[i].price+" || "+res[i].stock_quantity+"\n");
        }
        promptCustomer(res);
    })
}

var promptCustomer = function(res) {
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: 'What would you like to purchase?'
        }]).then(function(answer){
            var correct = false;
            for (var i=0;i<res.length;i++){
                if(res[i].product_name==answer.choice){
                    correct=true;
                    var product=answer.choice;
                    var id=i;
                    inquirer.prompt({
                        type: 'input',
                        name: 'quant',
                        message: 'How many would you like to buy?',
                        validate: function(value){
                            if(isNaN(value)==false){
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }).then(function(answer){
                        if((res[id].stock_quantity-answer.quant)>0){
                            connection.query("UPDATE products SET stock_quantity='"+
                            (res[id].stock_quantity-answer.quant)+"' WHERE product_name='"+product+"'",
                        function(err,res2) {
                            console.log("Product Bought!");
                            makeTable();
                        })
                        } else {
                            console.log("Insufficient quantity!");
                            promptCustomer(res);
                        }
                    })
                }
            }
        })
}