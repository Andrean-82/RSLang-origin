export const registrationLayout = `
<div id="registration-form-container">
        <button id="close-modal"></button>
        <form>
        <h2>Registration</h2>
            <label for="user-name"><b>Name</b></label>
            <input type="text" placeholder="name" name="user-name" required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="password" name="psw" required minlength="8">
        
            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="email">
        
            <button type="submit" id="signup-btn">Sign up</button>
            <p>Already have an account? <button id="login-form-btn">login</button></p>
        </form>
        </div>
`;
export const loginLayout = `
<div id="login-form-container">
<button id="close-modal"></button>
<form>
<h2>Login</h2>
<label for="psw"><b>Password</b></label>
<input type="password" placeholder="Enter password" name="psw" required minlength="8">
<label for="email"><b>Email</b></label>
<input type="email" placeholder="Enter email" name="email" required>
<button type="submit" id="login-btn">Log in</button>
<p>Don't have an account? <button id="registration-form-btn">sign in</button></p>
</form>
</div>
`;
