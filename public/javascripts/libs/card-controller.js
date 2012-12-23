function cardController($scope, $http) {
	var cards;
	var index;
	var taken_cards = [];
    $scope.score = 0;
    
    var Game = function(Cards) {
    	var Teams = [];
    	var taken_cards = []
    	
    	this.take_card = function(index) {
    		taken_cards.push(index);	
    		
    	}
    	
    	this.addPlayer = function(player, team) {
    		Teams[team].addPlayer(player);		
    	}
    };
	
	var getCard = function(index) {
	 	return cards[index];
	}
		
	$http.get('card').success(function(data) {
		cards = data;
		index = Math.round(Math.random() * cards.length);
		taken_cards.push(index);
		$scope.card = cards[index];
	});
	
	$scope.next = function() {
		index = Math.round(Math.random() * cards.length);
		while(taken_cards.indexOf(index) !== -1) {
			index++;	
		}
		
		taken_cards.push(index);		 
		$scope.card = cards[index];
			
	}

    $scope.correct = function() {
      $scope.next();
      $scope.score++;
    }
	
}
  
