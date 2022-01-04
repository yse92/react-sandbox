const wi = '250px';
function Avatar(props) {
  const myAvatar = props.avatar || '';//null ???
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
      width={wi}
    />
  );
}

export default Avatar;