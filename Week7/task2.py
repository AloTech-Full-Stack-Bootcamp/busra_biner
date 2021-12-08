def my_awesome_decorator(fun) :
    def wrapped(*args):
        new_numbers = []
        for i in args:
            new_numbers.append(i + 1)
        return not fun(*new_numbers)
    return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
    for i in numbers:
        if i % 3 != 0:
            return False
    return True

""" print(mod_batch(2, 8, 20)) """
""" print(mod_batch(3, 9, 21)) """

