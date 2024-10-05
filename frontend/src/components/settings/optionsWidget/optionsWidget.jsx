import './optionsWidget.css';

const Optionswidget = () => {
    return (
        <div className='settings-widget' id='options-widget'>
            <button className='setting-option-container' >
                <p>Profile</p>
            </button>
            <button className='setting-option-container'>
                <p>Account</p>
            </button>
            <button className='setting-option-container'>
                <p>Watch history</p>
            </button>
            <button className='setting-option-container'>
                <p>Data</p>
            </button>
        </div>
    )
} 

export default Optionswidget