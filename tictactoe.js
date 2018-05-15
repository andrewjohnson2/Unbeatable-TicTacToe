const NUM_BOXES = 9;

$(function () {

    var board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //0 = empty, X(user), O(computer)
    var numBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    var isGameOver = false;

    var start = false;

    $(".reset").click(function () {
        resetGame();
        runStart();
    });

    $(".easy").click(function () {
        $(".medium").prop('checked', false);
        $(".hard").prop('checked', false);
        $(".easy").prop('checked', true);
        hard = false;
        medium = false;
        resetGame();
        runStart();
    });

    $(".medium").click(function () {
        $(".medium").prop('checked', true);
        $(".hard").prop('checked', false);
        $(".easy").prop('checked', false);
        hard = false;
        medium = true;
        resetGame();
        runStart();
    });

    $(".hard").click(function () {

        $(".medium").prop('checked', false);
        $(".hard").prop('checked', true);
        $(".easy").prop('checked', false);
        hard = true;
        medium = true;
        resetGame();
        runStart();
    });

    $(".cpuFirst").click(function () {
        resetGame();
        runStart();
    });


    var hard = true;
    var medium = true;





    $('.computerWins').hide();
    $('.humanWins').hide();
    $('.tieGame').hide();

    $('#box0').click(function () {

        runMove(0);
    });

    $('#box1').click(function () {
        runMove(1);
    });

    $('#box2').click(function () {
        runMove(2);
    });

    $('#box3').click(function () {
        runMove(3);
    });

    $('#box4').click(function () {
        runMove(4);
    });

    $('#box5').click(function () {
        runMove(5);
    });

    $('#box6').click(function () {
        runMove(6);
    });

    $('#box7').click(function () {
        runMove(7);
    });

    $('#box8').click(function () {
        runMove(8);
    });


    function resetGame() {
        var x;
        for (x = 0; x < NUM_BOXES; x++) {
            board[x] = 0;
        }
        isGameOver = false;
        updateNumBoard();
        updateUI();
        hideOutcomes();
    }


    function runStart() {
        if ($(".cpuFirst").is(':checked')) {
            makeMove(0);
            updateNumBoard();
            updateUI();
        }
        start = true;
    }

    function hideOutcomes() {
        $(".computerWins").hide();
        $(".humanWins").hide();
        $(".tieGame").hide();
    }

    function runMove(move) {
        if (isGameOver == true) {
            return;
        }
        if (board[move] != "") {
            return;
        }
        processUserMove(move);

        if (gameOver()) {
            updateUI();
            isGameOver = true;
            return;
        }
        if (tie()) {
            updateUI();
            isGameOver = true;
            return;
        }
        makeMove(move);
        updateUI();
        updateNumBoard();
        // console.log(board);
        // console.log(numBoard);
        if (gameOver()) {
            isGameOver = true;
            return;
        }
        if (tie()) {
            isGameOver = true;

        }

    }

    function tie() {
        var x;
        console.log(board);
        for (x = 0; x < NUM_BOXES; ++x) {
            if (board[x] == 0) {
                return false;
            }
        }
        $(".tieGame").show();
        var value = Number($(".ties").html());
        $(".ties").html(value + 1);
        return true;
    }

    function sumTo(i1, i2, i3, sum) {
        return (numBoard[i1] + numBoard[i2] + numBoard[i3]) == sum;
    }

    function gameOver() {
        if (sumTo(0, 3, 6, 3)) {
            $(".humanWins").show();
            var value = Number($(".losses").html());
            $(".losses").html(value + 1);
            return true;
        }
        if (sumTo(0, 3, 6, 12)) {
            $(".computerWins").show();
            var value = Number($(".wins").html());
            $(".wins").html(value + 1);
            return true;
        }
        if (sumTo(1, 4, 7, 3)) {
            $(".humanWins").show();
            var value = Number($(".losses").html());
            $(".losses").html(value + 1);
            return true;
        }
        if (sumTo(1, 4, 7, 12)) {
            $(".computerWins").show();
            var value = Number($(".wins").html());
            $(".wins").html(value + 1);
            return true;
        }
        if (sumTo(2, 5, 8, 3)) {
            $(".humanWins").show();
            var value = Number($(".losses").html());
            $(".losses").html(value + 1);
            return true;
        }
        if (sumTo(2, 5, 8, 12)) {
            $(".computerWins").show();
            var value = Number($(".wins").html());
            $(".wins").html(value + 1);
            return true;
        }
        if (sumTo(0, 1, 2, 3)) {
            $(".humanWins").show();
            var value = Number($(".losses").html());
            $(".losses").html(value + 1);
            return true;
        }
        if (sumTo(0, 1, 2, 12)) {
            $(".computerWins").show();
            var value = Number($(".wins").html());
            $(".wins").html(value + 1);
            return true;
        }
        if (sumTo(3, 4, 5, 3)) {
            $(".humanWins").show();
            var value = Number($(".losses").html());
            $(".losses").html(value + 1);
            return true;
        }
        if (sumTo(3, 4, 5, 12)) {
            $(".computerWins").show();
            var value = Number($(".wins").html());
            $(".wins").html(value + 1);
            return true;
        }
        if (sumTo(6, 7, 8, 3)) {
            $(".humanWins").show();
            var value = Number($(".losses").html());
            $(".losses").html(value + 1);
            return true;
        }
        if (sumTo(6, 7, 8, 12)) {
            $(".computerWins").show();
            var value = Number($(".wins").html());
            $(".wins").html(value + 1);
            return true;
        }
        if (sumTo(0, 4, 8, 3)) {
            $(".humanWins").show();
            var value = Number($(".losses").html());
            $(".losses").html(value + 1);
            return true;
        }
        if (sumTo(0, 4, 8, 12)) {
            $(".computerWins").show();
            var value = Number($(".wins").html());
            $(".wins").html(value + 1);
            return true;
        }
        if (sumTo(2, 4, 6, 3)) {
            $(".humanWins").show();
            var value = Number($(".losses").html());
            $(".losses").html(value + 1);
            return true;
        }
        if (sumTo(2, 4, 6, 12)) {
            $(".computerWins").show();
            var value = Number($(".wins").html());
            $(".wins").html(value + 1);
            return true;
        }
        return false;
    }

    function processUserMove(move) {
        board[move] = "X";
        updateNumBoard();
    }

    function updateNumBoard() {
        var x;
        for (x = 0; x < NUM_BOXES; x++) {
            if (board[x] == "X") {
                numBoard[x] = 1;
            } else if (board[x] == "O") {
                numBoard[x] = 4;
            } else {
                numBoard[x] = 0;
            }
        }
    }

    function makeMove(lastMove) {
        if (attemptToWin()) {
            return;
        }
        if (blockUserWin()) {
            return;
        }
        if (medium && attemptToFork()) {
            console.log("atf");
            return;
        }
        if (hard && blockUserFork()) {
            return;
        }
        if (hard && playCenter()) {
            return;
        }
        if (medium && playCorner(lastMove)) {
            console.log("corner last");
            return;
        }
        if (medium && playCorner2()) {
            console.log("corner");
            return;
        }
        if (playSides()) {

        } else {
            console.log("last");
            chooseNext();

        }
    }

    function playSides() {
        if (board[1] == 0) {
            board[1] = "O";
            return true;
        }
        if (board[3] == 0) {
            board[3] = "O";
            return true;
        }
        if (board[5] == 0) {
            board[5] = "O";
            return true;
        }
        if (board[7] == 0) {
            board[7] = "O";
            return true;
        }
        return false;
    }

    function playCorner2() {
        if (board[0] == 0) {
            board[0] = "O";
            return true;
        }
        if (board[2] == 0) {
            board[2] = "O";
            return true;
        }
        if (board[6] == 0) {
            board[6] = "O";
            return true;
        }
        if (board[8] == 0) {
            board[8] = "O";
            return true;
        }
        return false;
    }

    function playCorner(lastMove) {
        if (lastMove == 0 && board[8] == 0) {
            board[8] = "O";
            return true;
        }
        if (lastMove == 2 && board[6] == 0) {
            board[6] = "O";
            return true;
        }
        if (lastMove == 6 && board[2] == 0) {
            board[2] = "O";
            return true;
        }
        if (lastMove == 8 && board[0] == 0) {
            board[0] = "O";
            return true;
        }
        return false;
    }

    function playCenter() {
        if (board[4] == 0) {
            board[4] = "O";
            return true;
        }
        return false;

    }

    function chooseNext() {
        var x;
        for (x = 0; x < NUM_BOXES; ++x) {
            if (numBoard[x] == 0) {
                board[x] = "O";
                return;
            }
        }
    }

    function blockUserFork() {
        return fork(1);
    }

    function attemptToFork() {
        return fork(4);
    }

    function fork(square) {
        var x;
        for (x = 0; x < NUM_BOXES; x++) {
            if (numBoard[x] == 0) {
                numBoard[x] = square;
                if (!createsFork(square * 2, x)) {
                    numBoard[x] = 0;
                } else {
                    board[x] = "O";
                    return true;
                }
            }
        }
        return false;
    }

    function createsFork(value, x) {
        var count = 0;
        if (x == 0) {
            if (sumTo(0, 1, 2, value)) count += 1;
            if (sumTo(0, 3, 6, value)) count += 1;
            if (sumTo(0, 4, 8, value)) count += 1;
            if (count > 1) return true;
        }
        if (x == 1) {
            if (sumTo(0, 1, 2, value)) count += 1;
            if (sumTo(1, 4, 7, value)) count += 1;
            if (count > 1) return true;
        }
        if (x == 2) {
            if (sumTo(0, 1, 2, value)) count += 1;
            if (sumTo(2, 5, 8, value)) count += 1;
            if (sumTo(2, 4, 6, value)) count += 1;
            if (count > 1) return true;
        }
        if (x == 3) {
            if (sumTo(3, 4, 5, value)) count += 1;
            if (sumTo(0, 3, 6, value)) count += 1;
            if (count > 1) return true;
        }
        if (x == 4) {
            if (sumTo(3, 4, 5, value)) count += 1;
            if (sumTo(1, 4, 7, value)) count += 1;
            if (sumTo(0, 4, 8, value)) count += 1;
            if (sumTo(2, 4, 6, value)) count += 1;
            if (count > 1) return true;
        }
        if (x == 5) {
            if (sumTo(3, 4, 5, value)) count += 1;
            if (sumTo(2, 5, 8, value)) count += 1;
            if (count > 1) return true;
        }
        if (x == 6) {
            if (sumTo(6, 7, 8, value)) count += 1;
            if (sumTo(0, 3, 6, value)) count += 1;
            if (sumTo(2, 4, 6, value)) count += 1;
            if (count > 1) return true;
        }
        if (x == 7) {
            if (sumTo(6, 7, 8, value)) count += 1;
            if (sumTo(1, 4, 7, value)) count += 1;
            if (count > 1) return true;
        }
        if (x == 8) {
            if (sumTo(6, 7, 8, value)) count += 1;
            if (sumTo(2, 5, 8, value)) count += 1;
            if (sumTo(0, 4, 8, value)) count += 1;
            if (count > 1) return true;
        }
    }

    function updateSpots(i1, i2, i3, char) {
        board[i1] = char;
        board[i2] = char;
        board[i3] = char;
    }

    function attemptToWin() {
        if ((numBoard[0] + numBoard[3] + numBoard[6]) == 8) {
            updateSpots(0, 3, 6, "O");
            return true;
        }
        if ((numBoard[1] + numBoard[4] + numBoard[7]) == 8) {
            updateSpots(1, 4, 7, "O");
            return true;
        }
        if ((numBoard[2] + numBoard[5] + numBoard[8]) == 8) {
            updateSpots(2, 5, 8, "O");
            return true;
        }
        if ((numBoard[0] + numBoard[1] + numBoard[2]) == 8) {
            updateSpots(0, 1, 2, "O");
            return true;
        }
        if ((numBoard[3] + numBoard[4] + numBoard[5]) == 8) {
            updateSpots(3, 4, 5, "O");
            return true;
        }
        if ((numBoard[6] + numBoard[7] + numBoard[8]) == 8) {
            updateSpots(6, 7, 8, "O");
            return true;
        }
        if ((numBoard[0] + numBoard[4] + numBoard[8]) == 8) {
            updateSpots(0, 4, 8, "O");
            return true;
        }
        if ((numBoard[2] + numBoard[4] + numBoard[6]) == 8) {
            updateSpots(2, 4, 6, "O");
            return true;
        }
        return false;
    }

    function determineWhatToUpdate(i1, i2, i3) {
        if (numBoard[i1] == 0) board[i1] = "O";
        else if (numBoard[i2] == 0) board[i2] = "O";
        else board[i3] = "O";
    }

    function blockUserWin() {
        if ((numBoard[0] + numBoard[3] + numBoard[6]) == 2) {
            determineWhatToUpdate(0, 3, 6);
            return true;
        }
        if ((numBoard[1] + numBoard[4] + numBoard[7]) == 2) {
            determineWhatToUpdate(1, 4, 7);
            return true;
        }
        if ((numBoard[2] + numBoard[5] + numBoard[8]) == 2) {
            determineWhatToUpdate(2, 5, 8);
            return true;
        }
        if ((numBoard[0] + numBoard[1] + numBoard[2]) == 2) {
            determineWhatToUpdate(0, 1, 2);
            return true;
        }
        if ((numBoard[3] + numBoard[4] + numBoard[5]) == 2) {
            determineWhatToUpdate(3, 4, 5);
            return true;
        }
        if ((numBoard[6] + numBoard[7] + numBoard[8]) == 2) {
            determineWhatToUpdate(6, 7, 8);
            return true;
        }
        if ((numBoard[0] + numBoard[4] + numBoard[8]) == 2) {
            determineWhatToUpdate(0, 4, 8);
            return true;
        }
        if ((numBoard[2] + numBoard[4] + numBoard[6]) == 2) {
            determineWhatToUpdate(2, 4, 6);
            return true;
        }
        return false;
    }

    function updateUI() {
        var x;
        for (x = 0; x < NUM_BOXES; x++) {
            if (board[x] != 0)
                $("#box" + x + "").val(board[x]);
            if (board[x] == 0) {
                $("#box" + x + "").val("");
            }
        }
    }



});
