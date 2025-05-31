import React from 'react';
import './Dropbox.css';

type DropboxProps = {
    onFileDrop: (file: File) => void;
};

const FileDrop: React.FC<DropboxProps> = ({onFileDrop}) => {
    const [droppedFiles, setDroppedFiles] = React.useState<File[]>([]);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const files = Array.from(e.dataTransfer.files);
        if (files[0].name.split('.').pop() === 'mp3'){
            setDroppedFiles(files);
            onFileDrop(files[0]);
            console.log(files);
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div
            className='container-dropbox'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <p className='dropbox-text'>Drop one of your mp3 files here</p>
            {droppedFiles.length > 0 && (
                <ul style={{marginTop: '0px'}}>
                    {droppedFiles.map((file, index) => (
                        <p key={index}
                           style={{fontFamily: 'Outfit, sans-serif',
                           fontSize: '20px', color: '#4E71FF'}}>
                            {file.name}
                        </p>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FileDrop;