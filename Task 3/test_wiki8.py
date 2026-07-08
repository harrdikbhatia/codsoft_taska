import urllib.request, json, urllib.parse

def get_url(title):
    url = f'https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json'
    req = urllib.request.Request(url, headers={'User-Agent': 'SavoriaBot/11.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                info = pages[page_id]['imageinfo'][0]
                print(f'{title}: {info.get("thumburl", info.get("url"))}')
    except Exception as e:
        print(f'{title}: Error {e}')

get_url('File:Paneer Tikka Shashlik PK012.jpg')
get_url('File:Paneer tikka 1.jpg')
