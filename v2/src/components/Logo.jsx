import '../css/logo.modules.css'
import '../css/z.modules.css'
import '../css/c.modules.css'
import '../css/r.modules.css'
import { useEffect, useState } from 'react'

function Logo() {

    const [ z, setZ ] = useState(false)
    const [ c, setC ] = useState(false)
    const [ r, setR ] = useState(false)

    useEffect(() =>{
        //time Z
        setTimeout(() =>{ setZ(true) }, 500)
        setTimeout(() => { setZ(false) }, 2500);
        //time C
        setTimeout(() =>{ setC(true) }, 2500);
        setTimeout(() => { setC(false) }, 4500);
         //time R
        setTimeout(() =>{ setR(true) }, 4500)
        setTimeout(() => { setR(false) }, 6500);
    }, [])

  return (
    <div>
        <div className='zcr d-flex'>
            {z &&
                <div className="z d-flex flex-column align-items-center">
                    <div data-line='top' className='d-flex justify-content-between'>
                        <div className="mid-top"></div>
                        <div className="mid-down"></div>
                    </div>

                    <div data-line='mid' className='d-flex justify-content-between'>
                        <div className="mid-top"></div>
                        <div className='d-flex align-items-end'>
                            <div data-icon='top'></div>
                            <div data-icon='down'></div>
                        </div>
                        <div className="mid-down"></div>
                    </div>

                    <div data-line='down' className='d-flex justify-content-between'>
                        <div className="mid-top"></div>
                        <div className="mid-down"></div>
                    </div>
                </div>
            }
            {c &&
                <div className="c d-flex flex-column align-items-center">
                    <div data-line='cTop'></div>

                    <div data-line='mid' className='d-flex flex-column justify-content-between align-items-end'>
                        <div className="mid-top"></div>
                        <div className="mid-down"></div>
                    </div>

                    <div data-line='down'></div>
                </div>
            }
            {r &&
                <div className="r d-flex flex-column align-items-start">
                    <div data-line='top' className='d'></div>
                    <div className='d-flex align-items-end'>
                        <div data-line='mid' className='d-flex justify-content-between'></div>
                        <div data-line='down' className='d-flex justify-content-between'></div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Logo
