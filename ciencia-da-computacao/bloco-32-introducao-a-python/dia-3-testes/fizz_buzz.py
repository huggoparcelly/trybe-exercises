def fizz_buzz(n):
    lista = []
    for num in range(1, n + 1):
        if num % 3 == 0 and num % 5 == 0:
            lista.append("FizzBuzz")
        elif num % 3 == 0:
            lista.append("Fizz")
        elif num % 5 == 0:
            lista.append("Buzz")
        else:
            lista.append(num)

    return lista
