// USER CURRENCY
let currency = 0;

const currencyInit = () => {
    document.getElementById('user-currency-total').innerText = currency.toString();
}

// NUMBER OF PLOTS
let plots = 0;

// PLOT PRICE
let buyPlotPrice = 5;

const plotPriceInit = () => {
    document.getElementById('plot-price').innerText = buyPlotPrice.toString();
}

// FILL PLOT GIVEN MONEY
let fillPlotPrice = 1;

// DOM - CREATES THE EMPTY PLOT
const  createPlotContainer = () => {
    const plotContainer = document.getElementById('plot-ctn');
    for (let i = 0; i < 6; i++) {
        const emptyPlot = document.createElement('article');
        emptyPlot.classList.add('plot-empty',  `plot-${i}`);

        emptyPlot.addEventListener('click', () => fillPlot(emptyPlot));

        plotContainer.appendChild(emptyPlot);

        plots++;
    }

    return plotContainer;
}

// FILL SELECTED PLOT
const fillPlot = (selectedPlot) => {
    if (selectedPlot.classList.contains('plot')) return;

    selectedPlot.classList.add('plot');
    currency += fillPlotPrice;
    document.getElementById('user-currency-total').innerText = currency.toString();
    document.getElementById('plot-error-message').classList.remove('plot-error-message-shown');
    document.getElementById('plot-error-message').innerText = "";

    setTimeout(() => {
        selectedPlot.classList.remove('plot');
    }, 1000);
}

// ADD A NEW EMPTY PLOT
const addPlot = () => {
    if (currency < buyPlotPrice) {
        document.getElementById('plot-error-message').classList.add('plot-error-message-shown');
        document.getElementById('plot-error-message').innerText = "You don't have enough currency";
        return;
    }
    document.getElementById('plot-error-message').innerText = "";
    document.getElementById('plot-error-message').classList.remove('plot-error-message-shown');

    const plotContainer = document.getElementById('plot-ctn');

    const emptyPlot = document.createElement('article');
    emptyPlot.classList.add('plot-empty');

    emptyPlot.addEventListener('click', () => fillPlot(emptyPlot));

    plotContainer.appendChild(emptyPlot);

    plots++;
    currency -= buyPlotPrice;
    document.getElementById('user-currency-total').innerText = currency.toString();

    buyPlotPrice += 5;
    fillPlotPrice++;
    document.getElementById('plot-price').innerText = buyPlotPrice.toString();

    return plotContainer;
}

const init = () => {
    createPlotContainer();
    currencyInit();
    plotPriceInit();
}

init();