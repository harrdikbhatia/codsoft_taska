document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const emailStatus = document.getElementById('emailStatus');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const toggleButtons = document.querySelectorAll('.toggle-password');
    const generatePasswordBtn = document.getElementById('generatePasswordBtn');
    
    // Password Strength Elements
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    const matchStatus = document.getElementById('matchStatus');

    // --- Login / Signup Toggle Logic ---
    const formWrapper = document.querySelector('.form-wrapper');
    const loginWrapper = document.getElementById('loginWrapper');
    const showLoginBtn = document.getElementById('showLoginBtn');
    const showLoginBtn2 = document.getElementById('showLoginBtn2');
    const showSignupBtn = document.getElementById('showSignupBtn');

    const toggleToLogin = (e) => {
        e.preventDefault();
        formWrapper.style.display = 'none';
        loginWrapper.style.display = 'block';
    };

    showLoginBtn.addEventListener('click', toggleToLogin);
    if (showLoginBtn2) showLoginBtn2.addEventListener('click', toggleToLogin);

    showSignupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginWrapper.style.display = 'none';
        formWrapper.style.display = 'block';
    });

    // --- Sign up Multi-Step Logic ---
    const signupStep1 = document.getElementById('signupStep1');
    const signupStep2 = document.getElementById('signupStep2');
    const nextStepBtn = document.getElementById('nextStepBtn');
    const backStepBtn = document.getElementById('backStepBtn');

    nextStepBtn.addEventListener('click', () => {
        // Basic validation for step 1
        const nameVal = document.getElementById('name').value.trim();
        const emailVal = document.getElementById('email').value.trim();
        const dobVal = document.getElementById('dob').value;
        const genderVal = document.querySelector('input[name="gender"]:checked');
        const step1Error = document.getElementById('step1Error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!nameVal || !emailVal || !dobVal || !genderVal) {
            step1Error.textContent = 'Please fill out all fields before proceeding.';
            step1Error.style.display = 'block';
            return;
        }

        if (!emailRegex.test(emailVal)) {
            step1Error.textContent = 'Please enter a valid email address.';
            step1Error.style.display = 'block';
            return;
        }
        
        if (emailStatus.textContent === 'Email already exists') {
            step1Error.textContent = 'Please use a different email address.';
            step1Error.style.display = 'block';
            return;
        }

        step1Error.style.display = 'none';

        signupStep1.style.display = 'none';
        signupStep2.style.display = 'block';
    });

    backStepBtn.addEventListener('click', () => {
        signupStep2.style.display = 'none';
        signupStep1.style.display = 'block';
    });

    // --- Login Form Submission Simulation ---
    const loginForm = document.getElementById('loginForm');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginSubmitBtn.textContent = 'Logging in...';
        loginSubmitBtn.style.opacity = '0.8';

        setTimeout(() => {
            alert('Welcome back to BROfit!');
            loginSubmitBtn.textContent = 'Log In';
            loginSubmitBtn.style.opacity = '1';
            loginForm.reset();
        }, 1500);
    });

    // --- Toggle Password Visibility ---
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const inputField = document.getElementById(targetId);
            const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
            inputField.setAttribute('type', type);
            
            // Toggle Eye Icon Path (Crossed / Normal)
            const iconPath = btn.querySelector('path');
            if (type === 'text') {
                // Eye-slash path
                iconPath.setAttribute('d', 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z M2 2l20 20'); // Simplified slash for example
            } else {
                // Normal Eye path
                iconPath.setAttribute('d', 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z');
            }
        });
    });

    // --- Password Suggestion / Generation ---
    function generateSecurePassword() {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < 16; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }

    generatePasswordBtn.addEventListener('click', () => {
        const newPassword = generateSecurePassword();
        passwordInput.value = newPassword;
        confirmPasswordInput.value = newPassword;
        
        // Temporarily show passwords so user can see what was generated
        passwordInput.setAttribute('type', 'text');
        confirmPasswordInput.setAttribute('type', 'text');
        
        // Re-evaluate strength and match
        evaluatePasswordStrength(newPassword);
        checkPasswordMatch();
        
        setTimeout(() => {
            passwordInput.setAttribute('type', 'password');
            confirmPasswordInput.setAttribute('type', 'password');
        }, 4000); // Hide after 4 seconds
    });

    // --- Password Strength Evaluator ---
    function evaluatePasswordStrength(password) {
        let score = 0;
        if (!password) {
            strengthFill.style.width = '0%';
            strengthFill.style.backgroundColor = 'transparent';
            strengthText.textContent = '';
            return;
        }

        // Length Check
        if (password.length > 6) score += 1;
        if (password.length > 10) score += 1;
        
        // Character Variety Checks
        if (/[A-Z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;

        // Visual Updates based on CSS variables
        const rootStyles = getComputedStyle(document.documentElement);
        
        if (score <= 2) {
            strengthFill.style.width = '25%';
            strengthFill.style.backgroundColor = rootStyles.getPropertyValue('--strength-weak').trim();
            strengthText.textContent = 'Weak';
            strengthText.style.color = rootStyles.getPropertyValue('--strength-weak').trim();
        } else if (score === 3) {
            strengthFill.style.width = '50%';
            strengthFill.style.backgroundColor = rootStyles.getPropertyValue('--strength-good').trim();
            strengthText.textContent = 'Good';
            strengthText.style.color = rootStyles.getPropertyValue('--strength-good').trim();
        } else if (score === 4) {
            strengthFill.style.width = '75%';
            strengthFill.style.backgroundColor = rootStyles.getPropertyValue('--strength-strong').trim();
            strengthText.textContent = 'Strong';
            strengthText.style.color = rootStyles.getPropertyValue('--strength-strong').trim();
        } else {
            strengthFill.style.width = '100%';
            strengthFill.style.backgroundColor = rootStyles.getPropertyValue('--strength-very-strong').trim();
            strengthText.textContent = 'Very Strong';
            strengthText.style.color = rootStyles.getPropertyValue('--strength-very-strong').trim();
        }
    }

    passwordInput.addEventListener('input', (e) => {
        evaluatePasswordStrength(e.target.value);
        checkPasswordMatch();
    });

    // --- Password Match Check ---
    function checkPasswordMatch() {
        if (!confirmPasswordInput.value) {
            matchStatus.textContent = '';
            return;
        }
        
        if (passwordInput.value === confirmPasswordInput.value) {
            matchStatus.textContent = 'Passwords match';
            matchStatus.className = 'match-status success-text';
        } else {
            matchStatus.textContent = 'Passwords do not match';
            matchStatus.className = 'match-status error-text';
        }
    }

    confirmPasswordInput.addEventListener('input', checkPasswordMatch);

    // --- Email Validation Simulation ---
    let emailTimeout;
    const existingEmails = ['test@example.com', 'user@brofit.com', 'john@doe.com'];

    emailInput.addEventListener('input', (e) => {
        clearTimeout(emailTimeout);
        const email = e.target.value;
        emailStatus.textContent = '';

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            emailStatus.textContent = 'Checking...';
            emailStatus.className = 'email-status';
            emailStatus.style.color = 'var(--text-secondary)';

            // Simulate Network Delay
            emailTimeout = setTimeout(() => {
                if (existingEmails.includes(email.toLowerCase())) {
                    emailStatus.textContent = 'Email already exists';
                    emailStatus.className = 'email-status error-text';
                    emailStatus.style.color = 'var(--error-color)';
                } else {
                    emailStatus.textContent = 'Available';
                    emailStatus.className = 'email-status success-text';
                    emailStatus.style.color = 'var(--accent-color)';
                }
            }, 800);
        }
    });

    // --- Form Submission & OTP Logic ---
    const otpWrapper = document.getElementById('otpWrapper');
    const onboardingWrapper = document.getElementById('onboardingWrapper');
    
    const otpSubtitle = document.getElementById('otpSubtitle');
    const demoOtpCode = document.getElementById('demoOtpCode');
    const otpInputs = document.querySelectorAll('.otp-input');
    const verifyOtpBtn = document.getElementById('verifyOtpBtn');
    const backToSignup = document.getElementById('backToSignup');
    const resendOtp = document.getElementById('resendOtp');
    const otpError = document.getElementById('otpError');
    let generatedOtp = '';

    function generateOTP() {
        generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        demoOtpCode.textContent = generatedOtp;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic Validation Check
        const step2Error = document.getElementById('step2Error');
        
        if (passwordInput.value.length < 8) {
            step2Error.textContent = 'Password must be at least 8 characters long.';
            step2Error.style.display = 'block';
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            step2Error.textContent = 'Please ensure passwords match.';
            step2Error.style.display = 'block';
            return;
        }
        
        step2Error.style.display = 'none';

        // Show OTP step
        const userEmail = emailInput.value;
        otpSubtitle.innerHTML = `We sent a 6-digit code to <strong>${userEmail}</strong>.`;
        generateOTP();
        
        formWrapper.style.display = 'none';
        otpWrapper.style.display = 'block';
        otpInputs[0].focus();
    });

    // OTP Input Logic
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            }
        });
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value) {
                if (index > 0) {
                    otpInputs[index - 1].focus();
                }
            }
        });
    });

    resendOtp.addEventListener('click', (e) => {
        e.preventDefault();
        generateOTP();
        otpInputs.forEach(input => input.value = '');
        otpInputs[0].focus();
        otpError.textContent = 'A new code has been sent.';
        otpError.style.color = 'var(--accent-color)';
        setTimeout(() => {
            if (otpError.textContent === 'A new code has been sent.') otpError.textContent = '';
        }, 3000);
    });

    backToSignup.addEventListener('click', () => {
        otpWrapper.style.display = 'none';
        formWrapper.style.display = 'block';
    });

    verifyOtpBtn.addEventListener('click', () => {
        const enteredOtp = Array.from(otpInputs).map(input => input.value).join('');
        if (enteredOtp.length < 6) {
            otpError.textContent = 'Please enter all 6 digits.';
            otpError.style.color = 'var(--error-color)';
            return;
        }

        if (enteredOtp === generatedOtp) {
            otpError.textContent = '';
            verifyOtpBtn.textContent = 'Verifying...';
            verifyOtpBtn.style.opacity = '0.8';
            
            setTimeout(() => {
                verifyOtpBtn.textContent = 'Verify email';
                verifyOtpBtn.style.opacity = '1';
                
                // Transition to Onboarding
                const nameVal = document.getElementById('name').value.trim();
                const firstName = nameVal ? nameVal.split(' ')[0] : 'there';
                document.getElementById('onboardingTitle').textContent = `Hey ${firstName},`;

                otpWrapper.style.display = 'none';
                onboardingWrapper.style.display = 'block';
            }, 1000);
        } else {
            otpError.textContent = 'Invalid code. Please try again.';
            otpError.style.color = 'var(--error-color)';
        }
    });

    // --- Onboarding Logic ---
    const stepGoal = document.getElementById('stepGoal');
    const stepGoalValue = document.getElementById('stepGoalValue');
    const activityChips = document.querySelectorAll('.activity-chip');
    const finishSignupBtn = document.getElementById('finishSignupBtn');
    
    stepGoal.addEventListener('input', (e) => {
        stepGoalValue.textContent = Number(e.target.value).toLocaleString();
    });

    activityChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const selectedChips = document.querySelectorAll('.activity-chip.selected');
            if (chip.classList.contains('selected')) {
                chip.classList.remove('selected');
            } else {
                if (selectedChips.length < 3) {
                    chip.classList.add('selected');
                } else {
                    // Shake animation if trying to select more than 3
                    chip.style.transform = 'translate(-5px, 0)';
                    setTimeout(() => chip.style.transform = 'translate(5px, 0)', 100);
                    setTimeout(() => chip.style.transform = 'translate(0, 0)', 200);
                }
            }
        });
    });

    finishSignupBtn.addEventListener('click', () => {
        const btnText = finishSignupBtn.textContent;
        finishSignupBtn.textContent = 'Setting up...';
        finishSignupBtn.style.opacity = '0.8';
        
        setTimeout(() => {
            alert('Welcome to BROfit! Your luxury fitness journey begins now.');
            finishSignupBtn.textContent = btnText;
            finishSignupBtn.style.opacity = '1';
            
            // Full Reset
            onboardingWrapper.style.display = 'none';
            formWrapper.style.display = 'block';
            signupStep2.style.display = 'none';
            signupStep1.style.display = 'block';
            form.reset();
            strengthFill.style.width = '0%';
            strengthText.textContent = '';
            emailStatus.textContent = '';
            matchStatus.textContent = '';
            otpInputs.forEach(input => input.value = '');
            activityChips.forEach(c => c.classList.remove('selected'));
            stepGoal.value = 10000;
            stepGoalValue.textContent = '10,000';
        }, 1500);
    });

    // --- Social Login Simulation ---
    const googleBtns = document.querySelectorAll('.google-btn');
    const appleBtns = document.querySelectorAll('.apple-btn');

    const simulateSocialLogin = (btn, provider) => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<svg viewBox="0 0 24 24" style="animation: spin 1s linear infinite; width: 20px; height: 20px; margin-right: 8px;"><path fill="currentColor" d="M12 4V2C6.48 2 2 6.48 2 12h2c0-4.41 3.59-8 8-8z"/></svg> Connecting...`;
        btn.style.opacity = '0.8';
        btn.style.pointerEvents = 'none';

        setTimeout(() => {
            alert(`Successfully authenticated with ${provider}! Welcome to BROfit.`);
            btn.innerHTML = originalHtml;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }, 1500);
    };

    googleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            simulateSocialLogin(btn, 'Google');
        });
    });

    appleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            simulateSocialLogin(btn, 'Apple');
        });
    });
});
