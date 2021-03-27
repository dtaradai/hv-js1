"use strict";

//Написать функцию которая по параметрам принимает число из десятичной системы счисления и преобразовывает в двоичную. Написать функцию которая выполняет преобразование наоборот.
function decimToBinary(decimal)
{
  if (decimal == 0) {
    return '0';
  } else if (Number.isInteger(decimal) && decimal > 0) {
    let binar = '';
    let revers = '';

    while (decimal >= 1) {
      binar += decimal % 2;
      decimal = Math.floor(decimal/2);
    }

    for (let i = binar.length; i >= 0; i--) {
      revers += binar.substr(i, 1);
    }
    return revers;
  } else {
    return 'Введите пожалуйста положительное число';
  }
}

function binarToDecimal(binar)
{
  let num = 0;
  let binarLeng = binar.length;

  for (let i = 0; i < binarLeng; i++) {
    num += binar.substr(i, 1) * (2 ** (binarLeng - 1 - i));
  }
  return num;
}


// // ------Написать функцию которая выводит первые N чисел фибоначчи----------
function fibonachi(quantity)
{
  if (Number.isInteger(quantity) && quantity >= 2) {
    let fib1 = fib2 = 1;
    let arrFib = [fib1, fib2];

    for (i = 2; i < quantity; i++) {
      let sum = fib1 + fib2;
      arrFib[i] = sum;
      fib1 = fib2;
      fib2 = sum;
    }
    return arrFib;
  } else {
    return 'Введите пожалуйста целое число >= 2.';
  }
}

// //-----------Написать функцию, возведения числа N в степень M --------
function degree(number, degree)
{
  let numDegree = number;
  for (let i = 1; i < degree; i++) {
    numDegree *= number;
  }
  return numDegree;
}

//Написать функцию которая вычисляет входит ли IP-адрес в диапазон указанных IP-адресов. Вычислить для версии ipv4.

function ipValid(ip) {
	let regular = '/^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])/';
	if (ip.search(regular)) {
		return true;
	}
	return false;
}

function ipExists(ip, ipMin, ipMax)
{
  if (ipValid(ip) && ipValid(ipMin) && ipValid(ipMax)) {
    let arrIp = ip.split('.');
    let arrIpMin = ipMin.split('.');
    let arrIpMax = ipMax.split('.');

    for (let i = 0; i < 4; i++) {
      if ((arrIp[i] > arrIpMin[i]) && (arrIp[i] < arrIpMax[i])) {
        return true;
      } else if ((arrIp[i] == arrIpMin[i]) || (arrIp[i] == arrIpMax[i])) {
        if (i == 3) {
          return true;
        }
        continue;
      } else {
        return 'IP not included in the specified range';
      }
    }
  } else {
    return 'Error, IP not valid';
  }
}

let ipMin =  '0.11.75.113';
let ipMax = '205.25.14.211';
let ip = '2.25.14.21';

//Для одномерного массива:
//  Подсчитать процентное соотношение положительных/отрицательных/нулевых/простых чисел

let arrNumber = [5, 7, 95, -8, 0, 13, -35, 107, 0, 17, -24];

