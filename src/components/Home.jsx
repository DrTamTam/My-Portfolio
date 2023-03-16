import avatar from '../assets/portrait.png'
function Home() {

    return (
      <div>
        <div className="profile-img" id='for-home'>
                <img src={avatar} alt="" />
        </div>
        <div className='first-title'>
        <h1>Halimat Shaibu</h1>
        <h3>Solidity Developer</h3>
        </div>
        
        
      </div>
      
    )
  }
  
  export default Home
  