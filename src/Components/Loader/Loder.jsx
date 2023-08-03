import style from './loaderStyle.module.css';
const Loader = () => {
    return(
    <div class={style.container}>
        <div class={style.ring}></div>
        <div class={style.ring}></div>
        <div class={style.ring}></div>
        <span class={style.loading}></span>
    </div>
    );
}
export default Loader;