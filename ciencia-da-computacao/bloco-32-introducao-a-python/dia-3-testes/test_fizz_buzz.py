import pytest
from fizz_buzz import fizz_buzz


def test_when_n_is_not_a_number():
    n = "a"
    with pytest.raises(TypeError):
        fizz_buzz(n)


def test_when_n_is_not_divisible_for_three_or_five():
    n = 2
    assert fizz_buzz(n) == [1, 2]


def test_when_n_is_divisible_for_three():
    n = 3
    assert "Fizz" in fizz_buzz(n)


def test_when_n_is_divisible_for_five():
    n = 5
    assert "Buzz" in fizz_buzz(n)


def test_when_n_is_divisible_for_three_and_five():
    n = 15
    assert "FizzBuzz" in fizz_buzz(n)
