console.log('Hello world!');
var snake = (function snake() {
	// what is defined here is not visible outside this function

	return {
	// public interface
	// following keys can be accessed with notation snake.key
		width : 100,
		height : 100,
		getRandomPosition : function(){
			return {
				x : Math.floor(this.width)*Math.random(),
				y : Math.floor(this.height)*Math.random()
			}
		}
	}
	
}());