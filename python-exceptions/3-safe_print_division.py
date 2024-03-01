#!/usr/bin/python3
def safe_print_division(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Inside result: {}".format(None))
        return None
    except Exception as e:
        print("An error occurred:", e)
        return None
    else:
        print("Inside result: {}".format(result))
        return result
    finally:
        print("Inside finally: {}".format(result))

# Example usage:
# safe_print_division(10, 2)

