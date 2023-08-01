
function scrollL(){
    let left = document.querySelector('.scroll-images');
    left.scrollBy(350, 0)
    console.log('działa lewy')
}

function scrollRight(){
    let right = document.querySelector('.scroll-images');
    right.scrollBy(-350, 0)
    console.log('działa prawy')
}