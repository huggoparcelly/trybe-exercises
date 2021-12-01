from palavra_embaralhada import scrambled_game


with open("palavras.txt", mode="r") as file:
    lista = []
    for word in file:
        lista.append(word.replace('\n', ''))
    scrambled_game(lista)
