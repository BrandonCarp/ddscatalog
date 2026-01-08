import pytest

from bank import value


def test_zero():
    assert value("hello") == "$0"

def test_h():
    assert value("hey") == "$20"

def test_else():
    assert value("blab") == "$100"
