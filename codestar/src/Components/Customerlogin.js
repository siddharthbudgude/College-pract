export default function Customerlogin() {
    return (
        <>
            <div className="user-login">
                <h3>Login to your account </h3>
                <form>
                    <span className="create-input">
                        <label>Enter Your Login id</label>
                        <input type="text" placeholder="Enter Your Login Id" />
                    </span>

                    <span className="create-input">
                        <label>Enter Your Password</label>
                        <input type="password" placeholder="Enter Your password" />
                    </span>

                    <span className="create-input">
                        <input type="submit" value={'Login'} />
                    </span>

                </form>

            </div>
        </>
    );
}

