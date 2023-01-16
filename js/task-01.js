

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
    const title = element.firstElementChild.textContent;
    const categoryQuantity = element.lastElementChild.children.length;

    return console.log(
        `Category: ${title} Elements: ${categoryQuantity}`
    );
});


