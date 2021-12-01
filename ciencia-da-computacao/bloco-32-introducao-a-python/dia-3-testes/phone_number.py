# contacts = ["1-HOME-SWEET-HOME", "MY-MISERABLE-JOB"]
import json


def exchage_letter_to_number(word):
    number = ""
    for char in word:
        if not char.isalpha():
            number += str(char)
        elif char in "ABC":
            number += "2"
        elif char in "DEF":
            number += "3"
        elif char in "GHI":
            number += "4"
        elif char in "JKL":
            number += "5"
        elif char in "MNO":
            number += "6"
        elif char in "PQRS":
            number += "7"
        elif char in "TUV":
            number += "8"
        elif char in "WXYZ":
            number += "9"

    return number


def get_number(filepath):
    # Abrir o arquivo
    number_list = ""
    with open(filepath) as file:
        contacts = json.load(file)

        for contact in contacts:
            number_list += exchage_letter_to_number(contact.upper()) + "\n"

    return number_list[:-1]  # [:-1] remove o último caracter da string (\n)


print(get_number("contact.json"))
