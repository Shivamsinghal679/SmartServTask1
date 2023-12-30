import requests

url = "https://s3.amazonaws.com/open-to-cors/assignment.json"

response = requests.get(url)
response.raise_for_status()  

data = response.json()

if 'products' in data:
    sorted_products = sorted(data['products'].values(), key=lambda x: int(x['popularity']), reverse=True)
    print("{:<20} {:<50} {:<10} {:<10}".format("Subcategory", "Title", "Price", "Popularity"))
    print("="*100)

    for product in sorted_products:
        print("{:<20} {:<50} {:<10} {:<10}".format(
            product['subcategory'],
            product['title'],
            product['price'],
            product['popularity']
        ))
else:
    print("'products' key not found!!")
