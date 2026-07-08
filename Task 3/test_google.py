import requests
import re
import base64

def get_google_image(query):
    url = f"https://www.google.com/search?q={query.replace(' ', '+')}&tbm=isch"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    r = requests.get(url, headers=headers)
    
    # Try to find a high quality image URL (often stored in JSON-like arrays in the source)
    urls = re.findall(r'\["(https://[^"]+?)",\d+,\d+\]', r.text)
    
    # Filter out favicons, profile pics
    urls = [u for u in urls if "gstatic" not in u and "fbsbx" not in u and "profile" not in u]
    
    if urls:
        print(f"Found URL: {urls[0]}")
        return
    else:
        print("No URLs found. Checking base64...")
        
    b64s = re.findall(r'data:image/(?:jpeg|png);base64,([^"\']+)', r.text)
    if b64s:
        print(f"Found {len(b64s)} base64 images")
    else:
        print("Nothing found.")

get_google_image("Mushroom Risotto food photography shutterstock")
