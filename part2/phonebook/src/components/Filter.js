export default function Filter({ input, onChange }) {
  return (
    <div>
      filter shown with <input value={input} onChange={onChange} />
    </div>
  );
}
