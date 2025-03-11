const birthDate = new Date('2007-03-12T00:00:00');

// This function calculates and displays age, but we don't need to display all elements
// since they're not in the HTML. We'll keep the calculation for future use.
function updateAgeCounter() {
    const now = new Date();
    const diff = now - birthDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // We'll only use these values if we add display elements for them later
    // For now, let's just log them to the console for debugging
    console.log(`Age: ${years} years, ${months} months, ${days} days, ${hours}:${minutes}:${seconds}`);
    
    // Check if elements exist before trying to update them
    // This prevents errors if elements aren't in the HTML yet
    const updateElementText = (id, value) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    };
    
    updateElementText('years', years);
    updateElementText('months', months);
    updateElementText('days', days);
    updateElementText('hours', hours);
    updateElementText('minutes', minutes);
    updateElementText('seconds', seconds);
}

document.addEventListener('DOMContentLoaded', function() {
    function updateCountdown() {
        const startTime = new Date().getTime();
        const countdownDuration = 10000; // 10 seconds in milliseconds

        function update() {
            const currentTime = new Date().getTime();
            const timeLeft = countdownDuration - (currentTime - startTime);

            if (timeLeft <= 0) {
                document.getElementById('countdown').classList.add('hidden');
                document.getElementById('birthday-wish').classList.remove('hidden');
                document.getElementById('wish-paragraph').classList.remove('hidden');
                triggerBirthdayAnimation();
                return;
            }

            const seconds = Math.ceil(timeLeft / 1000);
            document.getElementById('countdown-timer').textContent = seconds;
            requestAnimationFrame(update);
        }

        update();
    }

    function triggerBirthdayAnimation() {
        console.log("Countdown complete! Starting animations...");
        
        // Start the main animation system
        initialAnimationBurst();
        animationFrame = requestAnimationFrame(scheduleNextAnimation);
        
        // Initial burst of animations - create a beautiful opening
        for (let i = 0; i < 10; i++) { // Increased from 5 to 10 for more initial balloons
            setTimeout(() => {
                createBalloon();
            }, i * 100); // Reduced timing for faster appearance
        }
        
        // Add bigger confetti shower at the beginning
        setTimeout(() => {
            createConfetti();
            setTimeout(() => {
                createConfetti();
            }, 200);
            setTimeout(() => {
                createConfetti();
            }, 400);
        }, 300);
        
        // Add more falling stars
        setTimeout(() => {
            for (let i = 0; i < 8; i++) { // Increased from 5 to 8
                setTimeout(() => {
                    createFallingStar();
                }, i * 100); // Reduced timing
            }
        }, 600);
        
        // Add more hearts after a slight delay
        setTimeout(() => {
            for (let i = 0; i < 12; i++) { // Increased from 5 to 12
                setTimeout(() => {
                    createFloatingHearts();
                }, i * 100); // Reduced timing
            }
        }, 900);

        // Continuous animations at different intervals with increased frequency
        
        // Balloons - increased frequency
        setInterval(() => {
            if (Math.random() < 0.6) { // 60% chance to create balloon (increased from 50%)
                createBalloon();
            }
        }, 2500);  // Every 2.5 seconds (reduced from 3s)
        
        // Confetti - more frequent bursts
        setInterval(() => {
            if (Math.random() < 0.4) { // 40% chance (increased from 30%)
                createConfetti();
            }
        }, 4000);  // Every 4 seconds (reduced from 5s)
        
        // Hearts - increased frequency
        setInterval(() => {
            if (Math.random() < 0.5) { // 50% chance (increased from 40%)
                createFloatingHearts();
            }
        }, 3000);  // Every 3 seconds (reduced from 4s)
        
        // Falling stars - more frequent appearance
        setInterval(() => {
            if (Math.random() < 0.4) { // 40% chance (increased from 30%)
                createFallingStar();
            }
        }, 5000);  // Every 5 seconds (reduced from 6s)
        
        // Add an occasional burst of extra animations every 10 seconds
        setInterval(() => {
            const burstType = Math.random();
            
            // Create a burst of 5-10 animations of a random type (increased from 3-5)
            const burstCount = Math.floor(Math.random() * 5) + 5; // 5-10 animations
            
            for (let i = 0; i < burstCount; i++) {
                setTimeout(() => {
                    if (burstType < 0.2) {
                        createBalloon();
                    } else if (burstType < 0.4) {
                        createFloatingHearts();
                    } else if (burstType < 0.6) {
                        createFallingStar();
                    } else if (burstType < 0.8) {
                        createConfetti();
                    } else {
                        // 20% chance to create sparkles
                        createSparkles();
                    }
                }, i * 100); // Reduced from 200ms to 100ms for more frequent animations
            }
            
            // 30% chance to also create fireworks for extra impact
            if (Math.random() < 0.3) {
                setTimeout(() => {
                    createFirework();
                    // 50% chance for a second firework
                    if (Math.random() < 0.5) {
                        setTimeout(createFirework, 500);
                    }
                }, burstCount * 100 + 200);
            }
        }, 10000); // Every 10 seconds
        
        // Add super bursts every 30 seconds for extreme animation moments
        setInterval(() => {
            console.log("Super burst activated!");
            
            // Create waves of animations over 3 seconds
            // Wave 1: Massive confetti burst
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    if (i % 3 === 0) {
                        createConfetti();
                    } else if (i % 3 === 1) {
                        createFloatingHearts();
                    } else {
                        createBalloon();
                    }
                }, i * 100);
            }
            
            // Wave 2: Fireworks and sparkles
            setTimeout(() => {
                createFirework();
                
                setTimeout(() => {
                    for (let i = 0; i < 3; i++) {
                        setTimeout(createSparkles, i * 300);
                    }
                }, 500);
                
                setTimeout(createFirework, 1000);
            }, 1500);
            
            // Wave 3: Final burst with everything
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                        const animType = Math.random();
                        if (animType < 0.25) {
                            createFallingStar();
                        } else if (animType < 0.5) {
                            createBalloon();
                        } else if (animType < 0.75) {
                            createFloatingHearts();
                        } else {
                            createConfetti();
                        }
                    }, i * 100);
                }
                
                // Grand finale
                setTimeout(createFirework, 1200);
            }, 3000);
            
        }, 30000); // Every 30 seconds
    }

    // Start the countdown immediately
    updateCountdown();
});

setInterval(updateAgeCounter, 1000);
updateAgeCounter();

// Placeholder functions (replace with your actual animation code)
// These functions are defined in animations.js, so we don't need to redefine them here
// Let animations.js handle all the animation creation