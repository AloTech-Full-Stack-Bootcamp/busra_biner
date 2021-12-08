import random

def random_number_generator(n,l):

    numbers = set()

    while len(numbers) < n:
        number = (random.randint(10**(l-1), 10**(l)-1))
        if number not in numbers:
            numbers.add(number)
            yield number
   
print(set(random_number_generator(3, 6)))
    










   

