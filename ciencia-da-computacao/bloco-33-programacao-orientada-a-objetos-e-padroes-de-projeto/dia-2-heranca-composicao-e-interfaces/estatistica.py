import statistics


class Estatistica:
    def __init__(self, numeros):
        self.numeros = numeros

    def calcula_media(self):
        return statistics.mean(self.numeros)

    def calcula_mediana(self):
        return statistics.median(self.numeros)

    def calcula_moda(self):
        return statistics.mode(self.numeros)


if __name__ == "__main__":
    meus_numeros = [5, 2, 5, 4, 5, 8, 9, 1, 6, 5, 4, 1, 2]
    minha_estatistica = Estatistica(meus_numeros)

    media = minha_estatistica.calcula_media()
    print(f"Media: {media}")

    mediana = minha_estatistica.calcula_mediana()
    print(f"Mediana: {mediana}")

    moda = minha_estatistica.calcula_moda()
    print(f"Moda: {moda}")
