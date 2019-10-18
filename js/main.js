amountWater = (arr) => {
    let amountWater = 0;
    const indexOfMaxValue = arr.indexOf(Math.max(...arr));
    let maxVal = arr[0];
    let maxValR = arr[arr.length - 1];

    for (let i = 1; i < indexOfMaxValue; i++) {
        (maxVal > arr[i]) ? amountWater += maxVal - arr[i] : maxVal = arr[i];
    }

    for (let i = arr.length - 1; i > indexOfMaxValue; i--) {
        (maxValR > arr[i]) ? amountWater += maxValR - arr[i] : maxValR = arr[i];
    }
    console.log('amountWater - ', amountWater);
};

amountWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]);