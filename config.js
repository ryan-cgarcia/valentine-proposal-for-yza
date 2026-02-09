// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "yza",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "do you like me bebs?",                                    // First interaction
            yesBtn: "yes",                                             // Text for "Yes" button
            noBtn: "no",                                               // Text for "No" button
            secretAnswer: "i don't like you, i love you! ❤️"           // Secret hover message
        },
        second: {
            text: "how much do you love me bebes? 😚😛😏😏😏",       // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "next 😏"                                         // Text for the next button
        },
        third: {
            text: "will you be my Valentine on February 14th, 2026? 🌹", // The big question!
            yesBtn: "yes!",                                             // Text for "Yes" button
            noBtn: "no"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW freaky talaga nito 😏😏",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Let the most epic Valentine's Day begin! ",
        message: "now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#fffd95",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dqlawp9pn/video/upload/v1770615094/Jey_One_-_Bo_Bo_Bo_Video_Oficial_uggzbm.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
// =================== NEW FUNCTIONS ===================
// Add all of this code AFTER line 89 (after window.VALENTINE_CONFIG = CONFIG;)

// When "No" is clicked
let noClickCount = 0; // Track how many times "No" was clicked

function noButtonClicked() {
    // Increment the click counter
    noClickCount++;
    
    // Calculate new size (double each time)
    const newSize = 200 * Math.pow(2, noClickCount - 1); // Start at 200px, then 400, 800, etc.
    
    // Change background to black
    document.body.style.background = "black";
    document.body.style.transition = "background 1s";
    
    // Hide floating elements
    document.querySelector('.floating-elements').style.display = 'none';
    
    // Show sad GIFs
    const sadGifs = document.getElementById('sadGifs');
    sadGifs.classList.remove('hidden');
    
    // Get both GIFs
    const gifs = document.querySelectorAll('.sad-gif');
    
    // Apply the new size to each GIF
    gifs.forEach(gif => {
        gif.style.width = newSize + 'px';
        gif.style.height = newSize + 'px';
        gif.style.transition = 'all 0.5s ease'; // Smooth transition
    });
    
    // Move the button (original behavior)
    moveButton(event.target || event.srcElement);
}

// When "Yes" (final button) is clicked
function yesButtonClicked() {
    restoreNormalBackground();
    celebrate(); // This calls the celebration function
}

// When Secret Answer is clicked
function secretAnswerClicked() {
    restoreNormalBackground();
    showNextQuestion(2); // This goes to next question
}

// Restore normal background and hide GIFs
function restoreNormalBackground() {
    // Reset the click counter
    noClickCount = 0;
    
    // Reset GIF sizes to original
    const gifs = document.querySelectorAll('.sad-gif');
    gifs.forEach(gif => {
        gif.style.width = '200px';
        gif.style.height = '200px';
    });
    
    // Restore gradient background
    document.body.style.background = "";
    
    // Show floating elements again
    document.querySelector('.floating-elements').style.display = '';
    
    // Hide sad GIFs
    document.getElementById('sadGifs').classList.add('hidden');
}