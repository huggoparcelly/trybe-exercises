def exchage_letter_to_number(word):
    number = ""
    for char in word:
        if not char.isalnum() and not char == "-":
            raise ValueError("Contact provided can't have special characters")
        if char in "01-":
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


def get_number(contacts):
    numbers = ""

    if not contacts:
        raise ValueError("Contact provided can't be empty")
    if len(contacts) > 30:
        raise ValueError("Contact length can't be more then 30 characters")
    for contact in contacts:
        numbers += exchage_letter_to_number(contact.upper())

    return numbers
