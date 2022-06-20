import React from 'react'
import MovingNotics from '../MovingNotics'

const BcaPractical_6 = () => {
    return (
<div className='FirstPractical'>
            <MovingNotics />
            <h3>Practical Paper: front End Designing Tool VB.net</h3>
            <hr />
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>S.No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <th>01</th> */}
                        <td>01.  PROGRAM FOR PRINTING ARMSTRONG NO.</td>
                    </tr>
                    <div className='Practical_Code'>
                        <div>
           <h5>
                {/* code write here */}
                </h5>
             </div>
             </div>
                    {/* button for compile code online */}
             <div className='Code_Compiler'>
            <button className='btn btn-'> <a href="https://onlinegdb.com/L0upfXURp" target="_blank" rel="noopener noreferrer">Click Here for compile the code</a></button>
                    </div>
                    </tbody>
                    </table>
                    <div id='forDownloadingFile'>
    <h3>For Downloading Complete file</h3>
    <iframe src="https://onedrive.live.com/embed?cid=A86E7BB81D637AE8&resid=A86E7BB81D637AE8%21662&authkey=AOndq542N_4QoKI&em=2" width="99%" height="500" frameborder="0" scrolling="no"></iframe>
</div>

        </div>
    )
}

export default BcaPractical_6
