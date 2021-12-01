from palavra_embaralhada import scrambled_game


with open("palavras.txt", mode="r") as file:
    scrambled_game(file)
