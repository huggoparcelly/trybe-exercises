def combustivel(litros, tipo_combustivel):
    total_pagar = 0
    valor_alcool = 1.90
    valor_gasolina = 2.50
    if tipo_combustivel == 'A':
        if litros <= 20:
            total_pagar = valor_alcool * litros * 0.97
        else:
            total_pagar = valor_alcool * litros * 0.95
    elif tipo_combustivel == 'G':
        if litros <= 20:
            total_pagar = valor_gasolina * litros * 0.96
        else:
            total_pagar = valor_gasolina * litros * 0.94

    return total_pagar


print(combustivel(50, 'G'))