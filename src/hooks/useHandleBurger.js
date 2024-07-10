import React from "react";

const useHandleBurger = () => {
    const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

    const handleBurgerClick = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    React.useEffect(() => {
        if(isBurgerOpen){
            document.body.classList.add('overflow-hidden');
        }
        else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isBurgerOpen]);

    return { isBurgerOpen, handleBurgerClick };
}

export default useHandleBurger;