import { deleteDoc, doc } from "firebase/firestore";
import { IMG_URL } from "../utils/const/IMG_URL";
import { db } from "../../firebase";
import { Link } from "react-router-dom";


const ReadersCard = ({details}) => {
// console.log(details)

const {Author, Category, Discription, ImgVal, TitleOfBook, userId , Rating, bId} = details


const removeBook = async() =>{
await deleteDoc(doc(db, `sellers`, bId.stringValue))
}

  return (
    <div className="m-4">
      <ul class="flex flex-col divide-y divide-gray-200">
        <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div class="flex w-full space-x-2 sm:space-x-4">
            <img
              class="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
              src = {`${IMG_URL}${ImgVal.stringValue}?alt=media&token`}
              alt="book"
            />
            <div class="flex w-full flex-col justify-between pb-4">
              <div class="flex w-full justify-between space-x-2 pb-2">
                <div class="space-y-1">
                  <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                    {TitleOfBook.stringValue}
                  </h3>
                  <p class="text-sm">{Author.stringValue}</p>
                </div>
                <div class="text-right">
                  <p class="font-semibold text-gray-400">Rating: {Rating.stringValue}/5</p>
                </div>
              </div>
              <div class="flex divide-x text-sm">
                <button
                  type="button"
                  class="flex items-center space-x-2 px-2 py-1 pl-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <Link to={'/'}><span onClick={removeBook}>Remove</span></Link>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ReadersCard;
