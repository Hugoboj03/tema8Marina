import styles from './styles.module.css';
import types from './types.module.css';

const Character = () => {
    const character = {
        display: "flex"
    };

    const character__header = {
        padding: "10px"
    };

    const character__title = {
        fontSize: "24px" // Se corrige "font- size"
    };

    return (
        <div style={character}>
            <header style={character__header}>
                <h1 style={character__title}>Título</h1>
            </header>
        </div>
    );
};

export default Character;