// ------ Определение, является ли число простым
function isPrime(num)
{
  if (num > 1) {
    // Получаем квадратный корень из переданного числа
    let highestIntegralSquareRoot = Math.floor(Math.sqrt(num));
    // Ищем совпадение делителя до квадратного корня из переданного числа
    for (let i = 2; i <= highestIntegralSquareRoot; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  return 'Error number';
}

function arrInfo(arrNumber)
{
  if (arrNumber.length > 0) {
    let params = [];
    let positiveNum = 0;
    let negativeNum = 0;
    let nullNum = 0;
    let primeNum = 0;
    let colNumber = arrNumber.length;

    for (let i = 0; i < colNumber; i++) {
      if (arrNumber[i] < 0) {
        negativeNum++;
      }
      if (arrNumber[i] > 0) {
        positiveNum++;
        if ((arrNumber[i] >= 2) && isPrime(arrNumber[i])) {
          primeNum++;
        }
      }
      if (arrNumber[i] == 0) {
        nullNum++;
      }
    }

    if (positiveNum > 0) {
      let percentagePositiv = (positiveNum / colNumber * 100);
      params['percentagePositiv'] = percentagePositiv;
    }
    if (negativeNum > 0) {
      let percentageNegativ = (negativeNum / colNumber * 100);
      params['percentageNegativ'] = percentageNegativ;
    }
    if (primeNum > 0) {
      let percentagePrime = (primeNum / colNumber * 100);
      params['percentagePrime'] = percentagePrime;
    }
    if (nullNum > 0) {
      let percentageNull = (nullNum / colNumber * 100);
      params['percentageNull'] = percentageNull;
    }

    return params;
  } else {
    return 'The array contains nothing.';
  }
}

//  Отсортировать элементы по возрастанию/убыванию
function minSort(arrNumber)
{
  let arrSort = [];
  while (arrNumber.length) {
    arrNumber.forEach((number, key) =>  {
      if (number == Math.min(...arrNumber)) {
        console.log(number);
        arrSort.push(number);
        arrNumber.splice(key, 1);
      }
    })
    

  }
  return arrSort;
}

//-----------Для двумерных массивов-----------

//------------Транспонировать матрицу----------
let matrix = [
  [5, 7, 9, -3, 0, 14],
  [9, 54, 7, -3, 0, 14],
  [56, 2, 6, -7, -555, 19],
];

function transposeMatrix(matrix)
{
  let arrTr = [];
  for (let i = 0, count = matrix[0].length; i < count; i++) {
    arrTr.push([]);
  }

  for (let i = 0, count = matrix.length; i < count; i++) {
    for (let j = 0, countArrI = matrix[i].length; j < countArrI; j++) {
    arrTr[j].push(matrix[i][j]);
    }
  }
  return arrTr;
}

//--------------Умножить две матрицы------------
let matrix1 = [
  [5, 7],
  [9, 54],
  [56, 2],
];
let matrix2 = [
  [5, 7, 9],
  [9, 54, 7],
];

function multiply(matrix1, matrix2) {

  let matrix1NumRows = matrix1.length;
  let matrix1NumCols = matrix1[0].length;
  let matrix2NumCols = matrix2[0].length;
  if (matrix1NumCols != matrix2.length) {
    return 'Несоответствующие размеры матриц!';
  } 
  let matrixMult = [];

  for (let i = 0; i < matrix1NumRows; i++) {
    matrixMult[i] = [];
    for (let j = 0; j < matrix2NumCols; j++) {
      matrixMult[i][j] = 0;
      for (let k = 0; k < matrix1NumCols; k++) {
        matrixMult[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }
  return matrixMult;
}


//Удалить те строки, в которых сумма элементов положительна и присутствует хотя бы один нулевой элемент. Аналогично для столбцов.
function delStrPosSummEndNull(matrixNum)
{
  for (let i = 0; i < matrixNum.length; i++) {
    let sumArrI = 0;
    let elNull = false;
    matrixNum[i].forEach( (val) => {
      sumArrI += val;
      if(val == 0) {
        elNull = true;
      }
    })
    if ((sumArrI > 0) && elNull) {
      matrixNum.splice(i, 1);
      i--;
    }
    elNull = false;
  }
  return matrixNum;
}

//рекурсивная функци которая будет обходить и выводить все значения любого массива и любого уровня вложенности
let arrArr = [
  [5, 7, 9, -3, 0, 14],
  [9, 54, 7],
  [
    ['php', 'js', 'pyton', 'c++'],
    ['html', 'scc', 'scss', 'sass']
  ],
];

function allValuesOfAnyArray(arrArr)
{
  arrArr.forEach( (elArr) => {
    if (Array.isArray(elArr)) {
      allValuesOfAnyArray(elArr);
    } else {
      console.log(elArr);
    }
  })
}
