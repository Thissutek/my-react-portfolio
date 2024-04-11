import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_mrroz0l',
                'template_2ur2zya',
                refForm.current,
                'SCxE7LeChxEvGH_h9'
            )
            .then (
                () => {
                    alert('Message successfully sent!')
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}   
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e', ]}
                            idx={15}    
                        />
                    </h1>
                    <p>I'm interested in any opportunities if you have any questions or just want to connect don't hesitate to contact me</p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type='text' 
                                        name='name' 
                                        placeholder='Name' 
                                        required />
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email' 
                                        name='email' 
                                        placeholder='Email' 
                                        required />
                                </li>
                                <li>
                                    <input 
                                        placeholder='Subject' 
                                        type='text' 
                                        name='subject' 
                                        required />
                                </li>
                                <li>
                                    <textarea
                                        placeholder='Message'
                                        name='message'
                                        required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact