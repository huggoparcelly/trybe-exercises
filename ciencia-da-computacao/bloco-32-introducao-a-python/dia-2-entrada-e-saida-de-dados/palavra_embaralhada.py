import random

WORDS = ["cortador", "origame", "papel"]


def scrambled_game(words):
    random_word = random.choice(WORDS)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))

    print(scrambled_word)
    player_word = input("Qual é a palavra? ")

    if player_word.lower() in WORDS:
        print("Parabéns, você acertou!")
    else:
        print("Poxa, não foi dessa vez...")


if __name__ == "__main__":
    scrambled_game(WORDS)
