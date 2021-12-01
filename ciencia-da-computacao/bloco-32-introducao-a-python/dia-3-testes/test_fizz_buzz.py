import pytest
from fizz_buzz import fizz_buzz


def test_when_n_is_not_a_number():
    n = "a"
    with pytest.raises(TypeError):
        fizz_buzz(n)


# def test_when_n_is_divisible_of_three():

# def test_when_n_is_divisible_of_five():

# def test_when_n_is_divisible_of_three_and_five():
