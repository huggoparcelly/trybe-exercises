import pytest
from phone_number import get_number


def test_when_the_contact_is_empty():
    with pytest.raises(ValueError, match="Contact provided can't be empty"):
        get_number("")


def test_when_the_contact_have_special_character():
    with pytest.raises(
        ValueError, match="Contact provided can't have special characters"
    ):
        get_number("abc-1-*-)-@-drea")


def test_when_the_contact_length_is_more_than_30_characters():
    with pytest.raises(
        ValueError, match="Contact length can't be more then 30 characters"
    ):
        get_number("asd132asd-asdasdd12e0a-asdadasd-asdasd")


def test_when_the_contact_is_ok_with_1():
    assert get_number("1-HOME-SWEET-HOME") == "1-4663-79338-4663"


def test_when_the_contact_is_ok_with_0():
    assert get_number("0-HOME-SWEET-HOME") == "0-4663-79338-4663"


def test_when_the_contact_is_ok_just_letters():
    assert get_number("MY-MISERABLE-JOB") == "69-647372253-562"
