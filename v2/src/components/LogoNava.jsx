import '../css/LogoNav.css'

function LogoNav() {

  return (
    <div>
        <div className='zcrLogo d-flex'>
            <div className="z d-flex flex-column align-items-center">
                <div data-line='top' className='d-flex justify-content-between'>
                    <div className="mid-top"></div>
                    <div className="mid-down"></div>
                </div>

                <div data-line='mid' className='d-flex justify-content-between'>
                    <div className="mid-top"></div>
                    <div className="mid-down"></div>
                </div>

                <div data-line='down' className='d-flex justify-content-between'>
                    <div className="mid-top"></div>
                    <div className="mid-down"></div>
                </div>
            </div>

            <div className="c d-flex flex-column align-items-center">
                <div data-line='cTop'></div>

                <div data-line='mid' className='d-flex flex-column justify-content-between align-items-end'>
                    <div className="mid-top"></div>
                    <div className="mid-down"></div>
                </div>

                <div data-line='down'></div>
            </div>

            <div className="r d-flex flex-column align-items-start">
                <div data-line='top' className='d'></div>
                <div className='d-flex align-items-end'>
                    <div data-line='mid' className='d-flex justify-content-between'></div>
                    <div data-line='down' className='d-flex justify-content-between'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoNav
