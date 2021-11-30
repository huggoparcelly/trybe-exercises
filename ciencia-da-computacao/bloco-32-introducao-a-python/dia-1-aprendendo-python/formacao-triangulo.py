def verifica_triangulo(a, b, c):
    resposta = ""
    if b - c < a < b + c and a - c < b < a + c and a - b < c < a + b:
        resposta = "Estes seguintemos de reta forma um triângulo "
        if a == b == c:
            resposta += "EQUILÁTERO!"
        elif a == b or b == c or a == c:
            resposta += "ISÓSCELES!"
        elif a != b != c != a:
            resposta += "ESCALENO!"
    else:
        resposta = "Estes seguimentos NÃO formam um triângulo!"

    return resposta


print(verifica_triangulo(2, 4, 5))
