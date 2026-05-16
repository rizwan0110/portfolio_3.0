export default function SectionHead({ tag, title, count }) {
  return (
    <div className="s-head">
      <span className="s-head-comment">
        //{' '}<b>{tag}</b>
      </span>
      {title && <span className="s-head-title">{title}</span>}
      <span className="s-head-rule" />
      {count != null && (
        <span className="s-head-count">[{String(count).padStart(2, '0')}]</span>
      )}
    </div>
  )
}
