num = prompt('Введите число')

box = '<div class="box"></div>'
box_list = document.querySelector('.box_list')

for(y = 0; y < num; y++){
    box_list.insertAdjacentHTML('beforeend', box)
}