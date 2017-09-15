class Trip:
    def __init__(self, fromCity, toCity):
        if not fromCity or not toCity:
            raise Exception("Invalid input for trip.")

        self.fromCity = fromCity
        self.toCity = toCity

    def display(self):
        return "%s -> %s" % (self.fromCity, self.toCity)
