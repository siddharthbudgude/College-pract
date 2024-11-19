import React from 'react';

/*Class component example*/
class Car extends React.Component {
    render() {
        return (
            <>
                <h2 className="car-component">hello sidd this is your car</h2>
            </>
        );
    }
}
// Car()


/*Function component example*/
function Swift(props) {
    return (
        <>
            <h2 className="swift-component">hello sidd this is your car <span className='car-name'>{props.car}</span> </h2>
        </>)
}

function Popup(){
    alert("You just clicked the button");
}


export default function Profile() {

    return (
        <>
            <div className='profile-set'>
                <h1 className="profile">this is profile </h1>
                <a href="/">home</a>
                <Car  />
                <Swift car='"swift"'  />
                <button onClick={Popup}>Click me</button>
            </div>
        </>
    );
}

