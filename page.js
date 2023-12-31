document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fetchData').addEventListener('click', function () {
        fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
            .then(response => response.json())
            .then(data => {
                if ('products' in data) {
                    const sortedProducts = Object.values(data.products).sort((a, b) => parseInt(b.popularity) - parseInt(a.popularity));
                    let productListHTML = "<h2>Product List</h2><table><tr><th>Subcategory</th><th>Title</th><th>Price</th><th>Popularity</th></tr>";

                    sortedProducts.forEach(product => {
                        productListHTML += `<tr><td>${product.subcategory}</td><td>${product.title}</td><td>${product.price}</td><td>${product.popularity}</td></tr>`;
                    });

                    productListHTML += "</table>";
                    document.getElementById('productList').innerHTML = productListHTML;
                } else {
                    console.log("'products' key not found!!");
                }
            })
            .catch(error => console.error('Error:', error));
    });
});
