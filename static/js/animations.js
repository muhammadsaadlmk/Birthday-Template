function createConfetti() {
    const colors = ['#ff69b4', '#4a90e2', '#50c878', '#ffd700', '#ff1493', '#ff6b6b', '#4dc4ff'];
    const confettiContainer = document.getElementById('confetti-container');
    
    // Create fewer confetti elements for better performance
    const confettiCount = Math.min(window.innerWidth / 40, 30); // Adaptive count based on screen size
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        
        // More variety in shapes
        const shapeType = Math.random();
        if (shapeType < 0.33) {
            // Circle
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.borderRadius = '50%';
        } else if (shapeType < 0.66) {
            // Square
            confetti.style.width = Math.random() * 8 + 4 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.borderRadius = '0';
        } else {
            // Rectangle
            confetti.style.width = Math.random() * 15 + 5 + 'px';
            confetti.style.height = Math.random() * 5 + 3 + 'px';
            confetti.style.borderRadius = '0';
        }
        
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = Math.random() * 0.6 + 0.4; // Better opacity range
        confetti.style.filter = 'blur(0.5px)'; // Less blur for sharper look
        confetti.style.zIndex = '1000';

        const animation = confetti.animate([
            { transform: `translate(0, 0) rotate(0deg) scale(1)`, opacity: 1 },
            { 
                transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight}px) 
                           rotate(${Math.random() * 720}deg) scale(0)`,
                opacity: 0 
            }
        ], {
            duration: Math.random() * 2000 + 3000, // Longer duration
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        animation.onfinish = () => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        };
        confettiContainer.appendChild(confetti);
    }
}

function createFloatingHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    const size = Math.random() * 20 + 20;
    const colors = ['#ff69b4', '#ff1493', '#ff6b6b', '#ff4081', '#e84393'];
    
    // Randomly choose between emoji heart and CSS heart
    const useEmoji = Math.random() > 0.5;
    
    if (useEmoji) {
        // Use emoji hearts with different styles
        const heartEmojis = ['❤️', '💖', '💕', '💓', '💗', '💘'];
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.fontSize = size + 'px';
    } else {
        // Create CSS heart shape
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.transformOrigin = 'center';
        heart.style.transform = 'rotate(-45deg)';
        heart.style.clipPath = 'polygon(50% 0%, 100% 38%, 100% 100%, 0% 100%, 0% 38%)';

        // Create heart shape by adding two circles
        const beforePseudo = document.createElement('div');
        beforePseudo.style.content = "''";
        beforePseudo.style.width = '100%';
        beforePseudo.style.height = '100%';
        beforePseudo.style.backgroundColor = 'inherit';
        beforePseudo.style.borderRadius = '50%';
        beforePseudo.style.position = 'absolute';
        beforePseudo.style.top = '-50%';
        beforePseudo.style.left = '0';
        
        const afterPseudo = document.createElement('div');
        afterPseudo.style.content = "''";
        afterPseudo.style.width = '100%';
        afterPseudo.style.height = '100%';
        afterPseudo.style.backgroundColor = 'inherit';
        afterPseudo.style.borderRadius = '50%';
        afterPseudo.style.position = 'absolute';
        afterPseudo.style.top = '0';
        afterPseudo.style.left = '-50%';
        
        heart.appendChild(beforePseudo);
        heart.appendChild(afterPseudo);
    }
    
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.filter = 'drop-shadow(0 0 10px rgba(255,105,180,0.5))';
    heart.style.zIndex = '1000';

    // Create more interesting path with slight wobble
    const randomX = Math.random() * 100 - 50; // Random x offset between -50 and 50
    const wobbleAmount = Math.random() * 15 + 5; // Random wobble amount
    const rotateAmount = Math.random() * 360;
    
    const animation = heart.animate([
        { 
            transform: useEmoji ? 'translateY(0) scale(1) rotate(0deg)' : 
                                'translateY(0) scale(1) rotate(-45deg)',
            opacity: 1 
        },
        { 
            transform: useEmoji ? 
                `translateY(-${window.innerHeight * 0.3}px) translateX(${-wobbleAmount}px) scale(1.2) rotate(${rotateAmount * 0.3}deg)` : 
                `translateY(-${window.innerHeight * 0.3}px) translateX(${-wobbleAmount}px) scale(1.2) rotate(${rotateAmount * 0.3 - 45}deg)`,
            opacity: 0.8 
        },
        { 
            transform: useEmoji ? 
                `translateY(-${window.innerHeight * 0.6}px) translateX(${wobbleAmount}px) scale(1.4) rotate(${rotateAmount * 0.6}deg)` : 
                `translateY(-${window.innerHeight * 0.6}px) translateX(${wobbleAmount}px) scale(1.4) rotate(${rotateAmount * 0.6 - 45}deg)`,
            opacity: 0.6 
        },
        { 
            transform: useEmoji ? 
                `translateY(-${window.innerHeight + 100}px) translateX(${randomX}px) scale(1.2) rotate(${rotateAmount}deg)` : 
                `translateY(-${window.innerHeight + 100}px) translateX(${randomX}px) scale(1.2) rotate(${rotateAmount - 45}deg)`,
            opacity: 0 
        }
    ], {
        duration: Math.random() * 1000 + 4000, // Random duration between 4-5s
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    });

    animation.onfinish = () => {
        if (heart.parentNode) {
            heart.remove();
        }
    };
    heartsContainer.appendChild(heart);
}

function createBalloon() {
    const balloonContainer = document.getElementById('balloon-container');
    const balloon = document.createElement('div');
    
    // More variety in balloon sizes but keep them reasonable
    const size = Math.random() * 30 + 30;
    
    // Expanded color palette with more vibrant options
    const colors = [
        '#ff69b4', '#ff1493', '#4dc4ff', '#ff6b6b', '#ffd700', 
        '#9b59b6', '#3498db', '#1abc9c', '#2ecc71', '#f1c40f', 
        '#e67e22', '#e74c3c'
    ];
    
    // Different balloon shapes
    const shapeType = Math.random();
    let balloonShape;
    
    if (shapeType < 0.6) {
        // Standard oval balloon
        const heightRatio = 1.2 + (Math.random() * 0.3);
        balloon.style.width = size + 'px';
        balloon.style.height = (size * heightRatio) + 'px';
        balloon.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
        balloonShape = 'oval';
    } else if (shapeType < 0.8) {
        // Heart shaped balloon
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.transformOrigin = 'center';
        balloon.style.borderRadius = '0';
        balloon.style.transform = 'rotate(-45deg)';
        
        // Create heart shape using pseudo-elements
        const beforePseudo = document.createElement('div');
        beforePseudo.style.content = "''";
        beforePseudo.style.width = '100%';
        beforePseudo.style.height = '100%';
        beforePseudo.style.backgroundColor = 'inherit';
        beforePseudo.style.borderRadius = '50%';
        beforePseudo.style.position = 'absolute';
        beforePseudo.style.top = '-50%';
        beforePseudo.style.left = '0';
        
        const afterPseudo = document.createElement('div');
        afterPseudo.style.content = "''";
        afterPseudo.style.width = '100%';
        afterPseudo.style.height = '100%';
        afterPseudo.style.backgroundColor = 'inherit';
        afterPseudo.style.borderRadius = '50%';
        afterPseudo.style.position = 'absolute';
        afterPseudo.style.top = '0';
        afterPseudo.style.left = '-50%';
        
        balloon.appendChild(beforePseudo);
        balloon.appendChild(afterPseudo);
        
        balloonShape = 'heart';
    } else {
        // Star shaped balloon
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
        balloonShape = 'star';
    }

    // Common balloon styling
    balloon.style.position = 'absolute';
    
    // Use gradient colors for more visual appeal
    const colorIndex = Math.floor(Math.random() * colors.length);
    const secondColorIndex = (colorIndex + 1) % colors.length;
    balloon.style.background = `radial-gradient(circle at 30% 30%, ${colors[colorIndex]} 0%, ${colors[secondColorIndex]} 100%)`;
    
    balloon.style.left = Math.random() * window.innerWidth + 'px';
    balloon.style.top = window.innerHeight + 'px';
    balloon.style.boxShadow = '0 0 20px rgba(255,105,180,0.5)';
    balloon.style.zIndex = '999';

    // Add string to balloon - different for heart shape
    const string = document.createElement('div');
    string.style.position = 'absolute';
    string.style.width = '2px';
    string.style.height = '40px';
    string.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.3))';
    
    if (balloonShape === 'heart') {
        string.style.left = '0';
        string.style.bottom = '-40px';
        string.style.transform = 'rotate(45deg) translateX(100%)';
    } else {
        string.style.left = '50%';
        string.style.bottom = '-40px';
        string.style.transform = 'translateX(-50%)';
    }
    
    string.style.opacity = '0.6';
    balloon.appendChild(string);

    // Add shine effect for more realistic look
    const shine = document.createElement('div');
    shine.style.position = 'absolute';
    shine.style.width = '25%';
    shine.style.height = '45%';
    shine.style.background = 'linear-gradient(45deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)';
    shine.style.borderRadius = '50%';
    shine.style.top = '10%';
    shine.style.left = '10%';
    shine.style.pointerEvents = 'none';
    balloon.appendChild(shine);
    
    // Add secondary highlight
    const highlight = document.createElement('div');
    highlight.style.position = 'absolute';
    highlight.style.width = '10%';
    highlight.style.height = '10%';
    highlight.style.background = 'rgba(255,255,255,0.5)';
    highlight.style.borderRadius = '50%';
    highlight.style.top = '20%';
    highlight.style.left = '25%';
    highlight.style.pointerEvents = 'none';
    balloon.appendChild(highlight);

    // Create more interesting path with wobble
    const wobbleX = Math.random() * 100 - 50; 
    const wobbleMidX = Math.random() * 60 - 30;
    const rotateStart = Math.random() * 10 - 5;
    const rotateMid = Math.random() * 20 - 10;
    const rotateEnd = Math.random() * 30 - 15;
    
    let baseTransform;
    if (balloonShape === 'heart') {
        baseTransform = 'rotate(-45deg)';
    } else if (balloonShape === 'star') {
        baseTransform = 'rotate(0deg)';
    } else {
        baseTransform = 'rotate(0deg)';
    }
    
    const animation = balloon.animate([
        { 
            transform: `translateY(0) translateX(0) ${baseTransform}`,
            filter: 'brightness(1)'
        },
        { 
            transform: `translateY(-${window.innerHeight * 0.3}px) translateX(${wobbleMidX}px) 
                      ${baseTransform} rotate(${rotateMid}deg)`,
            filter: 'brightness(1.1)'
        },
        { 
            transform: `translateY(-${window.innerHeight + 100}px) translateX(${wobbleX}px) 
                      ${baseTransform} rotate(${rotateEnd}deg)`,
            filter: 'brightness(1.2)'
        }
    ], {
        duration: Math.random() * 2000 + 5000, // 5-7 seconds
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    });

    animation.onfinish = () => {
        if (balloon.parentNode) {
            balloon.remove();
        }
    };
    
    // Add subtle bobbing animation for more realistic floating
    const bobbing = balloon.animate([
        { transform: `${baseTransform} translateY(0px)` },
        { transform: `${baseTransform} translateY(-5px)` },
        { transform: `${baseTransform} translateY(0px)` }
    ], {
        duration: 1000,
        iterations: Math.ceil(animation.effect.getTiming().duration / 1000),
        easing: 'ease-in-out'
    });
    
    balloonContainer.appendChild(balloon);
}

// Create falling stars (new celebration effect)
function createFallingStar() {
    const starsContainer = document.getElementById('confetti-container');
    const star = document.createElement('div');
    
    // Star size
    const size = Math.random() * 15 + 5;
    
    // Star styles
    star.style.position = 'absolute';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundImage = 'radial-gradient(circle, white 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 215, 0, 0.5) 70%, transparent 100%)';
    star.style.borderRadius = '50%';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = '-5px';
    star.style.boxShadow = '0 0 25px 5px rgba(255, 215, 0, 0.7)';
    star.style.filter = 'blur(0.5px)';
    star.style.zIndex = '1000';
    
    // Create tail behind the star
    const tail = document.createElement('div');
    tail.style.position = 'absolute';
    tail.style.width = '2px';
    tail.style.height = size * 5 + 'px';
    tail.style.background = 'linear-gradient(to top, transparent, rgba(255, 255, 255, 0.8))';
    tail.style.left = '50%';
    tail.style.top = '0';
    tail.style.transform = 'translateX(-50%) translateY(-100%)';
    tail.style.zIndex = '999';
    tail.style.opacity = '0.7';
    star.appendChild(tail);
    
    // Add twinkle animation
    const twinkle = star.animate([
        { opacity: 0.3, boxShadow: '0 0 15px 2px rgba(255, 215, 0, 0.5)' },
        { opacity: 1, boxShadow: '0 0 25px 5px rgba(255, 215, 0, 0.8)' },
        { opacity: 0.3, boxShadow: '0 0 15px 2px rgba(255, 215, 0, 0.5)' }
    ], {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
    });
    
    // Path animation
    const fallDuration = Math.random() * 2000 + 1000; // 1-3 seconds
    const fallDistance = window.innerHeight + 100;
    const randomX = Math.random() * 100 - 50;
    
    const fallAnimation = star.animate([
        { transform: 'translateY(0) translateX(0) scale(1)', opacity: 1 },
        { transform: `translateY(${fallDistance * 0.3}px) translateX(${randomX * 0.3}px) scale(1.2)`, opacity: 0.9 },
        { transform: `translateY(${fallDistance}px) translateX(${randomX}px) scale(0.2)`, opacity: 0 }
    ], {
        duration: fallDuration,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    });
    
    fallAnimation.onfinish = () => {
        if (star.parentNode) {
            twinkle.cancel();
            star.remove();
        }
    };
    
    starsContainer.appendChild(star);
}

// Create sparkles (new celebration effect)
function createSparkles() {
    const container = document.getElementById('confetti-container');
    
    // Create multiple sparkles in a burst
    const sparkleCount = Math.floor(Math.random() * 10) + 10; // 10-20 sparkles
    const burstX = Math.random() * window.innerWidth;
    const burstY = Math.random() * (window.innerHeight * 0.8);
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        
        // Random size (smaller than stars)
        const size = Math.random() * 6 + 2;
        
        // Random colors with different hues
        const hue = Math.floor(Math.random() * 360);
        const color = `hsl(${hue}, 100%, 70%)`;
        
        // Sparkle styles
        sparkle.style.position = 'absolute';
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        sparkle.style.backgroundColor = color;
        sparkle.style.borderRadius = '50%';
        sparkle.style.left = burstX + 'px';
        sparkle.style.top = burstY + 'px';
        sparkle.style.boxShadow = `0 0 ${size * 2}px ${size/2}px ${color}`;
        sparkle.style.zIndex = '1001';
        
        // Calculate a random angle and distance from the burst center
        const angle = Math.random() * Math.PI * 2; // 0 to 2π
        const distance = Math.random() * 100 + 50; // 50-150px
        
        // Calculate the destination coordinates based on angle and distance
        const destX = Math.cos(angle) * distance;
        const destY = Math.sin(angle) * distance;
        
        // Create a random duration for each sparkle
        const duration = Math.random() * 1000 + 1000; // 1-2 seconds
        
        // Animate the sparkle
        const animation = sparkle.animate([
            { 
                transform: 'translate(0, 0) scale(0)', 
                opacity: 0 
            },
            { 
                transform: 'translate(0, 0) scale(1)', 
                opacity: 1,
                offset: 0.1 // Quick scale up
            },
            { 
                transform: `translate(${destX}px, ${destY}px) scale(0.8)`, 
                opacity: 0.8,
                offset: 0.3 // Start moving outward
            },
            { 
                transform: `translate(${destX * 1.2}px, ${destY * 1.2}px) scale(0.2)`, 
                opacity: 0 
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        });
        
        // Also add a pulsing animation
        const pulse = sparkle.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(1.5)', opacity: 0.8 },
            { transform: 'scale(1)', opacity: 1 }
        ], {
            duration: 500,
            iterations: Math.ceil(duration / 500),
            easing: 'ease-in-out'
        });
        
        // Remove when animation finishes
        animation.onfinish = () => {
            if (sparkle.parentNode) {
                pulse.cancel();
                sparkle.remove();
            }
        };
        
        container.appendChild(sparkle);
    }
}

// Create firework effect (another new celebration effect)
function createFirework() {
    const container = document.getElementById('confetti-container');
    
    // Launch point - from bottom of screen at random x position
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight;
    
    // Explosion point - random x deviation and height
    const endX = startX + (Math.random() * 100 - 50);
    const endY = (Math.random() * window.innerHeight * 0.5) + 100; // Upper half of screen
    
    // Create rocket
    const rocket = document.createElement('div');
    rocket.style.position = 'absolute';
    rocket.style.width = '3px';
    rocket.style.height = '15px';
    rocket.style.backgroundColor = '#FFF';
    rocket.style.borderRadius = '3px';
    rocket.style.left = startX + 'px';
    rocket.style.top = startY + 'px';
    rocket.style.zIndex = '1005';
    rocket.style.boxShadow = '0 0 10px 2px #FFF';
    
    // Add smoke trail
    const trail = document.createElement('div');
    trail.style.position = 'absolute';
    trail.style.width = '2px';
    trail.style.height = '10px';
    trail.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)';
    trail.style.borderRadius = '1px';
    trail.style.left = '0.5px';
    trail.style.bottom = '-10px';
    trail.style.opacity = '0.7';
    rocket.appendChild(trail);
    
    container.appendChild(rocket);
    
    // Launch animation
    const launchDuration = Math.random() * 1000 + 1000; // 1-2 seconds
    
    const launchAnimation = rocket.animate([
        { transform: 'translate(0, 0) rotate(0deg)' },
        { 
            transform: `translate(${endX - startX}px, ${-(startY - endY)}px) rotate(${Math.random() * 5 - 2.5}deg)` 
        }
    ], {
        duration: launchDuration,
        easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
    });
    
    // Explosion
    launchAnimation.onfinish = () => {
        // Remove rocket
        if (rocket.parentNode) {
            rocket.remove();
        }
        
        // Create explosion
        const particleCount = Math.floor(Math.random() * 30) + 40; // 40-70 particles
        const explosionColors = [
            '#FF5252', // Red
            '#FF4081', // Pink
            '#E040FB', // Purple
            '#7C4DFF', // Deep Purple
            '#536DFE', // Indigo
            '#448AFF', // Blue
            '#40C4FF', // Light Blue
            '#18FFFF', // Cyan
            '#64FFDA', // Teal
            '#B2FF59', // Light Green
            '#EEFF41', // Lime
            '#FFFF00', // Yellow
            '#FFD740', // Amber
            '#FFAB40', // Orange
            '#FF6E40'  // Deep Orange
        ];
        
        // Select 2-3 colors for this firework
        const fireworkColors = [];
        for (let i = 0; i < 3; i++) {
            fireworkColors.push(explosionColors[Math.floor(Math.random() * explosionColors.length)]);
        }
        
        // Create explosion particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            
            // Random size for particles
            const size = Math.random() * 4 + 2;
            
            // Random color from the selected colors
            const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
            
            // Particle styles
            particle.style.position = 'absolute';
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.backgroundColor = color;
            particle.style.borderRadius = '50%';
            particle.style.left = endX + 'px';
            particle.style.top = endY + 'px';
            particle.style.boxShadow = `0 0 ${size * 2}px ${size}px ${color}`;
            particle.style.zIndex = '1004';
            
            // Calculate a random angle and distance for the particle
            const angle = Math.random() * Math.PI * 2; // 0 to 2π
            const distance = Math.random() * 150 + 50; // 50-200px
            
            // Calculate the destination coordinates
            const destX = Math.cos(angle) * distance;
            const destY = Math.sin(angle) * distance;
            
            // Create a random duration for each particle
            const particleDuration = Math.random() * 1000 + 800; // 0.8-1.8 seconds
            
            // Gravity effect - particles fall down after exploding
            const gravityEffect = Math.random() * 50 + 30; // 30-80px downward
            
            // Animate the particle - explosion with gravity
            const animation = particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { 
                    transform: `translate(${destX * 0.6}px, ${destY * 0.6}px) scale(0.8)`, 
                    opacity: 0.8,
                    offset: 0.3
                },
                { 
                    transform: `translate(${destX}px, ${destY + gravityEffect}px) scale(0.2)`, 
                    opacity: 0 
                }
            ], {
                duration: particleDuration,
                easing: 'cubic-bezier(0.25, 0.5, 0.5, 1)'
            });
            
            // Remove when animation finishes
            animation.onfinish = () => {
                if (particle.parentNode) {
                    particle.remove();
                }
            };
            
            container.appendChild(particle);
        }
        
        // Add a light flash effect
        const flash = document.createElement('div');
        flash.style.position = 'absolute';
        flash.style.width = '5px';
        flash.style.height = '5px';
        flash.style.left = endX + 'px';
        flash.style.top = endY + 'px';
        flash.style.borderRadius = '50%';
        flash.style.background = 'white';
        flash.style.boxShadow = '0 0 100px 50px white';
        flash.style.opacity = '0.7';
        flash.style.zIndex = '1003';
        
        const flashAnimation = flash.animate([
            { transform: 'scale(0)', opacity: 0.9 },
            { transform: 'scale(1)', opacity: 0.7 },
            { transform: 'scale(1.5)', opacity: 0 }
        ], {
            duration: 400,
            easing: 'ease-out'
        });
        
        flashAnimation.onfinish = () => {
            if (flash.parentNode) {
                flash.remove();
            }
        };
        
        container.appendChild(flash);
        
        // Create sparkles at explosion point for extra effect
        createSparkles();
    };
}

// Performance monitor and limiter
const performanceMonitor = {
    fps: 60,
    frameTime: 0,
    frameCount: 0,
    lastTime: 0,
    maxElements: 350,  // Increased from 200 to 350 for LOTS more animations
    
    update: function(timestamp) {
        if (!this.lastTime) {
            this.lastTime = timestamp;
            return;
        }
        
        const deltaTime = timestamp - this.lastTime;
        this.frameTime += deltaTime;
        this.frameCount++;
        
        // Calculate FPS every second
        if (this.frameTime >= 1000) {
            this.fps = this.frameCount;
            this.frameTime = 0;
            this.frameCount = 0;
            
            // Cleanup if too many elements or poor performance
            this.checkCleanup();
            
            // Create special periodic bursts every few seconds
            if (Math.random() < 0.3) { // 30% chance each second to create a special burst
                this.createSpecialBurst();
            }
        }
        
        this.lastTime = timestamp;
    },
    
    // Check if we need to clean up animations for better performance
    checkCleanup: function() {
        // If framerate drops below threshold, remove some animations
        if (this.fps < 20) { // Reduced from 25 to allow even lower framerates before cleanup
            cleanupAnimations(0.3); // Reduced from 40% to 30% to remove fewer elements
        }
        
        // Count total animation elements
        const confettiElements = document.getElementById('confetti-container').children.length;
        const balloonElements = document.getElementById('balloon-container').children.length;
        const heartsElements = document.getElementById('hearts-container').children.length;
        
        const totalElements = confettiElements + balloonElements + heartsElements;
        
        // If too many elements, clean up but allow more before cleaning
        if (totalElements > this.maxElements) {
            cleanupAnimations(0.15); // Reduced from 20% to 15% to remove even fewer elements
        }
    },
    
    // Create special burst of animations every few seconds
    createSpecialBurst: function() {
        // Only create if performance is good
        if (this.fps > 25) {
            const burstType = Math.floor(Math.random() * 5); // 5 different burst types
            
            switch(burstType) {
                case 0: // Heart shower
                    for (let i = 0; i < 8; i++) {
                        setTimeout(() => createFloatingHearts(), i * 100);
                    }
                    break;
                    
                case 1: // Balloon party
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => createBalloon(), i * 150);
                    }
                    break;
                    
                case 2: // Meteor shower
                    for (let i = 0; i < 6; i++) {
                        setTimeout(() => createFallingStar(), i * 120);
                    }
                    break;
                    
                case 3: // Sparkle explosion
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => createSparkles(), i * 200);
                    }
                    break;
                    
                case 4: // Firework display
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => createFirework(), i * 400);
                    }
                    break;
            }
        }
    }
};

// Cleanup function to remove animations when needed
function cleanupAnimations(percentage) {
    const containers = [
        document.getElementById('confetti-container'),
        document.getElementById('balloon-container'),
        document.getElementById('hearts-container')
    ];
    
    containers.forEach(container => {
        const elements = Array.from(container.children);
        const elementsToRemove = Math.floor(elements.length * percentage);
        
        // Remove oldest elements (those at the beginning of the container)
        for (let i = 0; i < elementsToRemove; i++) {
            if (elements[i]) {
                elements[i].remove();
            }
        }
    });
}

// Performance optimization: Use requestAnimationFrame for smooth animations
let animationFrame;
let lastAnimationTime = 0;
const minAnimationInterval = 150; // Reduced from 250ms to 150ms for MUCH more frequent animations

function scheduleNextAnimation(timestamp) {
    // Update performance monitor
    performanceMonitor.update(timestamp);
    
    // Only create new animation if enough time has passed and performance is good
    if (timestamp - lastAnimationTime > minAnimationInterval && performanceMonitor.fps > 15) { // Further reduced from 20fps to 15fps for even more animations
        if (Math.random() < 0.75) { // Increased from 50% to 75% chance for TONS more animations
            const animationType = Math.random();
            
            // Check total elements before adding more
            const totalElements = 
                document.getElementById('confetti-container').children.length +
                document.getElementById('balloon-container').children.length + 
                document.getElementById('hearts-container').children.length;
                
            if (totalElements < performanceMonitor.maxElements) {
                // Create multiple animations at once for more visual impact
                if (Math.random() < 0.6) { // Increased from 30% to 60% chance to create multiple animations at once
                    // Sometimes create even more animations in a burst
                    if (Math.random() < 0.4) { // Increased from 20% to 40% chance for a big burst of 3+ animations
                        // Create a burst of 4-7 different animations
                        const burstCount = Math.floor(Math.random() * 4) + 4; // 4-7 animations
                        for (let i = 0; i < burstCount; i++) {
                            setTimeout(() => {
                                const burstType = Math.random();
                                if (burstType < 0.2) {
                                    createFloatingHearts();
                                } else if (burstType < 0.4) {
                                    createBalloon();
                                } else if (burstType < 0.6) {
                                    createFallingStar();
                                } else if (burstType < 0.8) {
                                    createConfetti();
                                } else {
                                    createSparkles();
                                }
                            }, i * 100); // Stagger the animations slightly
                        }
                        
                        // 25% chance to also create a firework for extra impact
                        if (Math.random() < 0.25) {
                            setTimeout(createFirework, 300);
                        }
                    } else {
                        // Create two animations of different types
                        if (animationType < 0.2) {
                            createFloatingHearts();
                            createBalloon();
                        } else if (animationType < 0.4) {
                            createFloatingHearts();
                            createFallingStar();
                        } else if (animationType < 0.6) {
                            createBalloon();
                            createFallingStar();
                        } else if (animationType < 0.8) {
                            createConfetti();
                            createFloatingHearts();
                        } else {
                            createSparkles();
                            createBalloon();
                        }
                    }
                } else {
                    // Create a single animation
                    if (animationType < 0.2) {
                        createFloatingHearts();
                    } else if (animationType < 0.4) {
                        createBalloon();
                    } else if (animationType < 0.6) {
                        createFallingStar();
                    } else if (animationType < 0.8) {
                        createConfetti();
                    } else if (animationType < 0.9) {
                        createSparkles();
                    } else {
                        createFirework(); // Sometimes create a firework for extra wow-factor
                    }
                }
                lastAnimationTime = timestamp;
            }
        }
    }
    
    animationFrame = requestAnimationFrame(scheduleNextAnimation);
}

// Initialize containers only when the page loads, but don't start animations yet
document.addEventListener('DOMContentLoaded', function() {
    // Initialize containers for cleanup function
    const containers = ['confetti-container', 'balloon-container', 'hearts-container'];
    containers.forEach(id => {
        const container = document.getElementById(id);
        if (!container) {
            console.error(`Container ${id} not found`);
        }
    });
    
    // Don't start any animations here - they will be started by the countdown function
    // when it completes in counter.js
});

// Create an initial burst of animations when the page loads
function initialAnimationBurst() {
    // Multiple waves of animations over 4 seconds with MANY more animations
    // Wave 1: Confetti burst
    for (let i = 0; i < 40; i++) { // Increased from 20 to 40
        setTimeout(() => createConfetti(), Math.random() * 600);
    }
    
    // Wave 2: Hearts and balloons
    setTimeout(() => {
        for (let i = 0; i < 25; i++) { // Increased from 10 to 25
            setTimeout(() => createFloatingHearts(), Math.random() * 500);
            setTimeout(() => createBalloon(), 100 + Math.random() * 500);
        }
    }, 600);
    
    // Wave 3: Falling stars
    setTimeout(() => {
        for (let i = 0; i < 15; i++) { // Increased from 8 to 15
            setTimeout(() => createFallingStar(), Math.random() * 600);
        }
    }, 1200);
    
    // Wave 4: Sparkles
    setTimeout(() => {
        for (let i = 0; i < 12; i++) { // Increased from 5 to 12
            setTimeout(() => createSparkles(), Math.random() * 600);
        }
    }, 1800);
    
    // Wave 5: Mixed animations
    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const type = Math.floor(Math.random() * 5);
                switch(type) {
                    case 0: createConfetti(); break;
                    case 1: createFloatingHearts(); break;
                    case 2: createBalloon(); break;
                    case 3: createFallingStar(); break;
                    case 4: createSparkles(); break;
                }
            }, Math.random() * 800);
        }
    }, 2400);
    
    // Grand finale: Fireworks
    setTimeout(() => {
        for (let i = 0; i < 8; i++) { // Increased from 3 to 8
            setTimeout(() => createFirework(), i * 200); // Faster timing
        }
    }, 3200);
    
    // Super finale: One more burst after everything else
    setTimeout(() => {
        for (let i = 0; i < 15; i++) {
            const delay = Math.random() * 1000;
            setTimeout(() => {
                const type = Math.floor(Math.random() * 6);
                switch(type) {
                    case 0: createConfetti(); break;
                    case 1: createFloatingHearts(); break;
                    case 2: createBalloon(); break;
                    case 3: createFallingStar(); break;
                    case 4: createSparkles(); break;
                    case 5: createFirework(); break;
                }
            }, delay);
        }
    }, 4000);
}

// Cleanup on page unload or visibility change
window.addEventListener('unload', function() {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
});

// Pause animations when tab is not visible to save resources
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }
    } else {
        if (!animationFrame) {
            animationFrame = requestAnimationFrame(scheduleNextAnimation);
        }
    }
});

// Export functions so counter.js can use them
window.initialAnimationBurst = initialAnimationBurst;
window.scheduleNextAnimation = scheduleNextAnimation;