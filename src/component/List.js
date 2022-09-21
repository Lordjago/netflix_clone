import ListItem from "./ListItem";

const trailer = 'https://d2ilpn13gulr31.cloudfront.net/blog/wp-content/uploads/2020/01/animated-movies.gif'

export default function List({list}) {
  return (
    <div className="list-container">
      <h4 style={{marginBottom: '15px'}}>{list.title}</h4>
      <div className="sliderGrid">
        <div className="grid-list">
          {list.content.map(item => ( <ListItem item = {item}key={Math.floor(Math.random() * 100000)} />))}
    </div>
    </div>
    </div>
  );
}
