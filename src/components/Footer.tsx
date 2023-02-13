import styles from './footer.module.css'
import { Link } from 'react-router-dom'

//Assets 
import PokemonPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemsPic from '../assets/pokeball.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link
                onClick={(e) => e.preventDefault()}
                to="/pokemons" 
                className={styles.footerLink}
            >
                <img className={styles.footerIcon} src={PokemonPic} alt="pokeball" />
                Pokemons
            </Link>
            <Link 
                onClick={(e) => e.preventDefault()}
                to="/items"
                className={styles.footerLink}
            >
                <img className={styles.footerIcon} src={ItemsPic} alt="pokeball" />
                Items
            </Link>
            <Link
                onClick={(e) => e.preventDefault()}
                to="/location"
                className={styles.footerLink}
            >
                <img className={styles.footerIcon} src={LocationPic} alt="pokeball" />
                Map
            </Link>
        </footer>
    )
};

export default Footer;