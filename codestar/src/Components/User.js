import Customeraccount from './Customeraccount';
import Customerlogin from './Customerlogin';

function User() {

    return (
        <>
            <div className="user-account">
                <Customerlogin />
                <Customeraccount />
            </div>
        </>
    );
}

export default User;

