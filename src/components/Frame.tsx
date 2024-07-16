import '../styles/customStyle.css'

export default function Frame({children} : {children : any}){

    return (
        
        <div className="frame">
        <div className="card">
            {children}
        </div>
      </div>

    )

}