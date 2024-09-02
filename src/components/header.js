import {Menu, YouTube, Search, VideoCall, Apps, Notifications} from '@material-ui/icons';

function Header(){
    return(
        <div className="container-fluid d-flex justify-content-between mt-1">
            <div className="head-left d-flex">
                <Menu className='fs-2 me-3'/>
                <YouTube className='fs-2 text-danger'/>
                <span className='fs-5 fw-bolder'>YOUTUBE</span>
            </div>

            <div className='head-center d-flex'>
                <input type='text'></input>
                <Search />
            </div>

            <div className='head-right d-flex'>
                <VideoCall className='fs-2'/>
                <Apps className='fs-2'/>
                <Notifications className='fs-2'/>
            </div>
        </div>
    )
}

export default Header;