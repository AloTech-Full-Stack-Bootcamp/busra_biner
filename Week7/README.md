
# WEEK 7

## Task : 1

Parametre olarak verilen l rakamdan oluşan, yine parametre olarak verilen n adet rastgele sayı üreten bir generator.
* Daha önce üretilen bir sayı tekrar üretilmesin.
(Fonksiyonun signature'ı: random_number_generator(n, l=6))

## Task : 2

Aşağıda tanımlı fonksiyonla birlikte kullanıldığında,  
* aldığı tüm sayı parametrelerinin değerini 1 arttıracak,  
* boolean dönüş değerini tersine çevirecek (True dönüyor ise False, False dönüyor ise True olacak şekilde) bir decorator

```
def my_awesome_decorator(fun):
  def wrapped(*args):
    return fun(*args)
  return wrapped

@my_awesome_decorator
def mod_batch(*numbers):

  """
  Parametre olarak verilen tüm sayıların 3 ile tam bölünebilir olup olmadığını kontrol eder.
  
        >>> mod_batch(1, 2, 3)
        False
        >>> mod_batch(3, 9, 21)
        True

  """
  return all([True for number in numbers if number % 3 == 0])

```