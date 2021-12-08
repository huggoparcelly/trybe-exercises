import math

# class FiguraGeometrica:


class Quadrado:
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado ** 2

    def perimetro(self):
        return self.lado * 4


class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base * 2) + (self.altura * 2)


class Circulo:
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return math.pi() * (self.raio ** 2)

    def perimetro(self):
        return 2 * math.pi() * self.raio
