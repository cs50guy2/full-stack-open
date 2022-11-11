export default function PersonForm({
  name,
  number,
  nameHandler,
  numberHandler,
  buttonHandler,
}) {
  return (
    <form>
      <div>
        name: <input value={name} onChange={nameHandler} />
      </div>
      <div>
        number: <input value={number} onChange={numberHandler} />
      </div>
      <div>
        <button type="submit" onClick={buttonHandler}>
          add
        </button>
      </div>
    </form>
  );
}
