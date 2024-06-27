import phoneicon from "../images/phone-icon.png"
import mailicon from "../images/mail-icon.png"
// import one from "../images/1.jpg"


export default function Contact(props) {
    // console.log(props)
    return(
        <div className="contact-card">
            <img src={props.image} alt="img"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneicon} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailicon} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

// export default function Contact({image, name, phone, email}) {
//     // console.log(props)
//     return(
//         <div className="contact-card">
//             <img src={image} alt="img"/>
//             <h3>{name}</h3>
//             <div className="info-group">
//                 <img src={phoneicon} />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src={mailicon} />
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }


// const Person={
//     // image:{one},
//     name:"Mr. Whiskerson",
//     phone: "(212) 555-1234",
//     email: "mr.whiskaz@catnap.meow",
// }
// const {name , phone} = Person
// console.log(name,phone)