

const Modal = ({score,  onReplay}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
        <div className="flex justify-start">
          <img src="/images/Bleu_piece.svg" className=" w-5 h-5" >
          </img>
          </div>
          <h2 className="text-4xl font-atheletic mb-5">Congratulations</h2>
          <div className="flex justify-end ">
            <img src="/images/yallow_piece.svg" className=" w-5 h-5" >
          </img>
          </div>
        <p className="text-3xl text-etic-bleu font-atheletic mb-4">Your Score is: <span className="font-semibold">{score}{300} </span></p>
        <button className="mb-4"
       onClick={onReplay}
        >
          <span className="text-3xl text-etic-red font-atheletic" > Replay</span> 
        </button>
      
          <div className="flex justify-center items-center">
          <img src="/images/etic.svg" className=" w-10 h-10" >
          </img>
          
       </div>
      </div>
    </div>
  )
}



export default Modal;