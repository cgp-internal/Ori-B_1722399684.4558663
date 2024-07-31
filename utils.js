export function keyboardInputHandler(event) {
    const keyDownHandler = (event) => {
        switch (event.key) {
            case 'ArrowUp':
                return 'up';
            case 'ArrowDown':
                return 'down';
            default:
                return null;
        }
    };

    const keyUpHandler = () => {
        return null;
    };

    return {
        onKeyDown: keyDownHandler(event),
        onKeyUp: keyUpHandler(),
    };
}