import '../Css/cardTwo.css';
function CardTwo() {
    return (
        <>
            <div className='world-container'>
                <div className='image'>
                    <img src='https://images.pexels.com/photos/7412074/pexels-photo-7412074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>
                <div className='para'>
                    <p>Traveling the world is an enriching way to expand your knowledge of other cultures, find new work experiences, and gain unique educational insights. However, it can also be expensive, and unprepared travelers can soon find themselves in over their heads. World travel takes planning, frugality, and an independent spirit. Through careful planning both before your trip, and when you&apos;re on the road, you can have an enjoyable international travel experience</p>
                </div>
            </div>

            <div className="w-[300px] rounded-md border">
                <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-md object-cover"
                />

                <div className="p-4">
                    <h1 className="text-lg font-semibold">About Macbook</h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <button
                        type="button"
                        className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button>
                </div>
            </div>
        </>

    )
}
export default CardTwo

