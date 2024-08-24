import './styles/UserCard.css';

const UserCard = ({ user, deleteUser, setUserSelected, setFormIsOpen }) => {
  const handleDelete = () => {
    deleteUser(user.id);
  };

  const handleEdit = () => {
    setUserSelected(user);
    setFormIsOpen(true);
  };

  return (
    <article className="user">
      <img
        className="user__img"
        src={user.image_url}
        alt={`${user.first_name} ${user.last_name}`}
      />
      <h3 className="user__name">
        {user.first_name} {user.last_name}
      </h3>
      <hr className="user__hr" />
      <ul className="user__list grid-container">
        <li className="user__item grid-container">
          <span className="user__label">Email: </span>
          <span className="user__value">{user.email}</span>
        </li>
        <li className="user__item grid-container">
          <span className="user__label">Birthday: </span>
          <span className="user__value">{user.birthday}</span>
        </li>
      </ul>
      <footer className="user__footer flex-container">
        <button onClick={handleDelete} className="user__btn user__delete">
          Delete
        </button>
        <button onClick={handleEdit} className="user__btn user__edit">
          Edit
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
