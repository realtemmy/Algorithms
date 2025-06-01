# Equations: f(x) = x^3 - 2x - 5, g(x) = x^3-x-7

def bisection_method(func, a, b, tol=1e-5):
    #one of function of a and b must be negative and position
    if func(a) * func(b) >= 0:
        print("Bisection method fails")
        return None
    
    xr = a
    while ((b-a) >= tol):
        # find new middle
        xr = (a+b) / 2
        # check if function of middle point is zero
        if(func(xr) == 0):
            break
        # repeat steps
        if(func(a) * func(xr) < 0):
            b = xr
        else:
            a = xr

    return xr


f = lambda x: x**3 - 2*x - 5
root_f = bisection_method(f, 2, 3);
print(root_f);


