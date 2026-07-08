import urllib.request, json, urllib.parse

def test_search(query):
    encoded = urllib.parse.quote(query)
    url = f'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={encoded}&srnamespace=6&format=json'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            results = data['query']['search']
            if results:
                print(f'{query}: Found {results[0]["title"]}')
            else:
                print(f'{query}: No results')
    except Exception as e:
        print(f'{query}: Error {e}')

test_search('Four Cheese Pizza')
test_search('BBQ Chicken Pizza')
test_search('Blue Cheese Burger')
test_search('Seekh Kebab')
test_search('Truffle Mushroom Pizza')
