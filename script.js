const h1 = document.querySelector('h1');



function fib(n) {
    if (n==1 || n == 0) return n;

    return fib(n-1) + fib(n - 2 );
}

let n = 7;
for (let i = 0; i < n; i++) {
    document.write(fib(i) + " ");
}



