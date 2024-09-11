import Styles from '../css/loading.module.css'
import load from '../img/oculos.svg'

const Loading = () => {
    return (
    <div className={`${Styles.loader} col-12 d-flex justify-content-center align-items-center`}>
        <div className={`${Styles.oculos} col-11 d-flex justify-content-center`}>
            <img src={load} alt="loading" className={`${Styles.loading} col-11 col-sm-6 col-lg-4`} />
        </div>
    </div>
    );
}

export default Loading;