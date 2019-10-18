let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
let row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

for (let f in car) {
    let col = document.createElement('div');
    col.classList.add('col-sm-3');
    row.appendChild(col);

    let card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    col.appendChild(card);


    card.addEventListener('click', function () {
        localStorage.clear();
        let obj = JSON.stringify(car[f]);
        localStorage.setItem('Qaya', obj)
        document.location = 'singleCar.html';
    })

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    card.appendChild(cardHeader); 

    let img = document.createElement('img');
    img.src = car[f].img;
    img.classList.add('card-img-top');
    cardHeader.appendChild(img);

    let span = document.createElement('span');
    span.className = 'badge badge-secondary';
    span.innerText = car[f].price;
    cardHeader.appendChild(span);

    let span1 = document.createElement('span');
    span1.className = 'badge badge-secondary';
    span1.innerText = car[f].creditPrice;
    cardHeader.appendChild(span1);

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    let name = document.createElement('h3');
    name.innerText = car[f].name;
    cardBody.appendChild(name);

    let p = document.createElement('p');
    p.innerText = `il: ${car[f].year}`;
    cardBody.appendChild(p);

    let p1 = document.createElement('p');
    p1.innerText = `probeg: ${car[f].probeg}`;
    cardBody.appendChild(p1);

    let p2 = document.createElement('p');
    p2.innerText = `tarix: ${car[f].date}`;
    cardBody.appendChild(p2);
}
