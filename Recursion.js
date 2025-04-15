function fib(number) {
    let resultArray = [0, 1];

    function fetchNumbers(n = 0, m = 1) {
        if (resultArray.length === number) {
            return;
        }

        sum = n + m;
        resultArray.push(sum);
        return fetchNumbers(m, sum);
    }

    fetchNumbers();
    console.log(resultArray);
}

// Activate the function by inserting a number the parenthesis for the function fib
// fib(10); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34