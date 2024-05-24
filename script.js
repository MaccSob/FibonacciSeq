const h1 = document.querySelector('h1');



function fib(n) {
    if (n==1 || n == 0) return n;

    return fib(n-1) + fib(n - 2 );

}

h1.innerHTML = fib(7);


