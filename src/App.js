const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname" }
  ];
  return (
    <>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age} years old!
    </div>
  );
};

User.defaultProps = {
  age: 1
};

export default App;
