import useDogContext from "../hooks/use-dog-context";

function SingleDog() {
  // const { dogs } = useDogContext();
  // const dog = dogs.find((item) => {
  //   item.dogID === "140";
  // });
  return (
    <div>
      Enskild hund
      {/* {dog!.dogID} */}
    </div>
  );
}

export default SingleDog;
