export default function Workshop(props){
    return(
        <div className="bg-white py-20 px-10">
            <div className="max-w-5xl m-auto">
                <h1 className="heading-text text-3xl mb-5 text-cyan-500">The workshop</h1>
                <p className="text-black mb-5 body-text-2">Here are a few pictures of the workshop at Handsworth! We'll probably add more pictures of people's projects and such later on, but for now this is it :)</p>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the location of Handsworth"/>
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the location of Handsworth"/>
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the location of Handsworth"/>
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the location of Handsworth"/>
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the location of Handsworth"/>
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the location of Handsworth"/>
                </div>
            </div>
        </div>
    )
}