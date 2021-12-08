class Tv:
    def __init__(self, tamanho):
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = False

    def aumentar_volume(self):
        if self.volume <= 99:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume >= 0:
            self.volume -= 1

    def modificar_canal(self, canal):
        if not 1 <= canal <= 99:
            raise ValueError
        else:
            self.canal = canal

    def ligar_desligar(self, on_off):
        self.ligada = on_off


if __name__ == "__main__":
    minha_tv = Tv(40)
    minha_tv.ligar_desligar(True)
    print(minha_tv.ligada)
    print(minha_tv.volume)
    minha_tv.aumentar_volume()
    print(minha_tv.volume)
