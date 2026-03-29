const UserCard = ({user}) => {
    const {firstName, lastName, photo} = user
    
    return (
        <div className="card bg-base-300 w-96 shadow-sm py-5">
            <figure>
                <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocKS9dHOpXpOdjSP8btiYiasBYKWff7GiaoVINOAX_p9yvzG0nE0=s96-c" 
                    alt="Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Ignore</button>
                     <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard