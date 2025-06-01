import { motion } from 'framer-motion';
import React from 'react';
import './Dropbox.css';

type DropboxProps = {
    onFileDrop: (file: File) => void;
};

const FileDrop: React.FC<DropboxProps> = ({ onFileDrop }) => {
    const [droppedFiles, setDroppedFiles] = React.useState<File[]>([]);
    const [isInvalid, setIsInvalid] = React.useState(false);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const files = Array.from(e.dataTransfer.files);

        if (files.length === 0) return;

        const file = files[0];
        const extension = file.name.split('.').pop()?.toLowerCase();

        if (extension === 'mp3') {
            setDroppedFiles(files);
            onFileDrop(file);
            setIsInvalid(false);
        } else {
            setIsInvalid(true);
            setTimeout(() => setIsInvalid(false), 500); // shake nur kurz
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <motion.div
            className="container-dropbox"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            animate={isInvalid ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.8 }}
            style={{
                border: isInvalid ? '2px solid red' : '2px dashed #BBFBFF',
                padding: '40px',
                width: '800px',
                textAlign: 'center',
                fontFamily: 'Outfit, sans-serif',
                borderRadius: '12px',
                marginBottom: '20px',
            }}
        >
            <p className="dropbox-text">Drop one of your mp3 files here</p>

            {isInvalid && (
                <p style={{ color: 'red', marginTop: '10px' }}>
                    Nur MP3-Dateien sind erlaubt.
                </p>
            )}

            {droppedFiles.length > 0 && (
                <ul style={{ marginTop: '10px' }}>
                    {droppedFiles.map((file, index) => (
                        <p
                            key={index}
                            style={{
                                fontFamily: 'Outfit, sans-serif',
                                fontSize: '20px',
                                color: '#4E71FF',
                            }}
                        >
                            {file.name}
                        </p>
                    ))}
                </ul>
            )}
        </motion.div>
    );
};

export default FileDrop;
