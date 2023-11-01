import { useState } from "react"
import styles from "./styles.module.css"
import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase"
import { Link } from "react-router-dom"


const CreateUser = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [showSuccessMessage, shouldShowSuccessMessage] = useState(false)
    const [showErrorMessage, shouldShowErrorMessagem] = useState(false)
    const [message, setMessage] = useState('') 
    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        shouldShowErrorMessagem(false)
        shouldShowSuccessMessage(false)

        if(password === passwordConfirm){

            if(password.length > 5) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential: UserCredential) => {
                        console.log(userCredential)
                        shouldShowSuccessMessage(true)
                        setEmail('')
                        setPassword('')
                        setPasswordConfirm('')
                    })
                    .catch((error: any) => {
                        const { code } = error
                        if (code === 'auth/email-already-in-use'){
                            setMessage('O e-mail informado ja está em uso')
                         } else{
                            setMessage('Ocorreu um erro ao tentar criar um usuário')
                         }
                    })
            } else {
                shouldShowErrorMessagem(true)
                setMessage('A senha deve conter no mínimo 6 caracteres')
            }
        } else {
                shouldShowErrorMessagem(true)
                setMessage('As senhas são diferentes')
        }
    }

    return (

        <div className={styles.container}>
            <div className={styles.loginArea}>
                <form className={styles.loginForm} onSubmit={(e) => handleForm(e)}>

                    <input type='email' required placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" required placeholder='Digite a senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" required placeholder='Confirme a senha' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    <input type="submit" value="Cadastrar" />
                </form>

            </div>
            <div className={styles.messagesArea}>
                {showSuccessMessage && <h2 className={styles.successCard}>
                    Usuário cadastrado! clique <Link to='/'>aqui</Link>para realizar o login</h2>}
                {showErrorMessage && (<h2 className={styles.errorCard}>{message}</h2>)}
            </div>
        </div>
    )
}
export default CreateUser