const user = {
    name: 'Kitty Pup',
    imageUrl: 'https://i.imgur.com/y5EWTmj.jpeg',
    imageSize: 190,
  };
  
//   Example Component Using JSX to incorporate Javascript 
  export default function Profile() {
    return (
      <div className="Profile">
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </div>
    );
  }