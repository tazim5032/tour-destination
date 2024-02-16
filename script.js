const allBtn = document.getElementsByClassName('add-cart');

let cnt = 0;

for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        cnt++;

        const placeName = e.target.parentNode.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        
        const selectedPlace = document.getElementById('selected-place');

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);

        selectedPlace.appendChild(li);

        const budget = document.getElementById('budget').innerText;
        const baki = parseInt(budget);
        if(price > baki){
            alert('Sorry Your Budget is too Low!!');
            return;
        }
        document.getElementById('budget').innerText = baki - price;

        // total cost ber kora
        totalCost('total-cost', parseInt(price));
        grandTotalCost('opps');

        setInnerText('grand-total', sum);
        setInnerText('total-cost', totalValue);
     
        setInnerText('cart-count', cnt);
    });
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function totalCost(id, value){
    const totalCost = document.getElementById(id).innerText;
    let cost = parseInt(totalCost);
    const sum = cost + parseInt(value);
    setInnerText(id, sum);
}

function grandTotalCost(category){
    const totalCost = document.getElementById('total-cost').innerText;
    const cost = parseInt(totalCost);

    if(category == 'bus'){
        setInnerText('grand-total', cost + 100);
    }
    else if(category == 'train'){
        setInnerText('grand-total', cost - 200);
    }
    else if(category == 'flight'){
        setInnerText('grand-total', cost + 500)
    }
    else{
        setInnerText('grand-total', cost);
    }
}