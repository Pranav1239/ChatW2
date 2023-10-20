
export default function SideBarmenu({onClick , isActive , children}) {

  return (
    <div
    onClick={onClick} 
    className={`${isActive ? "sidebar__menu--selected" : ""}`}>
        {children}
    </div>
  )
}
