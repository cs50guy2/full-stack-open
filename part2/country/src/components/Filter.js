export default function Filter({ filterText, input, onChange }) {
  return (
    <div>
      {filterText} <input value={input} onChange={onChange} />
    </div>
  );
}
