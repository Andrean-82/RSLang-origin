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
