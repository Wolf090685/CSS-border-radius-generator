// input range

const rangeTl = document.querySelector('#tlr'),
      rangeTr = document.querySelector('#trr'),
      rangeBl = document.querySelector('#blr'),
      rangeBr = document.querySelector('#brr');

const inputRange = document.querySelectorAll('.input-range');     

// div для вывода range

const resultTl = document.querySelector('#result-tlr'),
      resultTr = document.querySelector('#result-trr'),
      resultBl = document.querySelector('#result-blr'),
      resultBr = document.querySelector('#result-brr');

// квадрат, кнопка и span   

const cube = document.querySelector('.cube'),
      totalResult = document.querySelector('#totalResult'),
      btn = document.querySelector('#btn');

// Функция и прослушивальщик события для связи инпутов и результирующих дивов и отрисовки радиуса

const changeBorderRadius = () => {
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;

    cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px';
}

for (item of inputRange) {
    item.addEventListener('input', changeBorderRadius);
}

// Функция и прослушивальщик для вывода данных при клике на кнопку

const borderRadiusResult = () => {
    totalResult.innerHTML = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px;';
}

btn.addEventListener('click', borderRadiusResult);