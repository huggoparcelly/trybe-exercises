import math


def latas_tinta(tamanho_parede):
    cobertura_lata = 18 * 3
    custo_lata = 80

    metros_para_pintar = math.sqrt(tamanho_parede)
    quantidade_lata = metros_para_pintar / cobertura_lata
    preco_total = quantidade_lata * custo_lata

    return (quantidade_lata, preco_total)


print(latas_tinta(3000))
