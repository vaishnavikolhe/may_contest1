const btn1 = document.getElementById("btn");
const heading = document.getElementById("heading");
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");

function PromiseAPI1(data) {
    heading.style.display = "none"
    console.log(data)
    const tablebody = document.getElementById("table-body1")
    table1.style.display = "block"
    data.forEach((element) => {
        const tr = document.createElement('tr')
        const idtd = document.createElement('td')
        const useridtd = document.createElement('td')
        const titletd = document.createElement('td')
        const bodytd = document.createElement('td')
        const tagstd = document.createElement('td')
        const reactiontd = document.createElement('td')
        idtd.innerText = element.id;
        tr.appendChild(idtd)
        useridtd.innerText = element.userId;
        tr.appendChild(useridtd)
        titletd.innerText = element.title;
        tr.appendChild(titletd)
        bodytd.innerText = element.body;
        tr.appendChild(bodytd)
        tagstd.innerText = element.tags;
        tr.appendChild(tagstd)
        reactiontd.innerText = element.reactions;
        tr.appendChild(reactiontd)
        tablebody.appendChild(tr);
    })

}

function PromiseAPI2(data) {
    table1.style.display = "none"
    console.log(data)
    const tablebody = document.getElementById("table-body2")
    table2.style.display = "block"
    data.forEach((element) => {
        const tr = document.createElement('tr')
        const idtd = document.createElement('td')
        const titletd = document.createElement('td')
        const desctd = document.createElement('td')
        const pricetd = document.createElement('td')
        const discounttd = document.createElement('td')
        const ratingtd = document.createElement('td')
        const stocktd = document.createElement('td')
        const brandtd = document.createElement('td')
        const categorytd = document.createElement('td')
        const thumbnailtd = document.createElement('td')
        const imagestd = document.createElement('td')
        const timg = document.createElement('img');
        const tspan = document.createElement('span');
        idtd.innerText = element.id;
        tr.appendChild(idtd)
        titletd.innerText = element.title;
        tr.appendChild(titletd)
        desctd.innerText = element.description;
        tr.appendChild(desctd)
        pricetd.innerText = element.price;
        tr.appendChild(pricetd)
        discounttd.innerText = element.discountPercentage;
        tr.appendChild(discounttd)
        ratingtd.innerText = element.rating;
        tr.appendChild(ratingtd)
        stocktd.innerText = element.stock;
        tr.appendChild(stocktd)
        brandtd.innerText = element.brand;
        tr.appendChild(brandtd)
        categorytd.innerText = element.category;
        tr.appendChild(categorytd)
        timg.src = element.thumbnail;
        timg.id = "timage";
        tspan.appendChild(timg)
        thumbnailtd.appendChild(tspan)
        tr.appendChild(thumbnailtd)
        element.images.forEach((element) => {
            const imgg = document.createElement('img');
            imgg.src = element;
            imgg.id = "imgs"
            imagestd.appendChild(imgg)
        })
        imagestd.id = "imgTd";
        tr.appendChild(imagestd)
        tablebody.appendChild(tr);
    })
}

function PromiseAPI3(data) {
    table2.style.display = "none";
    console.log(data)
    const tablebody = document.getElementById("table-body3")
    table3.style.display = "block"
    data.forEach((element) => {
        const tr = document.createElement('tr')
        const idtd = document.createElement('td')
        const useridtd = document.createElement('td')
        const todotd = document.createElement('td')
        const completetd = document.createElement('td')
        idtd.innerText = element.id;
        tr.appendChild(idtd)
        useridtd.innerText = element.userId;
        tr.appendChild(useridtd)
        todotd.innerText = element.todo;
        tr.appendChild(todotd)
        let comptSts = "";
        if (element.completed == true)
            comptSts = "Completed"
        else
            comptSts = "Not Completed"
        completetd.innerText = comptSts;
        tr.appendChild(completetd)
        tablebody.appendChild(tr);
    })
}
async function onLoad() {
    var url1 = `https://dummyjson.com/posts`;
    var response1 = await fetch(url1);
    var data1 = response1.json();
    var url2 = `https://dummyjson.com/products`;
    var response2 = await fetch(url2);
    var data2 = response2.json();
    var url3 = `https://dummyjson.com/todos`;
    var response3 = await fetch(url3);
    var data3 = response3.json();
    new Promise((resolve) => {
            setTimeout(() => {
                resolve(data1);
            }, 1000);
        })
        .then(result1 => {
            PromiseAPI1(result1.posts)
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data2);
                }, 2000);
            });
        })
        .then(result2 => {
            PromiseAPI2(result2.products)
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data3);
                }, 3000);
            });
        })
        .then(result3 => {
            PromiseAPI3(result3.todos)
            setTimeout(() => {
                table3.style.display = "none"
                table1.style.display = "block"
                table2.style.display = "block"
                table3.style.display = "block"
            }, 5000)
        })
        .catch(error => {
            console.error(error);
        });
}

btn1.addEventListener("click", onLoad);