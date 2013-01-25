test( "hello snake test", function() {
	console.log('in case test snake');
	ok( 1 == "1", "Passed!" );
});

test( "Get random position", function() {
	var coords = snake.getRandomPosition();
	ok(coords.x >= 0, "x >= 0");
	ok(coords.x < snake.width, "x < " + snake.width);
	ok(coords.y >= 0, "y >=0");
	ok(coords.y < snake.height, "y <" + snake.height);
});

console.log("In snake_tests.js file");