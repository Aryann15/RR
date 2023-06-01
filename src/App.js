const user = {
  name: "heddy lamar",
  imageUrl: "'https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function App() {
  return (
    <div className="App">
      <h1> {user.name}</h1>
      <img
        classname="profilePic"
        src={user.imageUrl}
        alt="heddy lamar image"
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}

export default App;
