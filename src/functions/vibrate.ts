const vibrate = (vibration = 10) => {
    if ('vibrate' in navigator) {
        navigator.vibrate(vibration);
    }
}

export default vibrate;