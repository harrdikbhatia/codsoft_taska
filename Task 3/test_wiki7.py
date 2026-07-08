import urllib.request, json, urllib.parse

def search_commons(query):
    url = f'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json'
    req = urllib.request.Request(url, headers={'User-Agent': 'SavoriaBot/10.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            results = data['query']['search']
            for i, result in enumerate(results[:5]):
                print(f'{i+1}: {result["title"]}')
    except Exception as e:
        print(f'{query}: Error {e}')

search_commons('Paneer tikka')
