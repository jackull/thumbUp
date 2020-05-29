//targeting html elements using 'queryselector'
let count = 0;
let like = document.querySelector('#like_btn');
let like_count = document.querySelector('#like_counter');

like.addEventListener('click', function(){ //creating a function of 'click'
    count += 1;
    like_count.innerHTML = count;
    //'innerHTML' to trigger the 'count'
});


