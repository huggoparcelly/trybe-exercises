def maior_nome(lista_nomes):
    maior = lista_nomes[0]
    
    for nome in lista_nomes:
        count = 0
        for letras in nome:
            count += 1
        if count > len(maior):
            maior = nome

    return maior


nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

print(maior_nome(nomes))