export default function ActionBtns(){
    return(
        <div className="flex absolute ml-[70rem] gap-5">
            <button>
                <box-icon type='solid' name='video-plus' color='#000000'></box-icon>
            </button>
            <button>
                <box-icon name='bell' type='solid' color='#000000'></box-icon>
            </button>
            <button>
                <box-icon type='solid' name='user-circle' color='#000000'></box-icon>
            </button>
        </div>
    )
}