import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [ 'o', 'n', 'a', 't', 'h', 'a', 'n']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    return (
        <div className="container home-page">
            <div className="text-zone"> 
                <h1> Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={15}/>
                </h1>
                <h2>Fullstack Developer / Motion Designer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home