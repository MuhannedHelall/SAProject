function toggleListItem(item) {
    parentList = item.parentNode.querySelectorAll(".listItem");
    if (item.classList.contains('bg-grey')) {
        item.classList.remove('bg-grey');
    }
    else {
        parentList.forEach(listItem => listItem.classList.remove('bg-grey'));
        item.classList.add('bg-grey');
    }
}

function showIcon(icon) {
    icon.classList.remove('opacity-50');
}

function blurIcon(icon) {
    icon.classList.add('opacity-50');
}

onclick = () => {
    counter = document.querySelector('.checkOut');
    if (counter.innerText > 0)
        counter.classList.remove('d-none');
    else
        counter.classList.add('d-none');
}

function addCounter(){
    counter = +document.querySelector('.checkOut').innerText;
    counter++;
    document.querySelector('.checkOut').innerText = counter;
}