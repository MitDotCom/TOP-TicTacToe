// Create the 3x3 gameboard in an IIFE

const Gameboard = (function () {
    
    const board = [

        ["","","",],
        ["","","",],
        ["","","",]
    ]

    function getPlayerOneMove(rowCoordinate,columnCoordinate) {

        let playerOneMove = [rowCoordinate,columnCoordinate];

        return playerOneMove;
    }

    function getPlayerTwoMove(rowCoordinate,columnCoordinate) {

        let playerTwoMove = [rowCoordinate,columnCoordinate];

        return playerTwoMove;
    }

    // Add an update board method?
    return {board, getPlayerOneMove, getPlayerTwoMove};
})();

// Create Player1 IIFE

const Player1 = (function () {

    const symbol = "X";

    function makeMove() {

        let rowCoordinate = prompt("Please enter the row number you want your move to be in (1,2,3)");

        let columnCoordinate prompt("Please enter the row number you want your move to be in (1,2,3)");
        
    }

    return {};
})();

// Create Player2 IIFE

const Player2 = (function () {

    const symbol = "O";

    
})();

// Create playRound function



// Create checkWin function