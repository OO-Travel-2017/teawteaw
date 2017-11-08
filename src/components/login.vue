<<template>
    <div class="container">
        <h1>Login Page</h1>
        </br>
        <div class="form group">
            <label for="usr">E-mail:</label>
            <input type="text" placeholder="Enter email" class="form-control" id="email">
        </div>
        <div class="form group">
            <label for="pwd">Password:</label>
            <input type="password" placeholder="Enter password" class="form-control" id="password">
            <button disabled class="btn btn-primary" id="quickstart-sign-in" onclick="toggleSignIn()">Sign In</button>
            <button class="btn btn-success" id="quickstart-sign-up" onclick="signUp()">Sign Up</button>
            <button class="btn btn-danger" disabled id="quickstart-verify-email" onclick="verifyEmail()">Send email verification</button>
            <button class="btn btn-default" id="quickstart-password-reset" onclick="passwordReset()">Send password reset</button>
            <button class="btn btn-primary" id="facebookLogin" onclick="loginFacebook()">Facebook</button>
            <button class="btn btn-danger" onclick="logoutFacebook()">FB Lockout</button>
            <div class="quickstart-user-details-container">
                Firebase sign-in status:
                <span id="quickstart-sign-in-status">unknown</span>
                <div>Firebase auth
                    <code>currentUser</code> object value:</div>
                <pre><code id="quickstart-account-details">null</code></pre>
            </div>
        </div>
    </div>
</template>
<<script>
export default {
    name: 'login'
}
</script>
