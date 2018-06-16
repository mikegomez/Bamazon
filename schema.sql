CREATE DATABASE `bamazon` /*!40100 DEFAULT CHARACTER SET utf8 */;


CREATE TABLE `products` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `price` decimal(10,4) NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  
("Beats headphones", "electronics",	199.9900, 10),
("iHome alarmclock", "electronics",	99.9900, 20),
("Monster energy drink", "food and beverage", 2.1900, 200),
("Computer monitor", "electronics", 149.9900, 15),
("skateboard",	"sports", 59.9900, 20),
("Miracle Morning",	"books", 19.9900, 9),
("Ornaments",	"seasonal",	4.9900,	1),
("Pants",	"mens clothing", 50.0000, 5),
("shirts",	"mens clothing", 30.0000, 1),
("shorts",	"mens clothing", 20.0000, 1);