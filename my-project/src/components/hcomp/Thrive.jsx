import Button from "./Button"

const Thrive = () => {
  return (
    <div className="pt-[80px] bg-[#F9EFE4] ">
        <p  className="text-[38px] text-center font-[500]"> Teams with clarity that thrive</p>
        <p className="text-[20px] text-center mt-4">Create Space for teams to do their best work</p>
        <Button
        text={"Sign me up"}
        className={"bg-[#176AE5] text-[white] p-3 rounded-full w-[190px] ml-[9rem] mt-11 sm:ml-[35rem]  "}
        />


    </div>
  )
}

export default Thrive