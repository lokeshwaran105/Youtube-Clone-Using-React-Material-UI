import {Home, Whatshot, Subscriptions, History, WatchLater, PlaylistAdd} from '@material-ui/icons';

function SideBar(){
    return(
        <div className="container-fluid side-bar d-flex flex-column mt-3">
            <div className='side-menu d-flex align-items-center my-3 bg-light'>
                <Home className='me-2 fs-2'/>
                <span className='fs-5'>Home</span>
            </div>
            <div className='side-menu d-flex align-items-center my-3'>
                <Whatshot className='me-2 fs-2'/>
                <span className='fs-5'>Trending</span>
            </div>
            <div className='side-menu d-flex align-items-center my-3'>
                <Subscriptions className='me-2 fs-2'/>
                <span className='fs-5'>Subscriptions</span>
            </div>
            <div className='side-menu d-flex align-items-center my-3'>
                <History className='me-2 fs-2'/>
                <span className='fs-5'>History</span>
            </div>
            <div className='side-menu d-flex align-items-center my-3'>
                <WatchLater className='me-2 fs-2'/>
                <span className='fs-5'>WatchLater</span>
            </div>
            <div className='side-menu d-flex align-items-center my-3'>
                <PlaylistAdd className='me-2 fs-2'/>
                <span className='fs-5'>Playlist</span>
            </div>
        </div>
    )
}

export default SideBar;