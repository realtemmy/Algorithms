# xn = xn-1 - f(xn)/f'(xn)

# Equations: f(x) = x^3 - 2x - 5, g(x) = x^3-x-7

def newton_raphson(x, func, dfx):
    h = func(x) / dfx(x)
    while abs(h) >= 0.0001:
        h = func(x) / dfx(x)
        x = x - h;
    return x

f = lambda x: x**3 - 2*x - 5
derivFunc = lambda x: 3*x*x - 2

root = newton_raphson(2, f, derivFunc);
print(root);




