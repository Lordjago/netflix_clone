import logo from '../logo.png'

export default function Features({type}) {

  return (
    <div className='featured'>
      {type && (
        <div className='drop'>
          <span className='genre-label'>{type === 'movies' ? "Movies " : "Series "}</span>
        <select name='genre' className='genre'>
          <option>Genre</option>
          <option name='adventure'>Adventure</option>
          <option name="comedy">Comedy</option>
          <option name="crime">Crime</option>
          <option name="fantasy">Fantasy</option>
        </select>
      </div>
      )}

       <img src={logo} alt="img" />
       <h5 className='desc' style={{fontSize: '18px'}}>
       Download and use free Matrix Movie No Background available in a high-quality transparent PNG image resolution for personal usage.Download and use free Matrix Movie No Background available in a high-quality transparent PNG image resolution for personal usage.Download and use free Matrix Movie No Background available in a high-quality transparent PNG image resolution for personal usage.
       </h5>
       <div className='button'>
            <button className='btn-play'>
                <i className="bi bi-play-fill"></i>
                <span>Play</span>
            </button>
            <button className='btn-info'>
            <i className="bi bi-info-circle"></i>
            <span>More Info</span>
            </button>
       </div>
    </div>
  )
}
