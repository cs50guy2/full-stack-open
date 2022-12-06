export default function Name({ name, number, id, deleteHandler }) {
  return (
    <div>
      {name} {number} <button onClick={() => deleteHandler(id)}>delete</button>
    </div>
  );
}
