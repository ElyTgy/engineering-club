import temp from "./images/temp.jpeg"

export default function Workshop(props){
    return(
        <div>
            <div className="h-screen bg-white py-20 px-10">
                <div className="max-w-5xl m-auto">
                    <h1 className="heading-text text-3xl mb-5 text-cyan-500">The workshop</h1>
                    <p className="text-black mb-5 body-text">In a few days we'll add projects of the workshop and different projects that have been created, but for now enjoy this random pic of a doughnut 🍩</p>
                    <div className="m-auto mt-16 ">
                        <img className="border-sm rounded-md" src={temp} alt="image of a donut"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
    <img className="border-sm rounded-md" src={temp} alt="image of the location of Handsworth"/>
</div>
*/