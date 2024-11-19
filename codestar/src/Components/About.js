function Football(){
    function shootBall(){
        alert('Nice Goal');
    }
    return(
        <>
        <button className="btn-about" onClick={() =>{shootBall('good')}}>Click to shoot</button>
        </>
    );
}

export default function About() {
    return (
        <>
            <div className="Hero-About">
                <h1>This is About</h1>
                <Football />
            </div>
        </>
    );
}