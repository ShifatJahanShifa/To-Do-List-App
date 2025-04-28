export const confetti=()=>{
    const count =300,
    defaults = {
        origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
    confetti(
        Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
        })
    );
    }

    fire(0.25, {
    spread: 36,
    startVelocity: 65,
    });

    fire(0.2, {
    spread: 70,
    });

    fire(0.35, {
    spread: 150,
    decay: 0.71,
    scalar: 0.8,
    });

    fire(0.1, {
    spread: 120,
    startVelocity: 35,
    decay: 0.92,
    scalar: 1.2,
    });

    fire(0.1, {
    spread: 120,
    startVelocity: 45,
    });
} 
