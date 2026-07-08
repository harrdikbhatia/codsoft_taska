import urllib.request, json, urllib.parse

def search_wiki(query):
    url = f'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=original&titles={urllib.parse.quote(query)}&format=json'
    req = urllib.request.Request(url, headers={'User-Agent': 'SavoriaBot/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                if 'original' in pages[page_id]:
                    print(f'{query}: {pages[page_id]["original"]["source"]}')
                else:
                    print(f'{query}: No image')
    except Exception as e:
        print(f'{query}: Error {e}')

search_wiki('Stuffed mushrooms')
search_wiki('Neapolitan pizza')
search_wiki('Mushroom tikka')
search_wiki('Pizza Margherita')
