function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    const merge = (left, right) => {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) result.push(left[leftIndex++]);
            else result.push(right[rightIndex++]);
        }
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    };
    return merge(mergeSort(left), mergeSort(right));
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter((x) => x < pivot);
    const middle = arr.filter((x) => x === pivot);
    const right = arr.filter((x) => x > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

function main() {
    try {
        const numCount = parseInt(prompt("Ingrese la cantidad de números que desea ordenar: "));
        if (isNaN(numCount) || numCount <= 0) {
            throw new Error("Ingrese un número válido mayor que cero.");
        }
        
        let listaNum = [];
        for (let i = 0; i < numCount; i++) {
            const input = prompt(`Ingrese el número #${i + 1}: `);
            const num = parseFloat(input);
            if (isNaN(num)) {
                throw new Error("Ingrese un número válido.");
            }
            if (!Number.isInteger(num)) {
                throw new Error("Los números decimales no están permitidos. Ingrese números enteros solamente.");
            }
            listaNum.push(num);
        }

        const eleccion = parseInt(prompt(
            "Seleccione el método de ordenamiento:\n\n" +
            "1. Bubble Sort\n" +
            "2. Merge Sort\n" +
            "3. Quick Sort"
        ));

        switch (eleccion) {
            case 1:
                bubbleSort(listaNum);
                break;
            case 2:
                listaNum = mergeSort(listaNum);
                break;
            case 3:
                listaNum = quickSort(listaNum);
                break;
            default:
                alert("Opción no válida. Seleccione un método de ordenamiento válido.");
                return;
        }

        alert("Lista ordenada: " + listaNum.join(", "));
    } catch (error) {
        alert("Error: " + error.message);
    }
}

main();