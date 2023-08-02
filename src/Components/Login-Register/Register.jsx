import style from './logreg.module.css';
const Register = () => {
    return (
        <div className={style.backgorundcolor}>

            <div className={style.container}>

                <h1 className={style.tittle_register}>Registro</h1>
                <p>El registro es importante para que el usuario pueda navegar por las diferencias herramientas
                    anexas en el presente portafolio, entiendo que puede ser un poco canson hacer el registro pero
                    le aseguro que va a poder evidenciar todo lo que he aprendido, de antemao agradezco enormemente
                    tenerme encuenta para la oferta, espero que le guste mi trabajo y tenga claro que de estar 
                    trabajando con ustedes estare 110% comprometida con el trabajo
                </p>
                <h2 className={style.subtitle}>Bienvenidos y disfruten la experiencia</h2>
                <form action="post" className={style.forms_actions}>
                    <label>
                        <input type="text" placeholder="email" />
                    </label>
                    <label>
                        <input type="password" placeholder="password" />
                    </label>
                    <button>Enviar</button>
                    <button>Registro Gmail</button>
                    <button>Registro con Outlook</button>
                    <button>Registro con Git</button>
                </form>
            </div>
        </div>
    )
};
export default Register;