document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("increment-button");
    const decrementButton = document.getElementById("decrement-button");
    let counter = 0; 

    const updateCounterState = () => {
        counterElement.textContent = counter;
    };

    const incrementCounter = () => {
        counter++;
        updateCounterState();
    };

    const decrementCounter = () => {
        if (counter > 0) {
            counter--;
            updateCounterState();
        }
    };

    incrementButton.addEventListener("click", incrementCounter);
    decrementButton.addEventListener("click", decrementCounter);
});