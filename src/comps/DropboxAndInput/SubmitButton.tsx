import React, { useState } from 'react';
import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

interface SubmitButtonProps {
    interpret: string;
    titel: string;
    file: File | null;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ interpret, titel, file }) => {
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    const fadeIn = (audio: HTMLAudioElement, duration = 1000) => {
        audio.volume = 0;
        const step = 0.02;
        const interval = duration / (1 / step);
        const fadeInInterval = setInterval(() => {
            if (audio.volume < 1) {
                audio.volume = Math.min(audio.volume + step, 1);
            } else {
                clearInterval(fadeInInterval);
            }
        }, interval);
    };

    const fadeOut = (audio: HTMLAudioElement, duration = 1000) => {
        const step = 0.02;
        const interval = duration / (1 / step);
        const fadeOutInterval = setInterval(() => {
            if (audio.volume > 0) {
                audio.volume = Math.max(audio.volume - step, 0);
            } else {
                audio.pause();
                clearInterval(fadeOutInterval);
            }
        }, interval);
    };

    const handleSubmit = async () => {
        if (!file) {
            console.error('No file selected');
            return;
        }

        const audioUrl = URL.createObjectURL(file);
        if (audioRef.current) {
            const audio = audioRef.current;
            audio.src = audioUrl;
            audio.currentTime = 30;
            audio.volume = 0;
            audio.play().then(() => {
                fadeIn(audio, 3000);

                setTimeout(() => {
                    fadeOut(audio, 3000);
                }, 4000);
            });
        }

        setIsLoading(true);
        const API_URL = 'https://youdontknowme.pythonanywhere.com';
        const formData = new FormData();
        formData.append('interpret', interpret);
        formData.append('titel', titel);
        formData.append('file', file);

        try {
            const response = await fetch(`${API_URL}/tagging`, {
                method: 'POST',
                body: formData,
                mode: 'cors',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = file.name.replace('.mp3', '_getaggt.mp3');
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
            <motion.button
                onClick={handleSubmit}
                disabled={isLoading}
                whileTap={{ scale: 0.95 }}
                className="submit"
                style={{
                    padding: '12px 24px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    backgroundColor: '#4E71FF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    fontFamily: 'Outfit, sans-serif',
                    marginBottom: '20px',
                }}
            >
                {isLoading ? '' : 'Submit'}
                {isLoading && (
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                            color: ['#ff0000', '#030f3a', '#060682', '#1c8080'],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: 'linear',
                        }}
                        style={{
                            width: 24,
                            height: 24,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Music size={20} />
                    </motion.div>
                )}
            </motion.button>
            <audio ref={audioRef} style={{ display: 'none' }} />
        </div>
    );
};

export default SubmitButton;
