function solve() {
    let sumPrice = 0;

    let inputs = document.querySelectorAll('#add-new input');
    let buttonAdd = document.querySelector('#add-new button');
    let productsList = document.querySelector('#products ul');
    let filterInput = document.querySelector('#filter');
    let buttonFilter = document.querySelector('#products button');
    let myProductsList = document.querySelector('#myProducts ul');
    let totalPrice = document.querySelectorAll('h1')[1];
    let buttonBuy = document.querySelector('#myProducts button');

    buttonAdd.addEventListener('click', addItemToProductsList());
    buttonFilter.addEventListener('click', filterItemsInProductsList());
    productsList.addEventListener('click', addProductToMyBasket());
    buttonBuy.addEventListener('click', buyProducts());

    function addItemToProductsList() {
        return (e) => {
            e.preventDefault();

            let li = document.createElement('li');

            let spanForName = document.createElement('span');
            spanForName.innerHTML = inputs[0].value;

            let strongForQuantity = document.createElement('strong');
            strongForQuantity.innerHTML = `Available: ${Number(inputs[1].value)}`;

            li.appendChild(spanForName);
            li.appendChild(strongForQuantity);

            let divForPriceAndButton = document.createElement('div');

            let strongForPrice = document.createElement('strong');
            strongForPrice.innerHTML = Number(inputs[2].value).toFixed(2);

            let buttonClient = document.createElement('button');
            buttonClient.innerHTML = `Add to Client's List`;

            divForPriceAndButton.appendChild(strongForPrice);
            divForPriceAndButton.appendChild(buttonClient);

            li.appendChild(divForPriceAndButton);
            productsList.appendChild(li);

            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';
        };
    }

    function filterItemsInProductsList() {
        return (e) => {
            let filterValue = filterInput.value;
            let productNames = Array.from(productsList.querySelectorAll('li span'));

            for (const prod of productNames) {
                if (prod.innerHTML.includes(filterValue)) {
                    prod.parentElement.style.display = 'block';
                } else {
                    prod.parentElement.style.display = 'none';
                }
            }

            if (filterValue === '') {
                productNames.forEach(x => x.parentElement.style.display = 'block');
            }
        };
    }

    function addProductToMyBasket() {
        return (e) => {
            if (e.target.tagName === 'BUTTON') {
                let productName = e.target.parentNode.parentNode.querySelector('span').textContent;
                let productPrice = e.target.parentNode.querySelector('strong').textContent;
                let productQuantity = e.target.parentNode.parentNode.querySelector('strong');
                let quantity = productQuantity.textContent.split(' ');

                if (Number(quantity[1])) {
                    productQuantity.innerHTML = `Available: ${Number(quantity[1]) - 1}`;

                    if (Number(quantity[1]) === 1) {
                        productsList.removeChild(e.target.parentElement.parentElement);
                    }
                }

                let basketElement = document.createElement('li');
                basketElement.innerText = productName;

                let basketProductPrice = document.createElement('strong');
                basketProductPrice.innerText = productPrice;

                myProductsList.appendChild(basketElement);
                basketElement.appendChild(basketProductPrice);
                totalPrice.innerHTML = `Total Price: ${(sumPrice + Number(productPrice)).toFixed(2)}`;
                sumPrice += Number(productPrice);
            }
        };
    }

    function buyProducts() {
        return () => {
            sumPrice = 0;
            myProductsList.textContent = '';
            totalPrice.textContent = `Total Price: ${(sumPrice).toFixed(2)}`;
        };
    }
}