export const showStar = (number) => {
    switch(number){
        case 0:
            return <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>;
        case 1:
            return <span>&#9734;&#9734;&#9734;&#9734;&#9733;</span>;
        case 2:
            return <span>&#9734;&#9734;&#9734;&#9733;&#9733;</span>;
        case 3:
            return <span>&#9734;&#9734;&#9733;&#9733;&#9733;</span>;
        case 4:
            return <span>&#9734;&#9733;&#9733;&#9733;&#9733;</span>;
        case 5:
            return <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>;
        default:
            return <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
        
    }
}

