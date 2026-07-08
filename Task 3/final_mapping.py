import re, os

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We only want to map dishes IF their specific .jpg exists. 
# Otherwise, we leave the .png (the hyper-realistic AI one).
def replace_image(match):
    full_block = match.group(0)
    title_match = re.search(r"title:\s*'([^']+)'", full_block)
    if not title_match:
        return full_block
    title = title_match.group(1)
    
    clean_dish = re.sub(r'[^a-zA-Z0-9]', '_', title).lower()
    jpg_path = f'images/{clean_dish}.jpg'
    
    if os.path.exists(jpg_path):
        new_block = re.sub(r"image:\s*'[^']+',", f"image: '{jpg_path}',", full_block)
        return new_block
    return full_block

new_content = re.sub(r"\{\s*id:\s*\d+.*?tags:\s*\[.*?\]\s*\}", replace_image, content, flags=re.DOTALL)
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Mapped correctly!')
