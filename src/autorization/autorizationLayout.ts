// export const registrationLayout = `
//     <div id="registration-form-container">
//         <button id="close-modal"></button>
//         <form>
//             <h2>Registration</h2>
//             <label for="user-name"><b>Name</b></label>
//             <input type="text" placeholder="name" name="user-name" required>

//             <label for="psw"><b>Password</b></label>
//             <input class="password" type="password" placeholder="password" name="psw" required minlength="8">

//             <label for="email"><b>Email</b></label>
//             <input type="email" placeholder="email">

//             <button type="submit" id="signup-btn">Sign up</button>
//             <p>Already have an account? <button id="login-form-btn">login</button></p>
//         </form>
//     </div>
// `;

// export const loginLayout = `
//     <div id="login-form-container">
//         <button id="close-modal"></button>
//         <form>
//             <h2>Login</h2>
//             <label for="psw"><b>Password</b></label>
//             <input type="password" placeholder="Enter password" name="psw" required minlength="8">
//             <label for="email"><b>Email</b></label>
//             <input type="email" placeholder="Enter email" name="email" required>
//             <button type="submit" id="login-btn">Log in</button>
//             <p>Don't have an account? <button id="registration-form-btn">sign in</button></p>
//         </form>
//     </div>
// `;

export const registrationLayout = `
    <div class="reg_container" id="registration-form-container">
        <button id="close-modal">X</button>
        <div class="name_container"><h2>Registration</h2></div>
        <div class="space">
            <input class="email" type="email" placeholder="Enter your email..">
            <div class="tooltip right tooltip-one" data-title="Example: person@gmail.com"></div>
        </div>
        <div class="space">
            <input class="password" type="password" placeholder="Enter your password..">
            <div class="tooltip right tooltip-two" data-title="The password must contain at least one uppercase letter, one lowercase letter, and one number. The minimum password length is 8 characters."></div>
        </div>
        <button class="reg_btn">Log In</button>
        <p>Already have an account? <button class="sign_btn" id="sign_btn">Sign In</button></p>
        <div class="info_div"></div>
    </div>
`;

export const loginLayout = `
    <div class="reg_container" id="registration-form-container">
        <button id="close-modal" class="close-btn">X</button>
        <div class="name_container"><h2>Authorization</h2></div>
        <input class="email" type="email" placeholder="Enter your email..">
        <div class="tooltip right tooltip-one" data-title="Message"></div>
        <input class="password" type="password" placeholder="Enter your password..">
        <div class="tooltip right tooltip-two" data-title="Message"></div>
        <button class="reg_btn">Sign In</button>
        <p>Don't have an account? <button class="sign_btn" id="sign_btn">Log In</button></p>
        <div class="info_div"></div>
        <div class="email_in">EMAIL</div>
    </div>
`;
