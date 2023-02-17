import styles from './pokemons.module.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen"

import { fetchPokemons } from '../api/fetchPokemons';
import { Pokemon } from "../types/types"

const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading(true);
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
            setIsLoading(false);
        };
        fetchAllPokemons();
    }, []);

    if (isLoading || !pokemons){
        return <LoadingScreen />
    }

    return (
        <>
          <Header query={query} setQuery={setQuery} />
          <main>
            <nav className={styles.nav}>
                {pokemons?.slice(0, 151).map((pokemon) => (
                    <Link to={`/pokemons/${pokemon.name.toLowerCase()}`} className={styles.listItem} key={pokemon.id}>
                        <img className={styles.listItemIcon} src={pokemon.imgSrc} alt={pokemon.name}/>
                        <div className={styles.listItemText}>
                            <span>{pokemon.name}</span>
                            <span>{pokemon.id}</span>
                        </div>
                    </Link>
                ))}
            </nav>
          </main>
          <Footer />
        </>
    )
};

export default Pokemons;