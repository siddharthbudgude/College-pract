function Toolbar({ playMoview, playMusic }) {
    return (
        <>
            <div className="home-componet-one">
                <button className="Btn-one" onClick={playMoview}>Click me for Moovie</button>
                <button className="Btn-one" onClick={playMusic}>Click me for Music</button>
            </div>
        </>
    )
}
export default function Home() {
    return (
        <>
            <div className="Hero-section">
                <h1>This is home</h1>
                <Toolbar
                    playMoview={() => alert("clicked for Moovie")}
                    playMusic={() => alert('hello you have just clicked for music')}
                />
            </div>
        </>
    );
}   