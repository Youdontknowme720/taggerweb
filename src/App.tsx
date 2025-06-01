import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import './index.css'

const App = () => {
    return (
        <div>
            <motion.h1
                initial={{ y: '-100px' }}
                transition={{ duration: 1.5 }}
                animate={{
                y: '20px',
                fontSize: '50px',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                color: 'white',
                fontFamily: "'Outfit', sans-serif",
            }}
            >
                My Projects overview
            </motion.h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '100px',
            }}>
                <Link to="/tagger">
                    <motion.button
                        whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgb(78, 113, 255)' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{
                            backgroundColor: '#4E71FF',
                            color: 'white',
                            border: 'none',
                            padding: '15px 40px',
                            fontSize: '18px',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            boxShadow: '0px 4px 12px rgba(78, 113, 255, 0.5)',
                            userSelect: 'none',
                        }}
                    >
                        Try my Tagger
                    </motion.button>
                </Link>
            </div>
        </div>
    );
};
export default App;