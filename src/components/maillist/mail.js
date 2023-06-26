import "./mail.css"
export const Mail=()=>{
    return(
        <>
        <div className="maillist">
            <h1 className="mailtitle">save time,save money</h1>
        <span>sign up and we'll send</span>
        <div className="mailcontainer">
            <input type="text" placeholder="enter your mail"></input>
            <button>subscribe</button>
        </div>
        </div>
        </>
    )
}