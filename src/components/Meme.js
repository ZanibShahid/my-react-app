import memesData from "./memesData"
export default function Meme(props){
    let url
    function getMemeImage(){
        
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        url = memeArray[randomNumber].url

        return(
            console.log("hi",randomNumber,url),
            
            <img src="https://picsum.photos/640/360" alt="" srcset="" />
        )
    }
    return(
        <div className="container my-5">
            <div className="form-row d-flex row g-5 mb-3">
                <div className="form-group col-md-6">
                    <label for="toptext">Top text</label>
                    <input type="text" class="form-control" id="toptext" placeholder="Shut up"/>
                </div>
                <div className="form-group col-md-6">
                    <label for="bottomtext">Bottom text</label>
                    <input type="text" className="form-control" id="bottomtext" placeholder="And take my money"/>
                </div>
            </div>
            <button type="submit" onClick={getMemeImage} className="btn text-light col-12" style={{backgroundImage:"linear-gradient(90.41deg, #672280 1.14%, #A626D3 100%)"}}>Get a new meme image <span><img style={{height:"15px"}} src="../images/paint.png" alt="" srcset="" /></span></button>
        </div>
    )
}