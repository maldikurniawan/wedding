import React from "react";

const Sakura = () => {
    const flowers = new Array(30).fill(null); // Create an array of 30 sakura flowers

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
            {flowers.map((_, index) => (
                <div
                    key={index}
                    className="sakura"
                    style={{
                        left: `${Math.random() * 100}%`, // Random left position
                        animationDuration: `${Math.random() * 3 + 3}s`, // Random fall duration
                        animationDelay: `${Math.random() * 5}s`, // Random delay before falling
                    }}
                >
                    <img src="sakura.png" alt="Sakura Flower" className="w-6 h-6" />
                </div>
            ))}
        </div>
    );
};

export default Sakura;
